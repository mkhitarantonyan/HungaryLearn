import type { ContentReadingTaskData } from '../../src/types.ts';

/**
 * Infrastructure-only prose fixture. It is intentionally not referenced by a
 * lesson module.
 */
export const PROSE_READING_FIXTURE: ContentReadingTaskData = {
  kind: 'reading',
  id: 'fixture-reading-prose',
  title: 'Generic prose reading',
  instructions: 'Read the notice and answer the questions.',
  passCount: 2,
  content: {
    type: 'prose',
    title: 'Library notice',
    paragraphs: [
      'The library opens at nine o’clock on weekdays.',
      'On Saturday it closes at one o’clock. The library is closed on Sunday.',
    ],
  },
  questions: [
    {
      id: 'fixture-prose-q1',
      question: 'When does the library open on weekdays?',
      options: ['At eight', 'At nine', 'At ten'],
      correctIndex: 1,
    },
    {
      id: 'fixture-prose-q2',
      question: 'When does the library close on Saturday?',
      options: ['At one', 'At three', 'At five'],
      correctIndex: 0,
    },
    {
      id: 'fixture-prose-q3',
      question: 'Which day is the library closed?',
      options: ['Friday', 'Saturday', 'Sunday'],
      correctIndex: 2,
    },
  ],
};
