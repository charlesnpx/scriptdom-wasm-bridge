const { createScriptDomTokenizer } = require('scriptdom-wasm-bridge');

async function main() {
  const tokenizer = await createScriptDomTokenizer();
  const sanitized = tokenizer.sanitize("select * from users where name = 'commonJsSecret'");

  if (sanitized.includes('commonJsSecret')) {
    throw new Error('CommonJS sanitizer leaked a sample value');
  }

  console.log(`commonjs: ${sanitized}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
