import {
  collectReservedMarkerIndexes,
  createMarker,
  nextAvailableMarkerIndex,
  type MarkerTemplate,
} from './marker-collisions.js';
import { validateTsqlTokenizeResult, type TsqlTokenizeResult } from './token-result.js';

export type TsqlTokenPolicy = {
  literalTokenTypes: Set<number>;
  commentTokenTypes: Set<number>;
};

export type TsqlSanitizerPolicyOptions = {
  literalMarker: TsqlLiteralMarkerOptions;
};

export type TsqlLiteralMarkerOptions =
  | {
      kind: 'fixed';
      value: string;
    }
  | {
      kind: 'indexed';
      marker: MarkerTemplate;
      startAt: number;
      avoidExisting: boolean;
    };

const literalProbeSql = [
  "'x'",
  "N'x'",
  '"x"',
  '1',
  '1.1',
  '1E1',
  '0x01',
  '$1.00',
];

const commentProbeSql = ['-- x\nselect 1', '/* x */ select 1'];

export function initializeTokenPolicy(
  tokenize: (sql: string) => TsqlTokenizeResult,
): TsqlTokenPolicy {
  return {
    literalTokenTypes: new Set(literalProbeSql.map((sql) => firstTokenType(tokenize, sql))),
    commentTokenTypes: new Set(commentProbeSql.map((sql) => firstTokenType(tokenize, sql))),
  };
}

export function applyTsqlSanitizerPolicy(
  sql: string,
  tokenizeResult: TsqlTokenizeResult,
  tokenPolicy: TsqlTokenPolicy,
  options: TsqlSanitizerPolicyOptions,
) {
  validateTsqlTokenizeResult(sql, tokenizeResult);

  let sanitized = '';
  let cursor = 0;
  const literalMarkerState = createLiteralMarkerState(sql, options.literalMarker);

  for (const token of tokenizeResult.tokens) {
    if (token.offset < cursor) {
      throw new Error('Invalid ScriptDOM result: token ordering');
    }

    sanitized += sql.slice(cursor, token.offset);

    if (tokenPolicy.literalTokenTypes.has(token.type)) {
      sanitized += nextLiteralMarker(literalMarkerState);
    } else if (tokenPolicy.commentTokenTypes.has(token.type)) {
      sanitized += ' '.repeat(token.length);
    } else {
      sanitized += sql.slice(token.offset, token.offset + token.length);
    }

    cursor = token.offset + token.length;
  }

  sanitized += sql.slice(cursor);
  return sanitized;
}

function createLiteralMarkerState(sql: string, options: TsqlLiteralMarkerOptions) {
  if (options.kind === 'fixed') {
    return options;
  }

  return {
    ...options,
    nextIndex: options.startAt,
    reservedIndexes: options.avoidExisting
      ? collectReservedMarkerIndexes(sql, options.marker.markerPrefix, options.marker.markerSuffix)
      : new Set<number>(),
  };
}

function nextLiteralMarker(
  state: ReturnType<typeof createLiteralMarkerState>,
) {
  if (state.kind === 'fixed') {
    return state.value;
  }

  state.nextIndex = nextAvailableMarkerIndex(
    state.nextIndex,
    state.reservedIndexes,
    'createTsqlSanitizer',
  );
  const marker = createMarker(state.marker, state.nextIndex, 'createTsqlSanitizer');
  state.reservedIndexes.add(state.nextIndex);
  state.nextIndex += 1;
  return marker;
}

function firstTokenType(tokenize: (sql: string) => TsqlTokenizeResult, sql: string) {
  const tokenizeResult = validateTsqlTokenizeResult(sql, tokenize(sql));

  if (tokenizeResult.failed || tokenizeResult.tokens.length === 0) {
    throw new Error('Unable to initialize ScriptDOM token policy');
  }

  return tokenizeResult.tokens[0].type;
}
