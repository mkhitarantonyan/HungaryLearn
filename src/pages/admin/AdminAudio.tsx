import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  AudioLines,
  Mic,
  Play,
  Trash2,
  Pencil,
  Loader2,
  Search,
  FileAudio,
  Languages,
  Info,
  RotateCcw,
} from 'lucide-react';
import { LESSONS_META, loadLesson } from '../../data/lessons';
import { VOCABULARY_LIST } from '../../data/lessonData';
import { getWordOverride, removeWordOverride } from '../../utils/adminStore';
import {
  getAudioFileUrl,
  getSlideCandidateKeys,
  hasAudioForSlide,
  playRecordedAudio,
  removeAudioForSlide,
  subscribeAudioChanges,
  getActiveAudioOverridesSummary,
  resetAllAudioOverrides,
} from '../../utils/audioRegistry';
import { playRecordedAudio as playCourseAudio, stopRecordedAudio } from '../../utils/speech';
import { EditWordModal } from '../../components/EditWordModal';
import { SlideAudioModal } from '../../components/SlideAudioModal';
import {
  ConfirmDialog,
  PageHeader,
  Pill,
} from '../../components/admin/AdminUi';

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */

interface AdminWord {
  key: string; // normalized hu
  hu: string;
  ru: string;
  phonetic?: string;
  lessonNumbers: number[];
}

interface AdminSlide {
  id: number;
  title: string;
}

type Tab = 'words' | 'slides';

/* ------------------------------------------------------------------ */
/*  Words tab                                                         */
/* ------------------------------------------------------------------ */

function WordsTab({
  wordMap,
  loading,
  playingKey,
  onPlay,
  onEdit,
  onReset,
}: {
  wordMap: Map<string, AdminWord>;
  loading: boolean;
  playingKey: string | null;
  onPlay: (w: AdminWord) => void;
  onEdit: (w: AdminWord) => void;
  onReset: (w: AdminWord) => void;
}) {
  const [query, setQuery] = useState('');
  const [lessonFilter, setLessonFilter] = useState<number>(0);

  const words = useMemo(() => Array.from(wordMap.values()), [wordMap]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return words.filter((w) => {
      if (lessonFilter !== 0 && !w.lessonNumbers.includes(lessonFilter)) return false;
      if (!q) return true;
      return `${w.hu} ${w.ru}`.toLowerCase().includes(q);
    });
  }, [words, query, lessonFilter]);

  const withVoice = words.filter((w) => !!getAudioFileUrl(w.hu)).length;

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex-1 relative max-w-md">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск слова или перевода..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors"
          />
        </div>
        <select
          value={lessonFilter}
          onChange={(e) => setLessonFilter(Number(e.target.value))}
          className="px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors cursor-pointer"
        >
          <option value={0}>Все уроки</option>
          {LESSONS_META.map((l) => (
            <option key={l.id} value={l.number}>
              Урок {l.number} · {l.level}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="flex flex-col items-center gap-3 py-20 text-gray-500">
          <Loader2 className="w-7 h-7 text-indigo-600 animate-spin" />
          <span className="text-sm font-medium">Загрузка словаря курса...</span>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-gray-50/60">
            <span className="text-xs font-semibold text-gray-500">
              {filtered.length} из {words.length} слов · с записью голоса: {withVoice}
            </span>
            <span className="text-[11px] text-gray-400">
              Если записанного файла нет, аудио для слова недоступно.
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Слово</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Перевод</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Уроки</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Голос</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 text-right">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((w) => {
                  const hasAudio = !!getAudioFileUrl(w.hu);
                  const override = getWordOverride(w.hu);
                  return (
                    <tr key={w.key} className="group hover:bg-gray-50/80 transition-colors">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                            <Languages className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900 font-mono">{w.hu}</div>
                            {w.phonetic && <div className="text-[11px] text-gray-400">{w.phonetic}</div>}
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="text-sm text-gray-700">{w.ru}</div>
                        {override?.customText && override.customText !== w.hu && (
                          <div className="text-[11px] text-amber-600">
                            текст озвучки: «{override.customText}»
                          </div>
                        )}
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex flex-wrap gap-1">
                          {w.lessonNumbers.slice(0, 3).map((n) => (
                            <span key={n} className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 text-[11px] font-medium">
                              {n}
                            </span>
                          ))}
                          {w.lessonNumbers.length > 3 && (
                            <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-400 text-[11px]">
                              +{w.lessonNumbers.length - 3}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <Pill tone={hasAudio ? 'green' : 'slate'}>
                          {hasAudio ? 'Голос записан' : 'Нет аудио'}
                        </Pill>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => onPlay(w)}
                            title="Прослушать"
                            className={`p-2 rounded-lg transition-colors cursor-pointer ${
                              playingKey === w.key
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-500 hover:bg-indigo-50 hover:text-indigo-600'
                            }`}
                          >
                            <Play className={`w-4 h-4 ${playingKey === w.key ? 'animate-pulse' : ''}`} />
                          </button>
                          <button
                            onClick={() => onEdit(w)}
                            title={hasAudio ? 'Изменить голос' : 'Записать / загрузить голос'}
                            className="p-2 rounded-lg text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer"
                          >
                            <Mic className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onReset(w)}
                            title="Удалить записанное аудио"
                            className="p-2 rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
                            disabled={!hasAudio && !override}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-5 py-12 text-center text-sm text-gray-500 font-medium">
                      Слова не найдены. Измените фильтр или запрос.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Slides tab                                                        */
/* ------------------------------------------------------------------ */

function SlidesTab({
  slides,
  lessonNumber,
  loading,
  playingKey,
  onLessonChange,
  onPlay,
  onEdit,
  onDelete,
}: {
  slides: AdminSlide[];
  lessonNumber: number;
  loading: boolean;
  playingKey: string | null;
  onLessonChange: (n: number) => void;
  onPlay: (slide: AdminSlide) => void;
  onEdit: (slide: AdminSlide) => void;
  onDelete: (slide: AdminSlide) => void;
}) {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <FileAudio className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={lessonNumber}
              onChange={(e) => onLessonChange(Number(e.target.value))}
              className="pl-10 pr-8 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors cursor-pointer"
            >
              {LESSONS_META.map((l) => (
                <option key={l.id} value={l.number}>
                  Урок {l.number} · {l.level} · {l.slidesCount} сл.
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="text-xs text-gray-400 flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5" />
          Для озвучки слайда воспроизводится только прикреплённая запись.
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center gap-3 py-20 text-gray-500">
          <Loader2 className="w-7 h-7 text-indigo-600 animate-spin" />
          <span className="text-sm font-medium">Загрузка слайдов урока {lessonNumber}...</span>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-200 bg-gray-50/60 text-xs font-semibold text-gray-500">
            Слайды урока {lessonNumber} · {slides.length} шт.
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">№</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Название слайда</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Озвучка</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 text-right">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {slides.map((slide) => {
                  const hasAudio = hasAudioForSlide(slide.id, lessonNumber);
                  return (
                    <tr key={slide.id} className="group hover:bg-gray-50/80 transition-colors">
                      <td className="px-5 py-3.5">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 text-xs font-bold">
                          {slide.id}
                        </span>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="text-sm font-medium text-gray-900">{slide.title}</div>
                        <div className="text-[11px] text-gray-400">l{lessonNumber}_s{slide.id}</div>
                      </td>
                      <td className="px-5 py-3.5">
                        <Pill tone={hasAudio ? 'green' : 'slate'}>
                          {hasAudio ? 'Живой голос диктора' : 'Нет аудио'}
                        </Pill>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => onPlay(slide)}
                            title="Прослушать"
                            className={`p-2 rounded-lg transition-colors cursor-pointer disabled:opacity-30 disabled:pointer-events-none ${
                              playingKey === `${lessonNumber}-${slide.id}`
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-500 hover:bg-indigo-50 hover:text-indigo-600'
                            }`}
                            disabled={!hasAudio}
                          >
                            <Play
                              className={`w-4 h-4 ${
                                playingKey === `${lessonNumber}-${slide.id}` ? 'animate-pulse' : ''
                              }`}
                            />
                          </button>
                          <button
                            onClick={() => onEdit(slide)}
                            title={hasAudio ? 'Изменить озвучку' : 'Записать / загрузить чтение диктора'}
                            className="p-2 rounded-lg text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer"
                          >
                            <Mic className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onDelete(slide)}
                            title="Удалить озвучку"
                            className="p-2 rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
                            disabled={!hasAudio}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Admin Audio page                                                  */
/* ------------------------------------------------------------------ */

export default function AdminAudio() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const tab: Tab = tabParam === 'slides' ? 'slides' : 'words';

  // Words state
  const [wordMap, setWordMap] = useState<Map<string, AdminWord>>(new Map());
  const [loadingWords, setLoadingWords] = useState(true);
  const [editWord, setEditWord] = useState<AdminWord | null>(null);
  const [resetWord, setResetWord] = useState<AdminWord | null>(null);
  const [playingWordKey, setPlayingWordKey] = useState<string | null>(null);

  // Slides state
  const initialLesson = Number(searchParams.get('lesson')) || 1;
  const [lessonNumber, setLessonNumber] = useState<number>(initialLesson);
  const [slides, setSlides] = useState<AdminSlide[]>([]);
  const [loadingSlides, setLoadingSlides] = useState(false);
  const [slideModal, setSlideModal] = useState<{ slideId: number; title: string } | null>(null);
  const [deleteSlide, setDeleteSlide] = useState<AdminSlide | null>(null);
  const [playingSlideKey, setPlayingSlideKey] = useState<string | null>(null);

  // Rerender on any audio change (upload / delete / server sync)
  const [, setAudioVersion] = useState(0);
  useEffect(() => subscribeAudioChanges(() => setAudioVersion((v) => v + 1)), []);

  /* ---------- words loading ---------- */
  useEffect(() => {
    let cancelled = false;
    setLoadingWords(true);
    (async () => {
      const map = new Map<string, AdminWord>();
      const add = (hu: string, ru: string, phonetic: string | undefined, lessonNo: number) => {
        const key = hu.trim().toLowerCase();
        const existing = map.get(key);
        if (existing) {
          if (!existing.lessonNumbers.includes(lessonNo)) existing.lessonNumbers.push(lessonNo);
          return;
        }
        map.set(key, {
          key,
          hu: hu.trim(),
          ru: ru.trim(),
          phonetic,
          lessonNumbers: [lessonNo],
        });
      };

      VOCABULARY_LIST.forEach((v) => add(v.hu, v.ru, v.phonetic, 1));
      const lessons = await Promise.all(LESSONS_META.map((l) => loadLesson(l.id)));
      lessons.forEach((lesson) => {
        if (!lesson) return;
        (lesson.vocabulary ?? []).forEach((v) => add(v.hu, v.ru, v.phonetic, lesson.number));
      });

      if (!cancelled) {
        setWordMap(map);
        setLoadingWords(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  /* ---------- slides loading ---------- */
  useEffect(() => {
    let cancelled = false;
    setLoadingSlides(true);
    loadLesson(lessonNumber).then((lesson) => {
      if (cancelled) return;
      setSlides(lesson?.slides.map((s) => ({ id: s.id, title: s.title })) ?? []);
      setLoadingSlides(false);
    });
    return () => {
      cancelled = true;
    };
  }, [lessonNumber]);

  /* ---------- handlers ---------- */
  const switchTab = (next: Tab) => {
    const params = new URLSearchParams(searchParams);
    params.set('tab', next);
    setSearchParams(params, { replace: true });
  };

  const playWord = (w: AdminWord) => {
    // Toggle: if this word is already playing, stop it.
    if (playingWordKey === w.key) {
      stopRecordedAudio();
      setPlayingWordKey(null);
      return;
    }
    stopRecordedAudio();
    setPlayingWordKey(w.key);
    playCourseAudio(
      w.hu,
      0.82,
      () => setPlayingWordKey(null),
      () => setPlayingWordKey(null)
    );
  };

  const playSlide = (slide: AdminSlide) => {
    const key = `${lessonNumber}-${slide.id}`;
    // Toggle: if this slide is already playing, stop it.
    if (playingSlideKey === key) {
      stopRecordedAudio();
      setPlayingSlideKey(null);
      return;
    }
    stopRecordedAudio();
    const url = getSlideCandidateKeys(slide.id, lessonNumber)
      .map((k) => getAudioFileUrl(k))
      .find(Boolean);
    if (!url) return;
    setPlayingSlideKey(key);
    playRecordedAudio(
      getSlideCandidateKeys(slide.id, lessonNumber)[0],
      undefined,
      () => setPlayingSlideKey(null),
      () => setPlayingSlideKey(null)
    );
  };

  const confirmResetWord = async () => {
    if (!resetWord) return;
    await removeWordOverride(resetWord.hu);
    setResetWord(null);
  };

  const confirmDeleteSlideAudio = async () => {
    if (!deleteSlide) return;
    await removeAudioForSlide(deleteSlide.id, lessonNumber);
    setDeleteSlide(null);
  };

  const [resetMsg, setResetMsg] = useState('');
  const overridesSummary = getActiveAudioOverridesSummary();

  const handleResetOverrides = async () => {
    const res = await resetAllAudioOverrides();
    setResetMsg(`Сброшено ${res.count} переопределений! Приложение полностью вернулось к файлам из public/audio/.`);
  };

  return (
    <div>
      <PageHeader
        title="Озвучка курса"
        subtitle="Записи голоса для слов и чтение диктора для слайдов — слышны всем ученикам"
      />

      {/* Override Reset Banner */}
      <div className="mb-6 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <span>Статус переопределений и старых тестов</span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                  overridesSummary.totalCount > 0
                    ? 'bg-amber-50 text-amber-700 border-amber-200'
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                }`}>
                  {overridesSummary.totalCount > 0
                    ? `Активно ${overridesSummary.totalCount} кастомных записей`
                    : 'Активны оригинальные файлы из public/audio/'}
                </span>
              </div>
              <div className="text-xs text-gray-500 mt-0.5">
                Если раньше загружались тестовые аудио через браузер/сервер, вы можете сбросить их в 1 клик.
              </div>
            </div>
          </div>

          <button
            onClick={handleResetOverrides}
            className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-semibold text-xs transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2 shrink-0"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Сбросить все переопределения и вернуться к файлам из public/audio</span>
          </button>
        </div>

        {overridesSummary.totalCount > 0 && (
          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs font-mono text-gray-700 space-y-1">
            <div className="font-bold text-gray-900 mb-1">Список активных переопределенных ключей:</div>
            {overridesSummary.serverOverrides.length > 0 && (
              <div>• На сервере ({overridesSummary.serverOverrides.length}): {overridesSummary.serverOverrides.join(', ')}</div>
            )}
            {overridesSummary.customOverrides.length > 0 && (
              <div>• В IndexedDB ({overridesSummary.customOverrides.length}): {overridesSummary.customOverrides.join(', ')}</div>
            )}
            {overridesSummary.disabledKeys.length > 0 && (
              <div>• Отключенные ({overridesSummary.disabledKeys.length}): {overridesSummary.disabledKeys.join(', ')}</div>
            )}
          </div>
        )}

        {resetMsg && (
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold font-mono">
            {resetMsg}
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="inline-flex rounded-xl bg-gray-100 p-1 mb-8 gap-1">
        <button
          onClick={() => switchTab('words')}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
            tab === 'words' ? 'bg-white text-indigo-700 shadow-sm font-semibold' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <Languages className="w-4 h-4" />
          Слова
        </button>
        <button
          onClick={() => switchTab('slides')}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
            tab === 'slides' ? 'bg-white text-indigo-700 shadow-sm font-semibold' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <AudioLines className="w-4 h-4" />
          Чтение диктора для слайдов
        </button>
      </div>

      {tab === 'words' ? (
        <WordsTab
          wordMap={wordMap}
          loading={loadingWords}
          playingKey={playingWordKey}
          onPlay={playWord}
          onEdit={setEditWord}
          onReset={setResetWord}
        />
      ) : (
        <SlidesTab
          slides={slides}
          lessonNumber={lessonNumber}
          loading={loadingSlides}
          playingKey={playingSlideKey}
          onLessonChange={setLessonNumber}
          onPlay={playSlide}
          onEdit={(s) => setSlideModal({ slideId: s.id, title: s.title })}
          onDelete={setDeleteSlide}
        />
      )}

      {/* Word voice editing (reuses existing EditWordModal) */}
      {editWord && (
        <EditWordModal
          isOpen
          originalText={editWord.hu}
          onClose={() => setEditWord(null)}
          onSaved={() => setEditWord(null)}
        />
      )}

      {/* Slide narrator recording (reuses existing SlideAudioModal) */}
      {slideModal && (
        <SlideAudioModal
          isOpen
          lessonNumber={lessonNumber}
          slideId={slideModal.slideId}
          slideTitle={slideModal.title}
          onClose={() => setSlideModal(null)}
          onSaved={() => setSlideModal(null)}
        />
      )}

      {/* Confirms */}
      <ConfirmDialog
        open={resetWord !== null}
        title="Сбросить голос слова?"
        message={
          <>
            Для слова <strong>{resetWord?.hu}</strong> запись голоса будет удалена. Ученики снова
            больше не смогут воспроизводить аудио, пока не будет добавлена новая запись.
          </>
        }
        confirmLabel="Сбросить"
        onConfirm={confirmResetWord}
        onCancel={() => setResetWord(null)}
      />

      <ConfirmDialog
        open={deleteSlide !== null}
        title="Удалить озвучку слайда?"
        message={
          <>
            Чтение диктора для слайда {lessonNumber}.{deleteSlide?.id} будет удалено, и слайд
            останется без аудио, пока не будет добавлена новая запись.
          </>
        }
        confirmLabel="Удалить"
        onConfirm={confirmDeleteSlideAudio}
        onCancel={() => setDeleteSlide(null)}
      />
    </div>
  );
}
