import { useCallback, useEffect, useRef, useState } from 'react';
import type { SlideData } from '../types';
import { getSlideNarrativeSequence } from '../utils/slideNarrator';
import {
  playNarrationSequence,
  stopNarrationAudio,
  type RecordedAudioItem,
} from '../utils/speech';
import { readAutoplayPreference, writeAutoplayPreference } from '../utils/narrationPrefs';
import { NarrationRunToken } from '../utils/narrationRunToken';
import { isNarrationAvailable } from '../config/narration';
import { useI18n } from '../i18n';

export type NarrationPlaybackRate = 0.8 | 1 | 1.2;

export const NARRATION_PLAYBACK_RATES: NarrationPlaybackRate[] = [0.8, 1, 1.2];

export interface LessonNarration {
  available: boolean;
  isPlaying: boolean;
  autoplayEnabled: boolean;
  playbackRate: NarrationPlaybackRate;
  needsUserGesture: boolean;
  audioUnavailable: boolean;
  play: (slide?: SlideData) => void;
  stop: () => void;
  toggle: () => void;
  setAutoplay: (enabled: boolean) => void;
  setPlaybackRate: (rate: NarrationPlaybackRate) => void;
}

/**
 * Applies the selected playback speed to prerecorded narration.
 */
function applyPlaybackRate(sequence: RecordedAudioItem[], rate: number): RecordedAudioItem[] {
  return sequence.map((item) => ({ ...item, rate }));
}

export function useLessonNarration(
  lessonNumber: number | undefined,
  currentSlide: SlideData | undefined
): LessonNarration {
  const { language } = useI18n();
  const available = isNarrationAvailable(language);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState<boolean>(() => readAutoplayPreference());
  const [playbackRate, setPlaybackRateState] = useState<NarrationPlaybackRate>(1);
  const [needsUserGesture, setNeedsUserGesture] = useState(false);
  const [audioUnavailable, setAudioUnavailable] = useState(false);

  // A run token invalidates stale audio callbacks after stop()/play().
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
      stopNarrationAudio();
    };
  }, []);

  const stop = useCallback(() => {
    tokenRef.current.invalidate();
    playingRef.current = false;
    stopNarrationAudio();
    setIsPlaying(false);
    setNeedsUserGesture(false);
    setAudioUnavailable(false);
  }, []);

  useEffect(() => {
    if (available) return;
    tokenRef.current.invalidate();
    playingRef.current = false;
    stopNarrationAudio();
    setIsPlaying(false);
    setNeedsUserGesture(false);
    setAudioUnavailable(false);
    setAutoplayEnabled(false);
  }, [available, language]);

  const play = useCallback(
    (slide?: SlideData) => {
      const target = slide ?? currentSlide;
      if (!available || !lessonNumber || !target) return;

      const runId = tokenRef.current.next();
      playingRef.current = true;
      setIsPlaying(true);
      setNeedsUserGesture(false);
      setAudioUnavailable(false);

      const sequence = applyPlaybackRate(
        getSlideNarrativeSequence(target, lessonNumber, language),
        playbackRate
      );

      playNarrationSequence(
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
        },
        () => {
          if (tokenRef.current.isCurrent(runId)) {
            playingRef.current = false;
            setIsPlaying(false);
            setAudioUnavailable(true);
          }
        }
      );
    },
    [available, lessonNumber, currentSlide, language, playbackRate]
  );

  const toggle = useCallback(() => {
    if (playingRef.current) stop();
    else play();
  }, [play, stop]);

  const setAutoplay = useCallback(
    (enabled: boolean) => {
      if (!available) {
        setAutoplayEnabled(false);
        stop();
        return;
      }
      setAutoplayEnabled(enabled);
      if (enabled) {
        // Start the current slide narration through this user gesture.
        play();
      } else {
        stop();
      }
    },
    [available, play, stop]
  );

  const setPlaybackRate = useCallback((rate: NarrationPlaybackRate) => {
    setPlaybackRateState(rate);
  }, []);

  return {
    available,
    isPlaying,
    autoplayEnabled,
    playbackRate,
    needsUserGesture,
    audioUnavailable,
    play,
    stop,
    toggle,
    setAutoplay,
    setPlaybackRate,
  };
}
