import path from 'node:path';

import {
  assertExactKeys,
  assertNonNegativeInteger,
  assertObject,
  assertOptionalKeys,
  assertString,
  assertStringArray,
  validateLocationError,
  validateOptionalRange,
  type TsqlLocationError,
} from './result-validation.js';
import { getBridgeNamespace, getFunctionProperty, loadWasmRuntime } from './wasm-runtime.js';

declare const __scriptdomBridgeModuleDirectory: string;

export type CreateTsqlIntrospectorOptions = {
  appBundlePath?: string;
};

export type TsqlStatement = {
  kind: string;
  offset: number;
  length: number;
};

export type TsqlObjectReference = {
  context: string;
  nameParts: string[];
  offset?: number;
  length?: number;
};

export type TsqlFunctionCall = {
  nameParts: string[];
  offset?: number;
  length?: number;
};

export type TsqlProcedureCall = {
  nameParts: string[];
  offset?: number;
  length?: number;
};

export type TsqlConstruct = {
  kind: string;
  offset?: number;
  length?: number;
};

export type TsqlInspectResult = {
  failed: boolean;
  statements: TsqlStatement[];
  objectReferences: TsqlObjectReference[];
  functionCalls: TsqlFunctionCall[];
  procedureCalls: TsqlProcedureCall[];
  constructs: TsqlConstruct[];
  errors: TsqlLocationError[];
};

export type TsqlIntrospector = {
  inspect(sql: string): TsqlInspectResult;
};

type LoadedTsqlIntrospectorRuntime = {
  inspect(sql: string): TsqlInspectResult;
};

const defaultIntrospectorAppBundlePath = path.resolve(
  __scriptdomBridgeModuleDirectory,
  '../vendor/scriptdom-introspector-wasm/AppBundle',
);

const inspectResultKeys = new Set([
  'failed',
  'statements',
  'objectReferences',
  'functionCalls',
  'procedureCalls',
  'constructs',
  'errors',
]);
const statementKeys = new Set(['kind', 'offset', 'length']);
const objectReferenceRequiredKeys = new Set(['context', 'nameParts']);
const objectReferenceAllowedKeys = new Set(['context', 'nameParts', 'offset', 'length']);
const namedRangeRequiredKeys = new Set(['nameParts']);
const namedRangeAllowedKeys = new Set(['nameParts', 'offset', 'length']);
const constructRequiredKeys = new Set(['kind']);
const constructAllowedKeys = new Set(['kind', 'offset', 'length']);

export async function createTsqlIntrospector(
  options: CreateTsqlIntrospectorOptions = {},
): Promise<TsqlIntrospector> {
  const runtime = await loadTsqlIntrospectorRuntime(options);

  return {
    inspect: runtime.inspect,
  };
}

async function loadTsqlIntrospectorRuntime(
  options: CreateTsqlIntrospectorOptions = {},
): Promise<LoadedTsqlIntrospectorRuntime> {
  return loadWasmRuntime({
    appBundlePath: path.resolve(options.appBundlePath ?? defaultIntrospectorAppBundlePath),
    bundleKind: 'introspector',
    missingBundleMessage: (dotnetJsPath) =>
      `Published introspector dotnet.js was not found at ${dotnetJsPath}. Run "npm run build:wasm" before using the package from source.`,
    createRuntime(assemblyExports) {
      const bridgeNamespace = getBridgeNamespace(assemblyExports);
      const introspector = bridgeNamespace.TsqlIntrospector;

      if (!introspector || typeof introspector !== 'object' || Array.isArray(introspector)) {
        throw new Error('Invalid ScriptDOM WASM export: TsqlIntrospector');
      }

      const inspectJson = getFunctionProperty(
        introspector as Record<string, unknown>,
        'InspectJson',
        'TsqlIntrospector.InspectJson',
      );

      return {
        inspect(sql: string) {
          if (typeof sql !== 'string') {
            throw new TypeError('SQL input must be a string');
          }

          return parseAndValidateInspectResult(sql, inspectJson(sql));
        },
      };
    },
  });
}

function parseAndValidateInspectResult(sql: string, rawJson: string): TsqlInspectResult {
  return validateInspectResult(sql, JSON.parse(rawJson) as unknown);
}

function validateInspectResult(sql: string, inspectResult: unknown): TsqlInspectResult {
  assertObject(inspectResult, 'inspect result');
  assertExactKeys(inspectResult, inspectResultKeys, 'inspect result keys');

  if (typeof inspectResult.failed !== 'boolean') {
    throw new Error('Invalid ScriptDOM result: inspect result failed');
  }

  const statements = validateArray(
    inspectResult.statements,
    'statements',
    (value, fieldName) => validateStatement(sql, value, fieldName),
  );
  const objectReferences = validateArray(
    inspectResult.objectReferences,
    'objectReferences',
    (value, fieldName) => validateObjectReference(sql, value, fieldName),
  );
  const functionCalls = validateArray(
    inspectResult.functionCalls,
    'functionCalls',
    (value, fieldName) => validateNamedRange(sql, value, fieldName),
  );
  const procedureCalls = validateArray(
    inspectResult.procedureCalls,
    'procedureCalls',
    (value, fieldName) => validateNamedRange(sql, value, fieldName),
  );
  const constructs = validateArray(
    inspectResult.constructs,
    'constructs',
    (value, fieldName) => validateConstruct(sql, value, fieldName),
  );
  const errors = validateArray(inspectResult.errors, 'errors', (value, fieldName) =>
    validateLocationError(value, fieldName, sql.length),
  );

  return {
    failed: inspectResult.failed,
    statements,
    objectReferences,
    functionCalls,
    procedureCalls,
    constructs,
    errors,
  };
}

function validateStatement(sql: string, value: unknown, fieldName: string): TsqlStatement {
  assertObject(value, fieldName);
  assertExactKeys(value, statementKeys, `${fieldName} keys`);
  assertString(value.kind, `${fieldName}.kind`);
  assertNonNegativeInteger(value.offset, `${fieldName}.offset`);
  assertNonNegativeInteger(value.length, `${fieldName}.length`);

  if (value.offset > sql.length || value.offset + value.length > sql.length) {
    throw new Error('Invalid ScriptDOM result: statement range');
  }

  return {
    kind: value.kind,
    offset: value.offset,
    length: value.length,
  };
}

function validateObjectReference(
  sql: string,
  value: unknown,
  fieldName: string,
): TsqlObjectReference {
  assertObject(value, fieldName);
  assertOptionalKeys(
    value,
    objectReferenceRequiredKeys,
    objectReferenceAllowedKeys,
    `${fieldName} keys`,
  );
  assertString(value.context, `${fieldName}.context`);
  assertStringArray(value.nameParts, `${fieldName}.nameParts`);
  validateOptionalRange(value, fieldName, sql.length);

  const result: TsqlObjectReference = {
    context: value.context,
    nameParts: value.nameParts,
  };

  if (Object.hasOwn(value, 'offset')) {
    result.offset = value.offset as number;
  }

  if (Object.hasOwn(value, 'length')) {
    result.length = value.length as number;
  }

  return result;
}

function validateNamedRange(
  sql: string,
  value: unknown,
  fieldName: string,
): TsqlFunctionCall | TsqlProcedureCall {
  assertObject(value, fieldName);
  assertOptionalKeys(value, namedRangeRequiredKeys, namedRangeAllowedKeys, `${fieldName} keys`);
  assertStringArray(value.nameParts, `${fieldName}.nameParts`);
  validateOptionalRange(value, fieldName, sql.length);

  const result: TsqlFunctionCall = {
    nameParts: value.nameParts,
  };

  if (Object.hasOwn(value, 'offset')) {
    result.offset = value.offset as number;
  }

  if (Object.hasOwn(value, 'length')) {
    result.length = value.length as number;
  }

  return result;
}

function validateConstruct(sql: string, value: unknown, fieldName: string): TsqlConstruct {
  assertObject(value, fieldName);
  assertOptionalKeys(value, constructRequiredKeys, constructAllowedKeys, `${fieldName} keys`);
  assertString(value.kind, `${fieldName}.kind`);
  validateOptionalRange(value, fieldName, sql.length);

  const result: TsqlConstruct = {
    kind: value.kind,
  };

  if (Object.hasOwn(value, 'offset')) {
    result.offset = value.offset as number;
  }

  if (Object.hasOwn(value, 'length')) {
    result.length = value.length as number;
  }

  return result;
}

function validateArray<T>(
  value: unknown,
  fieldName: string,
  validateItem: (value: unknown, fieldName: string) => T,
) {
  if (!Array.isArray(value)) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }

  return value.map((item, index) => validateItem(item, `${fieldName}[${index}]`));
}
