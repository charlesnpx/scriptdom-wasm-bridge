import { type MarkerTemplate } from './marker-collisions.js';
import { type TsqlTokenizeResult } from './token-result.js';
export type TsqlTokenPolicy = {
    literalTokenTypes: Set<number>;
    commentTokenTypes: Set<number>;
};
export type TsqlSanitizerPolicyOptions = {
    literalMarker: TsqlLiteralMarkerOptions;
};
export type TsqlLiteralMarkerOptions = {
    kind: 'fixed';
    value: string;
} | {
    kind: 'indexed';
    marker: MarkerTemplate;
    startAt: number;
    avoidExisting: boolean;
};
export declare function initializeTokenPolicy(tokenize: (sql: string) => TsqlTokenizeResult): TsqlTokenPolicy;
export declare function applyTsqlSanitizerPolicy(sql: string, tokenizeResult: TsqlTokenizeResult, tokenPolicy: TsqlTokenPolicy, options: TsqlSanitizerPolicyOptions): string;
