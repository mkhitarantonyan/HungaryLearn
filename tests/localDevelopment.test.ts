import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');
const read = (relativePath: string) => readFileSync(path.join(root, relativePath), 'utf8');

test('dev:full starts the Windows local stack without production credentials or billing', () => {
  const packageJson = JSON.parse(read('package.json')) as { scripts: Record<string, string> };
  assert.equal(
    packageJson.scripts['dev:full'],
    'powershell -NoProfile -ExecutionPolicy Bypass -File scripts/start-local-dev.ps1'
  );
  assert.match(packageJson.scripts.dev, /--host 127\.0\.0\.1 --port 5173 --strictPort/);

  const script = read('scripts/start-local-dev.ps1');
  assert.match(script, /VITE_USE_FIREBASE_EMULATORS = 'true'/);
  assert.match(script, /localProjectId = 'demo-hungarylearn'/);
  assert.match(script, /VITE_FIREBASE_PROJECT_ID = \$localProjectId/);
  assert.match(script, /FIREBASE_AUTH_EMULATOR_HOST = '127\.0\.0\.1:9099'/);
  assert.match(script, /FIRESTORE_EMULATOR_HOST = '127\.0\.0\.1:8080'/);
  assert.match(script, /FIREBASE_STORAGE_EMULATOR_HOST = '127\.0\.0\.1:9199'/);
  assert.match(script, /LOCAL_DEV_API_ONLY = 'true'/);
  assert.match(script, /Remove-Item Env:GOOGLE_APPLICATION_CREDENTIALS/);
  assert.match(script, /auth,functions:api,firestore,hosting,storage/);
  assert.doesNotMatch(script, /firebase(?:\.cmd)?\s+deploy|LEMONSQUEEZY_(?:API_KEY|WEBHOOK_SECRET)/i);

  const buildScript = read('scripts/build-functions.mjs');
  assert.match(buildScript, /LOCAL_DEV_API_ONLY === 'true'/);
  assert.match(buildScript, /'local\.ts' : 'index\.ts'/);
  assert.doesNotMatch(read('functions/src/local.ts'), /billing|lemon/i);
});

test('Vite and Firebase use one fixed localhost port contract', () => {
  const vite = read('vite.config.ts');
  assert.match(vite, /host: '127\.0\.0\.1'/);
  assert.match(vite, /port: 5173/);
  assert.match(vite, /strictPort: true/);
  assert.match(vite, /target: 'http:\/\/127\.0\.0\.1:5000'/);

  const config = JSON.parse(read('firebase.json')) as {
    emulators: Record<string, { host?: string; port?: number } | boolean>;
  };
  const expectedPorts = {
    auth: 9099,
    functions: 5001,
    firestore: 8080,
    hosting: 5000,
    storage: 9199,
    ui: 4000,
  };
  for (const [name, port] of Object.entries(expectedPorts)) {
    const emulator = config.emulators[name] as { host?: string; port?: number };
    assert.equal(emulator.host, '127.0.0.1', `${name} host`);
    assert.equal(emulator.port, port, `${name} port`);
  }
});

test('the frontend Auth emulator is fixed and production deployment stays in production mode', () => {
  const firebaseClient = read('src/lib/firebase.ts');
  assert.match(firebaseClient, /VITE_USE_FIREBASE_EMULATORS === 'true'/);
  assert.match(firebaseClient, /connectAuthEmulator\(authInstance, 'http:\/\/127\.0\.0\.1:9099'/);
  assert.match(firebaseClient, /Vite development requires Firebase Emulator Suite/);

  const productionWorkflow = read('.github/workflows/firebase-hosting-merge.yml');
  assert.match(productionWorkflow, /VITE_USE_FIREBASE_EMULATORS: false/);
  assert.doesNotMatch(productionWorkflow, /start-local-dev|dev:full/);
});
