import {
  loadTsqlTokenizerRuntime,
  type CreateTsqlTokenizerOptions,
} from './tokenizer-runtime.js';
import type { TsqlLocationError, TsqlToken, TsqlTokenizeResult } from './token-result.js';

export type { CreateTsqlTokenizerOptions };
export type { TsqlLocationError, TsqlToken, TsqlTokenizeResult };

export type TsqlTokenizer = {
  tokenize(sql: string): TsqlTokenizeResult;
};

export async function createTsqlTokenizer(
  options: CreateTsqlTokenizerOptions = {},
): Promise<TsqlTokenizer> {
  const runtime = await loadTsqlTokenizerRuntime(options);

  return {
    tokenize: runtime.tokenize,
  };
}
