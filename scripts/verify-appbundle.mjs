import fs from 'node:fs';
import path from 'node:path';

const appBundlePath = path.resolve(import.meta.dirname, '../vendor/AppBundle');
const requiredFiles = [
  'main.mjs',
  'ScriptDomWasmBridge.runtimeconfig.json',
  '_framework/dotnet.js',
  '_framework/dotnet.native.wasm',
  '_framework/ScriptDomWasmBridge.wasm',
  '_framework/Microsoft.SqlServer.TransactSql.ScriptDom.wasm',
];

const missingFiles = requiredFiles.filter((file) => !fs.existsSync(path.join(appBundlePath, file)));

if (missingFiles.length > 0) {
  throw new Error(
    `Missing WASM AppBundle files. Run "npm run build:wasm". Missing: ${missingFiles.join(', ')}`,
  );
}

const symbolPath = path.join(appBundlePath, '_framework/dotnet.native.js.symbols');
if (fs.existsSync(symbolPath)) {
  throw new Error('Unexpected optional .NET symbol file in vendored AppBundle');
}

const bootConfig = fs.readFileSync(path.join(appBundlePath, '_framework/dotnet.boot.js'), 'utf8');
if (bootConfig.includes('"wasmSymbols"') || bootConfig.includes('dotnet.native.js.symbols')) {
  throw new Error('Unexpected .NET symbol metadata in vendored AppBundle');
}

const unreadablePaths = [];

function verifyModes(currentPath) {
  const stat = fs.statSync(currentPath);
  const mode = stat.mode & 0o777;

  if (stat.isDirectory() && (mode & 0o555) !== 0o555) {
    unreadablePaths.push(currentPath);
  }

  if (stat.isFile() && (mode & 0o444) !== 0o444) {
    unreadablePaths.push(currentPath);
  }

  if (!stat.isDirectory()) {
    return;
  }

  for (const entry of fs.readdirSync(currentPath, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) {
      continue;
    }

    verifyModes(path.join(currentPath, entry.name));
  }
}

verifyModes(appBundlePath);

if (unreadablePaths.length > 0) {
  throw new Error(
    `Vendored AppBundle contains files or directories that are not readable by package consumers: ${unreadablePaths
      .slice(0, 10)
      .join(', ')}`,
  );
}
