import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import type {
  ListeningQuestion,
  ListeningTextInputQuestion,
  ReadingQuestion,
} from '../../types';
import {
  isListeningQuestionAnswerCorrect,
  isListeningTextInputQuestion,
} from '../../utils/activityUtils';

interface QuestionSetProps {
  questions: ListeningQuestion[];
  submitLabel?: string;
  allowRetry?: boolean;
  /** Fired each time all questions are answered, with the current score. */
  onAllAnswered?: (score: number, total: number) => void;
  /** Fired when the optional submit button is pressed. */
  onSubmit?: (score: number, total: number) => void;
  /** Fired when the user starts a retry (parent should reset activity evidence). */
  onRetry?: () => void;
}

interface QuestionFeedbackProps {
  question: ReadingQuestion;
  chosen: number;
  feedbackId: string;
}

/** Only the option selected by the learner is described by its answer feedback. */
export function getQuestionOptionFeedbackId(
  chosen: number | undefined,
  optionIndex: number,
  feedbackId: string
): string | undefined {
  return chosen === optionIndex ? feedbackId : undefined;
}

/** Textual feedback shared by the visual UI and assistive technology. */
export const QuestionFeedback: React.FC<QuestionFeedbackProps> = ({
  question,
  chosen,
  feedbackId,
}) => {
  const isCorrect = chosen === question.correctIndex;

  return (
    <div
      id={feedbackId}
      className="pl-8 text-xs text-[#2A2320]"
      role="status"
      aria-live="polite"
    >
      {isCorrect ? (
        <span className="text-emerald-700 font-semibold">Верно.</span>
      ) : (
        <span className="text-red-700 font-semibold">
          Неверно. Правильный ответ: {question.options[question.correctIndex]}.
        </span>
      )}
      {question.explanation && (
        <span className="text-[#8A7A68]"> {question.explanation}</span>
      )}
    </div>
  );
};

interface TextInputQuestionFeedbackProps {
  question: ListeningTextInputQuestion;
  answer: string;
  feedbackId: string;
}

/** Exact-entry feedback is textual; the icon/color treatment is never the sole signal. */
export const TextInputQuestionFeedback: React.FC<TextInputQuestionFeedbackProps> = ({
  question,
  answer,
  feedbackId,
}) => {
  const isCorrect = isListeningQuestionAnswerCorrect(question, answer);
  return (
    <div id={feedbackId} className="text-xs text-[#2A2320]" role="status" aria-live="polite">
      {isCorrect ? (
        <span className="text-emerald-700 font-semibold">Верно.</span>
      ) : (
        <span className="text-red-700 font-semibold">
          Неверно. Правильный ответ: {question.accept[0]}.
        </span>
      )}
      {question.explanation && (
        <span className="text-[#8A7A68]"> {question.explanation}</span>
      )}
    </div>
  );
};

/**
 * Shared choice/text-input question set used by ReadingTask and ListeningTask.
 * Exposes the exact score/total so callers can store precise evidence.
 */
export const QuestionSet: React.FC<QuestionSetProps> = ({
  questions,
  submitLabel,
  allowRetry = false,
  onAllAnswered,
  onSubmit,
  onRetry,
}) => {
  const [selected, setSelected] = useState<Record<string, number | string>>({});
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = questions.filter((q) => selected[q.id] !== undefined).length;
  const allAnswered = answeredCount === questions.length;
  const score = questions.filter((q) =>
    isListeningQuestionAnswerCorrect(q, selected[q.id])
  ).length;

  const handleSelect = (question: ReadingQuestion, idx: number) => {
    setSelected((prev) => {
      if (prev[question.id] !== undefined || submitted) return prev;
      return { ...prev, [question.id]: idx };
    });
  };

  const handleTextCheck = (question: ListeningTextInputQuestion) => {
    setSelected((prev) => {
      if (prev[question.id] !== undefined || submitted) return prev;
      return { ...prev, [question.id]: inputs[question.id] ?? '' };
    });
  };

  React.useEffect(() => {
    if (allAnswered && !submitted && onAllAnswered) {
      onAllAnswered(score, questions.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allAnswered, submitted]);

  const handleSubmit = () => {
    if (!allAnswered) return;
    setSubmitted(true);
    onSubmit?.(score, questions.length);
  };

  const handleRetry = () => {
    onRetry?.();
    setSelected({});
    setInputs({});
    setSubmitted(false);
  };

  return (
    <div className="min-w-0 space-y-5">
      {questions.map((q, qi) => {
        const answer = selected[q.id];
        const isAnswered = answer !== undefined;
        const promptId = q.id + '-prompt';
        const feedbackId = q.id + '-feedback';

        return (
          <div
            key={q.id}
            className="rounded-xl border border-[#D9CBB0] bg-white p-4 space-y-3"
            aria-labelledby={promptId}
          >
            <div className="flex items-start gap-2">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#7A1E2B]/10 text-[#7A1E2B] font-mono text-xs font-bold flex items-center justify-center">
                {qi + 1}
              </span>
              <p id={promptId} className="min-w-0 text-sm md:text-base font-semibold text-[#2A2320] leading-snug [overflow-wrap:anywhere]">
                {q.question}
              </p>
            </div>

            {isListeningTextInputQuestion(q) ? (
              <div className="space-y-2 pl-8">
                <div className="flex min-w-0 flex-col gap-2 sm:flex-row">
                  <input
                    type="text"
                    value={inputs[q.id] ?? ''}
                    onChange={(event) =>
                      setInputs((prev) => ({ ...prev, [q.id]: event.target.value }))
                    }
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' && !isAnswered) {
                        event.preventDefault();
                        handleTextCheck(q);
                      }
                    }}
                    disabled={isAnswered}
                    aria-labelledby={promptId}
                    aria-describedby={isAnswered ? feedbackId : undefined}
                    autoComplete="off"
                    spellCheck={false}
                    className="w-full min-w-0 flex-1 rounded-lg border border-[#D9CBB0] bg-white px-3 py-2 text-sm text-[#2A2320] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1E2B]/50 focus-visible:ring-offset-2 disabled:opacity-70"
                  />
                  <button
                    type="button"
                    onClick={() => handleTextCheck(q)}
                    disabled={isAnswered}
                    aria-describedby={promptId}
                    className="w-full shrink-0 rounded-lg bg-[#7A1E2B] px-4 py-2 text-xs font-semibold text-white hover:bg-[#57121C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1E2B]/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
                  >
                    Проверить
                  </button>
                </div>
                {isAnswered && typeof answer === 'string' && (
                  <TextInputQuestionFeedback question={q} answer={answer} feedbackId={feedbackId} />
                )}
              </div>
            ) : (
              <div className="space-y-2 pl-8">
              {q.options.map((option, idx) => {
                const chosen = typeof answer === 'number' ? answer : undefined;
                let style = 'bg-white border-[#D9CBB0] text-[#2A2320] hover:border-[#7A1E2B]/50';
                if (isAnswered) {
                  if (idx === q.correctIndex) style = 'bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold';
                  else if (idx === chosen) style = 'bg-red-50 border-red-400 text-red-800';
                  else style = 'bg-white/60 border-gray-200 text-gray-400 opacity-60';
                }
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect(q, idx)}
                    disabled={isAnswered}
                    aria-label={option}
                    aria-describedby={getQuestionOptionFeedbackId(chosen, idx, feedbackId)}
                    className={`w-full min-w-0 text-left p-3 rounded-xl border text-xs md:text-sm transition-all flex items-center justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1E2B]/50 focus-visible:ring-offset-2 ${style}`}
                  >
                    <span className="min-w-0 break-words">{option}</span>
                    {isAnswered && idx === q.correctIndex && (
                      <CheckCircle2 aria-hidden="true" className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                    {isAnswered && idx === chosen && idx !== q.correctIndex && (
                      <XCircle aria-hidden="true" className="w-4 h-4 text-red-500 shrink-0" />
                    )}
                  </button>
                );
              })}
              </div>
            )}

            {!isListeningTextInputQuestion(q) && isAnswered && typeof answer === 'number' && (
              <QuestionFeedback question={q} chosen={answer} feedbackId={feedbackId} />
            )}
          </div>
        );
      })}

      {allAnswered && !submitted && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-mono font-bold text-[#57121C]">
            {score} / {questions.length}
          </span>
          {allowRetry && (
            <button
              type="button"
              onClick={handleRetry}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#7A1E2B] text-[#7A1E2B] text-xs font-semibold hover:bg-[#7A1E2B]/10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1E2B]/50 focus-visible:ring-offset-2"
            >
              <RotateCcw aria-hidden="true" className="w-3.5 h-3.5" />
              <span>Пройти заново</span>
            </button>
          )}
          {onSubmit && (
            <button
              type="button"
              onClick={handleSubmit}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#7A1E2B] text-white text-xs font-semibold hover:bg-[#57121C] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1E2B]/50 focus-visible:ring-offset-2"
            >
              <span>{submitLabel ?? 'Завершить'}</span>
              <ArrowRight aria-hidden="true" className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {submitted && (
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs text-emerald-700 font-semibold" aria-live="polite">
            Отвечено: {score} / {questions.length}.
          </p>
          {allowRetry && (
            <button
              type="button"
              onClick={handleRetry}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#7A1E2B] text-[#7A1E2B] text-xs font-semibold hover:bg-[#7A1E2B]/10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1E2B]/50 focus-visible:ring-offset-2"
            >
              <RotateCcw aria-hidden="true" className="w-3.5 h-3.5" />
              <span>Пройти заново</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
