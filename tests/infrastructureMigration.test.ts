import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { validateAudioDataUrl } from '../functions/src/audio/validation.ts';

const root = path.resolve('.');
test('Firebase deployment configuration preserves API rewrite order and strict Storage rules', () => {
  const config = JSON.parse(readFileSync(path.join(root, 'firebase.json'), 'utf8'));
  assert.equal(config.hosting.public, 'dist');
  assert.equal(config.hosting.rewrites[0].source, '/api/**');
  assert.equal(config.hosting.rewrites[1].source, '**');
  assert.match(readFileSync(path.join(root, 'storage.rules'), 'utf8'), /allow read, write: if false/);
});
test('local site build provides a discoverable API function before Hosting starts', () => {
  const manifestPath = path.join(root, 'functions', 'functions.yaml');
  assert.equal(existsSync(manifestPath), true, 'functions/functions.yaml');
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  assert.equal(manifest.specVersion, 'v1alpha1');
  assert.equal(manifest.endpoints?.api?.entryPoint, 'api');
  assert.deepEqual(manifest.endpoints?.api?.region, ['europe-west1']);

  const buildScript = readFileSync(path.join(root, 'scripts', 'build-functions.mjs'), 'utf8');
  assert.match(buildScript, /FUNCTIONS_MANIFEST_OUTPUT_PATH/);
  const siteScript = readFileSync(path.join(root, 'scripts', 'start-local-site.ps1'), 'utf8');
  assert.match(siteScript, /emulators:start --only functions,hosting/);
  assert.match(siteScript, /FUNCTIONS_DISCOVERY_TIMEOUT/);
});
test('private audio validation keeps MIME and size protections', () => {
  const dataUrl = `data:audio/mpeg;base64,${Buffer.from('ID3').toString('base64')}`;
  assert.equal(validateAudioDataUrl(dataUrl).extension, '.mp3');
  assert.throws(() => validateAudioDataUrl(`data:text/plain;base64,${Buffer.from('no').toString('base64')}`), /MP3/);
});
test('Firebase profile bootstrap creates a server-owned default unpaid entitlement', () => {
  const source = readFileSync(path.join(root, 'functions', 'src', 'firestore', 'repositories.ts'), 'utf8');
  assert.match(source, /transaction\.create\(entitlementRef/);
  assert.match(source, /subscriptionStatus: 'unpaid'/);
  assert.match(source, /isPrivileged: false/);
  assert.match(source, /provider: null/);
  assert.match(source, /accessUntil: null/);
});
test('Firebase and Lemon production files exist', () => {
  for (const name of ['firestore.rules', 'storage.rules', 'firebase.json', 'functions/src/index.ts']) assert.equal(existsSync(path.join(root, name)), true, name);
});
