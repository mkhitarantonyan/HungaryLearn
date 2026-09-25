import type { SlideData } from '../types';
import type { NarrationLanguage } from '../config/narration';
import { getNarrationSource } from '../config/narration';
import type { RecordedAudioItem } from './speech';

export function getSlideNarrativeSequence(
  slide: SlideData,
  lessonNumber: number = 1,
  language: NarrationLanguage = 'ru',
): RecordedAudioItem[] {
  const source = getNarrationSource(lessonNumber, language, slide.id);
  return source ? [{ key: source.audioKey }] : [];
}
