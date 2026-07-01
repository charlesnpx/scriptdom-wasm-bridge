export type TsqlLocationError = {
    number: number;
    offset: number;
    line: number;
    column: number;
};
export declare function assertObject(value: unknown, fieldName: string): asserts value is Record<string, unknown>;
export declare function assertInteger(value: unknown, fieldName: string): asserts value is number;
export declare function assertNonNegativeInteger(value: unknown, fieldName: string): asserts value is number;
export declare function assertString(value: unknown, fieldName: string): asserts value is string;
export declare function assertStringArray(value: unknown, fieldName: string): asserts value is string[];
export declare function assertExactKeys(value: Record<string, unknown>, expectedKeys: Set<string>, fieldName: string): void;
export declare function assertOptionalKeys(value: Record<string, unknown>, requiredKeys: Set<string>, allowedKeys: Set<string>, fieldName: string): void;
export declare function assertNoForbiddenKeys(value: Record<string, unknown>, fieldName: string): void;
export declare function validateLocationError(value: unknown, fieldName: string, sqlLength?: number): TsqlLocationError;
export declare function validateOptionalRange(value: Record<string, unknown>, fieldName: string, sqlLength: number): void;
