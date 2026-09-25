import type { VocabularyItem } from '../types';
import type { SupportedLanguage } from './types';

/** Returns localized learning metadata without translating Hungarian course content at runtime. */
export function getLocalizedWordTranslation(
  item: Pick<VocabularyItem, 'ru' | 'translations'>,
  language: SupportedLanguage,
): string {
  return item.translations?.[language]?.trim() || item.ru;
}
