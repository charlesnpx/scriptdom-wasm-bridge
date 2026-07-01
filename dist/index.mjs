import __scriptdomBridgePath from "node:path";
import { fileURLToPath as __scriptdomBridgeFileURLToPath } from "node:url";
const __scriptdomBridgeModuleDirectory = __scriptdomBridgePath.dirname(__scriptdomBridgeFileURLToPath(import.meta.url));

// src/introspector.ts
import path2 from "node:path";

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
function assertString(value, fieldName) {
  if (typeof value !== "string") {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}
function assertStringArray(value, fieldName) {
  if (!Array.isArray(value)) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
  for (const [index, item] of value.entries()) {
    assertString(item, `${fieldName}[${index}]`);
  }
}
function assertExactKeys(value, expectedKeys, fieldName) {
  assertNoForbiddenKeys(value, fieldName);
  const actualKeys = Object.keys(value);
  if (actualKeys.length !== expectedKeys.size || actualKeys.some((key) => !expectedKeys.has(key))) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}
function assertOptionalKeys(value, requiredKeys, allowedKeys, fieldName) {
  assertNoForbiddenKeys(value, fieldName);
  const actualKeys = Object.keys(value);
  if ([...requiredKeys].some((key) => !Object.hasOwn(value, key)) || actualKeys.some((key) => !allowedKeys.has(key))) {
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
function validateOptionalRange(value, fieldName, sqlLength) {
  if (Object.hasOwn(value, "offset")) {
    assertNonNegativeInteger(value.offset, `${fieldName}.offset`);
    if (value.offset > sqlLength) {
      throw new Error("Invalid ScriptDOM result: range");
    }
  }
  if (Object.hasOwn(value, "length")) {
    assertNonNegativeInteger(value.length, `${fieldName}.length`);
  }
  if (Object.hasOwn(value, "offset") && Object.hasOwn(value, "length")) {
    const offset = value.offset;
    const length = value.length;
    if (offset + length > sqlLength) {
      throw new Error("Invalid ScriptDOM result: range");
    }
  }
}
var locationErrorKeys = /* @__PURE__ */ new Set(["number", "offset", "line", "column"]);

// src/wasm-runtime.ts
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
var runtimeCacheSymbol = /* @__PURE__ */ Symbol.for("scriptdom-wasm-bridge.runtimeCache.v2");
var runtimeCache = getRuntimeCache();
async function loadWasmRuntime({
  appBundlePath,
  bundleKind,
  missingBundleMessage,
  createRuntime
}) {
  const dotnetJsPath = path.join(appBundlePath, "_framework", "dotnet.js");
  if (!fs.existsSync(dotnetJsPath)) {
    throw new Error(missingBundleMessage(dotnetJsPath));
  }
  const cacheKey = fs.realpathSync(dotnetJsPath);
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
  const dotnetModule = await import(pathToFileURL(dotnetJsPath).href);
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

// src/introspector.ts
var defaultIntrospectorAppBundlePath = path2.resolve(
  __scriptdomBridgeModuleDirectory,
  "../vendor/scriptdom-introspector-wasm/AppBundle"
);
var inspectResultKeys = /* @__PURE__ */ new Set([
  "failed",
  "statements",
  "objectReferences",
  "functionCalls",
  "procedureCalls",
  "constructs",
  "errors"
]);
var statementKeys = /* @__PURE__ */ new Set(["kind", "offset", "length"]);
var objectReferenceRequiredKeys = /* @__PURE__ */ new Set(["context", "nameParts"]);
var objectReferenceAllowedKeys = /* @__PURE__ */ new Set(["context", "nameParts", "offset", "length"]);
var namedRangeRequiredKeys = /* @__PURE__ */ new Set(["nameParts"]);
var namedRangeAllowedKeys = /* @__PURE__ */ new Set(["nameParts", "offset", "length"]);
var constructRequiredKeys = /* @__PURE__ */ new Set(["kind"]);
var constructAllowedKeys = /* @__PURE__ */ new Set(["kind", "offset", "length"]);
async function createTsqlIntrospector(options = {}) {
  const runtime = await loadTsqlIntrospectorRuntime(options);
  return {
    inspect: runtime.inspect
  };
}
async function loadTsqlIntrospectorRuntime(options = {}) {
  return loadWasmRuntime({
    appBundlePath: path2.resolve(options.appBundlePath ?? defaultIntrospectorAppBundlePath),
    bundleKind: "introspector",
    missingBundleMessage: (dotnetJsPath) => `Published introspector dotnet.js was not found at ${dotnetJsPath}. Run "npm run build:wasm" before using the package from source.`,
    createRuntime(assemblyExports) {
      const bridgeNamespace = getBridgeNamespace(assemblyExports);
      const introspector = bridgeNamespace.TsqlIntrospector;
      if (!introspector || typeof introspector !== "object" || Array.isArray(introspector)) {
        throw new Error("Invalid ScriptDOM WASM export: TsqlIntrospector");
      }
      const inspectJson = getFunctionProperty(
        introspector,
        "InspectJson",
        "TsqlIntrospector.InspectJson"
      );
      return {
        inspect(sql) {
          if (typeof sql !== "string") {
            throw new TypeError("SQL input must be a string");
          }
          return parseAndValidateInspectResult(sql, inspectJson(sql));
        }
      };
    }
  });
}
function parseAndValidateInspectResult(sql, rawJson) {
  return validateInspectResult(sql, JSON.parse(rawJson));
}
function validateInspectResult(sql, inspectResult) {
  assertObject(inspectResult, "inspect result");
  assertExactKeys(inspectResult, inspectResultKeys, "inspect result keys");
  if (typeof inspectResult.failed !== "boolean") {
    throw new Error("Invalid ScriptDOM result: inspect result failed");
  }
  const statements = validateArray(
    inspectResult.statements,
    "statements",
    (value, fieldName) => validateStatement(sql, value, fieldName)
  );
  const objectReferences = validateArray(
    inspectResult.objectReferences,
    "objectReferences",
    (value, fieldName) => validateObjectReference(sql, value, fieldName)
  );
  const functionCalls = validateArray(
    inspectResult.functionCalls,
    "functionCalls",
    (value, fieldName) => validateNamedRange(sql, value, fieldName)
  );
  const procedureCalls = validateArray(
    inspectResult.procedureCalls,
    "procedureCalls",
    (value, fieldName) => validateNamedRange(sql, value, fieldName)
  );
  const constructs = validateArray(
    inspectResult.constructs,
    "constructs",
    (value, fieldName) => validateConstruct(sql, value, fieldName)
  );
  const errors = validateArray(
    inspectResult.errors,
    "errors",
    (value, fieldName) => validateLocationError(value, fieldName, sql.length)
  );
  return {
    failed: inspectResult.failed,
    statements,
    objectReferences,
    functionCalls,
    procedureCalls,
    constructs,
    errors
  };
}
function validateStatement(sql, value, fieldName) {
  assertObject(value, fieldName);
  assertExactKeys(value, statementKeys, `${fieldName} keys`);
  assertString(value.kind, `${fieldName}.kind`);
  assertNonNegativeInteger(value.offset, `${fieldName}.offset`);
  assertNonNegativeInteger(value.length, `${fieldName}.length`);
  if (value.offset > sql.length || value.offset + value.length > sql.length) {
    throw new Error("Invalid ScriptDOM result: statement range");
  }
  return {
    kind: value.kind,
    offset: value.offset,
    length: value.length
  };
}
function validateObjectReference(sql, value, fieldName) {
  assertObject(value, fieldName);
  assertOptionalKeys(
    value,
    objectReferenceRequiredKeys,
    objectReferenceAllowedKeys,
    `${fieldName} keys`
  );
  assertString(value.context, `${fieldName}.context`);
  assertStringArray(value.nameParts, `${fieldName}.nameParts`);
  validateOptionalRange(value, fieldName, sql.length);
  const result = {
    context: value.context,
    nameParts: value.nameParts
  };
  if (Object.hasOwn(value, "offset")) {
    result.offset = value.offset;
  }
  if (Object.hasOwn(value, "length")) {
    result.length = value.length;
  }
  return result;
}
function validateNamedRange(sql, value, fieldName) {
  assertObject(value, fieldName);
  assertOptionalKeys(value, namedRangeRequiredKeys, namedRangeAllowedKeys, `${fieldName} keys`);
  assertStringArray(value.nameParts, `${fieldName}.nameParts`);
  validateOptionalRange(value, fieldName, sql.length);
  const result = {
    nameParts: value.nameParts
  };
  if (Object.hasOwn(value, "offset")) {
    result.offset = value.offset;
  }
  if (Object.hasOwn(value, "length")) {
    result.length = value.length;
  }
  return result;
}
function validateConstruct(sql, value, fieldName) {
  assertObject(value, fieldName);
  assertOptionalKeys(value, constructRequiredKeys, constructAllowedKeys, `${fieldName} keys`);
  assertString(value.kind, `${fieldName}.kind`);
  validateOptionalRange(value, fieldName, sql.length);
  const result = {
    kind: value.kind
  };
  if (Object.hasOwn(value, "offset")) {
    result.offset = value.offset;
  }
  if (Object.hasOwn(value, "length")) {
    result.length = value.length;
  }
  return result;
}
function validateArray(value, fieldName, validateItem) {
  if (!Array.isArray(value)) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
  return value.map((item, index) => validateItem(item, `${fieldName}[${index}]`));
}

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
function applyTsqlSanitizerPolicy(sql, tokenizeResult, tokenPolicy) {
  validateTsqlTokenizeResult(sql, tokenizeResult);
  let sanitized = "";
  let cursor = 0;
  for (const token of tokenizeResult.tokens) {
    if (token.offset < cursor) {
      throw new Error("Invalid ScriptDOM result: token ordering");
    }
    sanitized += sql.slice(cursor, token.offset);
    if (tokenPolicy.literalTokenTypes.has(token.type)) {
      sanitized += "?";
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
function firstTokenType(tokenize, sql) {
  const tokenizeResult = validateTsqlTokenizeResult(sql, tokenize(sql));
  if (tokenizeResult.failed || tokenizeResult.tokens.length === 0) {
    throw new Error("Unable to initialize ScriptDOM token policy");
  }
  return tokenizeResult.tokens[0].type;
}

// src/tokenizer-runtime.ts
import path3 from "node:path";
var defaultTokenizerAppBundlePath = path3.resolve(
  __scriptdomBridgeModuleDirectory,
  "../vendor/scriptdom-tokenizer-wasm/AppBundle"
);
async function loadTsqlTokenizerRuntime(options = {}) {
  return loadWasmRuntime({
    appBundlePath: path3.resolve(options.appBundlePath ?? defaultTokenizerAppBundlePath),
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
async function createTsqlSanitizer(options = {}) {
  const runtime = await loadTsqlTokenizerRuntime(options);
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
        sql: applyTsqlSanitizerPolicy(sql, tokenizeResult, tokenPolicy),
        tokenizationFailed: false,
        diagnostics: []
      };
    }
  };
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

// src/tokenizer.ts
async function createTsqlTokenizer(options = {}) {
  const runtime = await loadTsqlTokenizerRuntime(options);
  return {
    tokenize: runtime.tokenize
  };
}
export {
  createTsqlIntrospector,
  createTsqlSanitizer,
  createTsqlTokenizer
};
//# sourceMappingURL=index.mjs.map
