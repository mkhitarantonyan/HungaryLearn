import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Header } from '../src/components/Header.tsx';
import { NarrationPlayer } from '../src/components/NarrationPlayer.tsx';
import { LessonProgress } from '../src/components/LessonProgress.tsx';
import { Navigation } from '../src/components/Navigation.tsx';
import { LessonList } from '../src/components/LessonList.tsx';
import { AUTOPLAY_STORAGE_KEY, readAutoplayPreference, writeAutoplayPreference } from '../src/utils/narrationPrefs.ts';
import { NarrationRunToken } from '../src/utils/narrationRunToken.ts';
import { getSlideNarrativeSequence } from '../src/utils/slideNarrator.ts';
import { getAudioFileUrl } from '../src/utils/audioRegistry.ts';
import { PRESENT_SLIDE_AUDIO, SLIDE_AUDIO_VERSIONS } from '../src/data/slideAudioManifest.ts';
import { LESSONS_META, loadLesson } from '../src/data/lessons/index.ts';
import { LESSON_1 } from '../src/data/lessons/lesson1.ts';
import { LESSON_6 } from '../src/data/lessons/lesson6.ts';
import { LESSON_15 } from '../src/data/lessons/lesson15.ts';
import type { Lesson } from '../src/types.ts';

function makeStorage(): Pick<Storage, 'getItem' | 'setItem'> & { snapshot(): string[] } {
  const map = new Map<string, string>();
  return {
    getItem: (key) => map.get(key) ?? null,
    setItem: (key, value) => {
      map.set(key, value);
    },
    snapshot: () => Array.from(map.keys()),
  };
}

test('narration autoplay preference defaults OFF and persists ON/OFF', () => {
  const storage = makeStorage();
  assert.equal(AUTOPLAY_STORAGE_KEY, 'hungarylearn:narration-autoplay:v1');
  assert.equal(readAutoplayPreference(storage), false);
  writeAutoplayPreference(true, storage);
  assert.equal(readAutoplayPreference(storage), true);
  writeAutoplayPreference(false, storage);
  assert.equal(readAutoplayPreference(storage), false);
  assert.deepEqual(storage.snapshot(), [AUTOPLAY_STORAGE_KEY]);
});

test('slide narration never references assessment listening assets', () => {
  const cases = [
    [LESSON_1, 1],
    [LESSON_6, 6],
    [LESSON_15, 15],
  ] as const;
  for (const [lesson, number] of cases) {
    for (const slide of lesson.slides) {
      const sequence = getSlideNarrativeSequence(slide, number);
      for (const item of sequence) {
        assert.doesNotMatch(item.key.toLowerCase(), /l\d+_listening_/, `slide ${number}.${slide.id}`);
      }
    }
  }
});

test('slide narration does not read a hidden listening transcript or its answers', () => {
  const listeningSlide = LESSON_6.slides.find((slide) => slide.id === 6);
  assert.ok(listeningSlide);
  const joined = getSlideNarrativeSequence(listeningSlide, 6)
    .map((item) => item.key)
    .join(' ');
  assert.doesNotMatch(joined, /Mikor tanulsz magyarul/);
  assert.doesNotMatch(joined, /Kedden öt órakor tanulok/);
  assert.doesNotMatch(joined, /Szombaton háromkor olvasok/);
});

test('every course slide resolves only its own versioned narration file', async () => {
  let slideCount = 0;
  const expectedManifestKeys = new Set<string>();

  for (const meta of LESSONS_META) {
    const lesson = await loadLesson(meta.number);
    assert.ok(lesson, `lesson ${meta.number} failed to load`);
    for (const slide of lesson.slides) {
      slideCount += 1;
      const manifestKey: string = `${lesson.number}.${slide.id}`;
      const narrationKey: string = `l${lesson.number}_s${slide.id}`;
      expectedManifestKeys.add(manifestKey);

      assert.equal(PRESENT_SLIDE_AUDIO[manifestKey], true, `missing narration for ${manifestKey}`);
      assert.match(SLIDE_AUDIO_VERSIONS[manifestKey] ?? '', /^[a-f0-9]{12}$/);
      assert.deepEqual(getSlideNarrativeSequence(slide, lesson.number), [{ key: narrationKey }]);

      const url = getAudioFileUrl(narrationKey);
      assert.ok(url, `missing audio URL for ${manifestKey}`);
      assert.match(
        url,
        new RegExp(`/audio/${lesson.number}\\.${slide.id}\\.mp3\\?v=${SLIDE_AUDIO_VERSIONS[manifestKey]}$`)
      );
    }
  }

  assert.equal(slideCount, 308);
  // P2/P3/P4/P5 keep physical 8.12/13.12/15.12/16.12/18.12/20.12 narration MP3 files byte-identical
  // after those lessons return to the 11-slide course identity. Runtime slides
  // must all resolve; preserved orphan files may remain harmlessly in the manifest.
  assert.ok([...expectedManifestKeys].every((key) => key in SLIDE_AUDIO_VERSIONS));
});

test('Header no longer renders Слова/Перевод/Тест and shows progress + outline', () => {
  const markup = renderToStaticMarkup(
    React.createElement(Header, {
      lessonNumber: 6,
      lessonLevel: 'A0',
      lessonTitle: 'Урок 6 · A0 összefoglaló',
      currentSlide: 3,
      totalSlides: 10,
      onOpenDrawer: () => undefined,
      onOpenAdmin: () => undefined,
      onOpenUserModal: () => undefined,
      onBackToLessons: () => undefined,
    })
  );
  assert.doesNotMatch(markup, /Слова|Перевод|Тест/);
  assert.match(markup, /Содержание/);
  assert.match(markup, /A0 összefoglaló/);
  assert.match(markup, /4 из 10/);
});

test('NarrationPlayer exposes play, autoplay toggle, and speed', () => {
  const markup = renderToStaticMarkup(
    React.createElement(NarrationPlayer, {
      isPlaying: false,
      autoplayEnabled: false,
      playbackRate: 1,
      needsUserGesture: false,
      audioUnavailable: false,
      slideLabel: '4 · Jelen idő',
      onPlayPause: () => undefined,
      onToggleAutoplay: () => undefined,
      onSetPlaybackRate: () => undefined,
      isAdmin: false,
    })
  );
  assert.match(markup, /Пересказать слайд/);
  assert.match(markup, /Пересказ слайда/);
  assert.match(markup, /aria-pressed="false"/);
  assert.match(markup, /1×/);
  assert.match(markup, /Скорость воспроизведения/);
});

test('Navigation uses a retrieval-checkpoint CTA on the final slide', () => {
  const markup = renderToStaticMarkup(
    React.createElement(Navigation, {
      currentSlide: 9,
      totalSlides: 10,
      onPrev: () => undefined,
      onNext: () => undefined,
      onFinish: () => undefined,
    })
  );
  assert.match(markup, /Проверить себя/);
  assert.doesNotMatch(markup, /Сдать экзамен/);
});

test('LessonProgress exposes accessible progress semantics', () => {
  const markup = renderToStaticMarkup(
    React.createElement(LessonProgress, { current: 3, total: 10 })
  );
  assert.match(markup, /role="progressbar"/);
  assert.match(markup, /aria-valuenow="4"/);
  assert.match(markup, /4 из 10/);
});

test('run-token stale callbacks cannot mutate the current run', () => {
  const token = new NarrationRunToken();
  const runA = token.next();
  assert.equal(token.isCurrent(runA), true);
  const runB = token.next();
  assert.equal(token.isCurrent(runA), false);
  assert.equal(token.isCurrent(runB), true);
  token.invalidate();
  assert.equal(token.isCurrent(runB), false);
});

test('translation modal blocks global slide keyboard navigation', () => {
  const source = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
  assert.match(source, /else if \(isTranslationsOpen\) setIsTranslationsOpen\(false\)/);
  assert.match(source, /isDrawerOpen \|\|\s*\n\s*isTranslationsOpen/);
  assert.match(source, /isTranslationsOpen,\s*\n\s*isTrainerOpen/);
});

test('navigation handlers are dependency-safe and use latest playback rate', () => {
  const appSource = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
  assert.match(appSource, /const handleNext = useCallback\(/);
  assert.match(appSource, /const handlePrev = useCallback\(/);
  assert.doesNotMatch(appSource, /eslint-disable/);
  assert.match(appSource, /viewMode,\s*\n\s*handleNext,\s*\n\s*handlePrev,/);

  const hookSource = readFileSync(new URL('../src/hooks/useLessonNarration.ts', import.meta.url), 'utf8');
  assert.match(hookSource, /\[lessonNumber, currentSlide, playbackRate\]/);
  assert.match(hookSource, /applyPlaybackRate\(/);
});

test('learning path level ranges are 1–6 / 7–14 / 15–20 / 21–28', () => {
  const makeLesson = (number: number, level: Lesson['level']): Lesson => ({
    id: number,
    number,
    level,
    title: `Урок ${number}`,
    subtitle: 'Подзаголовок',
    description: 'Описание',
    slidesCount: 10,
    slides: [],
  });

  const markup = renderToStaticMarkup(
    React.createElement(LessonList, {
      lessons: [makeLesson(1, 'A0'), makeLesson(7, 'A1'), makeLesson(15, 'A2'), makeLesson(21, 'B1')],
      onSelectLesson: () => undefined,
      onOpenAdmin: () => undefined,
      isAdmin: false,
      viewedSlideIds: [],
      passedQuizzes: [],
      dueReviewCount: 0,
    })
  );

  assert.match(markup, /уроки 1–6/);
  assert.match(markup, /уроки 7–14/);
  assert.match(markup, /уроки 15–20/);
  assert.match(markup, /уроки 21–28/);
  assert.doesNotMatch(markup, /уроки 7–13/);
  assert.doesNotMatch(markup, /уроки 14–20/);
  assert.doesNotMatch(markup, /Освоено/);
  assert.match(markup, /Начать/);
});
