import { createRequire } from 'node:module';

import { createScriptDomTokenizer, validateTokenizeResult } from 'scriptdom-wasm-bridge';

const require = createRequire(import.meta.url);
const { createScriptDomTokenizer: createScriptDomTokenizerCommonJs } = require(
  'scriptdom-wasm-bridge',
);

const [tokenizer, concurrentTokenizer, mixedCommonJsTokenizer] = await Promise.all([
  createScriptDomTokenizer(),
  createScriptDomTokenizer(),
  createScriptDomTokenizerCommonJs(),
]);

function assertDoesNotContain(value, forbiddenValues, context) {
  for (const forbidden of forbiddenValues) {
    if (value.includes(forbidden)) {
      throw new Error(`${context} leaked a sample value`);
    }
  }
}

function assertTokenShape(tokenizeResult) {
  for (const token of tokenizeResult.tokens) {
    if (Object.hasOwn(token, 'text')) {
      throw new Error('Tokenizer returned token text');
    }
  }

  for (const error of tokenizeResult.errors) {
    if (Object.hasOwn(error, 'message')) {
      throw new Error('Tokenizer returned parser text');
    }
  }
}

const samples = [
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
    forbidden: ['token--secret', 'payload', 'trailing secret'],
  },
  {
    name: 'double quoted string literal',
    sql: 'select "doubleQuotedSecret" as value',
    forbidden: ['doubleQuotedSecret'],
  },
];

const concurrentSanitized = concurrentTokenizer.sanitize("select 'concurrentSecret'");
assertDoesNotContain(
  concurrentSanitized,
  ['concurrentSecret'],
  'concurrent tokenizer initialization',
);

const mixedCommonJsSanitized = mixedCommonJsTokenizer.sanitize("select 'mixedCommonJsSecret'");
assertDoesNotContain(
  mixedCommonJsSanitized,
  ['mixedCommonJsSecret'],
  'mixed ESM/CommonJS tokenizer initialization',
);

for (const sample of samples) {
  const tokenized = tokenizer.tokenize(sample.sql);
  const tokenizedJson = JSON.stringify(tokenized);
  const sanitized = tokenizer.sanitize(sample.sql);

  assertTokenShape(tokenized);
  assertDoesNotContain(tokenizedJson, sample.forbidden, `${sample.name} token JSON`);
  assertDoesNotContain(sanitized, sample.forbidden, `${sample.name} sanitized SQL`);

  if (!sanitized.includes('?')) {
    throw new Error(`${sample.name} did not include placeholders`);
  }

  console.log(`${sample.name}: ${sanitized}`);
}

const policySnapshot = tokenizer.getTokenPolicy();
if (!Object.isFrozen(policySnapshot) || !Object.isFrozen(policySnapshot.literalTokenTypes)) {
  throw new Error('Token policy snapshot is mutable');
}

try {
  policySnapshot.literalTokenTypes.push(999999);
  throw new Error('Token policy snapshot accepted mutation');
} catch (error) {
  if (!(error instanceof TypeError)) {
    throw error;
  }
}

const stillRedacted = tokenizer.sanitize("select 'policyMutationSecret'");
assertDoesNotContain(stillRedacted, ['policyMutationSecret'], 'policy mutation check');

try {
  validateTokenizeResult('select 1', {
    failed: false,
    tokens: [{ type: 1, offset: 0, length: 1, line: 1, column: 1, text: 'x' }],
    errors: [],
  });
  throw new Error('Validator accepted token text');
} catch (error) {
  if (!String(error.message).includes('Invalid ScriptDOM token result')) {
    throw error;
  }
}

try {
  validateTokenizeResult('select 1', {
    failed: true,
    tokens: [],
    errors: [{ number: 1, offset: 0, line: 1, column: 1, message: 'secret' }],
  });
  throw new Error('Validator accepted parser message text');
} catch (error) {
  if (!String(error.message).includes('Invalid ScriptDOM token result')) {
    throw error;
  }
}

const parseErrorSql = "select 'parse_error_secret";
const parseErrorResult = tokenizer.tokenize(parseErrorSql);
const parseErrorJson = JSON.stringify(parseErrorResult);

assertTokenShape(parseErrorResult);

if (!parseErrorResult.failed || parseErrorResult.errors.length === 0) {
  throw new Error('Tokenizer did not return a location-only parse error');
}

assertDoesNotContain(
  parseErrorJson,
  ['parse_error_secret', 'Unclosed', 'quotation', 'Incorrect', 'syntax'],
  'parse error JSON',
);

console.log(`parse errors: ${JSON.stringify(parseErrorResult.errors)}`);

for (const sql of [
  "select 'sanitize_error_secret",
  'select /* sanitize_comment_secret',
  'select ?',
]) {
  try {
    tokenizer.sanitize(sql);
    throw new Error('sanitize accepted a failed parse');
  } catch (error) {
    const message = String(error.message);
    assertDoesNotContain(message, [
      'sanitize_error_secret',
      'sanitize_comment_secret',
      'select ?',
    ], 'sanitize failure message');

    if (message !== 'ScriptDOM tokenization failed') {
      throw error;
    }
  }
}
