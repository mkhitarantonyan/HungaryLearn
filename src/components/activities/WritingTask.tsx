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
 * After a successful submit the draft/rubric lock. Editing again does not erase
 * the already completed progress/evidence record; a new submit updates it.
 */
export const WritingTask: React.FC<WritingTaskProps> = ({
  data,
  evidence,
  onEvidence,
  runtime,
  onRuntimeChange,
}) => {
  const [text, setText] = useState<string>(() => restoreWritingDraft(runtime));
  const [checked, setChecked] = useState<Record<string, boolean>>(() => restoreWritingRubric(runtime));
  const [showModel, setShowModel] = useState(false);
  const [editing, setEditing] = useState(false);

  const selfReviewed = data.rubric.every((criterion) => checked[criterion] === true);
  const result = writingEvidence(text, selfReviewed);
  const canSubmit = result.completed;
  const locked = isWritingLocked(evidence) && !editing;

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
    setEditing(false);
  };

  const handleEditAgain = () => {
    setEditing(true);
  };

  return (
    <div className="rounded-2xl border border-[#D6DEE6] bg-[#EDF4FB]/70 p-4 md:p-5 space-y-4">
      <div className="flex items-center gap-2">
        <PenLine className="w-4 h-4 text-[#116EEE]" />
        <h3 className="font-mono font-bold text-[#252B2F] text-sm md:text-base">
          {data.title ?? 'Письмо'}
        </h3>
        {evidence?.completed && (
          <span className="ml-auto text-[10px] font-mono uppercase text-emerald-700 font-semibold">
            ✓ self-reviewed · PARTIAL
          </span>
        )}
      </div>

      <p className="text-sm text-[#252B2F]">{data.prompt}</p>

      <textarea
        value={text}
        onChange={(e) => updateText(e.target.value)}
        rows={5}
        placeholder="Írd ide a válaszod…"
        aria-label={data.prompt}
        disabled={locked}
        className="w-full rounded-xl border border-[#D6DEE6] bg-white px-3 py-2.5 text-sm text-[#252B2F] leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#116EEE]/40 resize-y disabled:opacity-60 disabled:cursor-not-allowed"
      />
      <div className="text-right text-[11px] font-mono text-[#666E7E]">
        {text.trim().length} / {MIN_WRITING_LENGTH}+ символов
      </div>

      <div className="rounded-xl border border-[#D6DEE6] bg-white p-3">
        <p className="text-[10px] font-mono uppercase tracking-wider text-[#666E7E] font-bold mb-2">
          Самооценка (отметь все пункты)
        </p>
        <ul className="text-xs text-[#252B2F] space-y-1.5">
          {data.rubric.map((criterion) => (
            <li key={criterion}>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checked[criterion] === true}
                  onChange={() => toggleCriterion(criterion)}
                  disabled={locked}
                  className="mt-0.5 h-4 w-4 accent-[#116EEE] disabled:cursor-not-allowed"
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
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D6DEE6] bg-white text-[#252B2F] text-xs font-semibold hover:bg-[#EDF4FB] cursor-pointer"
        >
          {showModel ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          <span>{showModel ? 'Скрыть пример' : 'Показать пример'}</span>
        </button>
        {locked ? (
          <button
            onClick={handleEditAgain}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-[#116EEE] bg-white text-[#116EEE] text-xs font-semibold hover:bg-[#116EEE]/10 cursor-pointer"
          >
            <PencilLine className="w-3.5 h-3.5" />
            <span>Редактировать снова</span>
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#116EEE] text-white text-xs font-semibold hover:bg-[#0D5ED0] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Я проверил(а) себя</span>
          </button>
        )}
      </div>

      {showModel && (
        <div className="rounded-xl border border-[#3B1E90]/30 bg-[#3B1E90]/5 p-4" aria-live="polite">
          <p className="text-[10px] font-mono uppercase tracking-wider text-[#3B1E90] font-bold mb-2">
            Пример ответа
          </p>
          {data.modelAnswer.map((line) => (
            <p key={line} className="text-sm text-[#252B2F] font-mono">
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
