import path from 'node:path';
import { PARSER_ABI, PARSER_LIMITS, PARSER_NODE_POLICIES,
  type TsqlParserNodeKind, type TsqlParserEdgeName, type TsqlParserAttributeName,
} from './parser-projection.v1.generated.js';
import { getBridgeNamespace, getFunctionProperty, loadWasmRuntime } from './wasm-runtime.js';

declare const __scriptdomBridgeModuleDirectory: string;

export type { TsqlParserNodeKind, TsqlParserEdgeName, TsqlParserAttributeName };
export type CreateTsqlParserOptions = { appBundlePath?: string };
export type TsqlParseOptions = { initialQuotedIdentifiers?: boolean };
export type TsqlParseSpan = { offset: number; length: number; line: number; column: number };
export type TsqlParseAttribute =
  | { name: TsqlParserAttributeName; kind: 'string' | 'enum'; value: string | null }
  | { name: TsqlParserAttributeName; kind: 'boolean'; value: boolean | null }
  | { name: TsqlParserAttributeName; kind: 'integer'; value: number | null };
export type TsqlParseNode = {
  id: number;
  kind: TsqlParserNodeKind;
  parentId: number | null;
  pathFromParent: [] | [TsqlParserEdgeName] | [TsqlParserEdgeName, string];
  span: TsqlParseSpan | null;
  attributes: TsqlParseAttribute[];
};
export type TsqlParseError = { number: number; span: TsqlParseSpan | null };
export type TsqlParseFailure = 'parse-error' | 'resource-limit' | 'unsupported-node' | 'internal-error';
export type TsqlParseResult = {
  parser: typeof PARSER_ABI.parser;
  projectionVersion: typeof PARSER_ABI.projectionVersion;
  failure: TsqlParseFailure | null;
  nodes: TsqlParseNode[];
  errors: TsqlParseError[];
};
export type TsqlParser = { parse(sql: string, options?: TsqlParseOptions): TsqlParseResult };

type AttributePolicy = {
  name: string;
  kind: string;
  nullable: boolean;
  values?: readonly string[];
  flags?: boolean;
};
type NodePolicy = {
  kind: string;
  edges: readonly { name: string; array: boolean; kinds: readonly string[] }[];
  attributes: readonly AttributePolicy[];
};
const policies = new Map<string, NodePolicy>(PARSER_NODE_POLICIES.map((policy) => [policy.kind, policy]));
const failures = new Set(['parse-error', 'resource-limit', 'unsupported-node', 'internal-error']);
const invalidUtf16 = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/;

export async function createTsqlParser(options: CreateTsqlParserOptions = {}): Promise<TsqlParser> {
  const values = readOptions(options, ['appBundlePath']);
  if (values.appBundlePath !== undefined && typeof values.appBundlePath !== 'string') {
    throw new TypeError('createTsqlParser appBundlePath must be a string');
  }
  return loadWasmRuntime({
    appBundlePath: path.resolve(values.appBundlePath as string ?? path.join(
      __scriptdomBridgeModuleDirectory, '../vendor/scriptdom-parser-wasm/AppBundle',
    )),
    bundleKind: 'parser',
    missingBundleMessage: () => 'Published parser AppBundle was not found. Run "npm run build:wasm".',
    createRuntime(exports, { poison }) {
      const bridge = getBridgeNamespace(exports).TsqlParser;
      requireObject(bridge);
      const abiExport = getFunctionProperty(bridge, 'GetParserAbiJson', 'TsqlParser.GetParserAbiJson');
      const parseExport = getFunctionProperty(bridge, 'ParseJson', 'TsqlParser.ParseJson');
      let poisoned = false;
      function invoke(callback: (...args: string[]) => unknown, args: string[]): unknown {
        try {
          const json = callback(...args);
          if (typeof json !== 'string' || json.length > PARSER_LIMITS.envelopeUtf16CodeUnits ||
              Buffer.byteLength(json, 'utf8') > PARSER_LIMITS.envelopeUtf8Bytes) invalid();
          return JSON.parse(json);
        } catch {
          poisoned = true;
          poison();
          throw new Error('Invalid ScriptDOM parser response');
        }
      }
      const abi = invoke(abiExport, []);
      requireObject(abi);
      exactKeys(abi, Object.keys(PARSER_ABI));
      for (const [name, value] of Object.entries(PARSER_ABI)) {
        if (abi[name] !== value) throw new Error('Incompatible ScriptDOM parser ABI');
      }
      return {
        parse(sql: string, options: TsqlParseOptions = {}): TsqlParseResult {
          if (poisoned) throw new Error('ScriptDOM parser runtime failed');
          if (typeof sql !== 'string' || invalidUtf16.test(sql)) {
            throw new TypeError('SQL input must be a well-formed UTF-16 string');
          }
          if (sql.length > PARSER_LIMITS.sqlUtf16CodeUnits) {
            throw new RangeError('SQL input exceeds the ScriptDOM parser size limit');
          }
          const values = readOptions(options, ['initialQuotedIdentifiers']);
          const quoted = values.initialQuotedIdentifiers === undefined ? false : values.initialQuotedIdentifiers;
          if (typeof quoted !== 'boolean') throw new TypeError('initialQuotedIdentifiers must be a boolean');
          const result = invoke(parseExport, [sql, String(quoted)]);
          try {
            return validateResult(result, sql);
          } catch {
            poisoned = true;
            poison();
            throw new Error('Invalid ScriptDOM parser response');
          }
        },
      };
    },
  });
}

function validateResult(value: unknown, sql: string): TsqlParseResult {
  requireObject(value);
  exactKeys(value, ['parser', 'projectionVersion', 'failure', 'nodes', 'errors']);
  if (value.parser !== PARSER_ABI.parser || value.projectionVersion !== PARSER_ABI.projectionVersion) invalid();
  if (value.failure !== null && (typeof value.failure !== 'string' || !failures.has(value.failure))) invalid();
  requireArray(value.nodes, PARSER_LIMITS.nodes);
  requireArray(value.errors, PARSER_LIMITS.parseErrors);
  if (value.failure === null) {
    if (value.nodes.length === 0 || value.errors.length !== 0) invalid();
  } else if (value.nodes.length !== 0 ||
      (value.failure === 'parse-error' ? value.errors.length === 0 : value.errors.length !== 0)) invalid();

  const lineStarts = [0];
  for (let offset = 0; offset < sql.length; offset++) {
    if (sql[offset] === '\r') {
      if (sql[offset + 1] === '\n') offset++;
      lineStarts.push(offset + 1);
    } else if (sql[offset] === '\n') lineStarts.push(offset + 1);
  }
  const nodes: TsqlParseNode[] = [];
  const ancestors: number[] = [];
  const usedEdges = new Set<string>();
  for (const item of value.nodes) {
    requireObject(item);
    exactKeys(item, ['id', 'kind', 'parentId', 'pathFromParent', 'span', 'attributes']);
    if (item.id !== nodes.length || typeof item.kind !== 'string') invalid();
    const policy = policies.get(item.kind);
    if (!policy) invalid();
    requireArray(item.pathFromParent, 2);
    if (!item.pathFromParent.every((segment) => typeof segment === 'string')) invalid();
    if (nodes.length === 0) {
      if (item.parentId !== null || item.pathFromParent.length !== 0 || item.kind !== 'TSqlScript') invalid();
    } else {
      integer(item.parentId, 0, nodes.length - 1);
      while (ancestors.length && ancestors[ancestors.length - 1] !== item.parentId) ancestors.pop();
      if (!ancestors.length) invalid();
      const parent = nodes[item.parentId];
      const edgeName = item.pathFromParent[0];
      const edge = policies.get(parent.kind)?.edges.find((candidate) => candidate.name === edgeName);
      if (!edge || !edge.kinds.includes(item.kind) || item.pathFromParent.length !== (edge.array ? 2 : 1)) invalid();
      if (edge.array && !/^(0|[1-9][0-9]*)$/.test(item.pathFromParent[1] as string)) invalid();
      if (edge.array) integer(Number(item.pathFromParent[1]), 0, PARSER_LIMITS.nodes - 1);
      const edgeKey = `${item.parentId}:${item.pathFromParent.join(':')}`;
      if (usedEdges.has(edgeKey)) invalid();
      usedEdges.add(edgeKey);
    }
    if (ancestors.length > PARSER_LIMITS.traversalDepth) invalid();
    ancestors.push(nodes.length);
    requireArray(item.attributes, policy.attributes.length);
    if (item.attributes.length !== policy.attributes.length) invalid();
    const attributes: TsqlParseAttribute[] = [];
    const seen = new Set<string>();
    for (const attribute of item.attributes) {
      requireObject(attribute);
      exactKeys(attribute, ['name', 'kind', 'value']);
      const expected = policy.attributes.find((candidate) => candidate.name === attribute.name);
      if (!expected || seen.has(expected.name) || attribute.kind !== expected.kind) invalid();
      seen.add(expected.name);
      const scalar = attribute.value;
      if (scalar === null) {
        if (!expected.nullable) invalid();
      } else if (expected.kind === 'boolean') {
        if (typeof scalar !== 'boolean') invalid();
      } else if (expected.kind === 'integer') {
        integer(scalar, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
      } else {
        if (typeof scalar !== 'string' || scalar.length > PARSER_LIMITS.stringUtf16CodeUnits || invalidUtf16.test(scalar)) invalid();
        if (expected.kind === 'enum' && !expected.values?.includes(scalar)) {
          const parts = scalar.split(', ');
          if (!expected.flags || parts.length < 2 || new Set(parts).size !== parts.length ||
              !parts.every((part) => expected.values?.includes(part))) invalid();
        }
      }
      attributes.push({ name: expected.name, kind: expected.kind, value: scalar } as TsqlParseAttribute);
    }
    nodes.push({
      id: nodes.length, kind: item.kind as TsqlParserNodeKind, parentId: item.parentId as number | null,
      pathFromParent: [...item.pathFromParent] as TsqlParseNode['pathFromParent'],
      span: validateSpan(item.span, sql.length, lineStarts), attributes,
    });
  }
  const errors = value.errors.map((error): TsqlParseError => {
    requireObject(error);
    exactKeys(error, ['number', 'span']);
    integer(error.number, 0, Number.MAX_SAFE_INTEGER);
    const span = validateSpan(error.span, sql.length, lineStarts);
    if (span && span.length !== 0) invalid();
    return { number: error.number, span };
  });
  return { parser: PARSER_ABI.parser, projectionVersion: PARSER_ABI.projectionVersion,
    failure: value.failure as TsqlParseFailure | null, nodes, errors };
}

function validateSpan(value: unknown, sqlLength: number, lineStarts: number[]): TsqlParseSpan | null {
  if (value === null) return null;
  requireObject(value);
  exactKeys(value, ['offset', 'length', 'line', 'column']);
  integer(value.offset, 0, sqlLength);
  integer(value.length, 0, sqlLength - value.offset);
  integer(value.line, 1, lineStarts.length);
  integer(value.column, 1, sqlLength + 1);
  if (lineStarts[value.line - 1] + value.column - 1 !== value.offset ||
      (value.line < lineStarts.length && value.offset >= lineStarts[value.line])) invalid();
  return { offset: value.offset, length: value.length, line: value.line, column: value.column };
}

function readOptions(value: unknown, allowed: string[]): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new TypeError('Parser options must be an object');
  const result: Record<string, unknown> = {};
  for (const key of Reflect.ownKeys(value)) {
    if (typeof key !== 'string' || !allowed.includes(key)) throw new TypeError('Unknown parser option');
    const descriptor = Object.getOwnPropertyDescriptor(value, key);
    if (!descriptor || !Object.hasOwn(descriptor, 'value')) throw new TypeError('Parser options must be data properties');
    result[key] = descriptor.value;
  }
  return result;
}

function requireObject(value: unknown): asserts value is Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) invalid();
}
function requireArray(value: unknown, max: number): asserts value is unknown[] {
  if (!Array.isArray(value) || value.length > max) invalid();
}
function exactKeys(value: Record<string, unknown>, keys: string[]) {
  if (Object.keys(value).length !== keys.length || !keys.every((key) => Object.hasOwn(value, key))) invalid();
}
function integer(value: unknown, min: number, max: number): asserts value is number {
  if (typeof value !== 'number' || !Number.isSafeInteger(value) || value < min || value > max) invalid();
}
function invalid(): never {
  throw new Error('Invalid ScriptDOM parser response');
}
