import { build } from 'esbuild';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const entryPoints = [
  ['index', path.join(root, 'src', 'index.ts')],
  ['tokenizer', path.join(root, 'src', 'tokenizer.ts')],
  ['sanitizer', path.join(root, 'src', 'sanitizer.ts')],
  ['introspector', path.join(root, 'src', 'introspector.ts')],
];

await fs.mkdir(dist, { recursive: true });

await Promise.all(
  entryPoints.flatMap(([entryName, entryPoint]) => [
    build({
      banner: {
        js:
          'import __scriptdomBridgePath from "node:path";\n' +
          'import { fileURLToPath as __scriptdomBridgeFileURLToPath } from "node:url";\n' +
          'const __scriptdomBridgeModuleDirectory = __scriptdomBridgePath.dirname(__scriptdomBridgeFileURLToPath(import.meta.url));',
      },
      bundle: true,
      entryPoints: [entryPoint],
      external: ['node:fs', 'node:path', 'node:url'],
      format: 'esm',
      outfile: path.join(dist, `${entryName}.mjs`),
      platform: 'node',
      sourcemap: true,
      target: 'node22',
    }),
    build({
      banner: {
        js: 'const __scriptdomBridgeModuleDirectory = __dirname;',
      },
      bundle: true,
      entryPoints: [entryPoint],
      external: ['node:fs', 'node:path', 'node:url'],
      format: 'cjs',
      outfile: path.join(dist, `${entryName}.cjs`),
      platform: 'node',
      sourcemap: true,
      target: 'node22',
    }),
  ]),
);

await copyDeclarations(path.join(dist, 'types'), dist);

async function copyDeclarations(sourceDirectory, destinationDirectory) {
  const entries = await fs.readdir(sourceDirectory, { withFileTypes: true });

  await fs.mkdir(destinationDirectory, { recursive: true });

  await Promise.all(
    entries.map(async (entry) => {
      const sourcePath = path.join(sourceDirectory, entry.name);
      const destinationPath = path.join(destinationDirectory, entry.name);

      if (entry.isDirectory()) {
        await copyDeclarations(sourcePath, destinationPath);
        return;
      }

      if (entry.isFile() && entry.name.endsWith('.d.ts')) {
        await fs.copyFile(sourcePath, destinationPath);
      }
    }),
  );
}
