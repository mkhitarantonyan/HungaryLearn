import type { Lesson, LessonMeta } from '../types';
import enTranslations from './lessonTranslations.public.en.json';
import esTranslations from './lessonTranslations.public.es.json';
import type { InstructionLanguage } from './types';
import {
  localizeLessonMetaWithTables,
  localizeLessonWithTables,
  localizeTextWithTables,
  localizeValueWithTables,
  type LessonTranslationTables,
} from './lessonLocalizationCore';

const PUBLIC_TRANSLATIONS: LessonTranslationTables = {
  en: enTranslations,
  es: esTranslations,
};

/** Localizes visible text while leaving HTML tags and their data/audio attributes byte-for-byte intact. */
export function localizeLessonText(text: string, language: InstructionLanguage): string {
  return localizeTextWithTables(text, language, PUBLIC_TRANSLATIONS);
}

export function localizeDisplayValue<T>(value: T, language: InstructionLanguage): T {
  return localizeValueWithTables(value, language, PUBLIC_TRANSLATIONS);
}

/** Returns a display-only clone. Stable lesson, slide, activity, audio and progress IDs are never changed. */
export function localizeLesson(lesson: Lesson, language: InstructionLanguage): Lesson {
  return localizeLessonWithTables(lesson, language, PUBLIC_TRANSLATIONS);
}

export function localizeLessonMeta(meta: LessonMeta, language: InstructionLanguage): LessonMeta {
  return localizeLessonMetaWithTables(meta, language, PUBLIC_TRANSLATIONS);
}

export function localizeLessonCatalog(lessons: LessonMeta[], language: InstructionLanguage): LessonMeta[] {
  return language === 'ru' ? lessons : lessons.map((lesson) => localizeLessonMeta(lesson, language));
}
