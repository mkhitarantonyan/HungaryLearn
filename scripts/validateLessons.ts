import { LESSONS_META, loadLesson } from '../src/data/lessons/index.ts';

const errors: string[] = [];

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
  }

  if (errors.length > 0) {
    console.error('Lesson validation failed:');
    for (const err of errors) console.error(`  - ${err}`);
    process.exit(1);
  }

  console.log(`Validated ${LESSONS_META.length} lessons — OK`);
}

void validateLessons();
