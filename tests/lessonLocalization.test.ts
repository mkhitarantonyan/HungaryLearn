import assert from 'node:assert/strict';
import test from 'node:test';
import { LESSONS_META } from '../src/data/lessons/index';
import { localizeLesson, localizeLessonCatalog, localizeLessonText } from '../src/i18n/lessonContent';
import { loadServerLesson } from '../src/server/lessonLoader';
import { localizeServerLesson } from '../src/server/lessonLocalization';
import { getLessonQuiz, getLessonTranslations, getLessonVocabulary } from '../src/utils/lessonQuizAndVocab';
import type { Lesson } from '../src/types';
import type { InstructionLanguage } from '../src/i18n/types';

const cyrillic = /[А-Яа-яЁё]/u;
const ignoredTextFields = new Set(['phonetic', 'targetPhonetic']);

function valuesAtStableKeys(value: unknown, path = ''): Map<string, unknown> {
  const result = new Map<string, unknown>();
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      for (const [key, entry] of valuesAtStableKeys(item, `${path}[${index}]`)) result.set(key, entry);
    });
  } else if (value && typeof value === 'object') {
    for (const [key, entry] of Object.entries(value)) {
      const nextPath = path ? `${path}.${key}` : key;
      if (key === 'id' || key.endsWith('Id') || key === 'assetId' || key === 'audioText' || key === 'hu' || key === 'ipa') result.set(nextPath, entry);
      for (const [nestedKey, nestedEntry] of valuesAtStableKeys(entry, nextPath)) result.set(nestedKey, nestedEntry);
    }
  }
  return result;
}

function visibleCyrillic(value: unknown, field = '', path = ''): string[] {
  if (typeof value === 'string') {
    return !ignoredTextFields.has(field) && cyrillic.test(value) ? [`${path}: ${value.slice(0, 120)}`] : [];
  }
  if (Array.isArray(value)) return value.flatMap((item, index) => visibleCyrillic(item, field, `${path}[${index}]`));
  if (!value || typeof value !== 'object') return [];
  return Object.entries(value).flatMap(([key, entry]) => visibleCyrillic(entry, key, path ? `${path}.${key}` : key));
}

test('all 28 lessons have complete EN and ES display localization without changing identity', async () => {
  for (let lessonNumber = 1; lessonNumber <= 28; lessonNumber += 1) {
    const source = await loadServerLesson(lessonNumber);
    assert.ok(source, `lesson ${lessonNumber} must load`);
    const sourceIds = valuesAtStableKeys(source);

    for (const language of ['en', 'es'] as const) {
      const localized = localizeServerLesson(source, language);
      assert.equal(localized.id, source.id);
      assert.equal(localized.number, source.number);
      assert.deepEqual(valuesAtStableKeys(localized), sourceIds, `lesson ${lessonNumber} ${language} changed a stable ID/audio key`);
      assert.notEqual(localized.title, source.title, `lesson ${lessonNumber} ${language} title did not change`);
      assert.deepEqual(visibleCyrillic(localized), [], `lesson ${lessonNumber} ${language} contains untranslated learner text`);
    }
  }
});

test('derived vocabulary, quiz, and translation activities are localized for every lesson', async () => {
  for (let lessonNumber = 1; lessonNumber <= 28; lessonNumber += 1) {
    const source = await loadServerLesson(lessonNumber);
    assert.ok(source, `lesson ${lessonNumber} must load`);
    const activities: readonly [string, (lesson: Lesson, language: InstructionLanguage) => unknown][] = [
      ['vocabulary', getLessonVocabulary],
      ['quiz', getLessonQuiz],
      ['translation', getLessonTranslations],
    ] as const;

    for (const [name, getActivity] of activities) {
      const original: unknown = getActivity(source, 'ru');
      for (const language of ['en', 'es'] as const) {
        const localizedLesson = localizeServerLesson(source, language);
        const localized: unknown = getActivity(localizedLesson, language);
        assert.deepEqual(valuesAtStableKeys(localized), valuesAtStableKeys(original), `lesson ${lessonNumber} ${language} changed ${name} identity or Hungarian/audio data`);
        assert.deepEqual(visibleCyrillic(localized), [], `lesson ${lessonNumber} ${language} contains untranslated ${name} text`);
      }
    }
  }
});

test('catalog localization keeps lesson numbers used by progress', () => {
  for (const language of ['en', 'es'] as const) {
    const localized = localizeLessonCatalog(LESSONS_META, language);
    assert.deepEqual(localized.map(({ id, number, slidesCount }) => ({ id, number, slidesCount })), LESSONS_META.map(({ id, number, slidesCount }) => ({ id, number, slidesCount })));
    assert.ok(localized.every((lesson, index) => lesson.title !== LESSONS_META[index].title));
  }
});

test('free lessons are fully localized by browser-safe tables', async () => {
  for (const lessonNumber of [1, 2]) {
    const source = await loadServerLesson(lessonNumber);
    assert.ok(source);
    for (const language of ['en', 'es'] as const) {
      assert.deepEqual(visibleCyrillic(localizeLesson(source, language)), []);
    }
  }
});

test('localized text falls back safely and preserves HTML/audio attributes', () => {
  const source = '<button data-speak-text="Szia!">Привет!</button>';
  const english = localizeLessonText(source, 'en');
  const spanish = localizeLessonText(source, 'es');
  assert.match(english, /data-speak-text="Szia!"/u);
  assert.match(spanish, /data-speak-text="Szia!"/u);
  assert.notEqual(english, source);
  assert.notEqual(spanish, source);
  assert.equal(localizeLessonText('unmapped text', 'en'), 'unmapped text');
});

test('browser localization tables exclude paid lesson bodies', async () => {
  const clientSource = await import('node:fs/promises').then(({ readFile }) => readFile(new URL('../src/i18n/lessonContent.ts', import.meta.url), 'utf8'));
  assert.match(clientSource, /lessonTranslations\.public\.en\.json/u);
  assert.match(clientSource, /lessonTranslations\.public\.es\.json/u);
  assert.doesNotMatch(clientSource, /from ['"]\.\/lessonTranslations\.en\.json['"]/u);
  assert.doesNotMatch(clientSource, /from ['"]\.\/lessonTranslations\.es\.json['"]/u);
});
