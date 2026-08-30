import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
await build({
  absWorkingDir: projectRoot,
  entryPoints: [path.join(projectRoot, 'functions', 'src', 'index.ts')],
  outfile: path.join(projectRoot, 'functions', 'lib', 'index.cjs'),
  bundle: true,
  platform: 'node',
  target: 'node22',
  format: 'cjs',
  packages: 'external',
  sourcemap: true,
  logLevel: 'info',
});
