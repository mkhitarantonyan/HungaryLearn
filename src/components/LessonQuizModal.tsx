import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lesson } from '../types';
import { getLessonQuiz } from '../utils/lessonQuizAndVocab';
import { CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, HelpCircle } from 'lucide-react';

interface LessonQuizModalProps {
  onClose: () => void;
  lesson?: Lesson;
  onQuizComplete?: (lessonNumber: number, score: number, total: number, answers: number[]) => void;
}

export const LessonQuizModal: React.FC<LessonQuizModalProps> = ({ onClose, lesson, onQuizComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);

  useEffect(() => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setShowExplanation(false);
    setIsCompleted(false);
    setAnswers([]);
  }, [lesson?.id]);

  useEffect(() => {
    if (isCompleted && lesson && onQuizComplete) {
      const total = getLessonQuiz(lesson).length;
      onQuizComplete(lesson.number, score, total, answers);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCompleted]);

  const questions = lesson ? getLessonQuiz(lesson) : [];

  if (questions.length === 0) {
    return (
      <div className="bg-[#FFFFFF] border border-[#D6DEE6] rounded-2xl p-6 max-w-xl mx-auto space-y-5 shadow-xl text-center">
        <h3 className="text-xl font-bold font-mono text-[#252B2F]">Тест для этого урока ещё не опубликован</h3>
        <p className="text-sm text-[#666E7E]">Вопросы для этого урока пока не добавлены.</p>
        <button
          onClick={onClose}
          className="px-5 py-2.5 rounded-xl bg-[#116EEE] text-white font-semibold text-xs md:text-sm cursor-pointer"
        >
          Вернуться к слайдам
        </button>
      </div>
    );
  }

  const question = questions[currentIdx % questions.length];

  const handleSelect = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIdx] = idx;
      return next;
    });
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
    setAnswers([]);
  };

  if (isCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 80;
    return (
      <div className="bg-[#FFFFFF] border border-[#D6DEE6] rounded-2xl p-6 max-w-lg mx-auto text-center space-y-6 shadow-xl">
        <div className="w-16 h-16 bg-[#C77B00]/20 text-[#C77B00] rounded-full flex items-center justify-center mx-auto">
          <Award className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold font-mono text-[#252B2F]">
          {passed ? 'Тест пройден!' : 'Тест завершён'}
        </h3>
        <p className="text-xs font-mono text-[#C77B00] uppercase font-bold">Урок {lesson?.number}: {lesson?.title}</p>
        <p className="text-sm text-[#252B2F]">
          Вы правильно ответили на <strong className="text-[#116EEE]">{score} из {questions.length}</strong> вопросов ({percentage}%).
        </p>

        <div className="p-4 bg-white rounded-xl border border-[#D6DEE6] text-xs text-[#666E7E]">
          {passed
            ? 'Отличный результат! Порог этой проверки достигнут.'
            : 'Хорошая попытка! Рекомендуем просмотреть слайды ещё раз для закрепления.'}
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={handleRestart}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#116EEE] text-[#116EEE] font-semibold text-xs md:text-sm hover:bg-[#116EEE]/10 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Пройти заново</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#116EEE] text-white font-semibold text-xs md:text-sm hover:bg-[#0D5ED0] cursor-pointer"
          >
            Вернуться к слайдам
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFFFF] border border-[#D6DEE6] rounded-2xl p-6 max-w-xl mx-auto space-y-5 shadow-xl">
      <div className="flex items-center justify-between pb-3 border-b border-[#D6DEE6]">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#116EEE]">
          <HelpCircle className="w-4 h-4" />
          <span>Тест Урока {lesson?.number || 1} (Вопрос {currentIdx + 1} из {questions.length})</span>
        </div>
        <span className="text-xs font-mono text-[#666E7E]">Счёт: {score}</span>
      </div>

      <h4 className="text-base md:text-lg font-bold text-[#252B2F] font-mono leading-snug">
        {question.question}
      </h4>

      <div className="space-y-2.5">
        {question.options.map((option, idx) => {
          let btnStyle = 'bg-white border-[#D6DEE6] text-[#252B2F] hover:border-[#116EEE]/50';
          if (selectedOption !== null) {
            if (idx === question.correctIndex) {
              btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold';
            } else if (idx === selectedOption) {
              btnStyle = 'bg-red-50 border-red-400 text-red-800';
            } else {
              btnStyle = 'bg-white/50 border-gray-200 text-gray-400 opacity-60';
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

      {showExplanation && (
        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 pt-2">
          <div className="p-3.5 rounded-xl bg-[#3B1E90]/10 border border-[#3B1E90]/30 text-xs text-[#3B1E90] leading-relaxed">
            <strong>Пояснение:</strong> {question.explanation}
          </div>

          <button
            onClick={handleNext}
            className="w-full py-3 rounded-xl bg-[#116EEE] text-white font-semibold text-xs md:text-sm hover:bg-[#0D5ED0] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{currentIdx + 1 < questions.length ? 'Следующий вопрос' : 'Посмотреть результаты'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </div>
  );
};
