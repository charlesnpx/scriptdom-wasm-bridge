type LoadWasmRuntimeOptions<TRuntime> = {
    appBundlePath: string;
    bundleKind: string;
    missingBundleMessage: (dotnetJsPath: string) => string;
    createRuntime: (assemblyExports: unknown, context: {
        poison(): void;
    }) => Promise<TRuntime> | TRuntime;
};
export declare function loadWasmRuntime<TRuntime>({ appBundlePath, bundleKind, missingBundleMessage, createRuntime, }: LoadWasmRuntimeOptions<TRuntime>): Promise<TRuntime>;
export declare function getBridgeNamespace(assemblyExports: unknown): Record<string, unknown>;
export declare function getFunctionProperty(value: Record<string, unknown>, propertyName: string, fieldName: string): (...args: string[]) => unknown;
export {};
