export interface SlideData {
  id: number;
  eyebrow: string;
  title: string;
  subtitle: string;
  type?: 'intro' | 'info' | 'vowels-short' | 'vowels-long' | 'consonants-soft' | 'consonants-sibilants' | 'consonants-double' | 'stress' | 'words-practice' | 'sentence-reading' | 'summary' | string;
  body?: string;
  note?: string;
  warn?: string;
  task?: string;
  category?: string;
  targetText?: string;
  targetPhonetic?: string;
  targetTranslation?: string;
}

export interface LessonMeta {
  id: number;
  number: number;
  level: 'A0' | 'A1' | 'A2' | 'B1';
  title: string;
  subtitle: string;
  description: string;
  slidesCount: number;
}

export interface Lesson extends LessonMeta {
  slides: SlideData[];
  vocabulary?: VocabularyItem[];
  quiz?: QuizQuestion[];
}

export interface VocabularyItem {
  id: string;
  hu: string;
  ru: string;
  phonetic?: string;
  ipa?: string;
  category: string;
  exampleSentence?: string;
  audioText?: string;
  baseWord?: string;
  grammaticalTag?: string;
  relatedLessonId?: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TranslationItem {
  id: string;
  lessonNumber: number;
  direction: 'hu-to-ru' | 'ru-to-hu';
  sourceText: string;
  targetText: string;
  acceptableVariants?: string[];
  grammaticalTag?: string;
  relatedLessonId?: number;
}

export type ReviewGrade = 'again' | 'hard' | 'good' | 'easy';

export interface ReviewCardState {
  cardId: string;
  lessonNumber: number;
  intervalDays: number;
  easeFactor: number;
  reps: number;
  dueDate: string;
  lastReviewedAt: string | null;
}

export interface DueReviewCard {
  state: ReviewCardState;
  hu: string;
  ru: string;
  phonetic?: string;
  exampleSentence?: string;
  lessonNumber: number;
  lessonTitle: string;
  baseWord?: string;
  grammaticalTag?: string;
  relatedLessonId?: number;
}
