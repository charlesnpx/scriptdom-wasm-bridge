const __scriptdomBridgeModuleDirectory = __dirname;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/sanitizer.ts
var sanitizer_exports = {};
__export(sanitizer_exports, {
  createTsqlSanitizer: () => createTsqlSanitizer
});
module.exports = __toCommonJS(sanitizer_exports);

// src/marker-collisions.ts
var singleQuote = 39;
var doubleQuote = 34;
var openBracket = 91;
var closeBracket = 93;
var hyphen = 45;
var slash = 47;
var asterisk = 42;
var carriageReturn = 13;
var lineFeed = 10;
var zero = 48;
var nine = 57;
var upperA = 65;
var upperZ = 90;
var lowerA = 97;
var lowerZ = 122;
var underscore = 95;
var atSign = 64;
var numberSign = 35;
var dollarSign = 36;
var maxTsqlVariableNameLength = 128;
function collectReservedMarkerIndexes(sql, markerPrefix, markerSuffix = "") {
  const reservedIndexes = /* @__PURE__ */ new Set();
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
function nextAvailableMarkerIndex(startIndex, reservedIndexes, context) {
  let index = startIndex;
  while (reservedIndexes.has(index)) {
    index += 1;
    if (!Number.isSafeInteger(index)) {
      throw new RangeError(`${context} generated marker index is out of range`);
    }
  }
  return index;
}
function createMarker(marker, index, context) {
  if (!Number.isSafeInteger(index)) {
    throw new RangeError(`${context} generated marker index is out of range`);
  }
  const value = `${marker.markerPrefix}${index}${marker.markerSuffix}`;
  if (value.length > maxTsqlVariableNameLength) {
    throw new RangeError(`${context} generated variable name is too long`);
  }
  return value;
}
function assertCollisionPrefix(markerPrefix, context) {
  if (markerPrefix.length === 0) {
    throw new TypeError(`${context} collision-aware marker prefix must be non-empty`);
  }
  if (isAsciiDigit(markerPrefix.charCodeAt(markerPrefix.length - 1))) {
    throw new TypeError(`${context} collision-aware marker prefix must not end with a digit`);
  }
}
function matchMarker(sql, position, markerPrefix, markerSuffix) {
  if (!sql.startsWith(markerPrefix, position)) {
    return void 0;
  }
  if (position > 0 && isMarkerIdentifierContinuation(sql.charCodeAt(position - 1))) {
    return void 0;
  }
  let numberStart = position + markerPrefix.length;
  let numberEnd = numberStart;
  while (numberEnd < sql.length && isAsciiDigit(sql.charCodeAt(numberEnd))) {
    numberEnd += 1;
  }
  if (numberEnd === numberStart) {
    return void 0;
  }
  if (markerSuffix && !sql.startsWith(markerSuffix, numberEnd)) {
    return void 0;
  }
  const end = numberEnd + markerSuffix.length;
  if (end < sql.length && isMarkerIdentifierContinuation(sql.charCodeAt(end))) {
    return void 0;
  }
  const index = Number(sql.slice(numberStart, numberEnd));
  if (!Number.isSafeInteger(index)) {
    return void 0;
  }
  return { index, end };
}
function scanSingleQuotedRegion(sql, start) {
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
function scanDoubleQuotedRegion(sql, start) {
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
function scanBracketedIdentifier(sql, start) {
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
function scanLineComment(sql, start) {
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
function scanBlockComment(sql, start) {
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
function isMarkerIdentifierContinuation(charCode) {
  return isAsciiDigit(charCode) || charCode >= upperA && charCode <= upperZ || charCode >= lowerA && charCode <= lowerZ || charCode === underscore || charCode === atSign || charCode === numberSign || charCode === dollarSign;
}
function isAsciiDigit(charCode) {
  return charCode >= zero && charCode <= nine;
}

// src/result-validation.ts
var forbiddenResultKeys = /* @__PURE__ */ new Set(["text", "message", "sql", "value"]);
function assertObject(value, fieldName) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}
function assertInteger(value, fieldName) {
  if (!Number.isSafeInteger(value)) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}
function assertNonNegativeInteger(value, fieldName) {
  assertInteger(value, fieldName);
  if (value < 0) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}
function assertExactKeys(value, expectedKeys, fieldName) {
  assertNoForbiddenKeys(value, fieldName);
  const actualKeys = Object.keys(value);
  if (actualKeys.length !== expectedKeys.size || actualKeys.some((key) => !expectedKeys.has(key))) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}
function assertNoForbiddenKeys(value, fieldName) {
  for (const key of Object.keys(value)) {
    if (forbiddenResultKeys.has(key)) {
      throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
    }
  }
}
function validateLocationError(value, fieldName, sqlLength) {
  assertObject(value, fieldName);
  assertExactKeys(value, locationErrorKeys, `${fieldName} keys`);
  assertInteger(value.number, `${fieldName}.number`);
  assertNonNegativeInteger(value.offset, `${fieldName}.offset`);
  assertNonNegativeInteger(value.line, `${fieldName}.line`);
  assertNonNegativeInteger(value.column, `${fieldName}.column`);
  if (sqlLength !== void 0 && value.offset > sqlLength) {
    throw new Error("Invalid ScriptDOM result: location error range");
  }
  return {
    number: value.number,
    offset: value.offset,
    line: value.line,
    column: value.column
  };
}
var locationErrorKeys = /* @__PURE__ */ new Set(["number", "offset", "line", "column"]);

// src/token-result.ts
var resultKeys = /* @__PURE__ */ new Set(["failed", "tokens", "errors"]);
var tokenKeys = /* @__PURE__ */ new Set(["type", "offset", "length", "line", "column"]);
function parseAndValidateTokenizeResult(sql, rawJson) {
  return validateTsqlTokenizeResult(sql, JSON.parse(rawJson));
}
function validateTsqlTokenizeResult(sql, tokenizeResult) {
  if (typeof sql !== "string") {
    throw new TypeError("SQL input must be a string");
  }
  assertObject(tokenizeResult, "tokenize result");
  assertExactKeys(tokenizeResult, resultKeys, "tokenize result keys");
  if (typeof tokenizeResult.failed !== "boolean") {
    throw new Error("Invalid ScriptDOM result: tokenize result failed");
  }
  if (!Array.isArray(tokenizeResult.tokens) || !Array.isArray(tokenizeResult.errors)) {
    throw new Error("Invalid ScriptDOM result: tokenize result arrays");
  }
  const tokens = tokenizeResult.tokens.map((token, index) => {
    assertObject(token, `tokens[${index}]`);
    assertExactKeys(token, tokenKeys, `tokens[${index}] keys`);
    assertNonNegativeInteger(token.type, `tokens[${index}].type`);
    assertNonNegativeInteger(token.offset, `tokens[${index}].offset`);
    assertNonNegativeInteger(token.length, `tokens[${index}].length`);
    assertNonNegativeInteger(token.line, `tokens[${index}].line`);
    assertNonNegativeInteger(token.column, `tokens[${index}].column`);
    if (token.offset > sql.length || token.offset + token.length > sql.length) {
      throw new Error("Invalid ScriptDOM result: token range");
    }
    return {
      type: token.type,
      offset: token.offset,
      length: token.length,
      line: token.line,
      column: token.column
    };
  });
  const errors = tokenizeResult.errors.map(
    (error, index) => validateLocationError(error, `errors[${index}]`, sql.length)
  );
  return {
    failed: tokenizeResult.failed,
    tokens,
    errors
  };
}

// src/token-policy.ts
var literalProbeSql = [
  "'x'",
  "N'x'",
  '"x"',
  "1",
  "1.1",
  "1E1",
  "0x01",
  "$1.00"
];
var commentProbeSql = ["-- x\nselect 1", "/* x */ select 1"];
function initializeTokenPolicy(tokenize) {
  return {
    literalTokenTypes: new Set(literalProbeSql.map((sql) => firstTokenType(tokenize, sql))),
    commentTokenTypes: new Set(commentProbeSql.map((sql) => firstTokenType(tokenize, sql)))
  };
}
function applyTsqlSanitizerPolicy(sql, tokenizeResult, tokenPolicy, options) {
  validateTsqlTokenizeResult(sql, tokenizeResult);
  let sanitized = "";
  let cursor = 0;
  const literalMarkerState = createLiteralMarkerState(sql, options.literalMarker);
  for (const token of tokenizeResult.tokens) {
    if (token.offset < cursor) {
      throw new Error("Invalid ScriptDOM result: token ordering");
    }
    sanitized += sql.slice(cursor, token.offset);
    if (tokenPolicy.literalTokenTypes.has(token.type)) {
      sanitized += nextLiteralMarker(literalMarkerState);
    } else if (tokenPolicy.commentTokenTypes.has(token.type)) {
      sanitized += " ".repeat(token.length);
    } else {
      sanitized += sql.slice(token.offset, token.offset + token.length);
    }
    cursor = token.offset + token.length;
  }
  sanitized += sql.slice(cursor);
  return sanitized;
}
function createLiteralMarkerState(sql, options) {
  if (options.kind === "fixed") {
    return options;
  }
  return {
    ...options,
    nextIndex: options.startAt,
    reservedIndexes: options.avoidExisting ? collectReservedMarkerIndexes(sql, options.marker.markerPrefix, options.marker.markerSuffix) : /* @__PURE__ */ new Set()
  };
}
function nextLiteralMarker(state) {
  if (state.kind === "fixed") {
    return state.value;
  }
  state.nextIndex = nextAvailableMarkerIndex(
    state.nextIndex,
    state.reservedIndexes,
    "createTsqlSanitizer"
  );
  const marker = createMarker(state.marker, state.nextIndex, "createTsqlSanitizer");
  state.reservedIndexes.add(state.nextIndex);
  state.nextIndex += 1;
  return marker;
}
function firstTokenType(tokenize, sql) {
  const tokenizeResult = validateTsqlTokenizeResult(sql, tokenize(sql));
  if (tokenizeResult.failed || tokenizeResult.tokens.length === 0) {
    throw new Error("Unable to initialize ScriptDOM token policy");
  }
  return tokenizeResult.tokens[0].type;
}

// src/tokenizer-runtime.ts
var import_node_path2 = __toESM(require("node:path"), 1);

// src/wasm-runtime.ts
var import_node_fs = __toESM(require("node:fs"), 1);
var import_node_path = __toESM(require("node:path"), 1);
var import_node_url = require("node:url");
var runtimeCacheSymbol = /* @__PURE__ */ Symbol.for("scriptdom-wasm-bridge.runtimeCache.v2");
var runtimeCache = getRuntimeCache();
async function loadWasmRuntime({
  appBundlePath,
  bundleKind,
  missingBundleMessage,
  createRuntime
}) {
  const dotnetJsPath = import_node_path.default.join(appBundlePath, "_framework", "dotnet.js");
  if (!import_node_fs.default.existsSync(dotnetJsPath)) {
    throw new Error(missingBundleMessage(dotnetJsPath));
  }
  const cacheKey = import_node_fs.default.realpathSync(dotnetJsPath);
  const cachedRuntime = runtimeCache.get(cacheKey);
  if (cachedRuntime) {
    const loadedRuntime = await cachedRuntime;
    return getExpectedRuntime(loadedRuntime, bundleKind, appBundlePath);
  }
  const runtimePromise = initializeWasmRuntime(cacheKey, bundleKind, createRuntime);
  runtimeCache.set(cacheKey, runtimePromise);
  try {
    const loadedRuntime = await runtimePromise;
    return getExpectedRuntime(loadedRuntime, bundleKind, appBundlePath);
  } catch (error) {
    if (runtimeCache.get(cacheKey) === runtimePromise) {
      runtimeCache.delete(cacheKey);
    }
    throw error;
  }
}
function getBridgeNamespace(assemblyExports) {
  const scriptDom = getObjectProperty(assemblyExports, "ScriptDom", "ScriptDom namespace");
  return getObjectProperty(scriptDom, "WasmBridge", "ScriptDom.WasmBridge namespace");
}
function getFunctionProperty(value, propertyName, fieldName) {
  const property = value[propertyName];
  if (typeof property !== "function") {
    throw new Error(`Invalid ScriptDOM WASM export: ${fieldName}`);
  }
  return property;
}
function getExpectedRuntime(loadedRuntime, bundleKind, appBundlePath) {
  if (loadedRuntime.bundleKind !== bundleKind) {
    throw new Error(
      `The WASM AppBundle at ${appBundlePath} exports ${loadedRuntime.bundleKind}, not ${bundleKind}.`
    );
  }
  return loadedRuntime.runtime;
}
async function initializeWasmRuntime(dotnetJsPath, bundleKind, createRuntime) {
  const dotnetModule = await import((0, import_node_url.pathToFileURL)(dotnetJsPath).href);
  const runtime = await dotnetModule.dotnet.withDiagnosticTracing(false).create();
  const config = runtime.getConfig();
  const assemblyExports = await runtime.getAssemblyExports(config.mainAssemblyName);
  return {
    bundleKind,
    runtime: await createRuntime(assemblyExports)
  };
}
function getRuntimeCache() {
  const globalCache = globalThis;
  const existingCache = globalCache[runtimeCacheSymbol];
  if (existingCache) {
    return existingCache;
  }
  const cache = /* @__PURE__ */ new Map();
  globalCache[runtimeCacheSymbol] = cache;
  return cache;
}
function getObjectProperty(value, propertyName, fieldName) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`Invalid ScriptDOM WASM export: ${fieldName}`);
  }
  const property = value[propertyName];
  if (!property || typeof property !== "object" || Array.isArray(property)) {
    throw new Error(`Invalid ScriptDOM WASM export: ${fieldName}`);
  }
  return property;
}

// src/tokenizer-runtime.ts
var defaultTokenizerAppBundlePath = import_node_path2.default.resolve(
  __scriptdomBridgeModuleDirectory,
  "../vendor/scriptdom-tokenizer-wasm/AppBundle"
);
async function loadTsqlTokenizerRuntime(options = {}) {
  return loadWasmRuntime({
    appBundlePath: import_node_path2.default.resolve(options.appBundlePath ?? defaultTokenizerAppBundlePath),
    bundleKind: "tokenizer",
    missingBundleMessage: (dotnetJsPath) => `Published tokenizer dotnet.js was not found at ${dotnetJsPath}. Run "npm run build:wasm" before using the package from source.`,
    createRuntime(assemblyExports) {
      const bridgeNamespace = getBridgeNamespace(assemblyExports);
      const tokenizer = bridgeNamespace.TsqlTokenizer;
      if (!tokenizer || typeof tokenizer !== "object" || Array.isArray(tokenizer)) {
        throw new Error("Invalid ScriptDOM WASM export: TsqlTokenizer");
      }
      const tokenizeJson = getFunctionProperty(
        tokenizer,
        "TokenizeJson",
        "TsqlTokenizer.TokenizeJson"
      );
      return {
        tokenize(sql) {
          if (typeof sql !== "string") {
            throw new TypeError("SQL input must be a string");
          }
          return parseAndValidateTokenizeResult(sql, tokenizeJson(sql));
        }
      };
    }
  });
}

// src/sanitizer.ts
var tokenPolicyCache = /* @__PURE__ */ new WeakMap();
var defaultLiteralPlaceholder = "?";
var defaultLiteralPlaceholderStartAt = 0;
var indexToken = "{index}";
var maxLiteralPlaceholderLength = 128;
async function createTsqlSanitizer(options = {}) {
  const normalizedOptions = normalizeOptions(options);
  const runtime = await loadTsqlTokenizerRuntime({
    appBundlePath: normalizedOptions.appBundlePath
  });
  const tokenPolicy = getTokenPolicy(runtime);
  return {
    sanitize(sql) {
      if (typeof sql !== "string") {
        throw new TypeError("SQL input must be a string");
      }
      const tokenizeResult = runtime.tokenize(sql);
      if (tokenizeResult.failed) {
        return {
          sql: "",
          tokenizationFailed: true,
          diagnostics: tokenizeResult.errors.map(toDiagnostic)
        };
      }
      return {
        sql: applyTsqlSanitizerPolicy(sql, tokenizeResult, tokenPolicy, {
          literalMarker: normalizedOptions.literalMarker
        }),
        tokenizationFailed: false,
        diagnostics: []
      };
    }
  };
}
function normalizeOptions(options) {
  if (options === null || typeof options !== "object" || Array.isArray(options)) {
    throw new TypeError("createTsqlSanitizer options must be an object");
  }
  const appBundlePath = readOwnDataProperty(options, "appBundlePath");
  const literalPlaceholder = readOwnDataProperty(options, "literalPlaceholder");
  const literalPlaceholderStartAt = readOwnDataProperty(options, "literalPlaceholderStartAt");
  const avoidExistingLiteralPlaceholders = readOwnDataProperty(
    options,
    "avoidExistingLiteralPlaceholders"
  );
  if (appBundlePath !== void 0 && typeof appBundlePath !== "string") {
    throw new TypeError("createTsqlSanitizer appBundlePath must be a string");
  }
  if (literalPlaceholder !== void 0 && typeof literalPlaceholder !== "string") {
    throw new TypeError("createTsqlSanitizer literalPlaceholder must be a string");
  }
  if (literalPlaceholderStartAt !== void 0 && typeof literalPlaceholderStartAt !== "number") {
    throw new TypeError("createTsqlSanitizer literalPlaceholderStartAt must be a number");
  }
  if (avoidExistingLiteralPlaceholders !== void 0 && typeof avoidExistingLiteralPlaceholders !== "boolean") {
    throw new TypeError("createTsqlSanitizer avoidExistingLiteralPlaceholders must be a boolean");
  }
  const normalizedLiteralPlaceholder = literalPlaceholder ?? defaultLiteralPlaceholder;
  const normalizedStartAt = literalPlaceholderStartAt ?? defaultLiteralPlaceholderStartAt;
  const normalizedAvoidExisting = avoidExistingLiteralPlaceholders ?? false;
  if (!Number.isSafeInteger(normalizedStartAt) || normalizedStartAt < 0) {
    throw new RangeError(
      "createTsqlSanitizer literalPlaceholderStartAt must be a non-negative safe integer"
    );
  }
  return {
    appBundlePath,
    literalMarker: createLiteralMarkerOptions(
      normalizedLiteralPlaceholder,
      normalizedStartAt,
      normalizedAvoidExisting
    )
  };
}
function createLiteralMarkerOptions(literalPlaceholder, startAt, avoidExisting) {
  if (literalPlaceholder.length === 0) {
    throw new TypeError("createTsqlSanitizer literalPlaceholder must be non-empty");
  }
  if (literalPlaceholder.length > maxLiteralPlaceholderLength) {
    throw new RangeError("createTsqlSanitizer literalPlaceholder is too long");
  }
  const firstIndexToken = literalPlaceholder.indexOf(indexToken);
  if (firstIndexToken === -1) {
    if (avoidExisting) {
      throw new TypeError(
        "createTsqlSanitizer avoidExistingLiteralPlaceholders requires an indexed literalPlaceholder"
      );
    }
    return {
      kind: "fixed",
      value: literalPlaceholder
    };
  }
  if (literalPlaceholder.indexOf(indexToken, firstIndexToken + indexToken.length) !== -1) {
    throw new TypeError("createTsqlSanitizer literalPlaceholder must contain at most one index token");
  }
  const markerPrefix = literalPlaceholder.slice(0, firstIndexToken);
  const markerSuffix = literalPlaceholder.slice(firstIndexToken + indexToken.length);
  if (avoidExisting) {
    if (markerSuffix.length > 0) {
      throw new TypeError(
        "createTsqlSanitizer avoidExistingLiteralPlaceholders requires a prefix-only literalPlaceholder"
      );
    }
    assertCollisionPrefix(markerPrefix, "createTsqlSanitizer");
  }
  return {
    kind: "indexed",
    marker: {
      markerPrefix,
      markerSuffix
    },
    startAt,
    avoidExisting
  };
}
function readOwnDataProperty(options, key) {
  let descriptor;
  try {
    descriptor = Object.getOwnPropertyDescriptor(options, key);
  } catch {
    throw new TypeError("createTsqlSanitizer options could not be validated");
  }
  if (!descriptor) {
    return void 0;
  }
  if (!Object.hasOwn(descriptor, "value")) {
    throw new TypeError("createTsqlSanitizer options must use data properties");
  }
  return descriptor.value;
}
function getTokenPolicy(runtime) {
  const cachedPolicy = tokenPolicyCache.get(runtime);
  if (cachedPolicy) {
    return cachedPolicy;
  }
  const tokenPolicy = initializeTokenPolicy(runtime.tokenize);
  tokenPolicyCache.set(runtime, tokenPolicy);
  return tokenPolicy;
}
function toDiagnostic(error) {
  return {
    kind: "tokenization-error",
    number: error.number,
    offset: error.offset,
    line: error.line,
    column: error.column
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createTsqlSanitizer
});
//# sourceMappingURL=sanitizer.cjs.map
