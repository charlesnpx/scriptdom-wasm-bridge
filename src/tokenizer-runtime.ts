import path from 'node:path';

import { parseAndValidateTokenizeResult, type TsqlTokenizeResult } from './token-result.js';
import { getBridgeNamespace, getFunctionProperty, loadWasmRuntime } from './wasm-runtime.js';

declare const __scriptdomBridgeModuleDirectory: string;

export type CreateTsqlTokenizerOptions = {
  appBundlePath?: string;
};

export type LoadedTsqlTokenizerRuntime = {
  tokenize(sql: string): TsqlTokenizeResult;
};

const defaultTokenizerAppBundlePath = path.resolve(
  __scriptdomBridgeModuleDirectory,
  '../vendor/scriptdom-tokenizer-wasm/AppBundle',
);

export async function loadTsqlTokenizerRuntime(
  options: CreateTsqlTokenizerOptions = {},
): Promise<LoadedTsqlTokenizerRuntime> {
  return loadWasmRuntime({
    appBundlePath: path.resolve(options.appBundlePath ?? defaultTokenizerAppBundlePath),
    bundleKind: 'tokenizer',
    missingBundleMessage: (dotnetJsPath) =>
      `Published tokenizer dotnet.js was not found at ${dotnetJsPath}. Run "npm run build:wasm" before using the package from source.`,
    createRuntime(assemblyExports) {
      const bridgeNamespace = getBridgeNamespace(assemblyExports);
      const tokenizer = bridgeNamespace.TsqlTokenizer;

      if (!tokenizer || typeof tokenizer !== 'object' || Array.isArray(tokenizer)) {
        throw new Error('Invalid ScriptDOM WASM export: TsqlTokenizer');
      }

      const tokenizeJson = getFunctionProperty(
        tokenizer as Record<string, unknown>,
        'TokenizeJson',
        'TsqlTokenizer.TokenizeJson',
      );

      return {
        tokenize(sql: string) {
          if (typeof sql !== 'string') {
            throw new TypeError('SQL input must be a string');
          }

          const rawJson = tokenizeJson(sql);

          if (typeof rawJson !== 'string') {
            throw new Error('Invalid ScriptDOM WASM export: tokenizer JSON result');
          }

          return parseAndValidateTokenizeResult(sql, rawJson);
        },
      };
    },
  });
}
