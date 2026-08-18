import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lesson } from '../types';
import { BookOpen, ChevronRight, Volume2, ShieldCheck, User, Lock, CreditCard } from 'lucide-react';
import { getCurrentUser, subscribeUserState, UserProfile, isLessonAccessible } from '../utils/userStore';

interface LessonListProps {
  lessons: Lesson[];
  onSelectLesson: (lessonId: number) => void;
  onOpenAdmin: () => void;
  isAdmin: boolean;
  onOpenVoiceSettings: () => void;
  onOpenUserModal?: () => void;
}

/* ---- Accent colour schemes per level ---- */
interface Accent {
  textClass: string;
  hoverBorderClass: string;
  gradient: string;
  iconColor: string;
}

const ACCENTS: Record<string, Accent> = {
  A0: {
    textClass: 'text-[#7A1E2B]',
    hoverBorderClass: 'hover:border-[#7A1E2B]',
    gradient: 'bg-gradient-to-r from-[#7A1E2B] to-[#B98A2B]',
    iconColor: 'text-[#B98A2B]',
  },
  A1: {
    textClass: 'text-[#2C5F58]',
    hoverBorderClass: 'hover:border-[#2C5F58]',
    gradient: 'bg-gradient-to-r from-[#2C5F58] to-[#B98A2B]',
    iconColor: 'text-[#B98A2B]',
  },
  A2: {
    textClass: 'text-[#B98A2B]',
    hoverBorderClass: 'hover:border-[#B98A2B]',
    gradient: 'bg-gradient-to-r from-[#B98A2B] via-[#7A1E2B] to-[#2C5F58]',
    iconColor: 'text-[#B98A2B]',
  },
  B1: {
    textClass: 'text-[#7A1E2B]',
    hoverBorderClass: 'hover:border-[#7A1E2B]',
    gradient: 'bg-gradient-to-r from-[#7A1E2B] via-[#2C5F58] to-[#B98A2B]',
    iconColor: 'text-[#B98A2B]',
  },
};

/* ---- Single lesson card with lock support ---- */
function LessonCard({
  lesson,
  accessible,
  accent,
  onSelect,
  onLockedClick,
}: {
  lesson: Lesson;
  accessible: boolean;
  accent: Accent;
  onSelect: (id: number) => void;
  onLockedClick: (lesson: Lesson) => void;
}) {
  return (
    <motion.div
      whileHover={accessible ? { y: -4, transition: { duration: 0.2 } } : undefined}
      onClick={() => (accessible ? onSelect(lesson.id) : onLockedClick(lesson))}
      className={`bg-[#FBF7EF] border rounded-2xl p-6 shadow-md transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
        accessible
          ? `border-[#D9CBB0] ${accent.hoverBorderClass} hover:shadow-xl`
          : 'border-[#E2D8C4] opacity-70 hover:opacity-90 hover:border-[#B98A2B]/60'
      }`}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-1 transition-all ${accessible ? accent.gradient : 'bg-[#C9BCA5]'} ${
          accessible ? 'group-hover:h-1.5' : ''
        }`}
      />

      {!accessible && (
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#E5D7C3] text-[#8A7A68] flex items-center justify-center z-10">
          <Lock className="w-4 h-4" />
        </div>
      )}

      <div>
        <div className="flex items-center justify-between font-mono text-xs font-bold text-[#B98A2B] mb-2">
          <span>УРОК {lesson.number} · {lesson.level}</span>
          <span className="text-[11px] text-[#8A7A68] bg-[#EFE4D2] px-2 py-0.5 rounded-full">
            {lesson.slidesCount} слайдов
          </span>
        </div>

        <h3 className={`text-lg font-mono font-bold leading-snug transition-colors ${
          accessible ? `text-[#57121C] group-hover:${accent.textClass}` : 'text-[#8A7A68]'
        }`}>
          {lesson.title}
        </h3>

        <p className="text-xs font-medium text-[#8A7A68] mt-1 mb-3">
          {lesson.subtitle}
        </p>

        <p className="text-xs text-[#4A403A] line-clamp-3 leading-relaxed">
          {lesson.description}
        </p>
      </div>

      <div className={`mt-5 pt-4 border-t border-[#D9CBB0]/40 flex items-center justify-between text-xs font-mono font-bold ${
        accessible ? accent.textClass : 'text-[#B98A2B]'
      }`}>
        <span className="flex items-center gap-1.5">
          {accessible ? (
            <>
              <BookOpen className={`w-3.5 h-3.5 ${accent.iconColor}`} />
              Открыть слайды
            </>
          ) : (
            <>
              <Lock className="w-3.5 h-3.5" />
              Только для подписчиков
            </>
          )}
        </span>
        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}

/* ---- Section wrapper ---- */
function LevelSection({
  levelLabel,
  levelTitle,
  lessons,
  accent,
  isAccessibleFn,
  onSelect,
  onLockedClick,
}: {
  levelLabel: string;
  levelTitle: string;
  lessons: Lesson[];
  accent: Accent;
  isAccessibleFn: (n: number) => boolean;
  onSelect: (id: number) => void;
  onLockedClick: (l: Lesson) => void;
}) {
  if (lessons.length === 0) return null;
  return (
    <section>
      <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-[#7A1E2B]/20">
        <div className="px-3 py-1 bg-[#7A1E2B] text-white rounded-md font-mono font-bold text-xs uppercase tracking-wider">
          {levelLabel}
        </div>
        <h2 className="text-xl md:text-2xl font-mono font-bold text-[#57121C]">
          {levelTitle}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            accessible={isAccessibleFn(lesson.number)}
            accent={accent}
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
}) => {
  const [user, setUser] = useState<UserProfile | null>(getCurrentUser());

  useEffect(() => {
    const unsubscribe = subscribeUserState((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const isAccessibleFn = (lessonNumber: number) => isLessonAccessible(lessonNumber, user, isAdmin);

  const handleLockedClick = () => {
    onOpenUserModal?.();
  };

  const a0Lessons = lessons.filter((l) => l.level === 'A0');
  const a1Lessons = lessons.filter((l) => l.level === 'A1');
  const a2Lessons = lessons.filter((l) => l.level === 'A2');
  const b1Lessons = lessons.filter((l) => l.level === 'B1');

  const showPayBanner = user && !isAdmin && user.subscriptionStatus !== 'active' && !user.isPrivileged;

  return (
    <div className="min-h-screen bg-[#F6EFE4] text-[#2A2320] flex flex-col font-sans selection:bg-[#7A1E2B] selection:text-white">
      {/* Top Banner & Header */}
      <header className="border-b border-[#D9CBB0] bg-[#FBF7EF] px-4 md:px-8 py-5 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-3 h-3 rounded-full bg-[#7A1E2B]" />
              <span className="font-mono text-xs md:text-sm font-bold tracking-widest text-[#7A1E2B] uppercase">
                ВЕНГЕРСКИЙ ЯЗЫК С НУЛЯ · MAGYAR TANULÁS
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-mono font-bold text-[#57121C] tracking-tight">
              Интерактивный Курс Венгерского Языка
            </h1>
            <p className="text-sm md:text-base text-[#8A7A68] font-medium mt-1">
              Выберите урок для изучения грамматики, фонетики и интерактивной озвучки слов
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap self-end sm:self-center">
            {onOpenUserModal && (
              <button
                onClick={onOpenUserModal}
                className="px-3.5 py-1.5 rounded-lg border border-[#7A1E2B]/30 bg-white text-[#7A1E2B] hover:bg-[#7A1E2B]/10 transition-colors cursor-pointer text-xs font-mono font-semibold flex items-center gap-1.5 shadow-xs"
                title={user ? `Личный кабинет: ${user.email}` : "Войти или зарегистрироваться"}
              >
                <User className="w-4 h-4 text-[#7A1E2B]" />
                <span>{user ? `Кабинет (${user.email.split('@')[0]})` : 'Вход / Регистрация'}</span>
              </button>
            )}

            <button
              onClick={onOpenVoiceSettings}
              className="px-3 py-1.5 rounded-lg border border-[#D9CBB0] bg-white text-[#57121C] hover:bg-[#F6EFE4] transition-colors cursor-pointer text-xs font-mono font-medium flex items-center gap-1.5 shadow-xs"
              title="Настройки голоса и диктора"
            >
              <Volume2 className="w-4 h-4 text-[#B98A2B]" />
              <span>Настройки голоса</span>
            </button>

            {isAdmin && (
              <button
                onClick={onOpenAdmin}
                className="px-3 py-1.5 rounded-lg border text-xs font-mono font-medium flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs bg-[#2C5F58] text-white border-[#2C5F58]"
                title="Вы вошли как администратор"
              >
                <ShieldCheck className="w-4 h-4 text-[#B98A2B]" />
                <span>Администратор (Активен)</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Locked Banner */}
      {showPayBanner && (
        <div className="bg-[#B98A2B]/15 border-b border-[#B98A2B]/30 px-4 md:px-8 py-3">
          <div className="max-w-6xl mx-auto flex items-center gap-3 text-sm text-[#57121C]">
            <CreditCard className="w-4 h-4 text-[#B98A2B] shrink-0" />
            <span>
              У вас открыты бесплатные уроки 1–2. Оформите подписку, чтобы открыть все {lessons.length} уроков.
            </span>
            <button
              onClick={onOpenUserModal}
              className="ml-auto shrink-0 px-3 py-1.5 rounded-lg bg-[#7A1E2B] text-white hover:bg-[#57121C] transition-colors cursor-pointer text-xs font-mono font-semibold"
            >
              Оплатить подписку
            </button>
          </div>
        </div>
      )}

      {/* Main Body Grid */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-8 space-y-10">
        <LevelSection
          levelLabel="Уровень A0"
          levelTitle="Фонетика, основы и глаголы (Уроки 1 – 6)"
          lessons={a0Lessons}
          accent={ACCENTS.A0}
          isAccessibleFn={isAccessibleFn}
          onSelect={onSelectLesson}
          onLockedClick={handleLockedClick}
        />

        <LevelSection
          levelLabel="Уровень A1"
          levelTitle="Падежная система, время и грамматика (Уроки 7 – 13)"
          lessons={a1Lessons}
          accent={ACCENTS.A1}
          isAccessibleFn={isAccessibleFn}
          onSelect={onSelectLesson}
          onLockedClick={handleLockedClick}
        />

        <LevelSection
          levelLabel="Уровень A2"
          levelTitle="Будущее время, еда, покупки и модальность (Уроки 14 – 20)"
          lessons={a2Lessons}
          accent={ACCENTS.A2}
          isAccessibleFn={isAccessibleFn}
          onSelect={onSelectLesson}
          onLockedClick={handleLockedClick}
        />

        <LevelSection
          levelLabel="Уровень B1"
          levelTitle="Разговорный уровень, наклонения и идиомы (Уроки 21 – 28)"
          lessons={b1Lessons}
          accent={ACCENTS.B1}
          isAccessibleFn={isAccessibleFn}
          onSelect={onSelectLesson}
          onLockedClick={handleLockedClick}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#D9CBB0] py-4 px-8 text-center text-xs font-mono text-[#8A7A68] bg-[#FBF7EF]">
        Венгерский язык для русскоязычных учащихся · Уроки 1–28 (A0–B1) · Интерактивная веб-платформа
      </footer>
    </div>
  );
};
