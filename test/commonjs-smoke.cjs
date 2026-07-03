const { normalizeTsqlPlaceholders } = require('scriptdom-wasm-bridge');
const { createTsqlTokenizer } = require('scriptdom-wasm-bridge/tokenizer');
const { createTsqlSanitizer } = require('scriptdom-wasm-bridge/sanitizer');
const { createTsqlIntrospector } = require('scriptdom-wasm-bridge/introspector');

async function main() {
  const tokenizer = await createTsqlTokenizer();
  const sanitizer = await createTsqlSanitizer({ literalPlaceholder: '@lit{index}' });
  const introspector = await createTsqlIntrospector();
  const normalized = normalizeTsqlPlaceholders('select @cjs3, ?', {
    prefix: '@cjs',
    startAt: 3,
    avoidExisting: true,
  });

  const tokenized = tokenizer.tokenize("select * from users where name = 'commonJsSecret'");
  const sanitized = sanitizer.sanitize("select * from users where name = 'commonJsSecret'");
  const inspected = introspector.inspect('select * from dbo.CommonJsTable');

  if (normalized.sql !== 'select @cjs3, @cjs4' || normalized.placeholderCount !== 1) {
    throw new Error('CommonJS root normalizer returned an unexpected result');
  }

  if (JSON.stringify(tokenized).includes('commonJsSecret')) {
    throw new Error('CommonJS tokenizer leaked a sample value');
  }

  if (sanitized.sql.includes('commonJsSecret') || sanitized.tokenizationFailed) {
    throw new Error('CommonJS sanitizer leaked a sample value');
  }

  if (
    !inspected.nodes.some((node) =>
      node.attributes.some(
        (attribute) =>
          attribute.kind === 'identifier' &&
          attribute.state === 'present' &&
          attribute.value === 'CommonJsTable',
      ),
    )
  ) {
    throw new Error('CommonJS introspector did not return the expected identifier');
  }

  console.log(`commonjs: ${sanitized.sql}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
