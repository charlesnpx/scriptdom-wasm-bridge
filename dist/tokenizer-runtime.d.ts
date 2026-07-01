import { type TsqlTokenizeResult } from './token-result.js';
export type CreateTsqlTokenizerOptions = {
    appBundlePath?: string;
};
export type LoadedTsqlTokenizerRuntime = {
    tokenize(sql: string): TsqlTokenizeResult;
};
export declare function loadTsqlTokenizerRuntime(options?: CreateTsqlTokenizerOptions): Promise<LoadedTsqlTokenizerRuntime>;
