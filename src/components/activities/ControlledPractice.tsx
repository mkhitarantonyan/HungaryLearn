import React, { useState } from 'react';
import { CheckCircle2, XCircle, ListChecks, RotateCcw } from 'lucide-react';
import type { ActivityAttempt, ActivityEvidence, ControlledExercise, ControlledPracticeData } from '../../types';
import { isAnswerAccepted } from '../../utils/answerNormalization';
import { controlledEvidence } from '../../utils/activityUtils';

interface ControlledPracticeProps {
  data: ControlledPracticeData;
  evidence?: ActivityEvidence;
  onEvidence: (evidence: ActivityEvidence, attempt?: ActivityAttempt) => void;
  onResetEvidence?: (activityId: string) => void;
}

interface ExerciseState {
  done: boolean;
  correct: boolean;
}

/**
 * Controlled practice: singleChoice / fillGap / textInput.
 * completed = all exercises attempted; passed = all attempted AND score >= passCount.
 * Practice completion is NOT mastery.
 */
export const ControlledPractice: React.FC<ControlledPracticeProps> = ({ data, evidence, onEvidence, onResetEvidence }) => {
  const [states, setStates] = useState<Record<string, ExerciseState>>({});
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [answers, setAnswers] = useState<Record<string, number | string>>({});

  const total = data.exercises.length;
  const passCount = data.passCount ?? Math.ceil(total * 0.8);
  const score = data.exercises.filter((ex) => states[ex.id]?.correct).length;
  const allDone = data.exercises.every((ex) => states[ex.id]?.done);

  const emitEvidence = (next: Record<string, ExerciseState>, nextAnswers: Record<string, number | string>) => {
    if (!data.exercises.every((ex) => next[ex.id]?.done)) return;
    const nextScore = data.exercises.filter((ex) => next[ex.id]?.correct).length;
    const result = controlledEvidence(true, nextScore, total, passCount);
    onEvidence(
      { activityId: data.id, attempted: true, ...result },
      { activityId: data.id, answers: nextAnswers }
    );
  };

  const handleChoice = (ex: Extract<ControlledExercise, { kind: 'singleChoice' }>, idx: number) => {
    if (states[ex.id]?.done) return;
    const next = { ...states, [ex.id]: { done: true, correct: idx === ex.correctIndex } };
    const nextAnswers = { ...answers, [ex.id]: idx };
    setStates(next);
    setAnswers(nextAnswers);
    emitEvidence(next, nextAnswers);
  };

  const handleCheck = (ex: Extract<ControlledExercise, { kind: 'fillGap' | 'textInput' }>) => {
    if (states[ex.id]?.done) return;
    const value = inputs[ex.id] ?? '';
    const next = { ...states, [ex.id]: { done: true, correct: isAnswerAccepted(value, ex.accept) } };
    const nextAnswers = { ...answers, [ex.id]: value };
    setStates(next);
    setAnswers(nextAnswers);
    emitEvidence(next, nextAnswers);
  };

  const handleRetryIncorrect = () => {
    onResetEvidence?.(data.id);
    const next = { ...states };
    for (const ex of data.exercises) {
      if (next[ex.id]?.done && !next[ex.id].correct) delete next[ex.id];
    }
    setStates(next);
    setInputs((prev) => {
      const p = { ...prev };
      for (const ex of data.exercises) {
        if (!next[ex.id]) delete p[ex.id];
      }
      return p;
    });
    setAnswers((prev) => Object.fromEntries(Object.entries(prev).filter(([id]) => next[id]?.done)));
  };

  return (
    <div className="rounded-2xl border border-[#D6DEE6] bg-[#EDF4FB]/70 p-4 md:p-5 space-y-4">
      <div className="flex items-center gap-2">
        <ListChecks className="w-4 h-4 text-[#116EEE]" />
        <h3 className="font-mono font-bold text-[#252B2F] text-sm md:text-base">
          {data.title ?? 'Отработка форм'}
        </h3>
        {evidence?.completed && (
          <span className="ml-auto text-[10px] font-mono uppercase font-semibold text-emerald-700">
            {evidence.score}/{evidence.total} · {evidence.passed ? 'passed (practice)' : 'completed (не passed)'}
          </span>
        )}
      </div>

      <div className="space-y-4">
        {data.exercises.map((ex, idx) => {
          const state = states[ex.id];
          return (
            <div key={ex.id} className="rounded-xl border border-[#D6DEE6] bg-white p-4 space-y-2">
              <div className="flex min-w-0 items-start gap-2">
                <span className="shrink-0 w-6 h-6 rounded-full bg-[#116EEE]/10 text-[#116EEE] font-mono text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <p className="min-w-0 text-sm font-semibold text-[#252B2F] leading-snug [overflow-wrap:anywhere]">{ex.prompt}</p>
              </div>

              {ex.kind === 'singleChoice' && (
                <div className="space-y-2 pl-8">
                  {ex.options.map((option, oi) => {
                    const isAnswered = state?.done;
                    const isCorrect = oi === ex.correctIndex;
                    let style = 'bg-white border-[#D6DEE6] text-[#252B2F] hover:border-[#116EEE]/50';
                    if (isAnswered) {
                      if (isCorrect) style = 'bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold';
                      else style = 'bg-white/60 border-gray-200 text-gray-400 opacity-60';
                    }
                    return (
                      <button
                        key={oi}
                        onClick={() => handleChoice(ex, oi)}
                        disabled={isAnswered}
                        className={`w-full min-w-0 text-left p-3 rounded-xl border text-xs md:text-sm transition-all flex items-center justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#116EEE]/50 focus-visible:ring-offset-2 ${style}`}
                      >
                        <span className="min-w-0 break-words">{option}</span>
                        {isAnswered && isCorrect && <CheckCircle2 aria-hidden="true" className="w-4 h-4 text-emerald-600" />}
                      </button>
                    );
                  })}
                  {state?.done && (
                    <p
                      className={`text-xs flex items-center gap-1 ${state.correct ? 'text-emerald-700' : 'text-red-700'}`}
                      role="status"
                      aria-live="polite"
                    >
                      {state.correct ? (
                        <CheckCircle2 aria-hidden="true" className="w-3.5 h-3.5" />
                      ) : (
                        <XCircle aria-hidden="true" className="w-3.5 h-3.5" />
                      )}
                      {state.correct ? 'Верно.' : `Неверно. Правильный ответ: ${ex.options[ex.correctIndex]}`}
                    </p>
                  )}
                </div>
              )}

              {(ex.kind === 'fillGap' || ex.kind === 'textInput') && (
                <div className="pl-8 space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={inputs[ex.id] ?? ''}
                      onChange={(e) => setInputs((prev) => ({ ...prev, [ex.id]: e.target.value }))}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !state?.done) {
                          e.preventDefault();
                          handleCheck(ex);
                        }
                      }}
                      disabled={state?.done}
                      aria-label={ex.prompt}
                      className="w-full min-w-0 flex-1 rounded-lg border border-[#D6DEE6] bg-white px-3 py-2 text-sm text-[#252B2F] focus:outline-none focus:ring-2 focus:ring-[#116EEE]/40"
                    />
                    <button
                      onClick={() => handleCheck(ex)}
                      disabled={state?.done}
                      className="w-full min-h-11 sm:w-auto shrink-0 px-4 py-2 rounded-lg bg-[#116EEE] text-white text-xs font-semibold hover:bg-[#0D5ED0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#116EEE]/50 focus-visible:ring-offset-2 disabled:opacity-40 cursor-pointer"
                    >
                      Проверить
                    </button>
                  </div>
                  {state?.done && (
                    <p className={`text-xs flex items-center gap-1 ${state.correct ? 'text-emerald-700' : 'text-red-700'}`} role="status" aria-live="polite">
                      {state.correct ? <CheckCircle2 aria-hidden="true" className="w-3.5 h-3.5" /> : <XCircle aria-hidden="true" className="w-3.5 h-3.5" />}
                      {state.correct ? 'Верно.' : `Неверно. Правильный ответ: ${ex.accept[0]}`}
                    </p>
                  )}
                </div>
              )}

              {state?.done && ex.explanation && (
                <p className="pl-8 text-xs text-[#666E7E]">{ex.explanation}</p>
              )}
            </div>
          );
        })}
      </div>

      {allDone && score < total && (
        <button
          onClick={handleRetryIncorrect}
          className="flex min-h-11 items-center gap-1.5 px-3 py-2 rounded-lg border border-[#116EEE] text-[#116EEE] text-xs font-semibold hover:bg-[#116EEE]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#116EEE]/50 focus-visible:ring-offset-2 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Повторить ошибки</span>
        </button>
      )}

      {allDone && (
        <p className="text-xs font-semibold" aria-live="polite">
          {score}/{total} ·{' '}
          <span className={evidence?.passed ? 'text-emerald-700' : 'text-[#C77B00]'}>
            {evidence?.passed ? 'passed (practice)' : 'completed, но не passed'}
          </span>
        </p>
      )}
    </div>
  );
};
