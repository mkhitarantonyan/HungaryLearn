import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Languages, RefreshCw } from 'lucide-react';

interface PracticeMenuProps {
  dueReviewCount: number;
  onOpenWords: () => void;
  onOpenTranslations: () => void;
  onOpenReview: () => void;
}

export const PracticeMenu: React.FC<PracticeMenuProps> = ({
  dueReviewCount,
  onOpenWords,
  onOpenTranslations,
  onOpenReview,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D9CBB0] bg-white text-[#57121C] text-xs font-semibold hover:bg-[#F6EFE4] transition-colors cursor-pointer"
      >
        <BookOpen className="w-3.5 h-3.5 text-[#B98A2B]" />
        Практика
        {dueReviewCount > 0 && (
          <span className="px-1.5 py-0.5 rounded-full bg-[#B98A2B]/20 text-[#57121C] text-[10px] font-mono font-bold">
            {dueReviewCount}
          </span>
        )}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute bottom-full mb-1 left-0 w-52 rounded-xl border border-[#D9CBB0] bg-white shadow-lg py-1 z-40"
        >
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              onOpenWords();
            }}
            className="w-full text-left px-3 py-2 text-sm text-[#2A2320] hover:bg-[#F6EFE4] cursor-pointer flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-[#B98A2B]" />
            Слова
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              onOpenTranslations();
            }}
            className="w-full text-left px-3 py-2 text-sm text-[#2A2320] hover:bg-[#F6EFE4] cursor-pointer flex items-center gap-2"
          >
            <Languages className="w-4 h-4 text-[#7A1E2B]" />
            Перевод
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              onOpenReview();
            }}
            className="w-full text-left px-3 py-2 text-sm text-[#2A2320] hover:bg-[#F6EFE4] cursor-pointer flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4 text-[#2C5F58]" />
            Повторение
            {dueReviewCount > 0 && (
              <span className="ml-auto text-[10px] text-[#8A7A68] font-mono">{dueReviewCount} к повторению</span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
