import { execFile } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const root = path.resolve(import.meta.dirname, '..');
const smokeDir = path.join(root, 'test', 'tmp-typescript-consumer');

await fs.rm(smokeDir, { recursive: true, force: true });
await fs.mkdir(smokeDir, { recursive: true });

try {
  await fs.writeFile(
    path.join(smokeDir, 'tsconfig.json'),
    JSON.stringify(
      {
        compilerOptions: {
          module: 'NodeNext',
          moduleResolution: 'NodeNext',
          noEmit: true,
          strict: true,
          target: 'ES2022',
          types: ['node'],
        },
        include: ['index.ts'],
      },
      null,
      2,
    ),
  );
  await fs.writeFile(
    path.join(smokeDir, 'index.ts'),
    `
import {
  createTsqlIntrospector,
  createTsqlSanitizer,
  createTsqlTokenizer,
  normalizeTsqlPlaceholders,
  type NormalizeTsqlPlaceholdersOptions,
  type NormalizeTsqlPlaceholdersResult,
  type TsqlInspectResult,
  type TsqlSanitizeResult,
  type TsqlTokenizeResult,
} from 'scriptdom-wasm-bridge';
import { createTsqlTokenizer as createTokenizerFromSubpath } from 'scriptdom-wasm-bridge/tokenizer';
import { createTsqlSanitizer as createSanitizerFromSubpath } from 'scriptdom-wasm-bridge/sanitizer';
import { createTsqlIntrospector as createIntrospectorFromSubpath } from 'scriptdom-wasm-bridge/introspector';

async function smoke() {
  const tokenizer = await createTsqlTokenizer();
  const sanitizer = await createTsqlSanitizer({
    literalPlaceholder: '@lit{index}',
    literalPlaceholderStartAt: 1,
    avoidExistingLiteralPlaceholders: true,
  });
  const introspector = await createTsqlIntrospector();
  const tokenizerFromSubpath = await createTokenizerFromSubpath();
  const sanitizerFromSubpath = await createSanitizerFromSubpath();
  const introspectorFromSubpath = await createIntrospectorFromSubpath();

  const tokenized: TsqlTokenizeResult = tokenizer.tokenize('select 1');
  const sanitized: TsqlSanitizeResult = sanitizer.sanitize('select 1');
  const inspected: TsqlInspectResult = introspector.inspect('select 1');
  const normalizeOptions: NormalizeTsqlPlaceholdersOptions = {
    prefix: '@smoke',
    startAt: 2,
    style: 'question-mark',
    avoidExisting: true,
  };
  const normalized: NormalizeTsqlPlaceholdersResult = normalizeTsqlPlaceholders(
    'select ?',
    normalizeOptions,
  );

  tokenizerFromSubpath.tokenize('select 1');
  sanitizerFromSubpath.sanitize('select 1');
  introspectorFromSubpath.inspect('select 1');

  return [
    tokenized.failed,
    sanitized.tokenizationFailed,
    inspected.failed,
    normalized.placeholderCount,
  ] as const;
}

void smoke();
`,
  );

  await execFileAsync(path.join(root, 'node_modules', '.bin', 'tsc'), ['-p', smokeDir], {
    cwd: root,
  });
} finally {
  await fs.rm(smokeDir, { recursive: true, force: true });
}
