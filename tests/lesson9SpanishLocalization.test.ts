import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_9 } from '../src/data/lessons/lesson9';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';

const esTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const publicEsTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const NON_LOCALIZED_FIELDS = new Set([
  'id', 'activityId', 'objectiveId', 'assetId', 'audioText', 'baseWord',
  'cardId', 'hu', 'ipa', 'lexemeId', 'phonetic', 'targetPhonetic',
]);

function lessonNineRussianKeys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (NON_LOCALIZED_FIELDS.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const key = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(key)) result.add(key);
    }
    return result;
  }
  if (Array.isArray(value)) value.forEach((item) => lessonNineRussianKeys(item, field, result));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => lessonNineRussianKeys(item, key, result));
  return result;
}

const lessonNineKeys = lessonNineRussianKeys([
  LESSON_9,
  LESSONS_META.find((lesson) => lesson.number === 9),
  LESSON_TRANSLATION_MAP[9],
]);

test('Lesson 9 has complete Spanish coverage and a synchronized public subset', () => {
  assert.equal(lessonNineKeys.size, 667);
  const publicKeys = [...lessonNineKeys].filter((key) => key in publicEsTranslations);
  assert.equal(publicKeys.length, 51);
  for (const key of lessonNineKeys) {
    assert.ok(key in esTranslations, `missing full Spanish translation: ${key}`);
    assert.doesNotMatch(esTranslations[key], /[А-Яа-яЁё]/u, key);
  }
  for (const key of publicKeys) assert.equal(publicEsTranslations[key], esTranslations[key], key);
});

test('Lesson 9 Spanish contains no known machine-translation residue', () => {
  const forbidden = /saco de mierda|El ano es el ano|controlled practice|model answer|mini-check|full sentence|registro judicial|grado excelente|auto-práctica|acusador|acusatorio|\b(?:roleplay|role-play|score|evidence|selfPractice|self-practice|activity|activities|coffee|cheaper|ugly)\b/iu;
  const failures = [...lessonNineKeys]
    .map((key) => [key, esTranslations[key]] as const)
    .filter(([, translation]) => forbidden.test(translation));
  assert.deepEqual(failures, []);
});

test('Lesson 9 Spanish preserves the adjective and comparison rules', () => {
  assert.match(
    esTranslations['Главная модель этого слайда: перед существительным прилагательное обычно остаётся неизменным, а число и падеж выражает существительное.'],
    /no concuerda.*número y el caso se marcan en el sustantivo/u,
  );
  assert.match(
    esTranslations['Не превращай это в правило «прилагательное никогда не меняется». В сказуемом множественное число видно на самом прилагательном: A házak nagyok.'],
    /predicado.*plural.*A házak nagyok/u,
  );
  assert.match(
    esTranslations['Не используй механическое правило «слово + bb». Формы *nagybb, *szépbb, *jóbb и *kicsibb неверны.'],
    /regla mecánica.*incorrectas/u,
  );
  assert.match(
    esTranslations['Превосходная степень строится от уже готовой сравнительной формы: сравнительная форма → leg- + сравнительная форма.'],
    /comparativo → leg- \+ comparativo/u,
  );
  assert.equal(esTranslations['УРОК 9 · 9/11 · ПИСЬМО'], 'LECCIÓN 9 · 9/11 · ESCRITURA');
});
