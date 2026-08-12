import { Link } from 'react-router-dom';
import {
  Users,
  CreditCard,
  BookOpen,
  Eye,
  UserPlus,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';
import { useAdminData } from '../../admin/AdminDataContext';
import { PageHeader, Pill } from '../../components/admin/AdminUi';

const ROLE_TONE: Record<string, 'gray' | 'indigo' | 'amber'> = {
  student: 'gray',
  admin: 'indigo',
  editor: 'amber',
};

export default function AdminDashboard() {
  const { users, lessons } = useAdminData();

  const stats = [
    {
      label: 'Всего пользователей',
      value: users.length,
      icon: Users,
      accent: 'bg-indigo-50 text-indigo-600',
      delta: `${users.filter((u) => u.status === 'active').length} активных`,
    },
    {
      label: 'Активные подписки',
      value: users.filter((u) => u.subscription === 'active').length,
      icon: CreditCard,
      accent: 'bg-emerald-50 text-emerald-600',
      delta: 'оплачено через Stripe',
    },
    {
      label: 'Всего уроков',
      value: lessons.length,
      icon: BookOpen,
      accent: 'bg-amber-50 text-amber-600',
      delta: `${lessons.reduce((s, l) => s + l.slidesCount, 0)} слайдов`,
    },
    {
      label: 'Опубликовано',
      value: lessons.filter((l) => l.status === 'published').length,
      icon: Eye,
      accent: 'bg-rose-50 text-rose-600',
      delta: `${lessons.filter((l) => l.status === 'draft').length} в черновиках`,
    },
  ];

  const recentUsers = [...users]
    .sort((a, b) => b.registeredAt.localeCompare(a.registeredAt))
    .slice(0, 5);

  const recentLessons = [...lessons]
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 5);

  const fmtDate = (iso: string) => new Date(iso).toLocaleDateString('ru-RU');

  return (
    <div>
      <PageHeader
        title="Обзор платформы"
        subtitle="Сводная статистика и последние изменения"
        action={
          <Link
            to="/admin/users"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-sm font-semibold text-white hover:bg-indigo-700 transition-all shadow-sm cursor-pointer"
          >
            <UserPlus className="w-4 h-4" />
            Пользователи
          </Link>
        }
      />

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex items-start gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${stat.accent}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-2xl font-bold text-gray-900 leading-none">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-gray-600 truncate">{stat.label}</div>
              <div className="mt-0.5 text-xs text-gray-400">{stat.delta}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent users */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
            <h2 className="text-sm font-bold text-gray-900">Последние регистрации</h2>
            <Link
              to="/admin/users"
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Все пользователи
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <ul className="divide-y divide-gray-100">
            {recentUsers.map((user) => (
              <li key={user.id} className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-[11px] font-bold shrink-0">
                  {user.name.split(' ').map((p) => p[0]).slice(0, 2).join('')}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-gray-900 truncate">{user.name}</div>
                  <div className="text-xs text-gray-500 truncate">{user.email}</div>
                </div>
                <div className="hidden sm:block">
                  <Pill tone={ROLE_TONE[user.role]}>{user.role}</Pill>
                </div>
                <div className="text-xs text-gray-400 whitespace-nowrap">{fmtDate(user.registeredAt)}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent lessons */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
            <h2 className="text-sm font-bold text-gray-900">Недавно обновлённые уроки</h2>
            <Link
              to="/admin/lessons"
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Все уроки
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <ul className="divide-y divide-gray-100">
            {recentLessons.map((lesson) => (
              <li key={lesson.id} className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-gray-900 truncate">{lesson.title}</div>
                  <div className="text-xs text-gray-500">
                    {lesson.module} · {lesson.level} · {lesson.slidesCount} сл.
                  </div>
                </div>
                <Pill tone={lesson.status === 'published' ? 'green' : 'slate'}>
                  {lesson.status === 'published' ? 'Опубликован' : 'Черновик'}
                </Pill>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
