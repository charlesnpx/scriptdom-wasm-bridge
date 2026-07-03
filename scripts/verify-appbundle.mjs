import fs from 'node:fs';
import path from 'node:path';

const appBundles = [
  {
    name: 'tokenizer',
    path: path.resolve(import.meta.dirname, '../vendor/scriptdom-tokenizer-wasm/AppBundle'),
    assembly: 'ScriptDomTokenizerWasmBridge',
  },
  {
    name: 'introspector',
    path: path.resolve(import.meta.dirname, '../vendor/scriptdom-introspector-wasm/AppBundle'),
    assembly: 'ScriptDomIntrospectorWasmBridge',
  },
];

for (const appBundle of appBundles) {
  verifyAppBundle(appBundle);
}

function verifyAppBundle(appBundle) {
  const requiredFiles = [
    'main.mjs',
    `${appBundle.assembly}.runtimeconfig.json`,
    '_framework/dotnet.js',
    '_framework/dotnet.native.wasm',
    `_framework/${appBundle.assembly}.wasm`,
    '_framework/Microsoft.SqlServer.TransactSql.ScriptDom.wasm',
  ];

  const missingFiles = requiredFiles.filter(
    (file) => !fs.existsSync(path.join(appBundle.path, file)),
  );

  if (missingFiles.length > 0) {
    throw new Error(
      `Missing ${appBundle.name} WASM AppBundle files. Run "npm run build:wasm". Missing: ${missingFiles.join(', ')}`,
    );
  }

  const symbolPath = path.join(appBundle.path, '_framework', 'dotnet.native.js.symbols');
  if (fs.existsSync(symbolPath)) {
    throw new Error(`Unexpected optional .NET symbol file in ${appBundle.name} AppBundle`);
  }

  const bootConfig = fs.readFileSync(path.join(appBundle.path, '_framework/dotnet.boot.js'), 'utf8');
  if (bootConfig.includes('"wasmSymbols"') || bootConfig.includes('dotnet.native.js.symbols')) {
    throw new Error(`Unexpected .NET symbol metadata in ${appBundle.name} AppBundle`);
  }

  const unreadablePaths = [];
  const unsafePaths = [];
  verifyModes(appBundle.path, unreadablePaths, unsafePaths);

  if (unsafePaths.length > 0) {
    throw new Error(
      `Vendored ${appBundle.name} AppBundle contains unsafe filesystem entries: ${unsafePaths
        .slice(0, 10)
        .join(', ')}`,
    );
  }

  if (unreadablePaths.length > 0) {
    throw new Error(
      `Vendored ${appBundle.name} AppBundle contains files or directories that are not readable by package consumers: ${unreadablePaths
        .slice(0, 10)
        .join(', ')}`,
    );
  }
}

function verifyModes(currentPath, unreadablePaths, unsafePaths) {
  const stat = fs.lstatSync(currentPath);
  const mode = stat.mode & 0o777;

  if (stat.isSymbolicLink() || (!stat.isDirectory() && !stat.isFile())) {
    unsafePaths.push(currentPath);
    return;
  }

  if (stat.isFile() && stat.nlink > 1) {
    unsafePaths.push(currentPath);
    return;
  }

  if (!stat.isDirectory()) {
    if (stat.isFile() && (mode & 0o444) !== 0o444) {
      unreadablePaths.push(currentPath);
    }

    return;
  }

  if ((mode & 0o555) !== 0o555) {
    unreadablePaths.push(currentPath);
  }

  for (const entry of fs.readdirSync(currentPath, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) {
      continue;
    }

    verifyModes(path.join(currentPath, entry.name), unreadablePaths, unsafePaths);
  }
}
