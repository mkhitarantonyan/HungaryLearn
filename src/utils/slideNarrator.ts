import type { SlideData } from '../types';
import type { RecordedAudioItem } from './speech';
import { getAudioFileUrl, getSlideCandidateKeys } from './audioRegistry';

export function getSlideNarrativeSequence(
  slide: SlideData,
  lessonNumber: number = 1
): RecordedAudioItem[] {
  const audioKey = getSlideCandidateKeys(slide.id, lessonNumber)
    .find((candidate) => getAudioFileUrl(candidate) !== null);

  return audioKey ? [{ key: audioKey }] : [];
}
