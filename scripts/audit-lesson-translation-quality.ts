import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

const forbidden = {
  en: [
    /\b(?:direct addition|certain conjugation|uncertain conjugation|undefined conjugation|singular number|plural number|auditing|dating:|familiarity complete|genus is not different)\b/iu,
    /\b(?:Russian sounds|automatically similar Russian)\b/iu,
    />{2,}|\b(?:accusatory case|imperative inclination|conditional inclination)\b/iu,
  ],
  es: [
    /\b(?:adici[oó]n directa|cierta conjugaci[oó]n|n[uú]mero singular|n[uú]mero plural|digraph|trigraph|artikli|lexicidad|reanudar preparaci[oó]n|menos \d+, diapositiva|sonidos rusos)\b/iu,
    /\b(?:auditor[ií]a:|citas:|primer conocido|familiaridad completa)\b/iu,
    /\b(?:caso acusatorio|inclinaci[oó]n imperativa|inclinaci[oó]n condicional)\b|\bx\d+\b|[■√]x\d+|#{12,}/iu,
  ],
} as const;

for (const locale of ['en', 'es'] as const) {
  const source = JSON.parse(await readFile(`${root}/src/i18n/lessonTranslations.${locale}.json`, 'utf8')) as Record<string, string>;
  const publicTranslations = JSON.parse(await readFile(`${root}/src/i18n/lessonTranslations.public.${locale}.json`, 'utf8')) as Record<string, string>;
  for (const [name, table] of [['source', source], ['public', publicTranslations]] as const) {
    const failures = Object.entries(table).filter(([, value]) => forbidden[locale].some((pattern) => pattern.test(value)));
    if (failures.length) {
      throw new Error(`${locale}/${name}: ${failures.length} known translation defects remain; first key: ${failures[0][0]}`);
    }
    const corrupt = Object.entries(table).filter(([key, value]) =>
      value.length > 120 && (
        value.length > 5 * Math.max(key.length, 15)
        || /(?:very, ){5}|\b(\w+)(?:[ /,;]+\1){5}/iu.test(value)
      ),
    );
    if (corrupt.length) throw new Error(`${locale}/${name}: ${corrupt.length} repeated or oversized translations; first key: ${corrupt[0][0]}`);
  }
  for (const [key, value] of Object.entries(publicTranslations)) {
    if (source[key] !== value) throw new Error(`${locale}/public differs from source at ${key}`);
  }
  console.log(`Checked ${locale}: ${Object.keys(source).length} source and ${Object.keys(publicTranslations).length} public translations.`);
}
