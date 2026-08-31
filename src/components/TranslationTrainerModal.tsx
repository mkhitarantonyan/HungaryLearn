import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lesson } from '../types';
import { getLessonTranslations } from '../utils/lessonQuizAndVocab';
import { SpeechButton } from './SpeechButton';
import { X, RotateCcw, Check, Languages, ChevronLeft, ChevronRight, ArrowRightLeft } from 'lucide-react';

function normalizeAnswer(value: string): string {
  return value
    .trim()
    .toLocaleLowerCase('hu-HU')
    .replace(/[.!?,;:]+$/u, '')
    .replace(/\s+/g, ' ');
}

interface TranslationTrainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson?: Lesson;
}

export const TranslationTrainerModal: React.FC<TranslationTrainerModalProps> = ({ isOpen, onClose, lesson }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setIsFlipped(false);
      setUserInput('');
      setFeedback('idle');
    }
  }, [isOpen, lesson?.id]);

  if (!isOpen) return null;

  const translations = lesson ? getLessonTranslations(lesson) : [];

  if (translations.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252B2F]/60 backdrop-blur-xs">
        <div className="bg-[#FFFFFF] border border-[#D6DEE6] rounded-2xl w-full max-w-lg p-6 shadow-2xl relative text-center">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 text-[#116EEE]">
            <X className="w-5 h-5" />
          </button>
          <h3 className="text-xl font-bold font-mono text-[#252B2F] mb-2">Карточки не найдены</h3>
          <p className="text-sm text-[#666E7E]">Для этого урока пока нет карточек перевода.</p>
        </div>
      </div>
    );
  }

  const currentCard = translations[currentIndex % translations.length];
  const isHuToRu = currentCard.direction === 'hu-to-ru';

  const handleNext = () => {
    setIsFlipped(false);
    setUserInput('');
    setFeedback('idle');
    setCurrentIndex((prev) => (prev + 1) % translations.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setUserInput('');
    setFeedback('idle');
    setCurrentIndex((prev) => (prev - 1 + translations.length) % translations.length);
  };

  const handleCheck = () => {
    const normalizedUser = normalizeAnswer(userInput);
    const validAnswers = [
      currentCard.targetText,
      ...(currentCard.acceptableVariants ?? []),
    ].map(normalizeAnswer);

    if (validAnswers.includes(normalizedUser)) {
      setFeedback('correct');
    } else {
      setFeedback('wrong');
    }
    setIsFlipped(true);
  };

  const handleShowAnswer = () => {
    setFeedback('idle');
    setIsFlipped(true);
  };

  const progressPercent = Math.round(((currentIndex + 1) / translations.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252B2F]/60 backdrop-blur-xs">
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="translation-trainer-title"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#FFFFFF] border border-[#D6DEE6] rounded-2xl w-full max-w-lg p-6 shadow-2xl relative flex flex-col min-h-[500px]"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#D6DEE6]">
          <div>
            <div className="text-xs font-mono font-bold text-[#C77B00] uppercase tracking-wider flex items-center gap-1.5">
              <Languages className="w-3.5 h-3.5" />
              <span id="translation-trainer-title">
                Перевод · Урок {lesson?.number || 1} ({translations.length} карточек)
              </span>
            </div>
            <div className="text-sm font-bold text-[#252B2F] flex items-center gap-1.5 mt-0.5">
              <ArrowRightLeft className="w-3.5 h-3.5 text-[#666E7E]" />
              <span>
                {isHuToRu ? 'Венгерский → Русский' : 'Русский → Венгерский'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="p-2 rounded-full hover:bg-[#116EEE]/10 text-[#116EEE] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#D6DEE6]/40 h-1.5 rounded-full my-4 overflow-hidden">
          <div
            className="bg-[#116EEE] h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Card */}
        <div className="flex-1 flex flex-col items-center justify-center my-2">
          <div className="w-full bg-white border border-[#D6DEE6] rounded-2xl shadow-md p-6 flex flex-col items-center text-center relative">
            <div className="text-xs text-[#666E7E] font-mono absolute top-4 left-4">
              {currentIndex + 1} / {translations.length}
            </div>
            <div className="text-xs text-[#C77B00] font-mono absolute top-4 right-4">
              {isHuToRu ? 'HU → RU' : 'RU → HU'}
            </div>

            {/* Source text */}
            <div className="mt-6 mb-4">
              <div className="text-2xl md:text-3xl font-mono font-bold text-[#252B2F]">
                {currentCard.sourceText}
              </div>
              {isHuToRu && (
                <div className="mt-2">
                  <SpeechButton text={currentCard.sourceText} label="Послушать 🔊" variant="primary" />
                </div>
              )}
            </div>

            {/* Input or Answer */}
            {!isFlipped ? (
              <div className="w-full mt-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                  placeholder="Введите перевод..."
                  autoFocus
                  className="w-full px-4 py-3 rounded-xl border border-[#D6DEE6] bg-[#EDF4FB]/50 text-center font-sans text-base text-[#252B2F] placeholder:text-[#666E7E]/60 focus:outline-none focus:ring-2 focus:ring-[#116EEE]/20 focus:border-[#116EEE] transition-all"
                />
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={handleCheck}
                    className="flex-1 py-2.5 rounded-xl bg-[#3B1E90] text-white text-sm font-semibold hover:bg-[#3B1E90]/90 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Check className="w-4 h-4" />
                    Проверить
                  </button>
                  <button
                    onClick={handleShowAnswer}
                    className="flex-1 py-2.5 rounded-xl border border-[#D6DEE6] bg-white text-[#666E7E] text-sm font-medium hover:bg-[#EDF4FB] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Показать ответ
                  </button>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full mt-2 space-y-3"
              >
                <div
                  className={`px-4 py-3 rounded-xl border text-center font-sans text-lg font-bold ${
                    feedback === 'correct'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                      : feedback === 'wrong'
                        ? 'bg-red-50 border-red-200 text-red-700'
                        : 'bg-[#EDF4FB] border-[#D6DEE6] text-[#3B1E90]'
                  }`}
                >
                  {currentCard.targetText}
                </div>

                {feedback === 'wrong' && userInput.trim() && (
                  <div className="text-xs text-red-500 font-mono">
                    Ваш ответ: {userInput}
                  </div>
                )}

                {currentCard.acceptableVariants && currentCard.acceptableVariants.length > 0 && (
                  <div className="text-xs text-[#666E7E] font-mono">
                    Также принято: {currentCard.acceptableVariants.join(' / ')}
                  </div>
                )}

                {!isHuToRu && (
                  <div className="flex justify-center">
                    <SpeechButton text={currentCard.targetText} label="Послушать 🔊" />
                  </div>
                )}

                {currentCard.grammaticalTag && (
                  <div className="text-[11px] text-[#C77B00] font-mono mt-1">
                    Грамматика: {currentCard.grammaticalTag}
                    {currentCard.relatedLessonId && ` · Урок ${currentCard.relatedLessonId}`}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            onClick={handlePrev}
            aria-label="Предыдущая карточка"
            className="p-3 rounded-xl border border-[#D6DEE6] bg-white hover:bg-[#EDF4FB] text-[#252B2F] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="flex-1 py-3 rounded-xl bg-[#116EEE] text-white text-sm font-semibold hover:bg-[#0D5ED0] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Следующая</span>
            <ChevronRight className="w-4 h-4 hidden md:inline" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
