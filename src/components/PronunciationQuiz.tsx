import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lesson } from '../types';
import { getLessonQuiz } from '../utils/lessonQuizAndVocab';
import { CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, HelpCircle } from 'lucide-react';

interface PronunciationQuizProps {
  onClose: () => void;
  lesson?: Lesson;
  onQuizComplete?: (lessonNumber: number, score: number, total: number) => void;
}

export const PronunciationQuiz: React.FC<PronunciationQuizProps> = ({ onClose, lesson, onQuizComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Reset state when lesson changes
  useEffect(() => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setShowExplanation(false);
    setIsCompleted(false);
  }, [lesson?.id]);

  useEffect(() => {
  if (isCompleted && lesson && onQuizComplete) {
    const total = getLessonQuiz(lesson).length;
    onQuizComplete(lesson.number, score, total);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCompleted]);

  const questions = lesson ? getLessonQuiz(lesson) : [];

  if (questions.length === 0) {
    return (
      <div className="bg-[#FBF7EF] border border-[#D9CBB0] rounded-2xl p-6 max-w-xl mx-auto space-y-5 shadow-xl text-center">
        <h3 className="text-xl font-bold font-mono text-[#57121C]">Тест недоступен</h3>
        <p className="text-sm text-[#8A7A68]">Вопросы для этого урока не сформированы.</p>
        <button
          onClick={onClose}
          className="px-5 py-2.5 rounded-xl bg-[#7A1E2B] text-white font-semibold text-xs md:text-sm cursor-pointer"
        >
          Вернуться к слайдам
        </button>
      </div>
    );
  }

  const question = questions[currentIdx % questions.length];

  const handleSelect = (idx: number) => {
    if (selectedOption !== null) return; // Prevent changing after selection
    setSelectedOption(idx);
    setShowExplanation(true);
    if (idx === question.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setShowExplanation(false);
    setIsCompleted(false);
  };

  if (isCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="bg-[#FBF7EF] border border-[#D9CBB0] rounded-2xl p-6 max-w-lg mx-auto text-center space-y-6 shadow-xl">
        <div className="w-16 h-16 bg-[#B98A2B]/20 text-[#B98A2B] rounded-full flex items-center justify-center mx-auto">
          <Award className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold font-mono text-[#57121C]">Тест пройден!</h3>
        <p className="text-xs font-mono text-[#B98A2B] uppercase font-bold">Урок {lesson?.number}: {lesson?.title}</p>
        <p className="text-sm text-[#2A2320]">
          Вы правильно ответили на <strong className="text-[#7A1E2B]">{score} из {questions.length}</strong> вопросов ({percentage}%).
        </p>

        <div className="p-4 bg-white rounded-xl border border-[#D9CBB0] text-xs text-[#8A7A68]">
          {percentage >= 80 
            ? "Отличный результат! Вы отлично усвоили тему этого урока." 
            : "Хорошая попытка! Рекомендуем просмотреть слайды ещё раз для закрепления."}
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={handleRestart}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#7A1E2B] text-[#7A1E2B] font-semibold text-xs md:text-sm hover:bg-[#7A1E2B]/10 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Пройти заново</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#7A1E2B] text-white font-semibold text-xs md:text-sm hover:bg-[#57121C] cursor-pointer"
          >
            Вернуться к слайдам
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FBF7EF] border border-[#D9CBB0] rounded-2xl p-6 max-w-xl mx-auto space-y-5 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#D9CBB0]">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#7A1E2B]">
          <HelpCircle className="w-4 h-4" />
          <span>Тест Урока {lesson?.number || 1} (Вопрос {currentIdx + 1} из {questions.length})</span>
        </div>
        <span className="text-xs font-mono text-[#8A7A68]">Счёт: {score}</span>
      </div>

      {/* Question */}
      <h4 className="text-base md:text-lg font-bold text-[#57121C] font-mono leading-snug">
        {question.question}
      </h4>

      {/* Options */}
      <div className="space-y-2.5">
        {question.options.map((option, idx) => {
          let btnStyle = "bg-white border-[#D9CBB0] text-[#2A2320] hover:border-[#7A1E2B]/50";
          if (selectedOption !== null) {
            if (idx === question.correctIndex) {
              btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold";
            } else if (idx === selectedOption) {
              btnStyle = "bg-red-50 border-red-400 text-red-800";
            } else {
              btnStyle = "bg-white/50 border-gray-200 text-gray-400 opacity-60";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={selectedOption !== null}
              className={`w-full text-left p-3.5 rounded-xl border text-xs md:text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
            >
              <span>{option}</span>
              {selectedOption !== null && idx === question.correctIndex && (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              )}
              {selectedOption === idx && idx !== question.correctIndex && (
                <XCircle className="w-4 h-4 text-red-500 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation & Next */}
      {showExplanation && (
        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 pt-2">
          <div className="p-3.5 rounded-xl bg-[#2C5F58]/10 border border-[#2C5F58]/30 text-xs text-[#2C5F58] leading-relaxed">
            <strong>Пояснение:</strong> {question.explanation}
          </div>

          <button
            onClick={handleNext}
            className="w-full py-3 rounded-xl bg-[#7A1E2B] text-white font-semibold text-xs md:text-sm hover:bg-[#57121C] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{currentIdx + 1 < questions.length ? "Следующий вопрос" : "Посмотреть результаты"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </div>
  );
};
