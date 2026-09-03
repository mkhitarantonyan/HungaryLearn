import { useEffect } from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PublicInfoLayout from './PublicInfoLayout';

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
      title="One simple Premium plan"
      intro="Try the free lessons first. Premium unlocks the complete premade Hungarian self-study course."
    >
      <div className="grid lg:grid-cols-[1fr_0.72fr] gap-6 items-start">
        <section className="rounded-2xl border border-[#116EEE]/25 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-sm font-bold text-[#116EEE]">Magyaro Premium</div>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
                  44,500 HUF
                </span>
                <span className="text-[#666E7E] pb-1">/ month</span>
              </div>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-[#116EEE]/10 text-[#116EEE] text-xs font-bold">
              28 lessons
            </span>
          </div>

          <div className="mt-7 grid sm:grid-cols-2 gap-3">
            {FEATURES.map((feature) => (
              <div key={feature} className="flex items-start gap-2.5 text-sm text-[#435064]">
                <span className="w-5 h-5 rounded-full bg-[#116EEE]/10 text-[#116EEE] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/?auth=register"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#116EEE] text-white font-bold hover:bg-[#0D5ED0] transition-colors"
            >
              Start with free lessons
            </Link>
            <Link
              to="/terms"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-[#D6DEE6] bg-white font-semibold hover:border-[#116EEE]/35 hover:text-[#116EEE] transition-colors"
            >
              Subscription terms
            </Link>
          </div>
        </section>

        <aside className="rounded-2xl border border-[#D6DEE6] bg-white p-6 md:p-7 space-y-5">
          <div className="flex items-center gap-2 font-bold">
            <ShieldCheck className="w-5 h-5 text-[#116EEE]" />
            Billing details
          </div>

          <div className="space-y-4 text-sm leading-6 text-[#435064]">
            <p>
              <strong>Billing period:</strong> 1 month. The subscription automatically
              renews each month until cancelled.
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
