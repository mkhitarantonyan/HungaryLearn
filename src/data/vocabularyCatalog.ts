import type { ReviewCardState, VocabularyCard, VocabularyInventoryEntry, VocabularyItem } from '../types';
import {
  GENERATED_VOCABULARY_CARDS,
  GENERATED_VOCABULARY_ENTRIES,
  GENERATED_VOCABULARY_LEXEMES,
} from './generatedVocabularyCatalog';
import { LEGACY_REVIEW_CARD_ALIASES } from './vocabularyLegacy';

export const VOCABULARY_ENTRIES = GENERATED_VOCABULARY_ENTRIES;
export const VOCABULARY_LEXEMES = GENERATED_VOCABULARY_LEXEMES;
export const VOCABULARY_CARDS = GENERATED_VOCABULARY_CARDS;

const cardById = new Map(VOCABULARY_CARDS.map((card) => [card.id, card]));
const cardIdBySourceId = new Map(
  VOCABULARY_ENTRIES.flatMap((entry) => entry.cardId ? [[entry.id, entry.cardId] as const] : []),
);
const legacyIdsByCardId = new Map<string, string[]>();

for (const [legacyId, cardId] of Object.entries(LEGACY_REVIEW_CARD_ALIASES)) {
  const ids = legacyIdsByCardId.get(cardId) ?? [];
  ids.push(legacyId);
  legacyIdsByCardId.set(cardId, ids);
}

const lessonVocabularyMap: Record<number, VocabularyItem[]> = {};
for (const entry of VOCABULARY_ENTRIES) {
  (lessonVocabularyMap[entry.lessonNumber] ??= []).push(entry);
}
export const LESSON_VOCABULARY_MAP: Readonly<Record<number, VocabularyItem[]>> = Object.freeze(lessonVocabularyMap);

export function getVocabularyEntry(sourceVocabularyId: string): VocabularyInventoryEntry | null {
  return VOCABULARY_ENTRIES.find((entry) => entry.id === sourceVocabularyId) ?? null;
}

export function getCanonicalCardIdForVocabulary(sourceVocabularyId: string): string | null {
  return cardIdBySourceId.get(sourceVocabularyId) ?? null;
}

export function resolveVocabularyCard(cardId: string): VocabularyCard | null {
  const canonicalId = cardById.has(cardId) ? cardId : LEGACY_REVIEW_CARD_ALIASES[cardId];
  return canonicalId ? cardById.get(canonicalId) ?? null : null;
}

export function resolveCanonicalCardId(cardId: string): string | null {
  return resolveVocabularyCard(cardId)?.id ?? null;
}

/** Prefer a canonical state, otherwise reuse the most recently reviewed compatible legacy state. */
export function findReviewStateForCard(
  cardId: string,
  states: Readonly<Record<string, ReviewCardState>>,
): ReviewCardState | null {
  if (states[cardId]) return states[cardId];
  const candidates = (legacyIdsByCardId.get(cardId) ?? [])
    .map((legacyId) => states[legacyId])
    .filter((state): state is ReviewCardState => Boolean(state));
  candidates.sort((a, b) => (b.lastReviewedAt ?? '').localeCompare(a.lastReviewedAt ?? '') || b.reps - a.reps);
  return candidates[0] ?? null;
}
