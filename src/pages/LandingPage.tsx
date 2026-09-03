import React, { useEffect, useRef, useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Headphones,
  Brain,
  Cloud,
  Play,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Menu,
  X,
  UserPlus,
  MousePointerClick,
  Check,
  Star,
  Loader2,
} from 'lucide-react';
import { getCurrentUser, isUserAuthReady, subscribeUserAuthReady, subscribeUserState } from '../utils/userStore';
import { UserAuthModal } from '../components/UserAuthModal';
import { AdminAccessModal } from '../components/AdminAccessModal';

/* ------------------------------------------------------------------ */
/*  Scroll-reveal helper — fade-in + slide-up when a section appears   */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#116EEE]/10 border border-[#116EEE]/15 text-[#116EEE] text-xs font-bold uppercase tracking-widest mb-5">
        <Sparkles className="w-3.5 h-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold text-[#252B2F] tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-[#666E7E] leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Header                                                            */
/* ------------------------------------------------------------------ */

interface HeaderProps {
  user: { email: string } | null;
  onLogin: () => void;
  onSignup: () => void;
  onStart: () => void;
}

function LandingHeader({ user, onLogin, onSignup, onStart }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Возможности' },
    { href: '#how', label: 'Как это работает' },
    { href: '#preview', label: 'Программа курса' },
    { href: '/pricing', label: 'Pricing' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F2F7FD]/90 backdrop-blur-md border-b border-[#D6DEE6]/70 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group shrink-0">
            <span className="w-9 h-9 rounded-[10px] bg-[#116EEE] text-white flex items-center justify-center shadow-sm transition-colors group-hover:bg-[#0D5ED0]">
              <GraduationCap className="w-5 h-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-extrabold text-[#252B2F] tracking-tight text-lg">
                Magyar<span className="text-[#116EEE]">o</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#666E7E] mt-0.5">
                венгерский с нуля
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#435064] hover:text-[#116EEE] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <button
                onClick={onStart}
                className="px-5 py-2.5 rounded-xl bg-[#116EEE] text-white text-sm font-semibold hover:bg-[#0D5ED0] transition-all shadow-sm cursor-pointer"
              >
                Продолжить обучение
              </button>
            ) : (
              <>
                <button
                  onClick={onLogin}
                  className="px-5 py-2.5 rounded-xl border border-[#D6DEE6] bg-white text-[#252B2F] text-sm font-semibold hover:border-[#116EEE]/40 hover:text-[#116EEE] transition-all cursor-pointer"
                >
                  Войти
                </button>
                <button
                  onClick={onSignup}
                  className="px-5 py-2.5 rounded-xl bg-[#116EEE] text-white text-sm font-semibold hover:bg-[#0D5ED0] transition-all shadow-sm cursor-pointer"
                >
                  Регистрация
                </button>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            className="md:hidden p-2 rounded-lg text-[#252B2F] hover:bg-[#116EEE]/10 transition-colors cursor-pointer"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-5 pt-1 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#435064] hover:bg-[#116EEE]/5 hover:text-[#116EEE] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              {user ? (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onStart();
                  }}
                  className="w-full px-5 py-3 rounded-xl bg-[#116EEE] text-white text-sm font-semibold hover:bg-[#0D5ED0] transition-colors cursor-pointer"
                >
                  Продолжить обучение
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onLogin();
                    }}
                    className="w-full px-5 py-3 rounded-xl border border-[#D6DEE6] bg-white text-[#252B2F] text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Войти
                  </button>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onSignup();
                    }}
                    className="w-full px-5 py-3 rounded-xl bg-[#116EEE] text-white text-sm font-semibold hover:bg-[#0D5ED0] transition-colors cursor-pointer"
                  >
                    Регистрация
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                              */
/* ------------------------------------------------------------------ */

function Hero({ onStart, user }: { onStart: () => void; user: { email: string } | null }) {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 w-[34rem] h-[34rem] rounded-full bg-[#116EEE]/8 blur-3xl" />
        <div className="absolute top-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-[#C77B00]/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[26rem] h-[26rem] rounded-full bg-[#3B1E90]/8 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-14 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* Left: copy */}
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D6DEE6] shadow-xs text-xs font-semibold text-[#252B2F] mb-7">
              <Star className="w-3.5 h-3.5 text-[#C77B00] fill-[#C77B00]" />
              28 уроков · уровни A0–B1 · для начинающих
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#252B2F] tracking-tight leading-[1.05]">
              Заговорите по-венгерски{' '}
              <span className="relative inline-block">
                <span className="relative z-10">с первых уроков</span>
                <span aria-hidden className="absolute left-0 right-0 bottom-1 h-3 bg-[#C77B00]/30 rounded-sm" />
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-[#666E7E] leading-relaxed max-w-xl">
              Интерактивные уроки с живой озвучкой носителя, встроенными
              тренажёрами слов и умной системой повторения. Изучайте
              грамматику, слушайте произношение и закрепляйте слова — в своём
              темпе, на любом устройстве.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onStart}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#116EEE] text-white text-base font-bold hover:bg-[#0D5ED0] hover:shadow-md transition-all cursor-pointer"
              >
                <Play className="w-5 h-5 fill-current" />
                {user ? 'Продолжить обучение' : 'Начать учиться'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#how"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-[#D6DEE6] bg-white text-[#252B2F] text-base font-semibold hover:border-[#116EEE]/40 hover:text-[#116EEE] transition-all cursor-pointer"
              >
                Как это работает
              </a>
            </div>

            {!user && (
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#666E7E]">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#3B1E90]" /> Уроки 1–2 бесплатно
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#3B1E90]" /> Без карты
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#3B1E90]" /> Отмена в любой момент
                </span>
              </div>
            )}
          </Reveal>

          {/* Right: platform UI preview */}
          <Reveal delay={150}>
            <HeroMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto max-w-lg lg:max-w-none">
      {/* soft glow behind the card */}
      <div aria-hidden className="absolute -inset-5 bg-[#116EEE]/7 blur-2xl rounded-2xl" />

      {/* Floating chips */}
      <div className="absolute -left-2 sm:-left-8 top-1/3 z-10">
        <div className="animate-float flex items-center gap-3 bg-white rounded-2xl shadow-sm border border-[#D6DEE6] px-4 py-3">
          <span className="w-9 h-9 rounded-xl bg-[#3B1E90]/10 text-[#3B1E90] flex items-center justify-center">
            <Headphones className="w-4.5 h-4.5" />
          </span>
          <div>
            <div className="text-xs font-bold text-[#252B2F] leading-none">Озвучка носителя</div>
            <div className="text-[10px] text-[#666E7E] mt-1">в каждом слайде</div>
          </div>
        </div>
      </div>

      <div className="absolute -right-2 sm:-right-6 bottom-16 z-10">
        <div className="animate-float [animation-delay:1.5s] flex items-center gap-3 bg-white rounded-2xl shadow-sm border border-[#D6DEE6] px-4 py-3">
          <span className="w-9 h-9 rounded-xl bg-[#116EEE]/10 text-[#116EEE] flex items-center justify-center">
            <BookOpen className="w-4.5 h-4.5" />
          </span>
          <div>
            <div className="text-xs font-bold text-[#252B2F] leading-none">28 уроков</div>
            <div className="text-[10px] text-[#666E7E] mt-1">780+ слов и фраз</div>
          </div>
        </div>
      </div>

      {/* Main lesson-preview card */}
      <div className="relative bg-white rounded-2xl border border-[#D6DEE6] shadow-sm overflow-hidden">
        {/* Compact lesson header */}
        <div className="px-5 pt-5 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#666E7E]">
              A0 · Урок 2
            </div>
            <div className="text-base font-bold text-[#252B2F] truncate mt-0.5">
              Приветствия и глагол «быть»
            </div>
          </div>
          <div className="flex gap-1 shrink-0" aria-hidden>
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full ${
                  i < 3 ? 'w-4 bg-[#116EEE]' : 'w-1.5 bg-[#D6DEE6]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="px-5 mt-3 flex items-center gap-2.5">
          <div className="h-1.5 flex-1 rounded-full bg-[#D6DEE6] overflow-hidden" aria-hidden>
            <div className="h-full w-2/3 rounded-full bg-[#116EEE]" />
          </div>
          <span className="font-mono text-[10px] font-bold text-[#666E7E]">6 / 9</span>
        </div>

        {/* Narration player concept */}
        <div className="mx-5 mt-4 rounded-2xl border border-[#D6DEE6] bg-[#FFFFFF] p-4 flex items-center gap-4">
          <button
            aria-label="Прослушать фразу"
            className="w-11 h-11 shrink-0 rounded-full bg-[#116EEE] text-white flex items-center justify-center shadow-lg shadow-[#116EEE]/30 transition-transform cursor-pointer"
          >
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </button>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#666E7E]">
              Озвучка
            </div>
            <div className="text-sm font-bold text-[#252B2F] mt-0.5 truncate">
              Jó napot! — Добрый день
            </div>
            <div className="flex items-end gap-0.5 h-5 mt-1.5" aria-hidden>
              {[10, 18, 14, 24, 16, 22, 12, 20].map((h, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full bg-[#3B1E90]"
                  style={{ height: `${h}px`, opacity: 0.9 - (i % 2) * 0.3 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* One educational activity */}
        <div className="mx-5 mt-4 rounded-2xl border border-[#D6DEE6] p-4 mb-5">
          <div className="text-xs font-bold text-[#252B2F] mb-3">
            Выберите перевод «Szia»
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Привет', correct: true },
              { label: 'Спасибо', correct: false },
              { label: 'До встречи', correct: false },
            ].map((opt) => (
              <span
                key={opt.label}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border cursor-default transition-colors ${
                  opt.correct
                    ? 'bg-[#3B1E90]/10 border-[#3B1E90]/40 text-[#2F236B]'
                    : 'bg-white border-[#D6DEE6] text-[#666E7E]'
                }`}
              >
                {opt.label}
                {opt.correct && <Check className="inline w-3.5 h-3.5 ml-1 -mt-0.5" />}
              </span>
            ))}
          </div>
          {/* Subtle evidence/progress cue */}
          <div className="mt-3 pt-3 border-t border-[#D6DEE6]/70 flex items-center justify-between text-[10px] text-[#666E7E]">
            <span>Ответ засчитан</span>
            <span className="inline-flex items-center gap-1 text-[#3B1E90] font-semibold">
              <Check className="w-3 h-3" /> прогресс сохранён
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Features                                                          */
/* ------------------------------------------------------------------ */

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Интерактивные уроки',
    text: 'Теория, живые примеры и тренажёры — в одном слайде. Читайте, слушайте и сразу проверяйте себя.',
    accent: 'text-[#116EEE] bg-[#116EEE]/10 border-[#116EEE]/15',
  },
  {
    icon: Headphones,
    title: 'Живая озвучка носителя',
    text: 'Произношение воспроизводится только из заранее записанных аудиофайлов диктора.',
    accent: 'text-[#3B1E90] bg-[#3B1E90]/10 border-[#3B1E90]/15',
  },
  {
    icon: Brain,
    title: 'Умное повторение',
    text: 'Интервальное повторение подскажет, какие слова пора освежить, — лексика закрепляется надолго.',
    accent: 'text-[#C77B00] bg-[#C77B00]/10 border-[#C77B00]/15',
  },
  {
    icon: Cloud,
    title: 'Прогресс в облаке',
    text: 'Уроки и карточки сохраняются на сервере. Продолжайте с любого устройства.',
    accent: 'text-[#666E7E] bg-[#666E7E]/10 border-[#666E7E]/15',
  },
];

function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Возможности"
            title={
              <>
                Всё, что нужно, чтобы{' '}
                <span className="text-[#116EEE]">заговорить</span>
              </>
            }
            subtitle="Платформа построена вокруг практики: минимум скучной теории, максимум озвучки, заданий и повторения."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {FEATURES.map((feature, idx) => (
            <Reveal key={feature.title} delay={idx * 100}>
              <div className="group h-full p-7 rounded-2xl bg-[#FFFFFF] border border-[#D6DEE6] hover:bg-white hover:border-[#116EEE]/25 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300">
                <div
                  className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 transition-transform ${feature.accent}`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#252B2F] tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#435064] leading-relaxed">{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  How it works                                                      */
/* ------------------------------------------------------------------ */

const STEPS = [
  {
    icon: UserPlus,
    step: 'Шаг 1',
    title: 'Начните бесплатно',
    text: 'Уроки 1–2 доступны без оплаты. Создайте аккаунт, чтобы сохранять прогресс и повторения.',
  },
  {
    icon: MousePointerClick,
    step: 'Шаг 2',
    title: 'Выберите урок',
    text: 'Начните с алфавита и базовых фраз или сразу переходите к интересующей теме — 28 уроков от A0 до B1.',
  },
  {
    icon: Sparkles,
    step: 'Шаг 3',
    title: 'Слушайте и повторяйте',
    text: 'Проходите слайды, повторяйте слова с озвучкой и проходите тесты. Система напомнит, что пора повторить.',
  },
];

function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Как это работает"
            title={
              <>
                Три шага до первого{' '}
                <span className="text-[#3B1E90]">разговора</span>
              </>
            }
            subtitle="Никакой сложной настройки. От первого визита до интерактивного урока — меньше минуты."
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {STEPS.map((step, idx) => (
            <Reveal key={step.title} delay={idx * 120}>
              <div className="relative h-full p-7 md:p-8 rounded-2xl bg-white border border-[#D6DEE6] hover:border-[#116EEE]/30 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#116EEE]/10 text-[#116EEE] flex items-center justify-center">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-sm font-bold text-[#C77B00]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#252B2F] tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#435064] leading-relaxed">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sneak peek — real lesson previews from LESSONS_META               */
/* ------------------------------------------------------------------ */

const PREVIEW_PATH = [
  { number: 1, hu: 'Üdvözöllek!', ru: 'Алфавит и базовые звуки' },
  { number: 2, hu: 'Köszönés & lenni', ru: 'Приветствия и глагол «быть»' },
  { number: 3, hu: 'Főnév, névelő, többes szám', ru: 'Артикли и множественное число' },
  { number: 4, hu: 'Jelen idő', ru: 'Настоящее время' },
  { number: 5, hu: 'Számok, idő, napok', ru: 'Числа, время, дни' },
  { number: 6, hu: 'A0 összefoglaló', ru: 'Повторение уровня A0' },
];

const NEXT_LEVELS = [
  { level: 'A1', count: 8 },
  { level: 'A2', count: 6 },
  { level: 'B1', count: 8 },
];

const NEXT_LEVEL_CHIP: Record<string, string> = {
  A1: 'bg-[#3B1E90]/10 text-[#3B1E90]',
  A2: 'bg-[#C77B00]/10 text-[#C77B00]',
  B1: 'bg-[#116EEE]/10 text-[#116EEE]',
};

function SneakPeek({ onStart }: { onStart: () => void }) {
  return (
    <section id="preview" className="scroll-mt-24 py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Программа курса"
            title={
              <>
                Один учебный путь —{' '}
                <span className="text-[#116EEE]">28 уроков</span>
              </>
            }
            subtitle="От звуков и алфавита до разговорного уровня B1. Вот как начинается ваш путь."
          />
        </Reveal>

        <Reveal>
          <div className="max-w-4xl mx-auto rounded-2xl bg-[#FFFFFF] border border-[#D6DEE6] overflow-hidden">
            {/* Path header */}
            <div className="flex items-center justify-between gap-3 px-6 md:px-8 py-5 border-b border-[#D6DEE6] bg-white/60">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-lg bg-[#116EEE] text-white text-[11px] font-bold">
                  A0 · Основы
                </span>
                <span className="text-sm text-[#666E7E]">Старт курса · 6 уроков</span>
              </div>
              <span className="font-mono text-xs text-[#666E7E] hidden sm:block">01–06</span>
            </div>

            {/* Lesson path rows */}
            <ol className="divide-y divide-[#D6DEE6]/70">
              {PREVIEW_PATH.map((row) => (
                <li
                  key={row.number}
                  className="flex items-center gap-4 px-6 md:px-8 py-3.5 hover:bg-white/70 transition-colors"
                >
                  <span className="w-8 h-8 shrink-0 rounded-lg bg-white border border-[#D6DEE6] font-mono text-xs font-bold text-[#116EEE] flex items-center justify-center">
                    {String(row.number).padStart(2, '0')}
                  </span>
                  <span className="font-bold text-[#252B2F]">{row.hu}</span>
                  <span className="ml-auto text-right text-xs text-[#666E7E] hidden sm:block">
                    {row.ru}
                  </span>
                </li>
              ))}
            </ol>

            {/* Footer / CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 md:px-8 py-5 border-t border-[#D6DEE6] bg-white/60">
              <div>
                <div className="text-sm font-semibold text-[#252B2F]">Дальше по программе</div>
                <div className="mt-1.5 flex gap-2 flex-wrap">
                  {NEXT_LEVELS.map((l) => (
                    <span
                      key={l.level}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${NEXT_LEVEL_CHIP[l.level]}`}
                    >
                      {l.level} · {l.count} уроков
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={onStart}
                className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#116EEE] text-white text-sm font-bold hover:bg-[#0D5ED0] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#116EEE]"
              >
                Посмотреть все 28 уроков
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Bottom CTA                                                        */
/* ------------------------------------------------------------------ */

function BottomCta({
  user,
  onStart,
  onSignup,
  onLogin,
}: {
  user: { email: string } | null;
  onStart: () => void;
  onSignup: () => void;
  onLogin: () => void;
}) {
  return (
    <section id="cta" className="scroll-mt-24 py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-[#3B1E90] bg-[#3B1E90] text-white px-6 py-12 md:px-16 md:py-16 text-center shadow-sm">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/8 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#C77B00]/15 blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight max-w-2xl mx-auto">
                {user ? 'Продолжите обучение прямо сейчас' : 'Готовы заговорить по-венгерски?'}
              </h2>

              <p className="mt-4 text-base md:text-lg text-[#D9E6FF] max-w-xl mx-auto leading-relaxed">
                {user
                  ? 'Ваш прогресс сохранён. Вернитесь к урокам и продолжайте там, где остановились.'
                  : 'Откройте бесплатные уроки 1–2 или создайте аккаунт, чтобы сохранять прогресс.'}
              </p>

              <div className="mt-8">
                <button
                  onClick={user ? onStart : onSignup}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-[#252B2F] text-base font-bold hover:bg-[#EDF4FB] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {user ? 'Продолжить обучение' : 'Создать аккаунт'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {!user && (
                <button
                  onClick={onLogin}
                  className="mt-4 text-sm text-[#D9E6FF] underline underline-offset-4 hover:text-white transition-colors cursor-pointer"
                >
                  Уже есть аккаунт — войти
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                            */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-[#D6DEE6] bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-[10px] bg-[#116EEE] text-white flex items-center justify-center shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </span>
              <span className="font-extrabold text-[#252B2F] tracking-tight text-lg">
                Magyar<span className="text-[#116EEE]">o</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-[#666E7E] leading-relaxed max-w-sm">
              Интерактивный курс венгерского языка для русскоязычных учащихся:
              фонетика, грамматика, живая озвучка и тренажёры в 28 уроках
              от A0 до B1.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#252B2F] mb-4">
              Навигация
            </h4>
            <ul className="space-y-2.5 text-sm text-[#666E7E]">
              <li><a href="#features" className="hover:text-[#116EEE] transition-colors">Возможности</a></li>
              <li><a href="#how" className="hover:text-[#116EEE] transition-colors">Как это работает</a></li>
              <li><a href="#preview" className="hover:text-[#116EEE] transition-colors">Программа курса</a></li>
              <li><a href="/pricing" className="hover:text-[#116EEE] transition-colors">Pricing</a></li>
              <li>
                <a
                  href="/lessons"
                  className="hover:text-[#116EEE] transition-colors"
                >
                  Уроки
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#252B2F] mb-4">
              Документы
            </h4>
            <ul className="space-y-2.5 text-sm text-[#666E7E]">
              <li><a href="/terms" className="hover:text-[#116EEE] transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-[#116EEE] transition-colors">Privacy Policy</a></li>
              <li><a href="/refund" className="hover:text-[#116EEE] transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#D6DEE6] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#666E7E]">
            © {new Date().getFullYear()} Magyaro. Все права защищены.
          </p>
          <p className="text-xs text-[#666E7E]">
            Сделано с <span className="text-[#116EEE]">♥</span> для изучающих венгерский
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Landing page                                                      */
/* ------------------------------------------------------------------ */

export default function LandingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<{ email: string } | null>(getCurrentUser());
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [authReady, setAuthReady] = useState(isUserAuthReady());
  const redirectAfterAuthRef = useRef(false);

  // Keep the auth state in sync and close the modal after a successful sign-in.
  // The user stays on the landing page and can navigate to /lessons themselves.
  useEffect(() => {
    const unsubscribe = subscribeUserState((u) => {
      setUser(u);
      if (u && redirectAfterAuthRef.current) {
        redirectAfterAuthRef.current = false;
        setAuthModalOpen(false);
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => subscribeUserAuthReady(setAuthReady), []);

  // Handle URL intent: ?admin=1, ?auth=login|register and ?payment=success.
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const state = location.state as { auth?: 'login' | 'register' } | null;

    if (params.get('admin') === '1') {
      setAdminModalOpen(true);
    }

    const auth = params.get('auth') || state?.auth;
    if (auth === 'login' || auth === 'register') {
      redirectAfterAuthRef.current = true;
      setAuthMode(auth);
      setAuthModalOpen(true);
    } else if (params.get('payment') === 'success') {
      setAuthModalOpen(true);
    }

    // Clear the URL intent so refresh / back button behave predictably.
    if (params.size > 0 || state?.auth) {
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  // Page title
  useEffect(() => {
    document.title = 'Magyaro — венгерский язык с нуля';
  }, []);

  const openAuth = (mode: 'login' | 'register') => {
    if (getCurrentUser()) {
      navigate('/lessons');
      return;
    }
    redirectAfterAuthRef.current = true;
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleStart = () => {
    navigate('/lessons');
  };

  if (!authReady) {
    return (
      <div className="min-h-screen bg-[#F2F7FD] text-[#252B2F] flex items-center justify-center p-4" role="status">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 animate-spin" />
          <span className="font-mono text-sm font-semibold">Восстановление сессии…</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F7FD] text-[#252B2F] font-sans scroll-smooth antialiased selection:bg-[#116EEE] selection:text-white">
      <LandingHeader
        user={user}
        onLogin={() => openAuth('login')}
        onSignup={() => openAuth('register')}
        onStart={handleStart}
      />

      <main>
        <Hero onStart={handleStart} user={user} />
        <Features />
        <HowItWorks />
        <SneakPeek onStart={handleStart} />
        <BottomCta
          user={user}
          onStart={handleStart}
          onSignup={() => openAuth('register')}
          onLogin={() => openAuth('login')}
        />
      </main>

      <Footer />

      {/* Auth + admin modals (reuse existing components) */}
      <UserAuthModal
        isOpen={authModalOpen}
        onClose={() => {
          redirectAfterAuthRef.current = false;
          setAuthModalOpen(false);
        }}
        initialMode={authMode}
      />
      <AdminAccessModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        onSuccess={() => navigate('/admin')}
      />
    </div>
  );
}

