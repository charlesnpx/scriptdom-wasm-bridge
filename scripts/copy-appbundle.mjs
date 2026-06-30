import fs from 'node:fs/promises';
import path from 'node:path';

import { postProcessAppBundle } from './postprocess-appbundle.mjs';

const root = path.resolve(import.meta.dirname, '..');
const source = path.join(
  root,
  'c-sharp',
  'bin',
  'Release',
  'net10.0',
  'browser-wasm',
  'AppBundle',
);
const destination = path.join(root, 'vendor', 'AppBundle');

await fs.access(path.join(source, '_framework', 'dotnet.js'));
await fs.rm(destination, { recursive: true, force: true });
await fs.mkdir(path.dirname(destination), { recursive: true });
await fs.cp(source, destination, { recursive: true });
await postProcessAppBundle(destination);

console.log(`Copied ${source} to ${destination}`);
