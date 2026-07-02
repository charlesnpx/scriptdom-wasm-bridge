import { assertCollisionPrefix } from './marker-collisions.js';
import type { TsqlLocationError } from './result-validation.js';
import {
  applyTsqlSanitizerPolicy,
  initializeTokenPolicy,
  type TsqlLiteralMarkerOptions,
  type TsqlSanitizerPolicyOptions,
  type TsqlTokenPolicy,
} from './token-policy.js';
import {
  loadTsqlTokenizerRuntime,
  type CreateTsqlTokenizerOptions,
  type LoadedTsqlTokenizerRuntime,
} from './tokenizer-runtime.js';

export type CreateTsqlSanitizerOptions = CreateTsqlTokenizerOptions & {
  literalPlaceholder?: string;
  literalPlaceholderStartAt?: number;
  avoidExistingLiteralPlaceholders?: boolean;
};

export type TsqlSanitizeDiagnostic = {
  kind: 'tokenization-error';
  number: number;
  offset: number;
  line: number;
  column: number;
};

export type TsqlSanitizeResult = {
  sql: string;
  tokenizationFailed: boolean;
  diagnostics: TsqlSanitizeDiagnostic[];
};

export type TsqlSanitizer = {
  sanitize(sql: string): TsqlSanitizeResult;
};

const tokenPolicyCache = new WeakMap<LoadedTsqlTokenizerRuntime, TsqlTokenPolicy>();
const defaultLiteralPlaceholder = '?';
const defaultLiteralPlaceholderStartAt = 0;
const indexToken = '{index}';
const maxLiteralPlaceholderLength = 128;

export async function createTsqlSanitizer(
  options: CreateTsqlSanitizerOptions = {},
): Promise<TsqlSanitizer> {
  const normalizedOptions = normalizeOptions(options);
  const runtime = await loadTsqlTokenizerRuntime({
    appBundlePath: normalizedOptions.appBundlePath,
  });
  const tokenPolicy = getTokenPolicy(runtime);

  return {
    sanitize(sql: string) {
      if (typeof sql !== 'string') {
        throw new TypeError('SQL input must be a string');
      }

      const tokenizeResult = runtime.tokenize(sql);

      if (tokenizeResult.failed) {
        return {
          sql: '',
          tokenizationFailed: true,
          diagnostics: tokenizeResult.errors.map(toDiagnostic),
        };
      }

      return {
        sql: applyTsqlSanitizerPolicy(sql, tokenizeResult, tokenPolicy, {
          literalMarker: normalizedOptions.literalMarker,
        }),
        tokenizationFailed: false,
        diagnostics: [],
      };
    },
  };
}

function normalizeOptions(options: CreateTsqlSanitizerOptions): {
  appBundlePath?: string;
  literalMarker: TsqlSanitizerPolicyOptions['literalMarker'];
} {
  if (options === null || typeof options !== 'object' || Array.isArray(options)) {
    throw new TypeError('createTsqlSanitizer options must be an object');
  }

  const appBundlePath = readOwnDataProperty(options, 'appBundlePath');
  const literalPlaceholder = readOwnDataProperty(options, 'literalPlaceholder');
  const literalPlaceholderStartAt = readOwnDataProperty(options, 'literalPlaceholderStartAt');
  const avoidExistingLiteralPlaceholders = readOwnDataProperty(
    options,
    'avoidExistingLiteralPlaceholders',
  );

  if (appBundlePath !== undefined && typeof appBundlePath !== 'string') {
    throw new TypeError('createTsqlSanitizer appBundlePath must be a string');
  }

  if (literalPlaceholder !== undefined && typeof literalPlaceholder !== 'string') {
    throw new TypeError('createTsqlSanitizer literalPlaceholder must be a string');
  }

  if (literalPlaceholderStartAt !== undefined && typeof literalPlaceholderStartAt !== 'number') {
    throw new TypeError('createTsqlSanitizer literalPlaceholderStartAt must be a number');
  }

  if (
    avoidExistingLiteralPlaceholders !== undefined &&
    typeof avoidExistingLiteralPlaceholders !== 'boolean'
  ) {
    throw new TypeError('createTsqlSanitizer avoidExistingLiteralPlaceholders must be a boolean');
  }

  const normalizedLiteralPlaceholder = literalPlaceholder ?? defaultLiteralPlaceholder;
  const normalizedStartAt = literalPlaceholderStartAt ?? defaultLiteralPlaceholderStartAt;
  const normalizedAvoidExisting = avoidExistingLiteralPlaceholders ?? false;

  if (
    !Number.isSafeInteger(normalizedStartAt) ||
    normalizedStartAt < 0
  ) {
    throw new RangeError(
      'createTsqlSanitizer literalPlaceholderStartAt must be a non-negative safe integer',
    );
  }

  return {
    appBundlePath,
    literalMarker: createLiteralMarkerOptions(
      normalizedLiteralPlaceholder,
      normalizedStartAt,
      normalizedAvoidExisting,
    ),
  };
}

function createLiteralMarkerOptions(
  literalPlaceholder: string,
  startAt: number,
  avoidExisting: boolean,
): TsqlLiteralMarkerOptions {
  if (literalPlaceholder.length === 0) {
    throw new TypeError('createTsqlSanitizer literalPlaceholder must be non-empty');
  }

  const firstIndexToken = literalPlaceholder.indexOf(indexToken);

  if (firstIndexToken === -1) {
    if (literalPlaceholder.length > maxLiteralPlaceholderLength) {
      throw new RangeError('createTsqlSanitizer literalPlaceholder is too long');
    }

    if (avoidExisting) {
      throw new TypeError(
        'createTsqlSanitizer avoidExistingLiteralPlaceholders requires an indexed literalPlaceholder',
      );
    }

    return {
      kind: 'fixed',
      value: literalPlaceholder,
    };
  }

  if (literalPlaceholder.indexOf(indexToken, firstIndexToken + indexToken.length) !== -1) {
    throw new TypeError('createTsqlSanitizer literalPlaceholder must contain at most one index token');
  }

  const markerPrefix = literalPlaceholder.slice(0, firstIndexToken);
  const markerSuffix = literalPlaceholder.slice(firstIndexToken + indexToken.length);

  if (avoidExisting) {
    if (markerSuffix.length > 0) {
      throw new TypeError(
        'createTsqlSanitizer avoidExistingLiteralPlaceholders requires a prefix-only literalPlaceholder',
      );
    }

    assertCollisionPrefix(markerPrefix, 'createTsqlSanitizer');
  }

  return {
    kind: 'indexed',
    marker: {
      markerPrefix,
      markerSuffix,
    },
    startAt,
    avoidExisting,
  };
}

function readOwnDataProperty(
  options: object,
  key: keyof CreateTsqlSanitizerOptions,
): unknown {
  let descriptor: PropertyDescriptor | undefined;

  try {
    descriptor = Object.getOwnPropertyDescriptor(options, key);
  } catch {
    throw new TypeError('createTsqlSanitizer options could not be validated');
  }

  if (!descriptor) {
    return undefined;
  }

  if (!Object.hasOwn(descriptor, 'value')) {
    throw new TypeError('createTsqlSanitizer options must use data properties');
  }

  return descriptor.value;
}

function getTokenPolicy(runtime: LoadedTsqlTokenizerRuntime) {
  const cachedPolicy = tokenPolicyCache.get(runtime);

  if (cachedPolicy) {
    return cachedPolicy;
  }

  const tokenPolicy = initializeTokenPolicy(runtime.tokenize);
  tokenPolicyCache.set(runtime, tokenPolicy);
  return tokenPolicy;
}

function toDiagnostic(error: TsqlLocationError): TsqlSanitizeDiagnostic {
  return {
    kind: 'tokenization-error',
    number: error.number,
    offset: error.offset,
    line: error.line,
    column: error.column,
  };
}
