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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  createScriptDomTokenizer: () => createScriptDomTokenizer,
  initializeTokenPolicy: () => initializeTokenPolicy,
  sanitizeSqlFromTokens: () => sanitizeSqlFromTokens,
  validateTokenizeResult: () => validateTokenizeResult
});
module.exports = __toCommonJS(index_exports);
var import_node_fs = __toESM(require("node:fs"), 1);
var import_node_path = __toESM(require("node:path"), 1);
var import_node_url = require("node:url");
var defaultAppBundlePath = import_node_path.default.resolve(__scriptdomBridgeModuleDirectory, "../vendor/AppBundle");
var runtimeCacheSymbol = /* @__PURE__ */ Symbol.for("scriptdom-wasm-bridge.runtimeCache");
var runtimeCache = getRuntimeCache();
var literalProbeSql = [
  "'ascii-probe'",
  "N'unicode-probe'",
  '"quoted-probe"',
  "123",
  "12.34",
  "1E10",
  "0xDEADBEEF",
  "$12.34",
  "0xBEEF"
];
var commentProbeSql = [
  "-- comment probe\nselect 1",
  "/* comment probe */ select 1"
];
var resultKeys = /* @__PURE__ */ new Set(["failed", "tokens", "errors"]);
var tokenKeys = /* @__PURE__ */ new Set(["type", "offset", "length", "line", "column"]);
var errorKeys = /* @__PURE__ */ new Set(["number", "offset", "line", "column"]);
function assertInteger(value, fieldName) {
  if (!Number.isSafeInteger(value)) {
    throw new Error(`Invalid ScriptDOM token result: ${fieldName}`);
  }
}
function assertObject(value, fieldName) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`Invalid ScriptDOM token result: ${fieldName}`);
  }
}
function assertExactKeys(value, expectedKeys, fieldName) {
  const actualKeys = Object.keys(value);
  if (actualKeys.length !== expectedKeys.size || actualKeys.some((key) => !expectedKeys.has(key))) {
    throw new Error(`Invalid ScriptDOM token result: ${fieldName}`);
  }
}
function validateTokenizeResult(sql, tokenizeResult) {
  if (typeof sql !== "string") {
    throw new TypeError("SQL input must be a string");
  }
  assertObject(tokenizeResult, "result");
  assertExactKeys(tokenizeResult, resultKeys, "result keys");
  if (typeof tokenizeResult.failed !== "boolean") {
    throw new Error("Invalid ScriptDOM token result: failed");
  }
  if (!Array.isArray(tokenizeResult.tokens) || !Array.isArray(tokenizeResult.errors)) {
    throw new Error("Invalid ScriptDOM token result: arrays");
  }
  for (const [index, token] of tokenizeResult.tokens.entries()) {
    assertObject(token, `tokens[${index}]`);
    assertExactKeys(token, tokenKeys, `tokens[${index}] keys`);
    assertInteger(token.type, `tokens[${index}].type`);
    assertInteger(token.offset, `tokens[${index}].offset`);
    assertInteger(token.length, `tokens[${index}].length`);
    assertInteger(token.line, `tokens[${index}].line`);
    assertInteger(token.column, `tokens[${index}].column`);
    if (token.offset < 0 || token.length < 0 || token.offset > sql.length || token.offset + token.length > sql.length) {
      throw new Error("Invalid ScriptDOM token range");
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
function firstTokenType(tokenize, sql) {
  const tokenizeResult = tokenize(sql);
  validateTokenizeResult(sql, tokenizeResult);
  if (tokenizeResult.failed || tokenizeResult.tokens.length === 0) {
    throw new Error("Unable to initialize ScriptDOM token policy");
  }
  return tokenizeResult.tokens[0].type;
}
function initializeTokenPolicy(tokenize) {
  return {
    literalTokenTypes: new Set(literalProbeSql.map((sql) => firstTokenType(tokenize, sql))),
    commentTokenTypes: new Set(commentProbeSql.map((sql) => firstTokenType(tokenize, sql)))
  };
}
function snapshotTokenPolicy(tokenPolicy) {
  return Object.freeze({
    literalTokenTypes: Object.freeze([...tokenPolicy.literalTokenTypes]),
    commentTokenTypes: Object.freeze([...tokenPolicy.commentTokenTypes])
  });
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
function sanitizeSqlFromTokens(sql, tokenizeResult, tokenPolicy) {
  validateTokenizeResult(sql, tokenizeResult);
  if (tokenizeResult.failed) {
    throw new Error("ScriptDOM tokenization failed");
  }
  let sanitized = "";
  let cursor = 0;
  for (const token of tokenizeResult.tokens) {
    if (token.offset < cursor) {
      throw new Error("Invalid ScriptDOM token ordering");
    }
    sanitized += sql.slice(cursor, token.offset);
    if (tokenPolicy.literalTokenTypes.has(token.type)) {
      sanitized += "?";
    } else if (tokenPolicy.commentTokenTypes.has(token.type)) {
      sanitized += " ";
    } else {
      sanitized += sql.slice(token.offset, token.offset + token.length);
    }
    cursor = token.offset + token.length;
  }
  sanitized += sql.slice(cursor);
  return sanitized.replace(/\s+/g, " ").trim();
}
async function createScriptDomTokenizer(options = {}) {
  const { tokenize, tokenPolicy } = await loadScriptDomRuntime(
    import_node_path.default.resolve(options.appBundlePath ?? defaultAppBundlePath)
  );
  return {
    tokenize,
    sanitize(sql) {
      return sanitizeSqlFromTokens(sql, tokenize(sql), tokenPolicy);
    },
    getTokenPolicy() {
      return snapshotTokenPolicy(tokenPolicy);
    }
  };
}
async function loadScriptDomRuntime(appBundlePath) {
  const dotnetJsPath = import_node_path.default.join(appBundlePath, "_framework", "dotnet.js");
  if (!import_node_fs.default.existsSync(dotnetJsPath)) {
    throw new Error(
      `Published dotnet.js was not found at ${dotnetJsPath}. Run "npm run build:wasm" before using the package from source.`
    );
  }
  const cacheKey = import_node_fs.default.realpathSync(dotnetJsPath);
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
async function initializeScriptDomRuntime(dotnetJsPath) {
  const { dotnet } = await import((0, import_node_url.pathToFileURL)(dotnetJsPath).href);
  const runtime = await dotnet.withDiagnosticTracing(false).create();
  const config = runtime.getConfig();
  const exports2 = await runtime.getAssemblyExports(config.mainAssemblyName);
  const tokenizer = exports2.ScriptDom.WasmBridge.ScriptDomTokenizer;
  function tokenize(sql) {
    if (typeof sql !== "string") {
      throw new TypeError("SQL input must be a string");
    }
    const tokenizeResult = JSON.parse(tokenizer.TokenizeJson(sql));
    validateTokenizeResult(sql, tokenizeResult);
    return tokenizeResult;
  }
  const tokenPolicy = initializeTokenPolicy(tokenize);
  return {
    tokenize,
    tokenPolicy
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createScriptDomTokenizer,
  initializeTokenPolicy,
  sanitizeSqlFromTokens,
  validateTokenizeResult
});
//# sourceMappingURL=index.cjs.map
