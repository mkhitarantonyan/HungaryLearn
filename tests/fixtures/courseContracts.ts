import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { loadLesson } from '../../src/data/lessons/index';
import { validateActivity, validateExitCheckReferences, validateLessonQuestionIds } from '../../src/utils/activityUtils';
import { SLIDE_AUDIO_COUNTS, PRESENT_SLIDE_AUDIO, SLIDE_AUDIO_VERSIONS } from '../../src/data/slideAudioManifest';
import type { Lesson } from '../../src/types';

/** Test learner-visible wording, not the tags used for clickable pronunciation. */
export function visibleText(value: string): string {
  return value.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/gu, ' ').trim();
}
export function lessonText(lesson: Lesson): string {
  return lesson.slides.map(slide => visibleText([slide.note, slide.warn, slide.task, slide.body].filter(Boolean).join(' '))).join(' ');
}

/** Unlike the obsolete global MP3 count, this checks every current physical asset. */
export function assertAudioFilesNonempty(): void {
  const dir = new URL('../../public/audio/', import.meta.url);
  const names = readdirSync(dir).filter(name => name.endsWith('.mp3'));
  assert.ok(names.length > 0);
  for (const name of names) assert.ok(statSync(new URL(name, dir)).size > 0, `empty audio: ${name}`);
}

/** Each generated version must be derived from its actual MP3, with no stale or missing aliases. */
export function assertSlideAudioManifest(): void {
  const dir = new URL('../../public/audio/', import.meta.url);
  const counts: Record<number, number> = {};
  const present: Record<string, boolean> = {};
  const versions: Record<string, string> = {};
  for (const name of readdirSync(dir)) {
    const match = /^(\d+)\.(\d+)\.mp3$/.exec(name);
    if (!match) continue;
    const [, lesson, slide] = match;
    counts[Number(lesson)] = Math.max(counts[Number(lesson)] || 0, Number(slide));
    present[`${lesson}.${slide}`] = present[`l${lesson}_s${slide}`] = true;
    versions[`${lesson}.${slide}`] = createHash('sha256').update(readFileSync(new URL(name, dir))).digest('hex').slice(0, 12);
  }
  assert.deepEqual(SLIDE_AUDIO_COUNTS, counts);
  assert.deepEqual(PRESENT_SLIDE_AUDIO, present);
  assert.deepEqual(SLIDE_AUDIO_VERSIONS, versions);
}

/** Permanent contracts supersede one-time migration assertions about other lessons' source bytes.
 * Historical hashes and reviewed diffs remain in docs/test-suite-repair.
 * Published Listening MP3 hashes are still checked separately without any changes.
 */
export async function assertLessonContracts(from: number, to: number): Promise<void> {
  for (let number = from; number <= to; number++) {
    const lesson = await loadLesson(number);
    assert.ok(lesson, `L${number} exists`);
    assert.deepEqual([lesson.id, lesson.number, lesson.slidesCount, lesson.slides.length], [number, number, 11, 11]);
    assert.deepEqual(lesson.slides.map(slide => slide.id), Array.from({ length: 11 }, (_, i) => i + 1));
    assert.deepEqual(lesson.quiz?.map(question => question.id), Array.from({ length: 6 }, (_, i) => number * 100 + i + 1));
    const objectives = lesson.objectives?.map(objective => objective.id) || [];
    assert.ok(objectives.length > 0);
    assert.equal(new Set(objectives).size, objectives.length);
    const activities = lesson.slides.flatMap(slide => slide.activities || []);
    assert.ok(activities.length > 0);
    assert.equal(new Set(activities.map(a => a.id)).size, activities.length);
    assert.deepEqual(activities.flatMap(validateActivity), []);
    assert.deepEqual(validateLessonQuestionIds(activities), []);
    const exits = activities.filter(a => a.kind === 'exitCheck');
    assert.equal(exits.length, 1);
    assert.deepEqual(validateExitCheckReferences(exits[0], objectives, activities.map(a => a.id)), []);
    // L27 has a pre-existing directions objective without an ExitCheck row.
    // Preserve this gap: adding evidence here would change progress semantics.
    const uncovered = objectives.filter(id => !exits[0].checks.some(check => check.objectiveId === id));
    assert.deepEqual(uncovered, number === 27 ? ['l27_ask-directions'] : []);
  }
}
