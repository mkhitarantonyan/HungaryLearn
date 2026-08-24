import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  buildListeningAssets,
  collectListeningCoverage,
  collectListeningPlan,
  INTENTIONAL_SHARED_LISTENING_ASSETS,
  SAFE_LISTENING_ASSET_ID,
  validateListeningFiles,
  validateListeningPlan,
  type ListeningPlanEntry,
} from '../scripts/listeningPlan.ts';
import {
  describeExitCheckStatus,
  listeningEvidence,
  shouldShowTranscript,
} from '../src/utils/activityUtils.ts';
import type { ActivityEvidence, ListeningTaskData } from '../src/types.ts';

const syntheticListening = (audioStatus: ListeningTaskData['audioStatus']): ListeningTaskData => ({
  kind: 'listening',
  id: 'synthetic-listening',
  title: 'Synthetic listening',
  assetId: 'synthetic_listening',
  audioStatus,
  transcript: 'Ez egy rövid szöveg.',
  passCount: 2,
  questions: [],
});

test('A: every Listening activity exposes the complete publication contract', async () => {
  const entries = await collectListeningPlan();
  assert.equal(entries.length, 28);
  for (const entry of entries) {
    assert.ok(entry.activityId);
    assert.ok(entry.assetId);
    assert.ok(entry.title);
    assert.ok(entry.transcript);
    assert.ok(entry.questionCount > 0);
    assert.ok(entry.passCount > 0);
    assert.ok(entry.audioStatus === 'missing' || entry.audioStatus === 'published');
    assert.equal(entry.filename, `${entry.assetId}.mp3`);
  }
  assert.deepEqual(validateListeningPlan(entries), []);
});

test('B: every Listening assetId is filename-safe and remains inside the canonical directory', async () => {
  const entries = await collectListeningPlan();
  assert.equal(entries.every((entry) => SAFE_LISTENING_ASSET_ID.test(entry.assetId)), true);

  const unsafe: ListeningPlanEntry = {
    ...entries[0],
    activityId: 'unsafe-activity',
    assetId: '../outside',
    filename: '../outside.mp3',
  };
  assert.match(validateListeningPlan([unsafe]).join('\n'), /unsafe assetId/);
});

test('C: accidental duplicate assetId is rejected', async () => {
  const entries = await collectListeningPlan();
  const first = entries[0];
  const duplicate: ListeningPlanEntry = {
    ...first,
    activityId: 'accidental-duplicate-activity',
  };
  assert.match(validateListeningPlan([first, duplicate]).join('\n'), /duplicate assetId is not documented/);
});

test('D: the only intentional shared asset is documented with both L5 activities', async () => {
  const entries = await collectListeningPlan();
  assert.deepEqual(INTENTIONAL_SHARED_LISTENING_ASSETS, [
    {
      assetId: 'l5_listening_time',
      activityIds: ['l5-listening-number-dictation', 'l5-listening-time-schedule'],
      reason:
        'One ordered recording intentionally serves the number-dictation block and the following date/schedule comprehension block.',
    },
  ]);
  assert.deepEqual(validateListeningPlan(entries), []);
  assert.equal(buildListeningAssets(entries).length, 27);
});

test('E: published status without a physical MP3 fails validation', async () => {
  const entries = await collectListeningPlan();
  const published = entries.map((entry, index) =>
    index === 0 ? { ...entry, audioStatus: 'published' as const } : entry
  );
  const result = validateListeningFiles(published, 'C:/virtual/audio', () => false);
  assert.match(result.errors.join('\n'), /published asset is missing its MP3/);
});

test('F: missing status without a physical MP3 is allowed and reported MISSING', async () => {
  const entries = (await collectListeningPlan()).map((entry) => ({
    ...entry,
    audioStatus: 'missing' as const,
  }));
  const result = validateListeningFiles(entries, 'C:/virtual/audio', () => false);
  assert.deepEqual(result.errors, []);
  assert.deepEqual(result.warnings, []);
  assert.equal(result.checks[0].status, 'MISSING');
});

test('G: missing status with an existing MP3 is visibly reported', async () => {
  const entries = (await collectListeningPlan()).map((entry) => ({
    ...entry,
    audioStatus: 'missing' as const,
  }));
  const targetFilename = entries[0].filename;
  const result = validateListeningFiles(
    entries,
    'C:/virtual/audio',
    (filePath) => filePath.endsWith(targetFilename)
  );
  assert.deepEqual(result.errors, []);
  assert.match(result.warnings.join('\n'), /MP3 EXISTS BUT STATUS IS MISSING/);
  assert.equal(result.checks[0].status, 'MP3 EXISTS BUT STATUS IS MISSING');
});

test('H/I: transcript remains hidden before submission and available afterwards', () => {
  assert.equal(shouldShowTranscript(false), false);
  assert.equal(shouldShowTranscript(true), true);

  const source = readFileSync(
    new URL('../src/components/activities/ListeningTask.tsx', import.meta.url),
    'utf8'
  );
  assert.match(source, /setSubmitted\(true\)/);
  assert.match(source, /\{submitted && \(/);
});

test('J: missing audio never produces DIRECT evidence', () => {
  const result = listeningEvidence(syntheticListening('missing'), 2, 2, true);
  assert.equal(result.evidenceMode, 'none');
  assert.equal(result.passed, false);
});

test('K: browser audio load failure prevents false DIRECT evidence', () => {
  const result = listeningEvidence(syntheticListening('published'), 2, 2, false);
  assert.equal(result.evidenceMode, 'none');
  assert.equal(result.passed, false);

  const source = readFileSync(
    new URL('../src/components/activities/ListeningTask.tsx', import.meta.url),
    'utf8'
  );
  assert.match(source, /audioReady && !audioError/);
  assert.match(source, /onError=\{handleAudioError\}/);
  assert.match(source, /onResetEvidence\?\.\(data\.id\)/);
});

test('L: failed comprehension remains DIRECT stimulus evidence but objective is not met', () => {
  const result = listeningEvidence(syntheticListening('published'), 1, 2, true);
  assert.equal(result.evidenceMode, 'direct');
  assert.equal(result.passed, false);
});

test('M: passed comprehension with playable published audio resolves DIRECT met', () => {
  const listening = syntheticListening('published');
  const result = listeningEvidence(listening, 2, 2, true);
  const evidence: ActivityEvidence = {
    activityId: listening.id,
    attempted: true,
    completed: true,
    ...result,
  };
  assert.equal(result.evidenceMode, 'direct');
  assert.equal(result.passed, true);
  assert.equal(
    describeExitCheckStatus(
      { objectiveId: 'objective', activityId: listening.id, evidenceKind: 'listening' },
      evidence,
      { [listening.id]: evidence }
    ).kind,
    'direct-met'
  );
});

test('all 28 lessons are covered and only L3, L9 and L11 intentionally omit Listening', async () => {
  const coverage = await collectListeningCoverage();
  assert.equal(coverage.length, 28);
  assert.deepEqual(
    coverage.filter((entry) => !entry.hasListening).map((entry) => entry.lesson),
    [3, 9, 11]
  );
  assert.equal(coverage.filter((entry) => !entry.hasListening).every((entry) => entry.absenceAssessment?.startsWith('Intentional:')), true);
});

test('generated JSON stays byte-semantically synchronized with lesson source', async () => {
  const generated = JSON.parse(
    readFileSync(new URL('../docs/listening-audio-plan.json', import.meta.url), 'utf8')
  ) as {
    activities: unknown;
    assets: unknown;
    coverage: unknown;
    summary: { listeningActivities: number; uniqueAssets: number };
  };
  const activities = await collectListeningPlan();
  const coverage = await collectListeningCoverage();
  assert.deepEqual(generated.activities, activities);
  assert.deepEqual(generated.assets, buildListeningAssets(activities));
  assert.deepEqual(generated.coverage, coverage);
  assert.equal(generated.summary.listeningActivities, 28);
  assert.equal(generated.summary.uniqueAssets, 27);
});

test('ListeningTask remains mobile-safe, accessible, repeatable, and free of narration/TTS fallback', () => {
  const source = readFileSync(
    new URL('../src/components/activities/ListeningTask.tsx', import.meta.url),
    'utf8'
  );
  assert.match(source, /<audio\s+controls/);
  assert.match(source, /block w-full max-w-full/);
  assert.match(source, /Повтор разрешён/);
  assert.match(source, /role="alert"/);
  assert.match(source, /Аудиозапись: \$\{data\.title/);
  assert.doesNotMatch(source, /speechSynthesis|SpeechSynthesisUtterance|slideNarrat|playRecordedAudio/);
});
