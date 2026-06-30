export type ScriptDomToken = {
    type: number;
    offset: number;
    length: number;
    line: number;
    column: number;
};
export type ScriptDomParseError = {
    number: number;
    offset: number;
    line: number;
    column: number;
};
export type ScriptDomTokenizeResult = {
    failed: boolean;
    tokens: ScriptDomToken[];
    errors: ScriptDomParseError[];
};
export type ScriptDomTokenPolicy = {
    literalTokenTypes: Set<number>;
    commentTokenTypes: Set<number>;
};
export type ScriptDomTokenPolicySnapshot = {
    readonly literalTokenTypes: readonly number[];
    readonly commentTokenTypes: readonly number[];
};
export type ScriptDomTokenizer = {
    tokenize(sql: string): ScriptDomTokenizeResult;
    sanitize(sql: string): string;
    getTokenPolicy(): ScriptDomTokenPolicySnapshot;
};
export type CreateScriptDomTokenizerOptions = {
    appBundlePath?: string;
};
export declare function validateTokenizeResult(sql: string, tokenizeResult: unknown): asserts tokenizeResult is ScriptDomTokenizeResult;
export declare function initializeTokenPolicy(tokenize: (sql: string) => ScriptDomTokenizeResult): ScriptDomTokenPolicy;
export declare function sanitizeSqlFromTokens(sql: string, tokenizeResult: ScriptDomTokenizeResult, tokenPolicy: ScriptDomTokenPolicy): string;
export declare function createScriptDomTokenizer(options?: CreateScriptDomTokenizerOptions): Promise<ScriptDomTokenizer>;
