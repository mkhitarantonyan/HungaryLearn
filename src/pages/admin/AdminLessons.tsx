import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil, Trash2, Search, PlusCircle, BookOpen, Link2, Eye, FileText, Mic } from 'lucide-react';
import { useAdminData } from '../../admin/AdminDataContext';
import {
  LEVEL_MODULES,
  type AdminLesson,
  type AdminLessonStatus,
  type LessonLevel,
} from '../../admin/mockData';
import {
  ConfirmDialog,
  Field,
  Modal,
  PageHeader,
  Pill,
  PrimaryButton,
  SecondaryButton,
  Select,
  TextArea,
  TextInput,
} from '../../components/admin/AdminUi';

const LEVEL_TONE: Record<LessonLevel, 'red' | 'green' | 'amber' | 'indigo'> = {
  A0: 'red',
  A1: 'green',
  A2: 'amber',
  B1: 'indigo',
};

interface LessonFormValues {
  title: string;
  level: LessonLevel;
  status: AdminLessonStatus;
  slidesCount: number;
  description: string;
  videoUrl?: string;
}

function LessonFormModal({
  initial,
  onClose,
  onSave,
}: {
  initial: AdminLesson | null;
  onClose: () => void;
  onSave: (values: LessonFormValues) => void;
}) {
  const isEdit = initial !== null;
  const [title, setTitle] = useState(initial?.title ?? '');
  const [level, setLevel] = useState<LessonLevel>(initial?.level ?? 'A0');
  const [status, setStatus] = useState<AdminLessonStatus>(initial?.status ?? 'draft');
  const [slidesCount, setSlidesCount] = useState(initial?.slidesCount ?? 10);
  const [description, setDescription] = useState(initial?.description ?? '');
  const [videoUrl, setVideoUrl] = useState(initial?.videoUrl ?? '');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (title.trim().length < 3) {
      nextErrors.title = 'Название урока должно содержать минимум 3 символа.';
    }
    if (description.trim().length < 10) {
      nextErrors.description = 'Описание должно содержать минимум 10 символов.';
    }
    const count = Number(slidesCount);
    if (!Number.isFinite(count) || count < 1 || count > 200) {
      nextErrors.slidesCount = 'Укажите количество слайдов от 1 до 200.';
    }
    if (videoUrl.trim() && !/^https?:\/\/\S+$/i.test(videoUrl.trim())) {
      nextErrors.videoUrl = 'Видео-ссылка должна начинаться с http(s)://';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    onSave({
      title: title.trim(),
      level,
      status,
      slidesCount: count,
      description: description.trim(),
      videoUrl: videoUrl.trim() || undefined,
    });
  };

  return (
    <Modal
      title={isEdit ? 'Редактировать урок' : 'Создать новый урок'}
      subtitle={isEdit ? `ID: ${initial!.id} · обновлено ${new Date(initial!.updatedAt).toLocaleDateString('ru-RU')}` : 'Новый урок появится в каталоге курса'}
      onClose={onClose}
      size="lg"
      footer={
        <>
          <SecondaryButton onClick={onClose}>Отмена</SecondaryButton>
          <PrimaryButton type="submit" form="lesson-form">
            {isEdit ? 'Сохранить изменения' : 'Создать урок'}
          </PrimaryButton>
        </>
      }
    >
      <form id="lesson-form" onSubmit={handleSubmit} className="space-y-4">
        <Field label="Название урока" required error={errors.title}>
          <TextInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Например: Урок 29 · Сослагательное наклонение"
            autoFocus
          />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Field label="Модуль / Уровень" required>
            <Select value={level} onChange={(e) => setLevel(e.target.value as LessonLevel)}>
              {(Object.keys(LEVEL_MODULES) as LessonLevel[]).map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl} — {LEVEL_MODULES[lvl]}
                </option>
              ))}
            </Select>
          </Field>

          <Field label="Статус" required>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value as AdminLessonStatus)}
            >
              <option value="draft">Черновик</option>
              <option value="published">Опубликован</option>
            </Select>
          </Field>

          <Field label="Слайдов" required error={errors.slidesCount}>
            <TextInput
              type="number"
              min={1}
              max={200}
              value={slidesCount}
              onChange={(e) => setSlidesCount(Number(e.target.value))}
            />
          </Field>
        </div>

        <Field label="Описание" required error={errors.description}>
          <TextArea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Краткое описание содержания урока, которое увидит ученик на карточке урока."
          />
        </Field>

        <Field
          label="Видео-ссылка (URL)"
          error={errors.videoUrl}
          hint="Необязательно. Например, ссылка на видео-разбор урока."
        >
          <div className="relative">
            <Link2 className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://..."
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors"
            />
          </div>
        </Field>
      </form>
    </Modal>
  );
}

export default function AdminLessons() {
  const { lessons, addLesson, updateLesson, deleteLesson } = useAdminData();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingLesson, setEditingLesson] = useState<AdminLesson | null>(null);
  const [deletingLesson, setDeletingLesson] = useState<AdminLesson | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return lessons;
    return lessons.filter(
      (l) =>
        `${l.title} ${l.module} ${l.level}`.toLowerCase().includes(q)
    );
  }, [lessons, search]);

  const handleSave = (values: LessonFormValues) => {
    const payload = { ...values, module: LEVEL_MODULES[values.level] };
    if (editingLesson) {
      updateLesson(editingLesson.id, payload);
    } else {
      addLesson(payload);
    }
    setModalOpen(false);
    setEditingLesson(null);
  };

  const handleEdit = (lesson: AdminLesson) => {
    setEditingLesson(lesson);
    setModalOpen(true);
  };

  const handleCreate = () => {
    setEditingLesson(null);
    setModalOpen(true);
  };

  const handleDelete = () => {
    if (deletingLesson) {
      deleteLesson(deletingLesson.id);
      setDeletingLesson(null);
    }
  };

  const fmtDate = (iso: string) => new Date(iso).toLocaleDateString('ru-RU');

  return (
    <div>
      <PageHeader
        title="Уроки курса"
        subtitle={`${lessons.length} уроков · ${lessons.filter((l) => l.status === 'published').length} опубликовано`}
        action={
          <PrimaryButton onClick={handleCreate}>
            <PlusCircle className="w-4 h-4" />
            Создать новый урок
          </PrimaryButton>
        }
      />

      {/* Search */}
      <div className="relative mb-5 max-w-md">
        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск по названию, модулю или уровню..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors"
        />
      </div>

      {/* Lessons table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Урок
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Модуль
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Статус
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Создан
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 text-right">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((lesson) => (
                <tr key={lesson.id} className="group hover:bg-gray-50/80 transition-colors">
                  <td className="px-5 py-3.5 max-w-md">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-gray-900 leading-snug">
                          {lesson.title}
                        </div>
                        <div className="mt-0.5 text-xs text-gray-500 line-clamp-1">
                          {lesson.description}
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-[11px] text-gray-400">
                          <span>{lesson.slidesCount} слайдов</span>
                          <span className="inline-flex items-center gap-1">
                            <FileText className="w-3 h-3" /> контент
                          </span>
                          {lesson.videoUrl && (
                            <span className="inline-flex items-center gap-1">
                              <Eye className="w-3 h-3" /> видео
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <Pill tone={LEVEL_TONE[lesson.level]}>{lesson.level}</Pill>
                    <div className="mt-1 text-xs text-gray-500">{lesson.module}</div>
                  </td>
                  <td className="px-5 py-3.5">
                    <Pill tone={lesson.status === 'published' ? 'green' : 'slate'}>
                      {lesson.status === 'published' ? 'Опубликован' : 'Черновик'}
                    </Pill>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-gray-600 whitespace-nowrap">
                    {fmtDate(lesson.createdAt)}
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center justify-end gap-1.5">
                      {(() => {
                        const m = lesson.id.match(/^lesson-(\d+)$/);
                        const num = m ? Number(m[1]) : 0;
                        return num > 0 ? (
                          <button
                            onClick={() => navigate(`/admin/audio?tab=slides&lesson=${num}`)}
                            title="Озвучка слайдов"
                            className="p-2 rounded-lg text-gray-500 hover:bg-amber-50 hover:text-amber-600 transition-colors cursor-pointer"
                          >
                            <Mic className="w-4 h-4" />
                          </button>
                        ) : null;
                      })()}
                      <button
                        onClick={() => handleEdit(lesson)}
                        title="Редактировать"
                        className="p-2 rounded-lg text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setDeletingLesson(lesson)}
                        title="Удалить"
                        className="p-2 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-12 text-center">
                    <div className="text-sm text-gray-500 font-medium">
                      {search ? `Ничего не найдено по запросу «${search}»` : 'Уроки не найдены'}
                    </div>
                    {search && (
                      <button
                        onClick={() => setSearch('')}
                        className="mt-2 text-xs font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                      >
                        Сбросить поиск
                      </button>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      {modalOpen && (
        <LessonFormModal
          initial={editingLesson}
          onClose={() => {
            setModalOpen(false);
            setEditingLesson(null);
          }}
          onSave={handleSave}
        />
      )}

      <ConfirmDialog
        open={deletingLesson !== null}
        title="Удалить урок?"
        message={
          <>
            Урок <strong>{deletingLesson?.title}</strong> будет безвозвратно удалён из каталога
            курса. Ученики потеряют к нему доступ. Это действие нельзя отменить.
          </>
        }
        confirmLabel="Удалить урок"
        onConfirm={handleDelete}
        onCancel={() => setDeletingLesson(null)}
      />
    </div>
  );
}
