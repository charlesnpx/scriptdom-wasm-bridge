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

await removeNonHiddenPath(path.join(root, 'vendor', 'AppBundle'));

for (const bundle of bundles) {
  await fs.access(path.join(bundle.source, '_framework', 'dotnet.js'));
  await assertSafeTree(bundle.source);
  await assertSafeTree(bundle.destination, { missingOk: true });
  await clearNonHiddenEntries(bundle.destination);
  await fs.mkdir(path.dirname(bundle.destination), { recursive: true });
  await copyDirectory(bundle.source, bundle.destination);
  await postProcessAppBundle(bundle.destination);

  console.log(`Copied ${bundle.name} ${bundle.source} to ${bundle.destination}`);
}

async function copyDirectory(sourceDirectory, destinationDirectory) {
  await fs.mkdir(destinationDirectory, { recursive: true });

  for (const entry of await fs.readdir(sourceDirectory, { withFileTypes: true })) {
    if (isHiddenSegment(entry.name)) {
      continue;
    }

    const sourcePath = path.join(sourceDirectory, entry.name);
    const destinationPath = path.join(destinationDirectory, entry.name);
    const stat = await assertSafePath(sourcePath);

    if (stat.isDirectory()) {
      await copyDirectory(sourcePath, destinationPath);
      continue;
    }

    await fs.copyFile(sourcePath, destinationPath);
  }
}

async function clearNonHiddenEntries(directory) {
  let entries;

  try {
    entries = await fs.readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error?.code === 'ENOENT') {
      return;
    }

    throw error;
  }

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (isHiddenSegment(entry.name)) {
      continue;
    }

    const stat = await assertSafePath(entryPath);

    if (stat.isDirectory()) {
      await clearNonHiddenEntries(entryPath);
      await removeDirectoryIfEmpty(entryPath);
      continue;
    }

    await fs.rm(entryPath);
  }
}

async function removeNonHiddenPath(targetPath) {
  let stat;

  try {
    stat = await assertSafePath(targetPath);
  } catch (error) {
    if (error?.code === 'ENOENT') {
      return;
    }

    throw error;
  }

  if (!stat.isDirectory()) {
    if (hasHiddenPathSegment(path.relative(root, targetPath))) {
      return;
    }

    await fs.rm(targetPath);
    return;
  }

  await clearNonHiddenEntries(targetPath);
  await removeDirectoryIfEmpty(targetPath);
}

async function removeDirectoryIfEmpty(directory) {
  const remainingEntries = await fs.readdir(directory);

  if (remainingEntries.length === 0) {
    await fs.rmdir(directory);
  }
}

async function assertSafeTree(directory, options = {}) {
  let entries;

  try {
    entries = await fs.readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (options.missingOk && error?.code === 'ENOENT') {
      return;
    }

    throw error;
  }

  await assertSafePath(directory);

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    const stat = await assertSafePath(entryPath);

    if (stat.isDirectory()) {
      await assertSafeTree(entryPath);
    }
  }
}

async function assertSafePath(filePath) {
  const stat = await fs.lstat(filePath);

  if (stat.isSymbolicLink()) {
    throw new Error(`Refusing to copy AppBundle with symlink: ${filePath}`);
  }

  if (stat.isFile()) {
    if (stat.nlink > 1) {
      throw new Error(`Refusing to copy AppBundle with hardlinked file: ${filePath}`);
    }

    return stat;
  }

  if (stat.isDirectory()) {
    return stat;
  }

  throw new Error(`Refusing to copy AppBundle with special file: ${filePath}`);
}

function isHiddenSegment(segment) {
  return segment.startsWith('.');
}

function hasHiddenPathSegment(relativePath) {
  return relativePath.split(path.sep).some(isHiddenSegment);
}
