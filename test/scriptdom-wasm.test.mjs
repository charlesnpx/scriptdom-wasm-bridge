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
  'normalizeTsqlPlaceholders',
]);
assertExports(tokenizerModule, ['createTsqlTokenizer']);
assertExports(sanitizerModule, ['createTsqlSanitizer']);
assertExports(introspectorModule, ['createTsqlIntrospector']);
assertNoLegacyExports(rootModule);
assertNoRootOnlyExports(tokenizerModule, 'tokenizer');
assertNoRootOnlyExports(sanitizerModule, 'sanitizer');
assertNoRootOnlyExports(introspectorModule, 'introspector');
await assertPackageSubpathNotExported('scriptdom-wasm-bridge/placeholders');

assertRuntimeCacheSize(0, 'root and subpath imports initialized WASM');

const require = createRequire(import.meta.url);
const cjsRoot = require('scriptdom-wasm-bridge');
const cjsTokenizer = require('scriptdom-wasm-bridge/tokenizer');
const cjsSanitizer = require('scriptdom-wasm-bridge/sanitizer');
const cjsIntrospector = require('scriptdom-wasm-bridge/introspector');

assertExports(cjsRoot, [
  'createTsqlTokenizer',
  'createTsqlSanitizer',
  'createTsqlIntrospector',
  'normalizeTsqlPlaceholders',
]);
assertExports(cjsTokenizer, ['createTsqlTokenizer']);
assertExports(cjsSanitizer, ['createTsqlSanitizer']);
assertExports(cjsIntrospector, ['createTsqlIntrospector']);
assertNoLegacyExports(cjsRoot);
assertNoRootOnlyExports(cjsTokenizer, 'CommonJS tokenizer');
assertNoRootOnlyExports(cjsSanitizer, 'CommonJS sanitizer');
assertNoRootOnlyExports(cjsIntrospector, 'CommonJS introspector');
assertRequireSubpathNotExported(require, 'scriptdom-wasm-bridge/placeholders');

runNormalizeTsqlPlaceholdersTests(
  rootModule.normalizeTsqlPlaceholders,
  cjsRoot.normalizeTsqlPlaceholders,
);
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
const indexedLiteralSanitizer = await sanitizerModule.createTsqlSanitizer({
  literalPlaceholder: '@lit{index}',
  avoidExistingLiteralPlaceholders: true,
});

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

const indexedLiteralSanitizeResult = indexedLiteralSanitizer.sanitize(
  "select 'firstSecret' as a, 42 as b, @lit0 as existing, 'secondSecret' as c",
);

if (indexedLiteralSanitizeResult.tokenizationFailed) {
  throw new Error('indexed literal sanitizer failed tokenization');
}

if (
  indexedLiteralSanitizeResult.sql !==
  'select @lit1 as a, @lit2 as b, @lit0 as existing, @lit3 as c'
) {
  throw new Error(`Unexpected indexed literal sanitizer SQL: ${indexedLiteralSanitizeResult.sql}`);
}

assertDoesNotContain(
  indexedLiteralSanitizeResult.sql,
  ['firstSecret', 'secondSecret', '42'],
  'indexed literal sanitizer',
);

const fixedLiteralSanitizer = await sanitizerModule.createTsqlSanitizer({
  literalPlaceholder: '<literal>',
});
const fixedLiteralSanitizeResult = fixedLiteralSanitizer.sanitize("select 'fixedSecret', 7");

if (fixedLiteralSanitizeResult.sql !== 'select <literal>, <literal>') {
  throw new Error(`Unexpected fixed literal sanitizer SQL: ${fixedLiteralSanitizeResult.sql}`);
}

const maxLengthIndexedLiteralPrefix = `@${'l'.repeat(126)}`;
const maxLengthIndexedLiteralSanitizer = await sanitizerModule.createTsqlSanitizer({
  literalPlaceholder: `${maxLengthIndexedLiteralPrefix}{index}`,
});
const maxLengthIndexedLiteralResult = maxLengthIndexedLiteralSanitizer.sanitize("select 'secret'");

if (maxLengthIndexedLiteralResult.sql !== `select ${maxLengthIndexedLiteralPrefix}0`) {
  throw new Error(
    `Unexpected max-length indexed literal sanitizer SQL: ${maxLengthIndexedLiteralResult.sql}`,
  );
}

await assertRejectsWithoutLeak(
  () =>
    sanitizerModule.createTsqlSanitizer({
      literalPlaceholder: '@lit{index}_suffix',
      avoidExistingLiteralPlaceholders: true,
    }),
  TypeError,
  'prefix-only',
  ['@lit{index}_suffix'],
  'literal suffix collision option',
);

await assertRejectsWithoutLeak(
  () =>
    sanitizerModule.createTsqlSanitizer({
      literalPlaceholder: '@lit0{index}',
      avoidExistingLiteralPlaceholders: true,
    }),
  TypeError,
  'must not end with a digit',
  ['@lit0{index}'],
  'literal digit-ending prefix option',
);

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

const normalizedPlaceholderSql = rootModule.normalizeTsqlPlaceholders('select ?').sql;

if (normalizedPlaceholderSql !== 'select @p0') {
  throw new Error(`Unexpected normalized placeholder SQL: ${normalizedPlaceholderSql}`);
}

const normalizedSanitizeResult = sanitizer.sanitize(normalizedPlaceholderSql);

if (normalizedSanitizeResult.tokenizationFailed) {
  throw new Error('sanitizer rejected normalized placeholder SQL');
}

if (
  !normalizedSanitizeResult.sql.includes('@p0') ||
  normalizedSanitizeResult.sql.includes('?')
) {
  throw new Error(`sanitizer did not preserve normalized placeholder SQL`);
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

assertThrowsWithoutLeak(
  () => introspector.inspect('\uD800'),
  TypeError,
  'well-formed UTF-16',
  [],
  'introspector trailing high surrogate SQL',
);

const rawPlaceholderInspectResult = introspector.inspect('select ?');

if (!rawPlaceholderInspectResult.failed) {
  throw new Error('introspector accepted raw question-mark placeholder SQL');
}

assertInspectResultShape(rawPlaceholderInspectResult, { includeTokens: false });

const normalizedPlaceholderInspectResult = introspector.inspect(normalizedPlaceholderSql);

if (normalizedPlaceholderInspectResult.failed) {
  throw new Error('introspector rejected normalized placeholder SQL');
}

const inspectSql = [
  'select dbo.MaskEmail(u.Email) from dbo.Users as u where exists (select 1 from audit.Logs)',
  'exec dbo.RunJob @id = 1',
  'create table dbo.CreatedThing (id int)',
  "exec('select dynamicPayloadSecret from dbo.DynamicSecret')",
  "select * from openjson(N'{\"openJsonSecret\":1}') with (id int '$.id')",
  "select * from openrowset(BULK 'openRowsetSecret.csv', SINGLE_CLOB) as payload",
].join(';\n');
const inspectResult = introspector.inspect(inspectSql, { includeSpans: true, includeTokens: true });
const inspectJson = JSON.stringify(inspectResult);

assertInspectResultShape(inspectResult, { includeTokens: true });

if (inspectResult.failed) {
  throw new Error(`Introspection failed: ${JSON.stringify(inspectResult.errors)}`);
}

assertHasKind(inspectResult.nodes, 'SelectStatement', 'node');
assertHasKind(inspectResult.nodes, 'ExecuteStatement', 'node');
assertHasKind(inspectResult.nodes, 'CreateTableStatement', 'node');
assertHasKind(inspectResult.nodes, 'FunctionCall', 'node');
assertHasKind(inspectResult.nodes, 'ExecutableStringList', 'node');
assertHasKind(inspectResult.nodes, 'OpenJsonTableReference', 'node');
assertHasKind(inspectResult.nodes, 'BulkOpenRowset', 'node');
assertHasIdentifierValue(inspectResult.nodes, 'Users', 'identifier');
assertHasIdentifierValue(inspectResult.nodes, 'Logs', 'identifier');
assertHasIdentifierValue(inspectResult.nodes, 'CreatedThing', 'identifier');
assertHasIdentifierValue(inspectResult.nodes, 'MaskEmail', 'identifier');
assertHasIdentifierValue(inspectResult.nodes, 'RunJob', 'identifier');

if (!inspectResult.tokens || inspectResult.tokens.length === 0) {
  throw new Error('introspector did not return requested tokens');
}

if (!inspectResult.nodes.some((node) => node.kind === 'SelectStatement' && node.span)) {
  throw new Error('introspector did not return requested spans');
}

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

const redactedIdentifierResult = introspector.inspect('select * from dbo.SecretTokenTable');
assertInspectResultShape(redactedIdentifierResult, { includeTokens: false });
assertHasRedactedIdentifier(redactedIdentifierResult.nodes, 'secret-pattern');
assertDoesNotContain(
  JSON.stringify(redactedIdentifierResult),
  ['SecretTokenTable'],
  'redacted identifier introspection JSON',
);

const invalidInspectResult = introspector.inspect("select 'inspect_error_secret");
const invalidInspectJson = JSON.stringify(invalidInspectResult);
const invalidInspectWithTokens = introspector.inspect("select 'inspect_error_secret", {
  includeTokens: true,
});

if (!invalidInspectResult.failed) {
  throw new Error('Introspector accepted a failed parse');
}

if (invalidInspectResult.nodes.length !== 0) {
  throw new Error('Introspector returned structural results for a failed parse');
}

if (!Array.isArray(invalidInspectWithTokens.tokens) || invalidInspectWithTokens.tokens.length !== 0) {
  throw new Error('Introspector returned tokens for a failed parse');
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
assertHasIdentifierValue(stillUsableResult.nodes, 'AfterWrongBundle', 'post-error introspector');

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

  await assertRuntimeCacheMissing(
    malformedIntrospectorBundlePath,
    'malformed introspector invalid result',
  );
  assertThrowsWithoutLeak(
    () => malformedIntrospector.inspect('select 2'),
    Error,
    'runtime failed',
    ['select 2'],
    'poisoned malformed introspector instance',
  );

  const malformedAttributeBundlePath = await writeMalformedIntrospectorBundle(
    malformedBundleRoot,
    'attribute-policy',
  );
  const malformedAttributeIntrospector = await introspectorModule.createTsqlIntrospector({
    appBundlePath: malformedAttributeBundlePath,
  });

  assertThrowsWithoutLeak(
    () => malformedAttributeIntrospector.inspect('select 1'),
    Error,
    'structural attribute policy',
    ['SecretTokenTable', 'select 1'],
    'malformed introspector attribute policy',
  );
  await assertRuntimeCacheMissing(
    malformedAttributeBundlePath,
    'malformed introspector attribute policy',
  );

  const malformedAttributeValueBundlePath = await writeMalformedIntrospectorBundle(
    malformedBundleRoot,
    'attribute-value-policy',
  );
  const malformedAttributeValueIntrospector = await introspectorModule.createTsqlIntrospector({
    appBundlePath: malformedAttributeValueBundlePath,
  });

  assertThrowsWithoutLeak(
    () => malformedAttributeValueIntrospector.inspect('select 1'),
    Error,
    'structural scalar attribute value',
    ['SecretTokenTable', 'select 1'],
    'malformed introspector attribute value policy',
  );
  await assertRuntimeCacheMissing(
    malformedAttributeValueBundlePath,
    'malformed introspector attribute value policy',
  );

  const malformedPathBundlePath = await writeMalformedIntrospectorBundle(
    malformedBundleRoot,
    'path-policy',
  );
  const malformedPathIntrospector = await introspectorModule.createTsqlIntrospector({
    appBundlePath: malformedPathBundlePath,
  });

  assertThrowsWithoutLeak(
    () => malformedPathIntrospector.inspect('select 1'),
    Error,
    'node path',
    ['SecretTokenPath', 'select 1'],
    'malformed introspector path policy',
  );
  await assertRuntimeCacheMissing(
    malformedPathBundlePath,
    'malformed introspector path policy',
  );

  const malformedExtraRootBundlePath = await writeMalformedIntrospectorBundle(
    malformedBundleRoot,
    'extra-root-policy',
  );
  const malformedExtraRootIntrospector = await introspectorModule.createTsqlIntrospector({
    appBundlePath: malformedExtraRootBundlePath,
  });

  assertThrowsWithoutLeak(
    () => malformedExtraRootIntrospector.inspect('select 1'),
    Error,
    'node parent',
    ['ExtraRootSecret', 'select 1'],
    'malformed introspector extra root policy',
  );
  await assertRuntimeCacheMissing(
    malformedExtraRootBundlePath,
    'malformed introspector extra root policy',
  );

  const malformedParentEdgeBundlePath = await writeMalformedIntrospectorBundle(
    malformedBundleRoot,
    'parent-edge-policy',
  );
  const malformedParentEdgeIntrospector = await introspectorModule.createTsqlIntrospector({
    appBundlePath: malformedParentEdgeBundlePath,
  });

  assertThrowsWithoutLeak(
    () => malformedParentEdgeIntrospector.inspect('select 1'),
    Error,
    'node path',
    ['SecretTokenPath', 'select 1'],
    'malformed introspector parent edge policy',
  );
  await assertRuntimeCacheMissing(
    malformedParentEdgeBundlePath,
    'malformed introspector parent edge policy',
  );

  const malformedPathIndexBundlePath = await writeMalformedIntrospectorBundle(
    malformedBundleRoot,
    'path-index-policy',
  );
  const malformedPathIndexIntrospector = await introspectorModule.createTsqlIntrospector({
    appBundlePath: malformedPathIndexBundlePath,
  });

  assertThrowsWithoutLeak(
    () => malformedPathIndexIntrospector.inspect('select 1'),
    Error,
    'node path',
    ['IndexSecretPath', 'select 1'],
    'malformed introspector path index policy',
  );
  await assertRuntimeCacheMissing(
    malformedPathIndexBundlePath,
    'malformed introspector path index policy',
  );

  const malformedChildKindBundlePath = await writeMalformedIntrospectorBundle(
    malformedBundleRoot,
    'child-kind-policy',
  );
  const malformedChildKindIntrospector = await introspectorModule.createTsqlIntrospector({
    appBundlePath: malformedChildKindBundlePath,
  });

  assertThrowsWithoutLeak(
    () => malformedChildKindIntrospector.inspect('select 1'),
    Error,
    'node path',
    ['ChildKindPayload', 'select 1'],
    'malformed introspector child kind policy',
  );
  await assertRuntimeCacheMissing(
    malformedChildKindBundlePath,
    'malformed introspector child kind policy',
  );

  const malformedEmptySuccessBundlePath = await writeMalformedIntrospectorBundle(
    malformedBundleRoot,
    'empty-success-policy',
  );
  const malformedEmptySuccessIntrospector = await introspectorModule.createTsqlIntrospector({
    appBundlePath: malformedEmptySuccessBundlePath,
  });

  assertThrowsWithoutLeak(
    () => malformedEmptySuccessIntrospector.inspect('select 1'),
    Error,
    'node root',
    ['select 1'],
    'malformed introspector empty success policy',
  );
  await assertRuntimeCacheMissing(
    malformedEmptySuccessBundlePath,
    'malformed introspector empty success policy',
  );

  const malformedFailedPayloadBundlePath = await writeMalformedIntrospectorBundle(
    malformedBundleRoot,
    'failed-payload-policy',
  );
  const malformedFailedPayloadIntrospector = await introspectorModule.createTsqlIntrospector({
    appBundlePath: malformedFailedPayloadBundlePath,
  });

  assertThrowsWithoutLeak(
    () => malformedFailedPayloadIntrospector.inspect('select 1', { includeTokens: true }),
    Error,
    'failed result payload',
    ['FailedPayload', 'select 1'],
    'malformed introspector failed payload policy',
  );
  await assertRuntimeCacheMissing(
    malformedFailedPayloadBundlePath,
    'malformed introspector failed payload policy',
  );
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

function assertNoRootOnlyExports(moduleValue, context) {
  if (Object.hasOwn(moduleValue, 'normalizeTsqlPlaceholders')) {
    throw new Error(`${context} exposed root-only normalizeTsqlPlaceholders`);
  }
}

async function assertPackageSubpathNotExported(specifier) {
  try {
    await import(specifier);
    throw new Error(`${specifier} unexpectedly resolved`);
  } catch (error) {
    if (error?.code !== 'ERR_PACKAGE_PATH_NOT_EXPORTED') {
      throw error;
    }
  }
}

function assertRequireSubpathNotExported(requireFn, specifier) {
  try {
    requireFn(specifier);
    throw new Error(`${specifier} unexpectedly resolved`);
  } catch (error) {
    if (error?.code !== 'ERR_PACKAGE_PATH_NOT_EXPORTED') {
      throw error;
    }
  }
}

function runNormalizeTsqlPlaceholdersTests(normalize, commonJsNormalize) {
  assertNormalized(
    normalize('select ? as first, ? as second'),
    'select @p0 as first, @p1 as second',
    2,
    'default placeholders',
  );
  assertNormalized(
    normalize('select ? as first, ? as second', { prefix: '@arg', startAt: 5 }),
    'select @arg5 as first, @arg6 as second',
    2,
    'custom prefix and startAt',
  );
  assertNormalized(
    normalize('select ?', { style: 'question-mark' }),
    'select @p0',
    1,
    'explicit question-mark style',
  );
  assertNormalized(
    commonJsNormalize('select ?', { prefix: '@c', startAt: 2 }),
    'select @c2',
    1,
    'CommonJS root normalizer',
  );
  assertNormalized(
    normalize("select '?' as literal, [?] as bracketed, \"?\" as quoted, ? as value"),
    "select '?' as literal, [?] as bracketed, \"?\" as quoted, @p0 as value",
    1,
    'protected lexical regions',
  );
  assertNormalized(
    normalize("select 'can''t ??' as literal, [a ]] ??] as bracketed, \"a \"\"??\"\"\" as quoted, ?"),
    "select 'can''t ??' as literal, [a ]] ??] as bracketed, \"a \"\"??\"\"\" as quoted, @p0",
    1,
    'escaped protected delimiters',
  );
  assertNormalized(
    normalize('select ? /* ? /* ?? */ ? */ -- ??\n, ?'),
    'select @p0 /* ? /* ?? */ ? */ -- ??\n, @p1',
    2,
    'comments and nested block comments',
  );

  for (const malformedSql of [
    "select '?",
    'select "?',
    'select [? ',
    'select /* ?',
    'select -- ?',
  ]) {
    assertNormalized(normalize(malformedSql), malformedSql, 0, `malformed protected ${malformedSql}`);
  }

  assertNormalized(
    normalize('select @p0 as existing, ? as generated'),
    'select @p0 as existing, @p0 as generated',
    1,
    'collision policy',
  );
  assertNormalized(
    normalize('select @p0 as existing, ? as generated', { avoidExisting: true }),
    'select @p0 as existing, @p1 as generated',
    1,
    'collision avoidance',
  );
  assertNormalized(
    normalize("select '@p0' as literal, [@p1] as bracketed, -- @p2\n ? as generated", {
      avoidExisting: true,
    }),
    "select '@p0' as literal, [@p1] as bracketed, -- @p2\n @p0 as generated",
    1,
    'protected collision markers ignored',
  );
  assertNormalized(
    normalize('select @p0suffix, foo@p1, @p2x, ? as generated', { avoidExisting: true }),
    'select @p0suffix, foo@p1, @p2x, @p0 as generated',
    1,
    'embedded collision markers ignored',
  );

  const inheritedOptions = Object.create({
    prefix: '@inherited',
    startAt: 9,
    style: 'unsupported',
    extra: true,
  });

  assertNormalized(
    normalize('select ?', inheritedOptions),
    'select @p0',
    1,
    'inherited options ignored',
  );

  const accessorOptions = {};
  Object.defineProperty(accessorOptions, 'prefix', {
    get() {
      throw new Error('secret getter');
    },
  });

  assertThrowsWithoutLeak(
    () => normalize('select ?', accessorOptions),
    TypeError,
    'data properties',
    ['secret getter', 'select ?'],
    'accessor option',
  );

  const throwingProxyOptions = new Proxy(
    {},
    {
      ownKeys() {
        throw new Error('proxy secret');
      },
    },
  );

  assertThrowsWithoutLeak(
    () => normalize('select ?', throwingProxyOptions),
    TypeError,
    'could not be validated',
    ['proxy secret', 'select ?'],
    'throwing proxy options',
  );
  assertThrowsWithoutLeak(
    () => normalize('select ?? from secret_table'),
    TypeError,
    'adjacent question-mark',
    ['secret_table', 'select ??'],
    'adjacent placeholders',
  );
  assertThrowsWithoutLeak(
    () => normalize('select ??? from longer_secret'),
    TypeError,
    'adjacent question-mark',
    ['longer_secret', '???'],
    'longer placeholder run',
  );
  assertNormalized(
    normalize("select '??' as literal, [??] as bracketed, -- ??\n ?"),
    "select '??' as literal, [??] as bracketed, -- ??\n @p0",
    1,
    'adjacent placeholders inside protected regions',
  );
  assertThrowsWithoutLeak(
    () => normalize('select ?', null),
    TypeError,
    'options must be an object',
    ['select ?'],
    'null options',
  );
  assertThrowsWithoutLeak(
    () => normalize('select ?', { extra: true }),
    TypeError,
    'unsupported key',
    ['select ?'],
    'unknown option key',
  );
  assertThrowsWithoutLeak(
    () => normalize('select ?', { [Symbol('secretSymbol')]: true }),
    TypeError,
    'unsupported key',
    ['secretSymbol', 'select ?'],
    'unknown symbol option key',
  );

  const nonEnumerableUnknown = {};
  Object.defineProperty(nonEnumerableUnknown, 'extra', { value: true });
  assertThrowsWithoutLeak(
    () => normalize('select ?', nonEnumerableUnknown),
    TypeError,
    'unsupported key',
    ['select ?'],
    'non-enumerable unknown key',
  );
  assertThrowsWithoutLeak(
    () => normalize('select ?', { style: 'named-secret' }),
    TypeError,
    'style',
    ['named-secret', 'select ?'],
    'invalid style',
  );
  assertThrowsWithoutLeak(
    () => normalize('select ?', { prefix: 1 }),
    TypeError,
    'prefix',
    ['select ?'],
    'invalid prefix',
  );
  assertThrowsWithoutLeak(
    () => normalize('select ?', { startAt: '0' }),
    TypeError,
    'startAt',
    ['select ?'],
    'non-numeric startAt',
  );
  assertThrowsWithoutLeak(
    () => normalize('select ?', { avoidExisting: 'true' }),
    TypeError,
    'avoidExisting',
    ['select ?'],
    'non-boolean avoidExisting',
  );
  assertThrowsWithoutLeak(
    () => normalize('select ?', { prefix: '', avoidExisting: true }),
    TypeError,
    'non-empty',
    ['select ?'],
    'empty collision prefix',
  );
  assertThrowsWithoutLeak(
    () => normalize('select ?', { prefix: '@p0', avoidExisting: true }),
    TypeError,
    'must not end with a digit',
    ['select ?'],
    'digit-ending collision prefix',
  );

  for (const invalidStartAt of [-1, 0.5, Number.MAX_SAFE_INTEGER + 1, Number.NaN]) {
    assertThrowsWithoutLeak(
      () => normalize('select ?', { startAt: invalidStartAt }),
      RangeError,
      'startAt',
      ['select ?'],
      `invalid startAt ${invalidStartAt}`,
    );
  }

  assertThrowsWithoutLeak(
    () => normalize('select ?, ?', { startAt: Number.MAX_SAFE_INTEGER }),
    RangeError,
    'marker index',
    ['select ?, ?'],
    'generated index overflow',
  );
  assertThrowsWithoutLeak(
    () => normalize('select ?', { prefix: '@'.repeat(128) }),
    RangeError,
    'variable name',
    ['select ?'],
    'generated variable name length',
  );
}

function assertNormalized(result, expectedSql, expectedPlaceholderCount, context) {
  if (result.sql !== expectedSql) {
    throw new Error(`${context}: expected ${expectedSql}, received ${result.sql}`);
  }

  if (result.placeholderCount !== expectedPlaceholderCount) {
    throw new Error(
      `${context}: expected ${expectedPlaceholderCount} placeholders, received ${result.placeholderCount}`,
    );
  }
}

function assertThrowsWithoutLeak(
  callback,
  expectedErrorConstructor,
  expectedMessage,
  forbiddenValues,
  context,
) {
  try {
    callback();
    throw new Error(`${context} did not throw`);
  } catch (error) {
    if (!(error instanceof expectedErrorConstructor)) {
      throw error;
    }

    if (!String(error.message).includes(expectedMessage)) {
      throw new Error(`${context} threw unexpected message: ${error.message}`);
    }

    assertDoesNotContain(String(error.message), forbiddenValues, `${context} error message`);
  }
}

async function assertRejectsWithoutLeak(
  callback,
  expectedErrorConstructor,
  expectedMessage,
  forbiddenValues,
  context,
) {
  try {
    await callback();
    throw new Error(`${context} did not reject`);
  } catch (error) {
    if (!(error instanceof expectedErrorConstructor)) {
      throw error;
    }

    if (!String(error.message).includes(expectedMessage)) {
      throw new Error(`${context} rejected with unexpected message: ${error.message}`);
    }

    assertDoesNotContain(String(error.message), forbiddenValues, `${context} error message`);
  }
}

function assertRuntimeCacheSize(expectedSize, context) {
  const runtimeCache = globalThis[runtimeCacheSymbol];

  if (runtimeCache && runtimeCache.size !== expectedSize) {
    throw new Error(`${context}: expected ${expectedSize}, received ${runtimeCache.size}`);
  }
}

async function assertRuntimeCacheMissing(appBundlePath, context) {
  const runtimeCache = globalThis[runtimeCacheSymbol];
  const dotnetJsPath = await fs.realpath(path.join(appBundlePath, '_framework', 'dotnet.js'));

  if (runtimeCache?.has(dotnetJsPath)) {
    throw new Error(`${context}: runtime cache entry was not invalidated`);
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

function assertInspectResultShape(inspectResult, options) {
  assertOnlyKeys(
    inspectResult,
    options.includeTokens
      ? ['failed', 'parser', 'projectionVersion', 'nodes', 'tokens', 'errors']
      : ['failed', 'parser', 'projectionVersion', 'nodes', 'errors'],
    'inspect result',
  );

  if (inspectResult.parser !== 'TSql160Parser' || inspectResult.projectionVersion !== 1) {
    throw new Error('inspect result returned unexpected projection ABI');
  }

  for (const node of inspectResult.nodes) {
    assertAllowedKeys(
      node,
      ['id', 'kind', 'parentId', 'pathFromParent', 'attributes'],
      ['id', 'kind', 'parentId', 'pathFromParent', 'span', 'attributes'],
      'structural node',
    );

    if (!Array.isArray(node.pathFromParent)) {
      throw new Error('structural node path is not an array');
    }

    for (const attribute of node.attributes) {
      if (attribute.kind === 'identifier' && attribute.state === 'present') {
        assertOnlyKeys(attribute, ['name', 'kind', 'state', 'value'], 'identifier attribute');
      } else if (attribute.kind === 'identifier') {
        assertOnlyKeys(
          attribute,
          ['name', 'kind', 'state', 'profile', 'reason'],
          'redacted identifier attribute',
        );
      } else {
        assertOnlyKeys(attribute, ['name', 'kind', 'value'], 'scalar attribute');
      }
    }

    if (node.span) {
      assertOnlyKeys(node.span, ['offset', 'length', 'line', 'column'], 'node span');
    }
  }

  if (options.includeTokens) {
    for (const token of inspectResult.tokens) {
      assertOnlyKeys(token, ['type', 'offset', 'length', 'line', 'column'], 'introspection token');

      if (token.length <= 0) {
        throw new Error('introspection token returned non-positive length');
      }
    }
  }

  for (const error of inspectResult.errors) {
    assertOnlyKeys(
      error,
      ['number', 'offset', 'line', 'column', 'coordinateState'],
      'introspection error',
    );
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

    if (['text', 'message', 'sql'].includes(key)) {
      throw new Error(`${context} returned forbidden key ${key}`);
    }
  }
}

function assertHasKind(items, kind, context) {
  if (!items.some((item) => item.kind === kind)) {
    throw new Error(`Missing ${context} kind ${kind}: ${JSON.stringify(items)}`);
  }
}

function assertHasIdentifierValue(nodes, value, context) {
  if (
    !nodes.some((node) =>
      node.attributes.some(
        (attribute) =>
          attribute.kind === 'identifier' &&
          attribute.state === 'present' &&
          attribute.value === value,
      ),
    )
  ) {
    throw new Error(`Missing ${context} identifier ${value}: ${JSON.stringify(nodes)}`);
  }
}

function assertHasRedactedIdentifier(nodes, reason) {
  if (
    !nodes.some((node) =>
      node.attributes.some(
        (attribute) =>
          attribute.kind === 'identifier' &&
          attribute.state === 'redacted' &&
          attribute.reason === reason,
      ),
    )
  ) {
    throw new Error(`Missing redacted identifier with reason ${reason}: ${JSON.stringify(nodes)}`);
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

async function writeMalformedIntrospectorBundle(rootDirectory, variant = 'location-error') {
  const appBundlePath = path.join(rootDirectory, `introspector-${variant}`, 'AppBundle');
  const frameworkPath = path.join(appBundlePath, '_framework');
  const abi = await readGeneratedIntrospectorAbi();
  let inspectBody;

  if (variant === 'attribute-policy') {
    inspectBody = `
                        return JSON.stringify({
                          failed: false,
                          parser: 'TSql160Parser',
                          projectionVersion: 1,
                          nodes: [
                            {
                              id: 0,
                              kind: 'TSqlScript',
                              parentId: null,
                              pathFromParent: [],
                              attributes: [
                                { name: 'Value', kind: 'enum', value: 'SecretTokenTable' },
                              ],
                            },
                          ],
                          errors: [],
                        });
`;
  } else if (variant === 'attribute-value-policy') {
    inspectBody = `
                        return JSON.stringify({
                          failed: false,
                          parser: 'TSql160Parser',
                          projectionVersion: 1,
                          nodes: [
                            {
                              id: 0,
                              kind: 'Identifier',
                              parentId: null,
                              pathFromParent: [],
                              attributes: [
                                { name: 'QuoteType', kind: 'enum', value: 'SecretTokenTable' },
                              ],
                            },
                          ],
                          errors: [],
                        });
`;
  } else if (variant === 'path-policy') {
    inspectBody = `
                        return JSON.stringify({
                          failed: false,
                          parser: 'TSql160Parser',
                          projectionVersion: 1,
                          nodes: [
                            {
                              id: 0,
                              kind: 'TSqlScript',
                              parentId: null,
                              pathFromParent: [],
                              attributes: [],
                            },
                            {
                              id: 1,
                              kind: 'Identifier',
                              parentId: 0,
                              pathFromParent: ['SecretTokenPath'],
                              attributes: [],
                            },
                          ],
                          errors: [],
                        });
`;
  } else if (variant === 'extra-root-policy') {
    inspectBody = `
                        return JSON.stringify({
                          failed: false,
                          parser: 'TSql160Parser',
                          projectionVersion: 1,
                          nodes: [
                            {
                              id: 0,
                              kind: 'TSqlScript',
                              parentId: null,
                              pathFromParent: [],
                              attributes: [],
                            },
                            {
                              id: 1,
                              kind: 'Identifier',
                              parentId: null,
                              pathFromParent: [],
                              attributes: [
                                { name: 'Value', kind: 'identifier', state: 'present', value: 'ExtraRootSecret' },
                              ],
                            },
                          ],
                          errors: [],
                        });
`;
  } else if (variant === 'parent-edge-policy') {
    inspectBody = `
                        return JSON.stringify({
                          failed: false,
                          parser: 'TSql160Parser',
                          projectionVersion: 1,
                          nodes: [
                            {
                              id: 0,
                              kind: 'TSqlScript',
                              parentId: null,
                              pathFromParent: [],
                              attributes: [],
                            },
                            {
                              id: 1,
                              kind: 'Identifier',
                              parentId: 0,
                              pathFromParent: ['Value'],
                              attributes: [],
                            },
                          ],
                          errors: [],
                        });
`;
  } else if (variant === 'path-index-policy') {
    inspectBody = `
                        return JSON.stringify({
                          failed: false,
                          parser: 'TSql160Parser',
                          projectionVersion: 1,
                          nodes: [
                            {
                              id: 0,
                              kind: 'TSqlScript',
                              parentId: null,
                              pathFromParent: [],
                              attributes: [],
                            },
                            {
                              id: 1,
                              kind: 'Identifier',
                              parentId: 0,
                              pathFromParent: ['Batches'],
                              attributes: [],
                            },
                          ],
                          errors: [],
                        });
`;
  } else if (variant === 'child-kind-policy') {
    inspectBody = `
                        return JSON.stringify({
                          failed: false,
                          parser: 'TSql160Parser',
                          projectionVersion: 1,
                          nodes: [
                            {
                              id: 0,
                              kind: 'TSqlScript',
                              parentId: null,
                              pathFromParent: [],
                              attributes: [],
                            },
                            {
                              id: 1,
                              kind: 'Identifier',
                              parentId: 0,
                              pathFromParent: ['Batches', '0'],
                              attributes: [],
                            },
                          ],
                          errors: [],
                        });
`;
  } else if (variant === 'empty-success-policy') {
    inspectBody = `
                        return JSON.stringify({
                          failed: false,
                          parser: 'TSql160Parser',
                          projectionVersion: 1,
                          nodes: [],
                          errors: [],
                        });
`;
  } else if (variant === 'failed-payload-policy') {
    inspectBody = `
                        return JSON.stringify({
                          failed: true,
                          parser: 'TSql160Parser',
                          projectionVersion: 1,
                          nodes: [
                            {
                              id: 0,
                              kind: 'TSqlScript',
                              parentId: null,
                              pathFromParent: [],
                              attributes: [],
                            },
                          ],
                          tokens: [
                            { type: 0, offset: 0, length: 1, line: 1, column: 1 },
                          ],
                          errors: [],
                        });
`;
  } else {
    inspectBody = `
                        return JSON.stringify({
                          failed: true,
                          parser: 'TSql160Parser',
                          projectionVersion: 1,
                          nodes: [],
                          errors: [
                            {
                              number: 1,
                              offset: sql.length + 1,
                              line: 1,
                              column: 1,
                              coordinateState: 'available',
                            },
                          ],
                        });
`;
  }

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
	                    GetIntrospectorAbiJson() {
	                      return ${JSON.stringify(JSON.stringify(abi))};
	                    },
	                    InspectJson(sql) {
${inspectBody}
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

async function readGeneratedIntrospectorAbi() {
  const generatedSource = await fs.readFile(
    fileURLToPath(new URL('../src/introspector-projection.v1.generated.ts', import.meta.url)),
    'utf8',
  );

  return {
    parser: 'TSql160Parser',
    projectionVersion: 1,
    manifestSha256: readGeneratedString(generatedSource, 'manifestSha256'),
    resultSchemaSha256: readGeneratedString(generatedSource, 'resultSchemaSha256'),
    allowlistSha256: readGeneratedString(generatedSource, 'allowlistSha256'),
  };
}

function readGeneratedString(source, key) {
  const match = source.match(new RegExp(`"${key}": "([^"]+)"`));

  if (!match) {
    throw new Error(`Missing generated introspector ABI key ${key}`);
  }

  return match[1];
}
