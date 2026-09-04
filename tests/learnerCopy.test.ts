import assert from 'node:assert/strict';
import test from 'node:test';
import {
  containsLearnerMetaLanguage,
  humanizeLearnerHtml,
  humanizeLearnerText,
} from '../src/utils/learnerCopy.ts';

test('learner copy removes internal assessment jargon', () => {
  const samples = [
    'Writing остаётся PARTIAL до квалифицированной проверки.',
    'Самопрактика не использует микрофон, не оценивается и не создаёт evidence.',
    'Controlled Practice, Reading и Listening могут дать DIRECT после порога.',
    'Quiz или завершение урока не означает автоматически «A1 achieved» и не является CEFR-сертификацией.',
    'Optional speaking — только текстовая self-practice без микрофона, score и evidence.',
  ];

  for (const sample of samples) {
    assert.equal(containsLearnerMetaLanguage(sample), true);
    const visible = humanizeLearnerText(sample);
    assert.doesNotMatch(
      visible,
      /\b(?:PARTIAL|DIRECT|NONE|evidence|score)\b|CEFR-сертификац|A[012]\s+achieved/iu
    );
  }
});

test('learner HTML keeps markup while humanizing visible copy', () => {
  const source = '<div class="note">Writing остаётся PARTIAL до квалифицированной проверки.</div>';
  const result = humanizeLearnerHtml(source);
  assert.match(result, /<div class="note">/);
  assert.match(result, /преподавателем или носителем/);
  assert.doesNotMatch(result, /PARTIAL/);
});