import React, { useEffect, useState } from 'react';
import { Headphones } from 'lucide-react';
import type { ActivityAttempt, ActivityEvidence, ListeningTaskData } from '../../types';
import { QuestionSet } from './QuestionSet';
import { audioUrl } from '../../utils/audioConfig';
import { canProduceDirectListeningEvidence, listeningEvidence } from '../../utils/activityUtils';
import { useI18n } from '../../i18n';
import { ACTIVITY_COPY, formatActivityCopy } from '../../i18n/activityCopy';

interface ListeningTaskProps {
  data: ListeningTaskData;
  evidence?: ActivityEvidence;
  onEvidence: (evidence: ActivityEvidence, attempt?: ActivityAttempt) => void;
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
  const { language } = useI18n();
  const copy = ACTIVITY_COPY[language];
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

  const handleSubmit = (score: number, total: number, answers: Record<string, number | string>) => {
    setSubmitted(true);
    const result = listeningEvidence(data, score, total, audioReady && !audioError);
    onEvidence(
      { activityId: data.id, attempted: true, completed: true, ...result },
      { activityId: data.id, answers, audioPlayable: audioReady && !audioError }
    );
  };

  const handleAudioError = () => {
    setAudioReady(false);
    setAudioError(true);
    onResetEvidence?.(data.id);
  };

  return (
    <div className="rounded-2xl border border-[#D6DEE6] bg-[#EDF4FB]/70 p-4 md:p-5 space-y-4">
      <div className="flex items-center gap-2">
        <Headphones className="w-4 h-4 text-[#116EEE]" />
        <h3 className="font-mono font-bold text-[#252B2F] text-sm md:text-base">
          {data.title ?? copy.listening}
        </h3>
        {evidence?.passed ? (
          <span className="ml-auto text-[10px] font-mono uppercase font-semibold text-emerald-700">
            {evidence.score}/{evidence.total} · {copy.ready}
          </span>
        ) : evidence?.completed && evidence.evidenceMode === 'direct' ? (
          <span className="ml-auto text-[10px] font-mono uppercase font-semibold text-[#666E7E]">
            {evidence.score}/{evidence.total} · {copy.tryAgain}
          </span>
        ) : evidence?.completed ? (
          <span className="ml-auto text-[10px] font-mono uppercase font-semibold text-[#666E7E]">
            {copy.recordingUnavailable}
          </span>
        ) : null}
      </div>

      {canDirect && audioSrc ? (
        <div
          className="min-w-0 overflow-hidden rounded-xl border border-[#D6DEE6] bg-white p-3"
          role="region"
          aria-label={formatActivityCopy(copy.audioLabel, { title: data.title ?? copy.listening })}
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
              {copy.audioFailed}
            </p>
          )}
          <p className="text-[11px] text-[#666E7E] mt-1">
            {copy.listenHint}
          </p>
        </div>
      ) : (
        <div className="rounded-xl border border-[#C77B00]/40 bg-[#C77B00]/10 p-3 text-xs md:text-sm text-[#252B2F]">
          <p className="font-semibold">{copy.unpublishedAudio}</p>
          <p className="text-[#666E7E] mt-1">
            {copy.returnLater}
          </p>
        </div>
      )}

      <QuestionSet
        questions={data.questions}
        submitLabel={copy.answerAndTranscript}
        allowRetry
        onSubmit={handleSubmit}
        onRetry={() => {
          setSubmitted(false);
          onResetEvidence?.(data.id);
        }}
      />

      {submitted && (
        <div
          className="rounded-xl border border-[#3B1E90]/30 bg-[#3B1E90]/5 p-4"
          aria-live="polite"
        >
          <p className="text-[10px] font-mono uppercase tracking-wider text-[#3B1E90] font-bold mb-2">
            {copy.transcript}
          </p>
          <pre className="whitespace-pre-wrap text-xs md:text-sm text-[#252B2F] font-sans leading-relaxed">
            {data.transcript}
          </pre>
        </div>
      )}
    </div>
  );
};
