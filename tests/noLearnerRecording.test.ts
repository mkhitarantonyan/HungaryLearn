import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { LESSONS_META, loadLesson } from '../src/data/lessons/index.ts';

const root = fileURLToPath(new URL('..', import.meta.url));
const srcRoot = join(root, 'src');

function filesBelow(directory: string): string[] {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? filesBelow(path) : [path];
  });
}

test('all L1–L28 have zero learner Recording activities or required evidence', async () => {
  let rolePlayCount = 0;
  let writingCount = 0;
  let listeningCount = 0;

  for (const meta of LESSONS_META) {
    const lesson = await loadLesson(meta.id);
    assert.ok(lesson, `missing L${meta.id}`);
    assert.equal(lesson.id, meta.id);
    assert.equal(lesson.number, meta.id);
    assert.ok((lesson.objectives ?? []).every((objective) => objective.id.startsWith(`l${meta.id}_`)));
    assert.deepEqual(
      lesson.quiz?.map((question) => question.id),
      Array.from({ length: lesson.quiz?.length ?? 0 }, (_, index) => meta.id * 100 + index + 1),
      `L${meta.id} quiz IDs changed`,
    );

    const activities = lesson.slides.flatMap((slide) => slide.activities ?? []);
    assert.equal(activities.some((activity) => (activity as { kind: string }).kind === 'recording'), false, `L${meta.id}`);
    assert.equal(JSON.stringify(activities).includes('recordingCompleted'), false, `L${meta.id}`);

    rolePlayCount += activities.filter((activity) => activity.kind === 'rolePlay').length;
    writingCount += activities.filter((activity) => activity.kind === 'writing').length;
    listeningCount += activities.filter((activity) => activity.kind === 'listening').length;

    const activityIds = new Set(activities.map((activity) => activity.id));
    for (const exit of activities.filter((activity) => activity.kind === 'exitCheck')) {
      for (const check of exit.checks) {
        assert.ok(activityIds.has(check.activityId), `L${meta.id} missing ${check.activityId}`);
        for (const component of check.evidenceComponents ?? []) {
          assert.ok(activityIds.has(component.activityId), `L${meta.id} missing ${component.activityId}`);
        }
      }
      assert.doesNotMatch(JSON.stringify(exit), /recordingCompleted|"kind":"recording"/);
    }
  }

  assert.ok(rolePlayCount > 0, 'RolePlay must remain available');
  assert.ok(writingCount > 0, 'Writing must remain available');
  assert.ok(listeningCount > 0, 'Listening must remain available');
});

test('learner recorder runtime is deleted and microphone APIs are admin-only', () => {
  assert.equal(existsSync(join(srcRoot, 'components', 'AudioRecorder.tsx')), false);
  assert.equal(existsSync(join(srcRoot, 'components', 'activities', 'RecordingTask.tsx')), false);

  const sourceFiles = filesBelow(srcRoot).filter((path) => ['.ts', '.tsx'].includes(extname(path)));
  const adminRecorderAllowlist = new Set([
    join(srcRoot, 'components', 'EditWordModal.tsx'),
    join(srcRoot, 'components', 'SlideAudioModal.tsx'),
  ]);

  for (const path of sourceFiles) {
    const source = readFileSync(path, 'utf8');
    assert.doesNotMatch(source, /AudioRecorder|RecordingTaskData|recordingCompleted|kind:\s*['"]recording['"]|responseMode:\s*['"]recorded['"]/, path);
    if (!adminRecorderAllowlist.has(path)) {
      assert.doesNotMatch(source, /MediaRecorder|getUserMedia/, path);
    }
  }

  for (const path of adminRecorderAllowlist) {
    assert.match(readFileSync(path, 'utf8'), /MediaRecorder|getUserMedia/);
  }
});

test('Listening, word audio, narration, and physical MP3 playback assets remain present', () => {
  const listeningSource = readFileSync(join(srcRoot, 'components', 'activities', 'ListeningTask.tsx'), 'utf8');
  const wordAudioSource = readFileSync(join(srcRoot, 'data', 'wordAudioMap.ts'), 'utf8');
  const narrationSource = readFileSync(join(srcRoot, 'hooks', 'useLessonNarration.ts'), 'utf8');
  assert.match(listeningSource, /<audio/);
  assert.match(wordAudioSource, /\.mp3/);
  assert.match(narrationSource, /playRecordedSequence|stopRecordedAudio/);

  const mp3Files = filesBelow(join(root, 'public', 'audio')).filter((path) => extname(path).toLowerCase() === '.mp3');
  assert.ok(mp3Files.length >= 1123, `expected at least 1123 MP3 files, found ${mp3Files.length}`);
  assert.ok(mp3Files.every((path) => statSync(path).size > 0));
});
