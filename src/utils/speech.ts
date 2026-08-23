import {
  playRecordedAudio as playRegisteredAudio,
  stopActiveAudio,
} from './audioRegistry';

export interface RecordedAudioItem {
  key: string;
  rate?: number;
}

export function playRecordedAudio(
  key: string,
  rate?: number,
  onEnd?: () => void,
  onError?: (error: unknown) => void
): boolean {
  stopRecordedAudio();
  return playRegisteredAudio(key, rate, onEnd, onError);
}

export function playRecordedSequence(
  items: RecordedAudioItem[],
  onItemChange?: (index: number) => void,
  onComplete?: () => void,
  isCancelled?: () => boolean,
  onAutoplayBlocked?: () => void,
  onUnavailable?: (error: unknown) => void
): void {
  stopRecordedAudio();

  if (items.length === 0) {
    onUnavailable?.(new Error('Recorded audio is unavailable'));
    onComplete?.();
    return;
  }

  let index = 0;
  const playNext = (): void => {
    if (isCancelled?.()) {
      stopRecordedAudio();
      onComplete?.();
      return;
    }
    if (index >= items.length) {
      onComplete?.();
      return;
    }

    onItemChange?.(index);
    const item = items[index];
    playRegisteredAudio(
      item.key,
      item.rate,
      () => {
        index += 1;
        playNext();
      },
      (error) => {
        stopRecordedAudio();
        if (isAutoplayBlockedError(error)) {
          onAutoplayBlocked?.();
        } else {
          onUnavailable?.(error);
        }
        onComplete?.();
      }
    );
  };

  playNext();
}

export function stopRecordedAudio(): void {
  stopActiveAudio();
}

function isAutoplayBlockedError(error: unknown): boolean {
  if (typeof error !== 'object' || error === null) return false;
  return (error as { name?: unknown }).name === 'NotAllowedError';
}
