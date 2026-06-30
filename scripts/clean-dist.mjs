import fs from 'node:fs/promises';
import path from 'node:path';

await fs.rm(path.resolve(import.meta.dirname, '../dist'), {
  force: true,
  recursive: true,
});
