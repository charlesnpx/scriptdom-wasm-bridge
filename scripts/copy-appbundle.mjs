import fs from 'node:fs/promises';
import path from 'node:path';

import { postProcessAppBundle } from './postprocess-appbundle.mjs';

const root = path.resolve(import.meta.dirname, '..');
const bundles = [
  {
    name: 'tokenizer',
    source: path.join(
      root,
      'c-sharp',
      'tokenizer',
      'bin',
      'Release',
      'net10.0',
      'browser-wasm',
      'AppBundle',
    ),
    destination: path.join(root, 'vendor', 'scriptdom-tokenizer-wasm', 'AppBundle'),
  },
  {
    name: 'introspector',
    source: path.join(
      root,
      'c-sharp',
      'introspector',
      'bin',
      'Release',
      'net10.0',
      'browser-wasm',
      'AppBundle',
    ),
    destination: path.join(root, 'vendor', 'scriptdom-introspector-wasm', 'AppBundle'),
  },
];

await fs.rm(path.join(root, 'vendor', 'AppBundle'), { recursive: true, force: true });

for (const bundle of bundles) {
  await fs.access(path.join(bundle.source, '_framework', 'dotnet.js'));
  await fs.rm(bundle.destination, { recursive: true, force: true });
  await fs.mkdir(path.dirname(bundle.destination), { recursive: true });
  await fs.cp(bundle.source, bundle.destination, { recursive: true });
  await postProcessAppBundle(bundle.destination);

  console.log(`Copied ${bundle.name} ${bundle.source} to ${bundle.destination}`);
}
