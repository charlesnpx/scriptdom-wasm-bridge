export type MarkerTemplate = {
  markerPrefix: string;
  markerSuffix: string;
};

const singleQuote = 39;
const doubleQuote = 34;
const openBracket = 91;
const closeBracket = 93;
const hyphen = 45;
const slash = 47;
const asterisk = 42;
const carriageReturn = 13;
const lineFeed = 10;
const zero = 48;
const nine = 57;
const upperA = 65;
const upperZ = 90;
const lowerA = 97;
const lowerZ = 122;
const underscore = 95;
const atSign = 64;
const numberSign = 35;
const dollarSign = 36;
const maxTsqlVariableNameLength = 128;

export function collectReservedMarkerIndexes(
  sql: string,
  markerPrefix: string,
  markerSuffix = '',
): Set<number> {
  const reservedIndexes = new Set<number>();
  let position = 0;

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

    const markerMatch = matchMarker(sql, position, markerPrefix, markerSuffix);

    if (markerMatch) {
      reservedIndexes.add(markerMatch.index);
      position = markerMatch.end;
      continue;
    }

    position += 1;
  }

  return reservedIndexes;
}

export function nextAvailableMarkerIndex(
  startIndex: number,
  reservedIndexes: Set<number>,
  context: string,
) {
  let index = startIndex;

  while (reservedIndexes.has(index)) {
    index += 1;

    if (!Number.isSafeInteger(index)) {
      throw new RangeError(`${context} generated marker index is out of range`);
    }
  }

  return index;
}

export function createMarker(marker: MarkerTemplate, index: number, context: string) {
  if (!Number.isSafeInteger(index)) {
    throw new RangeError(`${context} generated marker index is out of range`);
  }

  const value = `${marker.markerPrefix}${index}${marker.markerSuffix}`;

  if (value.length > maxTsqlVariableNameLength) {
    throw new RangeError(`${context} generated variable name is too long`);
  }

  return value;
}

export function assertCollisionPrefix(markerPrefix: string, context: string) {
  if (markerPrefix.length === 0) {
    throw new TypeError(`${context} collision-aware marker prefix must be non-empty`);
  }

  if (isAsciiDigit(markerPrefix.charCodeAt(markerPrefix.length - 1))) {
    throw new TypeError(`${context} collision-aware marker prefix must not end with a digit`);
  }
}

function matchMarker(
  sql: string,
  position: number,
  markerPrefix: string,
  markerSuffix: string,
): { index: number; end: number } | undefined {
  if (!sql.startsWith(markerPrefix, position)) {
    return undefined;
  }

  if (position > 0 && isMarkerIdentifierContinuation(sql.charCodeAt(position - 1))) {
    return undefined;
  }

  let numberStart = position + markerPrefix.length;
  let numberEnd = numberStart;

  while (numberEnd < sql.length && isAsciiDigit(sql.charCodeAt(numberEnd))) {
    numberEnd += 1;
  }

  if (numberEnd === numberStart) {
    return undefined;
  }

  if (markerSuffix && !sql.startsWith(markerSuffix, numberEnd)) {
    return undefined;
  }

  const end = numberEnd + markerSuffix.length;

  if (end < sql.length && isMarkerIdentifierContinuation(sql.charCodeAt(end))) {
    return undefined;
  }

  const index = Number(sql.slice(numberStart, numberEnd));

  if (!Number.isSafeInteger(index)) {
    return undefined;
  }

  return { index, end };
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

function isMarkerIdentifierContinuation(charCode: number) {
  return (
    isAsciiDigit(charCode) ||
    (charCode >= upperA && charCode <= upperZ) ||
    (charCode >= lowerA && charCode <= lowerZ) ||
    charCode === underscore ||
    charCode === atSign ||
    charCode === numberSign ||
    charCode === dollarSign
  );
}

function isAsciiDigit(charCode: number) {
  return charCode >= zero && charCode <= nine;
}
