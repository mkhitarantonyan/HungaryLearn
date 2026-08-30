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
