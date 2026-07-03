import path from 'node:path';

import {
  INTROSPECTOR_PROJECTION_ABI,
  TSQL_IDENTIFIER_STATES,
  TSQL_INSPECT_COORDINATE_STATES,
  TSQL_INSPECT_TOKEN_TYPES,
  TSQL_STRUCTURAL_ATTRIBUTE_KINDS,
  TSQL_STRUCTURAL_ATTRIBUTE_NAMES,
  TSQL_STRUCTURAL_NODE_KINDS,
  type TsqlIdentifierState,
  type TsqlInspectCoordinateState,
  type TsqlInspectTokenType,
  type TsqlStructuralAttributeKind,
  type TsqlStructuralAttributeName,
  type TsqlStructuralNodeKind,
} from './introspector-projection.v1.generated.js';
import {
  assertInteger,
  assertNonNegativeInteger,
  assertObject,
  assertString,
} from './result-validation.js';
import { getBridgeNamespace, getFunctionProperty, loadWasmRuntime } from './wasm-runtime.js';

declare const __scriptdomBridgeModuleDirectory: string;

export type {
  TsqlIdentifierState,
  TsqlInspectCoordinateState,
  TsqlInspectTokenType,
  TsqlStructuralAttributeKind,
  TsqlStructuralAttributeName,
  TsqlStructuralNodeKind,
};

export type CreateTsqlIntrospectorOptions = {
  appBundlePath?: string;
};

export type TsqlInspectOptions = {
  includeSpans?: boolean;
  includeTokens?: boolean;
};

export type TsqlInspectSpan = {
  offset: number;
  length: number;
  line: number;
  column: number;
};

export type TsqlStructuralIdentifierAttribute =
  | {
      name: TsqlStructuralAttributeName;
      kind: 'identifier';
      state: 'present';
      value: string;
    }
  | {
      name: TsqlStructuralAttributeName;
      kind: 'identifier';
      state: 'redacted';
      profile: typeof INTROSPECTOR_PROJECTION_ABI.identifierRedactionProfile;
      reason: 'literal-origin' | 'secret-pattern';
    };

export type TsqlStructuralScalarAttribute = {
  name: TsqlStructuralAttributeName;
  kind: Exclude<TsqlStructuralAttributeKind, 'identifier'>;
  value: string | boolean;
};

export type TsqlStructuralAttribute =
  | TsqlStructuralIdentifierAttribute
  | TsqlStructuralScalarAttribute;

export type TsqlStructuralNode = {
  id: number;
  kind: TsqlStructuralNodeKind;
  parentId: number | null;
  pathFromParent: string[];
  span?: TsqlInspectSpan;
  attributes: TsqlStructuralAttribute[];
};

export type TsqlInspectToken = {
  type: TsqlInspectTokenType;
  offset: number;
  length: number;
  line: number;
  column: number;
};

export type TsqlInspectLocationError = {
  number: number;
  offset: number;
  line: number;
  column: number;
  coordinateState: TsqlInspectCoordinateState;
};

export type TsqlInspectResult = {
  failed: boolean;
  parser: typeof INTROSPECTOR_PROJECTION_ABI.parser;
  projectionVersion: typeof INTROSPECTOR_PROJECTION_ABI.projectionVersion;
  nodes: TsqlStructuralNode[];
  tokens?: TsqlInspectToken[];
  errors: TsqlInspectLocationError[];
};

export type TsqlIntrospector = {
  inspect(sql: string, options?: TsqlInspectOptions): TsqlInspectResult;
};

type LoadedTsqlIntrospectorRuntime = {
  inspect(sql: string, options?: TsqlInspectOptions): TsqlInspectResult;
};

type NormalizedInspectOptions = {
  includeSpans: boolean;
  includeTokens: boolean;
  privateOptionsJson: '{}' | '{"includeSpans":true}' | '{"includeTokens":true}' | '{"includeSpans":true,"includeTokens":true}';
};

const defaultIntrospectorAppBundlePath = path.resolve(
  __scriptdomBridgeModuleDirectory,
  '../vendor/scriptdom-introspector-wasm/AppBundle',
);

const createOptionKeys = new Set<PropertyKey>(['appBundlePath']);
const inspectOptionKeys = new Set<PropertyKey>(['includeSpans', 'includeTokens']);
const abiKeys = new Set([
  'parser',
  'projectionVersion',
  'manifestSha256',
  'resultSchemaSha256',
  'allowlistSha256',
]);
const resultKeysWithoutTokens = new Set(['failed', 'parser', 'projectionVersion', 'nodes', 'errors']);
const resultKeysWithTokens = new Set([
  'failed',
  'parser',
  'projectionVersion',
  'nodes',
  'tokens',
  'errors',
]);
const nodeRequiredKeys = new Set(['id', 'kind', 'parentId', 'pathFromParent', 'attributes']);
const nodeAllowedKeys = new Set([
  'id',
  'kind',
  'parentId',
  'pathFromParent',
  'span',
  'attributes',
]);
const spanKeys = new Set(['offset', 'length', 'line', 'column']);
const tokenKeys = new Set(['type', 'offset', 'length', 'line', 'column']);
const errorKeys = new Set(['number', 'offset', 'line', 'column', 'coordinateState']);
const identifierPresentAttributeKeys = new Set(['name', 'kind', 'state', 'value']);
const identifierRedactedAttributeKeys = new Set(['name', 'kind', 'state', 'profile', 'reason']);
const scalarAttributeKeys = new Set(['name', 'kind', 'value']);
const nodeKindSet = new Set<string>(TSQL_STRUCTURAL_NODE_KINDS);
const attributeNameSet = new Set<string>(TSQL_STRUCTURAL_ATTRIBUTE_NAMES);
const attributeKindSet = new Set<string>(TSQL_STRUCTURAL_ATTRIBUTE_KINDS);
const identifierStateSet = new Set<string>(TSQL_IDENTIFIER_STATES);
const coordinateStateSet = new Set<string>(TSQL_INSPECT_COORDINATE_STATES);
const tokenTypeSet = new Set<number>(TSQL_INSPECT_TOKEN_TYPES);
const redactedReasons = new Set(['literal-origin', 'secret-pattern']);

export async function createTsqlIntrospector(
  options: CreateTsqlIntrospectorOptions = {},
): Promise<TsqlIntrospector> {
  const normalizedOptions = normalizeCreateOptions(options);
  const runtime = await loadTsqlIntrospectorRuntime(normalizedOptions);

  return {
    inspect: runtime.inspect,
  };
}

async function loadTsqlIntrospectorRuntime(
  options: CreateTsqlIntrospectorOptions = {},
): Promise<LoadedTsqlIntrospectorRuntime> {
  return loadWasmRuntime({
    appBundlePath: path.resolve(options.appBundlePath ?? defaultIntrospectorAppBundlePath),
    bundleKind: 'introspector',
    missingBundleMessage: (dotnetJsPath) =>
      `Published introspector dotnet.js was not found at ${dotnetJsPath}. Run "npm run build:wasm" before using the package from source.`,
    createRuntime(assemblyExports, { poison }) {
      const bridgeNamespace = getBridgeNamespace(assemblyExports);
      const introspector = bridgeNamespace.TsqlIntrospector;

      if (!introspector || typeof introspector !== 'object' || Array.isArray(introspector)) {
        throw new Error('Invalid ScriptDOM WASM export: TsqlIntrospector');
      }

      const getAbiJson = getFunctionProperty(
        introspector as Record<string, unknown>,
        'GetIntrospectorAbiJson',
        'TsqlIntrospector.GetIntrospectorAbiJson',
      );
      const inspectJson = getFunctionProperty(
        introspector as Record<string, unknown>,
        'InspectJson',
        'TsqlIntrospector.InspectJson',
      );

      validateIntrospectorAbi(parseJsonExport(callStringExport(getAbiJson, [], poison)));

      return {
        inspect(sql: string, options?: TsqlInspectOptions) {
          validateSqlInput(sql);
          const normalizedInspectOptions = normalizeInspectOptions(options);
          const rawJson = callStringExport(
            inspectJson,
            [sql, normalizedInspectOptions.privateOptionsJson],
            poison,
          );

          return validateInspectResult(
            sql,
            parseJsonExport(rawJson),
            normalizedInspectOptions,
          );
        },
      };
    },
  });
}

function callStringExport(
  callback: (...args: string[]) => unknown,
  args: string[],
  poison: () => void,
): string {
  let value: unknown;

  try {
    value = callback(...args);
  } catch {
    poison();
    throw new Error('ScriptDOM introspector runtime failed');
  }

  if (typeof value !== 'string') {
    throw new Error('Invalid ScriptDOM WASM export: introspector JSON result');
  }

  if (
    Buffer.byteLength(value, 'utf8') >
      INTROSPECTOR_PROJECTION_ABI.limits.serializedEnvelopeUtf8Bytes ||
    value.length > INTROSPECTOR_PROJECTION_ABI.limits.projectedOutputUtf16CodeUnits
  ) {
    throw new Error('Invalid ScriptDOM result: introspector JSON envelope');
  }

  return value;
}

function parseJsonExport(rawJson: string): unknown {
  try {
    return JSON.parse(rawJson) as unknown;
  } catch {
    throw new Error('Invalid ScriptDOM result: introspector JSON');
  }
}

function validateIntrospectorAbi(value: unknown) {
  assertObject(value, 'introspector ABI');
  assertExactKeysLocal(value, abiKeys, 'introspector ABI keys');

  if (
    value.parser !== INTROSPECTOR_PROJECTION_ABI.parser ||
    value.projectionVersion !== INTROSPECTOR_PROJECTION_ABI.projectionVersion ||
    value.manifestSha256 !== INTROSPECTOR_PROJECTION_ABI.manifestSha256 ||
    value.resultSchemaSha256 !== INTROSPECTOR_PROJECTION_ABI.resultSchemaSha256 ||
    value.allowlistSha256 !== INTROSPECTOR_PROJECTION_ABI.allowlistSha256
  ) {
    throw new Error('Incompatible ScriptDOM introspector ABI');
  }
}

function validateSqlInput(sql: string) {
  if (typeof sql !== 'string') {
    throw new TypeError('SQL input must be a string');
  }

  if (sql.length > INTROSPECTOR_PROJECTION_ABI.limits.sqlUtf16CodeUnits) {
    throw new RangeError('SQL input exceeds the ScriptDOM introspector size limit');
  }

  if (!isWellFormedUtf16(sql)) {
    throw new TypeError('SQL input must be well-formed UTF-16');
  }
}

function normalizeCreateOptions(
  options: CreateTsqlIntrospectorOptions,
): CreateTsqlIntrospectorOptions {
  if (options === null || typeof options !== 'object' || Array.isArray(options)) {
    throw new TypeError('createTsqlIntrospector options must be an object');
  }

  assertAllowedOwnKeys(options, createOptionKeys, 'createTsqlIntrospector options');
  const appBundlePath = readOwnDataProperty(options, 'appBundlePath', 'createTsqlIntrospector');

  if (appBundlePath !== undefined && typeof appBundlePath !== 'string') {
    throw new TypeError('createTsqlIntrospector appBundlePath must be a string');
  }

  return { appBundlePath };
}

function normalizeInspectOptions(options: TsqlInspectOptions | undefined): NormalizedInspectOptions {
  if (options === undefined) {
    return {
      includeSpans: false,
      includeTokens: false,
      privateOptionsJson: '{}',
    };
  }

  if (options === null || typeof options !== 'object' || Array.isArray(options)) {
    throw new TypeError('T-SQL inspect options must be an object');
  }

  assertAllowedOwnKeys(options, inspectOptionKeys, 'T-SQL inspect options');
  const includeSpans = readOwnDataProperty(options, 'includeSpans', 'T-SQL inspect');
  const includeTokens = readOwnDataProperty(options, 'includeTokens', 'T-SQL inspect');

  if (includeSpans !== undefined && typeof includeSpans !== 'boolean') {
    throw new TypeError('T-SQL inspect includeSpans must be a boolean');
  }

  if (includeTokens !== undefined && typeof includeTokens !== 'boolean') {
    throw new TypeError('T-SQL inspect includeTokens must be a boolean');
  }

  const normalizedIncludeSpans = includeSpans ?? false;
  const normalizedIncludeTokens = includeTokens ?? false;

  if (normalizedIncludeSpans && normalizedIncludeTokens) {
    return {
      includeSpans: true,
      includeTokens: true,
      privateOptionsJson: '{"includeSpans":true,"includeTokens":true}',
    };
  }

  if (normalizedIncludeSpans) {
    return {
      includeSpans: true,
      includeTokens: false,
      privateOptionsJson: '{"includeSpans":true}',
    };
  }

  if (normalizedIncludeTokens) {
    return {
      includeSpans: false,
      includeTokens: true,
      privateOptionsJson: '{"includeTokens":true}',
    };
  }

  return {
    includeSpans: false,
    includeTokens: false,
    privateOptionsJson: '{}',
  };
}

function validateInspectResult(
  sql: string,
  value: unknown,
  options: NormalizedInspectOptions,
): TsqlInspectResult {
  assertObject(value, 'inspect result');
  assertExactKeysLocal(
    value,
    options.includeTokens ? resultKeysWithTokens : resultKeysWithoutTokens,
    'inspect result keys',
  );

  if (typeof value.failed !== 'boolean') {
    throw new Error('Invalid ScriptDOM result: inspect result failed');
  }

  if (
    value.parser !== INTROSPECTOR_PROJECTION_ABI.parser ||
    value.projectionVersion !== INTROSPECTOR_PROJECTION_ABI.projectionVersion
  ) {
    throw new Error('Invalid ScriptDOM result: inspect result ABI');
  }

  const nodes = validateArray(value.nodes, 'nodes', INTROSPECTOR_PROJECTION_ABI.limits.nodes, (item, index) =>
    validateNode(sql, item, index, options),
  );
  const errors = validateArray(
    value.errors,
    'errors',
    INTROSPECTOR_PROJECTION_ABI.limits.parseErrors,
    (item, index) => validateInspectError(sql, item, `errors[${index}]`),
  );
  const result: TsqlInspectResult = {
    failed: value.failed,
    parser: INTROSPECTOR_PROJECTION_ABI.parser,
    projectionVersion: INTROSPECTOR_PROJECTION_ABI.projectionVersion,
    nodes,
    errors,
  };

  if (options.includeTokens) {
    result.tokens = validateArray(
      value.tokens,
      'tokens',
      INTROSPECTOR_PROJECTION_ABI.limits.tokens,
      (item, index) => validateToken(sql, item, `tokens[${index}]`),
    );
  }

  return result;
}

function validateNode(
  sql: string,
  value: unknown,
  index: number,
  options: NormalizedInspectOptions,
): TsqlStructuralNode {
  assertObject(value, `nodes[${index}]`);
  assertRequiredAllowedKeysLocal(
    value,
    nodeRequiredKeys,
    nodeAllowedKeys,
    `nodes[${index}] keys`,
  );
  assertNonNegativeInteger(value.id, `nodes[${index}].id`);

  if (value.id !== index) {
    throw new Error('Invalid ScriptDOM result: node id order');
  }

  if (!nodeKindSet.has(String(value.kind))) {
    throw new Error('Invalid ScriptDOM result: node kind');
  }

  if (value.parentId !== null) {
    assertNonNegativeInteger(value.parentId, `nodes[${index}].parentId`);
    if (value.parentId >= value.id) {
      throw new Error('Invalid ScriptDOM result: node parent');
    }
  }

  if (!Array.isArray(value.pathFromParent)) {
    throw new Error('Invalid ScriptDOM result: node path');
  }

  const pathFromParent = value.pathFromParent.map((segment, segmentIndex) => {
    assertString(segment, `nodes[${index}].pathFromParent[${segmentIndex}]`);
    return segment;
  });

  const attributes = validateArray(
    value.attributes,
    `nodes[${index}].attributes`,
    Number.MAX_SAFE_INTEGER,
    (item, attributeIndex) =>
      validateAttribute(item, `nodes[${index}].attributes[${attributeIndex}]`),
  );
  const node: TsqlStructuralNode = {
    id: value.id,
    kind: value.kind as TsqlStructuralNodeKind,
    parentId: value.parentId,
    pathFromParent,
    attributes,
  };

  if (Object.hasOwn(value, 'span')) {
    if (!options.includeSpans) {
      throw new Error('Invalid ScriptDOM result: unexpected node span');
    }

    node.span = validateSpan(sql, value.span, `nodes[${index}].span`);
  }

  return node;
}

function validateAttribute(value: unknown, fieldName: string): TsqlStructuralAttribute {
  assertObject(value, fieldName);

  if (!attributeNameSet.has(String(value.name))) {
    throw new Error('Invalid ScriptDOM result: structural attribute name');
  }

  if (!attributeKindSet.has(String(value.kind))) {
    throw new Error('Invalid ScriptDOM result: structural attribute kind');
  }

  if (value.kind === 'identifier') {
    if (!identifierStateSet.has(String(value.state))) {
      throw new Error('Invalid ScriptDOM result: structural identifier state');
    }

    if (value.state === 'present') {
      assertExactKeysLocal(value, identifierPresentAttributeKeys, `${fieldName} keys`);
      assertString(value.value, `${fieldName}.value`);

      if (isSensitiveIdentifier(value.value)) {
        throw new Error('Invalid ScriptDOM result: unredacted sensitive identifier');
      }

      return {
        name: value.name as TsqlStructuralAttributeName,
        kind: 'identifier',
        state: 'present',
        value: value.value,
      };
    }

    assertExactKeysLocal(value, identifierRedactedAttributeKeys, `${fieldName} keys`);
    if (
      value.profile !== INTROSPECTOR_PROJECTION_ABI.identifierRedactionProfile ||
      !redactedReasons.has(String(value.reason))
    ) {
      throw new Error('Invalid ScriptDOM result: structural identifier redaction');
    }

    return {
      name: value.name as TsqlStructuralAttributeName,
      kind: 'identifier',
      state: 'redacted',
      profile: INTROSPECTOR_PROJECTION_ABI.identifierRedactionProfile,
      reason: value.reason as 'literal-origin' | 'secret-pattern',
    };
  }

  assertExactKeysLocal(value, scalarAttributeKeys, `${fieldName} keys`);
  if (typeof value.value !== 'string' && typeof value.value !== 'boolean') {
    throw new Error('Invalid ScriptDOM result: structural scalar attribute value');
  }

  return {
    name: value.name as TsqlStructuralAttributeName,
    kind: value.kind as Exclude<TsqlStructuralAttributeKind, 'identifier'>,
    value: value.value,
  };
}

function validateSpan(sql: string, value: unknown, fieldName: string): TsqlInspectSpan {
  assertObject(value, fieldName);
  assertExactKeysLocal(value, spanKeys, `${fieldName} keys`);
  assertNonNegativeInteger(value.offset, `${fieldName}.offset`);
  assertPositiveInteger(value.length, `${fieldName}.length`);
  assertPositiveInteger(value.line, `${fieldName}.line`);
  assertPositiveInteger(value.column, `${fieldName}.column`);

  if (value.offset + value.length > sql.length) {
    throw new Error('Invalid ScriptDOM result: span range');
  }

  return {
    offset: value.offset,
    length: value.length,
    line: value.line,
    column: value.column,
  };
}

function validateToken(sql: string, value: unknown, fieldName: string): TsqlInspectToken {
  assertObject(value, fieldName);
  assertExactKeysLocal(value, tokenKeys, `${fieldName} keys`);
  assertNonNegativeInteger(value.type, `${fieldName}.type`);
  assertNonNegativeInteger(value.offset, `${fieldName}.offset`);
  assertPositiveInteger(value.length, `${fieldName}.length`);
  assertPositiveInteger(value.line, `${fieldName}.line`);
  assertPositiveInteger(value.column, `${fieldName}.column`);

  if (!tokenTypeSet.has(value.type)) {
    throw new Error('Invalid ScriptDOM result: token type');
  }

  if (value.offset + value.length > sql.length) {
    throw new Error('Invalid ScriptDOM result: token range');
  }

  return {
    type: value.type as TsqlInspectTokenType,
    offset: value.offset,
    length: value.length,
    line: value.line,
    column: value.column,
  };
}

function validateInspectError(
  sql: string,
  value: unknown,
  fieldName: string,
): TsqlInspectLocationError {
  assertObject(value, fieldName);
  assertExactKeysLocal(value, errorKeys, `${fieldName} keys`);
  assertInteger(value.number, `${fieldName}.number`);
  assertNonNegativeInteger(value.offset, `${fieldName}.offset`);
  assertPositiveInteger(value.line, `${fieldName}.line`);
  assertPositiveInteger(value.column, `${fieldName}.column`);

  if (!coordinateStateSet.has(String(value.coordinateState))) {
    throw new Error('Invalid ScriptDOM result: error coordinate state');
  }

  if (value.coordinateState === 'available' && value.offset > sql.length) {
    throw new Error('Invalid ScriptDOM result: location error range');
  }

  if (
    value.coordinateState === 'unavailable' &&
    (value.offset !== 0 || value.line !== 1 || value.column !== 1)
  ) {
    throw new Error('Invalid ScriptDOM result: unavailable location error');
  }

  return {
    number: value.number,
    offset: value.offset,
    line: value.line,
    column: value.column,
    coordinateState: value.coordinateState as TsqlInspectCoordinateState,
  };
}

function validateArray<T>(
  value: unknown,
  fieldName: string,
  maxItems: number,
  validateItem: (value: unknown, index: number) => T,
): T[] {
  if (!Array.isArray(value)) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }

  if (value.length > maxItems) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName} limit`);
  }

  return value.map((item, index) => validateItem(item, index));
}

function assertPositiveInteger(value: unknown, fieldName: string): asserts value is number {
  assertInteger(value, fieldName);

  if (value <= 0) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}

function assertExactKeysLocal(
  value: Record<string, unknown>,
  expectedKeys: Set<string>,
  fieldName: string,
) {
  const actualKeys = Object.keys(value);
  if (
    actualKeys.length !== expectedKeys.size ||
    actualKeys.some((key) => !expectedKeys.has(key))
  ) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}

function assertRequiredAllowedKeysLocal(
  value: Record<string, unknown>,
  requiredKeys: Set<string>,
  allowedKeys: Set<string>,
  fieldName: string,
) {
  const actualKeys = Object.keys(value);
  if (
    [...requiredKeys].some((key) => !Object.hasOwn(value, key)) ||
    actualKeys.some((key) => !allowedKeys.has(key))
  ) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}

function assertAllowedOwnKeys(
  options: object,
  allowedKeys: Set<PropertyKey>,
  fieldName: string,
) {
  let ownKeys: PropertyKey[];

  try {
    ownKeys = Reflect.ownKeys(options);
  } catch {
    throw new TypeError(`${fieldName} could not be validated`);
  }

  if (ownKeys.some((key) => !allowedKeys.has(key))) {
    throw new TypeError(`${fieldName} contain an unsupported key`);
  }
}

function readOwnDataProperty<T extends object>(
  options: T,
  key: keyof T & string,
  fieldName: string,
): unknown {
  let descriptor: PropertyDescriptor | undefined;

  try {
    descriptor = Object.getOwnPropertyDescriptor(options, key);
  } catch {
    throw new TypeError(`${fieldName} options could not be validated`);
  }

  if (!descriptor) {
    return undefined;
  }

  if (!Object.hasOwn(descriptor, 'value')) {
    throw new TypeError(`${fieldName} options must use data properties`);
  }

  return descriptor.value;
}

function isWellFormedUtf16(value: string) {
  for (let index = 0; index < value.length; index += 1) {
    const code = value.charCodeAt(index);

    if (code >= 0xd800 && code <= 0xdbff) {
      const next = value.charCodeAt(index + 1);
      if (next < 0xdc00 || next > 0xdfff) {
        return false;
      }

      index += 1;
      continue;
    }

    if (code >= 0xdc00 && code <= 0xdfff) {
      return false;
    }
  }

  return true;
}

function isSensitiveIdentifier(value: string) {
  const lowerValue = value.toLocaleLowerCase('en-US');

  return [
    'secret',
    'password',
    'passwd',
    'pwd',
    'token',
    'apikey',
    'api_key',
    'credential',
    'privatekey',
    'private_key',
  ].some((fragment) => lowerValue.includes(fragment));
}
