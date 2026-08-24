import test from 'node:test';
import assert from 'node:assert/strict';
import {
  applyServerAudioRegistry,
  getActiveAudioOverridesSummary,
  registerAudioFile,
  resetAllAudioOverrides,
} from '../src/utils/audioRegistry';

const clearLocal = async (): Promise<void> => undefined;

test('audio reset awaits successful server deletions and clears local overrides', async () => {
  applyServerAudioRegistry({ server_a: '/api/audio-file/server_a' });
  registerAudioFile('local_a', 'data:audio/mpeg;base64,AA==');
  const deleted: string[] = [];

  const result = await resetAllAudioOverrides({
    clearPersistedLocalOverrides: clearLocal,
    deleteServerOverride: async (key) => {
      deleted.push(key);
      return true;
    },
  });

  assert.deepEqual(deleted, ['server_a']);
  assert.equal(result.success, true);
  assert.deepEqual(result.failedServerKeys, []);
  assert.deepEqual(getActiveAudioOverridesSummary(), {
    serverOverrides: [], customOverrides: [], disabledKeys: [], totalCount: 0,
  });
});

test('audio reset reports the server key whose deletion failed', async () => {
  applyServerAudioRegistry({ server_ok: '/ok', server_failed: '/failed' });

  const result = await resetAllAudioOverrides({
    clearPersistedLocalOverrides: clearLocal,
    deleteServerOverride: async (key) => key !== 'server_failed',
  });

  assert.equal(result.success, false);
  assert.deepEqual(result.failedServerKeys, ['server_failed']);
});

test('audio reset waits for every server deletion before resolving', async () => {
  applyServerAudioRegistry({ first: '/first', second: '/second' });
  const resolvers = new Map<string, (success: boolean) => void>();
  let settled = false;

  const reset = resetAllAudioOverrides({
    clearPersistedLocalOverrides: clearLocal,
    deleteServerOverride: (key) => new Promise<boolean>((resolve) => resolvers.set(key, resolve)),
  }).then((result) => {
    settled = true;
    return result;
  });

  await new Promise<void>((resolve) => setImmediate(resolve));
  assert.equal(resolvers.size, 2);
  resolvers.get('first')?.(true);
  await new Promise<void>((resolve) => setImmediate(resolve));
  assert.equal(settled, false);
  resolvers.get('second')?.(true);
  assert.equal((await reset).success, true);
});

test('local-only audio reset does not require a server deletion', async () => {
  registerAudioFile('local_only', 'data:audio/mpeg;base64,AA==');
  let serverCalls = 0;

  const result = await resetAllAudioOverrides({
    clearPersistedLocalOverrides: clearLocal,
    deleteServerOverride: async () => {
      serverCalls += 1;
      return true;
    },
  });

  assert.equal(serverCalls, 0);
  assert.equal(result.success, true);
  assert.deepEqual(result.keys, ['local_only']);
});

test('audio reset reports persisted local cleanup failure', async () => {
  registerAudioFile('local_failure', 'data:audio/mpeg;base64,AA==');

  const result = await resetAllAudioOverrides({
    clearPersistedLocalOverrides: async () => {
      throw new Error('IndexedDB unavailable');
    },
  });

  assert.equal(result.success, false);
  assert.equal(result.localCleanupSucceeded, false);
  assert.deepEqual(result.failedServerKeys, []);
});
