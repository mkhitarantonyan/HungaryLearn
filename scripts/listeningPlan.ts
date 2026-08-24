import { existsSync } from 'node:fs';
import path from 'node:path';
import { LESSONS_META, loadLesson } from '../src/data/lessons/index';
import type {
  AudioAssetStatus,
  ExitCheckItem,
  LessonActivity,
  ListeningQuestion,
  ListeningTaskData,
} from '../src/types';

export const LISTENING_AUDIO_ROOT = 'public/audio';
export const SAFE_LISTENING_ASSET_ID = /^[a-z0-9][a-z0-9_-]*$/;

export type ListeningAudioType = 'dialogue' | 'monologue' | 'token_sequence' | 'dictation';

export interface ListeningGenerationSegment {
  speaker: string | null;
  text: string;
  pauseAfterMs?: number;
}

export interface ListeningPlanQuestion {
  id: string;
  prompt: string;
  correctAnswer: string;
}

export interface ListeningPlanEntry {
  lesson: number;
  lessonTitle: string;
  slideId: number;
  activityIndex: number;
  activityId: string;
  title: string;
  assetId: string;
  filename: string;
  audioStatus: AudioAssetStatus;
  transcript: string;
  questionCount: number;
  passCount: number;
  questions: ListeningPlanQuestion[];
  type: ListeningAudioType;
  speakers: string[];
  segments: ListeningGenerationSegment[];
  lessonListeningObjectiveIds: string[];
  objectiveIds: string[];
  evidenceRelationship: 'required_exit_check' | 'practice_only';
}

export interface ListeningAssetPlan {
  lessonNumbers: number[];
  assetId: string;
  filename: string;
  audioStatus: AudioAssetStatus;
  type: ListeningAudioType;
  transcript: string;
  speakers: string[];
  segments: ListeningGenerationSegment[];
  activityIds: string[];
  objectiveIds: string[];
}

export interface ListeningCoverageEntry {
  lesson: number;
  title: string;
  hasListening: boolean;
  activityCount: number;
  listeningObjectiveIds: string[];
  absenceAssessment?: string;
}

export interface IntentionalSharedAssetPolicy {
  assetId: string;
  activityIds: string[];
  reason: string;
}

export const INTENTIONAL_SHARED_LISTENING_ASSETS: IntentionalSharedAssetPolicy[] = [
  {
    assetId: 'l5_listening_time',
    activityIds: ['l5-listening-number-dictation', 'l5-listening-time-schedule'],
    reason:
      'One ordered recording intentionally serves the number-dictation block and the following date/schedule comprehension block.',
  },
];

const INTENTIONAL_ABSENCE: Record<number, string> = {
  3: 'Intentional: article/plural objectives do not require listening comprehension.',
  9: 'Intentional: adjective/comparison objectives do not require listening comprehension.',
  11: 'Intentional: surface-location objectives are assessed through controlled, reading and production activities.',
};

const SPEAKER_LINE = /^([^:\n]+):\s*(.+)$/u;

function listeningQuestions(activity: ListeningTaskData): ListeningPlanQuestion[] {
  return activity.questions.map((question: ListeningQuestion) => {
    if (!('options' in question)) {
      return {
        id: question.id,
        prompt: question.question,
        correctAnswer: question.accept.join(' / '),
      };
    }
    return {
      id: question.id,
      prompt: question.question,
      correctAnswer: question.options[question.correctIndex] ?? '',
    };
  });
}

function splitTokens(text: string): string[] {
  return text
    .split(/[.\n]+/u)
    .map((token) => token.trim())
    .filter(Boolean);
}

function dialogueSegments(transcript: string): ListeningGenerationSegment[] | null {
  const lines = transcript.split(/\r?\n/u).map((line) => line.trim()).filter(Boolean);
  if (lines.length < 2) return null;

  const parsed = lines.map((line) => SPEAKER_LINE.exec(line));
  if (parsed.some((match) => match === null)) return null;

  return parsed.map((match) => ({
    speaker: match?.[1].trim() ?? null,
    text: match?.[2].trim() ?? '',
  }));
}

function classifyAndSegment(
  lesson: number,
  activity: ListeningTaskData
): Pick<ListeningPlanEntry, 'type' | 'speakers' | 'segments'> {
  if (lesson === 1) {
    return {
      type: 'token_sequence',
      speakers: [],
      segments: splitTokens(activity.transcript).map((text) => ({
        speaker: null,
        text,
        pauseAfterMs: 900,
      })),
    };
  }

  if (activity.assetId === 'l5_listening_time') {
    const [dictation = '', schedule = ''] = activity.transcript.split(/\n\s*\n/u);
    return {
      type: 'dictation',
      speakers: [],
      segments: [
        ...splitTokens(dictation).map((text) => ({ speaker: null, text, pauseAfterMs: 1200 })),
        ...(schedule.trim()
          ? [{ speaker: null, text: schedule.trim(), pauseAfterMs: 600 }]
          : []),
      ],
    };
  }

  const dialogue = dialogueSegments(activity.transcript);
  if (dialogue) {
    return {
      type: 'dialogue',
      speakers: [...new Set(dialogue.map((segment) => segment.speaker).filter((speaker): speaker is string => speaker !== null))],
      segments: dialogue,
    };
  }

  return {
    type: 'monologue',
    speakers: [],
    segments: [{ speaker: null, text: activity.transcript.trim() }],
  };
}

function checkUsesActivity(check: ExitCheckItem, activityId: string): boolean {
  return check.activityId === activityId
    || (check.evidenceComponents ?? []).some((component) => component.activityId === activityId);
}

function collectObjectiveLinks(activities: LessonActivity[], activityId: string): string[] {
  return [
    ...new Set(
      activities
        .filter((activity): activity is Extract<LessonActivity, { kind: 'exitCheck' }> => activity.kind === 'exitCheck')
        .flatMap((exitCheck) => exitCheck.checks)
        .filter((check) => checkUsesActivity(check, activityId))
        .map((check) => check.objectiveId)
    ),
  ];
}

export async function collectListeningPlan(): Promise<ListeningPlanEntry[]> {
  const entries: ListeningPlanEntry[] = [];

  for (const meta of LESSONS_META) {
    const lesson = await loadLesson(meta.number);
    if (!lesson) throw new Error(`Lesson ${meta.number} could not be loaded`);

    const activities = lesson.slides.flatMap((slide) => slide.activities ?? []);
    const lessonListeningObjectiveIds = (lesson.objectives ?? [])
      .filter((objective) => objective.skills.includes('listening'))
      .map((objective) => objective.id);

    for (const slide of lesson.slides) {
      for (const [activityIndex, activity] of (slide.activities ?? []).entries()) {
        if (activity.kind !== 'listening') continue;

        const objectiveIds = collectObjectiveLinks(activities, activity.id);
        entries.push({
          lesson: lesson.number,
          lessonTitle: lesson.title,
          slideId: slide.id,
          activityIndex,
          activityId: activity.id,
          title: activity.title ?? '',
          assetId: activity.assetId,
          filename: `${activity.assetId}.mp3`,
          audioStatus: activity.audioStatus,
          transcript: activity.transcript,
          questionCount: activity.questions.length,
          passCount: activity.passCount ?? 0,
          questions: listeningQuestions(activity),
          ...classifyAndSegment(lesson.number, activity),
          lessonListeningObjectiveIds,
          objectiveIds,
          evidenceRelationship: objectiveIds.length > 0 ? 'required_exit_check' : 'practice_only',
        });
      }
    }
  }

  return entries;
}

export async function collectListeningCoverage(): Promise<ListeningCoverageEntry[]> {
  const coverage: ListeningCoverageEntry[] = [];
  for (const meta of LESSONS_META) {
    const lesson = await loadLesson(meta.number);
    if (!lesson) throw new Error(`Lesson ${meta.number} could not be loaded`);
    const activityCount = lesson.slides
      .flatMap((slide) => slide.activities ?? [])
      .filter((activity) => activity.kind === 'listening').length;
    const listeningObjectiveIds = (lesson.objectives ?? [])
      .filter((objective) => objective.skills.includes('listening'))
      .map((objective) => objective.id);
    const coverageEntry: ListeningCoverageEntry = {
      lesson: lesson.number,
      title: lesson.title,
      hasListening: activityCount > 0,
      activityCount,
      listeningObjectiveIds,
    };
    if (activityCount === 0) {
      coverageEntry.absenceAssessment = INTENTIONAL_ABSENCE[lesson.number];
    }
    coverage.push(coverageEntry);
  }
  return coverage;
}

export function buildListeningAssets(entries: readonly ListeningPlanEntry[]): ListeningAssetPlan[] {
  const grouped = new Map<string, ListeningPlanEntry[]>();
  for (const entry of entries) {
    const group = grouped.get(entry.assetId) ?? [];
    group.push(entry);
    grouped.set(entry.assetId, group);
  }

  return [...grouped.values()].map((group) => {
    const first = group[0];
    return {
      lessonNumbers: [...new Set(group.map((entry) => entry.lesson))],
      assetId: first.assetId,
      filename: first.filename,
      audioStatus: first.audioStatus,
      type: first.type,
      transcript: first.transcript,
      speakers: first.speakers,
      segments: first.segments,
      activityIds: group.map((entry) => entry.activityId),
      objectiveIds: [...new Set(group.flatMap((entry) => entry.objectiveIds))],
    };
  });
}

function sameMembers(left: readonly string[], right: readonly string[]): boolean {
  return left.length === right.length && left.every((item) => right.includes(item));
}

export function validateListeningPlan(entries: readonly ListeningPlanEntry[]): string[] {
  const errors: string[] = [];
  const activityIds = new Set<string>();
  const policyByAsset = new Map(INTENTIONAL_SHARED_LISTENING_ASSETS.map((policy) => [policy.assetId, policy]));
  const grouped = new Map<string, ListeningPlanEntry[]>();

  for (const entry of entries) {
    if (!entry.activityId.trim()) errors.push(`L${entry.lesson}: missing listening activity id`);
    if (activityIds.has(entry.activityId)) errors.push(`duplicate listening activity id: ${entry.activityId}`);
    activityIds.add(entry.activityId);

    if (!entry.title.trim()) errors.push(`${entry.activityId}: missing title`);
    if (!SAFE_LISTENING_ASSET_ID.test(entry.assetId)) {
      errors.push(`${entry.activityId}: unsafe assetId ${entry.assetId}`);
    }
    if (entry.filename !== `${entry.assetId}.mp3`) {
      errors.push(`${entry.activityId}: filename must equal ${entry.assetId}.mp3`);
    }
    if (!entry.transcript.trim()) errors.push(`${entry.activityId}: empty transcript`);
    if (/[А-Яа-яЁё]/u.test(entry.transcript)) errors.push(`${entry.activityId}: transcript contains Russian text`);
    if (/<[^>]+>|[#*_~]/u.test(entry.transcript)) errors.push(`${entry.activityId}: transcript contains markup`);
    if (entry.questionCount < 1 || entry.questions.length !== entry.questionCount) {
      errors.push(`${entry.activityId}: invalid question inventory`);
    }
    if (entry.passCount < 1 || entry.passCount > entry.questionCount) {
      errors.push(`${entry.activityId}: passCount ${entry.passCount} out of range`);
    }
    if (entry.segments.length === 0 || entry.segments.some((segment) => !segment.text.trim())) {
      errors.push(`${entry.activityId}: generator segments are empty`);
    }
    if (entry.type === 'dialogue' && entry.speakers.length < 2) {
      errors.push(`${entry.activityId}: dialogue needs at least two speakers`);
    }

    const group = grouped.get(entry.assetId) ?? [];
    group.push(entry);
    grouped.set(entry.assetId, group);
  }

  for (const [assetId, group] of grouped) {
    if (group.length <= 1) continue;
    const policy = policyByAsset.get(assetId);
    if (!policy) {
      errors.push(`duplicate assetId is not documented: ${assetId}`);
      continue;
    }
    const actualActivityIds = group.map((entry) => entry.activityId);
    if (!sameMembers(actualActivityIds, policy.activityIds)) {
      errors.push(`shared asset ${assetId} does not match its documented activity list`);
    }
    const first = group[0];
    if (group.some((entry) => entry.transcript !== first.transcript)) {
      errors.push(`shared asset ${assetId} has conflicting transcripts`);
    }
    if (group.some((entry) => entry.audioStatus !== first.audioStatus || entry.type !== first.type)) {
      errors.push(`shared asset ${assetId} has conflicting status or type`);
    }
  }

  for (const policy of INTENTIONAL_SHARED_LISTENING_ASSETS) {
    if ((grouped.get(policy.assetId)?.length ?? 0) < 2) {
      errors.push(`documented shared asset is not shared: ${policy.assetId}`);
    }
  }

  const entriesByLesson = new Map<number, ListeningPlanEntry[]>();
  for (const entry of entries) {
    const lessonEntries = entriesByLesson.get(entry.lesson) ?? [];
    lessonEntries.push(entry);
    entriesByLesson.set(entry.lesson, lessonEntries);
  }
  for (const [lesson, lessonEntries] of entriesByLesson) {
    const required = new Set(lessonEntries.flatMap((entry) => entry.lessonListeningObjectiveIds));
    const mapped = new Set(lessonEntries.flatMap((entry) => entry.objectiveIds));
    if (required.size > 0 && ![...required].some((objectiveId) => mapped.has(objectiveId))) {
      errors.push(`L${lesson}: no listening-skilled objective is linked to listening evidence`);
    }
  }

  return errors;
}

export interface ListeningFileCheck {
  lesson: number;
  assetId: string;
  filename: string;
  filePath: string;
  status: 'PRESENT' | 'MISSING' | 'MP3 EXISTS BUT STATUS IS MISSING';
}

export interface ListeningFileValidationResult {
  checks: ListeningFileCheck[];
  errors: string[];
  warnings: string[];
}

export function validateListeningFiles(
  entries: readonly ListeningPlanEntry[],
  audioDirectory: string = path.resolve(LISTENING_AUDIO_ROOT),
  fileExists: (filePath: string) => boolean = existsSync
): ListeningFileValidationResult {
  const errors = validateListeningPlan(entries);
  const warnings: string[] = [];
  const checks: ListeningFileCheck[] = [];

  for (const asset of buildListeningAssets(entries)) {
    if (!SAFE_LISTENING_ASSET_ID.test(asset.assetId)) continue;
    const filePath = path.resolve(audioDirectory, asset.filename);
    const expectedRoot = `${path.resolve(audioDirectory)}${path.sep}`;
    if (!filePath.startsWith(expectedRoot)) {
      errors.push(`${asset.assetId}: resolved outside canonical audio directory`);
      continue;
    }

    const present = fileExists(filePath);
    let status: ListeningFileCheck['status'];
    if (present && asset.audioStatus === 'missing') {
      status = 'MP3 EXISTS BUT STATUS IS MISSING';
      warnings.push(`${asset.filename}: ${status}`);
    } else if (present) {
      status = 'PRESENT';
    } else {
      status = 'MISSING';
      if (asset.audioStatus === 'published') {
        errors.push(`${asset.filename}: published asset is missing its MP3`);
      }
    }

    checks.push({
      lesson: asset.lessonNumbers[0],
      assetId: asset.assetId,
      filename: asset.filename,
      filePath,
      status,
    });
  }

  return { checks, errors, warnings };
}
