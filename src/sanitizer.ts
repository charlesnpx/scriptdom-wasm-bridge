import type { TsqlLocationError } from './result-validation.js';
import {
  applyTsqlSanitizerPolicy,
  initializeTokenPolicy,
  type TsqlTokenPolicy,
} from './token-policy.js';
import {
  loadTsqlTokenizerRuntime,
  type CreateTsqlTokenizerOptions,
  type LoadedTsqlTokenizerRuntime,
} from './tokenizer-runtime.js';

export type CreateTsqlSanitizerOptions = CreateTsqlTokenizerOptions;

export type TsqlSanitizeDiagnostic = {
  kind: 'tokenization-error';
  number: number;
  offset: number;
  line: number;
  column: number;
};

export type TsqlSanitizeResult = {
  sql: string;
  tokenizationFailed: boolean;
  diagnostics: TsqlSanitizeDiagnostic[];
};

export type TsqlSanitizer = {
  sanitize(sql: string): TsqlSanitizeResult;
};

const tokenPolicyCache = new WeakMap<LoadedTsqlTokenizerRuntime, TsqlTokenPolicy>();

export async function createTsqlSanitizer(
  options: CreateTsqlSanitizerOptions = {},
): Promise<TsqlSanitizer> {
  const runtime = await loadTsqlTokenizerRuntime(options);
  const tokenPolicy = getTokenPolicy(runtime);

  return {
    sanitize(sql: string) {
      if (typeof sql !== 'string') {
        throw new TypeError('SQL input must be a string');
      }

      const tokenizeResult = runtime.tokenize(sql);

      if (tokenizeResult.failed) {
        return {
          sql: '',
          tokenizationFailed: true,
          diagnostics: tokenizeResult.errors.map(toDiagnostic),
        };
      }

      return {
        sql: applyTsqlSanitizerPolicy(sql, tokenizeResult, tokenPolicy),
        tokenizationFailed: false,
        diagnostics: [],
      };
    },
  };
}

function getTokenPolicy(runtime: LoadedTsqlTokenizerRuntime) {
  const cachedPolicy = tokenPolicyCache.get(runtime);

  if (cachedPolicy) {
    return cachedPolicy;
  }

  const tokenPolicy = initializeTokenPolicy(runtime.tokenize);
  tokenPolicyCache.set(runtime, tokenPolicy);
  return tokenPolicy;
}

function toDiagnostic(error: TsqlLocationError): TsqlSanitizeDiagnostic {
  return {
    kind: 'tokenization-error',
    number: error.number,
    offset: error.offset,
    line: error.line,
    column: error.column,
  };
}
