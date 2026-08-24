import { LESSONS_META, loadLesson } from '../src/data/lessons';
import {
  VOCABULARY_LEMMA_OVERRIDES,
  VOCABULARY_QA_FLAGS,
  VOCABULARY_SRS_EXCLUSIONS,
} from '../src/data/vocabularyConfig';
import type { VocabularyCard, VocabularyInventoryEntry, VocabularyItem, VocabularyLexeme } from '../src/types';

export interface VocabularyLessonSummary {
  lesson: number;
  target: number;
  newLexemes: number;
  recycledLexemes: number;
  srsEligible: number;
  excluded: number;
}

export interface VocabularyPlan {
  entries: VocabularyInventoryEntry[];
  lexemes: VocabularyLexeme[];
  cards: VocabularyCard[];
  lessons: VocabularyLessonSummary[];
  exclusions: VocabularyInventoryEntry[];
  recycled: VocabularyLexeme[];
  qaFlags: string[];
}

export function normalizeVocabularyIdentity(value: string): string {
  return value.normalize('NFC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('hu-HU');
}

function stableSuffix(sourceId: string): string {
  return sourceId.normalize('NFC').toLocaleLowerCase('hu-HU').replace(/[^a-z0-9_-]+/g, '_');
}

export async function buildVocabularyPlan(): Promise<VocabularyPlan> {
  const rawEntries: Array<{
    item: VocabularyItem;
    lessonNumber: number;
    curriculumOrder: number;
    lemma: string;
    srsEligible: boolean;
    srsExclusionReason?: string;
  }> = [];

  for (const meta of LESSONS_META) {
    const lesson = await loadLesson(meta.number);
    if (!lesson) throw new Error(`Could not load lesson ${meta.number}`);
    if (!lesson.vocabulary?.length) throw new Error(`Lesson ${meta.number} has no target vocabulary`);

    lesson.vocabulary.forEach((item, curriculumOrder) => {
      const configuredExclusion = VOCABULARY_SRS_EXCLUSIONS[item.id];
      const exclusionReason = item.srsExclusionReason ?? configuredExclusion;
      rawEntries.push({
        item,
        lessonNumber: meta.number,
        curriculumOrder,
        lemma: VOCABULARY_LEMMA_OVERRIDES[item.id] ?? item.baseWord ?? item.hu,
        srsEligible: item.srsEligible !== false && !exclusionReason,
        srsExclusionReason: exclusionReason,
      });
    });
  }

  const groups = new Map<string, typeof rawEntries>();
  for (const entry of rawEntries) {
    const identity = normalizeVocabularyIdentity(entry.lemma);
    const group = groups.get(identity) ?? [];
    group.push(entry);
    groups.set(identity, group);
  }

  const entries: VocabularyInventoryEntry[] = [];
  const lexemes: VocabularyLexeme[] = [];
  const cards: VocabularyCard[] = [];

  for (const group of groups.values()) {
    const first = group[0];
    const lexemeId = `lex_${stableSuffix(first.item.id)}`;
    const eligibleEntries = group.filter((entry) => entry.srsEligible);
    const cardId = eligibleEntries.length ? `card_${stableSuffix(first.item.id)}` : null;
    const usedInLessons = [...new Set(group.map((entry) => entry.lessonNumber))];
    const forms = [...new Set(group.map((entry) => entry.item.hu.normalize('NFC').trim()))];

    lexemes.push({
      id: lexemeId,
      lemma: first.lemma.normalize('NFC').trim(),
      translation: first.item.ru.trim(),
      lessonIntroduced: first.lessonNumber,
      usedInLessons,
      forms,
    });

    if (cardId) {
      cards.push({
        ...first.item,
        id: cardId,
        baseWord: first.lemma.normalize('NFC').trim(),
        lexemeId,
        lessonIntroduced: first.lessonNumber,
        usedInLessons,
        sourceVocabularyIds: group.map((entry) => entry.item.id),
      });
    }

    for (const entry of group) {
      entries.push({
        ...entry.item,
        lessonNumber: entry.lessonNumber,
        curriculumOrder: entry.curriculumOrder,
        lemma: entry.lemma.normalize('NFC').trim(),
        lexemeId,
        cardId,
        srsEligible: entry.srsEligible,
        ...(entry.srsExclusionReason ? { srsExclusionReason: entry.srsExclusionReason } : {}),
      });
    }
  }

  entries.sort((a, b) => a.lessonNumber - b.lessonNumber || a.curriculumOrder - b.curriculumOrder);
  lexemes.sort((a, b) => a.lessonIntroduced - b.lessonIntroduced || entries.findIndex((entry) => entry.lexemeId === a.id) - entries.findIndex((entry) => entry.lexemeId === b.id));
  cards.sort((a, b) => a.lessonIntroduced - b.lessonIntroduced || lexemes.findIndex((lexeme) => lexeme.id === a.lexemeId) - lexemes.findIndex((lexeme) => lexeme.id === b.lexemeId));

  const lessons = LESSONS_META.map((meta) => {
    const lessonEntries = entries.filter((entry) => entry.lessonNumber === meta.number);
    const lessonLexemeIds = [...new Set(lessonEntries.map((entry) => entry.lexemeId))];
    return {
      lesson: meta.number,
      target: lessonEntries.length,
      newLexemes: lessonLexemeIds.filter((id) => lexemes.find((lexeme) => lexeme.id === id)?.lessonIntroduced === meta.number).length,
      recycledLexemes: lessonLexemeIds.filter((id) => (lexemes.find((lexeme) => lexeme.id === id)?.lessonIntroduced ?? meta.number) < meta.number).length,
      srsEligible: lessonLexemeIds.filter((id) => cards.some((card) => card.lexemeId === id)).length,
      excluded: lessonEntries.filter((entry) => !entry.srsEligible).length,
    };
  });

  return {
    entries,
    lexemes,
    cards,
    lessons,
    exclusions: entries.filter((entry) => !entry.srsEligible),
    recycled: lexemes.filter((lexeme) => lexeme.usedInLessons.length > 1),
    qaFlags: [...VOCABULARY_QA_FLAGS],
  };
}
