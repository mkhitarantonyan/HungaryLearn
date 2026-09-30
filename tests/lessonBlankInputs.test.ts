import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { makeLearnerBlanksInteractive } from '../src/utils/learnerCopy';

test('legacy underscore answer lines become keyboard-editable inputs', () => {
  const html = '<table><tr><td>én</td><td>_____</td></tr></table><p>A nevem __________.</p>';
  const result = makeLearnerBlanksInteractive(html, 'Answer field');

  assert.equal((result.match(/<input /g) ?? []).length, 2);
  assert.match(result, /class="lesson-inline-answer lesson-inline-answer--short"/);
  assert.match(result, /class="lesson-inline-answer lesson-inline-answer--medium"/);
  assert.match(result, /aria-label="Answer field"/);
  assert.match(result, /data-lesson-blank/);
  assert.doesNotMatch(result, /_{3,}/);
});

test('blank conversion never rewrites tag attributes and escapes its accessible label', () => {
  const result = makeLearnerBlanksInteractive(
    '<span data-template="_____">_____</span>',
    'Answer "here" & continue',
  );

  assert.match(result, /data-template="_____"/);
  assert.match(result, /aria-label="Answer &quot;here&quot; &amp; continue"/);
  assert.equal((result.match(/<input /g) ?? []).length, 1);
});

test('the Lesson 2 table shown to learners is handled by the shared slide renderer', () => {
  const lesson2 = readFileSync(new URL('../src/data/lessons/lesson2.ts', import.meta.url), 'utf8');
  const slideContent = readFileSync(new URL('../src/components/SlideContent.tsx', import.meta.url), 'utf8');

  assert.match(lesson2, /<tr><td>én<\/td><td>_____<\/td><\/tr>/);
  assert.match(slideContent, /makeLearnerBlanksInteractive/);
  assert.match(slideContent, /DOMPurify\.sanitize/);
});
