import { PARSER_ABI, type TsqlParserNodeKind, type TsqlParserEdgeName, type TsqlParserAttributeName } from './parser-projection.v1.generated.js';
export type { TsqlParserNodeKind, TsqlParserEdgeName, TsqlParserAttributeName };
export type CreateTsqlParserOptions = {
    appBundlePath?: string;
};
export type TsqlParseOptions = {
    initialQuotedIdentifiers?: boolean;
};
export type TsqlParseSpan = {
    offset: number;
    length: number;
    line: number;
    column: number;
};
export type TsqlParseAttribute = {
    name: TsqlParserAttributeName;
    kind: 'string' | 'enum';
    value: string | null;
} | {
    name: TsqlParserAttributeName;
    kind: 'boolean';
    value: boolean | null;
} | {
    name: TsqlParserAttributeName;
    kind: 'integer';
    value: number | null;
};
export type TsqlParseNode = {
    id: number;
    kind: TsqlParserNodeKind;
    parentId: number | null;
    pathFromParent: [] | [TsqlParserEdgeName] | [TsqlParserEdgeName, string];
    span: TsqlParseSpan | null;
    attributes: TsqlParseAttribute[];
};
export type TsqlParseError = {
    number: number;
    span: TsqlParseSpan | null;
};
export type TsqlParseFailure = 'parse-error' | 'resource-limit' | 'unsupported-node' | 'internal-error';
export type TsqlParseResult = {
    parser: typeof PARSER_ABI.parser;
    projectionVersion: typeof PARSER_ABI.projectionVersion;
    failure: TsqlParseFailure | null;
    nodes: TsqlParseNode[];
    errors: TsqlParseError[];
};
export type TsqlParser = {
    parse(sql: string, options?: TsqlParseOptions): TsqlParseResult;
};
export declare function createTsqlParser(options?: CreateTsqlParserOptions): Promise<TsqlParser>;
