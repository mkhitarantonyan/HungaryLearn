import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import { LESSONS_META, loadLesson } from './data/lessons';
import { Lesson, ReviewCardState } from './types';
import { LessonList } from './components/LessonList';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { SlideContent } from './components/SlideContent';
import { SlideDrawer } from './components/SlideDrawer';
import { ReviewWarmup } from './components/ReviewWarmup';
import { WordTrainerModal } from './components/WordTrainerModal';
import { TranslationTrainerModal } from './components/TranslationTrainerModal';
import { LessonQuizModal } from './components/LessonQuizModal';
import { VoiceSettingsModal } from './components/VoiceSettingsModal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { UserAuthModal } from './components/UserAuthModal';
import { SlideAudioModal } from './components/SlideAudioModal';
import { speakSequence, stopSpeech } from './utils/speech';
import { getSlideNarrativeSequence } from './utils/slideNarrator';
import { countDueCards } from './utils/spacedRepetition';
import { isAdminLoggedIn, subscribeAdminState } from './utils/adminStore';
import { isLessonAccessible, getCurrentUser } from './utils/userStore';
import { subscribeAudioChanges, hasAudioForSlide } from './utils/audioRegistry';
import { subscribeUserState, fetchUserProgress, syncProgressToServer, syncReviewCardToServer, syncQuizResultToServer } from './utils/userStore';
import { BookOpen, Mic, Volume2, Play, Square, Loader2 } from 'lucide-react';

function extractVisitedLessonNumbers(viewedSlides: string[]): number[] {
  const numbers = new Set<number>();
  for (const slideId of viewedSlides) {
    const match = slideId.match(/^l(\d+)_/);
    if (match) {
      numbers.add(parseInt(match[1], 10));
    }
  }
  return Array.from(numbers);
}

function buildViewedSlideId(lessonNumber: number, slideId: number): string {
  return `l${lessonNumber}_s${slideId}`;
}

export default function App() {
  const [viewMode, setViewMode] = useState<'list' | 'lesson'>('list');
  const [selectedLessonId, setSelectedLessonId] = useState<number>(1);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [isLoadingLesson, setIsLoadingLesson] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isTrainerOpen, setIsTrainerOpen] = useState(false);
  const [isTranslationsOpen, setIsTranslationsOpen] = useState(false);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [isVoiceSettingsOpen, setIsVoiceSettingsOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isSlideAudioModalOpen, setIsSlideAudioModalOpen] = useState(false);

  const [isAdmin, setIsAdmin] = useState(isAdminLoggedIn());

  const [isNarrating, setIsNarrating] = useState(false);
  // Ref mirror of isNarrating so the toggle button reacts instantly and the
  // speech sequence can be cancelled even while voices are still loading.
  const isNarratingRef = useRef(false);
  const [viewedSlideIds, setViewedSlideIds] = useState<string[]>([]);
  const [passedQuizzes, setPassedQuizzes] = useState<number[]>([]);
  const [reviewCardStates, setReviewCardStates] = useState<Record<string, ReviewCardState>>({});
  const [showWarmup, setShowWarmup] = useState(false);
  const [isProgressHydrated, setIsProgressHydrated] = useState(() => !getCurrentUser());

  const visitedLessonNumbers = useMemo(
    () => extractVisitedLessonNumbers(viewedSlideIds),
    [viewedSlideIds]
  );

  const [, setAudioVersion] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      if (pathname === '/admin' || pathname === '/admin/' || params.get('admin') === '1') {
        setIsAdminLoginOpen(true);
      }
      if (params.get('payment') === 'success') {
        setIsUserModalOpen(true);
        window.history.replaceState({}, '', window.location.pathname);
      }
    }

    const unsubscribe = subscribeAdminState((status) => {
      setIsAdmin(status);
    });
    const unsubAudio = subscribeAudioChanges(() => {
      setAudioVersion(prev => prev + 1);
    });

    const handlePopState = () => {
      if (window.location.pathname.toLowerCase().startsWith('/admin')) {
        setIsAdminLoginOpen(true);
      }
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      unsubscribe();
      unsubAudio();
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

useEffect(() => {
  const unsubscribeUser = subscribeUserState((user) => {
    if (!user) {
      setIsProgressHydrated(true);
      return;
    }
    fetchUserProgress().then((data) => {
      if (!data) {
        setIsProgressHydrated(true);
        return;
      }
      setViewedSlideIds(Array.isArray(data.viewedSlides) ? data.viewedSlides : []);
      setPassedQuizzes(Array.isArray(data.passedQuizzes) ? data.passedQuizzes : []);
      if (data.reviewCards) {
        setReviewCardStates(data.reviewCards);
      }
      setIsProgressHydrated(true);
    });
  });
  return () => unsubscribeUser();
}, []);

  useEffect(() => {
    let isMounted = true;
    if (viewMode === 'lesson' && (!activeLesson || activeLesson.id !== selectedLessonId)) {
      setIsLoadingLesson(true);
      loadLesson(selectedLessonId).then((lesson) => {
        if (isMounted) {
          if (lesson) setActiveLesson(lesson);
          setIsLoadingLesson(false);
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, [selectedLessonId, viewMode]);

  const handleSelectLesson = (lessonId: number) => {
    // Guard: prevent opening a lesson the user hasn't unlocked yet.
    const lessonMeta = LESSONS_META.find((l) => l.id === lessonId);
    if (lessonMeta && !isLessonAccessible(lessonMeta.number, getCurrentUser(), isAdmin)) {
      return;
    }
    stopSpeech();
    setSelectedLessonId(lessonId);
    setCurrentSlideIndex(0);
    setIsQuizActive(false);
    setViewMode('lesson');
    setShowWarmup(true);
  };

const handleCardGraded = (cardId: string, grade: 'again' | 'hard' | 'good' | 'easy') => {
  void syncReviewCardToServer(cardId, grade);
};

  const slides = activeLesson?.slides || [];
  const currentSlide = slides[currentSlideIndex] || slides[0];

  // Tracks the last state that was already synced to the server,
  // so the sync effect below only fires when completed slides actually change.
  const lastSyncedSlidesRef = useRef<string[]>([]);

useEffect(() => {
  if (viewMode !== 'lesson' || !activeLesson || !currentSlide || isAdmin) {
    return;
  }

  const viewedId = buildViewedSlideId(activeLesson.number, currentSlide.id);
  setViewedSlideIds((prev) => (prev.includes(viewedId) ? prev : [...prev, viewedId]));
}, [viewMode, activeLesson, currentSlide, isAdmin]);

useEffect(() => {
  if (!isProgressHydrated) return;

  const prev = lastSyncedSlidesRef.current;
  if (
    prev.length === viewedSlideIds.length &&
    prev.every((id, index) => id === viewedSlideIds[index])
  ) {
    return;
  }

  void (async () => {
    const success = await syncProgressToServer(viewedSlideIds);
    if (success) {
      lastSyncedSlidesRef.current = viewedSlideIds;
      return;
    }

    window.setTimeout(() => {
      void syncProgressToServer(viewedSlideIds).then((retrySuccess) => {
        if (retrySuccess) {
          lastSyncedSlidesRef.current = viewedSlideIds;
        }
      });
    }, 3000);
  })();
}, [viewedSlideIds, isProgressHydrated]);

  const startNarratingSlide = (slide = currentSlide) => {
    if (!activeLesson || !slide) return;
    stopSpeech();
    isNarratingRef.current = true;
    setIsNarrating(true);
    const sequence = getSlideNarrativeSequence(slide, activeLesson.number);
    speakSequence(
      sequence,
      undefined,
      () => {
        isNarratingRef.current = false;
        setIsNarrating(false);
      },
      () => !isNarratingRef.current
    );
  };

  const stopNarrating = () => {
    isNarratingRef.current = false;
    stopSpeech();
    setIsNarrating(false);
  };

  const handleToggleReadSlide = () => {
    if (isNarratingRef.current) stopNarrating();
    else startNarratingSlide();
  };

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      stopNarrating();
      setSlideDirection(1);
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      stopNarrating();
      setSlideDirection(-1);
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const handleSelectSlide = (index: number) => {
    stopNarrating();
    setSlideDirection(index > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(index);
    setIsQuizActive(false);
  };

  const handleBackToLessons = () => {
    stopNarrating();
    setViewMode('list');
  };

  const handleOpenTrainer = () => {
    stopNarrating();
    setIsTrainerOpen(true);
  };

  const handleOpenTranslations = () => {
    stopNarrating();
    setIsTranslationsOpen(true);
  };

  const handleOpenQuiz = () => {
    stopNarrating();
    setIsQuizActive(true);
  };

  const handleOpenDrawer = () => {
    stopNarrating();
    setIsDrawerOpen(true);
  };

  const handleOpenVoiceSettings = () => {
    stopNarrating();
    setIsVoiceSettingsOpen(true);
  };

  const handleOpenAdmin = () => {
    stopNarrating();
    setIsAdminLoginOpen(true);
  };

  const handleOpenUserModal = () => {
    stopNarrating();
    setIsUserModalOpen(true);
  };

  const handleOpenSlideAudioModal = () => {
    stopNarrating();
    setIsSlideAudioModalOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName;
      if (targetTag === 'INPUT' || targetTag === 'TEXTAREA') {
        if (e.key === 'Escape') {
          (e.target as HTMLElement).blur();
        }
        return;
      }

      if (e.key === 'Escape') {
        if (isSlideAudioModalOpen) setIsSlideAudioModalOpen(false);
        else if (isAdminLoginOpen) setIsAdminLoginOpen(false);
        else if (isVoiceSettingsOpen) setIsVoiceSettingsOpen(false);
        else if (isTrainerOpen) setIsTrainerOpen(false);
        else if (isDrawerOpen) setIsDrawerOpen(false);
        else if (isQuizActive) setIsQuizActive(false);
        return;
      }

      const isAnyModalOpen =
        isDrawerOpen ||
        isTrainerOpen ||
        isVoiceSettingsOpen ||
        isAdminLoginOpen ||
        isSlideAudioModalOpen ||
        isUserModalOpen ||
        isQuizActive;

      if (viewMode === 'lesson' && !isAnyModalOpen) {
        if (e.key === 'ArrowRight') {
          handleNext();
        } else if (e.key === 'ArrowLeft') {
          handlePrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    viewMode,
    currentSlideIndex,
    slides.length,
    isDrawerOpen,
    isTrainerOpen,
    isVoiceSettingsOpen,
    isAdminLoginOpen,
    isSlideAudioModalOpen,
    isUserModalOpen,
    isQuizActive
  ]);

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.28,
        ease: "easeOut"
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    })
  };

  if (viewMode === 'list') {
    return (
      <>
        <LessonList
          lessons={LESSONS_META}
          onSelectLesson={handleSelectLesson}
          onOpenAdmin={handleOpenAdmin}
          isAdmin={isAdmin}
          onOpenVoiceSettings={handleOpenVoiceSettings}
          onOpenUserModal={handleOpenUserModal}
        />

        {/* Modals on main list page as well */}
        <VoiceSettingsModal
          isOpen={isVoiceSettingsOpen}
          onClose={() => setIsVoiceSettingsOpen(false)}
        />
        <AdminLoginModal
          isOpen={isAdminLoginOpen}
          onClose={() => setIsAdminLoginOpen(false)}
        />
        <UserAuthModal
          isOpen={isUserModalOpen}
          onClose={() => setIsUserModalOpen(false)}
        />
      </>
    );
  }

  if (isLoadingLesson || !activeLesson) {
    return (
      <div className="min-h-screen bg-[#F6EFE4] text-[#2A2320] flex items-center justify-center p-4 font-sans">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-[#7A1E2B] animate-spin" />
          <span className="font-mono text-sm font-semibold text-[#57121C]">Загрузка урока...</span>
        </div>
      </div>
    );
  }

  if (showWarmup) {
    return (
      <ReviewWarmup
        userCardStates={reviewCardStates}
        completedLessonNumbers={visitedLessonNumbers}
        onCardGraded={handleCardGraded}
        onDone={() => setShowWarmup(false)}
      />
    );
  }

  const currentSlideHasAudio = hasAudioForSlide(currentSlide.id, activeLesson.number);

  return (
    <div className="min-h-screen bg-[#F6EFE4] text-[#2A2320] flex flex-col justify-between font-sans selection:bg-[#7A1E2B] selection:text-white">
      {/* Top Header */}
      <Header
        lessonNumber={activeLesson.number}
        lessonLevel={activeLesson.level}
        currentSlide={currentSlideIndex}
        totalSlides={slides.length}
        onSelectSlide={handleSelectSlide}
        onOpenTrainer={handleOpenTrainer}
        onOpenTranslations={handleOpenTranslations}
        onOpenQuiz={handleOpenQuiz}
        onOpenDrawer={handleOpenDrawer}
        onOpenAdmin={handleOpenAdmin}
        onOpenUserModal={handleOpenUserModal}
        onBackToLessons={handleBackToLessons}
        isNarrating={isNarrating}
        dueReviewCount={countDueCards(reviewCardStates, visitedLessonNumbers)}
      />

      {/* Main Stage */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-8 relative">
        <div className="w-full max-w-4xl mx-auto">
          {isQuizActive ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
            >
              <LessonQuizModal
                onClose={() => setIsQuizActive(false)}
                lesson={activeLesson}
                onQuizComplete={(lessonNumber, score, total) => {
                if (isAdmin) return;
                const percentage = Math.round((score / total) * 100);
                const PASS_THRESHOLD = 80;
                if (percentage >= PASS_THRESHOLD) {
                  setPassedQuizzes((prev) =>
                    prev.includes(lessonNumber) ? prev : [...prev, lessonNumber]
                  );
                  void syncQuizResultToServer(lessonNumber, score, total);
                }
              }}
              />
            </motion.div>
          ) : (
            <AnimatePresence mode="wait" custom={slideDirection}>
              <motion.div
                key={`${selectedLessonId}-${currentSlideIndex}`}
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-[#FBF7EF] border border-[#D9CBB0] rounded-2xl p-6 md:p-10 shadow-lg min-h-[480px] flex flex-col justify-between relative overflow-hidden"
              >
                {/* Decorative Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7A1E2B] via-[#B98A2B] to-[#2C5F58]" />

                {/* Eyebrow and Titles */}
                <div>
                  <div className="font-mono text-xs font-bold tracking-widest text-[#B98A2B] uppercase mb-1 flex items-center justify-between flex-wrap gap-2">
                    <span>{currentSlide.eyebrow}</span>
                    <span className="text-[10px] text-[#8A7A68]">
                      Урок {activeLesson.number} / {LESSONS_META.length}
                    </span>
                  </div>

                  <h1 className="text-2xl md:text-4xl font-mono font-bold text-[#57121C] tracking-tight leading-tight mt-1">
                    {currentSlide.title}
                  </h1>

                  <div className="text-sm md:text-base font-medium text-[#8A7A68] mt-1 mb-4">
                    {currentSlide.subtitle}
                  </div>

                  <div className="mb-6 p-3.5 rounded-xl border border-[#D9CBB0] bg-[#F6EFE4]/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                        currentSlideHasAudio ? 'bg-[#2C5F58] text-white' : 'bg-[#7A1E2B]/10 text-[#7A1E2B]'
                      }`}>
                        <Volume2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-mono text-xs font-bold text-[#57121C] flex items-center gap-2 flex-wrap">
                          <span>{currentSlideHasAudio ? 'Озвучка диктора прикреплена к слайду' : 'Синтез речи (TTS)'}</span>
                          <span className="px-1.5 py-0.5 rounded bg-[#D9CBB0]/40 text-[#57121C] text-[10px]">
                            {activeLesson.number}.{currentSlide.id}
                          </span>
                        </div>
                        <div className="text-[11px] text-[#8A7A68] mt-0.5">
                          {currentSlideHasAudio
                            ? 'Прикреплен голосовой трек диктора (MP3)'
                            : 'Используется синтез речи. Вы можете записать или загрузить свой MP3.'}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                      <button
                        type="button"
                        onClick={handleToggleReadSlide}
                        className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
                          isNarrating
                            ? 'bg-[#7A1E2B] text-white animate-pulse'
                            : currentSlideHasAudio
                              ? 'bg-[#2C5F58] text-white hover:bg-[#2C5F58]/90'
                              : 'bg-[#7A1E2B] text-white hover:bg-[#57121C]'
                        }`}
                      >
                        {isNarrating ? <Square className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                        <span>{isNarrating ? 'Стоп' : currentSlideHasAudio ? 'Слушать запись диктора' : 'Озвучить слайд'}</span>
                      </button>

                      {isAdmin && (
                        <button
                          type="button"
                          onClick={handleOpenSlideAudioModal}
                          className="px-2.5 py-1.5 rounded-lg border border-[#D9CBB0] bg-white hover:bg-[#F6EFE4] text-[#57121C] font-mono text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                          title="Загрузить, записать или изменить MP3 файл диктора к этому слайду"
                        >
                          <Mic className="w-3.5 h-3.5 text-[#7A1E2B]" />
                          <span>{currentSlideHasAudio ? 'Изменить MP3' : 'Загрузить MP3'}</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Main Slide Content Component */}
                  <SlideContent slide={currentSlide} />
                </div>

                {/* Footer Navigation within Slide */}
                <div className="pt-6 mt-6 border-t border-[#D9CBB0]/40 flex items-center justify-between text-xs text-[#8A7A68]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2C5F58]"></span>
                    <span>Используйте клавиши ← и → для переключения</span>
                  </div>

                  <button
                    onClick={handleOpenTrainer}
                    className="text-[#7A1E2B] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#B98A2B]" />
                    <span>Практика слов ({slides.length} слайдов)</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </main>

      {/* Bottom Navigation */}
      {!isQuizActive && (
        <Navigation
          currentSlide={currentSlideIndex}
          totalSlides={slides.length}
          onPrev={handlePrev}
          onNext={handleNext}
          onFinish={handleOpenQuiz}
        />
      )}

      {/* Slide Drawer (Index) */}
      <SlideDrawer
        isOpen={isDrawerOpen}
        slides={slides}
        lessonTitle={`Оглавление Урока ${activeLesson.number}`}
        currentSlide={currentSlideIndex}
        onClose={() => setIsDrawerOpen(false)}
        onSelectSlide={handleSelectSlide}
      />

      {/* Word Trainer Modal */}
      <WordTrainerModal
        isOpen={isTrainerOpen}
        onClose={() => setIsTrainerOpen(false)}
        lesson={activeLesson}
        onGrade={(cardId, grade) => {
          if (isAdmin) return;
          void syncReviewCardToServer(cardId, grade);
        }}
      />

      {/* Translation Trainer Modal */}
      <TranslationTrainerModal
        isOpen={isTranslationsOpen}
        onClose={() => setIsTranslationsOpen(false)}
        lesson={activeLesson}
      />

      {/* Voice Settings Modal */}
      <VoiceSettingsModal
        isOpen={isVoiceSettingsOpen}
        onClose={() => setIsVoiceSettingsOpen(false)}
      />

      {/* User Auth & Profile Modal */}
      <UserAuthModal
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
      />

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => {
          setIsAdminLoginOpen(false);
          if (typeof window !== 'undefined' && window.location.pathname.toLowerCase().startsWith('/admin')) {
            window.history.replaceState({}, '', '/');
          }
        }}
      />

      {/* Slide Audio Management Modal */}
      <SlideAudioModal
        isOpen={isSlideAudioModalOpen}
        lessonNumber={activeLesson.number}
        slideId={currentSlide.id}
        slideTitle={currentSlide.title}
        onClose={() => setIsSlideAudioModalOpen(false)}
        onOpenAdminLogin={() => setIsAdminLoginOpen(true)}
      />
    </div>
  );
}
