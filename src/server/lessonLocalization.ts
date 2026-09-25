import type { Lesson } from '../types';
import enTranslations from '../i18n/lessonTranslations.en.json';
import esTranslations from '../i18n/lessonTranslations.es.json';
import { localizeLessonWithTables, type LessonTranslationTables } from '../i18n/lessonLocalizationCore';
import type { InstructionLanguage } from '../i18n/types';

const SERVER_TRANSLATIONS: LessonTranslationTables = {
  en: enTranslations,
  es: esTranslations,
};

export function localizeServerLesson(lesson: Lesson, language: InstructionLanguage): Lesson {
  return localizeLessonWithTables(lesson, language, SERVER_TRANSLATIONS);
}
