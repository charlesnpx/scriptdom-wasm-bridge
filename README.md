# scriptdom-wasm-bridge

Node.js bridge for Microsoft SQL Server ScriptDOM compiled to .NET WebAssembly.

This is an unofficial package. It is not affiliated with, endorsed by, or supported by Microsoft.

This package is intentionally narrow: C# invokes Microsoft ScriptDOM and returns token/location metadata or a small structural projection. JavaScript owns validation, sanitization policy, and package ergonomics.

## Design Philosophy

The bridge keeps the C#/.NET side as small and mechanical as possible. Its job is to invoke Microsoft's ScriptDOM tokenizer or parser and return metadata. It does not decide what is sensitive, how SQL should be rewritten, how capture records should be shaped, or how errors should be reported to application code.

That split is deliberate. The WebAssembly wrapper is the least familiar runtime surface in a Node.js application, so the package minimizes how much responsibility lives there. Keeping policy in Node.js reduces the risk that a memory, marshaling, serialization, or runtime issue in the wrapper can leak token text, SQL fragments, parser messages, request data, bindings, literal values, comments, or other application context.

In practice:

- C# owns parser invocation only.
- C# returns numeric token metadata, parse locations, and limited identifier metadata only.
- Node.js validates exact result shapes and ranges.
- Node.js owns token classification.
- Node.js owns sanitization and redaction.
- Node.js owns JSON/output records for the consuming application.

Identifier `nameParts` returned by the introspector are SQL-derived metadata. Treat them as potentially sensitive, even though raw SQL text, literals, comments, parser messages, and generated SQL are not returned.

## Install

```sh
npm install scriptdom-wasm-bridge
```

The package requires Node.js 22 or newer.

## Entry Points

```js
import { createTsqlTokenizer } from 'scriptdom-wasm-bridge/tokenizer';
import { createTsqlSanitizer } from 'scriptdom-wasm-bridge/sanitizer';
import { createTsqlIntrospector } from 'scriptdom-wasm-bridge/introspector';
```

The package root re-exports those APIs and also exposes the root-only
`normalizeTsqlPlaceholders` helper:

```js
import {
  createTsqlIntrospector,
  createTsqlSanitizer,
  createTsqlTokenizer,
  normalizeTsqlPlaceholders,
} from 'scriptdom-wasm-bridge';
```

Importing the root or a subpath does not initialize WebAssembly. Runtime initialization is lazy and cached by the real `dotnet.js` path. The tokenizer and sanitizer use the tokenizer AppBundle; the introspector uses a separate introspector AppBundle. `normalizeTsqlPlaceholders` is a JavaScript-only helper and is not available from the tokenizer, sanitizer, or introspector subpaths.

## Placeholder Normalization

ScriptDOM parses T-SQL, so the tokenizer, sanitizer, and introspector reject raw question-mark placeholders such as `select ?`. If your SQL source uses single `?` markers, normalize them explicitly before passing SQL to the ScriptDOM-backed APIs:

```js
import {
  createTsqlIntrospector,
  createTsqlSanitizer,
  normalizeTsqlPlaceholders,
} from 'scriptdom-wasm-bridge';

const normalized = normalizeTsqlPlaceholders(
  'select * from dbo.Users where id = ? and status = ?',
);

console.log(normalized.sql);
// select * from dbo.Users where id = @p0 and status = @p1

const sanitizer = await createTsqlSanitizer();
const sanitized = sanitizer.sanitize(normalized.sql);

const introspector = await createTsqlIntrospector();
const inspected = introspector.inspect(normalized.sql);
```

```ts
type NormalizeTsqlPlaceholdersOptions = {
  style?: 'question-mark';
  prefix?: string;
  startAt?: number;
};

type NormalizeTsqlPlaceholdersResult = {
  sql: string;
  placeholderCount: number;
};

function normalizeTsqlPlaceholders(
  sql: string,
  options?: NormalizeTsqlPlaceholdersOptions,
): NormalizeTsqlPlaceholdersResult;
```

Defaults are `style: 'question-mark'`, `prefix: '@p'`, and `startAt: 0`. Each single `?` outside protected T-SQL lexical regions becomes `${prefix}${startAt + index}`.

The scanner copies these protected regions unchanged:

- single-quoted strings, including escaped `''`
- double-quoted regions, including escaped `""`
- bracketed identifiers, including escaped `]]`
- line comments
- nested block comments

Malformed or unclosed protected regions are preserved through the end of the SQL string without throwing. Adjacent question-mark runs such as `??` and `???` are unsupported outside protected regions and throw `TypeError`.

Options are validated strictly using own data properties only. Inherited properties are ignored. Unknown own string or symbol keys are rejected. `style` must be `'question-mark'`, `prefix` must be a string, and `startAt` must be a non-negative safe integer. Generated placeholder indexes must remain safe integers, and generated T-SQL variable names must be 128 characters or shorter.

The helper does not detect collisions with variables that already exist in the SQL text. Choose a prefix and range that are safe for the SQL you pass in.

## Tokenizer

```js
import { createTsqlTokenizer } from 'scriptdom-wasm-bridge/tokenizer';

const tokenizer = await createTsqlTokenizer();
const tokenized = tokenizer.tokenize("select * from users where name = 'secret'");

console.log(tokenized);
```

```ts
type TsqlToken = {
  type: number;
  offset: number;
  length: number;
  line: number;
  column: number;
};

type TsqlLocationError = {
  number: number;
  offset: number;
  line: number;
  column: number;
};

type TsqlTokenizeResult = {
  failed: boolean;
  tokens: TsqlToken[];
  errors: TsqlLocationError[];
};
```

The tokenizer C# wrapper never returns token text, token enum names, SQL fragments, parser messages, literal values, comments, or sanitized SQL. `type` is the numeric `TSqlTokenType` value. `length` is derived from neighboring token offsets, including the EOF token, and is clamped to the input SQL length.

## Sanitizer

```js
import { createTsqlSanitizer } from 'scriptdom-wasm-bridge/sanitizer';

const sanitizer = await createTsqlSanitizer();
const result = sanitizer.sanitize("select * from users where name = 'secret'");

console.log(result.sql);
```

The sanitizer uses tokenizer spans in JavaScript. Literal token spans become `?`, comment token spans become whitespace, and all other spans are preserved from the input SQL.

If tokenization fails, `sanitize(sql)` fails closed and returns an empty SQL string plus location-only diagnostics. It does not throw a parser message and does not return raw SQL as a fallback.

```ts
type TsqlSanitizeDiagnostic = {
  kind: 'tokenization-error';
  number: number;
  offset: number;
  line: number;
  column: number;
};

type TsqlSanitizeResult = {
  sql: string;
  tokenizationFailed: boolean;
  diagnostics: TsqlSanitizeDiagnostic[];
};
```

## Introspector

```js
import { createTsqlIntrospector } from 'scriptdom-wasm-bridge/introspector';

const introspector = await createTsqlIntrospector();
const result = introspector.inspect('select * from dbo.Users; exec dbo.RunJob');

console.log(result.objectReferences);
console.log(result.procedureCalls);
```

```ts
type TsqlInspectResult = {
  failed: boolean;
  statements: Array<{ kind: string; offset: number; length: number }>;
  objectReferences: Array<{
    context: string;
    nameParts: string[];
    offset?: number;
    length?: number;
  }>;
  functionCalls: Array<{ nameParts: string[]; offset?: number; length?: number }>;
  procedureCalls: Array<{ nameParts: string[]; offset?: number; length?: number }>;
  constructs: Array<{ kind: string; offset?: number; length?: number }>;
  errors: TsqlLocationError[];
};
```

On parse errors, the introspector returns `failed: true`, empty structural arrays, and location-only errors. Wrapper exceptions return the same shape with one synthetic location-only error.

## CommonJS

```js
const { createTsqlSanitizer } = require('scriptdom-wasm-bridge/sanitizer');

async function main() {
  const sanitizer = await createTsqlSanitizer();
  console.log(sanitizer.sanitize("select * from users where name = 'secret'").sql);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

## Build From Source

Install the .NET WebAssembly workload if needed:

```sh
dotnet workload install wasm-tools
```

Build and copy the vendored AppBundles:

```sh
npm run build:wasm
```

Build JavaScript and TypeScript declaration outputs:

```sh
npm run build
```

The npm package exposes ESM, CommonJS, and TypeScript declarations for:

```text
scriptdom-wasm-bridge
scriptdom-wasm-bridge/tokenizer
scriptdom-wasm-bridge/sanitizer
scriptdom-wasm-bridge/introspector
```

Run checks:

```sh
npm run check
npm test
```

The generated AppBundles are copied to:

```text
vendor/scriptdom-tokenizer-wasm/AppBundle
vendor/scriptdom-introspector-wasm/AppBundle
```

The AppBundle copy step removes optional .NET symbol metadata that is not needed at runtime. This keeps Node.js from trying to load development symbol files when the package starts.

## Provenance

This package builds against `Microsoft.SqlServer.TransactSql.ScriptDom` version `180.37.3`, which declares the MIT license in its NuGet metadata. The npm package also includes .NET WebAssembly runtime assets generated by `dotnet publish`.

See `THIRD_PARTY_NOTICES.md` and `DOTNET_THIRD_PARTY_NOTICES.txt` for vendored runtime and ScriptDOM notices.
