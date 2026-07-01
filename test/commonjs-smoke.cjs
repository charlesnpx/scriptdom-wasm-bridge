const { createTsqlTokenizer } = require('scriptdom-wasm-bridge/tokenizer');
const { createTsqlSanitizer } = require('scriptdom-wasm-bridge/sanitizer');
const { createTsqlIntrospector } = require('scriptdom-wasm-bridge/introspector');

async function main() {
  const tokenizer = await createTsqlTokenizer();
  const sanitizer = await createTsqlSanitizer();
  const introspector = await createTsqlIntrospector();

  const tokenized = tokenizer.tokenize("select * from users where name = 'commonJsSecret'");
  const sanitized = sanitizer.sanitize("select * from users where name = 'commonJsSecret'");
  const inspected = introspector.inspect('select * from dbo.CommonJsTable');

  if (JSON.stringify(tokenized).includes('commonJsSecret')) {
    throw new Error('CommonJS tokenizer leaked a sample value');
  }

  if (sanitized.sql.includes('commonJsSecret') || sanitized.tokenizationFailed) {
    throw new Error('CommonJS sanitizer leaked a sample value');
  }

  if (!inspected.objectReferences.some((reference) => reference.nameParts.includes('CommonJsTable'))) {
    throw new Error('CommonJS introspector did not return the expected object reference');
  }

  console.log(`commonjs: ${sanitized.sql}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
