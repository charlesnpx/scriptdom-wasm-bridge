import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const root = path.resolve(import.meta.dirname, '..');
const defaultAllowlistPath = path.join(root, 'package-file-allowlist.v1.json');
const args = parseArgs(process.argv.slice(2));

if (!args.packJson || (args.writeAllowlist && !args.tarball)) {
  throw new Error(
    'Usage: node scripts/verify-package-tarball.mjs --pack-json <path> [--tarball <path>] [--allowlist <path>] [--write-allowlist]',
  );
}

const dryRunFiles = await readPackJson(args.packJson);
verifyFileList(dryRunFiles, 'dry-run packlist');
const allowlistPath = args.allowlist ?? defaultAllowlistPath;
const allowlist = args.writeAllowlist ? undefined : await readAllowlist(allowlistPath);
if (allowlist) {
  verifyExactFileList(dryRunFiles, [...allowlist.keys()], 'dry-run packlist');
}

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

  if (args.writeAllowlist) {
    await writeAllowlist(allowlistPath, hashes);
  } else if (allowlist) {
    verifyHashes(hashes, allowlist);
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

    if (arg === '--allowlist') {
      parsed.allowlist = rawArgs[index + 1];
      index += 1;
      continue;
    }

    if (arg === '--write-allowlist') {
      parsed.writeAllowlist = true;
      continue;
    }

    throw new Error(`Unknown argument ${arg}`);
  }

  return parsed;
}

async function readAllowlist(allowlistPath) {
  const allowlistJson = JSON.parse(await fs.readFile(allowlistPath, 'utf8'));

  if (!Array.isArray(allowlistJson.files)) {
    throw new Error('Unexpected package file allowlist shape');
  }

  const entries = allowlistJson.files.map((entry) => {
    if (
      !entry ||
      typeof entry !== 'object' ||
      typeof entry.path !== 'string' ||
      typeof entry.sha256 !== 'string'
    ) {
      throw new Error('Unexpected package file allowlist entry');
    }

    return [normalizePackagePath(entry.path), entry.sha256];
  });

  return new Map(entries.sort(([left], [right]) => left.localeCompare(right, 'en-US')));
}

async function writeAllowlist(allowlistPath, hashes) {
  const files = [...hashes.entries()]
    .sort(([left], [right]) => left.localeCompare(right, 'en-US'))
    .map(([file, sha256]) => ({ path: file, sha256 }));

  await fs.writeFile(
    allowlistPath,
    `${JSON.stringify(
      {
        version: 1,
        files,
      },
      null,
      2,
    )}\n`,
  );
}

async function readPackJson(packJsonPath) {
  const packJsonSource =
    packJsonPath === '-'
      ? await new Promise((resolve, reject) => {
          let source = '';
          process.stdin.setEncoding('utf8');
          process.stdin.on('data', (chunk) => {
            source += chunk;
          });
          process.stdin.on('end', () => resolve(source));
          process.stdin.on('error', reject);
        })
      : await fs.readFile(packJsonPath, 'utf8');
  const packJson = JSON.parse(packJsonSource);
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

function verifyExactFileList(actualFiles, expectedFiles, context) {
  const actualSet = new Set(actualFiles);
  const expectedSet = new Set(expectedFiles);
  const missing = expectedFiles.filter((file) => !actualSet.has(file));
  const extra = actualFiles.filter((file) => !expectedSet.has(file));

  if (missing.length > 0 || extra.length > 0) {
    throw new Error(
      `${context} does not match the package-file allowlist. Missing: ${missing.join(', ')} Extra: ${extra.join(', ')}`,
    );
  }
}

function verifyHashes(actualHashes, expectedHashes) {
  for (const [file, expectedHash] of expectedHashes) {
    if (actualHashes.get(file) !== expectedHash) {
      throw new Error(`Tarball hash mismatch for ${file}`);
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
