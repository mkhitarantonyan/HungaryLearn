import React from 'react';
import { ArrowLeft, ArrowRight, ClipboardCheck } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onFinish: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onFinish
}) => {
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === totalSlides - 1;

  return (
    <footer className="sticky bottom-0 z-30 border-t border-[#D9CBB0] bg-[#FBF7EF]/95 backdrop-blur">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-3">
        <button
          onClick={onPrev}
          disabled={isFirst}
          aria-label="Предыдущий шаг"
          className={`flex items-center gap-2 min-h-11 px-4 rounded-xl font-semibold text-sm transition-colors cursor-pointer border ${
            isFirst
              ? 'opacity-40 border-[#D9CBB0] text-[#8A7A68] cursor-not-allowed'
              : 'border-[#7A1E2B]/40 text-[#7A1E2B] hover:bg-[#7A1E2B]/10'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Назад</span>
        </button>

        {!isLast ? (
          <button
            onClick={onNext}
            aria-label="Следующий шаг"
            className="flex items-center gap-2 min-h-11 px-6 rounded-xl bg-[#7A1E2B] text-white font-semibold text-sm hover:bg-[#57121C] transition-colors cursor-pointer"
          >
            <span>Вперёд</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onFinish}
            aria-label="Проверить себя"
            className="flex items-center gap-2 min-h-11 px-6 rounded-xl bg-[#2C5F58] text-white font-semibold text-sm hover:bg-[#2C5F58]/90 transition-colors cursor-pointer"
          >
            <span>Проверить себя</span>
            <ClipboardCheck className="w-4 h-4" />
          </button>
        )}
      </div>
    </footer>
  );
};
