import { LESSON_PROGRESS_DEFINITIONS } from '../../../src/data/lessonProgressCatalog.ts';
import { isActivityEvidenceValidForUnit } from '../../../src/utils/lessonProgress.ts';
import type { StoredActivityEvidence } from './model.js';

const PROGRESS_UNIT_BY_ID = new Map(
  LESSON_PROGRESS_DEFINITIONS.flatMap((definition) =>
    definition.units.map((unit) => [unit.activityId, unit] as const)
  )
);

const EVIDENCE_KEYS = new Set([
  'activityId',
  'attempted',
  'completed',
  'evidenceMode',
  'passed',
  'score',
  'total',
  'selfReviewed',
]);

/** Validate client evidence against current activity id, kind, mode and scoring contract. */
export function validActivityEvidence(value: unknown): Record<string, StoredActivityEvidence> | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const entries = Object.entries(value as Record<string, unknown>);
  if (entries.length > 500) return null;

  const validated: Record<string, StoredActivityEvidence> = {};
  for (const [activityId, raw] of entries) {
    if (!activityId || activityId.length > 200 || !raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
    const evidence = raw as Record<string, unknown>;
    if (
      Object.keys(evidence).some((key) => !EVIDENCE_KEYS.has(key))
      || evidence.activityId !== activityId
      || typeof evidence.attempted !== 'boolean'
      || typeof evidence.completed !== 'boolean'
      || typeof evidence.passed !== 'boolean'
      || !['direct', 'partial', 'none'].includes(String(evidence.evidenceMode))
      || (evidence.score !== undefined && (!Number.isInteger(evidence.score) || Number(evidence.score) < 0))
      || (evidence.total !== undefined && (!Number.isInteger(evidence.total) || Number(evidence.total) < 1))
      || (evidence.score !== undefined && evidence.total !== undefined && Number(evidence.score) > Number(evidence.total))
      || (evidence.selfReviewed !== undefined && typeof evidence.selfReviewed !== 'boolean')
    ) return null;
    const unit = PROGRESS_UNIT_BY_ID.get(activityId);
    const candidate = evidence as unknown as StoredActivityEvidence;
    if (!unit || unit.requirement !== 'complete' || !isActivityEvidenceValidForUnit(unit, candidate)) return null;
    validated[activityId] = candidate;
  }
  return validated;
}
