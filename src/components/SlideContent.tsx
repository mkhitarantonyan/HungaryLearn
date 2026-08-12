import React, { useState } from 'react';
import { motion } from 'motion/react';
import DOMPurify from 'dompurify';
import { SlideData } from '../types';
import { SpeechButton } from './SpeechButton';
import { AudioRecorder } from './AudioRecorder';
import { VOCABULARY_LIST } from '../data/lessonData';
import { speakText } from '../utils/speech';
import { Info, AlertTriangle, BookOpen, Eye, EyeOff } from 'lucide-react';

interface SlideContentProps {
  slide: SlideData;
}

export const SlideContent: React.FC<SlideContentProps> = ({ slide }) => {
  // Local state for interactive word cards reveal
  const [revealedWords, setRevealedWords] = useState<Record<string, boolean>>({});
  const [hideAllTranslations, setHideAllTranslations] = useState(false);

  const toggleReveal = (id: string) => {
    setRevealedWords(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-speak-text]');
    if (!btn) return;
    const text = btn.dataset.speakText;
    const lang = (btn.dataset.speakLang as 'hu-HU' | 'ru-RU') || 'hu-HU';
    if (text) {
      speakText(text, lang);
    }
  };

  const first10 = VOCABULARY_LIST.filter(v => v.category === 'Первые слова');

  return (
    <div className="space-y-4">
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
                    <span className="text-xs text-[#8A7A68] font-mono">{item.phonetic}</span>
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

      {/* Interactive Widget: Sentence Reading & Recording */}
      {slide.type === 'sentence-reading' && (
        <div className="pt-2">
          <AudioRecorder
            targetText={slide.targetText || "Budapesten élek, és nagyon szeretek magyarul tanulni."}
            targetPhonetic={slide.targetPhonetic || "[будапэштэн э̄лэк, э̄ш надьон сэрэтэк мадьарул танули]"}
            targetTranslation={slide.targetTranslation || "Я живу в Будапеште, и мне очень нравится учить венгерский."}
          />
        </div>
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
    </div>
  );
};
