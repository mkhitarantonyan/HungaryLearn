import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lesson } from '../types';
import { getLessonVocabulary } from '../utils/lessonQuizAndVocab';
import { SpeechButton } from './SpeechButton';
import { X, Volume2, RotateCcw, Check, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

interface WordTrainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson?: Lesson;
  onGrade?: (cardId: string, grade: 'again' | 'good') => void;
}

export const WordTrainerModal: React.FC<WordTrainerModalProps> = ({ isOpen, onClose, lesson, onGrade }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset index when lesson changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  }, [isOpen, lesson?.id]);

  if (!isOpen) return null;

  const vocabulary = lesson ? getLessonVocabulary(lesson) : [];
  
  if (vocabulary.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A2320]/60 backdrop-blur-xs">
        <div className="bg-[#FBF7EF] border border-[#D9CBB0] rounded-2xl w-full max-w-lg p-6 shadow-2xl relative text-center">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 text-[#7A1E2B]">
            <X className="w-5 h-5" />
          </button>
          <h3 className="text-xl font-bold font-mono text-[#57121C] mb-2">Слова не найдены</h3>
          <p className="text-sm text-[#8A7A68]">Для этого урока пока нет сохраненных карточек слов.</p>
        </div>
      </div>
    );
  }

  const currentWord = vocabulary[currentIndex % vocabulary.length];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % vocabulary.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + vocabulary.length) % vocabulary.length);
  };

  const markKnown = (known: boolean) => {
    onGrade?.(currentWord.id, known ? 'good' : 'again');
    handleNext();
  };

  const progressPercent = Math.round(((currentIndex + 1) / vocabulary.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A2320]/60 backdrop-blur-xs">
      <motion.div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="word-trainer-title"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#FBF7EF] border border-[#D9CBB0] rounded-2xl w-full max-w-lg p-6 shadow-2xl relative flex flex-col min-h-[480px]"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#D9CBB0]">
          <div>
            <div className="text-xs font-mono font-bold text-[#B98A2B] uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span id="word-trainer-title">Тренажёр слов · Урок {lesson?.number || 1} ({vocabulary.length} карточек)</span>
            </div>
            <div className="text-sm font-bold text-[#57121C]">Категория: {currentWord.category || lesson?.title}</div>
          </div>

          <button 
            onClick={onClose}
            aria-label="Закрыть"
            className="p-2 rounded-full hover:bg-[#7A1E2B]/10 text-[#7A1E2B] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#D9CBB0]/40 h-1.5 rounded-full my-4 overflow-hidden">
          <div 
            className="bg-[#7A1E2B] h-full transition-all duration-300" 
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Card Flip Container */}
        <div className="flex-1 flex flex-col items-center justify-center my-4">
          <div 
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full h-64 bg-white border border-[#D9CBB0] rounded-2xl shadow-md p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#7A1E2B]/40 transition-all relative group"
          >
            <div className="text-xs text-[#8A7A68] font-mono absolute top-4 left-4">
              {currentIndex + 1} / {vocabulary.length}
            </div>

            <div className="text-xs text-[#B98A2B] font-mono absolute top-4 right-4 flex items-center gap-1">
              <RotateCcw className="w-3 h-3" />
              <span>Кликните для перевода</span>
            </div>

            {!isFlipped ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                <div className="text-3xl md:text-4xl font-mono font-bold text-[#57121C]">
                  {currentWord.hu}
                </div>
                <div className="text-sm font-mono text-[#8A7A68]">{currentWord.phonetic}</div>
                <div className="pt-2">
                  <SpeechButton text={currentWord.hu} label="Послушать 🔊" variant="primary" />
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                <div className="text-2xl md:text-3xl font-sans font-bold text-[#2C5F58]">
                  {currentWord.ru}
                </div>
                {currentWord.exampleSentence && (
                  <div className="text-xs text-[#8A7A68] italic font-mono max-w-xs">
                    Пример: {currentWord.exampleSentence}
                  </div>
                )}
                <div className="pt-2">
                  <SpeechButton text={currentWord.hu} label="Послушать 🔊" />
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            onClick={handlePrev}
            aria-label="Предыдущая карточка"
            className="p-3 rounded-xl border border-[#D9CBB0] bg-white hover:bg-[#F6EFE4] text-[#2A2320] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 flex-1">
            <button
              onClick={() => markKnown(false)}
              className="flex-1 py-3 px-2 rounded-xl border border-red-200 bg-red-50 text-red-700 text-xs md:text-sm font-semibold hover:bg-red-100 transition-colors cursor-pointer"
            >
              Ещё повторить
            </button>
            <button
              onClick={() => markKnown(true)}
              className="flex-1 py-3 px-2 rounded-xl bg-[#2C5F58] text-white text-xs md:text-sm font-semibold hover:bg-[#2C5F58]/90 transition-colors cursor-pointer flex items-center justify-center gap-1"
            >
              <Check className="w-4 h-4" />
              <span>Знаю слово</span>
            </button>
          </div>

          <button
            onClick={handleNext}
            aria-label="Следующая карточка"
            className="p-3 rounded-xl border border-[#D9CBB0] bg-white hover:bg-[#F6EFE4] text-[#2A2320] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
