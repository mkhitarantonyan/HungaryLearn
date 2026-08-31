import type { ActivityEvidence } from '../types';

/**
 * Мержит два массива слайдов, устраняя гонку при параллельном редактировании.
 * Используется для объединения прогресса с разных устройств/вкладок.
 * 
 * @param existing - текущий массив слайдов на сервере
 * @param incoming - новый массив слайдов от клиента
 * @returns объединённый массив без дубликатов
 */
export function mergeCompletedSlides(
  existing: string[],
  incoming: string[]
): string[] {
  return Array.from(new Set([...existing, ...incoming]));
}

export interface ProgressHydrationRevision {
  current: number;
}

export function beginProgressHydration(revision: ProgressHydrationRevision): number {
  revision.current += 1;
  return revision.current;
}

export function isCurrentProgressHydration(revision: ProgressHydrationRevision, candidate: number): boolean {
  return revision.current === candidate;
}

const EVIDENCE_MODE_RANK = { none: 0, partial: 1, direct: 2 } as const;

function evidenceStrength(evidence: ActivityEvidence): readonly number[] {
  return [
    EVIDENCE_MODE_RANK[evidence.evidenceMode],
    evidence.passed ? 1 : 0,
    evidence.completed ? 1 : 0,
    evidence.attempted ? 1 : 0,
    evidence.score ?? -1,
    evidence.total ?? -1,
    evidence.selfReviewed ? 1 : 0,
  ];
}

function compareEvidence(left: ActivityEvidence, right: ActivityEvidence): number {
  const leftStrength = evidenceStrength(left);
  const rightStrength = evidenceStrength(right);
  for (let index = 0; index < leftStrength.length; index += 1) {
    if (leftStrength[index] !== rightStrength[index]) return leftStrength[index] - rightStrength[index];
  }
  return 0;
}

/** Keep the strongest valid result so refresh/device merges never regress progress. */
export function mergeActivityEvidence(
  existing: Record<string, ActivityEvidence>,
  incoming: Record<string, ActivityEvidence>
): Record<string, ActivityEvidence> {
  const merged = { ...existing };
  for (const [activityId, candidate] of Object.entries(incoming)) {
    const current = merged[activityId];
    if (!current) {
      merged[activityId] = candidate;
      continue;
    }
    if (compareEvidence(candidate, current) > 0) {
      merged[activityId] = candidate;
    }
  }
  return merged;
}
