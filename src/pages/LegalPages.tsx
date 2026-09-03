import { useEffect, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import PublicInfoLayout from './PublicInfoLayout';

const UPDATED = 'September 3, 2026';

function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} — Magyaro`;
  }, [title]);
}

function Card({ children }: { children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-[#D6DEE6] bg-white p-6 md:p-8 shadow-sm">
      {children}
    </section>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">{title}</h2>
      <div className="space-y-3 text-sm md:text-base text-[#435064] leading-7">
        {children}
      </div>
    </section>
  );
}

function ProductSummary() {
  return (
    <div className="rounded-2xl border border-[#116EEE]/20 bg-[#116EEE]/5 p-5 text-sm leading-6 text-[#435064]">
      <div className="font-bold text-[#116EEE] mb-1">Product summary</div>
      <p>
        Magyaro is a premade self-study digital Hungarian-language course. It does not
        provide consulting, live tutoring, agency work, or customisable client services.
        Lessons 1–2 are free. Premium access unlocks lessons 3–28 for 44,500 HUF per
        month. The subscription renews monthly until cancelled. The initial Premium
        subscription payment is covered by a 14-day money-back guarantee. Payments are
        intended to be processed by Lemon Squeezy as Merchant of Record.
      </p>
    </div>
  );
}

export function TermsPage() {
  usePageTitle('Terms of Service');

  return (
    <PublicInfoLayout
      eyebrow="Legal · Terms of Service"
      title="Terms of Service"
      intro={`Last updated: ${UPDATED}. These Terms govern access to and use of the Magyaro website and digital Hungarian-language course.`}
    >
      <div className="space-y-6">
        <ProductSummary />

        <Card>
          <div className="space-y-8">
            <Section title="1. About Magyaro">
              <p>
                Magyaro is a premade digital product for self-study of the Hungarian
                language. The course includes 28 interactive lessons from A0 to B1,
                educational content, exercises, audio materials, vocabulary review tools,
                and progress tracking.
              </p>
              <p>
                Magyaro is not a consulting service, agency, custom-development service,
                or one-to-one tutoring service. Users receive access to a pre-produced
                digital course.
              </p>
            </Section>

            <Section title="2. Free and Premium access">
              <p>
                Lessons 1–2 are available free of charge. Access to lessons 3–28 and
                Premium features requires an active paid subscription.
              </p>
              <p>
                The current public price is <strong>44,500 HUF per month</strong>. The
                current plan and included features are described on the{' '}
                <Link to="/pricing" className="text-[#116EEE] underline underline-offset-4">
                  Pricing page
                </Link>.
              </p>
            </Section>

            <Section title="3. Accounts">
              <p>
                An account is required to save personal progress and use Premium access.
                Users are responsible for providing a valid email address, keeping their
                password secure, and not sharing account access with third parties.
              </p>
            </Section>

            <Section title="4. Subscription, payment, and renewal">
              <p>
                Premium is offered as a monthly subscription. Unless otherwise stated at
                checkout, the subscription renews automatically every month until
                cancelled.
              </p>
              <p>
                Payments are intended to be processed by Lemon Squeezy, which acts as
                Merchant of Record for the transaction. The final amount, currency,
                applicable taxes, and payment terms are shown before the user confirms
                the purchase.
              </p>
            </Section>

            <Section title="5. Cancelling a subscription">
              <p>
                A subscription can be cancelled before the next renewal through the
                available customer subscription portal or using the instructions provided
                in the purchase receipt/email. Unless required otherwise by law, Premium
                access continues until the end of the already-paid billing period.
              </p>
            </Section>

            <Section title="6. Refunds">
              <p>
                Refund rules are described in our separate{' '}
                <Link to="/refund" className="text-[#116EEE] underline underline-offset-4">
                  Refund Policy
                </Link>, which forms part of these Terms.
              </p>
            </Section>

            <Section title="7. Licence and intellectual property">
              <p>
                Users receive a limited, personal, non-exclusive, non-transferable licence
                to use Magyaro materials for personal learning only. Copying, bulk
                downloading, reselling, publishing course materials, or providing paid
                access to third parties without permission is prohibited.
              </p>
            </Section>

            <Section title="8. Acceptable use">
              <p>
                Users may not attempt to bypass access controls, interfere with the
                service, automatically extract protected course content, use another
                person's account without permission, or use Magyaro in violation of
                applicable law.
              </p>
            </Section>

            <Section title="9. Educational results">
              <p>
                Magyaro provides educational materials and practice tools but does not
                guarantee any particular exam, academic, immigration, employment, or
                language-certification outcome. Results depend on the user's study habits,
                effort, prior knowledge, and individual circumstances.
              </p>
            </Section>

            <Section title="10. Availability and changes">
              <p>
                We may correct errors, update lessons, improve functionality, and perform
                maintenance. Material changes to a paid offer will not be applied
                retroactively to an already-paid billing period.
              </p>
            </Section>

            <Section title="11. Consumer rights">
              <p>
                These Terms apply to the maximum extent permitted by law and do not limit
                mandatory consumer rights that cannot legally be waived by contract in
                the user's country of residence.
              </p>
            </Section>

            <Section title="12. Contact">
              <p>
                For account, billing, or Terms-related questions, use the support/contact
                channel shown in your purchase receipt or Lemon Squeezy transaction
                email.
              </p>
            </Section>
          </div>
        </Card>
      </div>
    </PublicInfoLayout>
  );
}

export function PrivacyPage() {
  usePageTitle('Privacy Policy');

  return (
    <PublicInfoLayout
      eyebrow="Legal · Privacy Policy"
      title="Privacy Policy"
      intro={`Last updated: ${UPDATED}. This Policy explains what information is processed to operate Magyaro and why.`}
    >
      <div className="space-y-6">
        <Card>
          <div className="space-y-8">
            <Section title="1. Information we process">
              <p>
                When a user registers or uses Magyaro, we may process the user's email
                address, technical account identifier, account creation date, and
                authentication information required to sign in.
              </p>
              <p>
                For learning features, we may store educational progress such as viewed
                lessons and slides, exercise and quiz results, vocabulary review state,
                and other information required to synchronise learning progress.
              </p>
              <p>
                For Premium access, we may store subscription status, access period, and
                technical order/subscription identifiers. Magyaro does not store full
                payment-card details.
              </p>
            </Section>

            <Section title="2. How we use information">
              <p>
                Information is used to create and protect accounts, provide course
                content, synchronise progress, verify Premium access, support users,
                prevent abuse, maintain service security, and comply with legal
                obligations.
              </p>
            </Section>

            <Section title="3. Legal bases">
              <p>
                Depending on the context and applicable law, processing may be necessary
                to perform a contract with the user, comply with legal obligations,
                pursue legitimate interests in operating a safe and reliable service, or
                rely on consent where consent is legally required.
              </p>
            </Section>

            <Section title="4. Service providers">
              <p>
                Magyaro uses Google Firebase for authentication, backend infrastructure,
                and storage of data required to operate the service.
              </p>
              <p>
                Paid purchases are intended to use Lemon Squeezy. Lemon Squeezy acts as
                Merchant of Record and processes payment information under its own legal
                terms and privacy documentation.
              </p>
            </Section>

            <Section title="5. Browser storage">
              <p>
                The browser may store technical session information and a local cache of
                learning progress to restore sign-in state and provide a reliable user
                experience. Magyaro does not currently use advertising trackers.
              </p>
            </Section>

            <Section title="6. Sharing and international processing">
              <p>
                Information is shared only with providers needed for infrastructure,
                payments, security, or legal compliance. Those providers may process data
                in other countries using safeguards required by applicable law.
              </p>
            </Section>

            <Section title="7. Data retention">
              <p>
                Account and learning-progress data are retained while the account is in
                use and for a reasonable period afterwards where required for security,
                dispute resolution, or legal obligations. Payment records may be retained
                by the payment provider according to its own legal obligations.
              </p>
            </Section>

            <Section title="8. Your rights">
              <p>
                Depending on applicable law, users may have rights to access, correct,
                delete, restrict, or receive a copy of their personal information, and to
                object to certain processing. Users may also have the right to lodge a
                complaint with a competent data-protection authority.
              </p>
            </Section>

            <Section title="9. Security">
              <p>
                We use technical and organisational measures intended to protect accounts
                and data. However, no online service can guarantee absolute security.
              </p>
            </Section>

            <Section title="10. Children">
              <p>
                Where the law in a user's country requires consent from a parent or legal
                guardian for a child to use an online service, that consent must be
                obtained before the account is created.
              </p>
            </Section>

            <Section title="11. Privacy requests">
              <p>
                For privacy-related requests, use the support/contact channel associated
                with Magyaro or your purchase and identify the email address of your
                account. Never send your password, CVV, or full payment-card details.
              </p>
            </Section>
          </div>
        </Card>
      </div>
    </PublicInfoLayout>
  );
}

export function RefundPage() {
  usePageTitle('Refund Policy');

  return (
    <PublicInfoLayout
      eyebrow="Legal · Refund Policy"
      title="Refund Policy"
      intro={`Last updated: ${UPDATED}. This Policy explains refund eligibility for the Magyaro Premium digital subscription.`}
    >
      <div className="space-y-6">
        <ProductSummary />

        <Card>
          <div className="space-y-8">
            <Section title="1. 14-day money-back guarantee for the initial payment">
              <p>
                The first Magyaro Premium subscription payment is covered by a 14-day
                money-back guarantee. A refund request must be submitted no later than 14
                calendar days after the initial subscription payment.
              </p>
            </Section>

            <Section title="2. Automatic renewal payments">
              <p>
                The 14-day money-back guarantee applies to the initial Premium payment and
                does not normally apply to later automatic renewal charges. To avoid the
                next charge, cancel the subscription at least 24 hours before the next
                renewal date.
              </p>
              <p>
                This does not limit mandatory consumer rights under applicable law, or
                refunds that may be appropriate in cases such as duplicate or erroneous
                charges.
              </p>
            </Section>

            <Section title="3. How to request a refund">
              <p>
                Use the order details and support/contact channel in your Lemon Squeezy
                receipt or transaction email. Include the purchase email address, purchase
                date, and reason for the request. Do not send full card details, CVV,
                passwords, or banking verification codes.
              </p>
            </Section>

            <Section title="4. Refund processing">
              <p>
                Payments through Lemon Squeezy are processed by Lemon Squeezy as Merchant
                of Record. Approved refunds may therefore be processed through the
                payment platform in accordance with this Policy, applicable law, and the
                payment provider's rules.
              </p>
            </Section>

            <Section title="5. Time to receive the money">
              <p>
                After a refund is approved, the time required for funds to appear depends
                on the payment method and the customer's bank. Payment-network processing
                may take up to 10 days.
              </p>
            </Section>

            <Section title="6. Cancellation is not automatically a refund">
              <p>
                Cancelling a subscription stops future renewals. It does not automatically
                reverse an already-paid billing period. Premium access normally remains
                available until the end of that period unless a refund is separately
                approved or applicable law requires otherwise.
              </p>
            </Section>
          </div>
        </Card>
      </div>
    </PublicInfoLayout>
  );
}
