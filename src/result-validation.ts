export type TsqlLocationError = {
  number: number;
  offset: number;
  line: number;
  column: number;
};

const forbiddenResultKeys = new Set(['text', 'message', 'sql', 'value']);

export function assertObject(
  value: unknown,
  fieldName: string,
): asserts value is Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}

export function assertInteger(value: unknown, fieldName: string): asserts value is number {
  if (!Number.isSafeInteger(value)) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}

export function assertNonNegativeInteger(
  value: unknown,
  fieldName: string,
): asserts value is number {
  assertInteger(value, fieldName);

  if (value < 0) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}

export function assertString(value: unknown, fieldName: string): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}

export function assertStringArray(value: unknown, fieldName: string): asserts value is string[] {
  if (!Array.isArray(value)) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }

  for (const [index, item] of value.entries()) {
    assertString(item, `${fieldName}[${index}]`);
  }
}

export function assertExactKeys(
  value: Record<string, unknown>,
  expectedKeys: Set<string>,
  fieldName: string,
) {
  assertNoForbiddenKeys(value, fieldName);

  const actualKeys = Object.keys(value);
  if (
    actualKeys.length !== expectedKeys.size ||
    actualKeys.some((key) => !expectedKeys.has(key))
  ) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}

export function assertOptionalKeys(
  value: Record<string, unknown>,
  requiredKeys: Set<string>,
  allowedKeys: Set<string>,
  fieldName: string,
) {
  assertNoForbiddenKeys(value, fieldName);

  const actualKeys = Object.keys(value);
  if (
    [...requiredKeys].some((key) => !Object.hasOwn(value, key)) ||
    actualKeys.some((key) => !allowedKeys.has(key))
  ) {
    throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
  }
}

export function assertNoForbiddenKeys(value: Record<string, unknown>, fieldName: string) {
  for (const key of Object.keys(value)) {
    if (forbiddenResultKeys.has(key)) {
      throw new Error(`Invalid ScriptDOM result: ${fieldName}`);
    }
  }
}

export function validateLocationError(
  value: unknown,
  fieldName: string,
  sqlLength?: number,
): TsqlLocationError {
  assertObject(value, fieldName);
  assertExactKeys(value, locationErrorKeys, `${fieldName} keys`);
  assertInteger(value.number, `${fieldName}.number`);
  assertNonNegativeInteger(value.offset, `${fieldName}.offset`);
  assertNonNegativeInteger(value.line, `${fieldName}.line`);
  assertNonNegativeInteger(value.column, `${fieldName}.column`);

  if (sqlLength !== undefined && value.offset > sqlLength) {
    throw new Error('Invalid ScriptDOM result: location error range');
  }

  return {
    number: value.number,
    offset: value.offset,
    line: value.line,
    column: value.column,
  };
}

export function validateOptionalRange(
  value: Record<string, unknown>,
  fieldName: string,
  sqlLength: number,
) {
  if (Object.hasOwn(value, 'offset')) {
    assertNonNegativeInteger(value.offset, `${fieldName}.offset`);

    if (value.offset > sqlLength) {
      throw new Error('Invalid ScriptDOM result: range');
    }
  }

  if (Object.hasOwn(value, 'length')) {
    assertNonNegativeInteger(value.length, `${fieldName}.length`);
  }

  if (Object.hasOwn(value, 'offset') && Object.hasOwn(value, 'length')) {
    const offset = value.offset as number;
    const length = value.length as number;

    if (offset + length > sqlLength) {
      throw new Error('Invalid ScriptDOM result: range');
    }
  }
}

const locationErrorKeys = new Set(['number', 'offset', 'line', 'column']);
