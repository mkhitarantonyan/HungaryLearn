import type { SupportedLanguage } from '../i18n/types';
import { getAudioFileUrl, getSlideCandidateKeys } from '../utils/audioRegistry';

export type NarrationLanguage = SupportedLanguage;

interface NarrationLocaleConfig {
  available: boolean;
  /** Namespace reserved for language-specific assets added after the legacy RU catalogue. */
  assetNamespace: string | null;
}

export const NARRATION_CONFIG: Readonly<Record<NarrationLanguage, NarrationLocaleConfig>> = {
  ru: { available: true, assetNamespace: null },
  en: { available: false, assetNamespace: 'narration/en' },
  es: { available: false, assetNamespace: 'narration/es' },
};

export interface NarrationSource {
  lessonId: number;
  slideId: number;
  language: NarrationLanguage;
  audioKey: string;
  url: string;
}

export function isNarrationAvailable(language: NarrationLanguage): boolean {
  return NARRATION_CONFIG[language].available;
}

/**
 * Resolves lesson narration independently from Hungarian word pronunciation.
 * Future locales only need an enabled config entry and registered namespaced assets.
 */
export function getNarrationSource(
  lessonId: number,
  language: NarrationLanguage,
  slideId: number,
): NarrationSource | null {
  const config = NARRATION_CONFIG[language];
  if (!config.available) return null;

  const candidates = config.assetNamespace
    ? [`${config.assetNamespace}/l${lessonId}_s${slideId}`]
    : getSlideCandidateKeys(slideId, lessonId);
  const audioKey = candidates.find((candidate) => getAudioFileUrl(candidate) !== null);
  if (!audioKey) return null;
  const url = getAudioFileUrl(audioKey);
  return url ? { lessonId, slideId, language, audioKey, url } : null;
}
