import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
const out = resolve('node_modules/.cache/check-content.mjs');
await build({ entryPoints: ['scripts/check-content.ts'], bundle: true, format: 'esm', platform: 'node', outfile: out, logLevel: 'error' });
await import(pathToFileURL(out).href);
