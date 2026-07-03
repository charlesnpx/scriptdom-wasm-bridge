import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

type DotnetModule = {
  dotnet: {
    withDiagnosticTracing(enabled: boolean): {
      create(): Promise<{
        getConfig(): { mainAssemblyName: string };
        getAssemblyExports(assemblyName: string): Promise<unknown>;
      }>;
    };
  };
};

type LoadedRuntime = {
  bundleKind: string;
  runtime: unknown;
};

type LoadWasmRuntimeOptions<TRuntime> = {
  appBundlePath: string;
  bundleKind: string;
  missingBundleMessage: (dotnetJsPath: string) => string;
  createRuntime: (
    assemblyExports: unknown,
    context: { poison(): void },
  ) => Promise<TRuntime> | TRuntime;
};

const runtimeCacheSymbol = Symbol.for('scriptdom-wasm-bridge.runtimeCache.v2');
const runtimeCache = getRuntimeCache();

export async function loadWasmRuntime<TRuntime>({
  appBundlePath,
  bundleKind,
  missingBundleMessage,
  createRuntime,
}: LoadWasmRuntimeOptions<TRuntime>): Promise<TRuntime> {
  const dotnetJsPath = path.join(appBundlePath, '_framework', 'dotnet.js');

  if (!fs.existsSync(dotnetJsPath)) {
    throw new Error(missingBundleMessage(dotnetJsPath));
  }

  const cacheKey = fs.realpathSync(dotnetJsPath);
  const cachedRuntime = runtimeCache.get(cacheKey);
  if (cachedRuntime) {
    const loadedRuntime = await cachedRuntime;
    return getExpectedRuntime<TRuntime>(loadedRuntime, bundleKind, appBundlePath);
  }

  const runtimePromise = initializeWasmRuntime(cacheKey, bundleKind, createRuntime);
  runtimeCache.set(cacheKey, runtimePromise);

  try {
    const loadedRuntime = await runtimePromise;
    return getExpectedRuntime<TRuntime>(loadedRuntime, bundleKind, appBundlePath);
  } catch (error) {
    if (runtimeCache.get(cacheKey) === runtimePromise) {
      runtimeCache.delete(cacheKey);
    }

    throw error;
  }
}

export function getBridgeNamespace(assemblyExports: unknown): Record<string, unknown> {
  const scriptDom = getObjectProperty(assemblyExports, 'ScriptDom', 'ScriptDom namespace');
  return getObjectProperty(scriptDom, 'WasmBridge', 'ScriptDom.WasmBridge namespace');
}

export function getFunctionProperty(
  value: Record<string, unknown>,
  propertyName: string,
  fieldName: string,
): (...args: string[]) => unknown {
  const property = value[propertyName];

  if (typeof property !== 'function') {
    throw new Error(`Invalid ScriptDOM WASM export: ${fieldName}`);
  }

  return property as (...args: string[]) => unknown;
}

function getExpectedRuntime<TRuntime>(
  loadedRuntime: LoadedRuntime,
  bundleKind: string,
  appBundlePath: string,
): TRuntime {
  if (loadedRuntime.bundleKind !== bundleKind) {
    throw new Error(
      `The WASM AppBundle at ${appBundlePath} exports ${loadedRuntime.bundleKind}, not ${bundleKind}.`,
    );
  }

  return loadedRuntime.runtime as TRuntime;
}

async function initializeWasmRuntime<TRuntime>(
  dotnetJsPath: string,
  bundleKind: string,
  createRuntime: (
    assemblyExports: unknown,
    context: { poison(): void },
  ) => Promise<TRuntime> | TRuntime,
): Promise<LoadedRuntime> {
  const dotnetModule = (await import(pathToFileURL(dotnetJsPath).href)) as DotnetModule;
  const runtime = await dotnetModule.dotnet.withDiagnosticTracing(false).create();
  const config = runtime.getConfig();
  const assemblyExports = await runtime.getAssemblyExports(config.mainAssemblyName);

  return {
    bundleKind,
    runtime: await createRuntime(assemblyExports, {
      poison() {
        runtimeCache.delete(dotnetJsPath);
      },
    }),
  };
}

function getRuntimeCache() {
  const globalCache = globalThis as Record<
    symbol,
    Map<string, Promise<LoadedRuntime>> | undefined
  >;
  const existingCache = globalCache[runtimeCacheSymbol];

  if (existingCache) {
    return existingCache;
  }

  const cache = new Map<string, Promise<LoadedRuntime>>();
  globalCache[runtimeCacheSymbol] = cache;
  return cache;
}

function getObjectProperty(
  value: unknown,
  propertyName: string,
  fieldName: string,
): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`Invalid ScriptDOM WASM export: ${fieldName}`);
  }

  const property = (value as Record<string, unknown>)[propertyName];

  if (!property || typeof property !== 'object' || Array.isArray(property)) {
    throw new Error(`Invalid ScriptDOM WASM export: ${fieldName}`);
  }

  return property as Record<string, unknown>;
}
