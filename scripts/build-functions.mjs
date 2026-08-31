import { build } from 'esbuild';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const functionsRoot = path.join(projectRoot, 'functions');
await build({
  absWorkingDir: projectRoot,
  entryPoints: [path.join(functionsRoot, 'src', 'index.ts')],
  outfile: path.join(functionsRoot, 'lib', 'index.cjs'),
  bundle: true,
  platform: 'node',
  target: 'node22',
  format: 'cjs',
  packages: 'external',
  sourcemap: true,
  logLevel: 'info',
});

// Generate the backend specification during the build. Firebase CLI otherwise
// starts a temporary HTTP discovery server and gives it only ten seconds to
// import the Functions bundle. On slower Windows cold starts that discovery can
// time out, leaving Hosting rewrites pointed at a function the emulator never
// registered. A build-time manifest is the same specification produced by the
// Firebase Functions runtime, but it is available before the emulators start.
const manifestPath = path.join(functionsRoot, 'functions.yaml');
const functionsRuntime = path.join(
  functionsRoot,
  'node_modules',
  'firebase-functions',
  'lib',
  'bin',
  'firebase-functions.js'
);
const manifestResult = spawnSync(process.execPath, [functionsRuntime], {
  cwd: functionsRoot,
  env: {
    ...process.env,
    FUNCTIONS_MANIFEST_OUTPUT_PATH: manifestPath,
  },
  stdio: 'inherit',
});

if (manifestResult.error) throw manifestResult.error;
if (manifestResult.status !== 0) {
  throw new Error(`Firebase Functions manifest generation failed with exit code ${manifestResult.status ?? 'unknown'}`);
}

console.log(`[Functions Build] Generated ${manifestPath}`);
