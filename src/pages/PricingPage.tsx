import { useEffect } from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PublicInfoLayout from './PublicInfoLayout';
import { BILLING_PLANS, formatHuf } from '../config/pricing';

const FEATURES = [
  'All 28 lessons from A0 to B1',
  'Lessons 1–2 free',
  'Recorded educational audio',
  'Interactive exercises and quizzes',
  'Cloud-synchronised progress',
  'Vocabulary review system',
];

export default function PricingPage() {
  useEffect(() => {
    document.title = 'Pricing — Magyaro';
  }, []);

  return (
    <PublicInfoLayout
      eyebrow="Pricing"
      title="Choose your Premium plan"
      intro="Try the free lessons first. Premium unlocks the complete premade Hungarian self-study course."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        {BILLING_PLANS.map(plan => (
          <section key={plan.key} aria-label={plan.title}
            className={`min-w-0 rounded-2xl border bg-white p-5 shadow-sm flex flex-col ${plan.recommended ? 'border-[#116EEE] ring-1 ring-[#116EEE]/15' : 'border-[#D6DEE6]'}`}>
            <div className="min-h-8">
              {plan.badge && <span className="inline-block px-2.5 py-1 rounded-full bg-[#116EEE]/10 text-[#116EEE] text-xs font-bold">{plan.badge}</span>}
            </div>
            <h2 className="mt-2 text-xl font-extrabold">{plan.title}</h2>
            <p className="mt-3 text-3xl font-extrabold tracking-tight whitespace-nowrap">{plan.formattedPrice}</p>
            <p className="mt-1 text-xs text-[#666E7E]">за весь период · {plan.billingLabel}</p>
            <div className="mt-3 min-h-12 text-sm leading-6">
              {plan.savingsHuf > 0 && <>
                <p className="text-[#435064]">≈ {formatHuf(plan.monthlyEquivalentHuf)} / месяц</p>
                <p className="font-semibold text-[#116EEE]">Экономия {formatHuf(plan.savingsHuf)}</p>
              </>}
            </div>
            <p className="mt-2 text-sm leading-6 text-[#666E7E]">{plan.description}</p>
            <ul className="mt-6 space-y-3 mb-7">
              {FEATURES.map(feature => (
                <li key={feature} className="flex items-start gap-2 text-sm text-[#435064]">
                  <Check aria-hidden="true" className="w-4 h-4 text-[#116EEE] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/?auth=register"
              className={`mt-auto inline-flex items-center justify-center px-3 py-3 rounded-xl text-sm font-bold transition-colors ${plan.recommended ? 'bg-[#116EEE] text-white hover:bg-[#0D5ED0]' : 'border border-[#D6DEE6] hover:border-[#116EEE] hover:text-[#116EEE]'}`}>
              Start with free lessons
            </Link>
          </section>
        ))}
      </div>
      <p className="mt-4 text-xs leading-5 text-[#666E7E]">Все тарифы дают одинаковый Premium доступ. Экономия рассчитана относительно помесячной оплаты за тот же срок.</p>

      <div className="mt-6">
        <aside className="rounded-2xl border border-[#D6DEE6] bg-white p-6 md:p-7 space-y-5">
          <div className="flex items-center gap-2 font-bold">
            <ShieldCheck className="w-5 h-5 text-[#116EEE]" />
            Billing details
          </div>

          <div className="space-y-4 text-sm leading-6 text-[#435064]">
            <p>
              <strong>Billing period:</strong> 1 month, 3 months, or 1 year. The subscription
              automatically renews for the selected period until cancelled.
            </p>
            <p>
              <strong>Cancellation:</strong> cancel any time before the next renewal.
              Access remains available through the already-paid billing period.
            </p>
            <p>
              <strong>Refund:</strong> 14-day money-back guarantee for the initial
              Premium subscription payment.
            </p>
            <p>
              <strong>Payment processing:</strong> payments are intended to be processed
              by Lemon Squeezy as Merchant of Record.
            </p>
            <p>
              The final payable amount, currency, and applicable taxes (if any) are shown
              before purchase confirmation.
            </p>
          </div>

          <Link to="/terms" className="inline-block text-sm font-semibold text-[#116EEE] underline underline-offset-4">Subscription terms</Link>
          <div className="pt-4 border-t border-[#D6DEE6] text-xs leading-5 text-[#666E7E]">
            Product type: premade self-study digital language course. No consulting,
            custom development, agency work, or live tutoring is included.
          </div>
        </aside>
      </div>

      <section className="mt-6 rounded-2xl border border-[#D6DEE6] bg-white p-6 md:p-8">
        <h2 className="text-xl font-extrabold">What can I try for free?</h2>
        <p className="mt-3 text-sm md:text-base leading-7 text-[#435064]">
          Lessons 1–2 are available without payment. This lets users review the course
          format, interface, exercises, and learning approach before purchasing Premium.
        </p>
      </section>
    </PublicInfoLayout>
  );
}
