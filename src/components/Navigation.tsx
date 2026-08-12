import React from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

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
    <footer className="flex items-center justify-between px-6 md:px-12 py-4 border-t border-[#D9CBB0] bg-[#FBF7EF]">
      {/* Back Button */}
      <button
        onClick={onPrev}
        disabled={isFirst}
        aria-label="Предыдущий слайд"
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-sans font-semibold text-xs md:text-sm transition-all cursor-pointer border ${
          isFirst
            ? 'opacity-40 border-[#D9CBB0] text-[#8A7A68] cursor-not-allowed'
            : 'border-[#7A1E2B] text-[#7A1E2B] hover:bg-[#7A1E2B]/10'
        }`}
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Назад</span>
      </button>

      {/* Slide Counter */}
      <div className="font-mono text-xs md:text-sm text-[#8A7A68] font-medium tracking-widest">
        {currentSlide + 1} / {totalSlides}
      </div>

      {/* Next / Finish Button */}
      {!isLast ? (
        <button
          onClick={onNext}
          aria-label="Следующий слайд"
          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#7A1E2B] text-[#FBF7EF] font-sans font-semibold text-xs md:text-sm hover:bg-[#57121C] transition-all shadow-sm cursor-pointer"
        >
          <span>Вперед</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      ) : (
        <button
          onClick={onFinish}
          aria-label="Завершить урок"
          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2C5F58] text-[#FBF7EF] font-sans font-semibold text-xs md:text-sm hover:bg-[#2C5F58]/90 transition-all shadow-sm cursor-pointer"
        >
          <span>Завершить</span>
          <Check className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
};
