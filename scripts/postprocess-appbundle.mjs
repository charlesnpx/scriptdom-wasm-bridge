import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const bootPrefix = 'export const config = /*json-start*/';
const bootSuffix = '/*json-end*/;';

export async function postProcessAppBundle(appBundlePath) {
  const frameworkPath = path.join(appBundlePath, '_framework');
  const bootConfigPath = path.join(frameworkPath, 'dotnet.boot.js');
  const symbolPath = path.join(frameworkPath, 'dotnet.native.js.symbols');
  const bootConfig = await fs.readFile(bootConfigPath, 'utf8');

  if (!bootConfig.startsWith(bootPrefix) || !bootConfig.endsWith(bootSuffix)) {
    throw new Error('Unexpected dotnet.boot.js shape');
  }

  const configJson = bootConfig.slice(bootPrefix.length, -bootSuffix.length);
  const config = JSON.parse(configJson);

  if (config.resources && typeof config.resources === 'object') {
    delete config.resources.wasmSymbols;
  }

  await fs.writeFile(
    bootConfigPath,
    `${bootPrefix}${JSON.stringify(config, null, 2)}${bootSuffix}`,
  );
  await fs.rm(symbolPath, { force: true });
  await normalizeAppBundlePermissions(appBundlePath);
}

async function normalizeAppBundlePermissions(appBundlePath) {
  async function visit(currentPath) {
    const entries = await fs.readdir(currentPath, { withFileTypes: true });

    await fs.chmod(currentPath, 0o755);

    for (const entry of entries) {
      if (entry.name.startsWith('.')) {
        continue;
      }

      const entryPath = path.join(currentPath, entry.name);

      if (entry.isDirectory()) {
        await visit(entryPath);
      } else if (entry.isFile()) {
        await fs.chmod(entryPath, 0o644);
      }
    }
  }

  await visit(appBundlePath);
}

const isDirectRun = process.argv[1] === fileURLToPath(import.meta.url);

if (isDirectRun) {
  const appBundlePath = process.argv[2];

  if (!appBundlePath) {
    throw new Error('Usage: node scripts/postprocess-appbundle.mjs <AppBundle path>');
  }

  await postProcessAppBundle(path.resolve(appBundlePath));
}
