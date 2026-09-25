import { useEffect, type ReactNode } from 'react';
import PublicInfoLayout from './PublicInfoLayout';
import { getBillingPlans } from '../config/pricing';
import { useI18n } from '../i18n';
import { LEGAL_COPY, type LegalPageCopy, type LegalSectionCopy } from '../i18n/legalCopy';

function usePageTitle(title: string) {
  useEffect(() => { document.title = `${title} — Magyaro`; }, [title]);
}

function Card({ children }: { children: ReactNode }) {
  return <section className="rounded-2xl border border-[#D6DEE6] bg-white p-6 shadow-sm md:p-8">{children}</section>;
}

function Section({ section }: { section: LegalSectionCopy }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">{section.title}</h2>
      <div className="space-y-3 text-sm leading-7 text-[#435064] md:text-base">
        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}

function ProductSummary() {
  const { language } = useI18n();
  const copy = LEGAL_COPY[language];
  return (
    <div className="rounded-2xl border border-[#116EEE]/20 bg-[#116EEE]/5 p-5 text-sm leading-6 text-[#435064]">
      <div className="mb-1 font-bold text-[#116EEE]">{copy.productTitle}</div>
      <p>{copy.productSummary}</p>
      <ul className="mt-3 list-disc pl-5">
        {getBillingPlans(language).map((plan) => <li key={plan.key}>{plan.formattedPrice} / {copy.periods[plan.key]}</li>)}
      </ul>
    </div>
  );
}

function Page({ page, updated, summary }: { page: LegalPageCopy; updated: string; summary?: boolean }) {
  usePageTitle(page.title);
  return (
    <PublicInfoLayout eyebrow={page.eyebrow} title={page.title} intro={`${page.intro} ${updated}`}>
      <div className="space-y-6">
        {summary && <ProductSummary />}
        <Card><div className="space-y-8">{page.sections.map((section) => <Section key={section.title} section={section} />)}</div></Card>
      </div>
    </PublicInfoLayout>
  );
}

function useLegalPage(kind: 'terms' | 'privacy' | 'refund') {
  const { language } = useI18n();
  const copy = LEGAL_COPY[language];
  return { page: copy[kind], updated: `${copy.lastUpdated}: ${copy.updated}.` };
}

export function TermsPage() {
  const props = useLegalPage('terms');
  return <Page {...props} summary />;
}

export function PrivacyPage() {
  return <Page {...useLegalPage('privacy')} />;
}

export function RefundPage() {
  const props = useLegalPage('refund');
  return <Page {...props} summary />;
}
