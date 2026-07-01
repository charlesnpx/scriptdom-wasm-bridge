import { createRequire } from 'node:module';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const runtimeCacheSymbol = Symbol.for('scriptdom-wasm-bridge.runtimeCache.v2');

const rootModule = await import('scriptdom-wasm-bridge');
const tokenizerModule = await import('scriptdom-wasm-bridge/tokenizer');
const sanitizerModule = await import('scriptdom-wasm-bridge/sanitizer');
const introspectorModule = await import('scriptdom-wasm-bridge/introspector');

assertExports(rootModule, [
  'createTsqlTokenizer',
  'createTsqlSanitizer',
  'createTsqlIntrospector',
]);
assertExports(tokenizerModule, ['createTsqlTokenizer']);
assertExports(sanitizerModule, ['createTsqlSanitizer']);
assertExports(introspectorModule, ['createTsqlIntrospector']);
assertNoLegacyExports(rootModule);

assertRuntimeCacheSize(0, 'root and subpath imports initialized WASM');

const require = createRequire(import.meta.url);
const cjsRoot = require('scriptdom-wasm-bridge');
const cjsTokenizer = require('scriptdom-wasm-bridge/tokenizer');
const cjsSanitizer = require('scriptdom-wasm-bridge/sanitizer');
const cjsIntrospector = require('scriptdom-wasm-bridge/introspector');

assertExports(cjsRoot, ['createTsqlTokenizer', 'createTsqlSanitizer', 'createTsqlIntrospector']);
assertExports(cjsTokenizer, ['createTsqlTokenizer']);
assertExports(cjsSanitizer, ['createTsqlSanitizer']);
assertExports(cjsIntrospector, ['createTsqlIntrospector']);
assertNoLegacyExports(cjsRoot);
assertRuntimeCacheSize(0, 'CommonJS imports initialized WASM');

const [tokenizer, concurrentTokenizer, mixedCommonJsTokenizer] = await Promise.all([
  tokenizerModule.createTsqlTokenizer(),
  tokenizerModule.createTsqlTokenizer(),
  cjsTokenizer.createTsqlTokenizer(),
]);

assertRuntimeCacheSize(1, 'tokenizer import loaded more than the tokenizer bundle');

const tokenizerResult = tokenizer.tokenize(
  "select 'tokenSecret' as value from dbo.Users where id = 42",
);
assertTokenizeResultShape(tokenizerResult);
assertDoesNotContain(
  JSON.stringify(tokenizerResult),
  ['tokenSecret', 'Users', 'Incorrect', 'syntax'],
  'tokenizer JSON',
);

const concurrentTokenizeResult = concurrentTokenizer.tokenize("select 'concurrentSecret'");
assertDoesNotContain(
  JSON.stringify(concurrentTokenizeResult),
  ['concurrentSecret'],
  'concurrent tokenizer initialization',
);

const mixedCommonJsTokenizeResult = mixedCommonJsTokenizer.tokenize("select 'mixedCommonJsSecret'");
assertDoesNotContain(
  JSON.stringify(mixedCommonJsTokenizeResult),
  ['mixedCommonJsSecret'],
  'mixed ESM/CommonJS tokenizer initialization',
);

const sanitizer = await sanitizerModule.createTsqlSanitizer();
const sanitizerFromRoot = await rootModule.createTsqlSanitizer();

assertRuntimeCacheSize(1, 'sanitizer loaded a second WASM bundle');

const sanitizeSamples = [
  {
    name: 'literal categories and comments',
    sql:
      "/* payload id 999 */ select 'asciiSecret', N'unicodeSecret', " +
      '12345, 67.89, 1E10, 0xDEADBEEF, $12.34, 0xBEEF ' +
      '-- trailing secret\nfrom dbo.Users where id = 7',
    forbidden: [
      'payload',
      '999',
      'asciiSecret',
      'unicodeSecret',
      '12345',
      '67.89',
      '1E10',
      'DEADBEEF',
      '12.34',
      'BEEF',
      'trailing secret',
    ],
  },
  {
    name: 'comment markers inside strings',
    sql:
      "select * from notes where body = 'token--secret' " +
      "and detail = N'x /* payload */ y' -- trailing secret",
    forbidden: ['token--secret', 'payload', 'trailing secret', '--', '/*'],
  },
  {
    name: 'double quoted string literal',
    sql: 'select "doubleQuotedSecret" as value',
    forbidden: ['doubleQuotedSecret'],
  },
];

for (const sample of sanitizeSamples) {
  const sanitizeResult = sanitizer.sanitize(sample.sql);

  if (sanitizeResult.tokenizationFailed || sanitizeResult.diagnostics.length !== 0) {
    throw new Error(`${sample.name} unexpectedly failed tokenization`);
  }

  assertDoesNotContain(sanitizeResult.sql, sample.forbidden, `${sample.name} sanitized SQL`);

  if (!sanitizeResult.sql.includes('?')) {
    throw new Error(`${sample.name} did not include placeholders`);
  }

  console.log(`${sample.name}: ${sanitizeResult.sql}`);
}

const rootSanitizeResult = sanitizerFromRoot.sanitize("select 'rootSanitizerSecret'");
assertDoesNotContain(rootSanitizeResult.sql, ['rootSanitizerSecret'], 'root sanitizer');

for (const sql of [
  "select 'sanitize_error_secret",
  'select /* sanitize_comment_secret',
  'select ?',
]) {
  const sanitizeResult = sanitizer.sanitize(sql);

  if (!sanitizeResult.tokenizationFailed || sanitizeResult.diagnostics.length === 0) {
    throw new Error('sanitizer accepted a failed tokenization');
  }

  if (sanitizeResult.sql !== '') {
    throw new Error('sanitizer returned raw SQL on tokenization failure');
  }

  assertDoesNotContain(
    JSON.stringify(sanitizeResult),
    ['sanitize_error_secret', 'sanitize_comment_secret', 'select ?', 'Incorrect', 'syntax'],
    'sanitize failure result',
  );
}

const parseErrorSql = "select 'parse_error_secret";
const parseErrorResult = tokenizer.tokenize(parseErrorSql);
const parseErrorJson = JSON.stringify(parseErrorResult);

assertTokenizeResultShape(parseErrorResult);

if (!parseErrorResult.failed || parseErrorResult.errors.length === 0) {
  throw new Error('Tokenizer did not return a location-only parse error');
}

assertDoesNotContain(
  parseErrorJson,
  ['parse_error_secret', 'Unclosed', 'quotation', 'Incorrect', 'syntax'],
  'parse error JSON',
);

const introspector = await introspectorModule.createTsqlIntrospector();

assertRuntimeCacheSize(2, 'introspector did not load exactly one additional WASM bundle');

const inspectSql = [
  'select dbo.MaskEmail(u.Email) from dbo.Users as u where exists (select 1 from audit.Logs)',
  'exec dbo.RunJob @id = 1',
  'create table dbo.CreatedThing (id int)',
  "exec('select dynamicPayloadSecret from dbo.DynamicSecret')",
  "select * from openjson(N'{\"openJsonSecret\":1}') with (id int '$.id')",
  "select * from openrowset(BULK 'openRowsetSecret.csv', SINGLE_CLOB) as payload",
].join(';\n');
const inspectResult = introspector.inspect(inspectSql);
const inspectJson = JSON.stringify(inspectResult);

assertInspectResultShape(inspectResult);

if (inspectResult.failed) {
  throw new Error(`Introspection failed: ${JSON.stringify(inspectResult.errors)}`);
}

assertHasKind(inspectResult.statements, 'SelectStatement', 'statement');
assertHasKind(inspectResult.statements, 'ExecuteStatement', 'statement');
assertHasKind(inspectResult.statements, 'CreateTableStatement', 'statement');
assertHasNamePart(inspectResult.objectReferences, 'Users', 'object reference');
assertHasNamePart(inspectResult.objectReferences, 'Logs', 'object reference');
assertHasNamePart(inspectResult.objectReferences, 'CreatedThing', 'object reference');
assertHasNamePart(inspectResult.functionCalls, 'MaskEmail', 'function call');
assertHasNamePart(inspectResult.procedureCalls, 'RunJob', 'procedure call');
assertHasKind(inspectResult.constructs, 'execute', 'construct');
assertHasKind(inspectResult.constructs, 'dynamic-execute', 'construct');
assertHasKind(inspectResult.constructs, 'open-json', 'construct');
assertHasKind(inspectResult.constructs, 'open-rowset', 'construct');

assertDoesNotContain(
  inspectJson,
  [
    'dynamicPayloadSecret',
    'DynamicSecret',
    'openJsonSecret',
    'openRowsetSecret',
    'Incorrect',
    'syntax',
  ],
  'introspection JSON',
);

const invalidInspectResult = introspector.inspect("select 'inspect_error_secret");
const invalidInspectJson = JSON.stringify(invalidInspectResult);

if (!invalidInspectResult.failed) {
  throw new Error('Introspector accepted a failed parse');
}

if (
  invalidInspectResult.statements.length !== 0 ||
  invalidInspectResult.objectReferences.length !== 0 ||
  invalidInspectResult.functionCalls.length !== 0 ||
  invalidInspectResult.procedureCalls.length !== 0 ||
  invalidInspectResult.constructs.length !== 0
) {
  throw new Error('Introspector returned structural results for a failed parse');
}

assertDoesNotContain(
  invalidInspectJson,
  ['inspect_error_secret', 'Unclosed', 'quotation', 'Incorrect', 'syntax'],
  'failed introspection JSON',
);

const introspectorBundlePath = fileURLToPath(
  new URL('../vendor/scriptdom-introspector-wasm/AppBundle', import.meta.url),
);

try {
  await tokenizerModule.createTsqlTokenizer({ appBundlePath: introspectorBundlePath });
  throw new Error('Tokenizer accepted the introspector AppBundle');
} catch (error) {
  if (!String(error.message).includes('not tokenizer')) {
    throw error;
  }
}

const stillUsableIntrospector = await introspectorModule.createTsqlIntrospector({
  appBundlePath: introspectorBundlePath,
});
const stillUsableResult = stillUsableIntrospector.inspect('select * from dbo.AfterWrongBundle');
assertHasNamePart(stillUsableResult.objectReferences, 'AfterWrongBundle', 'post-error introspector');

const malformedBundleRoot = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'tmp-malformed-appbundles',
);

try {
  const malformedTokenizerBundlePath = await writeMalformedTokenizerBundle(malformedBundleRoot);
  const malformedTokenizer = await tokenizerModule.createTsqlTokenizer({
    appBundlePath: malformedTokenizerBundlePath,
  });

  try {
    malformedTokenizer.tokenize('select 1');
    throw new Error('Tokenizer accepted an out-of-range error offset');
  } catch (error) {
    if (!String(error.message).includes('location error range')) {
      throw error;
    }
  }

  const malformedIntrospectorBundlePath =
    await writeMalformedIntrospectorBundle(malformedBundleRoot);
  const malformedIntrospector = await introspectorModule.createTsqlIntrospector({
    appBundlePath: malformedIntrospectorBundlePath,
  });

  try {
    malformedIntrospector.inspect('select 1');
    throw new Error('Introspector accepted an out-of-range error offset');
  } catch (error) {
    if (!String(error.message).includes('location error range')) {
      throw error;
    }
  }
} finally {
  await fs.rm(malformedBundleRoot, { recursive: true, force: true });
}

console.log(`parse errors: ${JSON.stringify(parseErrorResult.errors)}`);

function assertExports(moduleValue, expectedExports) {
  for (const expectedExport of expectedExports) {
    if (typeof moduleValue[expectedExport] !== 'function') {
      throw new Error(`Missing export ${expectedExport}`);
    }
  }
}

function assertNoLegacyExports(moduleValue) {
  for (const legacyExport of [
    'createScriptDomTokenizer',
    'validateTokenizeResult',
    'sanitizeSqlFromTokens',
  ]) {
    if (Object.hasOwn(moduleValue, legacyExport)) {
      throw new Error(`Unexpected legacy export ${legacyExport}`);
    }
  }
}

function assertRuntimeCacheSize(expectedSize, context) {
  const runtimeCache = globalThis[runtimeCacheSymbol];

  if (runtimeCache && runtimeCache.size !== expectedSize) {
    throw new Error(`${context}: expected ${expectedSize}, received ${runtimeCache.size}`);
  }
}

function assertDoesNotContain(value, forbiddenValues, context) {
  for (const forbidden of forbiddenValues) {
    if (value.includes(forbidden)) {
      throw new Error(`${context} leaked ${forbidden}`);
    }
  }
}

function assertTokenizeResultShape(tokenizeResult) {
  assertOnlyKeys(tokenizeResult, ['failed', 'tokens', 'errors'], 'tokenize result');

  for (const token of tokenizeResult.tokens) {
    assertOnlyKeys(token, ['type', 'offset', 'length', 'line', 'column'], 'token');
  }

  for (const error of tokenizeResult.errors) {
    assertOnlyKeys(error, ['number', 'offset', 'line', 'column'], 'tokenization error');
  }
}

function assertInspectResultShape(inspectResult) {
  assertOnlyKeys(
    inspectResult,
    [
      'failed',
      'statements',
      'objectReferences',
      'functionCalls',
      'procedureCalls',
      'constructs',
      'errors',
    ],
    'inspect result',
  );

  for (const statement of inspectResult.statements) {
    assertOnlyKeys(statement, ['kind', 'offset', 'length'], 'statement');
  }

  for (const objectReference of inspectResult.objectReferences) {
    assertAllowedKeys(
      objectReference,
      ['context', 'nameParts'],
      ['context', 'nameParts', 'offset', 'length'],
      'object reference',
    );
  }

  for (const functionCall of inspectResult.functionCalls) {
    assertAllowedKeys(functionCall, ['nameParts'], ['nameParts', 'offset', 'length'], 'function');
  }

  for (const procedureCall of inspectResult.procedureCalls) {
    assertAllowedKeys(procedureCall, ['nameParts'], ['nameParts', 'offset', 'length'], 'procedure');
  }

  for (const construct of inspectResult.constructs) {
    assertAllowedKeys(construct, ['kind'], ['kind', 'offset', 'length'], 'construct');
  }

  for (const error of inspectResult.errors) {
    assertOnlyKeys(error, ['number', 'offset', 'line', 'column'], 'introspection error');
  }
}

function assertOnlyKeys(value, expectedKeys, context) {
  assertAllowedKeys(value, expectedKeys, expectedKeys, context);
}

function assertAllowedKeys(value, requiredKeys, allowedKeys, context) {
  for (const requiredKey of requiredKeys) {
    if (!Object.hasOwn(value, requiredKey)) {
      throw new Error(`${context} is missing ${requiredKey}`);
    }
  }

  for (const key of Object.keys(value)) {
    if (!allowedKeys.includes(key)) {
      throw new Error(`${context} returned unexpected key ${key}`);
    }

    if (['text', 'message', 'sql', 'value'].includes(key)) {
      throw new Error(`${context} returned forbidden key ${key}`);
    }
  }
}

function assertHasKind(items, kind, context) {
  if (!items.some((item) => item.kind === kind)) {
    throw new Error(`Missing ${context} kind ${kind}: ${JSON.stringify(items)}`);
  }
}

function assertHasNamePart(items, namePart, context) {
  if (!items.some((item) => item.nameParts.includes(namePart))) {
    throw new Error(`Missing ${context} name part ${namePart}: ${JSON.stringify(items)}`);
  }
}

async function writeMalformedTokenizerBundle(rootDirectory) {
  const appBundlePath = path.join(rootDirectory, 'tokenizer', 'AppBundle');
  const frameworkPath = path.join(appBundlePath, '_framework');

  await fs.mkdir(frameworkPath, { recursive: true });
  await fs.writeFile(
    path.join(frameworkPath, 'dotnet.js'),
    `
export const dotnet = {
  withDiagnosticTracing() {
    return {
      async create() {
        return {
          getConfig() {
            return { mainAssemblyName: 'MalformedTokenizer' };
          },
          async getAssemblyExports() {
            return {
              ScriptDom: {
                WasmBridge: {
                  TsqlTokenizer: {
                    TokenizeJson(sql) {
                      return JSON.stringify({
                        failed: true,
                        tokens: [],
                        errors: [{ number: 1, offset: sql.length + 1, line: 1, column: 1 }],
                      });
                    },
                  },
                },
              },
            };
          },
        };
      },
    };
  },
};
`,
  );

  return appBundlePath;
}

async function writeMalformedIntrospectorBundle(rootDirectory) {
  const appBundlePath = path.join(rootDirectory, 'introspector', 'AppBundle');
  const frameworkPath = path.join(appBundlePath, '_framework');

  await fs.mkdir(frameworkPath, { recursive: true });
  await fs.writeFile(
    path.join(frameworkPath, 'dotnet.js'),
    `
export const dotnet = {
  withDiagnosticTracing() {
    return {
      async create() {
        return {
          getConfig() {
            return { mainAssemblyName: 'MalformedIntrospector' };
          },
          async getAssemblyExports() {
            return {
              ScriptDom: {
                WasmBridge: {
                  TsqlIntrospector: {
                    InspectJson(sql) {
                      return JSON.stringify({
                        failed: true,
                        statements: [],
                        objectReferences: [],
                        functionCalls: [],
                        procedureCalls: [],
                        constructs: [],
                        errors: [{ number: 1, offset: sql.length + 1, line: 1, column: 1 }],
                      });
                    },
                  },
                },
              },
            };
          },
        };
      },
    };
  },
};
`,
  );

  return appBundlePath;
}
