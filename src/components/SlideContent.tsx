import React, { useState } from 'react';
import { motion } from 'motion/react';
import DOMPurify from 'dompurify';
import { SlideData, LearningObjective, ActivityEvidence, ActivityRuntimeState } from '../types';
import { SpeechButton } from './SpeechButton';
import { LessonActivityRenderer } from './activities/LessonActivityRenderer';
import { VOCABULARY_LIST } from '../data/lessonData';
import { playRecordedAudio } from '../utils/speech';
import { Info, AlertTriangle, BookOpen, Eye, EyeOff } from 'lucide-react';

interface SlideContentProps {
  slide: SlideData;
  activityEvidence?: Record<string, ActivityEvidence>;
  objectives?: LearningObjective[];
  onActivityEvidence?: (evidence: ActivityEvidence) => void;
  onActivityEvidenceReset?: (activityId: string) => void;
  activityRuntime?: Record<string, ActivityRuntimeState>;
  onActivityRuntimeChange?: (activityId: string, patch: Partial<ActivityRuntimeState>) => void;
}

export const SlideContent: React.FC<SlideContentProps> = ({
  slide,
  activityEvidence,
  objectives,
  onActivityEvidence,
  onActivityEvidenceReset,
  activityRuntime,
  onActivityRuntimeChange,
}) => {
  // Local state for interactive word cards reveal
  const [revealedWords, setRevealedWords] = useState<Record<string, boolean>>({});
  const [hideAllTranslations, setHideAllTranslations] = useState(false);
  const [audioUnavailable, setAudioUnavailable] = useState(false);

  const toggleReveal = (id: string) => {
    setRevealedWords(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-speak-text]');
    if (!btn) return;
    const text = btn.dataset.speakText;
    if (text) {
      setAudioUnavailable(false);
      playRecordedAudio(text, undefined, undefined, () => setAudioUnavailable(true));
    }
  };

  const first10 = VOCABULARY_LIST.filter(v => v.category === 'Первые слова');

  return (
    <div className="space-y-4">
      {audioUnavailable && (
        <p className="text-xs text-red-700" role="alert">Записанное аудио недоступно.</p>
      )}
      {/* Primary HTML body content from lesson data */}
      {slide.body && (
        <div
          onClick={handleContentClick}
          className="space-y-3 text-[#2A2320] leading-relaxed text-sm md:text-base font-sans"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(slide.body) }}
        />
      )}

      {/* Interactive Widget: Words Practice */}
      {slide.type === 'words-practice' && (
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between bg-white/60 p-3 rounded-xl border border-[#D9CBB0]">
            <span className="text-xs font-mono font-semibold text-[#8A7A68]">
              Тренажёр карточек (10 главных слов)
            </span>
            <button
              onClick={() => setHideAllTranslations(!hideAllTranslations)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[#7A1E2B]/10 hover:bg-[#7A1E2B] text-[#7A1E2B] hover:text-white transition-colors cursor-pointer"
            >
              {hideAllTranslations ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>{hideAllTranslations ? "Показать всё" : "Скрыть переводы"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {first10.map((item, idx) => {
              const isHidden = hideAllTranslations || !revealedWords[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleReveal(item.id)}
                  className="p-3.5 rounded-xl border border-[#D9CBB0] bg-white hover:border-[#7A1E2B]/40 transition-all cursor-pointer flex items-center justify-between shadow-2xs group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#8A7A68] w-4">{idx + 1}.</span>
                    <SpeechButton text={item.hu} />
                    <span className="text-xs text-[#8A7A68] font-mono">
                      {item.phonetic}
                      {item.ipa && <span className="ml-1 text-gray-400">/ {item.ipa}</span>}
                    </span>
                  </div>

                  <div className="text-xs font-medium font-sans">
                    {isHidden ? (
                      <span className="text-[#8A7A68] italic border-b border-dashed border-[#8A7A68]">
                        клик для ответа
                      </span>
                    ) : (
                      <span className="text-[#2C5F58] font-bold">— {item.ru}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Legacy read-aloud slide: optional text-only self-practice, never evidence. */}
      {slide.type === 'sentence-reading' && (
        <div className="rounded-2xl border border-[#D9CBB0] bg-[#F6EFE4]/70 p-4 space-y-2">
          <p className="font-mono text-sm font-bold text-[#57121C]">Устная практика (необязательно)</p>
          <p className="text-xs text-[#4A403A]">Прочитай фразу вслух. Микрофон, оценка и evidence не используются.</p>
          <p className="font-mono text-sm text-[#57121C]">{slide.targetText || "Budapesten élek, és nagyon szeretek magyarul tanulni."}</p>
          {slide.targetPhonetic && <p className="text-xs text-[#8A7A68]">{slide.targetPhonetic}</p>}
          {slide.targetTranslation && <p className="text-xs text-[#2C5F58]">{slide.targetTranslation}</p>}
        </div>
      )}

      {slide.optionalSpeaking && (
        <section className="rounded-2xl border border-[#D9CBB0] bg-[#F6EFE4]/70 p-4 space-y-2">
          <h3 className="font-mono text-sm font-bold text-[#57121C]">{slide.optionalSpeaking.title}</h3>
          <p className="text-xs leading-relaxed text-[#4A403A]">{slide.optionalSpeaking.instructions}</p>
          <p className="font-mono text-sm text-[#57121C]">{slide.optionalSpeaking.prompt}</p>
          {slide.optionalSpeaking.rubric && (
            <ul className="list-disc space-y-1 pl-5 text-xs text-[#4A403A]">
              {slide.optionalSpeaking.rubric.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )}
          <p className="text-xs text-[#8A7A68]">Необязательная самопрактика: без микрофона, score и evidence.</p>
        </section>
      )}

      {/* Reusable Context Boxes: Note, Warning, Task */}
      {slide.note && (
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#2C5F58]/10 border-l-4 border-[#2C5F58] p-3.5 rounded-r-xl text-xs md:text-sm text-[#2C5F58] flex items-start gap-2.5 font-sans"
        >
          <Info className="w-4 h-4 shrink-0 mt-0.5" />
          <div>{slide.note}</div>
        </motion.div>
      )}

      {slide.warn && (
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#C24B3A]/10 border-l-4 border-[#C24B3A] p-3.5 rounded-r-xl text-xs md:text-sm text-[#C24B3A] flex items-start gap-2.5 font-sans"
        >
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
          <div>{slide.warn}</div>
        </motion.div>
      )}

      {slide.task && (
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#B98A2B]/15 border-l-4 border-[#B98A2B] p-3.5 rounded-r-xl text-xs md:text-sm text-[#57121C] flex items-start gap-2.5 font-sans font-medium"
        >
          <BookOpen className="w-4 h-4 shrink-0 mt-0.5 text-[#B98A2B]" />
          <div>{slide.task}</div>
        </motion.div>
      )}

      {/* Interactive lesson activities (pilot: lesson 15). Old lessons have no
          activities and render exactly as before. */}
      {slide.activities && slide.activities.length > 0 && (
        <div className="pt-2 space-y-4">
          {slide.activities.map((activity) => (
            <LessonActivityRenderer
              key={activity.id}
              activity={activity}
              evidence={activityEvidence}
              objectives={objectives}
              onEvidence={onActivityEvidence}
              onResetEvidence={onActivityEvidenceReset}
              runtime={activityRuntime?.[activity.id]}
              onRuntimeChange={(patch) => onActivityRuntimeChange?.(activity.id, patch)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
