import { type TsqlTokenizeResult } from './token-result.js';
export type TsqlTokenPolicy = {
    literalTokenTypes: Set<number>;
    commentTokenTypes: Set<number>;
};
export declare function initializeTokenPolicy(tokenize: (sql: string) => TsqlTokenizeResult): TsqlTokenPolicy;
export declare function applyTsqlSanitizerPolicy(sql: string, tokenizeResult: TsqlTokenizeResult, tokenPolicy: TsqlTokenPolicy): string;
