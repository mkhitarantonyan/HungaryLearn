import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_6 } from '../src/data/lessons/lesson6';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';

const esTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const publicEsTranslations = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const NON_LOCALIZED_FIELDS = new Set([
  'id', 'activityId', 'objectiveId', 'assetId', 'audioText', 'baseWord',
  'cardId', 'hu', 'ipa', 'lexemeId', 'phonetic', 'targetPhonetic',
]);

function lessonSixRussianKeys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (NON_LOCALIZED_FIELDS.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const key = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(key)) result.add(key);
    }
    return result;
  }
  if (Array.isArray(value)) value.forEach((item) => lessonSixRussianKeys(item, field, result));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => lessonSixRussianKeys(item, key, result));
  return result;
}

const lessonSixKeys = lessonSixRussianKeys([
  LESSON_6,
  LESSONS_META.find((lesson) => lesson.number === 6),
  LESSON_TRANSLATION_MAP[6],
]);

test('Lesson 6 has complete Spanish coverage and a synchronized public subset', () => {
  assert.equal(lessonSixKeys.size, 928);
  const publicKeys = [...lessonSixKeys].filter((key) => key in publicEsTranslations);
  assert.equal(publicKeys.length, 65);
  for (const key of lessonSixKeys) {
    assert.ok(key in esTranslations, `missing full Spanish translation: ${key}`);
    assert.doesNotMatch(esTranslations[key], /[А-Яа-яЁё]/u, key);
  }
  for (const key of publicKeys) assert.equal(publicEsTranslations[key], esTranslations[key], key);
});

test('Lesson 6 Spanish contains no known machine-translation residue', () => {
  const forbidden = /minimización|sin llave|Anna Water|c-sonido|h-sound|frecuencia--ik-verbs|tiempo-caída|Clave clave|ESTRUENCIA|Provocaciones cortas|Mini-dictador|STANCE|NOCHE MULTIVO|Confío|presente tense|Don’t|Mini-Audito|shop-in|Función de juego|\bone día\b|breve sentences|relaciones sexuales|TRADE TO A1|Anna's|auditing|scheduling|apple|\bFor las\b|vocales back|\bmenos [2345]\b/iu;
  const failures = [...lessonSixKeys]
    .map((key) => [key, esTranslations[key]] as const)
    .filter(([, translation]) => forbidden.test(translation));
  assert.deepEqual(failures, []);
});

test('Lesson 6 Spanish preserves the A0 review boundaries', () => {
  assert.match(esTranslations['Урок 6 — не новый грамматический раздел и не официальный экзамен. Это спокойная диагностика: чтение, базовые функции общения, существительные и артикли, настоящее время, числа, календарь и расписание.'], /no es una sección gramatical nueva ni un examen oficial/u);
  assert.match(esTranslations['Не добавляйте van после профессии, национальности или имени в третьем лице: Ő diák. Ő magyar. Но для местонахождения van нужно: Ő itt van.'], /Para indicar ubicación sí se necesita van/u);
  assert.match(esTranslations['Множественное число нельзя образовывать механически одним голым -k. В реальных формах появляются соединительные гласные: könyvek, kertek, házak, asztalok. После числительного существительное, наоборот, остаётся в единственном числе: két könyv.'], /sustantivo húngaro queda en singular/u);
  assert.match(esTranslations['Произношение, role-play, устная практика и открытое письмо нельзя считать автоматически освоенными. Успешная загрузка или воспроизведение MP3 также не является языковым результатом.'], /no pueden considerarse dominados automáticamente/u);
});
