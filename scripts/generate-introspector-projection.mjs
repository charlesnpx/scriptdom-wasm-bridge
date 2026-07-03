import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

const root = path.resolve(import.meta.dirname, '..');
const manifestPath = path.join(root, 'src', 'introspector-projection.v1.json');
const generatedTsPath = path.join(root, 'src', 'introspector-projection.v1.generated.ts');
const schemaPath = path.join(root, 'src', 'introspector-result.v1.schema.json');
const generatedCSharpManifestPath = path.join(
  root,
  'c-sharp',
  'introspector',
  'IntrospectorProjectionManifest.g.cs',
);
const generatedCSharpAccessorsPath = path.join(
  root,
  'c-sharp',
  'introspector',
  'IntrospectorProjectionAccessors.g.cs',
);

const check = process.argv.includes('--check');
const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
const discovery = await discoverScriptDom(manifest.scriptDomPackageVersion);
const generated = generateArtifacts(manifest, discovery);

if (check) {
  await assertFresh(generatedTsPath, generated.ts);
  await assertFresh(schemaPath, `${canonicalJson(generated.schema)}\n`);
  await assertFresh(generatedCSharpManifestPath, generated.csharpManifest);
  await assertFresh(generatedCSharpAccessorsPath, generated.csharpAccessors);
} else {
  await fs.writeFile(generatedTsPath, generated.ts);
  await fs.writeFile(schemaPath, `${canonicalJson(generated.schema)}\n`);
  await fs.writeFile(generatedCSharpManifestPath, generated.csharpManifest);
  await fs.writeFile(generatedCSharpAccessorsPath, generated.csharpAccessors);
}

async function assertFresh(filePath, expected) {
  let actual;

  try {
    actual = await fs.readFile(filePath, 'utf8');
  } catch {
    throw new Error(
      `${path.relative(root, filePath)} is missing; run npm run generate:introspector-projection`,
    );
  }

  if (actual !== expected) {
    throw new Error(
      `${path.relative(root, filePath)} is stale; run npm run generate:introspector-projection`,
    );
  }
}

async function discoverScriptDom(packageVersion) {
  const tmpRoot = await fs.mkdtemp(path.join(os.tmpdir(), 'scriptdom-projection-'));

  try {
    await fs.writeFile(
      path.join(tmpRoot, 'Discovery.csproj'),
      `<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net10.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Microsoft.SqlServer.TransactSql.ScriptDom" Version="${escapeXml(packageVersion)}" />
  </ItemGroup>
</Project>
`,
    );
    await fs.writeFile(path.join(tmpRoot, 'Program.cs'), discoveryProgramSource());

    const { stdout } = await execFileAsync(
      'dotnet',
      ['run', '--project', tmpRoot, '--configuration', 'Release'],
      {
        cwd: root,
        maxBuffer: 64 * 1024 * 1024,
      },
    );

    return JSON.parse(stdout);
  } finally {
    await fs.rm(tmpRoot, { recursive: true, force: true });
  }
}

function discoveryProgramSource() {
  return String.raw`
using System.Reflection;
using System.Text.Json;
using Microsoft.SqlServer.TransactSql.ScriptDom;

var fragmentType = typeof(TSqlFragment);
var tokenType = typeof(TSqlTokenType);
var assembly = fragmentType.Assembly;

var nodes = assembly.GetTypes()
    .Where(type => type.IsPublic && !type.IsAbstract && fragmentType.IsAssignableFrom(type))
    .OrderBy(type => type.Name, StringComparer.Ordinal)
    .Select(type => new NodeInfo(
        type.Name,
        type.FullName ?? type.Name,
        GetEdges(type).ToArray(),
        GetProperties(type).ToArray()))
    .ToArray();

var tokenTypes = Enum.GetValues(tokenType)
    .Cast<object>()
    .Select(value => Convert.ToInt32(value))
    .Distinct()
    .OrderBy(value => value)
    .ToArray();

Console.Write(JsonSerializer.Serialize(new DiscoveryResult(nodes, tokenTypes)));

static IEnumerable<EdgeInfo> GetEdges(Type type)
{
    foreach (var property in GetCandidateProperties(type))
    {
        if (typeof(TSqlFragment).IsAssignableFrom(property.PropertyType))
        {
            yield return new EdgeInfo(property.Name, "single", property.PropertyType.Name);
            continue;
        }

        var itemType = GetEnumerableItemType(property.PropertyType);
        if (itemType is not null && typeof(TSqlFragment).IsAssignableFrom(itemType))
        {
            yield return new EdgeInfo(property.Name, "array", itemType.Name);
        }
    }
}

static IEnumerable<PropertyInfoData> GetProperties(Type type)
{
    foreach (var property in GetCandidateProperties(type))
    {
        var propertyType = Nullable.GetUnderlyingType(property.PropertyType) ?? property.PropertyType;

        if (typeof(TSqlFragment).IsAssignableFrom(propertyType) || GetEnumerableItemType(propertyType) is not null)
        {
            continue;
        }

        yield return new PropertyInfoData(
            property.Name,
            GetTypeLabel(propertyType),
            propertyType.IsEnum,
            propertyType.IsEnum
                ? Enum.GetNames(propertyType).OrderBy(value => value, StringComparer.Ordinal).ToArray()
                : Array.Empty<string>(),
            propertyType == typeof(string),
            propertyType == typeof(bool));
    }
}

static IEnumerable<PropertyInfo> GetCandidateProperties(Type type)
{
    return type.GetProperties(BindingFlags.Instance | BindingFlags.Public)
        .Where(property => property.GetMethod is { IsPublic: true })
        .Where(property => property.GetIndexParameters().Length == 0)
        .OrderBy(property => property.Name, StringComparer.Ordinal);
}

static Type? GetEnumerableItemType(Type type)
{
    if (type == typeof(string))
    {
        return null;
    }

    if (type.IsArray)
    {
        return type.GetElementType();
    }

    if (type.IsGenericType && type.GetGenericTypeDefinition() == typeof(IEnumerable<>))
    {
        return type.GetGenericArguments()[0];
    }

    return type.GetInterfaces()
        .Where(candidate => candidate.IsGenericType && candidate.GetGenericTypeDefinition() == typeof(IEnumerable<>))
        .Select(candidate => candidate.GetGenericArguments()[0])
        .FirstOrDefault();
}

static string GetTypeLabel(Type type)
{
    if (type == typeof(string))
    {
        return "string";
    }

    if (type == typeof(bool))
    {
        return "boolean";
    }

    if (type.IsEnum)
    {
        return "enum:" + type.Name;
    }

    if (type == typeof(int) || type == typeof(long) || type == typeof(short) || type == typeof(byte))
    {
        return "integer";
    }

    return type.Name;
}

public sealed record DiscoveryResult(NodeInfo[] Nodes, int[] TokenTypes);
public sealed record NodeInfo(string Name, string FullName, EdgeInfo[] Edges, PropertyInfoData[] Properties);
public sealed record EdgeInfo(string Name, string Kind, string ChildType);
public sealed record PropertyInfoData(
    string Name,
    string Type,
    bool IsEnum,
    string[] EnumValues,
    bool IsString,
    bool IsBoolean);
`;
}

function generateArtifacts(sourceManifest, discovery) {
  const nodes = discovery.Nodes.map((node) => ({
    ...node,
    Edges: node.Edges.filter((edge) => isSafePublicName(edge.Name)),
    Properties: node.Properties.filter((property) => isSafePublicName(property.Name)),
  }));
  const nodeKinds = nodes.map((node) => node.Name);
  const edgeNames = uniqueSorted(nodes.flatMap((node) => node.Edges.map((edge) => edge.Name)));
  const attributePolicies = sortAttributePolicies(
    sourceManifest.attributePolicies.map((policy) =>
      normalizeAttributePolicy(policy, nodes),
    ),
  );
  const attributeNames = uniqueSorted(attributePolicies.map((policy) => policy.propertyName));
  const attributeKinds = uniqueSorted(attributePolicies.map((policy) => policy.attributeKind));
  const tokenTypes = [...discovery.TokenTypes].sort((a, b) => a - b);
  const schema = buildSchema(sourceManifest, {
    edgeNames,
    nodeKinds,
    attributeNames,
    attributeKinds,
    attributePolicies,
    tokenTypes,
  });
  const allowlistBundle = {
    attributeKinds,
    attributeNames,
    attributePolicies,
    coordinateStates: sourceManifest.coordinateStates,
    edgeNames,
    identifierRedactionProfile: sourceManifest.identifierRedactionProfile,
    identifierStates: sourceManifest.identifierStates,
    nodeKinds,
    tokenTypes,
  };
  const digests = {
    manifestSha256: sha256(canonicalJson(sourceManifest)),
    resultSchemaSha256: sha256(canonicalJson(schema)),
    allowlistSha256: sha256(canonicalJson(allowlistBundle)),
  };

  return {
    schema,
    ts: generateTypeScript(sourceManifest, allowlistBundle, digests),
    csharpManifest: generateCSharpManifest(sourceManifest, allowlistBundle, digests),
    csharpAccessors: generateCSharpAccessors(nodes, sourceManifest),
  };
}

function normalizeAttributePolicy(policy, nodes) {
  const node = nodes.find((candidate) => candidate.Name === policy.nodeKind);
  if (!node) {
    throw new Error(`Unknown attribute policy node ${policy.nodeKind}`);
  }

  const property = node.Properties.find((candidate) => candidate.Name === policy.propertyName);
  if (!property) {
    throw new Error(
      `Unknown attribute policy property ${policy.nodeKind}.${policy.propertyName}`,
    );
  }

  if (policy.attributeKind === 'identifier') {
    if (!property.IsString) {
      throw new Error(
        `Identifier attribute policy must target a string property: ${policy.nodeKind}.${policy.propertyName}`,
      );
    }

    return { ...policy };
  }

  if (policy.attributeKind === 'enum') {
    if (!property.IsEnum || property.EnumValues.length === 0) {
      throw new Error(
        `Enum attribute policy must target an enum property: ${policy.nodeKind}.${policy.propertyName}`,
      );
    }

    return {
      ...policy,
      allowedValues: uniqueSorted(property.EnumValues),
    };
  }

  throw new Error(`Unsupported attribute policy kind ${policy.attributeKind}`);
}

function buildScalarValueSchema(policy) {
  if (policy.attributeKind === 'enum') {
    return { enum: policy.allowedValues };
  }

  throw new Error(`Unsupported scalar attribute policy kind ${policy.attributeKind}`);
}

function buildSchema(sourceManifest, { edgeNames, nodeKinds, attributePolicies, tokenTypes }) {
  const attributeSchemas = attributePolicies.flatMap((policy) => {
    if (policy.attributeKind === 'identifier') {
      return [
        {
          type: 'object',
          additionalProperties: false,
          required: ['name', 'kind', 'state', 'value'],
          properties: {
            name: { const: policy.propertyName },
            kind: { const: 'identifier' },
            state: { const: 'present' },
            value: { type: 'string' },
          },
        },
        {
          type: 'object',
          additionalProperties: false,
          required: ['name', 'kind', 'state', 'profile', 'reason'],
          properties: {
            name: { const: policy.propertyName },
            kind: { const: 'identifier' },
            state: { const: 'redacted' },
            profile: { const: sourceManifest.identifierRedactionProfile.name },
            reason: { enum: ['literal-origin', 'secret-pattern'] },
          },
        },
      ];
    }

    return [
      {
        type: 'object',
        additionalProperties: false,
        required: ['name', 'kind', 'value'],
        properties: {
          name: { const: policy.propertyName },
          kind: { const: policy.attributeKind },
          value: buildScalarValueSchema(policy),
        },
      },
    ];
  });

  return {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: 'https://scriptdom-wasm-bridge.local/introspector-result.v1.schema.json',
    title: 'scriptdom-wasm-bridge T-SQL introspector result v1',
    type: 'object',
    additionalProperties: false,
    required: ['failed', 'parser', 'projectionVersion', 'nodes', 'errors'],
    properties: {
      failed: { type: 'boolean' },
      parser: { const: sourceManifest.parser },
      projectionVersion: { const: sourceManifest.projectionVersion },
      nodes: {
        type: 'array',
        maxItems: sourceManifest.limits.nodes,
        items: { $ref: '#/$defs/node' },
      },
      tokens: {
        type: 'array',
        maxItems: sourceManifest.limits.tokens,
        items: { $ref: '#/$defs/token' },
      },
      errors: {
        type: 'array',
        maxItems: sourceManifest.limits.parseErrors,
        items: { $ref: '#/$defs/error' },
      },
    },
    $defs: {
      span: {
        type: 'object',
        additionalProperties: false,
        required: ['offset', 'length', 'line', 'column'],
        properties: {
          offset: { type: 'integer', minimum: 0 },
          length: { type: 'integer', minimum: 1 },
          line: { type: 'integer', minimum: 1 },
          column: { type: 'integer', minimum: 1 },
        },
      },
      node: {
        type: 'object',
        additionalProperties: false,
        required: ['id', 'kind', 'parentId', 'pathFromParent', 'attributes'],
        properties: {
          id: { type: 'integer', minimum: 0 },
          kind: { enum: nodeKinds },
          parentId: {
            anyOf: [{ type: 'integer', minimum: 0 }, { type: 'null' }],
          },
          pathFromParent: {
            anyOf: [
              {
                type: 'array',
                maxItems: 0,
              },
              {
                type: 'array',
                minItems: 1,
                maxItems: 1,
                prefixItems: [{ enum: edgeNames }],
              },
              {
                type: 'array',
                minItems: 2,
                maxItems: 2,
                prefixItems: [
                  { enum: edgeNames },
                  { type: 'string', pattern: '^(0|[1-9][0-9]*)$' },
                ],
              },
            ],
          },
          span: { $ref: '#/$defs/span' },
          attributes: {
            type: 'array',
            items: { $ref: '#/$defs/attribute' },
          },
        },
      },
      attribute: {
        oneOf: attributeSchemas,
      },
      token: {
        type: 'object',
        additionalProperties: false,
        required: ['type', 'offset', 'length', 'line', 'column'],
        properties: {
          type: { enum: tokenTypes },
          offset: { type: 'integer', minimum: 0 },
          length: { type: 'integer', minimum: 1 },
          line: { type: 'integer', minimum: 1 },
          column: { type: 'integer', minimum: 1 },
        },
      },
      error: {
        type: 'object',
        additionalProperties: false,
        required: ['number', 'offset', 'line', 'column', 'coordinateState'],
        properties: {
          number: { type: 'integer' },
          offset: { type: 'integer', minimum: 0 },
          line: { type: 'integer', minimum: 1 },
          column: { type: 'integer', minimum: 1 },
          coordinateState: { enum: sourceManifest.coordinateStates },
        },
      },
    },
  };
}

function generateTypeScript(sourceManifest, allowlistBundle, digests) {
  return (
    `/* eslint-disable */\n` +
    `// <auto-generated />\n` +
    `// Generated by scripts/generate-introspector-projection.mjs. Do not edit directly.\n\n` +
    `export const INTROSPECTOR_PROJECTION_ABI = ${stableTsObject({
      parser: sourceManifest.parser,
      projectionVersion: sourceManifest.projectionVersion,
      manifestSha256: digests.manifestSha256,
      resultSchemaSha256: digests.resultSchemaSha256,
      allowlistSha256: digests.allowlistSha256,
      limits: sourceManifest.limits,
      identifierRedactionProfile: sourceManifest.identifierRedactionProfile.name,
    })} as const;\n\n` +
    `export const TSQL_STRUCTURAL_NODE_KINDS = ${stableTsObject(allowlistBundle.nodeKinds)} as const;\n` +
    `export type TsqlStructuralNodeKind = (typeof TSQL_STRUCTURAL_NODE_KINDS)[number];\n\n` +
    `export const TSQL_STRUCTURAL_EDGE_NAMES = ${stableTsObject(allowlistBundle.edgeNames)} as const;\n` +
    `export type TsqlStructuralEdgeName = (typeof TSQL_STRUCTURAL_EDGE_NAMES)[number];\n\n` +
    `export const TSQL_STRUCTURAL_ATTRIBUTE_NAMES = ${stableTsObject(allowlistBundle.attributeNames)} as const;\n` +
    `export type TsqlStructuralAttributeName = (typeof TSQL_STRUCTURAL_ATTRIBUTE_NAMES)[number];\n\n` +
    `export const TSQL_STRUCTURAL_ATTRIBUTE_KINDS = ${stableTsObject(allowlistBundle.attributeKinds)} as const;\n` +
    `export type TsqlStructuralAttributeKind = (typeof TSQL_STRUCTURAL_ATTRIBUTE_KINDS)[number];\n\n` +
    `export const TSQL_STRUCTURAL_ATTRIBUTE_POLICIES = ${stableTsObject(allowlistBundle.attributePolicies)} as const;\n\n` +
    `export const TSQL_IDENTIFIER_STATES = ${stableTsObject(allowlistBundle.identifierStates)} as const;\n` +
    `export type TsqlIdentifierState = (typeof TSQL_IDENTIFIER_STATES)[number];\n\n` +
    `export const TSQL_INSPECT_COORDINATE_STATES = ${stableTsObject(allowlistBundle.coordinateStates)} as const;\n` +
    `export type TsqlInspectCoordinateState = (typeof TSQL_INSPECT_COORDINATE_STATES)[number];\n\n` +
    `export const TSQL_INSPECT_TOKEN_TYPES = ${stableTsObject(allowlistBundle.tokenTypes)} as const;\n` +
    `export type TsqlInspectTokenType = (typeof TSQL_INSPECT_TOKEN_TYPES)[number];\n`
  );
}

function generateCSharpManifest(sourceManifest, allowlistBundle, digests) {
  return (
    `// <auto-generated />\n` +
    `// Generated by scripts/generate-introspector-projection.mjs. Do not edit directly.\n\n` +
    `namespace ScriptDom.WasmBridge;\n\n` +
    `internal static class IntrospectorProjectionManifest\n` +
    `{\n` +
    `    public const string Parser = ${csString(sourceManifest.parser)};\n` +
    `    public const int ProjectionVersion = ${sourceManifest.projectionVersion};\n` +
    `    public const string ManifestSha256 = ${csString(digests.manifestSha256)};\n` +
    `    public const string ResultSchemaSha256 = ${csString(digests.resultSchemaSha256)};\n` +
    `    public const string AllowlistSha256 = ${csString(digests.allowlistSha256)};\n` +
    `    public const int MaxSqlUtf16CodeUnits = ${sourceManifest.limits.sqlUtf16CodeUnits};\n` +
    `    public const int MaxPrivateOptionsJsonUtf16CodeUnits = ${sourceManifest.limits.privateOptionsJsonUtf16CodeUnits};\n` +
    `    public const int MaxNodes = ${sourceManifest.limits.nodes};\n` +
    `    public const int MaxTraversedFragments = ${sourceManifest.limits.traversedFragments};\n` +
    `    public const int MaxTraversalDepth = ${sourceManifest.limits.traversalDepth};\n` +
    `    public const int MaxPathSegments = ${sourceManifest.limits.pathSegments};\n` +
    `    public const int MaxParseErrors = ${sourceManifest.limits.parseErrors};\n` +
    `    public const int MaxTokens = ${sourceManifest.limits.tokens};\n` +
    `    public const int MaxProjectedOutputUtf16CodeUnits = ${sourceManifest.limits.projectedOutputUtf16CodeUnits};\n` +
    `    public const int MaxSerializedEnvelopeUtf8Bytes = ${sourceManifest.limits.serializedEnvelopeUtf8Bytes};\n` +
    `    public const string IdentifierRedactionProfile = ${csString(sourceManifest.identifierRedactionProfile.name)};\n\n` +
    `    public static readonly string[] SensitiveIdentifierFragments =\n` +
    `    {\n${sourceManifest.identifierRedactionProfile.containsAnyCaseInsensitive.map((value) => `        ${csString(value)},`).join('\n')}\n` +
    `    };\n\n` +
    `    public static readonly int[] TokenTypes =\n` +
    `    {\n${allowlistBundle.tokenTypes.map((value) => `        ${value},`).join('\n')}\n` +
    `    };\n` +
    `}\n`
  );
}

function generateCSharpAccessors(nodes, sourceManifest) {
  const nodeKindCases = nodes
    .map((node, index) => `        if (nodeType == typeof(${node.Name}))\n        {\n            return ${index};\n        }`)
    .join('\n');
  const nodeNameCases = nodes
    .map((node) => `        if (nodeType == typeof(${node.Name}))\n        {\n            return ${csString(node.Name)};\n        }`)
    .join('\n');
  const childCases = nodes
    .map((node) => generateChildCase(node))
    .filter(Boolean)
    .join('\n\n');
  const attributeCases = generateAttributeCases(sourceManifest.attributePolicies);

  return (
    `// <auto-generated />\n` +
    `// Generated by scripts/generate-introspector-projection.mjs. Do not edit directly.\n\n` +
    `using System.Text.Json;\n` +
    `using Microsoft.SqlServer.TransactSql.ScriptDom;\n\n` +
    `namespace ScriptDom.WasmBridge;\n\n` +
    `internal readonly record struct StructuralChildEdge(string Name, int Index, TSqlFragment Child);\n\n` +
    `internal static class IntrospectorProjectionAccessors\n` +
    `{\n` +
    `    public static int GetNodeKindId(TSqlFragment node)\n` +
    `    {\n` +
    `        var nodeType = node.GetType();\n\n` +
    `${nodeKindCases}\n\n` +
    `        return -1;\n` +
    `    }\n\n` +
    `    public static string GetNodeKind(TSqlFragment node)\n` +
    `    {\n` +
    `        var nodeType = node.GetType();\n\n` +
    `${nodeNameCases}\n\n` +
    `        return string.Empty;\n` +
    `    }\n\n` +
    `    public static IEnumerable<StructuralChildEdge> GetChildren(TSqlFragment node)\n` +
    `    {\n` +
    `        var nodeType = node.GetType();\n\n` +
    `${indent(childCases, 2)}\n\n` +
    `        yield break;\n` +
    `    }\n\n` +
    `    public static void WriteAttributes(Utf8JsonWriter writer, TSqlFragment node, StructuralProjectionContext context)\n` +
    `    {\n` +
    `        writer.WriteStartArray("attributes");\n` +
    `        var nodeType = node.GetType();\n\n` +
    `${indent(attributeCases, 2)}\n` +
    `        writer.WriteEndArray();\n` +
    `    }\n` +
    `}\n`
  );
}

function generateChildCase(node) {
  if (node.Edges.length === 0) {
    return '';
  }

  const lines = [`if (nodeType == typeof(${node.Name}))`, `{`, `    var typed = (${node.Name})node;`];

  for (const edge of node.Edges) {
    if (edge.Kind === 'single') {
      lines.push(`    if (typed.${edge.Name} is not null)`);
      lines.push(`    {`);
      lines.push(
        `        yield return new StructuralChildEdge(${csString(edge.Name)}, -1, typed.${edge.Name});`,
      );
      lines.push(`    }`);
    } else {
      lines.push(`    if (typed.${edge.Name} is not null)`);
      lines.push(`    {`);
      lines.push(`        var index = 0;`);
      lines.push(`        foreach (var child in typed.${edge.Name})`);
      lines.push(`        {`);
      lines.push(`            if (child is not null)`);
      lines.push(`            {`);
      lines.push(
        `                yield return new StructuralChildEdge(${csString(edge.Name)}, index, child);`,
      );
      lines.push(`            }`);
      lines.push(`            index += 1;`);
      lines.push(`        }`);
      lines.push(`    }`);
    }
  }

  lines.push('    yield break;');
  lines.push('}');
  return lines.join('\n');
}

function generateAttributeCases(policies) {
  const byNode = new Map();

  for (const policy of policies) {
    const nodePolicies = byNode.get(policy.nodeKind) ?? [];
    nodePolicies.push(policy);
    byNode.set(policy.nodeKind, nodePolicies);
  }

  return [...byNode.entries()]
    .sort(([left], [right]) => left.localeCompare(right, 'en-US'))
    .map(([nodeKind, nodePolicies]) => {
      const lines = [
        `if (nodeType == typeof(${nodeKind}))`,
        `{`,
        `    var typed = (${nodeKind})node;`,
      ];

      for (const policy of nodePolicies) {
        if (policy.attributeKind === 'identifier') {
          lines.push(
            `    StructuralJsonWriter.WriteIdentifierAttribute(writer, ${csString(policy.propertyName)}, typed.${policy.propertyName}, context);`,
          );
          continue;
        }

        if (policy.attributeKind === 'enum') {
          lines.push(
            `    StructuralJsonWriter.WriteScalarAttribute(writer, ${csString(policy.propertyName)}, "enum", typed.${policy.propertyName}.ToString());`,
          );
          continue;
        }

        throw new Error(`Unsupported attribute policy kind ${policy.attributeKind}`);
      }

      lines.push('}');
      return lines.join('\n');
    })
    .join('\n\n');
}

function isSafePublicName(value) {
  return /^[A-Za-z_][A-Za-z0-9_]*$/.test(value);
}

function canonicalJson(value) {
  return JSON.stringify(sortJson(value));
}

function sortJson(value) {
  if (Array.isArray(value)) {
    return value.map(sortJson);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([left], [right]) => left.localeCompare(right, 'en-US'))
        .map(([key, item]) => [key, sortJson(item)]),
    );
  }

  return value;
}

function stableTsObject(value) {
  return JSON.stringify(sortJson(value), null, 2);
}

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((left, right) => {
    if (typeof left === 'number' && typeof right === 'number') {
      return left - right;
    }

    return String(left).localeCompare(String(right), 'en-US');
  });
}

function sortAttributePolicies(policies) {
  return [...policies].sort((left, right) =>
    [left.nodeKind, left.propertyName, left.attributeKind]
      .join('\u0000')
      .localeCompare([right.nodeKind, right.propertyName, right.attributeKind].join('\u0000'), 'en-US'),
  );
}

function csString(value) {
  return JSON.stringify(value);
}

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function indent(value, level) {
  const prefix = '    '.repeat(level);
  return value
    .split('\n')
    .map((line) => (line.length > 0 ? `${prefix}${line}` : line))
    .join('\n');
}
