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

Identifiers returned by the introspector are SQL-derived metadata. Treat them as potentially sensitive, even though raw SQL text, literals, comments, parser messages, and generated SQL are not returned.

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
  avoidExisting?: boolean;
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

Defaults are `style: 'question-mark'`, `prefix: '@p'`, `startAt: 0`, and `avoidExisting: false`. Each single `?` outside protected T-SQL lexical regions becomes `${prefix}${generatedIndex}`, where `generatedIndex` starts at `startAt` and skips reserved indexes when collision avoidance is enabled.

The scanner copies these protected regions unchanged:

- single-quoted strings, including escaped `''`
- double-quoted regions, including escaped `""`
- bracketed identifiers, including escaped `]]`
- line comments
- nested block comments

Malformed or unclosed protected regions are preserved through the end of the SQL string without throwing. Adjacent question-mark runs such as `??` and `???` are unsupported outside protected regions and throw `TypeError`.

Options are validated strictly using own data properties only. Inherited properties are ignored. Unknown own string or symbol keys are rejected. `style` must be `'question-mark'`, `prefix` must be a string, `startAt` must be a non-negative safe integer, and `avoidExisting` must be a boolean. Generated placeholder indexes must remain safe integers, and generated T-SQL variable names must be 128 characters or shorter.

By default, the helper does not detect collisions with variables that already exist in the SQL text. Choose a prefix and range that are safe for the SQL you pass in.

Set `avoidExisting: true` to reserve existing unprotected placeholders that use the same prefix and numeric suffix:

```js
normalizeTsqlPlaceholders('select @p0 as existing, ? as generated', {
  prefix: '@p',
  avoidExisting: true,
}).sql;
// select @p0 as existing, @p1 as generated
```

Collision detection uses whole-marker matching outside protected lexical regions. It reserves `@p0`, but not embedded text such as `foo@p0`, `@p0suffix`, or `@p01x`. Collision-aware prefixes must be non-empty and must not end with an ASCII digit.

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

The sanitizer uses tokenizer spans in JavaScript. Literal token spans become `?` by default, comment token spans become whitespace, and all other spans are preserved from the input SQL.

You can configure the literal marker:

```js
const sanitizer = await createTsqlSanitizer({
  literalPlaceholder: '@lit{index}',
  avoidExistingLiteralPlaceholders: true,
});

sanitizer.sanitize("select @lit0 as existing, 'secret' as value").sql;
// select @lit0 as existing, @lit1 as value
```

`literalPlaceholder` defaults to `'?'`. A value with one `{index}` token generates indexed markers. A value without `{index}` is reused as a fixed marker. `literalPlaceholderStartAt` defaults to `0`. `avoidExistingLiteralPlaceholders` defaults to `false`; when enabled, `literalPlaceholder` must be a prefix-only template such as `@lit{index}` so existing whole markers can reserve indexes.

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

type CreateTsqlSanitizerOptions = {
  appBundlePath?: string;
  literalPlaceholder?: string;
  literalPlaceholderStartAt?: number;
  avoidExistingLiteralPlaceholders?: boolean;
};
```

## Introspector

```js
import { createTsqlIntrospector } from 'scriptdom-wasm-bridge/introspector';

const introspector = await createTsqlIntrospector();
const result = introspector.inspect('select * from dbo.Users; exec dbo.RunJob', {
  includeSpans: true,
  includeTokens: true,
});

console.log(result.nodes);
```

```ts
type TsqlInspectOptions = {
  includeSpans?: boolean;
  includeTokens?: boolean;
};

type TsqlInspectSpan = {
  offset: number;
  length: number;
  line: number;
  column: number;
};

type TsqlStructuralAttribute =
  | { name: string; kind: 'identifier'; state: 'present'; value: string }
  | {
      name: string;
      kind: 'identifier';
      state: 'redacted';
      profile: 'v1-conservative';
      reason: 'literal-origin' | 'secret-pattern';
    }
  | { name: string; kind: 'enum'; value: string }
  | { name: string; kind: 'boolean'; value: boolean };

type TsqlStructuralNode = {
  id: number;
  kind: string;
  parentId: number | null;
  pathFromParent: string[];
  span?: TsqlInspectSpan;
  attributes: TsqlStructuralAttribute[];
};

type TsqlInspectToken = {
  type: number;
  offset: number;
  length: number;
  line: number;
  column: number;
};

type TsqlInspectLocationError = {
  number: number;
  offset: number;
  line: number;
  column: number;
  coordinateState: 'available' | 'unavailable';
};

type TsqlInspectResult = {
  failed: boolean;
  parser: 'TSql160Parser';
  projectionVersion: 2;
  nodes: TsqlStructuralNode[];
  tokens?: TsqlInspectToken[];
  errors: TsqlInspectLocationError[];
};
```

The introspector returns a low-policy structural ScriptDOM projection. It does not classify reads versus writes, migration evidence, dynamic SQL risk, procedure-call semantics, or other audit concepts. Consumers own that interpretation.

`includeSpans` defaults to `false`. When enabled, nodes with valid ScriptDOM spans include UTF-16 code-unit `offset` and `length` plus one-based ScriptDOM `line` and `column`. `includeTokens` defaults to `false`; when enabled, tokens include numeric `TSqlTokenType` values and coordinates but never token text.

Identifier attributes may be returned as `state: 'present'`. Secret-pattern identifiers and literal-origin identifiers are returned as `state: 'redacted'` under the deterministic `v1-conservative` profile. Predicate operator facts are exposed only as generic `enum` and `boolean` attributes. Raw SQL, literal values, comments, token text, parser messages, exception details, stack traces, internal paths, and serializer details are not returned.

On parse errors, the introspector returns `failed: true`, an empty `nodes` array, optional empty `tokens`, and location-only errors. Invalid parser coordinates normalize to `{ offset: 0, line: 1, column: 1, coordinateState: 'unavailable' }`.

The wrapper enforces these public resource limits:

- SQL input: 2,097,152 UTF-16 code units
- private options JSON: 80 UTF-16 code units
- emitted nodes: 100,000
- traversed fragments: 250,000
- traversal depth: 1,000
- total serialized `pathFromParent` segments: 250,000
- parse errors: 1,000
- emitted tokens: 250,000
- projected variable public output: 4 MiB UTF-16 code units
- serialized JSON envelope: 16 MiB UTF-8 bytes

These limits do not fully bound ScriptDOM parser-internal CPU or heap use. Services that accept untrusted SQL should run the bridge behind caller-owned isolation and timeout controls.

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
npm run generate:introspector-projection
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
npm run check:introspector-projection
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
