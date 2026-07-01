import {
  assertExactKeys,
  assertNonNegativeInteger,
  assertObject,
  validateLocationError,
  type TsqlLocationError,
} from './result-validation.js';

export type { TsqlLocationError } from './result-validation.js';

export type TsqlToken = {
  type: number;
  offset: number;
  length: number;
  line: number;
  column: number;
};

export type TsqlTokenizeResult = {
  failed: boolean;
  tokens: TsqlToken[];
  errors: TsqlLocationError[];
};

const resultKeys = new Set(['failed', 'tokens', 'errors']);
const tokenKeys = new Set(['type', 'offset', 'length', 'line', 'column']);

export function parseAndValidateTokenizeResult(
  sql: string,
  rawJson: string,
): TsqlTokenizeResult {
  return validateTsqlTokenizeResult(sql, JSON.parse(rawJson) as unknown);
}

export function validateTsqlTokenizeResult(
  sql: string,
  tokenizeResult: unknown,
): TsqlTokenizeResult {
  if (typeof sql !== 'string') {
    throw new TypeError('SQL input must be a string');
  }

  assertObject(tokenizeResult, 'tokenize result');
  assertExactKeys(tokenizeResult, resultKeys, 'tokenize result keys');

  if (typeof tokenizeResult.failed !== 'boolean') {
    throw new Error('Invalid ScriptDOM result: tokenize result failed');
  }

  if (!Array.isArray(tokenizeResult.tokens) || !Array.isArray(tokenizeResult.errors)) {
    throw new Error('Invalid ScriptDOM result: tokenize result arrays');
  }

  const tokens = tokenizeResult.tokens.map((token, index) => {
    assertObject(token, `tokens[${index}]`);
    assertExactKeys(token, tokenKeys, `tokens[${index}] keys`);
    assertNonNegativeInteger(token.type, `tokens[${index}].type`);
    assertNonNegativeInteger(token.offset, `tokens[${index}].offset`);
    assertNonNegativeInteger(token.length, `tokens[${index}].length`);
    assertNonNegativeInteger(token.line, `tokens[${index}].line`);
    assertNonNegativeInteger(token.column, `tokens[${index}].column`);

    if (token.offset > sql.length || token.offset + token.length > sql.length) {
      throw new Error('Invalid ScriptDOM result: token range');
    }

    return {
      type: token.type,
      offset: token.offset,
      length: token.length,
      line: token.line,
      column: token.column,
    };
  });

  const errors = tokenizeResult.errors.map((error, index) =>
    validateLocationError(error, `errors[${index}]`, sql.length),
  );

  return {
    failed: tokenizeResult.failed,
    tokens,
    errors,
  };
}
