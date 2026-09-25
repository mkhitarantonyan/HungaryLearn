import React from 'react';
import { ClipboardCheck, CheckCircle2, Circle, AlertCircle } from 'lucide-react';
import type { ActivityEvidence, EvidenceKind, ExitCheckData, LearningObjective } from '../../types';
import {
  describeEvidenceStatus,
  describeExitCheckStatus,
  type EvidenceStatus,
} from '../../utils/activityUtils';
import { useI18n } from '../../i18n';
import { ACTIVITY_COPY, formatActivityCopy } from '../../i18n/activityCopy';

interface ExitCheckProps {
  data: ExitCheckData;
  evidence: Record<string, ActivityEvidence>;
  objectives?: LearningObjective[];
}

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
  const { language } = useI18n();
  const copy = ACTIVITY_COPY[language];
  const evidenceLabels: Record<EvidenceKind, string> = copy.evidence;
  const objectiveById = new Map((objectives ?? []).map((o) => [o.id, o]));

  const statusViewOf = (status: EvidenceStatus): StatusView => {
    switch (status.kind) {
      case 'direct-met':
        return {
          label: copy.ready,
          tone: 'text-emerald-700',
          icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
        };
      case 'direct-not-met':
        return {
          label: copy.tryAgain,
          tone: 'text-[#C77B00]',
          icon: <AlertCircle className="w-4 h-4 text-[#C77B00]" />,
        };
      case 'none':
        return {
          label: copy.unavailable,
          tone: 'text-[#C77B00]',
          icon: <AlertCircle className="w-4 h-4 text-[#C77B00]" />,
        };
      case 'composite-incomplete':
      case 'partial-components':
        return {
          label: copy.completeTasks,
          tone: 'text-[#C77B00]',
          icon: <AlertCircle className="w-4 h-4 text-[#C77B00]" />,
        };
      case 'partial-review':
        return {
          label: copy.teacherReview,
          tone: 'text-[#C77B00]',
          icon: <AlertCircle className="w-4 h-4 text-[#C77B00]" />,
        };
      case 'partial-incomplete':
        return {
          label: copy.incomplete,
          tone: 'text-[#666E7E]',
          icon: <Circle className="w-4 h-4 text-[#D6DEE6]" />,
        };
      case 'not-started':
      default:
        return {
          label: copy.notStarted,
          tone: 'text-[#666E7E]',
          icon: <Circle className="w-4 h-4 text-[#D6DEE6]" />,
        };
    }
  };

  return (
    <div className="rounded-2xl border border-[#D6DEE6] bg-[#EDF4FB]/70 p-4 md:p-5 space-y-4">
      <div className="flex items-center gap-2">
        <ClipboardCheck className="w-4 h-4 text-[#116EEE]" />
        <h3 className="font-mono font-bold text-[#252B2F] text-sm md:text-base">
          {data.title ?? copy.exitTitle}
        </h3>
      </div>

      <p className="text-xs text-[#666E7E]">
        {copy.exitIntro}
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
              className="rounded-xl border border-[#D6DEE6] bg-white p-3 flex items-start gap-2.5"
            >
              <span className="shrink-0 mt-0.5">{overallStatus.icon}</span>
              <div className="min-w-0">
                <p className="text-xs md:text-sm font-semibold text-[#252B2F] leading-snug">
                  {objective ? objective.text : check.objectiveId}
                </p>
                <p className="text-[11px] text-[#666E7E] mt-0.5">
                  <span className="font-mono">{evidenceLabels[check.evidenceKind]}</span>
                </p>
                {hasComponentBreakdown && (
                  <div className="mt-2 space-y-1 text-[11px] text-[#435064]">
                    <p>
                      <span className="font-mono font-semibold">
                        {evidenceLabels[check.evidenceKind]}
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
                            {evidenceLabels[component.evidenceKind]}
                          </span>
                          {' · '}
                          <span className={componentStatus.tone}>{componentStatus.label}</span>
                        </p>
                      );
                    })}
                    {practiceComponents.map((component) => (
                      <p key={component}>
                        <span className="font-mono font-semibold">{evidenceLabels[component]}</span>
                        {' · '}
                        <span className="text-[#666E7E]">{copy.extraPractice}</span>
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <span className={`ml-auto min-w-0 max-w-[45%] text-right text-[10px] font-mono uppercase font-bold [overflow-wrap:anywhere] ${overallStatus.tone}`}>
                {hasComponentBreakdown ? formatActivityCopy(copy.total, { status: overallStatus.label }) : overallStatus.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
