import test from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { LessonMeta } from '../src/types.ts';
import { LessonList, determineCurrentLesson } from '../src/components/LessonList.tsx';
import {
  getLessonResumeSlideIndex,
  mergeLessonResumePositions,
  parseLessonResumePositions,
  sanitizeLessonResumePositions,
} from '../src/utils/lessonResume.ts';
import {
  emptyProgressData,
  mergeProgressData,
  readCachedProgress,
  writeCachedProgress,
} from '../src/utils/userStore.ts';
import { mergeProgressState } from '../functions/src/progress/model.ts';

const lessons: LessonMeta[] = [1, 2].map((number) => ({
  id: number,
  number,
  level: 'A0',
  title: `Урок ${number} · Тема ${number}`,
  subtitle: `Описание ${number}`,
  description: `Урок ${number}`,
  slidesCount: 11,
}));

test('resume payload validation accepts only bounded matching lesson positions', () => {
  assert.deepEqual(parseLessonResumePositions({
    2: { lessonNumber: 2, slideId: 7, updatedAt: 1234 },
  }), {
    2: { lessonNumber: 2, slideId: 7, updatedAt: 1234 },
  });
  assert.equal(parseLessonResumePositions({ 2: { lessonNumber: 3, slideId: 7, updatedAt: 1234 } }), null);
  assert.equal(parseLessonResumePositions({ 2: { lessonNumber: 2, slideId: 0, updatedAt: 1234 } }), null);
  assert.equal(parseLessonResumePositions({ 2: { lessonNumber: 2, slideId: 7, updatedAt: 1234, admin: true } }), null);
  assert.deepEqual(sanitizeLessonResumePositions({
    2: { lessonNumber: 2, slideId: 7, updatedAt: 1234 },
    broken: { lessonNumber: 1, slideId: 999, updatedAt: 1 },
  }), {
    2: { lessonNumber: 2, slideId: 7, updatedAt: 1234 },
  });
});

test('newest position wins independently for every lesson across cache and server data', () => {
  const local = {
    1: { lessonNumber: 1, slideId: 3, updatedAt: 100 },
    2: { lessonNumber: 2, slideId: 4, updatedAt: 300 },
  };
  const server = {
    1: { lessonNumber: 1, slideId: 8, updatedAt: 200 },
    2: { lessonNumber: 2, slideId: 2, updatedAt: 250 },
  };
  assert.deepEqual(mergeLessonResumePositions(local, server), {
    1: server[1],
    2: local[2],
  });

  const mergedServerState = mergeProgressState(
    { viewedSlides: [], passedQuizzes: [], activityEvidence: {}, reviewCards: {}, resumePositions: local },
    { resumePositions: server },
  );
  assert.deepEqual(mergedServerState.resumePositions, { 1: server[1], 2: local[2] });
});

test('resume positions survive local storage and normal progress hydration', () => {
  const values = new Map<string, string>();
  const storage = {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => void values.set(key, value),
  };
  const local = {
    ...emptyProgressData(),
    resumePositions: { 2: { lessonNumber: 2, slideId: 6, updatedAt: 500 } },
  };
  writeCachedProgress('student', local, storage);
  assert.deepEqual(readCachedProgress('student', storage).resumePositions, local.resumePositions);

  const hydrated = mergeProgressData(
    local,
    { ...emptyProgressData(), resumePositions: { 2: { lessonNumber: 2, slideId: 9, updatedAt: 600 } } },
  );
  assert.equal(hydrated.resumePositions?.[2].slideId, 9);
});

test('opening a lesson resolves the exact saved slide and safely falls back when it no longer exists', () => {
  const slides = [{ id: 1 }, { id: 3 }, { id: 8 }];
  assert.equal(getLessonResumeSlideIndex(2, slides, {
    2: { lessonNumber: 2, slideId: 8, updatedAt: 10 },
  }), 2);
  assert.equal(getLessonResumeSlideIndex(2, slides, {
    2: { lessonNumber: 2, slideId: 7, updatedAt: 10 },
  }), 0);
});

test('continue learning chooses the latest accessible unfinished lesson even before an activity is completed', () => {
  const resumePositions = {
    1: { lessonNumber: 1, slideId: 8, updatedAt: 100 },
    2: { lessonNumber: 2, slideId: 4, updatedAt: 200 },
  };
  const current = determineCurrentLesson(lessons, {}, [], resumePositions, () => true);
  assert.equal(current?.lesson.number, 2);
  assert.equal(current?.status, 'not_started');
  assert.equal(current?.resumePosition?.slideId, 4);

  const markup = renderToStaticMarkup(React.createElement(LessonList, {
    lessons,
    onSelectLesson: () => undefined,
    onOpenAdmin: () => undefined,
    isAdmin: true,
    passedQuizzes: [],
    activityEvidence: {},
    resumePositions,
  }));
  assert.match(markup, /Продолжить с шага 4 из 11/);
  assert.match(markup, /Продолжить урок/);
});
