import { type CreateTsqlTokenizerOptions } from './tokenizer-runtime.js';
import type { TsqlLocationError, TsqlToken, TsqlTokenizeResult } from './token-result.js';
export type { CreateTsqlTokenizerOptions };
export type { TsqlLocationError, TsqlToken, TsqlTokenizeResult };
export type TsqlTokenizer = {
    tokenize(sql: string): TsqlTokenizeResult;
};
export declare function createTsqlTokenizer(options?: CreateTsqlTokenizerOptions): Promise<TsqlTokenizer>;
