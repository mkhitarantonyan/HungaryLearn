import assert from 'node:assert/strict';
import test, { afterEach, beforeEach } from 'node:test';
import { existsSync, readFileSync } from 'node:fs';
import {
  playRecordedAudio,
  registerAudioFile,
  stopActiveAudio,
} from '../src/utils/audioRegistry.ts';
import { getSlideNarrativeSequence } from '../src/utils/slideNarrator.ts';
import type { SlideData } from '../src/types.ts';

type PlayBehavior = 'resolve' | 'reject';

class FakeAudio {
  static behavior: PlayBehavior = 'resolve';
  static instances: FakeAudio[] = [];

  preload = '';
  playbackRate = 1;
  currentTime = 0;
  onended: (() => void) | null = null;
  onerror: ((error: unknown) => void) | null = null;
  pauseCalls = 0;
  playCalls = 0;

  constructor(readonly src: string) {
    FakeAudio.instances.push(this);
  }

  pause(): void {
    this.pauseCalls += 1;
  }

  play(): Promise<void> {
    this.playCalls += 1;
    return FakeAudio.behavior === 'resolve'
      ? Promise.resolve()
      : Promise.reject(new Error('MP3 failed'));
  }
}

const originalAudio = globalThis.Audio;
const originalWindow = globalThis.window;
const originalLocalStorage = globalThis.localStorage;
const originalWarn = console.warn;
let synthesisCalls = 0;

beforeEach(() => {
  FakeAudio.behavior = 'resolve';
  FakeAudio.instances = [];
  synthesisCalls = 0;
  Object.defineProperty(globalThis, 'Audio', {
    configurable: true,
    value: FakeAudio as unknown as typeof Audio,
  });
  Object.defineProperty(globalThis, 'window', {
    configurable: true,
    value: {
      speechSynthesis: {
        speak: () => { synthesisCalls += 1; },
        cancel: () => { synthesisCalls += 1; },
      },
    },
  });
  Object.defineProperty(globalThis, 'localStorage', {
    configurable: true,
    value: {
      getItem: () => null,
      setItem: () => undefined,
      removeItem: () => undefined,
    },
  });
  console.warn = () => undefined;
});

afterEach(() => {
  stopActiveAudio();
  Object.defineProperty(globalThis, 'Audio', { configurable: true, value: originalAudio });
  Object.defineProperty(globalThis, 'window', { configurable: true, value: originalWindow });
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: originalLocalStorage });
  console.warn = originalWarn;
});

test('missing MP3 reports unavailable and never invokes speech synthesis', () => {
  let errors = 0;
  const started = playRecordedAudio('definitely-missing-recording', undefined, undefined, () => {
    errors += 1;
  });

  assert.equal(started, false);
  assert.equal(errors, 1);
  assert.equal(FakeAudio.instances.length, 0);
  assert.equal(synthesisCalls, 0);
});

test('failed MP3 reports unavailable and never invokes speech synthesis', async () => {
  registerAudioFile('test-failed-recording', '/audio/test-failed.mp3');
  FakeAudio.behavior = 'reject';
  let errors = 0;

  assert.equal(playRecordedAudio('test-failed-recording', 1, undefined, () => { errors += 1; }), true);
  await new Promise<void>((resolve) => setImmediate(resolve));

  assert.equal(errors, 1);
  assert.equal(FakeAudio.instances[0].playCalls, 1);
  assert.equal(synthesisCalls, 0);
});

test('existing MP3 plays normally with its playback rate', async () => {
  registerAudioFile('test-existing-recording', '/audio/test-existing.mp3');
  let ended = 0;

  assert.equal(playRecordedAudio('test-existing-recording', 1.2, () => { ended += 1; }), true);
  await Promise.resolve();
  const audio = FakeAudio.instances[0];
  assert.equal(audio.src, '/audio/test-existing.mp3');
  assert.equal(audio.playbackRate, 1.2);
  assert.equal(audio.playCalls, 1);
  audio.onended?.();
  assert.equal(ended, 1);
  assert.equal(synthesisCalls, 0);
});

test('listening tasks expose missing audio without a browser-speech fallback', () => {
  const source = readFileSync(new URL('../src/components/activities/ListeningTask.tsx', import.meta.url), 'utf8');
  assert.match(source, /До публикации записанного MP3 аудио недоступно/);
  assert.doesNotMatch(source, /speechSynthesis|SpeechSynthesisUtterance|speakText|playRecordedAudio/);
});

test('slide narration uses only a physically present recording and has no synthesized fallback', () => {
  const missingSlide = {
    id: 999,
    type: 'intro',
    title: 'Missing narration',
  } as SlideData;
  assert.deepEqual(getSlideNarrativeSequence(missingSlide, 999), []);

  const runtimeFiles = [
    '../src/utils/speech.ts',
    '../src/utils/audioRegistry.ts',
    '../src/utils/slideNarrator.ts',
    '../src/hooks/useLessonNarration.ts',
  ];
  for (const relativePath of runtimeFiles) {
    const url = new URL(relativePath, import.meta.url);
    assert.equal(existsSync(url), true);
    const source = readFileSync(url, 'utf8');
    assert.doesNotMatch(source, /speechSynthesis|SpeechSynthesisUtterance|fallbackSequence|\bTTS\b/);
  }
  assert.equal(synthesisCalls, 0);
});

test('obsolete browser voice settings UI is removed', () => {
  assert.equal(existsSync(new URL('../src/components/VoiceSettingsModal.tsx', import.meta.url)), false);
  const appSource = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
  assert.doesNotMatch(appSource, /VoiceSettings|voice settings/i);
});
