import React from 'react';
import { motion } from 'motion/react';
import { SlideData } from '../types';
import { X, BookOpen, ChevronRight } from 'lucide-react';

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
  lessonTitle = "Оглавление Урока",
  currentSlide,
  onClose,
  onSelectSlide
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#2A2320]/50 backdrop-blur-xs">
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="slide-drawer-title"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="w-full max-w-md bg-[#FBF7EF] border-l border-[#D9CBB0] h-full flex flex-col p-6 shadow-2xl overflow-y-auto"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#D9CBB0]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#7A1E2B]" />
            <h3 id="slide-drawer-title" className="font-mono font-bold text-[#57121C] text-base">{lessonTitle}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="p-2 rounded-full hover:bg-[#7A1E2B]/10 text-[#7A1E2B] transition-colors cursor-pointer"
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
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[#7A1E2B] text-white border-[#7A1E2B] shadow-sm'
                    : 'bg-white border-[#D9CBB0] text-[#2A2320] hover:border-[#7A1E2B]/40 hover:bg-[#F6EFE4]'
                }`}
              >
                <div>
                  <div className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${isActive ? 'text-[#B98A2B]' : 'text-[#8A7A68]'}`}>
                    {slide.eyebrow}
                  </div>
                  <div className="text-sm font-bold font-mono mt-0.5">{slide.title}</div>
                  <div className={`text-xs mt-0.5 ${isActive ? 'text-white/80' : 'text-[#8A7A68]'}`}>
                    {slide.subtitle}
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#8A7A68]'}`} />
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
