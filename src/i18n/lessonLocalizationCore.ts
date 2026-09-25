import type { Lesson, LessonMeta } from '../types';
import type { InstructionLanguage } from './types';

export type LessonTranslationTable = Readonly<Record<string, string>>;
export type LessonTranslationTables = Readonly<Record<Exclude<InstructionLanguage, 'ru'>, LessonTranslationTable>>;

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

const EDGE_WHITESPACE = /^(\s*)([\s\S]*?)(\s*)$/u;

function translateTextPart(part: string, translations: LessonTranslationTable): string {
  if (part.startsWith('<')) return part;
  const match = part.match(EDGE_WHITESPACE);
  if (!match) return part;
  const [, before, content, after] = match;
  return `${before}${translations[content] ?? content}${after}`;
}

export function localizeTextWithTables(
  text: string,
  language: InstructionLanguage,
  tables: LessonTranslationTables,
): string {
  if (language === 'ru') return text;
  return text
    .split(/(<[^>]+>)/gu)
    .map((part) => translateTextPart(part, tables[language]))
    .join('');
}

function localizeUnknownWithTables(
  value: unknown,
  language: InstructionLanguage,
  tables: LessonTranslationTables,
  field = '',
): unknown {
  if (typeof value === 'string') {
    return NON_LOCALIZED_FIELDS.has(field) ? value : localizeTextWithTables(value, language, tables);
  }
  if (Array.isArray(value)) {
    return value.map((item) => localizeUnknownWithTables(item, language, tables, field));
  }
  if (!value || typeof value !== 'object') return value;

  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, localizeUnknownWithTables(item, language, tables, key)]),
  );
}

export function localizeValueWithTables<T>(
  value: T,
  language: InstructionLanguage,
  tables: LessonTranslationTables,
): T {
  return language === 'ru' ? value : localizeUnknownWithTables(value, language, tables) as T;
}

export function localizeLessonWithTables(
  lesson: Lesson,
  language: InstructionLanguage,
  tables: LessonTranslationTables,
): Lesson {
  return localizeValueWithTables(lesson, language, tables);
}

export function localizeLessonMetaWithTables(
  meta: LessonMeta,
  language: InstructionLanguage,
  tables: LessonTranslationTables,
): LessonMeta {
  return localizeValueWithTables(meta, language, tables);
}
