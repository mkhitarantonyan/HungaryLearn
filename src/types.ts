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
  // Optional interactive activities (pilot: lesson 15). Lessons 1–14 and 16–28
  // do not define activities and continue to render as before.
  activities?: LessonActivity[];
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
  objectives?: LearningObjective[];   // <-- ДОБАВЛЕНА ЭТА СТРОЧКА
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
  srsEligible?: boolean;
  srsExclusionReason?: string;
}

export interface VocabularyLexeme {
  id: string;
  lemma: string;
  translation: string;
  lessonIntroduced: number;
  usedInLessons: number[];
  forms: string[];
}

export interface VocabularyCard extends VocabularyItem {
  lexemeId: string;
  lessonIntroduced: number;
  usedInLessons: number[];
  sourceVocabularyIds: string[];
}

export interface VocabularyInventoryEntry extends VocabularyItem {
  lessonNumber: number;
  curriculumOrder: number;
  lemma: string;
  lexemeId: string;
  cardId: string | null;
  srsEligible: boolean;
  srsExclusionReason?: string;
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

export type Skill = 'listening' | 'pronunciation' | 'reading' | 'speaking' | 'writing' | 'grammar' | 'interaction';

export interface LearningObjective {
  id: string;
  text: string;
  skills: Skill[];
}

// =====================================================================
// Lesson Activity System (pilot: lesson 15 — Integrated Communication)
// Backward-compatible: activities are optional on SlideData, so old
// lessons render exactly as before.
// =====================================================================

export type EvidenceKind =
  | 'reading'
  | 'listening'
  | 'grammar'
  | 'vocabulary'
  | 'speaking'
  | 'interaction'
  | 'writing'
  | 'pronunciation';

export type EvidenceMode = 'direct' | 'partial' | 'none';

export interface ActivityEvidence {
  activityId: string;
  attempted: boolean;
  completed: boolean;
  evidenceMode: EvidenceMode;
  passed: boolean;
  score?: number;
  total?: number;
  selfReviewed?: boolean;
  recordingCompleted?: boolean;
}

/**
 * Session-only (in-memory) runtime state for unfinished activity work.
 * Kept strictly separate from ActivityEvidence:
 *   - evidence = a finished result (score/pass/completion);
 *   - runtime  = in-progress draft that must survive slide navigation.
 * Never persisted to the server.
 */
export interface ActivityRuntimeState {
  rolePlayCurrentTurnId?: string;
  writingDraft?: string;
  writingRubric?: Record<string, boolean>;
}

export interface ReadingQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

/** Exact-entry question available only inside a listening stimulus. */
export interface ListeningTextInputQuestion {
  kind: 'textInput';
  id: string;
  question: string;
  accept: string[];
  explanation?: string;
}

/** Backward-compatible listening question model: legacy choice or exact entry. */
export type ListeningQuestion = ReadingQuestion | ListeningTextInputQuestion;

export interface MenuItemData {
  id: string;
  name: string;
  price: number; // forint
  vegetarian?: boolean;
}

export interface MenuSectionData {
  id: string;
  title: string;
  items: MenuItemData[];
}

/** Restaurant-menu content used by the frozen L15 ReadingTask. */
export interface MenuReadingContent {
  type: 'menu';
  legend?: string;
  sections: MenuSectionData[];
}

/** Generic safe prose content for paragraphs, notices, messages and descriptions. */
export interface ProseReadingContent {
  type: 'prose';
  title?: string;
  paragraphs: string[];
}

export type ReadingContent = MenuReadingContent | ProseReadingContent;

interface ReadingTaskBaseData {
  kind: 'reading';
  id: string;
  title?: string;
  instructions?: string;
  questions: ReadingQuestion[];
}

/**
 * Backward-compatible L15 menu shape.
 *
 * L15 remains frozen with top-level legend/sections. New reading tasks should
 * use ContentReadingTaskData instead of copying this legacy layout.
 */
export interface LegacyMenuReadingTaskData extends ReadingTaskBaseData {
  content?: never;
  legend?: string;
  passCount?: number;
  sections: MenuSectionData[];
}

/** New discriminated reading shape. passCount is explicit evidence policy. */
export interface ContentReadingTaskData extends ReadingTaskBaseData {
  content: ReadingContent;
  legend?: never;
  passCount: number;
  sections?: never;
}

export type ReadingTaskData = LegacyMenuReadingTaskData | ContentReadingTaskData;

export type AudioAssetStatus = 'published' | 'missing';

export interface ListeningTaskData {
  kind: 'listening';
  id: string;
  title?: string;
  assetId: string;
  audioStatus: AudioAssetStatus;
  transcript: string;
  passCount?: number;
  questions: ListeningQuestion[];
}

export type ControlledExercise =
  | {
      kind: 'singleChoice';
      id: string;
      prompt: string;
      options: string[];
      correctIndex: number;
      explanation?: string;
    }
  | {
      kind: 'fillGap';
      id: string;
      prompt: string;
      accept: string[];
      explanation?: string;
    }
  | {
      kind: 'textInput';
      id: string;
      prompt: string;
      accept: string[];
      explanation?: string;
    };

export interface ControlledPracticeData {
  kind: 'controlledPractice';
  id: string;
  title?: string;
  passCount?: number;
  exercises: ControlledExercise[];
}

/** Generic unscored pronunciation/read-aloud recording activity. */
export interface RecordingTaskData {
  kind: 'recording';
  id: string;
  title?: string;
  instructions?: string;
  targetText: string;
  targetPhonetic?: string;
  targetTranslation?: string;
  rubric?: string[];
}

export type RolePlaySpeaker = 'waiter' | 'learner' | 'stage';
export type RolePlayResponseMode = 'choice' | 'recorded' | 'systemCategory';

export interface RolePlayBranch {
  choice?: string;
  condition?: string;
  correct?: boolean;
  feedback?: string;
  nextTurnId: string;
}

export interface RolePlayTurn {
  id: string;
  speaker: RolePlaySpeaker;
  prompt?: string;
  stageLabel?: string; // used when speaker === 'stage'
  responseMode?: RolePlayResponseMode; // learner turns
  options?: string[]; // used when responseMode === 'choice'
  model?: string; // model sentence shown before a learner response
  next?: string; // linear next turn
  branches?: RolePlayBranch[]; // choice branching
}

export interface RolePlayData {
  kind: 'rolePlay';
  id: string;
  title?: string;
  /** Label for the non-learner speaker; defaults to the original waiter label. */
  partnerLabel?: string;
  /** Lesson-neutral completion copy; defaults to the original restaurant copy. */
  completionMessage?: string;
  startTurnId: string;
  turns: RolePlayTurn[];
}

export interface WritingTaskData {
  kind: 'writing';
  id: string;
  title?: string;
  prompt: string;
  modelAnswer: string[];
  rubric: string[];
}

export interface ExitCheckItem {
  objectiveId: string;
  activityId: string;
  evidenceKind: EvidenceKind;
  /** Additional qualifying evidence producers required by the same objective. */
  evidenceComponents?: ExitCheckEvidenceComponent[];
  /** Components practised in the lesson but not backed by qualifying ActivityEvidence. */
  practiceComponents?: EvidenceKind[];
}

export interface ExitCheckEvidenceComponent {
  activityId: string;
  evidenceKind: EvidenceKind;
}

export interface ExitCheckData {
  kind: 'exitCheck';
  id: string;
  title?: string;
  checks: ExitCheckItem[];
}

export type LessonActivity =
  | ReadingTaskData
  | ListeningTaskData
  | ControlledPracticeData
  | RecordingTaskData
  | RolePlayData
  | WritingTaskData
  | ExitCheckData;
