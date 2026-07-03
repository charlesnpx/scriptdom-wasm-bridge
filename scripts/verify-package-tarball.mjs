import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const root = path.resolve(import.meta.dirname, '..');
const args = parseArgs(process.argv.slice(2));

if (!args.packJson) {
  throw new Error('Usage: node scripts/verify-package-tarball.mjs --pack-json <path> [--tarball <path>]');
}

const dryRunFiles = await readPackJson(args.packJson);
verifyFileList(dryRunFiles, 'dry-run packlist');

if (args.tarball) {
  const tarballFiles = await readTarballFiles(args.tarball);
  verifyFileList(tarballFiles, 'tarball');

  const dryRunSet = new Set(dryRunFiles);
  const tarballSet = new Set(tarballFiles);
  const missing = dryRunFiles.filter((file) => !tarballSet.has(file));
  const extra = tarballFiles.filter((file) => !dryRunSet.has(file));

  if (missing.length > 0 || extra.length > 0) {
    throw new Error(
      `Tarball file list does not match dry-run packlist. Missing: ${missing.join(', ')} Extra: ${extra.join(', ')}`,
    );
  }

  const hashes = await hashTarballFiles(args.tarball, tarballFiles);
  if (hashes.size !== tarballFiles.length) {
    throw new Error('Tarball hash verification did not cover every packed file');
  }
}

function parseArgs(rawArgs) {
  const parsed = {};

  for (let index = 0; index < rawArgs.length; index += 1) {
    const arg = rawArgs[index];

    if (arg === '--pack-json') {
      parsed.packJson = rawArgs[index + 1];
      index += 1;
      continue;
    }

    if (arg === '--tarball') {
      parsed.tarball = rawArgs[index + 1];
      index += 1;
      continue;
    }

    throw new Error(`Unknown argument ${arg}`);
  }

  return parsed;
}

async function readPackJson(packJsonPath) {
  const packJson = JSON.parse(await fs.readFile(packJsonPath, 'utf8'));
  const [entry] = packJson;

  if (!entry || !Array.isArray(entry.files)) {
    throw new Error('Unexpected npm pack --json output');
  }

  return entry.files.map((file) => normalizePackagePath(file.path)).sort();
}

async function readTarballFiles(tarballPath) {
  const { stdout } = await execFileAsync('tar', ['-tf', tarballPath], {
    cwd: root,
    maxBuffer: 16 * 1024 * 1024,
  });

  return stdout
    .trim()
    .split('\n')
    .filter(Boolean)
    .map((file) => normalizePackagePath(file))
    .sort();
}

async function hashTarballFiles(tarballPath, files) {
  const hashes = new Map();

  for (const file of files) {
    const { stdout } = await execFileAsync('tar', ['-xOf', tarballPath, `package/${file}`], {
      cwd: root,
      encoding: 'buffer',
      maxBuffer: 64 * 1024 * 1024,
    });
    hashes.set(file, createHash('sha256').update(stdout).digest('hex'));
  }

  return hashes;
}

function normalizePackagePath(filePath) {
  return filePath.replace(/^package\//, '').replaceAll('\\', '/');
}

function verifyFileList(files, context) {
  if (files.length === 0) {
    throw new Error(`${context} is empty`);
  }

  for (const file of files) {
    if (file.startsWith('/') || file.includes('..')) {
      throw new Error(`${context} contains unsafe path ${file}`);
    }

    if (file.split('/').some((segment) => segment.startsWith('.'))) {
      throw new Error(`${context} contains hidden path ${file}`);
    }

    if (isDeniedPackagePath(file)) {
      throw new Error(`${context} contains denied path ${file}`);
    }
  }
}

function isDeniedPackagePath(file) {
  return [
    /^test\//,
    /^c-sharp\/.*\/bin\//,
    /^c-sharp\/.*\/obj\//,
    /\/bin\//,
    /\/obj\//,
    /tmp-/,
    /fixture/i,
    /malformed/i,
    /forced-failure/i,
    /discovery/i,
    /\.stamp$/,
    /\.symbols$/,
  ].some((pattern) => pattern.test(file));
}
