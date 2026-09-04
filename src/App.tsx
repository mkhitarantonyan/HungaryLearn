import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import { LESSONS_META, LessonLoadError, loadLesson } from './data/lessons';
import { LESSON_PROGRESS_DEFINITIONS } from './data/lessonProgressCatalog';
import { Lesson, ReviewCardState, ActivityAttempt, ActivityEvidence, ActivityRuntimeState } from './types';
import { LessonList } from './components/LessonList';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { SlideContent } from './components/SlideContent';
import { SlideDrawer } from './components/SlideDrawer';
import { ReviewWarmup } from './components/ReviewWarmup';
import { WordTrainerModal } from './components/WordTrainerModal';
import { TranslationTrainerModal } from './components/TranslationTrainerModal';
import { LessonQuizModal } from './components/LessonQuizModal';
import { AdminAccessModal } from './components/AdminAccessModal';
import { UserAuthModal } from './components/UserAuthModal';
import { SlideAudioModal } from './components/SlideAudioModal';
import { NarrationPlayer } from './components/NarrationPlayer';
import { PracticeMenu } from './components/PracticeMenu';
import { useLessonNarration } from './hooks/useLessonNarration';
import { countDueCards } from './utils/spacedRepetition';
import { isAdminLoggedIn, subscribeAdminState } from './utils/adminStore';
import { emptyProgressData, isLessonAccessible, getCurrentUser, isUserAuthReady, logoutUserServer, mergeProgressData, readCachedProgress, writeCachedProgress, subscribeUserAuthReady } from './utils/userStore';
import { subscribeAudioChanges } from './utils/audioRegistry';
import { clearActivityEvidence } from './utils/activityUtils';
import { getLessonProgressState } from './utils/lessonProgress';
import { humanizeLearnerText } from './utils/learnerCopy';
import { beginProgressHydration, isCurrentProgressHydration, mergeActivityEvidence } from './utils/progressMerge';
import { subscribeUserState, fetchUserProgress, syncProgressToServer, syncReviewCardToServer, syncQuizAttemptToServer, syncActivityAttemptToServer, syncActivityEvidenceToServer } from './utils/userStore';
import { AlertCircle, Loader2 } from 'lucide-react';

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
  const initialProgress = useMemo(() => readCachedProgress(getCurrentUser()?.id ?? null), []);
  const [viewMode, setViewMode] = useState<'list' | 'lesson'>('list');
  const [selectedLessonId, setSelectedLessonId] = useState<number>(1);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [isLoadingLesson, setIsLoadingLesson] = useState(false);
  const [lessonLoadError, setLessonLoadError] = useState<{ message: string; status?: number } | null>(null);
  const [lessonLoadAttempt, setLessonLoadAttempt] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isTrainerOpen, setIsTrainerOpen] = useState(false);
  const [isTranslationsOpen, setIsTranslationsOpen] = useState(false);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isSlideAudioModalOpen, setIsSlideAudioModalOpen] = useState(false);

  const [isAdmin, setIsAdmin] = useState(isAdminLoggedIn());

  const [viewedSlideIds, setViewedSlideIds] = useState<string[]>(initialProgress.viewedSlides);
  const [passedQuizzes, setPassedQuizzes] = useState<number[]>(initialProgress.passedQuizzes ?? []);
  const [reviewCardStates, setReviewCardStates] = useState<Record<string, ReviewCardState>>(initialProgress.reviewCards ?? {});
  const [activityEvidence, setActivityEvidence] = useState<Record<string, ActivityEvidence>>(initialProgress.activityEvidence ?? {});
  const [activityAttempts, setActivityAttempts] = useState<Record<string, ActivityAttempt>>(initialProgress.activityAttempts ?? {});
  const [quizAttempts, setQuizAttempts] = useState(initialProgress.quizAttempts ?? {});
  const [activityRuntime, setActivityRuntime] = useState<Record<string, ActivityRuntimeState>>({});
  const [showWarmup, setShowWarmup] = useState(false);
  const [isProgressHydrated, setIsProgressHydrated] = useState(() => !getCurrentUser());
  const [progressOwnerId, setProgressOwnerId] = useState<string | null>(() => getCurrentUser()?.id ?? null);
  const [authReady, setAuthReady] = useState(isUserAuthReady());
  const progressHydrationRevision = useRef(0);

  const visitedLessonNumbers = useMemo(
    () => extractVisitedLessonNumbers(viewedSlideIds),
    [viewedSlideIds]
  );

  const [, setAudioVersion] = useState(0);

  const allLessons = LESSONS_META;

  const slides = useMemo(() => activeLesson?.slides ?? [], [activeLesson]);
  const currentSlide = slides[currentSlideIndex] ?? slides[0];
  const activeLessonProgress = useMemo(() => {
    const definition = LESSON_PROGRESS_DEFINITIONS.find((item) => item.lessonNumber === activeLesson?.number)
      ?? { lessonNumber: activeLesson?.number ?? 0, quizRequired: true, units: [] };
    return getLessonProgressState({
      definition,
      evidence: activityEvidence,
      quizPassed: activeLesson ? passedQuizzes.includes(activeLesson.number) : false,
    });
  }, [activeLesson, activityEvidence, passedQuizzes]);
  const narration = useLessonNarration(activeLesson?.number, currentSlide);
  const { play: playSlide, stop: stopNarration, autoplayEnabled } = narration;

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

  useEffect(() => subscribeUserAuthReady(setAuthReady), []);

useEffect(() => {
  const unsubscribeUser = subscribeUserState((user) => {
    const hydrationRevision = beginProgressHydration(progressHydrationRevision);
    setIsProgressHydrated(false);
    setProgressOwnerId(user?.id ?? null);
    if (!user) {
      const cached = readCachedProgress(null);
      setViewedSlideIds(cached.viewedSlides);
      setPassedQuizzes(cached.passedQuizzes ?? []);
      setActivityEvidence(cached.activityEvidence ?? {});
      setActivityAttempts(cached.activityAttempts ?? {});
      setQuizAttempts(cached.quizAttempts ?? {});
      setReviewCardStates(cached.reviewCards ?? {});
      setIsProgressHydrated(true);
      return;
    }
    fetchUserProgress().then((data) => {
      if (!isCurrentProgressHydration(progressHydrationRevision, hydrationRevision)) return;
      const anonymous = readCachedProgress(null);
      const cached = readCachedProgress(user.id);
      const server = data ?? emptyProgressData();
      const merged = mergeProgressData(anonymous, cached, server);
      const mergedViewed = merged.viewedSlides;
      const mergedPassed = merged.passedQuizzes ?? [];
      const mergedEvidence = merged.activityEvidence ?? {};
      const mergedReviewCards = merged.reviewCards ?? {};
      const mergedActivityAttempts = merged.activityAttempts ?? {};
      const mergedQuizAttempts = merged.quizAttempts ?? {};
      writeCachedProgress(user.id, merged);
      writeCachedProgress(null, emptyProgressData());
      setViewedSlideIds(mergedViewed);
      setPassedQuizzes(mergedPassed);
      setActivityEvidence(mergedEvidence);
      setReviewCardStates(mergedReviewCards);
      setActivityAttempts(mergedActivityAttempts);
      setQuizAttempts(mergedQuizAttempts);
      void syncProgressToServer(mergedViewed);
      const partialEvidence = Object.fromEntries(
        Object.entries(mergedEvidence).filter(([, item]) => item.evidenceMode === 'partial')
      );
      if (Object.keys(partialEvidence).length > 0) void syncActivityEvidenceToServer(partialEvidence);
      for (const attempt of Object.values(mergedActivityAttempts)) {
        void syncActivityAttemptToServer(attempt).then((canonical) => {
          if (canonical) setActivityEvidence((current) => mergeActivityEvidence(current, { [canonical.activityId]: canonical }));
        });
      }
      for (const attempt of Object.values(mergedQuizAttempts)) void syncQuizAttemptToServer(attempt);
      setIsProgressHydrated(true);
    });
  });
  return () => {
    progressHydrationRevision.current += 1;
    unsubscribeUser();
  };
}, []);

useEffect(() => {
  if (!isProgressHydrated) return;
  writeCachedProgress(progressOwnerId, {
    viewedSlides: viewedSlideIds,
    passedQuizzes,
    activityEvidence,
    reviewCards: reviewCardStates,
    activityAttempts,
    quizAttempts,
  });
}, [progressOwnerId, viewedSlideIds, passedQuizzes, activityEvidence, reviewCardStates, activityAttempts, quizAttempts, isProgressHydrated]);

useEffect(() => {
  if (viewMode !== 'lesson') {
    return;
  }

  let cancelled = false;

  const loadSelectedLesson = async () => {
    setIsLoadingLesson(true);
    setLessonLoadError(null);

    try {
      const lesson = await loadLesson(selectedLessonId, { admin: isAdmin });

      if (cancelled) return;

      if (!lesson) {
        setActiveLesson(null);
        setLessonLoadError({ message: 'Урок не найден.', status: 404 });
        return;
      }

      setActiveLesson(lesson);
    } catch (error: unknown) {
      if (cancelled) return;

      setActiveLesson(null);
      const failure = error instanceof LessonLoadError
        ? { message: error.message, status: error.status }
        : { message: error instanceof Error ? error.message : 'Урок сейчас недоступен.' };
      if (failure.status === 401) await logoutUserServer().catch(() => undefined);
      setLessonLoadError(failure);
    } finally {
      if (!cancelled) {
        setIsLoadingLesson(false);
      }
    }
  };

  void loadSelectedLesson();

  return () => {
    cancelled = true;
  };
}, [selectedLessonId, viewMode, isAdmin, lessonLoadAttempt]);

  const handleSelectLesson = (lessonId: number) => {
    // Guard: prevent opening a lesson the user hasn't unlocked yet.
    const lessonMeta = LESSONS_META.find((l) => l.id === lessonId);
    if (lessonMeta && !isLessonAccessible(lessonMeta.number, getCurrentUser(), isAdmin)) {
      return;
    }
    narration.stop();
    setSelectedLessonId(lessonId);
    setCurrentSlideIndex(0);
    setIsQuizActive(false);
    setActivityRuntime({});
    setLessonLoadError(null);
    setViewMode('lesson');
    setShowWarmup(true);
  };

const handleCardGraded = (cardId: string, grade: 'again' | 'hard' | 'good' | 'easy') => {
  void syncReviewCardToServer(cardId, grade);
};

  const handleResetActivityEvidence = (activityId: string) => {
    setActivityEvidence((prev) => {
      const current = prev[activityId];
      if (current?.passed || (current?.completed && current.evidenceMode === 'partial')) return prev;
      return clearActivityEvidence(prev, activityId);
    });
  };

  const handleActivityEvidence = (evidence: ActivityEvidence, attempt?: ActivityAttempt) => {
    if (isAdmin) return;
    setActivityEvidence((prev) => mergeActivityEvidence(prev, { [evidence.activityId]: evidence }));
    if (attempt) {
      setActivityAttempts((current) => ({ ...current, [attempt.activityId]: attempt }));
      void syncActivityAttemptToServer(attempt).then((canonical) => {
        if (canonical) {
          setActivityEvidence((current) => mergeActivityEvidence(current, { [canonical.activityId]: canonical }));
        }
      });
    } else if (evidence.evidenceMode === 'partial') {
      void syncActivityEvidenceToServer({ [evidence.activityId]: evidence });
    }
  };

  const handleActivityRuntimeChange = (activityId: string, patch: Partial<ActivityRuntimeState>) => {
    setActivityRuntime((prev) => ({ ...prev, [activityId]: { ...prev[activityId], ...patch } }));
  };

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

  const handleNext = useCallback(() => {
    if (currentSlideIndex < slides.length - 1) {
      const nextIndex = currentSlideIndex + 1;
      const nextSlide = slides[nextIndex];
      stopNarration();
      setSlideDirection(1);
      setCurrentSlideIndex(nextIndex);
      if (autoplayEnabled && nextSlide) {
        playSlide(nextSlide);
      }
    }
  }, [currentSlideIndex, slides, stopNarration, playSlide, autoplayEnabled]);

  const handlePrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      const prevIndex = currentSlideIndex - 1;
      const prevSlide = slides[prevIndex];
      stopNarration();
      setSlideDirection(-1);
      setCurrentSlideIndex(prevIndex);
      if (autoplayEnabled && prevSlide) {
        playSlide(prevSlide);
      }
    }
  }, [currentSlideIndex, slides, stopNarration, playSlide, autoplayEnabled]);

  const handleSelectSlide = useCallback((index: number) => {
    const targetSlide = slides[index];
    stopNarration();
    setSlideDirection(index > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(index);
    setIsQuizActive(false);
    if (autoplayEnabled && targetSlide) {
      playSlide(targetSlide);
    }
  }, [currentSlideIndex, slides, stopNarration, playSlide, autoplayEnabled]);

  const handleBackToLessons = () => {
    narration.stop();
    setViewMode('list');
  };

  const handleOpenTrainer = () => {
    narration.stop();
    setIsTrainerOpen(true);
  };

  const handleOpenTranslations = () => {
    narration.stop();
    setIsTranslationsOpen(true);
  };

  const handleOpenQuiz = () => {
    narration.stop();
    setIsQuizActive(true);
  };

  const handleOpenDrawer = () => {
    narration.stop();
    setIsDrawerOpen(true);
  };

  const handleOpenAdmin = () => {
    narration.stop();
    setIsAdminLoginOpen(true);
  };

  const handleOpenUserModal = () => {
    narration.stop();
    setIsUserModalOpen(true);
  };

  const handleOpenSlideAudioModal = () => {
    narration.stop();
    setIsSlideAudioModalOpen(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const targetTag = target?.tagName;
      if (targetTag === 'INPUT' || targetTag === 'TEXTAREA') {
        if (e.key === 'Escape') {
          target?.blur();
        }
        return;
      }

      // Inside an interactive lesson activity, arrow keys belong to the
      // activity (choice navigation, text entry). Do not switch slides.
      if (target && typeof target.closest === 'function' && target.closest('[data-lesson-activity]')) {
        return;
      }

      if (e.key === 'Escape') {
        if (isSlideAudioModalOpen) setIsSlideAudioModalOpen(false);
        else if (isAdminLoginOpen) setIsAdminLoginOpen(false);
        else if (isTrainerOpen) setIsTrainerOpen(false);
        else if (isTranslationsOpen) setIsTranslationsOpen(false);
        else if (isDrawerOpen) setIsDrawerOpen(false);
        else if (isQuizActive) setIsQuizActive(false);
        return;
      }

      const isAnyModalOpen =
        isDrawerOpen ||
        isTranslationsOpen ||
        isTrainerOpen ||
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
    handleNext,
    handlePrev,
    isDrawerOpen,
    isTranslationsOpen,
    isTrainerOpen,
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

  if (!authReady) {
    return (
      <div className="min-h-screen bg-[#EDF4FB] text-[#252B2F] flex items-center justify-center p-4 font-sans" role="status">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-[#116EEE] animate-spin" />
          <span className="font-mono text-sm font-semibold text-[#252B2F]">Восстановление сессии…</span>
        </div>
      </div>
    );
  }

  if (viewMode === 'list') {
    return (
      <>
        <LessonList
          lessons={allLessons}
          onSelectLesson={handleSelectLesson}
          onOpenAdmin={handleOpenAdmin}
          isAdmin={isAdmin}
          onOpenUserModal={handleOpenUserModal}
          passedQuizzes={passedQuizzes}
          activityEvidence={activityEvidence}
          dueReviewCount={countDueCards(reviewCardStates, visitedLessonNumbers)}
        />

        {/* Modals on main list page as well */}
        <AdminAccessModal
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

  if (lessonLoadError) {
    const status = lessonLoadError.status;
    const title = status === 401
      ? 'Сессия истекла'
      : status === 403
        ? 'Нужна подписка'
        : status === 404
          ? 'Урок недоступен'
          : 'Не удалось открыть урок';
    return (
      <div className="min-h-screen bg-[#EDF4FB] text-[#252B2F] flex items-center justify-center p-4 font-sans">
        <div className="max-w-md rounded-2xl border border-[#D6DEE6] bg-white p-7 text-center shadow-sm">
          <AlertCircle className="w-9 h-9 text-[#116EEE] mx-auto" />
          <h1 className="mt-3 text-xl font-bold text-[#252B2F]">{title}</h1>
          <p className="mt-2 text-sm text-[#666E7E]">{lessonLoadError.message}</p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">
            {(status === 401 || status === 403) && (
              <button
                type="button"
                onClick={() => setIsUserModalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-[#116EEE] text-white text-sm font-semibold hover:bg-[#0D5ED0]"
              >
                {status === 401 ? 'Войти / Зарегистрироваться' : 'Открыть подписку'}
              </button>
            )}
            {(status === undefined || status >= 500) && (
              <button
                type="button"
                onClick={() => {
                  setLessonLoadError(null);
                  setLessonLoadAttempt((attempt) => attempt + 1);
                }}
                className="px-5 py-2.5 rounded-xl bg-[#116EEE] text-white text-sm font-semibold hover:bg-[#0D5ED0]"
              >
                Повторить
              </button>
            )}
            <button
              type="button"
              onClick={handleBackToLessons}
              className="px-5 py-2.5 rounded-xl border border-[#D6DEE6] bg-white text-[#252B2F] text-sm font-semibold hover:bg-[#EDF4FB]"
            >
              К списку уроков
            </button>
          </div>
        </div>
        <UserAuthModal isOpen={isUserModalOpen} onClose={() => setIsUserModalOpen(false)} />
      </div>
    );
  }

  if (isLoadingLesson || !activeLesson) {
    return (
      <div className="min-h-screen bg-[#EDF4FB] text-[#252B2F] flex items-center justify-center p-4 font-sans">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-[#116EEE] animate-spin" />
          <span className="font-mono text-sm font-semibold text-[#252B2F]">Загрузка урока...</span>
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

  return (
    <div className="min-h-screen bg-[#EDF4FB] text-[#252B2F] flex flex-col font-sans selection:bg-[#116EEE] selection:text-white">
      <Header
        lessonNumber={activeLesson.number}
        lessonLevel={activeLesson.level}
        lessonTitle={activeLesson.title}
        currentSlide={currentSlideIndex}
        totalSlides={slides.length}
        lessonProgress={activeLessonProgress}
        onOpenDrawer={handleOpenDrawer}
        onOpenAdmin={handleOpenAdmin}
        onOpenUserModal={handleOpenUserModal}
        onBackToLessons={handleBackToLessons}
      />

      {!isQuizActive && (
        <NarrationPlayer
          isPlaying={narration.isPlaying}
          autoplayEnabled={narration.autoplayEnabled}
          playbackRate={narration.playbackRate}
          needsUserGesture={narration.needsUserGesture}
          audioUnavailable={narration.audioUnavailable}
          slideLabel={`${currentSlideIndex + 1} · ${humanizeLearnerText(currentSlide.title)}`}
          onPlayPause={narration.toggle}
          onToggleAutoplay={() => narration.setAutoplay(!narration.autoplayEnabled)}
          onSetPlaybackRate={narration.setPlaybackRate}
          isAdmin={isAdmin}
          onOpenAudioEditor={handleOpenSlideAudioModal}
        />
      )}

      {/* Main learning canvas */}
      <main className="flex-1 p-4 md:p-8">
        <div className="w-full max-w-6xl mx-auto">
          {isQuizActive ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
            >
              <LessonQuizModal
                onClose={() => setIsQuizActive(false)}
                lesson={activeLesson}
                onQuizComplete={(lessonNumber, score, total, answers) => {
                  if (isAdmin) return;
                  const percentage = Math.round((score / total) * 100);
                  const PASS_THRESHOLD = 80;
                  if (percentage >= PASS_THRESHOLD) {
                    setQuizAttempts((current) => ({
                      ...current,
                      [String(lessonNumber)]: { lessonNumber, answers },
                    }));
                    setPassedQuizzes((prev) =>
                      prev.includes(lessonNumber) ? prev : [...prev, lessonNumber]
                    );
                    void syncQuizAttemptToServer({ lessonNumber, answers });
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
                className="relative overflow-hidden bg-white border border-[#D6DEE6] border-t-4 border-t-[#116EEE] rounded-2xl p-6 md:p-10 shadow-[0_1px_2px_rgba(18,38,63,0.1)] min-h-105 flex flex-col"
              >
                <div className="flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#666E7E] mb-2">
                    {currentSlide.eyebrow}
                  </div>
                  <h1 className="text-2xl md:text-4xl font-extrabold text-[#252B2F] tracking-tight leading-[1.15]">
                    {humanizeLearnerText(currentSlide.title)}
                  </h1>
                  {currentSlide.subtitle && (
                    <p className="text-sm md:text-base text-[#666E7E] mt-2 mb-6">{humanizeLearnerText(currentSlide.subtitle)}</p>
                  )}

                  <SlideContent
                    slide={currentSlide}
                    activityEvidence={activityEvidence}
                    objectives={activeLesson.objectives}
                    onActivityEvidence={handleActivityEvidence}
                    onActivityEvidenceReset={handleResetActivityEvidence}
                    activityRuntime={activityRuntime}
                    onActivityRuntimeChange={handleActivityRuntimeChange}
                  />
                </div>

                <div className="pt-6 mt-6 border-t border-[#D6DEE6]/40 flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2 text-xs text-[#666E7E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B1E90]"></span>
                    <span>Клавиши ← и → для переключения</span>
                  </div>

                  <PracticeMenu
                    dueReviewCount={countDueCards(reviewCardStates, visitedLessonNumbers)}
                    onOpenWords={handleOpenTrainer}
                    onOpenTranslations={handleOpenTranslations}
                    onOpenReview={() => {
                      narration.stop();
                      setShowWarmup(true);
                    }}
                  />
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

      {/* User Auth & Profile Modal */}
      <UserAuthModal
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
      />

      {/* Admin Login Modal */}
      <AdminAccessModal
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
        slideTitle={humanizeLearnerText(currentSlide.title)}
        onClose={() => setIsSlideAudioModalOpen(false)}
        onOpenAdminLogin={() => setIsAdminLoginOpen(true)}
      />
    </div>
  );
}
