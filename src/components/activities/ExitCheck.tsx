import React from 'react';
import { ClipboardCheck, CheckCircle2, Circle, AlertCircle } from 'lucide-react';
import type { ActivityEvidence, EvidenceKind, ExitCheckData, LearningObjective } from '../../types';
import {
  describeEvidenceStatus,
  describeExitCheckStatus,
  type EvidenceStatus,
} from '../../utils/activityUtils';

interface ExitCheckProps {
  data: ExitCheckData;
  evidence: Record<string, ActivityEvidence>;
  objectives?: LearningObjective[];
}

const EVIDENCE_LABELS: Record<EvidenceKind, string> = {
  reading: 'Чтение',
  listening: 'Аудирование',
  grammar: 'Грамматика',
  vocabulary: 'Лексика',
  speaking: 'Говорение',
  interaction: 'Интеракция',
  writing: 'Письмо',
  pronunciation: 'Произношение',
};

interface StatusView {
  label: string;
  tone: string;
  icon: React.ReactNode;
}

/**
 * Exit check UI: renders objective → activity → evidence traceability with the
 * exact score, evidence mode and met status. A PARTIAL result is NEVER shown
 * as "met" — speaking/writing require human review (no fake auto-scoring).
 */
export const ExitCheck: React.FC<ExitCheckProps> = ({ data, evidence, objectives }) => {
  const objectiveById = new Map((objectives ?? []).map((o) => [o.id, o]));

  const statusViewOf = (status: EvidenceStatus): StatusView => {
    switch (status.kind) {
      case 'direct-met':
        return {
          label: status.label,
          tone: 'text-emerald-700',
          icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
        };
      case 'direct-not-met':
      case 'none':
      case 'composite-incomplete':
      case 'partial-components':
      case 'partial-review':
        return {
          label: status.label,
          tone: 'text-[#B98A2B]',
          icon: <AlertCircle className="w-4 h-4 text-[#B98A2B]" />,
        };
      case 'partial-incomplete':
      case 'not-started':
      default:
        return {
          label: status.label,
          tone: 'text-[#8A7A68]',
          icon: <Circle className="w-4 h-4 text-[#D9CBB0]" />,
        };
    }
  };

  return (
    <div className="rounded-2xl border border-[#D9CBB0] bg-[#F6EFE4]/70 p-4 md:p-5 space-y-4">
      <div className="flex items-center gap-2">
        <ClipboardCheck className="w-4 h-4 text-[#7A1E2B]" />
        <h3 className="font-mono font-bold text-[#57121C] text-sm md:text-base">
          {data.title ?? 'Exit check'}
        </h3>
      </div>

      <p className="text-xs text-[#8A7A68]">
        Проверка достижения целей урока по собранным activity-evidence. Пройденный quiz — это
        Retrieval Checkpoint, а не доказательство полного владения уроком. Открытые задания
        Speaking/Writing остаются PARTIAL и требуют проверки; компоненты PRACTICE не считаются
        квалифицирующим evidence (автоматическая оценка речи отсутствует).
      </p>

      <ul className="space-y-2" aria-live="polite">
        {data.checks.map((check) => {
          const ev = evidence[check.activityId];
          const primaryStatus = statusViewOf(describeEvidenceStatus(ev));
          const overallStatus = statusViewOf(describeExitCheckStatus(check, ev, evidence));
          const evidenceComponents = check.evidenceComponents ?? [];
          const practiceComponents = check.practiceComponents ?? [];
          const hasComponentBreakdown = evidenceComponents.length > 0 || practiceComponents.length > 0;
          const objective = objectiveById.get(check.objectiveId);
          return (
            <li
              key={`${check.objectiveId}-${check.activityId}-${check.evidenceKind}`}
              data-objective-id={check.objectiveId}
              className="rounded-xl border border-[#D9CBB0] bg-white p-3 flex items-start gap-2.5"
            >
              <span className="shrink-0 mt-0.5">{overallStatus.icon}</span>
              <div className="min-w-0">
                <p className="text-xs md:text-sm font-semibold text-[#2A2320] leading-snug">
                  {objective ? objective.text : check.objectiveId}
                </p>
                <p className="text-[11px] text-[#8A7A68] mt-0.5">
                  <span className="font-mono">{EVIDENCE_LABELS[check.evidenceKind]}</span>
                  {' · '}
                  <span className="font-mono">{check.activityId}</span>
                </p>
                {hasComponentBreakdown && (
                  <div className="mt-2 space-y-1 text-[11px] text-[#4A403A]">
                    <p>
                      <span className="font-mono font-semibold">
                        {EVIDENCE_LABELS[check.evidenceKind]}
                      </span>
                      {' · '}
                      <span className={primaryStatus.tone}>{primaryStatus.label}</span>
                    </p>
                    {evidenceComponents.map((component) => {
                      const componentStatus = statusViewOf(
                        describeEvidenceStatus(evidence[component.activityId])
                      );
                      return (
                        <p key={`${component.activityId}-${component.evidenceKind}`}>
                          <span className="font-mono font-semibold">
                            {EVIDENCE_LABELS[component.evidenceKind]}
                          </span>
                          {' · '}
                          <span className="font-mono text-[#8A7A68]">{component.activityId}</span>
                          {' · '}
                          <span className={componentStatus.tone}>{componentStatus.label}</span>
                        </p>
                      );
                    })}
                    {practiceComponents.map((component) => (
                      <p key={component}>
                        <span className="font-mono font-semibold">{EVIDENCE_LABELS[component]}</span>
                        {' · '}
                        <span className="text-[#B98A2B]">PRACTICE · not qualified</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <span className={`ml-auto min-w-0 max-w-[45%] text-right text-[10px] font-mono uppercase font-bold [overflow-wrap:anywhere] ${overallStatus.tone}`}>
                {hasComponentBreakdown ? `Итог: ${overallStatus.label}` : overallStatus.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
