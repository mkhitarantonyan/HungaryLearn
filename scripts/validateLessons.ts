import { LESSONS_META, loadLesson } from '../src/data/lessons/index.ts';
import {
  validateActivity,
  validateExitCheckReferences,
  validateLessonQuestionIds,
} from '../src/utils/activityUtils.ts';
import type { LessonActivity } from '../src/types.ts';
import fs from 'node:fs';
import path from 'node:path';

const errors: string[] = [];
const expectedPilotAssets: string[] = [];

async function validateLessons(): Promise<void> {
  const seenIds = new Set<number>();

  for (const meta of LESSONS_META) {
    if (seenIds.has(meta.id)) {
      errors.push(`Duplicate lesson id: ${meta.id}`);
    }
    seenIds.add(meta.id);

    const lesson = await loadLesson(meta.id);
    if (!lesson) {
      errors.push(`Lesson ${meta.id}: failed to load module`);
      continue;
    }

    if (lesson.slidesCount !== lesson.slides.length) {
      errors.push(
        `Lesson ${lesson.number}: slidesCount=${lesson.slidesCount}, actual=${lesson.slides.length}`
      );
    }

    const slideIds = new Set<number>();
    for (const slide of lesson.slides) {
      if (slideIds.has(slide.id)) {
        errors.push(`Lesson ${lesson.number}: duplicate slide id ${slide.id}`);
      }
      slideIds.add(slide.id);
    }

    const quiz = lesson.quiz ?? [];
    const quizIds = new Set<number>();
    for (const item of quiz) {
      if (quizIds.has(item.id)) {
        errors.push(`Lesson ${lesson.number}: duplicate quiz id ${item.id}`);
      }
      quizIds.add(item.id);
      if (item.question.trim().length === 0) {
        errors.push(`Lesson ${lesson.number}: quiz ${item.id} has an empty question`);
      }
      if (item.options.length === 0) {
        errors.push(`Lesson ${lesson.number}: quiz ${item.id} has no options`);
      }
      const normalizedOptions = item.options.map((option) => option.replace(/\s+/g, ' ').trim());
      normalizedOptions.forEach((option, index) => {
        if (option.length === 0) {
          errors.push(`Lesson ${lesson.number}: quiz ${item.id} option ${index} is empty`);
        }
      });
      if (new Set(normalizedOptions).size !== normalizedOptions.length) {
        errors.push(`Lesson ${lesson.number}: quiz ${item.id} has duplicate options`);
      }
      if (item.correctIndex < 0 || item.correctIndex >= item.options.length) {
        errors.push(`Lesson ${lesson.number}: quiz ${item.id} has invalid correctIndex`);
      }
    }

    const vocabIds = new Set<string>();
    for (const word of lesson.vocabulary ?? []) {
      if (vocabIds.has(word.id)) {
        errors.push(`Lesson ${lesson.number}: duplicate vocabulary id ${word.id}`);
      }
      vocabIds.add(word.id);
      if (word.relatedLessonId && !LESSONS_META.some((m) => m.number === word.relatedLessonId)) {
        errors.push(`Lesson ${lesson.number}: vocabulary ${word.id} references missing lesson ${word.relatedLessonId}`);
      }
    }

    // === Activity validation (pilot: lesson 15) ===
    const activities: LessonActivity[] = [];
    for (const slide of lesson.slides) {
      for (const activity of slide.activities ?? []) activities.push(activity);
    }

    const activityIds = activities.map((a) => a.id);
    const activityIdSet = new Set(activityIds);
    if (activityIds.length !== activityIdSet.size) {
      const dupes = new Set(activityIds.filter((id, i) => activityIds.indexOf(id) !== i));
      for (const d of dupes) errors.push(`Lesson ${lesson.number}: duplicate activity id ${d}`);
    }

    for (const problem of validateLessonQuestionIds(activities)) {
      errors.push(`Lesson ${lesson.number}: ${problem}`);
    }

    const objectiveIds = (lesson.objectives ?? []).map((o) => o.id);

    for (const activity of activities) {
      for (const problem of validateActivity(activity)) {
        errors.push(`Lesson ${lesson.number}: ${problem}`);
      }
      if (activity.kind === 'exitCheck') {
        for (const problem of validateExitCheckReferences(activity, objectiveIds, activityIds)) {
          errors.push(`Lesson ${lesson.number}: ${problem}`);
        }
      }
      if (activity.kind === 'listening') {
        if (activity.audioStatus === 'published') {
          const candidatePaths = [
            path.join(process.cwd(), 'public', 'audio', `${activity.assetId}.mp3`),
            path.join(process.cwd(), 'data', 'audio', `${activity.assetId}.mp3`),
          ];
          if (!candidatePaths.some((p) => fs.existsSync(p))) {
            errors.push(
              `Lesson ${lesson.number}: listening asset ${activity.assetId} is published but file missing`
            );
          }
        } else {
          expectedPilotAssets.push(`Lesson ${lesson.number}: ${activity.assetId}`);
        }
      }
    }
  }

  if (errors.length > 0) {
    console.error('Lesson validation failed:');
    for (const err of errors) console.error(`  - ${err}`);
    process.exit(1);
  }

  for (const asset of expectedPilotAssets) {
    console.log(`  [expected pilot asset] ${asset} — missing MP3, not an error`);
  }

  console.log(`Validated ${LESSONS_META.length} lessons — OK`);
}

void validateLessons();
