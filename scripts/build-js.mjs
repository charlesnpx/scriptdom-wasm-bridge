import { build } from 'esbuild';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const entryPoint = path.join(root, 'src', 'index.ts');
const dist = path.join(root, 'dist');

await fs.mkdir(dist, { recursive: true });

await Promise.all([
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
    outfile: path.join(dist, 'index.mjs'),
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
    outfile: path.join(dist, 'index.cjs'),
    platform: 'node',
    sourcemap: true,
    target: 'node22',
  }),
]);

await fs.copyFile(path.join(dist, 'types', 'index.d.ts'), path.join(dist, 'index.d.ts'));
