import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { LESSON_28 } from '../src/data/lessons/lesson28';
import { LESSONS_META } from '../src/data/lessons/index';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';

const es = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.es.json', import.meta.url), 'utf8')) as Record<string,string>;
const publicEs = JSON.parse(readFileSync(new URL('../src/i18n/lessonTranslations.public.es.json', import.meta.url), 'utf8')) as Record<string,string>;
const skippedFields = new Set(['id','activityId','objectiveId','assetId','audioText','baseWord','cardId','hu','ipa','lexemeId','phonetic','targetPhonetic']);

function collectKeys(value: unknown, field = '', result = new Set<string>()): Set<string> {
  if (typeof value === 'string') {
    if (skippedFields.has(field)) return result;
    for (const part of value.split(/(<[^>]+>)/gu)) {
      const text = part.startsWith('<') ? '' : part.trim();
      if (/[А-Яа-яЁё]/u.test(text)) result.add(text);
    }
    return result;
  }
  if (Array.isArray(value)) value.forEach((item) => collectKeys(item, field, result));
  else if (value && typeof value === 'object') Object.entries(value).forEach(([key,item]) => collectKeys(item, key, result));
  return result;
}

const lessonKeys = collectKeys([LESSON_28, LESSONS_META.find((item) => item.number === 28), LESSON_TRANSLATION_MAP[28]]);

test('Lesson 28 has complete Spanish coverage and a synchronized public subset', () => {
  assert.equal(lessonKeys.size, 775);
  const publicKeys = [...lessonKeys].filter((key) => key in publicEs);
  assert.equal(publicKeys.length, 34);
  for (const key of lessonKeys) {
    assert.ok(key in es, `missing full Spanish translation: ${key}`);
    assert.doesNotMatch(es[key], /[А-Яа-яЁё]/u, key);
  }
  for (const key of publicKeys) assert.equal(publicEs[key], es[key], key);
});

test('Lesson 28 Spanish contains no known machine-translation residue', () => {
  const forbidden = /Repita el nivel final|\binclinaciones\b|\bsindicatos\b|reproducción de errores|tiempo-inclination|Echa un vistazo|verb-box|post-post|sin fe|primera fila, anotado|\bdefinitiva\b|objeto recto|puntuación de la culpa|Tiempo de pago|Uniforme político|Insistencia condicional|Dos Concursos|Cataratas y Atracción|\bconsola\b|\bimperiosa\b|palabra-|\bpostverb\b|Propuestas difíciles|Asignación con|Comma y orden|Mezcla Gramática|caja del verbo|Solicitud de policía|Reclusas complejas|\bBolas\b|\bVentilador\b|bug-log|\baglomeración\b|\bsubverbio\b|\bcertaen\b|\bDestinguir\b/iu;
  const failures = [...lessonKeys].map((key) => [key, es[key]] as const).filter(([,value]) => forbidden.test(value));
  assert.deepEqual(failures, []);
});

test('Lesson 28 Spanish preserves the final grammar system and assessment boundaries', () => {
  assert.match(
    es['Завершение курса подтверждает прохождение программы, но само по себе не является официальным сертификатом B1. Итоговый урок показывает сильные стороны и темы для дальнейшей работы.'],
    /no constituye.*certificado oficial.*B1.*puntos fuertes.*seguir trabajando/u,
  );
  assert.match(
    es['Венгерский язык часто строит длинные словоформы, но смысл выражается не только окончаниями. Важны также приставки, послелоги, вспомогательные конструкции и порядок слов.'],
    /no se expresa únicamente mediante terminaciones.*prefijos verbales.*posposiciones.*construcciones auxiliares.*orden de palabras/u,
  );
  assert.match(
    es['Выбор начинается не с окончания глагола, а с вопроса: есть ли прямой объект и является ли он определённым.'],
    /objeto directo.*es definido/u,
  );
  assert.match(
    es['Сначала выбери тип пространственного отношения: внутрь, на поверхность или к объекту. Затем выбери направление: куда, где или откуда.'],
    /interior.*superficie.*proximidad.*adónde, dónde o de dónde/u,
  );
  assert.match(
    es['В нейтральном отрицании приставка отделяется и следует после спрягаемого глагола: elmegyek → Nem megyek el. Это не означает, что она обязана стоять в конце всего предложения.'],
    /negación neutra.*se separa.*después del verbo conjugado.*no significa.*al final de toda la oración/u,
  );
  assert.match(
    es['В гипотетическом условии с ha условное наклонение используется в обеих частях: lenne («было бы») и utaznék («я путешествовал(а) бы»).'],
    /condicional.*ambas partes.*lenne.*utaznék/u,
  );
  assert.equal(es['УРОК 28 · 9/11 · ИТОГОВЫЙ ТЕСТ'], 'LECCIÓN 28 · 9/11 · AUTOEVALUACIÓN FINAL');
  assert.equal(es['УРОК 28 · 11/11 · ЗАВЕРШЕНИЕ КУРСА'], 'LECCIÓN 28 · 11/11 · FINALIZACIÓN DEL CURSO');
});
