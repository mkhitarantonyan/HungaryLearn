import { useEffect } from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PublicInfoLayout from './PublicInfoLayout';
import { formatHuf, getBillingPlans } from '../config/pricing';
import { useI18n } from '../i18n';
import { formatPricingCopy, PRICING_COPY } from '../i18n/pricingCopy';

export default function PricingPage() {
  const { language } = useI18n();
  const copy = PRICING_COPY[language];
  const billingPlans = getBillingPlans(language);
  useEffect(() => {
    document.title = `${copy.eyebrow} — Magyaro`;
  }, [copy.eyebrow]);

  return (
    <PublicInfoLayout
      eyebrow={copy.eyebrow}
      title={copy.title}
      intro={copy.intro}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        {billingPlans.map(plan => (
          <section key={plan.key} aria-label={plan.title}
            className={`min-w-0 rounded-2xl border bg-white p-5 shadow-sm flex flex-col ${plan.recommended ? 'border-[#116EEE] ring-1 ring-[#116EEE]/15' : 'border-[#D6DEE6]'}`}>
            <div className="min-h-8">
              {plan.badge && <span className="inline-block px-2.5 py-1 rounded-full bg-[#116EEE]/10 text-[#116EEE] text-xs font-bold">{plan.badge}</span>}
            </div>
            <h2 className="mt-2 text-xl font-extrabold">{plan.title}</h2>
            <p className="mt-3 text-3xl font-extrabold tracking-tight whitespace-nowrap">{plan.formattedPrice}</p>
            <p className="mt-1 text-xs text-[#666E7E]">{formatPricingCopy(copy.period, { billing: plan.billingLabel })}</p>
            <div className="mt-3 min-h-12 text-sm leading-6">
              {plan.savingsHuf > 0 && <>
                <p className="text-[#435064]">{formatPricingCopy(copy.month, { price: formatHuf(plan.monthlyEquivalentHuf) })}</p>
                <p className="font-semibold text-[#116EEE]">{formatPricingCopy(copy.savings, { amount: formatHuf(plan.savingsHuf) })}</p>
              </>}
            </div>
            <p className="mt-2 text-sm leading-6 text-[#666E7E]">{plan.description}</p>
            <ul className="mt-6 space-y-3 mb-7">
              {copy.features.map(feature => (
                <li key={feature} className="flex items-start gap-2 text-sm text-[#435064]">
                  <Check aria-hidden="true" className="w-4 h-4 text-[#116EEE] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/?auth=register"
              className={`mt-auto inline-flex items-center justify-center px-3 py-3 rounded-xl text-sm font-bold transition-colors ${plan.recommended ? 'bg-[#116EEE] text-white hover:bg-[#0D5ED0]' : 'border border-[#D6DEE6] hover:border-[#116EEE] hover:text-[#116EEE]'}`}>
              {copy.start}
            </Link>
          </section>
        ))}
      </div>
      <p className="mt-4 text-xs leading-5 text-[#666E7E]">{copy.note}</p>

      <div className="mt-6">
        <aside className="rounded-2xl border border-[#D6DEE6] bg-white p-6 md:p-7 space-y-5">
          <div className="flex items-center gap-2 font-bold">
            <ShieldCheck className="w-5 h-5 text-[#116EEE]" />
            {copy.billingTitle}
          </div>

          <div className="space-y-4 text-sm leading-6 text-[#435064]">
            {copy.billing.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <Link to="/terms" className="inline-block text-sm font-semibold text-[#116EEE] underline underline-offset-4">{copy.terms}</Link>
          <div className="pt-4 border-t border-[#D6DEE6] text-xs leading-5 text-[#666E7E]">
            {copy.product}
          </div>
        </aside>
      </div>

      <section className="mt-6 rounded-2xl border border-[#D6DEE6] bg-white p-6 md:p-8">
        <h2 className="text-xl font-extrabold">{copy.freeTitle}</h2>
        <p className="mt-3 text-sm md:text-base leading-7 text-[#435064]">
          {copy.freeBody}
        </p>
      </section>
    </PublicInfoLayout>
  );
}
