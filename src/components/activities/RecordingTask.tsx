import React, { useState } from 'react';
import { CheckCircle2, Mic2, RotateCcw } from 'lucide-react';
import type { ActivityEvidence, RecordingTaskData } from '../../types';
import { recordingCompletionEvidence } from '../../utils/activityUtils';
import { AudioRecorder } from '../AudioRecorder';

interface RecordingTaskProps {
  data: RecordingTaskData;
  evidence?: ActivityEvidence;
  onEvidence: (evidence: ActivityEvidence) => void;
  onResetEvidence?: (activityId: string) => void;
}

/**
 * Generic recorder-backed activity. A real recording is meaningful PARTIAL
 * evidence, but pronunciation is never auto-scored or reported as passed.
 */
export const RecordingTask: React.FC<RecordingTaskProps> = ({
  data,
  evidence,
  onEvidence,
  onResetEvidence,
}) => {
  const [recorderRevision, setRecorderRevision] = useState(0);

  const handleRecordingReady = () => {
    onEvidence(recordingCompletionEvidence(data.id));
  };

  const handleRetry = () => {
    onResetEvidence?.(data.id);
    setRecorderRevision((current) => current + 1);
  };

  return (
    <section className="min-w-0 rounded-2xl border border-[#D9CBB0] bg-[#F6EFE4]/70 p-4 md:p-5 space-y-4">
      <div className="flex min-w-0 flex-wrap items-center gap-2">
        <Mic2 aria-hidden="true" className="h-4 w-4 shrink-0 text-[#7A1E2B]" />
        <h3 className="min-w-0 font-mono text-sm font-bold text-[#57121C] [overflow-wrap:anywhere] md:text-base">
          {data.title ?? 'Запись произношения'}
        </h3>
        {evidence?.recordingCompleted && (
          <span className="ml-auto text-[10px] font-mono font-semibold uppercase text-[#B98A2B]">
            completed · PARTIAL
          </span>
        )}
      </div>

      {data.instructions && (
        <p className="text-xs leading-relaxed text-[#4A403A] md:text-sm">{data.instructions}</p>
      )}

      <AudioRecorder
        key={recorderRevision}
        targetText={data.targetText}
        targetPhonetic={data.targetPhonetic}
        targetTranslation={data.targetTranslation}
        onRecordingReady={handleRecordingReady}
      />

      {data.rubric && data.rubric.length > 0 && (
        <div className="rounded-xl border border-[#D9CBB0] bg-white p-4">
          <p className="text-xs font-mono font-bold uppercase tracking-wide text-[#57121C]">
            Рубрика для последующей проверки
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-relaxed text-[#4A403A] md:text-sm">
            {data.rubric.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-[#8A7A68]">
            Самопроверка полезна для практики, но не создаёт DIRECT evidence и не оценивает
            правильность произношения автоматически.
          </p>
        </div>
      )}

      {evidence?.recordingCompleted && (
        <div className="flex flex-wrap items-center gap-2" role="status" aria-live="polite">
          <p className="flex min-w-0 items-center gap-1.5 text-xs font-semibold text-[#B98A2B]">
            <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0" />
            <span>Запись получена · PARTIAL · произношение ожидает квалифицированной проверки.</span>
          </p>
          <button
            type="button"
            onClick={handleRetry}
            className="flex min-h-11 items-center gap-1.5 rounded-lg border border-[#7A1E2B] px-3 py-2 text-xs font-semibold text-[#7A1E2B] hover:bg-[#7A1E2B]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1E2B]/50 focus-visible:ring-offset-2"
          >
            <RotateCcw aria-hidden="true" className="h-3.5 w-3.5" />
            <span>Записать заново</span>
          </button>
        </div>
      )}
    </section>
  );
};
