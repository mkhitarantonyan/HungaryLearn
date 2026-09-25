import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_1 } from '../src/data/lessons/lesson1';
import { LESSON_2 } from '../src/data/lessons/lesson2';
import enTranslations from '../src/i18n/lessonTranslations.en.json';
import esTranslations from '../src/i18n/lessonTranslations.es.json';
import { getAllVocabularyCards } from '../src/utils/spacedRepetition';
import { getLessonQuiz, getLessonTranslations, getLessonVocabulary } from '../src/utils/lessonQuizAndVocab';
import type { Lesson } from '../src/types';

type TranslationTable = Record<string, string>;

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const checkOnly = process.argv.includes('--check');
const sourceValues: unknown[] = [LESSONS_META, LESSON_1, LESSON_2, getAllVocabularyCards()];

for (let number = 1; number <= 28; number += 1) {
  const shell = {
    id: number,
    number,
    level: 'A0',
    title: '',
    subtitle: '',
    description: '',
    slidesCount: 0,
    slides: [],
  } as Lesson;
  sourceValues.push(
    getLessonVocabulary(shell, 'ru'),
    getLessonQuiz(shell, 'ru'),
    getLessonTranslations(shell, 'ru'),
  );
}

const publicKeys = new Set<string>();
const collect = (value: unknown): void => {
  if (typeof value === 'string') {
    for (const part of value.split(/(<[^>]+>)/gu)) {
      if (!part.startsWith('<')) publicKeys.add(part.trim());
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach(collect);
    return;
  }
  if (value && typeof value === 'object') Object.values(value).forEach(collect);
};
sourceValues.forEach(collect);

const selectPublic = (table: TranslationTable): TranslationTable => Object.fromEntries(
  Object.entries(table).filter(([source]) => publicKeys.has(source)),
);

const outputs = [
  ['src/i18n/lessonTranslations.public.en.json', selectPublic(enTranslations)],
  ['src/i18n/lessonTranslations.public.es.json', selectPublic(esTranslations)],
] as const;

for (const [relativePath, table] of outputs) {
  const path = `${projectRoot}/${relativePath}`;
  const content = `${JSON.stringify(table, null, 2)}\n`;
  if (checkOnly) {
    const current = await readFile(path, 'utf8').catch(() => '');
    if (current !== content) throw new Error(`${relativePath} is stale; regenerate public lesson translations.`);
  } else {
    await writeFile(path, content, 'utf8');
  }
  console.log(`${checkOnly ? 'Checked' : 'Generated'} ${relativePath}: ${Object.keys(table).length} entries.`);
}
