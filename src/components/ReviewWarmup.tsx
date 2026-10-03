import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, ArrowRight, Flame } from 'lucide-react';
import { playPronunciationAudio } from '../utils/speech';
import { getWarmupSession } from '../utils/spacedRepetition';
import { LESSONS_META } from '../data/lessons';
import type { ReviewCardState, ReviewGrade, DueReviewCard } from '../types';
import { useI18n } from '../i18n';
import { localizeLessonText } from '../i18n/lessonContent';
import { useDialogFocus } from '../hooks/useDialogFocus';

interface ReviewWarmupProps {
  userCardStates: Record<string, ReviewCardState>;
  completedLessonNumbers: number[];
  onCardGraded: (cardId: string, grade: ReviewGrade) => void;
  onDone: () => void;
}

const GRADE_BUTTONS: { grade: ReviewGrade; key: 'review.again' | 'review.hard' | 'review.good' | 'review.easy'; color: string }[] = [
  { grade: 'again', key: 'review.again', color: '#C23B4A' },
  { grade: 'hard', key: 'review.hard', color: '#A86400' },
  { grade: 'good', key: 'review.good', color: '#3B1E90' },
  { grade: 'easy', key: 'review.easy', color: '#3F7D5C' },
];

export const ReviewWarmup: React.FC<ReviewWarmupProps> = ({
  userCardStates,
  completedLessonNumbers,
  onCardGraded,
  onDone,
}) => {
  const { language, t } = useI18n();
  const session = useMemo(
    () => getWarmupSession(userCardStates, completedLessonNumbers, 8),
    [userCardStates, completedLessonNumbers]
  );

  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [gradedCount, setGradedCount] = useState(0);
  const [audioUnavailable, setAudioUnavailable] = useState(false);
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const revealButtonRef = React.useRef<HTMLButtonElement>(null);
  const firstGradeButtonRef = React.useRef<HTMLButtonElement>(null);
  const previousIndexRef = React.useRef(index);

  useDialogFocus(session.length > 0, onDone, dialogRef, overlayRef);

  React.useEffect(() => {
    if (session.length === 0) {
      onDone();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.length]);

  React.useEffect(() => {
    if (isFlipped) {
      window.requestAnimationFrame(() => firstGradeButtonRef.current?.focus());
    } else if (previousIndexRef.current !== index) {
      window.requestAnimationFrame(() => revealButtonRef.current?.focus());
    }
    previousIndexRef.current = index;
  }, [index, isFlipped]);

  if (session.length === 0) {
    return null;
  }

  const card: DueReviewCard = session[index];
  const reminderLesson = card.relatedLessonId
    ? LESSONS_META.find((lesson) => lesson.number === card.relatedLessonId)
    : undefined;
  const reminder = reminderLesson
    ? t('review.grammarReminder', {
        title: localizeLessonText(reminderLesson.title, language),
        subtitle: localizeLessonText(reminderLesson.subtitle, language),
      })
    : null;

  const handleGrade = (grade: ReviewGrade) => {
    onCardGraded(card.state.cardId, grade);
    setGradedCount((c) => c + 1);

    if (index + 1 >= session.length) {
      onDone();
    } else {
      setIndex((i) => i + 1);
      setIsFlipped(false);
    }
  };

  const playAudio = () => {
    setAudioUnavailable(false);
    playPronunciationAudio(card.hu, undefined, undefined, () => setAudioUnavailable(true));
  };

  return (
    <div ref={overlayRef} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252B2F]/70 backdrop-blur-xs">
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-warmup-title"
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#FFFFFF] border border-[#D6DEE6] rounded-2xl w-full max-w-md p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 text-xs font-mono text-[#666E7E]">
            <Flame aria-hidden="true" className="w-4 h-4 text-[#A86400]" />
            <h2 id="review-warmup-title">{t('review.warmup', { current: index + 1, total: session.length })}</h2>
          </div>
          <button
            type="button"
            onClick={onDone}
            className="min-h-11 px-2 text-xs text-[#666E7E] hover:text-[#116EEE] underline cursor-pointer"
          >
            {t('review.skip')}
          </button>
        </div>

        <div
          role="progressbar"
          aria-label={t('review.progress')}
          aria-valuemin={0}
          aria-valuemax={session.length}
          aria-valuenow={gradedCount}
          className="h-1.5 bg-[#D6DEE6]/50 rounded-full mb-6 overflow-hidden"
        >
          <motion.div
            className="h-full bg-[#116EEE] rounded-full"
            animate={{ width: `${(gradedCount / session.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="text-[11px] font-mono uppercase tracking-wider text-[#A86400] mb-2">
          {localizeLessonText(card.lessonTitle, language)}
        </div>

        <div className="min-h-[140px] flex flex-col items-center justify-center text-center rounded-xl border border-[#D6DEE6] bg-white p-6 mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-bold font-mono text-[#252B2F]">{card.hu}</span>
            <button
              type="button"
              aria-label={t('pronunciation.play', { text: card.hu })}
              onClick={(e) => {
                e.stopPropagation();
                playAudio();
              }}
              className="h-11 w-11 rounded-full bg-[#116EEE]/10 hover:bg-[#116EEE] text-[#116EEE] hover:text-white transition-colors inline-flex items-center justify-center"
            >
              <Volume2 aria-hidden="true" className="w-4 h-4" />
            </button>
          </div>
          {language === 'ru' && card.phonetic && <div className="text-xs text-[#666E7E] font-mono mb-3">{card.phonetic}</div>}
          {audioUnavailable && (
            <div className="text-xs text-red-700 mb-3" role="alert">{t('slide.audioUnavailable')}</div>
          )}

          <AnimatePresence mode="wait">
            {isFlipped ? (
              <motion.div
                key="answer"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="space-y-1"
              >
                <div className="text-lg font-semibold text-[#3B1E90]">{localizeLessonText(card.ru, language)}</div>
                {card.exampleSentence && (
                  <div className="text-xs text-[#252B2F]/70 italic">{card.exampleSentence}</div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="prompt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-[#666E7E] italic border-b border-dashed border-[#666E7E] pb-0.5"
              >
                {t('review.revealHint')}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {isFlipped && reminder && (
          <div className="text-xs text-[#3B1E90] bg-[#3B1E90]/10 border-l-4 border-[#3B1E90] rounded-r-lg px-3 py-2 mb-4">
            {reminder}
          </div>
        )}

        {isFlipped ? (
          <div className="grid grid-cols-4 gap-2">
            {GRADE_BUTTONS.map((btn, buttonIndex) => (
              <button
                ref={buttonIndex === 0 ? firstGradeButtonRef : undefined}
                type="button"
                key={btn.grade}
                onClick={() => handleGrade(btn.grade)}
                style={{ borderColor: btn.color, color: btn.color }}
                className="min-h-11 text-[11px] font-semibold py-2 rounded-lg border-2 bg-white hover:text-white transition-colors cursor-pointer"
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = btn.color)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
              >
                {t(btn.key)}
              </button>
            ))}
          </div>
        ) : (
          <button
            ref={revealButtonRef}
            type="button"
            onClick={() => setIsFlipped(true)}
            className="min-h-11 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#116EEE] text-white text-sm font-semibold hover:bg-[#0D5ED0] transition-colors cursor-pointer"
          >
            <span>{t('review.showTranslation')}</span>
            <ArrowRight aria-hidden="true" className="w-4 h-4" />
          </button>
        )}
      </motion.div>
    </div>
  );
};
