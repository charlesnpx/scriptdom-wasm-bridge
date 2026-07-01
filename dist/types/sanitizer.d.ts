import { type CreateTsqlTokenizerOptions } from './tokenizer-runtime.js';
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
export declare function createTsqlSanitizer(options?: CreateTsqlSanitizerOptions): Promise<TsqlSanitizer>;
