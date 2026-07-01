import { type TsqlLocationError } from './result-validation.js';
export type CreateTsqlIntrospectorOptions = {
    appBundlePath?: string;
};
export type TsqlStatement = {
    kind: string;
    offset: number;
    length: number;
};
export type TsqlObjectReference = {
    context: string;
    nameParts: string[];
    offset?: number;
    length?: number;
};
export type TsqlFunctionCall = {
    nameParts: string[];
    offset?: number;
    length?: number;
};
export type TsqlProcedureCall = {
    nameParts: string[];
    offset?: number;
    length?: number;
};
export type TsqlConstruct = {
    kind: string;
    offset?: number;
    length?: number;
};
export type TsqlInspectResult = {
    failed: boolean;
    statements: TsqlStatement[];
    objectReferences: TsqlObjectReference[];
    functionCalls: TsqlFunctionCall[];
    procedureCalls: TsqlProcedureCall[];
    constructs: TsqlConstruct[];
    errors: TsqlLocationError[];
};
export type TsqlIntrospector = {
    inspect(sql: string): TsqlInspectResult;
};
export declare function createTsqlIntrospector(options?: CreateTsqlIntrospectorOptions): Promise<TsqlIntrospector>;
