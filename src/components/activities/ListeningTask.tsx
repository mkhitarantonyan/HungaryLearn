import React, { useEffect, useState } from 'react';
import { Headphones } from 'lucide-react';
import type { ActivityEvidence, ListeningTaskData } from '../../types';
import { QuestionSet } from './QuestionSet';
import { audioUrl } from '../../utils/audioConfig';
import { canProduceDirectListeningEvidence, listeningEvidence } from '../../utils/activityUtils';

interface ListeningTaskProps {
  data: ListeningTaskData;
  evidence?: ActivityEvidence;
  onEvidence: (evidence: ActivityEvidence) => void;
  onResetEvidence?: (activityId: string) => void;
}

/**
 * Reusable listening task.
 *
 * - Published asset → real audio stimulus + questions; transcript hidden until
 *   submission; passed depends on the comprehension score (not on the MP3
 *   existing).
 * - Missing asset (pilot) → graceful unavailable state; evidenceMode = 'none',
 *   passed = false.
 */
export const ListeningTask: React.FC<ListeningTaskProps> = ({
  data,
  evidence,
  onEvidence,
  onResetEvidence,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const canDirect = canProduceDirectListeningEvidence(data);
  const audioSrc = canDirect ? audioUrl(`${data.assetId}.mp3`) : null;

  useEffect(() => {
    setSubmitted(false);
    setAudioError(false);
    setAudioReady(false);
  }, [data.id, data.assetId, data.audioStatus]);

  const handleSubmit = (score: number, total: number) => {
    setSubmitted(true);
    const result = listeningEvidence(data, score, total, audioReady && !audioError);
    onEvidence({ activityId: data.id, attempted: true, completed: true, ...result });
  };

  const handleAudioError = () => {
    setAudioReady(false);
    setAudioError(true);
    onResetEvidence?.(data.id);
  };

  return (
    <div className="rounded-2xl border border-[#D9CBB0] bg-[#F6EFE4]/70 p-4 md:p-5 space-y-4">
      <div className="flex items-center gap-2">
        <Headphones className="w-4 h-4 text-[#7A1E2B]" />
        <h3 className="font-mono font-bold text-[#57121C] text-sm md:text-base">
          {data.title ?? 'Аудирование'}
        </h3>
        {evidence?.passed ? (
          <span className="ml-auto text-[10px] font-mono uppercase font-semibold text-emerald-700">
            {evidence.score}/{evidence.total} · DIRECT · met
          </span>
        ) : evidence?.completed && evidence.evidenceMode === 'direct' ? (
          <span className="ml-auto text-[10px] font-mono uppercase font-semibold text-[#8A7A68]">
            {evidence.score}/{evidence.total} · DIRECT · не met
          </span>
        ) : evidence?.completed ? (
          <span className="ml-auto text-[10px] font-mono uppercase font-semibold text-[#8A7A68]">
            {evidence.score}/{evidence.total} · NONE · audio недоступно
          </span>
        ) : null}
      </div>

      {/* Audio stimulus */}
      {canDirect && audioSrc ? (
        <div
          className="min-w-0 overflow-hidden rounded-xl border border-[#D9CBB0] bg-white p-3"
          role="region"
          aria-label={`Аудиозапись: ${data.title ?? 'аудирование'}`}
        >
          <audio
            controls
            src={audioSrc}
            className="block w-full max-w-full"
            onCanPlay={() => {
              setAudioReady(true);
              setAudioError(false);
            }}
            onError={handleAudioError}
          />
          {audioError && (
            <p className="text-xs text-red-700 mt-2" role="alert">
              Аудиозапись недоступна или не может быть воспроизведена.
            </p>
          )}
          <p className="text-[11px] text-[#8A7A68] mt-1">
            Прослушайте запись. Повтор разрешён: первый раз — общий смысл, второй раз — детали.
          </p>
        </div>
      ) : (
        <div className="rounded-xl border border-[#B98A2B]/40 bg-[#B98A2B]/10 p-3 text-xs md:text-sm text-[#57121C]">
          <p className="font-semibold">Аудиозапись для этого задания ещё не опубликована.</p>
          <p className="text-[#8A7A68] mt-1">
            Это ожидаемый пилотный asset. До публикации записанного MP3 аудио недоступно.
          </p>
        </div>
      )}

      {/* Questions */}
      <QuestionSet
        questions={data.questions}
        submitLabel="Ответить и показать transcript"
        allowRetry
        onSubmit={handleSubmit}
        onRetry={() => {
          setSubmitted(false);
          onResetEvidence?.(data.id);
        }}
      />

      {/* Transcript: hidden until submission */}
      {submitted && (
        <div
          className="rounded-xl border border-[#2C5F58]/30 bg-[#2C5F58]/5 p-4"
          aria-live="polite"
        >
          <p className="text-[10px] font-mono uppercase tracking-wider text-[#2C5F58] font-bold mb-2">
            Transcript (после ответа)
          </p>
          <pre className="whitespace-pre-wrap text-xs md:text-sm text-[#2A2320] font-sans leading-relaxed">
            {data.transcript}
          </pre>
        </div>
      )}
    </div>
  );
};
