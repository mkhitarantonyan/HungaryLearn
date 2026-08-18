import React from 'react';
import { BookOpen } from 'lucide-react';
import type {
  ActivityEvidence,
  MenuReadingContent,
  ProseReadingContent,
  ReadingTaskData,
} from '../../types';
import { readingEvidence, resolveReadingContent } from '../../utils/activityUtils';
import { QuestionSet } from './QuestionSet';

interface ReadingTaskProps {
  data: ReadingTaskData;
  evidence?: ActivityEvidence;
  onEvidence: (evidence: ActivityEvidence) => void;
  onResetEvidence?: (activityId: string) => void;
}

interface MenuContentViewProps {
  activityId: string;
  content: MenuReadingContent;
}

const MenuContentView: React.FC<MenuContentViewProps> = ({ activityId, content }) => (
  <div
    className="rounded-xl border border-[#D9CBB0] bg-white p-4 md:p-5"
    role="region"
    aria-label="Étlap"
  >
    {content.legend && (
      <p className="text-xs font-mono text-[#8A7A68] mb-3" aria-label={content.legend}>
        {content.legend}
      </p>
    )}
    <div className="space-y-4">
      {content.sections.map((section) => (
        <section key={section.id} aria-labelledby={activityId + '-' + section.id}>
          <h4
            id={activityId + '-' + section.id}
            className="font-mono font-bold text-[#7A1E2B] text-xs uppercase tracking-wider border-b border-[#D9CBB0]/60 pb-1 mb-2"
          >
            {section.title}
          </h4>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.id} className="flex items-baseline justify-between gap-3 text-sm">
                <span className="flex min-w-0 items-center gap-1.5">
                  <span className="min-w-0 [overflow-wrap:anywhere]">{item.name}</span>
                  {item.vegetarian && (
                    <>
                      <span aria-hidden="true" title="vegetáriánus">
                        🌱
                      </span>
                      <span className="sr-only">vegetáriánus</span>
                    </>
                  )}
                </span>
                <span className="shrink-0 font-mono text-[#8A7A68] tabular-nums">
                  {item.price} Ft
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </div>
);

interface ProseContentViewProps {
  activityId: string;
  content: ProseReadingContent;
}

const ProseContentView: React.FC<ProseContentViewProps> = ({ activityId, content }) => {
  const headingId = activityId + '-prose-title';
  return (
    <article
      className="min-w-0 rounded-xl border border-[#D9CBB0] bg-white p-4 md:p-5"
      aria-labelledby={content.title ? headingId : undefined}
      aria-label={content.title ? undefined : 'Текст для чтения'}
    >
      {content.title && (
        <h4 id={headingId} className="font-mono font-bold text-[#7A1E2B] text-sm md:text-base mb-3">
          {content.title}
        </h4>
      )}
      <div className="mx-auto max-w-[70ch] min-w-0 space-y-3 text-sm md:text-base leading-7 text-[#2A2320]">
        {content.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="min-w-0 whitespace-pre-wrap [overflow-wrap:anywhere]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};

/**
 * Generic reading entry point. Frozen L15 top-level menu data is resolved to
 * menu content; new tasks use discriminated menu/prose content. Displaying the
 * content is exposure. Direct evidence comes only from scored questions.
 */
export const ReadingTask: React.FC<ReadingTaskProps> = ({ data, evidence, onEvidence, onResetEvidence }) => {
  const content = resolveReadingContent(data);
  const passCount = data.passCount ?? 3;
  const defaultTitle = content.type === 'menu' ? 'Чтение: меню' : 'Чтение: текст';

  const handleAllAnswered = (score: number, total: number) => {
    const result = readingEvidence(score, total, passCount);
    onEvidence({ activityId: data.id, attempted: true, completed: true, ...result });
  };

  return (
    <div className="min-w-0 rounded-2xl border border-[#D9CBB0] bg-[#F6EFE4]/70 p-4 md:p-5 space-y-4">
      <div className="flex min-w-0 flex-wrap items-center gap-2">
        <BookOpen className="w-4 h-4 text-[#7A1E2B]" />
        <h3 className="min-w-0 flex-1 font-mono font-bold text-[#57121C] text-sm md:text-base [overflow-wrap:anywhere]">
          {data.title ?? defaultTitle}
        </h3>
        {evidence?.completed && (
          <span className="ml-auto text-[10px] font-mono uppercase font-semibold text-emerald-700">
            {evidence.score}/{evidence.total} · {evidence.passed ? 'met' : 'не met'}
          </span>
        )}
      </div>

      {data.instructions && (
        <p className="min-w-0 text-xs md:text-sm text-[#8A7A68] [overflow-wrap:anywhere]">
          {data.instructions}
        </p>
      )}

      {content.type === 'menu' ? (
        <MenuContentView activityId={data.id} content={content} />
      ) : (
        <ProseContentView activityId={data.id} content={content} />
      )}

      {/* Comprehension questions */}
      <QuestionSet
        questions={data.questions}
        allowRetry
        onAllAnswered={handleAllAnswered}
        onRetry={() => onResetEvidence?.(data.id)}
      />
    </div>
  );
};
