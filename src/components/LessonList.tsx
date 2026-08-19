import React, { useState, useEffect } from 'react';
import { Lesson } from '../types';
import {
  ArrowRight,
  ChevronRight,
  Circle,
  CircleDot,
  CheckCircle2,
  Volume2,
  ShieldCheck,
  User,
  Lock,
  CreditCard,
  RefreshCw,
  GraduationCap,
} from 'lucide-react';
import { getCurrentUser, subscribeUserState, UserProfile, isLessonAccessible } from '../utils/userStore';

interface LessonListProps {
  lessons: Lesson[];
  onSelectLesson: (lessonId: number) => void;
  onOpenAdmin: () => void;
  isAdmin: boolean;
  onOpenVoiceSettings: () => void;
  onOpenUserModal?: () => void;
  viewedSlideIds?: string[];
  passedQuizzes?: number[];
  dueReviewCount?: number;
}

/* ---- Lesson progress states ---- */
type LessonProgressStatus = 'not-started' | 'in-progress' | 'passed';

function lessonStatus(
  lessonNumber: number,
  viewedSlideIds: string[],
  passedQuizzes: number[]
): LessonProgressStatus {
  if (passedQuizzes.includes(lessonNumber)) return 'passed';
  const prefix = `l${lessonNumber}_`;
  if (viewedSlideIds.some((id) => id.startsWith(prefix))) return 'in-progress';
  return 'not-started';
}

/* ---- Curriculum level modules ---- */
const LEVELS = [
  { key: 'A0', title: 'Основы', from: 1, to: 6 },
  { key: 'A1', title: 'Грамматика и падежи', from: 7, to: 14 },
  { key: 'A2', title: 'Разговорные темы', from: 15, to: 20 },
  { key: 'B1', title: 'Продвинутый уровень', from: 21, to: 28 },
] as const;

const LEVEL_CHIP: Record<string, string> = {
  A0: 'bg-[#7A1E2B] text-white',
  A1: 'bg-[#2C5F58] text-white',
  A2: 'bg-[#B98A2B] text-white',
  B1: 'bg-[#57121C] text-white',
};

/** Strip the "Урок N · " prefix for a compact, scanable title. */
function shortTitle(lesson: Lesson): string {
  const stripped = lesson.title.replace(/^Урок\s+\d+\s*·\s*/i, '').trim();
  return stripped || lesson.title;
}

/* ---- "Continue learning" resolution — uses only existing progress ---- */
function determineCurrentLesson(
  lessons: Lesson[],
  viewedSlideIds: string[],
  passedQuizzes: number[],
  isAccessibleFn: (n: number) => boolean
): { lesson: Lesson; status: LessonProgressStatus } | null {
  const accessible = lessons
    .filter((l) => isAccessibleFn(l.number))
    .sort((a, b) => a.number - b.number);
  if (accessible.length === 0) return null;

  const inProgress = accessible.find(
    (l) =>
      !passedQuizzes.includes(l.number) &&
      viewedSlideIds.some((id) => id.startsWith(`l${l.number}_`))
  );
  if (inProgress) return { lesson: inProgress, status: 'in-progress' };

  const next = accessible.find((l) => !passedQuizzes.includes(l.number));
  if (next) return { lesson: next, status: 'not-started' };

  return { lesson: accessible[accessible.length - 1], status: 'passed' };
}

/* ---- Single lesson card ---- */
function LessonCard({
  lesson,
  accessible,
  status,
  highlight,
  onSelect,
  onLockedClick,
}: {
  lesson: Lesson;
  accessible: boolean;
  status: LessonProgressStatus;
  highlight: 'current' | 'next' | null;
  onSelect: (id: number) => void;
  onLockedClick: (lesson: Lesson) => void;
}) {
  const StatusIcon = !accessible
    ? Lock
    : status === 'passed'
      ? CheckCircle2
      : status === 'in-progress'
        ? CircleDot
        : Circle;

  const statusLabel = !accessible
    ? 'Доступ по подписке'
    : status === 'passed'
      ? 'Проверено'
      : status === 'in-progress'
        ? 'В процессе'
        : 'Начать';

  const statusColor = !accessible
    ? 'text-[#8A7A68]'
    : status === 'passed'
      ? 'text-[#2C5F58]'
      : status === 'in-progress'
        ? 'text-[#B98A2B]'
        : 'text-[#8A7A68]';

  const surface = !accessible
    ? 'bg-[#F6EFE4] border-[#E7D9C5] opacity-80'
    : highlight === 'current'
      ? 'bg-white border-[#7A1E2B] ring-1 ring-[#7A1E2B]/25 shadow-lg shadow-[#7A1E2B]/10'
      : highlight === 'next'
        ? 'bg-white border-[#B98A2B]/70 shadow-sm'
        : status === 'passed'
          ? 'bg-[#FBF7EF] border-[#E7D9C5] opacity-90'
          : 'bg-[#FBF7EF] border-[#E7D9C5]';

  const hover = accessible
    ? highlight === 'current'
      ? 'hover:shadow-xl hover:shadow-[#7A1E2B]/15'
      : status === 'passed'
        ? 'hover:border-[#E7D9C5]'
        : 'hover:border-[#7A1E2B]/40 hover:bg-white hover:shadow-md hover:-translate-y-0.5'
    : '';

  return (
    <button
      type="button"
      onClick={() => (accessible ? onSelect(lesson.id) : onLockedClick(lesson))}
      aria-current={highlight === 'current' ? 'step' : undefined}
      aria-label={`Урок ${lesson.number} — ${shortTitle(lesson)}${accessible ? '' : ', доступ по подписке'}`}
      className={`group relative text-left w-full h-full flex flex-col rounded-2xl border p-5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1E2B] ${surface} ${hover}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`font-mono text-[11px] font-bold tracking-wide ${accessible ? 'text-[#7A1E2B]' : 'text-[#8A7A68]'}`}>
          {lesson.level} · УРОК {lesson.number}
        </span>
        <span className="font-mono text-[11px] text-[#8A7A68]">{lesson.slidesCount} шагов</span>
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className={`text-base md:text-lg font-bold leading-snug line-clamp-2 transition-colors ${accessible ? 'text-[#231816] group-hover:text-[#7A1E2B]' : 'text-[#8A7A68]'}`}>
          {shortTitle(lesson)}
        </h3>
        {highlight === 'current' && (
          <span className="shrink-0 px-2 py-0.5 rounded-md bg-[#7A1E2B] text-white text-[10px] font-bold uppercase tracking-wide">
            Текущий
          </span>
        )}
        {highlight === 'next' && (
          <span className="shrink-0 px-2 py-0.5 rounded-md bg-[#B98A2B] text-white text-[10px] font-bold uppercase tracking-wide">
            Следующий
          </span>
        )}
      </div>

      <p className={`mt-1.5 text-sm leading-snug line-clamp-2 ${accessible ? 'text-[#6B5D52]' : 'text-[#8A7A68]'}`}>
        {lesson.subtitle}
      </p>

      <div className="mt-auto">
        <div className="mt-4 pt-3.5 border-t border-[#E7D9C5]/70 flex items-center justify-between">
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${statusColor}`}>
            <StatusIcon className="w-4 h-4" />
            {statusLabel}
          </span>
          <ChevronRight className={`w-4 h-4 transition-all ${accessible ? 'text-[#B5A68F] group-hover:translate-x-0.5 group-hover:text-[#7A1E2B]' : 'text-[#C9BCA5]'}`} />
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
  viewedSlideIds,
  passedQuizzes,
  highlightFor,
  onSelect,
  onLockedClick,
}: {
  level: { key: string; title: string; from: number; to: number };
  lessons: Lesson[];
  isAccessibleFn: (n: number) => boolean;
  viewedSlideIds: string[];
  passedQuizzes: number[];
  highlightFor: (lesson: Lesson) => 'current' | 'next' | null;
  onSelect: (id: number) => void;
  onLockedClick: (l: Lesson) => void;
}) {
  if (lessons.length === 0) return null;
  const total = level.to - level.from + 1;
  const passedCount = passedQuizzes.filter((n) => n >= level.from && n <= level.to).length;
  const pct = Math.min(100, Math.round((passedCount / total) * 100));

  return (
    <section aria-label={`Уровень ${level.key} — ${level.title}`} className="mb-9">
      <div className="flex items-baseline justify-between gap-3 flex-wrap mb-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className={`px-2.5 py-1 rounded-md font-mono text-xs font-bold ${LEVEL_CHIP[level.key]}`}>
            {level.key}
          </span>
          <h2 className="text-lg md:text-xl font-bold text-[#231816] tracking-tight">{level.title}</h2>
          <span className="font-mono text-xs text-[#8A7A68] whitespace-nowrap">
            уроки {level.from}–{level.to}
          </span>
        </div>
        <span className="text-sm text-[#6B5D52] whitespace-nowrap">
          <span className="font-bold text-[#2C5F58]">{passedCount}</span> / {total} проверено
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-[#E7D9C5]/70 overflow-hidden mb-5" aria-hidden="true">
        <div className="h-full rounded-full bg-[#2C5F58] transition-all duration-500" style={{ width: `${pct}%` }} />
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
              status={lessonStatus(lesson.number, viewedSlideIds, passedQuizzes)}
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
  onOpenVoiceSettings,
  onOpenUserModal,
  viewedSlideIds = [],
  passedQuizzes = [],
  dueReviewCount = 0,
}) => {
  const [user, setUser] = useState<UserProfile | null>(getCurrentUser());

  useEffect(() => {
    return subscribeUserState((u) => {
      setUser(u);
    });
  }, []);

  const isAccessibleFn = (lessonNumber: number) => isLessonAccessible(lessonNumber, user, isAdmin);

  const current = determineCurrentLesson(lessons, viewedSlideIds, passedQuizzes, isAccessibleFn);
  const currentNumber = current?.lesson.number ?? null;
  const currentStatus = current?.status ?? null;

  const highlightFor = (lesson: Lesson): 'current' | 'next' | null => {
    if (lesson.number !== currentNumber) return null;
    if (currentStatus === 'in-progress') return 'current';
    if (currentStatus === 'not-started') return 'next';
    return null;
  };

  const hasLockedLessons = lessons.some((l) => !isAccessibleFn(l.number));
  const showPayBanner = user && !isAdmin && user.subscriptionStatus !== 'active' && !user.isPrivileged;

  const currentCtaLabel =
    currentStatus === 'in-progress'
      ? 'Продолжить урок'
      : currentStatus === 'not-started'
        ? 'Начать урок'
        : 'Открыть урок';

  const currentEyebrow =
    currentStatus === 'in-progress'
      ? 'Ваш текущий урок'
      : currentStatus === 'not-started'
        ? 'Рекомендуемый урок'
        : 'Урок пройден';

  return (
    <div className="min-h-screen bg-[#F6EFE4] text-[#2A2320] flex flex-col font-sans selection:bg-[#7A1E2B] selection:text-white">
      {/* Header */}
      <header className="border-b border-[#E7D9C5] bg-[#FBF7EF]">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div className="min-w-0">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-9 h-9 rounded-xl bg-[#7A1E2B] text-white flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <div className="leading-none">
                  <div className="font-black text-[#231816] tracking-tight text-lg">
                    Magyar<span className="text-[#7A1E2B]">Kurzus</span>
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A7A68] mt-1">
                    HungaryLearn
                  </div>
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-[#231816] tracking-tight">
                Интерактивный курс венгерского языка
              </h1>
              <p className="mt-1.5 text-sm text-[#6B5D52]">
                От алфавита A0 до разговорного B1 — 28 уроков в одном учебном пути.
              </p>
            </div>

            <div className="flex items-center gap-2.5 flex-wrap shrink-0">
              {onOpenUserModal && (
                <button
                  onClick={onOpenUserModal}
                  className="px-4 py-2.5 rounded-xl border border-[#7A1E2B]/30 bg-white text-[#7A1E2B] hover:bg-[#7A1E2B]/10 transition-colors cursor-pointer text-sm font-semibold inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1E2B]"
                  title={user ? `Личный кабинет: ${user.email}` : 'Войти или зарегистрироваться'}
                >
                  <User className="w-4 h-4" />
                  {user ? `Кабинет (${user.email.split('@')[0]})` : 'Вход / Регистрация'}
                </button>
              )}

              <button
                onClick={onOpenVoiceSettings}
                className="px-4 py-2.5 rounded-xl border border-[#E7D9C5] bg-white text-[#57121C] hover:bg-[#F6EFE4] transition-colors cursor-pointer text-sm font-semibold inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1E2B]"
                title="Настройки голоса и диктора"
              >
                <Volume2 className="w-4 h-4 text-[#B98A2B]" />
                Настройки голоса
              </button>

              {isAdmin && (
                <button
                  onClick={onOpenAdmin}
                  className="px-4 py-2.5 rounded-xl bg-[#2C5F58] text-white border border-[#2C5F58] cursor-pointer text-sm font-semibold inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C5F58]"
                  title="Вы вошли как администратор"
                >
                  <ShieldCheck className="w-4 h-4 text-[#B98A2B]" />
                  Администратор
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main body */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-8">
        {/* Continue learning + SRS review */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-4 mb-4">
          <section
            aria-labelledby="continue-heading"
            className="rounded-2xl border border-[#E7D9C5] bg-white p-6 md:p-7 shadow-sm"
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
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#8A7A68]">
                      {currentEyebrow}
                    </span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-[#231816] tracking-tight leading-snug">
                    Урок {current.lesson.number} · {shortTitle(current.lesson)}
                  </p>
                  <p className="mt-1 text-sm text-[#6B5D52]">{current.lesson.subtitle}</p>
                  {currentStatus === 'passed' && hasLockedLessons && (
                    <p className="mt-1.5 text-xs text-[#8A7A68]">
                      Все доступные уроки пройдены — подписка откроет следующие уровни.
                    </p>
                  )}
                </div>
                <button
                  onClick={() => onSelectLesson(current.lesson.id)}
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#7A1E2B] text-white text-sm font-bold hover:bg-[#57121C] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1E2B]"
                >
                  {currentCtaLabel}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <p className="text-sm text-[#6B5D52]">Уроки загружаются…</p>
            )}
          </section>

          {dueReviewCount > 0 && (
            <aside
              aria-label="Карточки к повторению"
              className="rounded-2xl border border-[#2C5F58]/25 bg-[#2C5F58]/8 p-5 flex flex-col justify-center"
            >
              <div className="flex items-center gap-2 text-[#2C5F58]">
                <RefreshCw className="w-4 h-4 shrink-0" />
                <span className="font-bold text-sm">{dueReviewCount} карточек к повторению</span>
              </div>
              <p className="mt-1.5 text-xs text-[#1B4540]">
                Откройте пройденный урок, чтобы начать разминку.
              </p>
            </aside>
          )}
        </div>

        {/* Subscription banner */}
        {showPayBanner && (
          <div className="rounded-2xl border border-[#B98A2B]/30 bg-[#B98A2B]/12 px-5 py-4 mb-4 flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-[#B98A2B] shrink-0" />
            <span className="text-sm text-[#57121C] flex-1">
              У вас открыты бесплатные уроки 1–2. Оформите подписку, чтобы открыть все {lessons.length} уроков.
            </span>
            <button
              onClick={onOpenUserModal}
              className="shrink-0 px-4 py-2 rounded-xl bg-[#7A1E2B] text-white hover:bg-[#57121C] transition-colors cursor-pointer text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1E2B]"
            >
              Оплатить подписку
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
            viewedSlideIds={viewedSlideIds}
            passedQuizzes={passedQuizzes}
            highlightFor={highlightFor}
            onSelect={onSelectLesson}
            onLockedClick={() => onOpenUserModal?.()}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E7D9C5] py-5 px-8 text-center text-sm text-[#8A7A68] bg-[#FBF7EF]">
        Венгерский язык для русскоязычных учащихся · Уроки 1–28 (A0–B1)
      </footer>
    </div>
  );
};
