import type {
  ControlledExercise,
  EvidenceKind,
  LessonActivity,
  ListeningQuestion,
  ListeningTaskData,
  ReadingQuestion,
  RolePlayData,
} from '../../types';

type MigrationActivityKey = 'controlled' | 'reading' | 'listening' | 'listeningB' | 'roleplay' | 'roleplayB' | 'writing';

interface ObjectiveCheckConfig {
  objectiveId: string;
  activity: MigrationActivityKey;
  evidenceKind: EvidenceKind;
  evidenceComponents?: Array<{
    activity: MigrationActivityKey;
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
  listeningB?: Omit<ListeningTaskData, 'kind' | 'id'>;
  writingTitle: string;
  writingPrompt: string;
  writingModel: string[];
  writingRubric: string[];
  rolePlay?: Omit<RolePlayData, 'kind' | 'id'>;
  rolePlayB?: Omit<RolePlayData, 'kind' | 'id'>;
  activitySequence?: 'communication';
  objectiveChecks: ObjectiveCheckConfig[];
}

/**
 * Builds the shared migration sequence used after the frozen L15 pilot.
 * Dedicated comprehension audio intentionally remains unavailable until a
 * a human-produced MP3 is published; slide narration is never used as a substitute.
 */
export function createMigrationActivities(config: MigrationActivityConfig): LessonActivity[] {
  const prefix = `l${config.lessonId}`;
  const activityIds = {
    controlled: `${prefix}-cp-core`,
    reading: `${prefix}-reading-context`,
    listening: `${prefix}-listening-context`,
    listeningB: `${prefix}-listening-b-context`,
    roleplay: `${prefix}-roleplay-interaction`,
    roleplayB: `${prefix}-roleplay-interaction-2`,
    writing: `${prefix}-writing-production`,
  } as const;

  const controlledActivity: LessonActivity = {
      kind: 'controlledPractice',
      id: activityIds.controlled,
      title: config.controlledTitle,
      passCount: config.controlledPassCount,
      exercises: config.controlledExercises,
    };
  const readingActivity: LessonActivity = {
      kind: 'reading',
      id: activityIds.reading,
      title: config.readingTitle,
      instructions: 'Прочитай текст и ответь на вопросы по смыслу.',
      content: { type: 'prose', paragraphs: config.readingParagraphs },
      questions: config.readingQuestions,
      passCount: config.readingPassCount,
    };
  const listeningActivity: LessonActivity = {
      kind: 'listening',
      id: activityIds.listening,
      title: config.listeningTitle,
      assetId: `${prefix}_listening_context`,
      audioStatus: 'published',
      transcript: config.listeningTranscript,
      questions: config.listeningQuestions,
      passCount: config.listeningPassCount,
    };
  const rolePlayActivities: LessonActivity[] = [
    ...(config.listeningB ? [{
      ...config.listeningB,
      kind: 'listening' as const,
      id: activityIds.listeningB,
    }] : []),
    ...(config.rolePlay ? [{
      kind: 'rolePlay' as const,
      id: activityIds.roleplay,
      ...config.rolePlay,
    }] : []),
    ...(config.rolePlayB ? [{
      kind: 'rolePlay' as const,
      id: activityIds.roleplayB,
      ...config.rolePlayB,
    }] : []),
  ];
  const writingActivity: LessonActivity = {
      kind: 'writing',
      id: activityIds.writing,
      title: config.writingTitle,
      prompt: config.writingPrompt,
      modelAnswer: config.writingModel,
      rubric: config.writingRubric,
    };
  const exitActivity: LessonActivity = {
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
    };

  const activities: LessonActivity[] = config.activitySequence === 'communication'
    ? [readingActivity, controlledActivity, listeningActivity, ...rolePlayActivities, writingActivity, exitActivity]
    : [controlledActivity, readingActivity, listeningActivity, ...rolePlayActivities, writingActivity, exitActivity];

  return activities;
}
