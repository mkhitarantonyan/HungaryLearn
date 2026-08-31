import React from 'react';

interface LessonProgressProps {
  current: number; // 0-based index
  total: number;
  percentage: number;
  completedUnits: number;
  totalUnits: number;
}

export const LessonProgress: React.FC<LessonProgressProps> = ({
  current,
  total,
  percentage,
  completedUnits,
  totalUnits,
}) => {
  const step = total > 0 ? current + 1 : 0;

  return (
    <div className="flex items-center gap-2.5 min-w-0">
      <span className="shrink-0 text-xs font-semibold text-[#252B2F] font-mono tabular-nums">
        Урок: {percentage}% · {completedUnits}/{totalUnits}
      </span>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
        aria-label={`Учебный прогресс урока: ${percentage}%`}
        className="flex-1 h-1.5 rounded-full bg-[#E4EBF3] overflow-hidden min-w-16"
      >
        <div
          className="h-full rounded-full bg-[#116EEE] transition-[width] duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="shrink-0 text-[11px] text-[#666E7E] font-mono tabular-nums">
        Слайд {step}/{total}
      </span>
    </div>
  );
};
