import React from 'react';

interface LessonProgressProps {
  current: number; // 0-based index
  total: number;
}

export const LessonProgress: React.FC<LessonProgressProps> = ({ current, total }) => {
  const step = total > 0 ? current + 1 : 0;
  const percent = total > 0 ? Math.round((step / total) * 100) : 0;

  return (
    <div className="flex items-center gap-2.5 min-w-0">
      <span className="shrink-0 text-xs font-semibold text-[#57121C] font-mono tabular-nums">
        {step} из {total}
      </span>
      <div
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={step}
        aria-label={`Шаг ${step} из ${total}`}
        className="flex-1 h-1.5 rounded-full bg-[#E5D7C3] overflow-hidden min-w-16"
      >
        <div
          className="h-full rounded-full bg-[#7A1E2B] transition-[width] duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};
