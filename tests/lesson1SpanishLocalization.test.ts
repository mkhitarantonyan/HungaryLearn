import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_1 } from '../src/data/lessons/lesson1';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';
const esTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const publicEsTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8')) as Record<string, string>;

const NON_LOCALIZED_FIELDS = new Set([
  'id',
  'activityId',
  'objectiveId',
  'assetId',
  'audioText',
  'baseWord',
  'cardId',
  'hu',
  'ipa',
  'lexemeId',
  'phonetic',
  'targetPhonetic',
]);

function lessonOneRussianKeys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (NON_LOCALIZED_FIELDS.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const key = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(key)) result.add(key);
    }
    return result;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => lessonOneRussianKeys(item, field, result));
  } else if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, item]) => lessonOneRussianKeys(item, key, result));
  }
  return result;
}

const lessonOneKeys = lessonOneRussianKeys([
  LESSON_1,
  LESSONS_META.find((lesson) => lesson.number === 1),
  LESSON_TRANSLATION_MAP[1],
]);

test('Lesson 1 has complete synchronized Spanish coverage', () => {
  assert.equal(lessonOneKeys.size, 544);
  for (const key of lessonOneKeys) {
    assert.ok(key in esTranslations, `missing full Spanish translation: ${key}`);
    assert.ok(key in publicEsTranslations, `missing public Spanish translation: ${key}`);
    assert.equal(publicEsTranslations[key as keyof typeof publicEsTranslations], esTranslations[key as keyof typeof esTranslations]);
    assert.doesNotMatch(esTranslations[key as keyof typeof esTranslations], /[А-Яа-яЁё]/u, key);
  }
});

test('Lesson 1 Spanish contains no known machine-translation residue', () => {
  const forbidden = /\b(?:first|starts?|usually|word|apple|human|price|back|joy|write|street|road|bottle|training|auto-exercise|alpha-sound|listening|reading|practice|sonan)\b|pan pan|bien; bien|húngaro; húngaro|monodo|teléfono objetivo|cartas y unidades de cartas|grabación encaja|a largo plazo|auto-ver|ahorramos exactamente|el primer sílaba|último sílaba|en the|ALFAVIT|VOICES|Acordable|Lectura del aire/iu;
  const failures = [...lessonOneKeys]
    .map((key) => [key, esTranslations[key as keyof typeof esTranslations]] as const)
    .filter(([, translation]) => forbidden.test(translation));

  assert.deepEqual(failures, []);
});

test('Lesson 1 Spanish uses accurate learner-facing phonetics and core vocabulary', () => {
  assert.equal(esTranslations['ребёнок'], 'niño/a');
  assert.equal(esTranslations['пиво'], 'cerveza');
  assert.equal(esTranslations['хлеб'], 'pan');
  assert.equal(esTranslations['игра'], 'juego');
  assert.match(esTranslations['Русские сочетания «дь», «ть» и «нь» дают только приблизительное направление. Венгерские gy /ɟ/, ty /c/ и ny /ɲ/ — самостоятельные палатальные согласные, а не обычные русские согласные со смягчением.'], /sonidos españoles.*consonantes palatales/iu);
  assert.match(esTranslations['Главная ловушка: в венгерском s обозначает звук /ʃ/, похожий на русское «ш», а sz обозначает /s/, похожий на русское «с». Это противоположно тому, что многие ожидают по английскому или другим европейским языкам.'], /hispanohablantes.*s española/iu);
});

test('Russian-only pronunciation hints are hidden outside the Russian interface', () => {
  const slideContent = readFileSync(new URL('../src/components/SlideContent.tsx', import.meta.url), 'utf8');
  const wordTrainer = readFileSync(new URL('../src/components/WordTrainerModal.tsx', import.meta.url), 'utf8');
  const reviewWarmup = readFileSync(new URL('../src/components/ReviewWarmup.tsx', import.meta.url), 'utf8');

  assert.match(slideContent, /language === 'ru' && item\.phonetic/);
  assert.match(slideContent, /language === 'ru' && slide\.targetPhonetic/);
  assert.match(wordTrainer, /language === 'ru' && currentWord\.phonetic/);
  assert.match(reviewWarmup, /language === 'ru' && card\.phonetic/);
});
