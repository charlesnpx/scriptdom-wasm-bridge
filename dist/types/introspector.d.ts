import { INTROSPECTOR_PROJECTION_ABI, type TsqlIdentifierState, type TsqlInspectCoordinateState, type TsqlInspectTokenType, type TsqlStructuralAttributeKind, type TsqlStructuralAttributeName, type TsqlStructuralNodeKind } from './introspector-projection.v1.generated.js';
export type { TsqlIdentifierState, TsqlInspectCoordinateState, TsqlInspectTokenType, TsqlStructuralAttributeKind, TsqlStructuralAttributeName, TsqlStructuralNodeKind, };
export type CreateTsqlIntrospectorOptions = {
    appBundlePath?: string;
};
export type TsqlInspectOptions = {
    includeSpans?: boolean;
    includeTokens?: boolean;
};
export type TsqlInspectSpan = {
    offset: number;
    length: number;
    line: number;
    column: number;
};
export type TsqlStructuralIdentifierAttribute = {
    name: TsqlStructuralAttributeName;
    kind: 'identifier';
    state: 'present';
    value: string;
} | {
    name: TsqlStructuralAttributeName;
    kind: 'identifier';
    state: 'redacted';
    profile: typeof INTROSPECTOR_PROJECTION_ABI.identifierRedactionProfile;
    reason: 'literal-origin' | 'secret-pattern';
};
export type TsqlStructuralScalarAttribute = {
    name: TsqlStructuralAttributeName;
    kind: Exclude<TsqlStructuralAttributeKind, 'identifier'>;
    value: string | boolean;
};
export type TsqlStructuralAttribute = TsqlStructuralIdentifierAttribute | TsqlStructuralScalarAttribute;
export type TsqlStructuralNode = {
    id: number;
    kind: TsqlStructuralNodeKind;
    parentId: number | null;
    pathFromParent: string[];
    span?: TsqlInspectSpan;
    attributes: TsqlStructuralAttribute[];
};
export type TsqlInspectToken = {
    type: TsqlInspectTokenType;
    offset: number;
    length: number;
    line: number;
    column: number;
};
export type TsqlInspectLocationError = {
    number: number;
    offset: number;
    line: number;
    column: number;
    coordinateState: TsqlInspectCoordinateState;
};
export type TsqlInspectResult = {
    failed: boolean;
    parser: typeof INTROSPECTOR_PROJECTION_ABI.parser;
    projectionVersion: typeof INTROSPECTOR_PROJECTION_ABI.projectionVersion;
    nodes: TsqlStructuralNode[];
    tokens?: TsqlInspectToken[];
    errors: TsqlInspectLocationError[];
};
export type TsqlIntrospector = {
    inspect(sql: string, options?: TsqlInspectOptions): TsqlInspectResult;
};
export declare function createTsqlIntrospector(options?: CreateTsqlIntrospectorOptions): Promise<TsqlIntrospector>;
