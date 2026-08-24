import { useMemo, useState } from 'react';
import { BookOpen, Eye, Loader2, RefreshCw, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAdminData } from '../../admin/AdminDataContext';
import { PageHeader, Pill, SecondaryButton } from '../../components/admin/AdminUi';

export default function AdminLessons() {
  const { lessons, loading, error, refresh } = useAdminData();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return query
      ? lessons.filter((lesson) => `${lesson.title} ${lesson.level}`.toLowerCase().includes(query))
      : lessons;
  }, [lessons, search]);

  return (
    <div>
      <PageHeader
        title="Уроки курса"
        subtitle={`${lessons.length} version-controlled уроков`}
        action={
          <SecondaryButton onClick={() => void refresh()} disabled={loading}>
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} /> Обновить
          </SecondaryButton>
        }
      />

      <div className="mb-5 rounded-xl border border-amber-200 bg-amber-50 p-3.5 text-xs leading-relaxed text-amber-900/80">
        Каталог доступен только для просмотра. Содержимое уроков хранится в проверяемых TypeScript-модулях и публикуется вместе с приложением; прежние кнопки создавали несохраняемые копии только в памяти браузера.
      </div>
      {error && <div role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</div>}

      <div className="relative mb-5 max-w-md">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 w-4 -translate-y-1/2 text-gray-400" />
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Поиск по названию или уровню..." className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30" />
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {loading ? (
          <div className="flex items-center justify-center gap-2 p-10 text-sm text-gray-500"><Loader2 className="w-4 animate-spin" /> Загрузка каталога…</div>
        ) : filtered.length === 0 ? (
          <div className="p-10 text-center text-sm text-gray-500">Уроки не найдены.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead className="border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-wider text-gray-500"><tr><th className="px-5 py-3">Урок</th><th className="px-5 py-3">Уровень</th><th className="px-5 py-3">Слайдов</th><th className="px-5 py-3 text-right">Просмотр</th></tr></thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((lesson) => (
                  <tr key={lesson.id} className="hover:bg-gray-50/80">
                    <td className="px-5 py-3.5"><div className="flex items-start gap-3"><span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600"><BookOpen className="w-4" /></span><div><div className="text-sm font-medium text-gray-900">{lesson.title}</div><div className="mt-0.5 line-clamp-1 text-xs text-gray-500">{lesson.description}</div></div></div></td>
                    <td className="px-5 py-3.5"><Pill tone="slate">{lesson.level}</Pill></td>
                    <td className="px-5 py-3.5 text-sm text-gray-600">{lesson.slidesCount}</td>
                    <td className="px-5 py-3.5 text-right"><button type="button" onClick={() => navigate(`/lesson/${lesson.number}`)} className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-50"><Eye className="w-3.5" /> Открыть</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
