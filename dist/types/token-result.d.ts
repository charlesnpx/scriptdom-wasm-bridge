import { type TsqlLocationError } from './result-validation.js';
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
export declare function parseAndValidateTokenizeResult(sql: string, rawJson: string): TsqlTokenizeResult;
export declare function validateTsqlTokenizeResult(sql: string, tokenizeResult: unknown): TsqlTokenizeResult;
