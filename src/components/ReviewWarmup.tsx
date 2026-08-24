import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, ArrowRight, Flame } from 'lucide-react';
import { playRecordedAudio } from '../utils/speech';
import { getWarmupSession, getGrammarReminder } from '../utils/spacedRepetition';
import type { ReviewCardState, ReviewGrade, DueReviewCard } from '../types';

interface ReviewWarmupProps {
  userCardStates: Record<string, ReviewCardState>;
  completedLessonNumbers: number[];
  onCardGraded: (cardId: string, grade: ReviewGrade) => void;
  onDone: () => void;
}

const GRADE_BUTTONS: { grade: ReviewGrade; label: string; color: string }[] = [
  { grade: 'again', label: 'Не помню', color: '#C24B3A' },
  { grade: 'hard', label: 'Трудно', color: '#B98A2B' },
  { grade: 'good', label: 'Помню', color: '#2C5F58' },
  { grade: 'easy', label: 'Легко', color: '#3F7D5C' },
];

export const ReviewWarmup: React.FC<ReviewWarmupProps> = ({
  userCardStates,
  completedLessonNumbers,
  onCardGraded,
  onDone,
}) => {
  const session = useMemo(
    () => getWarmupSession(userCardStates, completedLessonNumbers, 8),
    [userCardStates, completedLessonNumbers]
  );

  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [gradedCount, setGradedCount] = useState(0);
  const [audioUnavailable, setAudioUnavailable] = useState(false);

  React.useEffect(() => {
    if (session.length === 0) {
      onDone();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.length]);

  if (session.length === 0) {
    return null;
  }

  const card: DueReviewCard = session[index];
  const reminder = getGrammarReminder(card);

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
    playRecordedAudio(card.hu, undefined, undefined, () => setAudioUnavailable(true));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A2320]/70 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#FBF7EF] border border-[#D9CBB0] rounded-2xl w-full max-w-md p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8A7A68]">
            <Flame className="w-4 h-4 text-[#B98A2B]" />
            <span>Разминка · {index + 1}/{session.length}</span>
          </div>
          <button
            onClick={onDone}
            className="text-xs text-[#8A7A68] hover:text-[#7A1E2B] underline cursor-pointer"
          >
            Пропустить
          </button>
        </div>

        <div className="h-1.5 bg-[#D9CBB0]/50 rounded-full mb-6 overflow-hidden">
          <motion.div
            className="h-full bg-[#7A1E2B] rounded-full"
            animate={{ width: `${(gradedCount / session.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="text-[11px] font-mono uppercase tracking-wider text-[#B98A2B] mb-2">
          {card.lessonTitle}
        </div>

        <div
          onClick={() => setIsFlipped((f) => !f)}
          className="min-h-[140px] flex flex-col items-center justify-center text-center cursor-pointer rounded-xl border border-[#D9CBB0] bg-white p-6 mb-5"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-bold font-mono text-[#57121C]">{card.hu}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                playAudio();
              }}
              className="p-1.5 rounded-full bg-[#7A1E2B]/10 hover:bg-[#7A1E2B] text-[#7A1E2B] hover:text-white transition-colors"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
          {card.phonetic && <div className="text-xs text-[#8A7A68] font-mono mb-3">{card.phonetic}</div>}
          {audioUnavailable && (
            <div className="text-xs text-red-700 mb-3" role="alert">Записанное аудио недоступно.</div>
          )}

          <AnimatePresence mode="wait">
            {isFlipped ? (
              <motion.div
                key="answer"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-1"
              >
                <div className="text-lg font-semibold text-[#2C5F58]">{card.ru}</div>
                {card.exampleSentence && (
                  <div className="text-xs text-[#2A2320]/70 italic">{card.exampleSentence}</div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="prompt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-[#8A7A68] italic border-b border-dashed border-[#8A7A68] pb-0.5"
              >
                нажми, чтобы вспомнить перевод
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {isFlipped && reminder && (
          <div className="text-xs text-[#2C5F58] bg-[#2C5F58]/10 border-l-4 border-[#2C5F58] rounded-r-lg px-3 py-2 mb-4">
            {reminder}
          </div>
        )}

        {isFlipped ? (
          <div className="grid grid-cols-4 gap-2">
            {GRADE_BUTTONS.map((btn) => (
              <button
                key={btn.grade}
                onClick={() => handleGrade(btn.grade)}
                style={{ borderColor: btn.color, color: btn.color }}
                className="text-[11px] font-semibold py-2 rounded-lg border-2 bg-white hover:text-white transition-colors cursor-pointer"
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = btn.color)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
              >
                {btn.label}
              </button>
            ))}
          </div>
        ) : (
          <button
            onClick={() => setIsFlipped(true)}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#7A1E2B] text-white text-sm font-semibold hover:bg-[#57121C] transition-colors cursor-pointer"
          >
            <span>Показать перевод</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </motion.div>
    </div>
  );
};
