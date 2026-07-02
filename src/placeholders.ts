export type NormalizeTsqlPlaceholdersOptions = {
  style?: 'question-mark';
  prefix?: string;
  startAt?: number;
};

export type NormalizeTsqlPlaceholdersResult = {
  sql: string;
  placeholderCount: number;
};

type NormalizedOptions = {
  prefix: string;
  startAt: number;
};

const singleQuote = 39;
const doubleQuote = 34;
const openBracket = 91;
const closeBracket = 93;
const hyphen = 45;
const slash = 47;
const asterisk = 42;
const questionMark = 63;
const carriageReturn = 13;
const lineFeed = 10;

const defaultStyle = 'question-mark';
const defaultPrefix = '@p';
const defaultStartAt = 0;
const maxTsqlVariableNameLength = 128;
const allowedOptionKeys = new Set(['style', 'prefix', 'startAt']);

export function normalizeTsqlPlaceholders(
  sql: string,
  options?: NormalizeTsqlPlaceholdersOptions,
): NormalizeTsqlPlaceholdersResult {
  if (typeof sql !== 'string') {
    throw new TypeError('SQL input must be a string');
  }

  const { prefix, startAt } = normalizeOptions(options);
  const outputParts: string[] = [];
  let placeholderCount = 0;
  let position = 0;
  let copiedUntil = 0;

  while (position < sql.length) {
    const current = sql.charCodeAt(position);
    const next = sql.charCodeAt(position + 1);

    if (current === singleQuote) {
      position = scanSingleQuotedRegion(sql, position);
      continue;
    }

    if (current === doubleQuote) {
      position = scanDoubleQuotedRegion(sql, position);
      continue;
    }

    if (current === openBracket) {
      position = scanBracketedIdentifier(sql, position);
      continue;
    }

    if (current === hyphen && next === hyphen) {
      position = scanLineComment(sql, position);
      continue;
    }

    if (current === slash && next === asterisk) {
      position = scanBlockComment(sql, position);
      continue;
    }

    if (current === questionMark) {
      if (next === questionMark) {
        throw new TypeError(
          'normalizeTsqlPlaceholders does not support adjacent question-mark placeholders',
        );
      }

      outputParts.push(sql.slice(copiedUntil, position));
      outputParts.push(createPlaceholder(prefix, startAt, placeholderCount));
      placeholderCount += 1;
      position += 1;
      copiedUntil = position;
      continue;
    }

    position += 1;
  }

  if (outputParts.length === 0) {
    return { sql, placeholderCount };
  }

  outputParts.push(sql.slice(copiedUntil));

  return {
    sql: outputParts.join(''),
    placeholderCount,
  };
}

function normalizeOptions(options: NormalizeTsqlPlaceholdersOptions | undefined): NormalizedOptions {
  if (options === undefined) {
    return {
      prefix: defaultPrefix,
      startAt: defaultStartAt,
    };
  }

  if (options === null || typeof options !== 'object' || Array.isArray(options)) {
    throw new TypeError('normalizeTsqlPlaceholders options must be an object');
  }

  for (const key of Reflect.ownKeys(options)) {
    if (typeof key !== 'string' || !allowedOptionKeys.has(key)) {
      throw new TypeError('normalizeTsqlPlaceholders options contain an unsupported key');
    }
  }

  const style = readOwnDataProperty(options, 'style');
  const prefix = readOwnDataProperty(options, 'prefix');
  const startAt = readOwnDataProperty(options, 'startAt');

  if (style !== undefined && style !== defaultStyle) {
    throw new TypeError('normalizeTsqlPlaceholders style must be "question-mark"');
  }

  if (prefix !== undefined && typeof prefix !== 'string') {
    throw new TypeError('normalizeTsqlPlaceholders prefix must be a string');
  }

  if (startAt !== undefined && typeof startAt !== 'number') {
    throw new TypeError('normalizeTsqlPlaceholders startAt must be a number');
  }

  const normalizedStartAt = startAt ?? defaultStartAt;

  if (!Number.isSafeInteger(normalizedStartAt) || normalizedStartAt < 0) {
    throw new RangeError('normalizeTsqlPlaceholders startAt must be a non-negative safe integer');
  }

  return {
    prefix: prefix ?? defaultPrefix,
    startAt: normalizedStartAt,
  };
}

function readOwnDataProperty(
  options: NormalizeTsqlPlaceholdersOptions,
  key: keyof NormalizeTsqlPlaceholdersOptions,
): unknown {
  const descriptor = Object.getOwnPropertyDescriptor(options, key);

  if (!descriptor) {
    return undefined;
  }

  if (!Object.hasOwn(descriptor, 'value')) {
    throw new TypeError('normalizeTsqlPlaceholders options must use data properties');
  }

  return descriptor.value;
}

function createPlaceholder(prefix: string, startAt: number, placeholderCount: number): string {
  const index = startAt + placeholderCount;

  if (!Number.isSafeInteger(index)) {
    throw new RangeError('normalizeTsqlPlaceholders generated placeholder index is out of range');
  }

  const placeholder = `${prefix}${index}`;

  if (placeholder.length > maxTsqlVariableNameLength) {
    throw new RangeError('normalizeTsqlPlaceholders generated variable name is too long');
  }

  return placeholder;
}

function scanSingleQuotedRegion(sql: string, start: number): number {
  let position = start + 1;

  while (position < sql.length) {
    if (sql.charCodeAt(position) === singleQuote) {
      if (sql.charCodeAt(position + 1) === singleQuote) {
        position += 2;
        continue;
      }

      return position + 1;
    }

    position += 1;
  }

  return sql.length;
}

function scanDoubleQuotedRegion(sql: string, start: number): number {
  let position = start + 1;

  while (position < sql.length) {
    if (sql.charCodeAt(position) === doubleQuote) {
      if (sql.charCodeAt(position + 1) === doubleQuote) {
        position += 2;
        continue;
      }

      return position + 1;
    }

    position += 1;
  }

  return sql.length;
}

function scanBracketedIdentifier(sql: string, start: number): number {
  let position = start + 1;

  while (position < sql.length) {
    if (sql.charCodeAt(position) === closeBracket) {
      if (sql.charCodeAt(position + 1) === closeBracket) {
        position += 2;
        continue;
      }

      return position + 1;
    }

    position += 1;
  }

  return sql.length;
}

function scanLineComment(sql: string, start: number): number {
  let position = start + 2;

  while (position < sql.length) {
    const current = sql.charCodeAt(position);

    if (current === carriageReturn || current === lineFeed) {
      return position;
    }

    position += 1;
  }

  return sql.length;
}

function scanBlockComment(sql: string, start: number): number {
  let depth = 1;
  let position = start + 2;

  while (position < sql.length) {
    const current = sql.charCodeAt(position);
    const next = sql.charCodeAt(position + 1);

    if (current === slash && next === asterisk) {
      depth += 1;
      position += 2;
      continue;
    }

    if (current === asterisk && next === slash) {
      depth -= 1;
      position += 2;

      if (depth === 0) {
        return position;
      }

      continue;
    }

    position += 1;
  }

  return sql.length;
}
