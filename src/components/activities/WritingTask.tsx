import React, { useState } from 'react';
import { PenLine, Eye, EyeOff, CheckCircle2, PencilLine } from 'lucide-react';
import type { ActivityEvidence, ActivityRuntimeState, WritingTaskData } from '../../types';
import {
  writingEvidence,
  MIN_WRITING_LENGTH,
  isWritingLocked,
  restoreWritingDraft,
  restoreWritingRubric,
} from '../../utils/activityUtils';

interface WritingTaskProps {
  data: WritingTaskData;
  evidence?: ActivityEvidence;
  onEvidence: (evidence: ActivityEvidence) => void;
  onResetEvidence?: (activityId: string) => void;
  runtime?: ActivityRuntimeState;
  onRuntimeChange?: (patch: Partial<ActivityRuntimeState>) => void;
}

/**
 * Functional writing task with rubric self-review (no automatic AI score).
 * Evidence mode is PARTIAL: completed means "non-empty + self-reviewed",
 * never auto-scored language mastery.
 *
 * After a successful submit the draft/rubric lock (OPTION A) so the UI draft
 * can never diverge from the stored evidence. "Редактировать снова" clears the
 * evidence first, then unlocks the draft.
 */
export const WritingTask: React.FC<WritingTaskProps> = ({
  data,
  evidence,
  onEvidence,
  onResetEvidence,
  runtime,
  onRuntimeChange,
}) => {
  const [text, setText] = useState<string>(() => restoreWritingDraft(runtime));
  const [checked, setChecked] = useState<Record<string, boolean>>(() => restoreWritingRubric(runtime));
  const [showModel, setShowModel] = useState(false);

  const selfReviewed = data.rubric.every((criterion) => checked[criterion] === true);
  const result = writingEvidence(text, selfReviewed);
  const canSubmit = result.completed;
  const locked = isWritingLocked(evidence);

  const updateText = (value: string) => {
    setText(value);
    onRuntimeChange?.({ writingDraft: value });
  };

  const toggleCriterion = (criterion: string) => {
    setChecked((prev) => {
      const next = { ...prev, [criterion]: !prev[criterion] };
      onRuntimeChange?.({ writingRubric: next });
      return next;
    });
  };

  const handleSubmit = () => {
    if (!canSubmit || locked) return;
    onEvidence({
      activityId: data.id,
      attempted: text.trim().length > 0,
      completed: true,
      evidenceMode: 'partial',
      passed: false,
      selfReviewed: true,
    });
  };

  const handleEditAgain = () => {
    // Reset stored evidence BEFORE unlocking, so draft and evidence never diverge.
    onResetEvidence?.(data.id);
  };

  return (
    <div className="rounded-2xl border border-[#D9CBB0] bg-[#F6EFE4]/70 p-4 md:p-5 space-y-4">
      <div className="flex items-center gap-2">
        <PenLine className="w-4 h-4 text-[#7A1E2B]" />
        <h3 className="font-mono font-bold text-[#57121C] text-sm md:text-base">
          {data.title ?? 'Письмо'}
        </h3>
        {evidence?.completed && (
          <span className="ml-auto text-[10px] font-mono uppercase text-emerald-700 font-semibold">
            ✓ self-reviewed · PARTIAL
          </span>
        )}
      </div>

      <p className="text-sm text-[#2A2320]">{data.prompt}</p>

      <textarea
        value={text}
        onChange={(e) => updateText(e.target.value)}
        rows={5}
        placeholder="Írd ide a válaszod…"
        aria-label={data.prompt}
        disabled={locked}
        className="w-full rounded-xl border border-[#D9CBB0] bg-white px-3 py-2.5 text-sm text-[#2A2320] leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#7A1E2B]/40 resize-y disabled:opacity-60 disabled:cursor-not-allowed"
      />
      <div className="text-right text-[11px] font-mono text-[#8A7A68]">
        {text.trim().length} / {MIN_WRITING_LENGTH}+ символов
      </div>

      <div className="rounded-xl border border-[#D9CBB0] bg-white p-3">
        <p className="text-[10px] font-mono uppercase tracking-wider text-[#8A7A68] font-bold mb-2">
          Самооценка (отметь все пункты)
        </p>
        <ul className="text-xs text-[#2A2320] space-y-1.5">
          {data.rubric.map((criterion) => (
            <li key={criterion}>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checked[criterion] === true}
                  onChange={() => toggleCriterion(criterion)}
                  disabled={locked}
                  className="mt-0.5 h-4 w-4 accent-[#7A1E2B] disabled:cursor-not-allowed"
                />
                <span>{criterion}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setShowModel((v) => !v)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D9CBB0] bg-white text-[#57121C] text-xs font-semibold hover:bg-[#F6EFE4] cursor-pointer"
        >
          {showModel ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          <span>{showModel ? 'Скрыть пример' : 'Показать пример'}</span>
        </button>
        {locked ? (
          <button
            onClick={handleEditAgain}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-[#7A1E2B] bg-white text-[#7A1E2B] text-xs font-semibold hover:bg-[#7A1E2B]/10 cursor-pointer"
          >
            <PencilLine className="w-3.5 h-3.5" />
            <span>Редактировать снова</span>
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#7A1E2B] text-white text-xs font-semibold hover:bg-[#57121C] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Я проверил(а) себя</span>
          </button>
        )}
      </div>

      {showModel && (
        <div className="rounded-xl border border-[#2C5F58]/30 bg-[#2C5F58]/5 p-4" aria-live="polite">
          <p className="text-[10px] font-mono uppercase tracking-wider text-[#2C5F58] font-bold mb-2">
            Пример ответа
          </p>
          {data.modelAnswer.map((line) => (
            <p key={line} className="text-sm text-[#2A2320] font-mono">
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
