import { useMemo, useState, useEffect } from 'react';
import {
  Pencil,
  Trash2,
  PlusCircle,
  Search,
  BookOpen,
  Languages,
  Download,
  Upload,
} from 'lucide-react';
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
import { LESSONS_META } from '../../data/lessons';
import { LESSON_VOCABULARY_MAP, LESSON_TRANSLATION_MAP } from '../../utils/lessonQuizAndVocab';
import type { VocabularyItem, TranslationItem } from '../../types';

/* ------------------------------------------------------------------ */
/*  Local storage helpers — persist edits across sessions              */
/* ------------------------------------------------------------------ */

const STORAGE_KEY_VOCAB = 'admin_content_vocab_overrides';
const STORAGE_KEY_TRANS = 'admin_content_trans_overrides';

type VocabOverrides = Record<number, VocabularyItem[]>;
type TransOverrides = Record<number, TranslationItem[]>;

function loadOverrides<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function saveOverrides<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    /* ignore quota errors */
  }
}

/* ------------------------------------------------------------------ */
/*  Vocabulary edit modal                                              */
/* ------------------------------------------------------------------ */

interface VocabFormValues {
  hu: string;
  ru: string;
  phonetic: string;
  category: string;
  exampleSentence: string;
  baseWord: string;
  grammaticalTag: string;
  relatedLessonId: string;
}

function VocabFormModal({
  initial,
  lessonNumber,
  onClose,
  onSave,
}: {
  initial: VocabularyItem | null;
  lessonNumber: number;
  onClose: () => void;
  onSave: (values: VocabFormValues) => void;
}) {
  const isEdit = initial !== null;
  const [hu, setHu] = useState(initial?.hu ?? '');
  const [ru, setRu] = useState(initial?.ru ?? '');
  const [phonetic, setPhonetic] = useState(initial?.phonetic ?? '');
  const [category, setCategory] = useState(initial?.category ?? '');
  const [exampleSentence, setExampleSentence] = useState(initial?.exampleSentence ?? '');
  const [baseWord, setBaseWord] = useState(initial?.baseWord ?? '');
  const [grammaticalTag, setGrammaticalTag] = useState(initial?.grammaticalTag ?? '');
  const [relatedLessonId, setRelatedLessonId] = useState(
    initial?.relatedLessonId?.toString() ?? ''
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (hu.trim().length < 1) nextErrors.hu = 'Введите венгерское слово.';
    if (ru.trim().length < 1) nextErrors.ru = 'Введите перевод.';
    if (category.trim().length < 1) nextErrors.category = 'Введите категорию.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    onSave({
      hu: hu.trim(),
      ru: ru.trim(),
      phonetic: phonetic.trim(),
      category: category.trim(),
      exampleSentence: exampleSentence.trim(),
      baseWord: baseWord.trim(),
      grammaticalTag: grammaticalTag.trim(),
      relatedLessonId: relatedLessonId.trim(),
    });
  };

  return (
    <Modal
      title={isEdit ? 'Редактировать слово' : 'Добавить слово'}
      subtitle={`Урок ${lessonNumber}`}
      onClose={onClose}
      size="lg"
      footer={
        <>
          <SecondaryButton onClick={onClose}>Отмена</SecondaryButton>
          <PrimaryButton type="submit" form="vocab-form">
            {isEdit ? 'Сохранить' : 'Добавить'}
          </PrimaryButton>
        </>
      }
    >
      <form id="vocab-form" onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Венгерское слово" required error={errors.hu}>
            <TextInput value={hu} onChange={(e) => setHu(e.target.value)} placeholder="pl. ház" autoFocus />
          </Field>
          <Field label="Перевод" required error={errors.ru}>
            <TextInput value={ru} onChange={(e) => setRu(e.target.value)} placeholder="дом" />
          </Field>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Транскрипция" hint="Кириллицей, необязательно">
            <TextInput value={phonetic} onChange={(e) => setPhonetic(e.target.value)} placeholder="[ха̄з]" />
          </Field>
          <Field label="Категория" required error={errors.category}>
            <TextInput value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Базовые слова" />
          </Field>
        </div>
        <Field label="Пример предложения" hint="Необязательно">
          <TextInput value={exampleSentence} onChange={(e) => setExampleSentence(e.target.value)} placeholder="A ház nagy." />
        </Field>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Field label="Базовое слово (корень)" hint="Для форм глаголов">
            <TextInput value={baseWord} onChange={(e) => setBaseWord(e.target.value)} placeholder="vár" />
          </Field>
          <Field label="Грам. тег" hint="slug формы">
            <TextInput value={grammaticalTag} onChange={(e) => setGrammaticalTag(e.target.value)} placeholder="mult-ido-1sg" />
          </Field>
          <Field label="Урок грамматики" hint="Номер урока">
            <TextInput
              type="number"
              value={relatedLessonId}
              onChange={(e) => setRelatedLessonId(e.target.value)}
              placeholder="13"
            />
          </Field>
        </div>
      </form>
    </Modal>
  );
}

/* ------------------------------------------------------------------ */
/*  Translation edit modal                                             */
/* ------------------------------------------------------------------ */

interface TransFormValues {
  direction: 'hu-to-ru' | 'ru-to-hu';
  sourceText: string;
  targetText: string;
  acceptableVariants: string;
  grammaticalTag: string;
  relatedLessonId: string;
}

function TransFormModal({
  initial,
  lessonNumber,
  onClose,
  onSave,
}: {
  initial: TranslationItem | null;
  lessonNumber: number;
  onClose: () => void;
  onSave: (values: TransFormValues) => void;
}) {
  const isEdit = initial !== null;
  const [direction, setDirection] = useState<'hu-to-ru' | 'ru-to-hu'>(initial?.direction ?? 'hu-to-ru');
  const [sourceText, setSourceText] = useState(initial?.sourceText ?? '');
  const [targetText, setTargetText] = useState(initial?.targetText ?? '');
  const [acceptableVariants, setAcceptableVariants] = useState(
    initial?.acceptableVariants?.join('; ') ?? ''
  );
  const [grammaticalTag, setGrammaticalTag] = useState(initial?.grammaticalTag ?? '');
  const [relatedLessonId, setRelatedLessonId] = useState(
    initial?.relatedLessonId?.toString() ?? ''
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (sourceText.trim().length < 1) nextErrors.sourceText = 'Введите исходный текст.';
    if (targetText.trim().length < 1) nextErrors.targetText = 'Введите перевод.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    onSave({
      direction,
      sourceText: sourceText.trim(),
      targetText: targetText.trim(),
      acceptableVariants: acceptableVariants.trim(),
      grammaticalTag: grammaticalTag.trim(),
      relatedLessonId: relatedLessonId.trim(),
    });
  };

  return (
    <Modal
      title={isEdit ? 'Редактировать карточку' : 'Добавить карточку перевода'}
      subtitle={`Урок ${lessonNumber}`}
      onClose={onClose}
      size="lg"
      footer={
        <>
          <SecondaryButton onClick={onClose}>Отмена</SecondaryButton>
          <PrimaryButton type="submit" form="trans-form">
            {isEdit ? 'Сохранить' : 'Добавить'}
          </PrimaryButton>
        </>
      }
    >
      <form id="trans-form" onSubmit={handleSubmit} className="space-y-4">
        <Field label="Направление" required>
          <Select value={direction} onChange={(e) => setDirection(e.target.value as 'hu-to-ru' | 'ru-to-hu')}>
            <option value="hu-to-ru">Венгерский → Русский</option>
            <option value="ru-to-hu">Русский → Венгерский</option>
          </Select>
        </Field>
        <Field label="Исходный текст" required error={errors.sourceText}>
          <TextArea rows={2} value={sourceText} onChange={(e) => setSourceText(e.target.value)} placeholder="A kávé jobb, mint a tea." autoFocus />
        </Field>
        <Field label="Перевод" required error={errors.targetText}>
          <TextArea rows={2} value={targetText} onChange={(e) => setTargetText(e.target.value)} placeholder="Кофе лучше, чем чай." />
        </Field>
        <Field label="Другие варианты" hint="Через точку с запятой (;)">
          <TextInput value={acceptableVariants} onChange={(e) => setAcceptableVariants(e.target.value)} placeholder="Кофе лучше чая" />
        </Field>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Грам. тег" hint="Для привязки к грамматике">
            <TextInput value={grammaticalTag} onChange={(e) => setGrammaticalTag(e.target.value)} placeholder="kozepfok-bb-mint" />
          </Field>
          <Field label="Урок грамматики" hint="Номер урока">
            <TextInput type="number" value={relatedLessonId} onChange={(e) => setRelatedLessonId(e.target.value)} placeholder="9" />
          </Field>
        </div>
      </form>
    </Modal>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */

export default function AdminContent() {
  const [activeTab, setActiveTab] = useState<'vocab' | 'trans'>('vocab');
  const [selectedLesson, setSelectedLesson] = useState<number>(1);
  const [search, setSearch] = useState('');

  // Overrides (editable copies persisted to localStorage)
  const [vocabOverrides, setVocabOverrides] = useState<VocabOverrides>(() =>
    loadOverrides<VocabOverrides>(STORAGE_KEY_VOCAB) ?? {}
  );
  const [transOverrides, setTransOverrides] = useState<TransOverrides>(() =>
    loadOverrides<TransOverrides>(STORAGE_KEY_TRANS) ?? {}
  );

  // Modal state
  const [vocabModalOpen, setVocabModalOpen] = useState(false);
  const [editingVocab, setEditingVocab] = useState<VocabularyItem | null>(null);
  const [deletingVocab, setDeletingVocab] = useState<VocabularyItem | null>(null);

  const [transModalOpen, setTransModalOpen] = useState(false);
  const [editingTrans, setEditingTrans] = useState<TranslationItem | null>(null);
  const [deletingTrans, setDeletingTrans] = useState<TranslationItem | null>(null);

  // Persist on change
  useEffect(() => {
    saveOverrides(STORAGE_KEY_VOCAB, vocabOverrides);
  }, [vocabOverrides]);
  useEffect(() => {
    saveOverrides(STORAGE_KEY_TRANS, transOverrides);
  }, [transOverrides]);

  // Current data: override if exists, otherwise fall back to built-in
  const currentVocab = useMemo<VocabularyItem[]>(() => {
    return vocabOverrides[selectedLesson] ?? LESSON_VOCABULARY_MAP[selectedLesson] ?? [];
  }, [vocabOverrides, selectedLesson]);

  const currentTrans = useMemo<TranslationItem[]>(() => {
    return transOverrides[selectedLesson] ?? LESSON_TRANSLATION_MAP[selectedLesson] ?? [];
  }, [transOverrides, selectedLesson]);

  const filteredVocab = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return currentVocab;
    return currentVocab.filter((v) => `${v.hu} ${v.ru} ${v.category}`.toLowerCase().includes(q));
  }, [currentVocab, search]);

  const filteredTrans = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return currentTrans;
    return currentTrans.filter(
      (t) => `${t.sourceText} ${t.targetText} ${t.direction}`.toLowerCase().includes(q)
    );
  }, [currentTrans, search]);

  /* ----- Vocabulary CRUD ----- */

  const handleVocabSave = (values: VocabFormValues) => {
    const list = [...currentVocab];
    const ri = values.relatedLessonId ? Number(values.relatedLessonId) : undefined;
    const item: VocabularyItem = {
      id: editingVocab?.id ?? `l${selectedLesson}_v${Date.now().toString(36)}`,
      hu: values.hu,
      ru: values.ru,
      phonetic: values.phonetic || undefined,
      category: values.category,
      exampleSentence: values.exampleSentence || undefined,
      baseWord: values.baseWord || undefined,
      grammaticalTag: values.grammaticalTag || undefined,
      relatedLessonId: ri,
    };
    if (editingVocab) {
      const idx = list.findIndex((v) => v.id === editingVocab.id);
      if (idx >= 0) list[idx] = item;
    } else {
      list.push(item);
    }
    setVocabOverrides((prev) => ({ ...prev, [selectedLesson]: list }));
    setVocabModalOpen(false);
    setEditingVocab(null);
  };

  const handleVocabDelete = () => {
    if (!deletingVocab) return;
    const list = currentVocab.filter((v) => v.id !== deletingVocab.id);
    setVocabOverrides((prev) => ({ ...prev, [selectedLesson]: list }));
    setDeletingVocab(null);
  };

  /* ----- Translation CRUD ----- */

  const handleTransSave = (values: TransFormValues) => {
    const list = [...currentTrans];
    const ri = values.relatedLessonId ? Number(values.relatedLessonId) : undefined;
    const variants = values.acceptableVariants
      ? values.acceptableVariants.split(';').map((s) => s.trim()).filter(Boolean)
      : undefined;
    const item: TranslationItem = {
      id: editingTrans?.id ?? `l${selectedLesson}_t${Date.now().toString(36)}`,
      lessonNumber: selectedLesson,
      direction: values.direction,
      sourceText: values.sourceText,
      targetText: values.targetText,
      acceptableVariants: variants,
      grammaticalTag: values.grammaticalTag || undefined,
      relatedLessonId: ri,
    };
    if (editingTrans) {
      const idx = list.findIndex((t) => t.id === editingTrans.id);
      if (idx >= 0) list[idx] = item;
    } else {
      list.push(item);
    }
    setTransOverrides((prev) => ({ ...prev, [selectedLesson]: list }));
    setTransModalOpen(false);
    setEditingTrans(null);
  };

  const handleTransDelete = () => {
    if (!deletingTrans) return;
    const list = currentTrans.filter((t) => t.id !== deletingTrans.id);
    setTransOverrides((prev) => ({ ...prev, [selectedLesson]: list }));
    setDeletingTrans(null);
  };

  /* ----- Export / Import ----- */

  const handleExport = () => {
    const data = activeTab === 'vocab' ? vocabOverrides : transOverrides;
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeTab === 'vocab' ? 'vocabulary' : 'translations'}-overrides.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        if (activeTab === 'vocab') {
          setVocabOverrides(data);
        } else {
          setTransOverrides(data);
        }
      } catch {
        alert('Ошибка чтения JSON файла.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleReset = () => {
    if (activeTab === 'vocab') {
      setVocabOverrides((prev) => {
        const next = { ...prev };
        delete next[selectedLesson];
        return next;
      });
    } else {
      setTransOverrides((prev) => {
        const next = { ...prev };
        delete next[selectedLesson];
        return next;
      });
    }
  };

  const items = activeTab === 'vocab' ? filteredVocab : filteredTrans;
  const totalCount = activeTab === 'vocab' ? currentVocab.length : currentTrans.length;
  const hasOverrides =
    activeTab === 'vocab'
      ? selectedLesson in vocabOverrides
      : selectedLesson in transOverrides;

  return (
    <div>
      <PageHeader
        title="Слова и переводы"
        subtitle="Управление словарём и карточками перевода для каждого урока"
        action={
          <div className="flex items-center gap-2">
            <SecondaryButton onClick={handleExport}>
              <Download className="w-4 h-4" />
              Экспорт
            </SecondaryButton>
            <label className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all cursor-pointer">
              <Upload className="w-4 h-4" />
              Импорт
              <input type="file" accept=".json" onChange={handleImport} className="hidden" />
            </label>
          </div>
        }
      />

      {/* Tabs + Lesson selector */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('vocab')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'vocab' ? 'bg-white text-indigo-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Слова ({Object.values(vocabOverrides).flat().length || 'все'})
          </button>
          <button
            onClick={() => setActiveTab('trans')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'trans' ? 'bg-white text-indigo-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Languages className="w-4 h-4" />
            Переводы
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Select
            value={selectedLesson}
            onChange={(e) => setSelectedLesson(Number(e.target.value))}
            className="w-auto min-w-[200px]"
          >
            {LESSONS_META.map((m) => (
              <option key={m.id} value={m.id}>
                Урок {m.number} · {m.level}
              </option>
            ))}
          </Select>
          {hasOverrides && (
            <SecondaryButton onClick={handleReset} className="text-xs">
              Сбросить
            </SecondaryButton>
          )}
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-5 max-w-md">
        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors"
        />
      </div>

      {/* Add button */}
      <div className="mb-4">
        <PrimaryButton
          onClick={() => {
            if (activeTab === 'vocab') {
              setEditingVocab(null);
              setVocabModalOpen(true);
            } else {
              setEditingTrans(null);
              setTransModalOpen(true);
            }
          }}
        >
          <PlusCircle className="w-4 h-4" />
          {activeTab === 'vocab' ? 'Добавить слово' : 'Добавить карточку'}
        </PrimaryButton>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          {activeTab === 'vocab' ? (
            <table className="w-full min-w-[800px] text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Слово (HU)</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Перевод</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Категория</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Грамматика</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 text-right">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredVocab.map((v) => (
                  <tr key={v.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="text-sm font-medium text-gray-900">{v.hu}</div>
                      {v.phonetic && <div className="text-xs text-gray-400 font-mono">{v.phonetic}</div>}
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-700">{v.ru}</td>
                    <td className="px-5 py-3.5">
                      <Pill tone="amber">{v.category}</Pill>
                    </td>
                    <td className="px-5 py-3.5">
                      {v.grammaticalTag && (
                        <div className="text-xs text-indigo-600 font-mono">{v.grammaticalTag}</div>
                      )}
                      {v.relatedLessonId && (
                        <div className="text-[11px] text-gray-400">Урок {v.relatedLessonId}</div>
                      )}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => {
                            setEditingVocab(v);
                            setVocabModalOpen(true);
                          }}
                          title="Редактировать"
                          className="p-2 rounded-lg text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeletingVocab(v)}
                          title="Удалить"
                          className="p-2 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredVocab.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-5 py-12 text-center text-sm text-gray-500">
                      {search ? 'Ничего не найдено' : 'Нет слов для этого урока'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          ) : (
            <table className="w-full min-w-[800px] text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Направление</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Исходный текст</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Перевод</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Грамматика</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 text-right">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredTrans.map((t) => (
                  <tr key={t.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-5 py-3.5">
                      <Pill tone={t.direction === 'hu-to-ru' ? 'indigo' : 'green'}>
                        {t.direction === 'hu-to-ru' ? 'HU→RU' : 'RU→HU'}
                      </Pill>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-900 max-w-xs">{t.sourceText}</td>
                    <td className="px-5 py-3.5 text-sm text-gray-700 max-w-xs">{t.targetText}</td>
                    <td className="px-5 py-3.5">
                      {t.grammaticalTag && (
                        <div className="text-xs text-indigo-600 font-mono">{t.grammaticalTag}</div>
                      )}
                      {t.relatedLessonId && (
                        <div className="text-[11px] text-gray-400">Урок {t.relatedLessonId}</div>
                      )}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => {
                            setEditingTrans(t);
                            setTransModalOpen(true);
                          }}
                          title="Редактировать"
                          className="p-2 rounded-lg text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeletingTrans(t)}
                          title="Удалить"
                          className="p-2 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredTrans.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-5 py-12 text-center text-sm text-gray-500">
                      {search ? 'Ничего не найдено' : 'Нет карточек для этого урока'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Count footer */}
      <div className="mt-3 text-xs text-gray-400">
        Всего записей: {totalCount}
        {hasOverrides && <span className="ml-2 text-amber-600">· есть несохранённые изменения</span>}
      </div>

      {/* Modals */}
      {vocabModalOpen && (
        <VocabFormModal
          initial={editingVocab}
          lessonNumber={selectedLesson}
          onClose={() => {
            setVocabModalOpen(false);
            setEditingVocab(null);
          }}
          onSave={handleVocabSave}
        />
      )}

      {transModalOpen && (
        <TransFormModal
          initial={editingTrans}
          lessonNumber={selectedLesson}
          onClose={() => {
            setTransModalOpen(false);
            setEditingTrans(null);
          }}
          onSave={handleTransSave}
        />
      )}

      <ConfirmDialog
        open={deletingVocab !== null}
        title="Удалить слово?"
        message={
          <>
            Слово <strong>{deletingVocab?.hu}</strong> будет удалено из урока {selectedLesson}.
          </>
        }
        confirmLabel="Удалить"
        onConfirm={handleVocabDelete}
        onCancel={() => setDeletingVocab(null)}
      />

      <ConfirmDialog
        open={deletingTrans !== null}
        title="Удалить карточку?"
        message={
          <>
            Карточка <strong>{deletingTrans?.sourceText}</strong> будет удалена из урока {selectedLesson}.
          </>
        }
        confirmLabel="Удалить"
        onConfirm={handleTransDelete}
        onCancel={() => setDeletingTrans(null)}
      />
    </div>
  );
}
