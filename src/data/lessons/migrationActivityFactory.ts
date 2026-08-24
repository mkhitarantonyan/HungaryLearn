import type {
  ControlledExercise,
  EvidenceKind,
  LessonActivity,
  ListeningQuestion,
  ReadingQuestion,
} from '../../types';

interface ObjectiveCheckConfig {
  objectiveId: string;
  activity: 'controlled' | 'reading' | 'listening' | 'writing' | 'recording';
  evidenceKind: EvidenceKind;
  evidenceComponents?: Array<{
    activity: 'controlled' | 'reading' | 'listening' | 'writing' | 'recording';
    evidenceKind: EvidenceKind;
  }>;
}

interface MigrationActivityConfig {
  lessonId: number;
  controlledTitle: string;
  controlledExercises: ControlledExercise[];
  controlledPassCount: number;
  readingTitle: string;
  readingParagraphs: string[];
  readingQuestions: ReadingQuestion[];
  readingPassCount: number;
  listeningTitle: string;
  listeningTranscript: string;
  listeningQuestions: ListeningQuestion[];
  listeningPassCount: number;
  writingTitle: string;
  writingPrompt: string;
  writingModel: string[];
  writingRubric: string[];
  recordingTitle: string;
  recordingInstructions: string;
  recordingTarget: string;
  objectiveChecks: ObjectiveCheckConfig[];
}

/**
 * Builds the shared migration sequence used after the frozen L15 pilot.
 * Dedicated comprehension audio intentionally remains unavailable until a
 * human recording is published; slide narration is never used as a substitute.
 */
export function createMigrationActivities(config: MigrationActivityConfig): LessonActivity[] {
  const prefix = `l${config.lessonId}`;
  const activityIds = {
    controlled: `${prefix}-cp-core`,
    reading: `${prefix}-reading-context`,
    listening: `${prefix}-listening-context`,
    writing: `${prefix}-writing-production`,
    recording: `${prefix}-recording-production`,
  } as const;

  const activities: LessonActivity[] = [
    {
      kind: 'controlledPractice',
      id: activityIds.controlled,
      title: config.controlledTitle,
      passCount: config.controlledPassCount,
      exercises: config.controlledExercises,
    },
    {
      kind: 'reading',
      id: activityIds.reading,
      title: config.readingTitle,
      instructions: 'Прочитай текст и ответь на вопросы по смыслу.',
      content: { type: 'prose', paragraphs: config.readingParagraphs },
      questions: config.readingQuestions,
      passCount: config.readingPassCount,
    },
    {
      kind: 'listening',
      id: activityIds.listening,
      title: config.listeningTitle,
      assetId: `${prefix}_listening_context`,
      audioStatus: 'published',
      transcript: config.listeningTranscript,
      questions: config.listeningQuestions,
      passCount: config.listeningPassCount,
    },
    {
      kind: 'writing',
      id: activityIds.writing,
      title: config.writingTitle,
      prompt: config.writingPrompt,
      modelAnswer: config.writingModel,
      rubric: config.writingRubric,
    },
    {
      kind: 'recording',
      id: activityIds.recording,
      title: config.recordingTitle,
      instructions: config.recordingInstructions,
      targetText: config.recordingTarget,
      rubric: ['Задача выполнена', 'Фразы связаны по смыслу', 'Целевые формы использованы уместно'],
    },
    {
      kind: 'exitCheck',
      id: `${prefix}-exit-check`,
      title: 'Проверка целей урока',
      checks: config.objectiveChecks.map((check) => ({
        objectiveId: check.objectiveId,
        activityId: activityIds[check.activity],
        evidenceKind: check.evidenceKind,
        evidenceComponents: check.evidenceComponents?.map((component) => ({
          activityId: activityIds[component.activity],
          evidenceKind: component.evidenceKind,
        })),
      })),
    },
  ];

  return activities;
}
