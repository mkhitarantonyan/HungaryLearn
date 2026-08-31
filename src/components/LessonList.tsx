import React, { useState, useEffect } from 'react';
import type { ActivityEvidence, LessonMeta } from '../types';
import {
  ArrowRight,
  ChevronRight,
  Circle,
  CircleDot,
  CheckCircle2,
  ShieldCheck,
  User,
  Lock,
  CreditCard,
  RefreshCw,
  GraduationCap,
} from 'lucide-react';
import { FREE_LESSON_COUNT, getCurrentUser, subscribeUserState, isLessonAccessible } from '../utils/userStore';
import type { UserProfile } from '../utils/userStore';
import { getCourseProgressPercentage, getLessonProgressState } from '../utils/lessonProgress';
import type { LessonProgressDefinition, LessonProgressSnapshot, LessonProgressState } from '../utils/lessonProgress';
import { LESSON_PROGRESS_DEFINITIONS } from '../data/lessonProgressCatalog';

interface LessonListProps {
  lessons: LessonMeta[];
  onSelectLesson: (lessonId: number) => void;
  onOpenAdmin: () => void;
  isAdmin: boolean;
  onOpenUserModal?: () => void;
  passedQuizzes?: number[];
  activityEvidence?: Record<string, ActivityEvidence>;
  dueReviewCount?: number;
}

function lessonProgress(
  lesson: LessonMeta,
  activityEvidence: Record<string, ActivityEvidence>,
  passedQuizzes: number[]
): ReturnType<typeof getLessonProgressState> {
  const definition = LESSON_PROGRESS_DEFINITIONS.find((item) => item.lessonNumber === lesson.number)
    ?? { lessonNumber: lesson.number, quizRequired: true, units: [] } satisfies LessonProgressDefinition;
  return getLessonProgressState({
    definition,
    evidence: activityEvidence,
    quizPassed: passedQuizzes.includes(lesson.number),
  });
}

/* ---- Curriculum level modules ---- */
const LEVELS = [
  { key: 'A0', title: 'Основы', from: 1, to: 6 },
  { key: 'A1', title: 'Грамматика и падежи', from: 7, to: 14 },
  { key: 'A2', title: 'Разговорные темы', from: 15, to: 20 },
  { key: 'B1', title: 'Продвинутый уровень', from: 21, to: 28 },
] as const;

const LEVEL_CHIP: Record<string, string> = {
  A0: 'bg-[#116EEE] text-white',
  A1: 'bg-[#3B1E90] text-white',
  A2: 'bg-[#C77B00] text-white',
  B1: 'bg-[#252B2F] text-white',
};

/** Strip the "Урок N · " prefix for a compact, scanable title. */
function shortTitle(lesson: LessonMeta): string {
  const stripped = lesson.title.replace(/^Урок\s+\d+\s*·\s*/i, '').trim();
  return stripped || lesson.title;
}

/* ---- "Continue learning" resolution — uses only existing progress ---- */
function determineCurrentLesson(
  lessons: LessonMeta[],
  activityEvidence: Record<string, ActivityEvidence>,
  passedQuizzes: number[],
  isAccessibleFn: (n: number) => boolean
): { lesson: LessonMeta; status: LessonProgressState } | null {
  const accessible = lessons
    .filter((l) => isAccessibleFn(l.number))
    .sort((a, b) => a.number - b.number);
  if (accessible.length === 0) return null;

  const progressByLesson = new Map(
    accessible.map((lesson) => [lesson.number, lessonProgress(lesson, activityEvidence, passedQuizzes)])
  );

  const inProgress = accessible.find((lesson) => progressByLesson.get(lesson.number)?.state === 'in_progress');
  if (inProgress) return { lesson: inProgress, status: 'in_progress' };

  const next = accessible.find((lesson) => progressByLesson.get(lesson.number)?.state === 'not_started');
  if (next) return { lesson: next, status: 'not_started' };

  return { lesson: accessible[accessible.length - 1], status: 'completed' };
}

/* ---- Single lesson card ---- */
function LessonCard({
  lesson,
  accessible,
  progress,
  highlight,
  onSelect,
  onLockedClick,
}: {
  lesson: LessonMeta;
  accessible: boolean;
  progress: LessonProgressSnapshot;
  highlight: 'current' | 'next' | null;
  onSelect: (id: number) => void;
  onLockedClick: (lesson: LessonMeta) => void;
}) {
  const { status, percentage } = { status: progress.state, percentage: progress.percentage };
  const StatusIcon = !accessible
    ? Lock
    : status === 'completed'
      ? CheckCircle2
      : status === 'in_progress'
        ? CircleDot
        : Circle;

  const statusLabel = !accessible
    ? 'Доступ по подписке'
    : status === 'completed'
      ? 'Урок выполнен'
        : status === 'in_progress'
          ? 'В процессе'
          : 'Не начат';

  const statusColor = !accessible
    ? 'text-[#666E7E]'
    : status === 'completed'
      ? 'text-[#3B1E90]'
      : status === 'in_progress'
        ? 'text-[#C77B00]'
        : 'text-[#666E7E]';

  const surface = !accessible
    ? 'bg-[#EDF4FB] border-[#D6DEE6] opacity-80'
    : highlight === 'current'
      ? 'bg-white border-[#116EEE] ring-1 ring-[#116EEE]/20 shadow-[0_10px_28px_rgba(17,110,238,0.10)]'
      : highlight === 'next'
        ? 'bg-white border-[#C77B00]/70 shadow-sm'
        : status === 'completed'
          ? 'bg-[#FFFFFF] border-[#D6DEE6] opacity-90'
          : 'bg-[#FFFFFF] border-[#D6DEE6]';

  const hover = accessible
    ? highlight === 'current'
      ? 'hover:shadow-[0_14px_34px_rgba(17,110,238,0.14)]'
      : status === 'completed'
        ? 'hover:border-[#D6DEE6]'
        : 'hover:border-[#116EEE]/40 hover:bg-white hover:shadow-[0_10px_24px_rgba(29,45,65,0.10)] hover:-translate-y-0.5'
    : '';

  return (
    <button
      type="button"
      onClick={() => (accessible ? onSelect(lesson.id) : onLockedClick(lesson))}
      aria-current={highlight === 'current' ? 'step' : undefined}
      aria-label={`Урок ${lesson.number} — ${shortTitle(lesson)}, статус: ${statusLabel}`}
      className={`group relative text-left w-full h-full flex flex-col rounded-2xl border p-5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#116EEE] ${surface} ${hover}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`font-mono text-[11px] font-bold tracking-wide ${accessible ? 'text-[#116EEE]' : 'text-[#666E7E]'}`}>
          {lesson.level} · УРОК {lesson.number}
        </span>
        <span className="font-mono text-[11px] text-[#666E7E]">{lesson.slidesCount} шагов</span>
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className={`text-base md:text-lg font-bold leading-snug line-clamp-2 transition-colors ${accessible ? 'text-[#252B2F] group-hover:text-[#116EEE]' : 'text-[#666E7E]'}`}>
          {shortTitle(lesson)}
        </h3>
        {highlight === 'current' && (
          <span className="shrink-0 px-2 py-0.5 rounded-md bg-[#116EEE] text-white text-[10px] font-bold uppercase tracking-wide">
            Текущий
          </span>
        )}
        {highlight === 'next' && (
          <span className="shrink-0 px-2 py-0.5 rounded-md bg-[#C77B00] text-white text-[10px] font-bold uppercase tracking-wide">
            Следующий
          </span>
        )}
      </div>

      <p className={`mt-1.5 text-sm leading-snug line-clamp-2 ${accessible ? 'text-[#666E7E]' : 'text-[#666E7E]'}`}>
        {lesson.subtitle}
      </p>

      <div className="mt-auto">
        <div className="mt-4 pt-3.5 border-t border-[#D6DEE6]/70 flex items-center justify-between">
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${statusColor}`}>
            <StatusIcon className="w-4 h-4" />
            {statusLabel}
          </span>
          {accessible && <span className="font-mono text-xs font-bold text-[#252B2F]">{percentage}%</span>}
          <ChevronRight className={`w-4 h-4 transition-all ${accessible ? 'text-[#8D99A8] group-hover:translate-x-0.5 group-hover:text-[#116EEE]' : 'text-[#AAB4C0]'}`} />
        </div>
      </div>
    </button>
  );
}

/* ---- Level module wrapper ---- */
function LevelSection({
  level,
  lessons,
  isAccessibleFn,
  activityEvidence,
  passedQuizzes,
  highlightFor,
  onSelect,
  onLockedClick,
}: {
  level: { key: string; title: string; from: number; to: number };
  lessons: LessonMeta[];
  isAccessibleFn: (n: number) => boolean;
  activityEvidence: Record<string, ActivityEvidence>;
  passedQuizzes: number[];
  highlightFor: (lesson: LessonMeta) => 'current' | 'next' | null;
  onSelect: (id: number) => void;
  onLockedClick: (l: LessonMeta) => void;
}) {
  if (lessons.length === 0) return null;
  const definitions = LESSON_PROGRESS_DEFINITIONS.filter((definition) =>
    lessons.some((lesson) => lesson.number === definition.lessonNumber)
  );
  const pct = getCourseProgressPercentage(definitions, activityEvidence, passedQuizzes);

  return (
    <section aria-label={`Уровень ${level.key} — ${level.title}`} className="mb-9">
      <div className="flex items-baseline justify-between gap-3 flex-wrap mb-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className={`px-2.5 py-1 rounded-md font-mono text-xs font-bold ${LEVEL_CHIP[level.key]}`}>
            {level.key}
          </span>
          <h2 className="text-lg md:text-xl font-bold text-[#252B2F] tracking-tight">{level.title}</h2>
          <span className="font-mono text-xs text-[#666E7E] whitespace-nowrap">
            уроки {level.from}–{level.to}
          </span>
        </div>
        <span className="text-sm text-[#666E7E] whitespace-nowrap">
          Прогресс уровня: <span className="font-bold text-[#3B1E90]">{pct}%</span>
        </span>
      </div>
      <div
        role="progressbar"
        aria-label={`Учебный прогресс уровня ${level.key}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        className="h-1.5 rounded-full bg-[#D6DEE6]/70 overflow-hidden mb-5"
      >
        <div className="h-full rounded-full bg-[#3B1E90] transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {lessons
          .slice()
          .sort((a, b) => a.number - b.number)
          .map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              accessible={isAccessibleFn(lesson.number)}
              progress={lessonProgress(lesson, activityEvidence, passedQuizzes)}
              highlight={highlightFor(lesson)}
              onSelect={onSelect}
              onLockedClick={onLockedClick}
            />
          ))}
      </div>
    </section>
  );
}

export const LessonList: React.FC<LessonListProps> = ({
  lessons,
  onSelectLesson,
  onOpenAdmin,
  isAdmin,
  onOpenUserModal,
  passedQuizzes = [],
  activityEvidence = {},
  dueReviewCount = 0,
}) => {
  const [user, setUser] = useState<UserProfile | null>(getCurrentUser());

  useEffect(() => {
    return subscribeUserState((u) => {
      setUser(u);
    });
  }, []);

  const isAccessibleFn = (lessonNumber: number) => isLessonAccessible(lessonNumber, user, isAdmin);

  const current = determineCurrentLesson(lessons, activityEvidence, passedQuizzes, isAccessibleFn);
  const currentNumber = current?.lesson.number ?? null;
  const currentStatus = current?.status ?? null;

  const highlightFor = (lesson: LessonMeta): 'current' | 'next' | null => {
    if (lesson.number !== currentNumber) return null;
    if (currentStatus === 'in_progress') return 'current';
    if (currentStatus === 'not_started') return 'next';
    return null;
  };

  const hasLockedLessons = lessons.some((l) => !isAccessibleFn(l.number));
  const showAuthBanner = !user && !isAdmin && hasLockedLessons;
  const showPayBanner = user && !isAdmin && !isAccessibleFn(FREE_LESSON_COUNT + 1);

  const currentCtaLabel =
    currentStatus === 'in_progress'
      ? 'Продолжить урок'
      : currentStatus === 'not_started'
        ? 'Начать урок'
        : 'Открыть урок';

  const currentEyebrow =
    currentStatus === 'in_progress'
      ? 'Ваш текущий урок'
      : currentStatus === 'completed'
        ? 'Все обязательные части выполнены'
        : currentStatus === 'not_started'
          ? 'Рекомендуемый урок'
          : 'Квиз этого урока пройден';

  return (
    <div className="min-h-screen bg-[#EDF4FB] text-[#252B2F] flex flex-col font-sans selection:bg-[#116EEE] selection:text-white">
      {/* Header */}
      <header className="border-b border-[#D6DEE6] bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div className="min-w-0">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-9 h-9 rounded-xl bg-[#116EEE] text-white flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <div className="leading-none">
                  <div className="font-black text-[#252B2F] tracking-tight text-lg">
                    Magyar<span className="text-[#116EEE]">o</span>
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#666E7E] mt-1">
                    Венгерский с нуля
                  </div>
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-[#252B2F] tracking-tight">
                Интерактивный курс венгерского языка
              </h1>
              <p className="mt-1.5 text-sm text-[#666E7E]">
                От алфавита A0 до разговорного B1 — 28 уроков в одном учебном пути.
              </p>
            </div>

            <div className="flex items-center gap-2.5 flex-wrap shrink-0">
              {onOpenUserModal && (
                <button
                  onClick={onOpenUserModal}
                  className="px-4 py-2.5 rounded-xl border border-[#116EEE]/30 bg-white text-[#116EEE] hover:bg-[#116EEE]/10 transition-colors cursor-pointer text-sm font-semibold inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#116EEE]"
                  title={user ? `Личный кабинет: ${user.email}` : 'Войти или зарегистрироваться'}
                >
                  <User className="w-4 h-4" />
                  {user ? `Кабинет (${user.email.split('@')[0]})` : 'Вход / Регистрация'}
                </button>
              )}

              {isAdmin && (
                <button
                  onClick={onOpenAdmin}
                  className="px-4 py-2.5 rounded-xl bg-[#3B1E90] text-white border border-[#3B1E90] cursor-pointer text-sm font-semibold inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B1E90]"
                  title="Вы вошли как администратор"
                >
                  <ShieldCheck className="w-4 h-4 text-[#C77B00]" />
                  Администратор
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main body */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-8">
        <section aria-label="Общий прогресс курса" className="rounded-2xl border border-[#D6DEE6] bg-white p-5 mb-4 shadow-sm">
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="font-semibold text-[#252B2F]">Общий прогресс курса</span>
            <span className="font-mono font-bold text-[#3B1E90]">{getCourseProgressPercentage(LESSON_PROGRESS_DEFINITIONS, activityEvidence, passedQuizzes)}%</span>
          </div>
          <div role="progressbar" aria-label="Общий учебный прогресс курса" aria-valuemin={0} aria-valuemax={100} aria-valuenow={getCourseProgressPercentage(LESSON_PROGRESS_DEFINITIONS, activityEvidence, passedQuizzes)} className="mt-3 h-2 rounded-full bg-[#D6DEE6]/70 overflow-hidden">
            <div className="h-full rounded-full bg-[#3B1E90] transition-all duration-500" style={{ width: `${getCourseProgressPercentage(LESSON_PROGRESS_DEFINITIONS, activityEvidence, passedQuizzes)}%` }} />
          </div>
        </section>
        {/* Continue learning + SRS review */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-4 mb-4">
          <section
            aria-labelledby="continue-heading"
            className="rounded-2xl border border-[#D6DEE6] bg-white p-6 md:p-7 shadow-sm"
          >
            <h2 id="continue-heading" className="sr-only">
              Продолжить обучение
            </h2>
            {current ? (
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`px-2.5 py-1 rounded-md font-mono text-xs font-bold ${LEVEL_CHIP[current.lesson.level]}`}>
                      {current.lesson.level}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#666E7E]">
                      {currentEyebrow}
                    </span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-[#252B2F] tracking-tight leading-snug">
                    Урок {current.lesson.number} · {shortTitle(current.lesson)}
                  </p>
                  <p className="mt-1 text-sm text-[#666E7E]">{current.lesson.subtitle}</p>
                  {currentStatus === 'completed' && hasLockedLessons && (
                    <p className="mt-1.5 text-xs text-[#666E7E]">
                      Все обязательные части доступных уроков выполнены — подписка откроет следующие уровни.
                    </p>
                  )}
                </div>
                <button
                  onClick={() => onSelectLesson(current.lesson.id)}
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#116EEE] text-white text-sm font-bold hover:bg-[#0D5ED0] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#116EEE]"
                >
                  {currentCtaLabel}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <p className="text-sm text-[#666E7E]">Уроки загружаются…</p>
            )}
          </section>

          {dueReviewCount > 0 && (
            <aside
              aria-label="Карточки к повторению"
              className="rounded-2xl border border-[#3B1E90]/25 bg-[#3B1E90]/8 p-5 flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 text-[#3B1E90]">
                <RefreshCw className="w-4 h-4 shrink-0" />
                <span className="font-bold text-sm">{dueReviewCount} карточек к повторению</span>
              </div>
              <p className="mt-1.5 text-xs text-[#2F236B]">
                Откройте пройденный урок, чтобы начать разминку.
              </p>
            </aside>
          )}
        </div>

        {showAuthBanner && (
          <div className="rounded-2xl border border-[#116EEE]/25 bg-white px-5 py-4 mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <User className="w-5 h-5 text-[#116EEE] shrink-0" />
            <span className="text-sm text-[#252B2F] flex-1">
              Уроки 1–2 доступны бесплатно. Войдите или зарегистрируйтесь, чтобы сохранять прогресс и оформить доступ к урокам 3–28.
            </span>
            <button
              onClick={onOpenUserModal}
              className="shrink-0 px-4 py-2 rounded-xl bg-[#116EEE] text-white hover:bg-[#0D5ED0] transition-colors cursor-pointer text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#116EEE]"
            >
              Войти / Зарегистрироваться
            </button>
          </div>
        )}

        {/* Subscription banner */}
        {showPayBanner && (
          <div className="rounded-2xl border border-[#C77B00]/30 bg-[#C77B00]/12 px-5 py-4 mb-4 flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-[#C77B00] shrink-0" />
            <span className="text-sm text-[#252B2F] flex-1">
              У вас открыты бесплатные уроки 1–2. Оформите подписку, чтобы открыть все {lessons.length} уроков.
            </span>
            <button
              onClick={onOpenUserModal}
              className="shrink-0 px-4 py-2 rounded-xl bg-[#116EEE] text-white hover:bg-[#0D5ED0] transition-colors cursor-pointer text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#116EEE]"
            >
              Оформить подписку
            </button>
          </div>
        )}

        {/* Curriculum modules */}
        {LEVELS.map((level) => (
          <LevelSection
            key={level.key}
            level={level}
            lessons={lessons.filter((l) => l.level === level.key)}
            isAccessibleFn={isAccessibleFn}
            activityEvidence={activityEvidence}
            passedQuizzes={passedQuizzes}
            highlightFor={highlightFor}
            onSelect={onSelectLesson}
            onLockedClick={() => onOpenUserModal?.()}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#D6DEE6] py-5 px-8 text-center text-sm text-[#666E7E] bg-[#FFFFFF]">
        Венгерский язык для русскоязычных учащихся · Уроки 1–28 (A0–B1)
      </footer>
    </div>
  );
};
