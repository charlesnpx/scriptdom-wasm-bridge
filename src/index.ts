import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

declare const __scriptdomBridgeModuleDirectory: string;

export type ScriptDomToken = {
  type: number;
  offset: number;
  length: number;
  line: number;
  column: number;
};

export type ScriptDomParseError = {
  number: number;
  offset: number;
  line: number;
  column: number;
};

export type ScriptDomTokenizeResult = {
  failed: boolean;
  tokens: ScriptDomToken[];
  errors: ScriptDomParseError[];
};

export type ScriptDomTokenPolicy = {
  literalTokenTypes: Set<number>;
  commentTokenTypes: Set<number>;
};

export type ScriptDomTokenPolicySnapshot = {
  readonly literalTokenTypes: readonly number[];
  readonly commentTokenTypes: readonly number[];
};

export type ScriptDomTokenizer = {
  tokenize(sql: string): ScriptDomTokenizeResult;
  sanitize(sql: string): string;
  getTokenPolicy(): ScriptDomTokenPolicySnapshot;
};

export type CreateScriptDomTokenizerOptions = {
  appBundlePath?: string;
};

type ScriptDomTokenizerExport = {
  TokenizeJson(sql: string): string;
};

type LoadedScriptDomRuntime = {
  tokenize(sql: string): ScriptDomTokenizeResult;
  tokenPolicy: ScriptDomTokenPolicy;
};

const defaultAppBundlePath = path.resolve(__scriptdomBridgeModuleDirectory, '../vendor/AppBundle');
const runtimeCacheSymbol = Symbol.for('scriptdom-wasm-bridge.runtimeCache');
const runtimeCache = getRuntimeCache();

const literalProbeSql = [
  "'ascii-probe'",
  "N'unicode-probe'",
  '"quoted-probe"',
  '123',
  '12.34',
  '1E10',
  '0xDEADBEEF',
  '$12.34',
  '0xBEEF',
];

const commentProbeSql = [
  '-- comment probe\nselect 1',
  '/* comment probe */ select 1',
];

const resultKeys = new Set(['failed', 'tokens', 'errors']);
const tokenKeys = new Set(['type', 'offset', 'length', 'line', 'column']);
const errorKeys = new Set(['number', 'offset', 'line', 'column']);

function assertInteger(value: unknown, fieldName: string): asserts value is number {
  if (!Number.isSafeInteger(value)) {
    throw new Error(`Invalid ScriptDOM token result: ${fieldName}`);
  }
}

function assertObject(value: unknown, fieldName: string): asserts value is Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`Invalid ScriptDOM token result: ${fieldName}`);
  }
}

function assertExactKeys(
  value: Record<string, unknown>,
  expectedKeys: Set<string>,
  fieldName: string,
) {
  const actualKeys = Object.keys(value);
  if (
    actualKeys.length !== expectedKeys.size ||
    actualKeys.some((key) => !expectedKeys.has(key))
  ) {
    throw new Error(`Invalid ScriptDOM token result: ${fieldName}`);
  }
}

export function validateTokenizeResult(
  sql: string,
  tokenizeResult: unknown,
): asserts tokenizeResult is ScriptDomTokenizeResult {
  if (typeof sql !== 'string') {
    throw new TypeError('SQL input must be a string');
  }

  assertObject(tokenizeResult, 'result');
  assertExactKeys(tokenizeResult, resultKeys, 'result keys');

  if (typeof tokenizeResult.failed !== 'boolean') {
    throw new Error('Invalid ScriptDOM token result: failed');
  }

  if (!Array.isArray(tokenizeResult.tokens) || !Array.isArray(tokenizeResult.errors)) {
    throw new Error('Invalid ScriptDOM token result: arrays');
  }

  for (const [index, token] of tokenizeResult.tokens.entries()) {
    assertObject(token, `tokens[${index}]`);
    assertExactKeys(token, tokenKeys, `tokens[${index}] keys`);
    assertInteger(token.type, `tokens[${index}].type`);
    assertInteger(token.offset, `tokens[${index}].offset`);
    assertInteger(token.length, `tokens[${index}].length`);
    assertInteger(token.line, `tokens[${index}].line`);
    assertInteger(token.column, `tokens[${index}].column`);

    if (
      token.offset < 0 ||
      token.length < 0 ||
      token.offset > sql.length ||
      token.offset + token.length > sql.length
    ) {
      throw new Error('Invalid ScriptDOM token range');
    }
  }

  for (const [index, error] of tokenizeResult.errors.entries()) {
    assertObject(error, `errors[${index}]`);
    assertExactKeys(error, errorKeys, `errors[${index}] keys`);
    assertInteger(error.number, `errors[${index}].number`);
    assertInteger(error.offset, `errors[${index}].offset`);
    assertInteger(error.line, `errors[${index}].line`);
    assertInteger(error.column, `errors[${index}].column`);
  }
}

function firstTokenType(
  tokenize: (sql: string) => ScriptDomTokenizeResult,
  sql: string,
) {
  const tokenizeResult = tokenize(sql);
  validateTokenizeResult(sql, tokenizeResult);

  if (tokenizeResult.failed || tokenizeResult.tokens.length === 0) {
    throw new Error('Unable to initialize ScriptDOM token policy');
  }

  return tokenizeResult.tokens[0].type;
}

export function initializeTokenPolicy(
  tokenize: (sql: string) => ScriptDomTokenizeResult,
): ScriptDomTokenPolicy {
  return {
    literalTokenTypes: new Set(literalProbeSql.map((sql) => firstTokenType(tokenize, sql))),
    commentTokenTypes: new Set(commentProbeSql.map((sql) => firstTokenType(tokenize, sql))),
  };
}

function snapshotTokenPolicy(tokenPolicy: ScriptDomTokenPolicy): ScriptDomTokenPolicySnapshot {
  return Object.freeze({
    literalTokenTypes: Object.freeze([...tokenPolicy.literalTokenTypes]),
    commentTokenTypes: Object.freeze([...tokenPolicy.commentTokenTypes]),
  });
}

function getRuntimeCache() {
  const globalCache = globalThis as Record<
    symbol,
    Map<string, Promise<LoadedScriptDomRuntime>> | undefined
  >;
  const existingCache = globalCache[runtimeCacheSymbol];

  if (existingCache) {
    return existingCache;
  }

  const cache = new Map<string, Promise<LoadedScriptDomRuntime>>();
  globalCache[runtimeCacheSymbol] = cache;
  return cache;
}

export function sanitizeSqlFromTokens(
  sql: string,
  tokenizeResult: ScriptDomTokenizeResult,
  tokenPolicy: ScriptDomTokenPolicy,
) {
  validateTokenizeResult(sql, tokenizeResult);

  if (tokenizeResult.failed) {
    throw new Error('ScriptDOM tokenization failed');
  }

  let sanitized = '';
  let cursor = 0;

  for (const token of tokenizeResult.tokens) {
    if (token.offset < cursor) {
      throw new Error('Invalid ScriptDOM token ordering');
    }

    sanitized += sql.slice(cursor, token.offset);

    if (tokenPolicy.literalTokenTypes.has(token.type)) {
      sanitized += '?';
    } else if (tokenPolicy.commentTokenTypes.has(token.type)) {
      sanitized += ' ';
    } else {
      sanitized += sql.slice(token.offset, token.offset + token.length);
    }

    cursor = token.offset + token.length;
  }

  sanitized += sql.slice(cursor);
  return sanitized.replace(/\s+/g, ' ').trim();
}

export async function createScriptDomTokenizer(
  options: CreateScriptDomTokenizerOptions = {},
): Promise<ScriptDomTokenizer> {
  const { tokenize, tokenPolicy } = await loadScriptDomRuntime(
    path.resolve(options.appBundlePath ?? defaultAppBundlePath),
  );

  return {
    tokenize,
    sanitize(sql: string) {
      return sanitizeSqlFromTokens(sql, tokenize(sql), tokenPolicy);
    },
    getTokenPolicy() {
      return snapshotTokenPolicy(tokenPolicy);
    },
  };
}

async function loadScriptDomRuntime(appBundlePath: string): Promise<LoadedScriptDomRuntime> {
  const dotnetJsPath = path.join(appBundlePath, '_framework', 'dotnet.js');

  if (!fs.existsSync(dotnetJsPath)) {
    throw new Error(
      `Published dotnet.js was not found at ${dotnetJsPath}. Run "npm run build:wasm" before using the package from source.`,
    );
  }

  const cacheKey = fs.realpathSync(dotnetJsPath);
  const cachedRuntime = runtimeCache.get(cacheKey);
  if (cachedRuntime) {
    return cachedRuntime;
  }

  const runtimePromise = initializeScriptDomRuntime(cacheKey);
  runtimeCache.set(cacheKey, runtimePromise);

  try {
    return await runtimePromise;
  } catch (error) {
    if (runtimeCache.get(cacheKey) === runtimePromise) {
      runtimeCache.delete(cacheKey);
    }

    throw error;
  }
}

async function initializeScriptDomRuntime(
  dotnetJsPath: string,
): Promise<LoadedScriptDomRuntime> {
  const { dotnet } = await import(pathToFileURL(dotnetJsPath).href);
  const runtime = await dotnet.withDiagnosticTracing(false).create();
  const config = runtime.getConfig();
  const exports = await runtime.getAssemblyExports(config.mainAssemblyName);
  const tokenizer = exports.ScriptDom.WasmBridge.ScriptDomTokenizer as ScriptDomTokenizerExport;

  function tokenize(sql: string) {
    if (typeof sql !== 'string') {
      throw new TypeError('SQL input must be a string');
    }

    const tokenizeResult = JSON.parse(tokenizer.TokenizeJson(sql));
    validateTokenizeResult(sql, tokenizeResult);
    return tokenizeResult;
  }

  const tokenPolicy = initializeTokenPolicy(tokenize);

  return {
    tokenize,
    tokenPolicy,
  };
}
