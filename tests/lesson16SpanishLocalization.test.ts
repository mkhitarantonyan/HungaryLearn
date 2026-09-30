import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_16 } from '../src/data/lessons/lesson16';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';

const es = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const pub = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8')) as Record<string, string>;
const SKIP = new Set(['id', 'activityId', 'objectiveId', 'assetId', 'audioText', 'baseWord', 'cardId', 'hu', 'ipa', 'lexemeId', 'phonetic', 'targetPhonetic']);
function keys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (SKIP.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const key = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(key)) result.add(key);
    }
    return result;
  }
  if (Array.isArray(value)) value.forEach(item => keys(item, field, result));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key, item]) => keys(item, key, result));
  return result;
}

const lessonKeys = keys([LESSON_16, LESSONS_META.find(item => item.number === 16), LESSON_TRANSLATION_MAP[16]]);

test('Lesson 16 has complete Spanish coverage and a synchronized public subset', () => {
  assert.equal(lessonKeys.size, 458);
  const publicKeys = [...lessonKeys].filter(key => key in pub);
  assert.equal(publicKeys.length, 23);
  for (const key of lessonKeys) {
    assert.ok(key in es, `missing full Spanish translation: ${key}`);
    assert.doesNotMatch(es[key], /[А-Яа-яЁё]/u, key);
  }
  for (const key of publicKeys) assert.equal(pub[key], es[key], key);
});

test('Lesson 16 Spanish contains no known machine-translation residue', () => {
  const forbidden = /escort|satélite|cheque|tres pasillos|AUDITIZACIÓN|Mispelled|sala de fijación|story-line|tenedor en el camino|productos de código abierto|post-consensualización|Palabras consentidas|\b(?:ROLEPLAY|SPEAKING PRACTICE|back row|Save v|What happens)\b/iu;
  const failures = [...lessonKeys].map(key => [key, es[key]] as const).filter(([, value]) => forbidden.test(value));
  assert.deepEqual(failures, []);
});

test('Lesson 16 Spanish preserves the grammar and assessment design', () => {
  assert.match(es['Сначала определи функцию через вопрос. Потом выбери вариант суффикса по гармонии гласных. После этого проверь, не нужно ли удлинить конечные a/e.'], /función.*armonía vocálica.*alargar la a\/e final/u);
  assert.match(es['Сначала всё равно выбираем гармонический вариант суффикса. Затем начальный v полностью уподобляется последнему согласному звуку основы.'], /variante armónica.*v inicial.*asimila por completo.*último sonido consonántico/u);
  assert.match(es['Не пиши механически *vonatval, *késvel или *pénzvel. После согласной видим результат ассимиляции, а не отдельную букву v.'], /\*vonatval.*\*késvel.*\*pénzvel.*asimilación/u);
  assert.match(es['RolePlay проверяет открытую коммуникацию и даёт PARTIAL evidence. Система видит прохождение сценария, но не должна притворяться, будто полностью оценила качество свободной речи.'], /comunicación abierta.*evidencia PARCIAL.*no debe.*evaluado por completo/u);
  assert.match(es['Это открытая письменная работа и она даёт PARTIAL evidence. Автоматическая система может зафиксировать выполнение, но не должна считать свободный текст полностью проверенным.'], /escritura abierta.*evidencia PARCIAL.*no debe considerar.*evaluado por completo/u);
  assert.equal(es['УРОК 16 · 6/11 · АУДИРОВАНИЕ'], 'LECCIÓN 16 · 6/11 · COMPRENSIÓN AUDITIVA');
  assert.equal(es['УРОК 16 · 8/11 · ПИСЬМО'], 'LECCIÓN 16 · 8/11 · ESCRITURA');
  assert.equal(es['УРОК 16 · 9/11 · SPEAKING PRACTICE'], 'LECCIÓN 16 · 9/11 · PRÁCTICA ORAL');
});
