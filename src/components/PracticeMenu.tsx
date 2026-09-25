import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Languages, RefreshCw } from 'lucide-react';
import { useI18n } from '../i18n';

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
  const { t } = useI18n();
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
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D6DEE6] bg-white text-[#252B2F] text-xs font-semibold hover:bg-[#EDF4FB] transition-colors cursor-pointer"
      >
        <BookOpen className="w-3.5 h-3.5 text-[#C77B00]" />
        {t('practice.menu')}
        {dueReviewCount > 0 && (
          <span className="px-1.5 py-0.5 rounded-full bg-[#C77B00]/20 text-[#252B2F] text-[10px] font-mono font-bold">
            {dueReviewCount}
          </span>
        )}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute bottom-full mb-1 left-0 w-52 rounded-xl border border-[#D6DEE6] bg-white shadow-lg py-1 z-40"
        >
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              onOpenWords();
            }}
            className="w-full text-left px-3 py-2 text-sm text-[#252B2F] hover:bg-[#EDF4FB] cursor-pointer flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-[#C77B00]" />
            {t('practice.words')}
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              onOpenTranslations();
            }}
            className="w-full text-left px-3 py-2 text-sm text-[#252B2F] hover:bg-[#EDF4FB] cursor-pointer flex items-center gap-2"
          >
            <Languages className="w-4 h-4 text-[#116EEE]" />
            {t('practice.translation')}
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              onOpenReview();
            }}
            className="w-full text-left px-3 py-2 text-sm text-[#252B2F] hover:bg-[#EDF4FB] cursor-pointer flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4 text-[#3B1E90]" />
            {t('practice.review')}
            {dueReviewCount > 0 && (
              <span className="ml-auto text-[10px] text-[#666E7E] font-mono">{t('practice.due', { count: dueReviewCount })}</span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
