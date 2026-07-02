export type NormalizeTsqlPlaceholdersOptions = {
    style?: 'question-mark';
    prefix?: string;
    startAt?: number;
};
export type NormalizeTsqlPlaceholdersResult = {
    sql: string;
    placeholderCount: number;
};
export declare function normalizeTsqlPlaceholders(sql: string, options?: NormalizeTsqlPlaceholdersOptions): NormalizeTsqlPlaceholdersResult;
