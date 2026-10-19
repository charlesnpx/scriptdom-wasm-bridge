import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import Ajv2020 from 'ajv/dist/2020.js';
import { createTsqlParser } from 'scriptdom-wasm-bridge/parser';
import { createTsqlParser as createFromRoot } from 'scriptdom-wasm-bridge';

const root = path.resolve(import.meta.dirname, '..');
const schema = JSON.parse(await fs.readFile(path.join(root, 'src/parser-result.v1.schema.json'), 'utf8'));
const validateSchema = new Ajv2020().compile(schema);
const generated = await fs.readFile(path.join(root, 'src/parser-projection.v1.generated.ts'), 'utf8');
const abi = JSON.parse(generated.split('export const PARSER_ABI = ')[1].split(' as const;')[0]);
const parser = await createTsqlParser();
assert.equal(await createFromRoot(), parser);

function parse(sql, options) {
  const result = parser.parse(sql, options);
  assert.equal(result.failure, null, JSON.stringify(result.errors));
  assert.equal(validateSchema(result), true, JSON.stringify(validateSchema.errors));
  return result;
}
function values(result, kind, name) {
  return result.nodes.filter((node) => node.kind === kind)
    .flatMap((node) => node.attributes.filter((attribute) => attribute.name === name).map((attribute) => attribute.value));
}
function has(result, kind, name, value) {
  assert.ok(values(result, kind, name).includes(value), `${kind}.${name} must include ${value}`);
}

const catalog = parse(`CREATE TABLE dbo.workorders (
  id bigint NOT NULL,
  status varchar(20) NULL,
  amount decimal(18,2),
  access_token nvarchar(max),
  doubled AS amount * 2
);
GO
CREATE VIEW dbo.outstanding AS
WITH candidates AS (SELECT id, status FROM dbo.workorders WHERE status <> 'CLOSED')
SELECT candidates.id, candidates.status FROM candidates;
GO
CREATE PROCEDURE dbo.get_outstanding @id bigint, @count int OUTPUT AS
SELECT id FROM dbo.outstanding WHERE id = @id;
EXEC dbo.other @id = @id;
EXEC(N'SELECT id FROM dbo.workorders');`);
for (const kind of ['CreateTableStatement', 'CreateViewStatement', 'CreateProcedureStatement', 'CommonTableExpression',
  'NamedTableReference', 'ColumnReferenceExpression', 'ExecuteStatement', 'ExecutableStringList']) {
  assert.ok(catalog.nodes.some((node) => node.kind === kind), kind);
}
for (const type of ['BigInt', 'VarChar', 'Decimal', 'NVarChar']) has(catalog, 'SqlDataTypeReference', 'SqlDataTypeOption', type);
for (const number of ['20', '18', '2']) has(catalog, 'IntegerLiteral', 'Value', number);
has(catalog, 'NullableConstraintDefinition', 'Nullable', false);
has(catalog, 'NullableConstraintDefinition', 'Nullable', true);
has(catalog, 'Identifier', 'Value', 'access_token');
has(catalog, 'VariableReference', 'Name', '@id');
has(catalog, 'ProcedureParameter', 'Modifier', 'Output');
has(catalog, 'BinaryExpression', 'BinaryExpressionType', 'Multiply');
has(catalog, 'StringLiteral', 'Value', 'CLOSED');
has(catalog, 'StringLiteral', 'Value', 'SELECT id FROM dbo.workorders');
const typeParameter = catalog.nodes.find((node) => node.kind === 'IntegerLiteral' &&
  node.attributes.some((attribute) => attribute.name === 'Value' && attribute.value === '20'));
assert.equal(catalog.nodes[typeParameter.parentId].kind, 'SqlDataTypeReference');
assert.deepEqual(typeParameter.pathFromParent, ['Parameters', '0']);

const query = parse(`SELECT a.id + 1 AS result FROM dbo.workorders a LEFT JOIN dbo.workorders b ON a.id = b.id
UNION ALL SELECT 2;`);
has(query, 'QualifiedJoin', 'QualifiedJoinType', 'LeftOuter');
has(query, 'BinaryExpression', 'BinaryExpressionType', 'Add');
has(query, 'BinaryQueryExpression', 'All', true);
has(query, 'BinaryQueryExpression', 'BinaryQueryExpressionType', 'Union');

const literalSql = "SELECT N'can''t 😀' AS [password], 123456789012345678901234567890 AS large;";
const literals = parse(literalSql);
has(literals, 'StringLiteral', 'Value', "can't 😀");
has(literals, 'StringLiteral', 'IsNational', true);
has(literals, 'Identifier', 'Value', 'password');
assert.ok(literals.nodes.some((node) => node.attributes.some((attribute) => attribute.value === '123456789012345678901234567890')));
const stringNode = literals.nodes.find((node) => node.kind === 'StringLiteral');
assert.equal(literalSql.slice(stringNode.span.offset, stringNode.span.offset + stringNode.span.length), "N'can''t 😀'");
has(parse('SELECT "column" FROM "table";', { initialQuotedIdentifiers: true }), 'Identifier', 'Value', 'column');
has(parse('SELECT "value";', { initialQuotedIdentifiers: false }), 'StringLiteral', 'Value', 'value');
for (const sql of ['', '-- comment', 'SELECT 1;\rSELECT 2;', 'SELECT 1;\r\nSELECT 2;', 'SELECT 1;\nSELECT 2;',
  'SELECT 1 WHERE 1 = 1;', 'CREATE TRIGGER dbo.tr ON dbo.workorders AFTER UPDATE AS SELECT 1;',
  'CREATE FUNCTION dbo.plus_one(@value int) RETURNS int AS BEGIN RETURN @value + 1; END;',
  'SELECT CAST(1 AS decimal(12,3)), CASE WHEN 1=1 THEN N\'yes\' ELSE N\'no\' END;',
  'SELECT id INTO #temp FROM dbo.workorders; SELECT * FROM #temp;',
  'MERGE dbo.target AS target USING dbo.source AS source ON target.id=source.id WHEN MATCHED THEN UPDATE SET target.value=source.value;',
]) parse(sql);

const malformed = parser.parse('SELECT\r\n FROM;');
assert.equal(malformed.failure, 'parse-error');
assert.deepEqual(malformed.nodes, []);
assert.ok(malformed.errors.length);
assert.equal(validateSchema(malformed), true);
assert.ok(!JSON.stringify(malformed).includes('message'));
const limited = parser.parse('SELECT ' + Array(51000).fill('1').join(','));
assert.equal(limited.failure, 'resource-limit');
assert.deepEqual(limited.nodes, []);
assert.deepEqual(limited.errors, []);
parse('SELECT 1;');
for (const sql of [null, 42, '\ud800', '\udfff']) assert.throws(() => parser.parse(sql), TypeError);
assert.throws(() => parser.parse(' '.repeat(2097153)), RangeError);
for (const options of [null, [], { initialQuotedIdentifiers: null }, { initialQuotedIdentifiers: 1 }, { unknown: true },
  { get initialQuotedIdentifiers() { throw new Error('getter must not run'); } }, { [Symbol('option')]: true }]) {
  assert.throws(() => parser.parse('SELECT 1', options), TypeError);
}
await assert.rejects(createTsqlParser({ appBundlePath: 4 }), TypeError);
parse('SELECT 1;');

const fixtureRoot = await fs.mkdtemp(path.join(os.tmpdir(), 'scriptdom-parser-test-'));
let fixtureIndex = 0;
async function mock(result, options = {}) {
  const appBundlePath = path.join(fixtureRoot, String(fixtureIndex++));
  await fs.mkdir(path.join(appBundlePath, '_framework'), { recursive: true });
  await fs.writeFile(path.join(appBundlePath, 'package.json'), '{"type":"module"}');
  const body = options.throw ? 'throw new Error("private exception contents")' :
    `return ${JSON.stringify(options.raw ?? JSON.stringify(result))}`;
  await fs.writeFile(path.join(appBundlePath, '_framework', 'dotnet.js'), `
export const dotnet = { withDiagnosticTracing() { return { async create() { return {
  getConfig() { return { mainAssemblyName: 'mock' }; },
  async getAssemblyExports() { return { ScriptDom: { WasmBridge: { TsqlParser: {
    GetParserAbiJson() { return ${JSON.stringify(JSON.stringify(options.abi ?? abi))}; },
    ParseJson() { ${body}; }
  } } } }; }
}; } }; } };`);
  return createTsqlParser({ appBundlePath });
}

try {
  const valid = parse('SELECT 1');
  const mutations = [
    (result) => { result.extra = 'private'; },
    (result) => { result.projectionVersion = 100; },
    (result) => { result.failure = 'private-message'; },
    (result) => { result.failure = 'resource-limit'; },
    (result) => { result.nodes = []; },
    (result) => { result.nodes[0].kind = 'Identifier'; },
    (result) => { result.nodes[0].parentId = 0; },
    (result) => { result.nodes[1].id = 0; },
    (result) => { result.nodes[1].parentId = 99; },
    (result) => { result.nodes[1].pathFromParent = ['Unknown']; },
    (result) => { result.nodes[1].pathFromParent = ['Batches', '-1']; },
    (result) => { result.nodes[1].kind = 'Identifier'; },
    (result) => { result.nodes[1].span.offset = 99; },
    (result) => { result.nodes[1].span.column = 99; },
    (result) => { result.nodes[1].span.length = -1; },
    (result) => { result.nodes.at(-1).attributes = []; },
    (result) => { result.nodes.at(-1).attributes[0].value = 'UnknownEnum'; },
    (result) => { result.nodes.at(-1).attributes[0].value = null; },
    (result) => { result.nodes.at(-1).attributes[1].value = 123; },
    (result) => { result.nodes.at(-1).attributes[1] = result.nodes.at(-1).attributes[0]; },
    (result) => { result.nodes.at(-1).attributes[1].value = '\ud800'; },
    (result) => { result.errors = [{ number: 1, span: null }]; },
  ];
  for (const mutate of mutations) {
    const result = structuredClone(valid);
    mutate(result);
    const instance = await mock(result);
    assert.throws(() => instance.parse('SELECT 1'), /^Error: Invalid ScriptDOM parser response$/);
    assert.throws(() => instance.parse('SELECT 1'), /^Error: ScriptDOM parser runtime failed$/);
  }
  for (const options of [{ raw: '{' }, { raw: 12 }, { throw: true }, { raw: ' '.repeat(16777217) }]) {
    const instance = await mock(valid, options);
    assert.throws(() => instance.parse('SELECT 1'), /^Error: Invalid ScriptDOM parser response$/);
  }
  await assert.rejects(mock(valid, { abi: { ...abi, policySha256: 'wrong' } }), /Incompatible ScriptDOM parser ABI/);
  const duplicateEdge = structuredClone(valid);
  duplicateEdge.nodes.push({ ...duplicateEdge.nodes.at(-1), id: duplicateEdge.nodes.length });
  const duplicateInstance = await mock(duplicateEdge);
  assert.throws(() => duplicateInstance.parse('SELECT 1'), /Invalid ScriptDOM parser response/);
  const invalidDiagnostic = await mock({ ...malformed, errors: [{ number: -1, span: null }] });
  assert.throws(() => invalidDiagnostic.parse('SELECT 1'), /Invalid ScriptDOM parser response/);
  for (const failure of ['resource-limit', 'unsupported-node', 'internal-error']) {
    const result = { ...valid, failure, nodes: [] };
    const instance = await mock(result);
    assert.deepEqual(instance.parse('SELECT 1'), result);
  }
} finally {
  await fs.rm(fixtureRoot, { recursive: true, force: true });
}
console.log('parser: SQL analysis facts and untrusted response validation passed');
