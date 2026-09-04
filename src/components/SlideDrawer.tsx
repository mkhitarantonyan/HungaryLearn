import React from 'react';
import { motion } from 'motion/react';
import { SlideData } from '../types';
import { X, BookOpen, ChevronRight } from 'lucide-react';
import { humanizeLearnerText } from '../utils/learnerCopy';

interface SlideDrawerProps {
  isOpen: boolean;
  slides: SlideData[];
  lessonTitle?: string;
  currentSlide: number;
  onClose: () => void;
  onSelectSlide: (index: number) => void;
}

export const SlideDrawer: React.FC<SlideDrawerProps> = ({
  isOpen,
  slides,
  lessonTitle = "Содержание урока",
  currentSlide,
  onClose,
  onSelectSlide
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#252B2F]/50 backdrop-blur-xs">
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="slide-drawer-title"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="w-full max-w-md bg-[#FFFFFF] border-l border-[#D6DEE6] h-full flex flex-col p-6 shadow-2xl overflow-y-auto"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#D6DEE6]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#116EEE]" />
            <h3 id="slide-drawer-title" className="font-mono font-bold text-[#252B2F] text-base">{lessonTitle}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="p-2 rounded-full hover:bg-[#116EEE]/10 text-[#116EEE] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-2 my-4 flex-1">
          {slides.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                aria-current={isActive ? 'step' : undefined}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center gap-3 cursor-pointer ${
                  isActive
                    ? 'bg-[#116EEE] text-white border-[#116EEE] shadow-sm'
                    : 'bg-white border-[#D6DEE6] text-[#252B2F] hover:border-[#116EEE]/40 hover:bg-[#EDF4FB]'
                }`}
              >
                <span
                  className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#EDF4FB] text-[#252B2F]'
                  }`}
                >
                  {idx + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <div className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${isActive ? 'text-[#C77B00]' : 'text-[#666E7E]'}`}>
                    {slide.eyebrow}
                  </div>
                  <div className="text-sm font-bold mt-0.5 truncate">{humanizeLearnerText(slide.title)}</div>
                  <div className={`text-xs mt-0.5 truncate ${isActive ? 'text-white/80' : 'text-[#666E7E]'}`}>
                    {humanizeLearnerText(slide.subtitle)}
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#666E7E]'}`} />
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
