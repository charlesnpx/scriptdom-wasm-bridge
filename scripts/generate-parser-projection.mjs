import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { discoverScriptDom, generateChildCase } from './generate-introspector-projection.mjs';

const root = path.resolve(import.meta.dirname, '..');
const manifest = JSON.parse(await fs.readFile(path.join(root, 'src/parser-projection.v1.json'), 'utf8'));
const discovery = await discoverScriptDom(manifest.scriptDomPackageVersion);
const policies = discovery.Nodes.map((node) => ({
  kind: node.Name,
  edges: node.Edges.map((edge) => ({ name: edge.Name, array: edge.Kind === 'array', kinds: edge.ChildKinds })),
  attributes: node.Properties
    .filter((property) => !manifest.excludedProperties.includes(property.Name))
    .filter((property) => manifest.scalarKinds.includes(property.IsEnum ? 'enum' : property.Type))
    .map((property) => ({
      name: property.Name,
      kind: property.IsEnum ? 'enum' : property.Type,
      nullable: property.IsNullable,
      ...(property.IsEnum ? {
        values: [...new Set([...property.EnumValues, property.EnumZeroName])],
        flags: property.IsFlags,
      } : {}),
    })),
}));
const span = {
  type: 'object', additionalProperties: false,
  required: ['offset', 'length', 'line', 'column'],
  properties: {
    offset: { type: 'integer', minimum: 0, maximum: manifest.limits.sqlUtf16CodeUnits },
    length: { type: 'integer', minimum: 0, maximum: manifest.limits.sqlUtf16CodeUnits },
    line: { type: 'integer', minimum: 1 }, column: { type: 'integer', minimum: 1 },
  },
};
const schema = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: 'https://scriptdom-wasm-bridge.local/parser-result.v1.schema.json',
  type: 'object', additionalProperties: false,
  required: ['parser', 'projectionVersion', 'failure', 'nodes', 'errors'],
  properties: {
    parser: { const: manifest.parser }, projectionVersion: { const: manifest.projectionVersion },
    failure: { enum: [null, 'parse-error', 'resource-limit', 'unsupported-node', 'internal-error'] },
    nodes: { type: 'array', maxItems: manifest.limits.nodes, items: { $ref: '#/$defs/node' } },
    errors: { type: 'array', maxItems: manifest.limits.parseErrors, items: {
      type: 'object', additionalProperties: false, required: ['number', 'span'],
      properties: { number: { type: 'integer', minimum: 0 }, span: { anyOf: [span, { type: 'null' }] } },
    } },
  },
  $defs: {
    node: {
      type: 'object', additionalProperties: false,
      required: ['id', 'kind', 'parentId', 'pathFromParent', 'span', 'attributes'],
      properties: {
        id: { type: 'integer', minimum: 0, maximum: manifest.limits.nodes - 1 },
        kind: { enum: policies.map((policy) => policy.kind) },
        parentId: { anyOf: [{ type: 'integer', minimum: 0 }, { type: 'null' }] },
        pathFromParent: { type: 'array', maxItems: 2, items: { type: 'string' } },
        span: { anyOf: [span, { type: 'null' }] },
        attributes: { type: 'array', maxItems: Math.max(...policies.map((policy) => policy.attributes.length)), items: {
          type: 'object', additionalProperties: false, required: ['name', 'kind', 'value'],
          properties: {
            name: { enum: [...new Set(policies.flatMap((policy) => policy.attributes.map((attribute) => attribute.name)))] },
            kind: { enum: manifest.scalarKinds },
            value: { anyOf: [{ type: 'string', maxLength: manifest.limits.stringUtf16CodeUnits }, { type: 'boolean' }, { type: 'integer' }, { type: 'null' }] },
          },
        } },
      },
    },
  },
};
const hash = (value) => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const abi = { parser: manifest.parser, projectionVersion: manifest.projectionVersion,
  manifestSha256: hash(manifest), policySha256: hash(policies), schemaSha256: hash(schema) };
const ts = `export const PARSER_ABI = ${JSON.stringify(abi, null, 2)} as const;
export const PARSER_LIMITS = ${JSON.stringify(manifest.limits, null, 2)} as const;
export const PARSER_NODE_POLICIES = ${JSON.stringify(policies, null, 2)} as const;
export type TsqlParserNodeKind = (typeof PARSER_NODE_POLICIES)[number]['kind'];
export type TsqlParserEdgeName = (typeof PARSER_NODE_POLICIES)[number]['edges'][number]['name'];
export type TsqlParserAttributeName = (typeof PARSER_NODE_POLICIES)[number]['attributes'][number]['name'];
`;
const cs = `using System.Text.Json;
using Microsoft.SqlServer.TransactSql.ScriptDom;
namespace ScriptDom.WasmBridge;
internal readonly record struct StructuralChildEdge(string Name, int Index, TSqlFragment Child);
internal static class ParserProjection
{
    public const string AbiJson = ${JSON.stringify(JSON.stringify(abi))};
    public const string Parser = ${JSON.stringify(manifest.parser)};
    public const int Version = ${manifest.projectionVersion};
${Object.entries(manifest.limits).map(([name, value]) => `    public const int ${name[0].toUpperCase() + name.slice(1)} = ${value};`).join('\n')}
    public static string GetKind(TSqlFragment node)
    {
        var nodeType = node.GetType();
${policies.map((policy) => `        if (nodeType == typeof(${policy.kind})) return ${JSON.stringify(policy.kind)};`).join('\n')}
        throw new UnsupportedNodeException();
    }
    public static IEnumerable<StructuralChildEdge> GetChildren(TSqlFragment node)
    {
        var nodeType = node.GetType();
${discovery.Nodes.map(generateChildCase).join('\n')}
        yield break;
    }
    public static void WriteAttributes(Utf8JsonWriter writer, TSqlFragment node)
    {
        writer.WriteStartArray("attributes");
        var nodeType = node.GetType();
${policies.filter((policy) => policy.attributes.length).map((policy) => `        if (nodeType == typeof(${policy.kind}))
        {
            var typed = (${policy.kind})node;
${policy.attributes.map((attribute) => `            ParserJson.WriteAttribute(writer, ${JSON.stringify(attribute.name)}, ${JSON.stringify(attribute.kind)}, typed.${attribute.name});`).join('\n')}
        }`).join('\n')}
        writer.WriteEndArray();
    }
}
`;
for (const [relative, content] of [
  ['src/parser-projection.v1.generated.ts', ts],
  ['src/parser-result.v1.schema.json', JSON.stringify(schema, null, 2) + '\n'],
  ['c-sharp/parser/ParserProjection.g.cs', cs],
]) {
  const destination = path.join(root, relative);
  if (process.argv.includes('--check')) {
    if (await fs.readFile(destination, 'utf8') !== content) {
      throw new Error(`${relative} is stale; run npm run generate:parser-projection`);
    }
  } else {
    await fs.writeFile(destination, content);
  }
}
