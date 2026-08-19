import { useCallback, useEffect, useRef, useState } from 'react';
import type { SlideData } from '../types';
import { getSlideNarrativeSequence } from '../utils/slideNarrator';
import { speakSequence, stopSpeech, getVoiceSettings, type SpeechItem } from '../utils/speech';
import { readAutoplayPreference, writeAutoplayPreference } from '../utils/narrationPrefs';
import { NarrationRunToken } from '../utils/narrationRunToken';

export type NarrationPlaybackRate = 0.8 | 1 | 1.2;

export const NARRATION_PLAYBACK_RATES: NarrationPlaybackRate[] = [0.8, 1, 1.2];

export interface LessonNarration {
  isPlaying: boolean;
  autoplayEnabled: boolean;
  playbackRate: NarrationPlaybackRate;
  needsUserGesture: boolean;
  play: (slide?: SlideData) => void;
  stop: () => void;
  toggle: () => void;
  setAutoplay: (enabled: boolean) => void;
  setPlaybackRate: (rate: NarrationPlaybackRate) => void;
}

/**
 * Applies the selected playback speed to a narration sequence.
 * MP3 items are identified by their `fallbackSequence` marker and must play at
 * the selected speed directly (audio.playbackRate); TTS items scale their
 * curated (or default) rate. The MP3 → TTS fallback chain is preserved.
 */
function applyPlaybackRate(sequence: SpeechItem[], rate: number): SpeechItem[] {
  const baseRate = getVoiceSettings().rate;
  return sequence.map((item) => {
    const next: SpeechItem = {
      ...item,
      rate: item.fallbackSequence ? rate : (item.rate ?? baseRate) * rate,
    };
    if (item.fallbackSequence) {
      next.fallbackSequence = applyPlaybackRate(item.fallbackSequence, rate);
    }
    return next;
  });
}

export function useLessonNarration(
  lessonNumber: number | undefined,
  currentSlide: SlideData | undefined
): LessonNarration {
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState<boolean>(() => readAutoplayPreference());
  const [playbackRate, setPlaybackRateState] = useState<NarrationPlaybackRate>(1);
  const [needsUserGesture, setNeedsUserGesture] = useState(false);

  // A run token invalidates stale speech callbacks after stop()/play().
  const tokenRef = useRef(new NarrationRunToken());
  const playingRef = useRef(false);

  useEffect(() => {
    writeAutoplayPreference(autoplayEnabled);
  }, [autoplayEnabled]);

  // On unmount / route change, never leave orphaned audio behind.
  useEffect(() => {
    const token = tokenRef.current;
    return () => {
      token.invalidate();
      playingRef.current = false;
      stopSpeech();
    };
  }, []);

  const stop = useCallback(() => {
    tokenRef.current.invalidate();
    playingRef.current = false;
    stopSpeech();
    setIsPlaying(false);
    setNeedsUserGesture(false);
  }, []);

  const play = useCallback(
    (slide?: SlideData) => {
      const target = slide ?? currentSlide;
      if (!lessonNumber || !target) return;

      const runId = tokenRef.current.next();
      playingRef.current = true;
      setIsPlaying(true);
      setNeedsUserGesture(false);

      const sequence = applyPlaybackRate(
        getSlideNarrativeSequence(target, lessonNumber),
        playbackRate
      );

      speakSequence(
        sequence,
        undefined,
        () => {
          if (tokenRef.current.isCurrent(runId)) {
            playingRef.current = false;
            setIsPlaying(false);
          }
        },
        () => !tokenRef.current.isCurrent(runId),
        () => {
          if (tokenRef.current.isCurrent(runId)) {
            playingRef.current = false;
            setIsPlaying(false);
            setNeedsUserGesture(true);
          }
        }
      );
    },
    [lessonNumber, currentSlide, playbackRate]
  );

  const toggle = useCallback(() => {
    if (playingRef.current) stop();
    else play();
  }, [play, stop]);

  const setAutoplay = useCallback(
    (enabled: boolean) => {
      setAutoplayEnabled(enabled);
      if (enabled) {
        // Start the current slide narration through this user gesture.
        play();
      } else {
        stop();
      }
    },
    [play, stop]
  );

  const setPlaybackRate = useCallback((rate: NarrationPlaybackRate) => {
    setPlaybackRateState(rate);
  }, []);

  return {
    isPlaying,
    autoplayEnabled,
    playbackRate,
    needsUserGesture,
    play,
    stop,
    toggle,
    setAutoplay,
    setPlaybackRate,
  };
}
