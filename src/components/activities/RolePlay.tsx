import React, { useState } from 'react';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { ActivityEvidence, ActivityRuntimeState, RolePlayData, RolePlayTurn } from '../../types';
import {
  rolePlayChoiceResult,
  advancesRolePlay,
  restoreRolePlayTurnId,
  rolePlayCompletionEvidence,
} from '../../utils/activityUtils';

interface RolePlayProps {
  data: RolePlayData;
  evidence?: ActivityEvidence;
  onEvidence: (evidence: ActivityEvidence) => void;
  runtime?: ActivityRuntimeState;
  onRuntimeChange?: (patch: Partial<ActivityRuntimeState>) => void;
}

/**
 * Controlled role-play with branching.
 * Pilot honesty: the app does NOT automatically understand free Hungarian speech.
 * Learner turns are `choice` (explicit options, with correct/feedback branching)
 * or text-only self-practice. No learner audio is captured or evaluated.
 */
export const RolePlay: React.FC<RolePlayProps> = ({ data, evidence, onEvidence, runtime, onRuntimeChange }) => {
  const [currentTurnId, setCurrentTurnId] = useState<string>(() => restoreRolePlayTurnId(data, runtime));
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isEnded, setIsEnded] = useState<boolean>(() => evidence?.completed === true);

  const turn: RolePlayTurn | undefined = data.turns.find((t) => t.id === currentTurnId);

  const finish = () => {
    setIsEnded(true);
    // Guided interaction is PARTIAL and never auto-passed. No learner voice is
    // captured and completion does not claim speaking competence.
    onEvidence(rolePlayCompletionEvidence(data.id));
  };

  const advanceTo = (nextId?: string) => {
    if (!nextId) {
      finish();
      return;
    }
    setFeedback(null);
    setCurrentTurnId(nextId);
    onRuntimeChange?.({ rolePlayCurrentTurnId: nextId });
  };

  if (!turn || isEnded) {
    return (
      <div className="rounded-2xl border border-[#D9CBB0] bg-[#F6EFE4]/70 p-4 md:p-5 space-y-4">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-[#7A1E2B]" />
          <h3 className="font-mono font-bold text-[#57121C] text-sm md:text-base">
            {data.title ?? 'Ролевая игра'}
          </h3>
          <span className="ml-auto text-[10px] font-mono uppercase text-emerald-700 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> completed · PARTIAL
          </span>
        </div>
        <p className="text-sm text-[#2A2320]">
          {data.completionMessage ??
            'Отличная работа! Ты выполнил(а) сценарий: заказ, реакция на отказ и просьба счёта.'}
        </p>
      </div>
    );
  }

  const isWaiter = turn.speaker === 'waiter';
  const isStage = turn.speaker === 'stage';
  const isLearner = turn.speaker === 'learner';
  const isChoice = isLearner && turn.responseMode === 'choice';
  const isSelfPractice = isLearner && turn.responseMode === 'selfPractice';
  const isSystemCategory = isLearner && turn.responseMode === 'systemCategory';

  const handleChoice = (option: string) => {
    if (!turn || !isChoice) return;
    const result = rolePlayChoiceResult(turn, option);
    if (!advancesRolePlay(result)) {
      setFeedback(result.feedback ?? 'Próbáld újra.');
      return;
    }
    advanceTo(result.nextTurnId);
  };

  return (
    <div className="rounded-2xl border border-[#D9CBB0] bg-[#F6EFE4]/70 p-4 md:p-5 space-y-4">
      <div className="flex items-center gap-2">
        <MessageCircle className="w-4 h-4 text-[#7A1E2B]" />
        <h3 className="font-mono font-bold text-[#57121C] text-sm md:text-base">
          {data.title ?? 'Ролевая игра'}
        </h3>
        {evidence?.completed && (
          <span className="ml-auto text-[10px] font-mono uppercase text-emerald-700 font-semibold">
            ✓ completed · PARTIAL
          </span>
        )}
      </div>

      <div aria-live="polite" className="space-y-4">
        {isStage && (
          <div className="flex items-center gap-3 py-2" role="separator">
            <span className="flex-1 h-px bg-[#D9CBB0]" />
            <span className="font-mono text-xs font-bold text-[#B98A2B] uppercase tracking-wider text-center">
              {turn.stageLabel ?? turn.prompt}
            </span>
            <span className="flex-1 h-px bg-[#D9CBB0]" />
          </div>
        )}

        {isWaiter && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white border border-[#D9CBB0] p-3 shadow-2xs">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#B98A2B] font-bold mb-1">
                {data.partnerLabel ?? 'Pincér · Официант'}
              </div>
              <p className="text-sm md:text-base text-[#2A2320]">{turn.prompt}</p>
            </div>
          </div>
        )}

        {isLearner && !isChoice && (
          <div className="flex justify-end">
            <div className="w-full max-w-[90%] rounded-2xl rounded-tr-sm bg-[#2C5F58]/10 border border-[#2C5F58]/30 p-3">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#2C5F58] font-bold mb-1">
                Te · Ты
              </div>
              {turn.prompt && <p className="text-xs text-[#8A7A68] mb-2">{turn.prompt}</p>}
              {turn.model && (
                <p className="text-sm md:text-base font-mono text-[#57121C] mb-2">„{turn.model}”</p>
              )}
              {isSelfPractice && (
                <p className="text-xs text-[#8A7A68]">
                  Произнеси ответ вслух для самопрактики или просто продумай его. Микрофон,
                  запись и автоматическая оценка не используются.
                </p>
              )}
              {isSystemCategory && (
                <p className="text-xs text-[#8A7A68]">
                  Проверка этой реплики требует оценки учителя/системы — автоматическое распознавание
                  свободной речи не реализовано.
                </p>
              )}
            </div>
          </div>
        )}

        {isChoice && (
          <div className="space-y-2">
            {turn.prompt && <p className="text-sm font-semibold text-[#2A2320]">{turn.prompt}</p>}
            {turn.model && <p className="text-sm font-mono text-[#57121C]">„{turn.model}”</p>}
            <div className="grid gap-2">
              {turn.options?.map((option) => (
                <button
                  key={option}
                  onClick={() => handleChoice(option)}
                  className="w-full min-w-0 text-left p-3 rounded-xl border border-[#D9CBB0] bg-white text-sm text-[#2A2320] [overflow-wrap:anywhere] hover:border-[#7A1E2B]/60 hover:bg-[#F6EFE4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1E2B]/50 transition-all cursor-pointer"
                >
                  {option}
                </button>
              ))}
            </div>
            {feedback && (
              <p className="text-xs text-[#B98A2B] font-medium" role="status">
                {feedback}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Continue for non-choice turns */}
      {!isChoice && (
        <div className="flex justify-end pt-2">
          <button
            onClick={() => advanceTo(turn.next)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#7A1E2B] text-white text-xs md:text-sm font-semibold hover:bg-[#57121C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1E2B]/50 focus-visible:ring-offset-2 cursor-pointer"
          >
            <span>Дальше</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
