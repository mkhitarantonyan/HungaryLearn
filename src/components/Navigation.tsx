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
    <footer className="sticky bottom-0 z-30 border-t border-[#D6DEE6] bg-white/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-3">
        <button
          onClick={onPrev}
          disabled={isFirst}
          aria-label="Предыдущий шаг"
          className={`flex items-center gap-2 min-h-11 px-5 rounded-[10px] bg-white font-semibold text-sm transition-colors cursor-pointer border ${
            isFirst
              ? 'opacity-40 border-[#D6DEE6] text-[#666E7E] cursor-not-allowed'
              : 'border-[#116EEE]/40 text-[#116EEE] hover:bg-[#116EEE]/10'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Назад</span>
        </button>

        {!isLast ? (
          <button
            onClick={onNext}
            aria-label="Следующий шаг"
            className="flex items-center gap-2 min-h-11 px-7 rounded-[10px] bg-[#116EEE] text-white font-semibold text-sm hover:bg-[#0D5ED0] transition-colors cursor-pointer shadow-sm"
          >
            <span>Вперёд</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onFinish}
            aria-label="Проверить себя"
            className="flex items-center gap-2 min-h-11 px-7 rounded-[10px] bg-[#3B1E90] text-white font-semibold text-sm hover:bg-[#2F176F] transition-colors cursor-pointer shadow-sm"
          >
            <span>Проверить себя</span>
            <ClipboardCheck className="w-4 h-4" />
          </button>
        )}
      </div>
    </footer>
  );
};
