import React, { useState, useEffect } from 'react';
import { X, User, Lock, Mail, CreditCard, CheckCircle2, LogOut, ArrowRight, Loader2, Clock3, Trash2, Building2, KeyRound } from 'lucide-react';
import {
  UserProfile,
  getCurrentUser,
  subscribeUserState,
  loginUserServer,
  registerUserServer,
  logoutUserServer,
  createLemonCheckout,
  getSubscriptionPortal,
  checkUserSessionServer,
  isUserAuthReady,
  subscribeUserAuthReady,
  validateRegistration,
  requestPasswordReset,
  resendVerificationEmail,
  refreshEmailVerification,
  deleteAccountServer,
  redeemOrganizationAccessKey,
} from '../utils/userStore';
import { subscriptionDisplay } from '../utils/subscriptionValidity';
import { getBillingPlans, type BillingPlanKey } from '../config/pricing';
import { useI18n } from '../i18n';
import { AUTH_COPY, formatAuthCopy, localizeAccountMessage } from '../i18n/authCopy';

interface UserAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register' | 'profile';
}

export const UserAuthModal: React.FC<UserAuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login',
}) => {
  const { language } = useI18n();
  const copy = AUTH_COPY[language];
  const [user, setUser] = useState<UserProfile | null>(getCurrentUser());
  const [mode, setMode] = useState<'login' | 'register' | 'reset' | 'profile'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUpgrading, setIsUpgrading] = useState(false);
  const [showDeletion, setShowDeletion] = useState(false);
  const [deletionPassword, setDeletionPassword] = useState('');
  const [deletionConfirmed, setDeletionConfirmed] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [authReady, setAuthReady] = useState(isUserAuthReady());
  const [selectedPlan, setSelectedPlan] = useState<BillingPlanKey>('quarterly');
  const [organizationCode, setOrganizationCode] = useState('');
  const [isRedeemingCode, setIsRedeemingCode] = useState(false);
  const billingPlans = getBillingPlans(language);
  const selectedPricing = billingPlans.find(plan => plan.key === selectedPlan)!;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    if (params.get('payment') !== 'success') return;
    setSuccessMsg(copy.paymentPending);
    void checkUserSessionServer();
    params.delete('payment');
    const query = params.toString();
    window.history.replaceState({}, '', `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`);
  }, [copy.paymentPending]);

  useEffect(() => subscribeUserAuthReady(setAuthReady), []);

  useEffect(() => {
    const unsubscribe = subscribeUserState((u) => {
      setUser(u);
      if (u) {
        setMode('profile');
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      setMode('profile');
    } else {
      setMode(initialMode === 'profile' ? 'login' : initialMode);
    }
  }, [isOpen, initialMode, user]);

  useEffect(() => {
    if (isOpen) return;
    setShowDeletion(false);
    setDeletionPassword('');
    setDeletionConfirmed(false);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!email.trim() || !password) {
      setErrorMsg(copy.required);
      return;
    }

    setIsLoading(true);
    const result = await loginUserServer(email, password);
    setIsLoading(false);

    if (result.success) {
      setSuccessMsg(result.user?.emailVerified
        ? copy.loginSuccess
        : copy.verifyAfterLogin);
      setEmail('');
      setPassword('');
      if (result.user?.emailVerified) {
        setTimeout(() => setSuccessMsg(''), 2000);
      }
    } else {
      setErrorMsg(localizeAccountMessage(result.message, language));
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const validationError = validateRegistration(email, password, confirmPassword);
    if (validationError) {
      setErrorMsg(localizeAccountMessage(validationError, language));
      return;
    }

    setIsLoading(true);
    const result = await registerUserServer(email, password);
    setIsLoading(false);

    if (result.success) {
      setSuccessMsg(localizeAccountMessage(result.message, language));
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else if (result.alreadyExists) {
      // Email already registered — switch to login tab with a helpful message
      setErrorMsg(localizeAccountMessage(result.message, language));
      setMode('login');
      setPassword('');
      setConfirmPassword('');
    } else {
      setErrorMsg(localizeAccountMessage(result.message, language));
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setIsLoading(true);
    const result = await requestPasswordReset(email);
    setIsLoading(false);
    if (result.success) setSuccessMsg(localizeAccountMessage(result.message, language));
    else setErrorMsg(localizeAccountMessage(result.message, language));
  };

  const handleResendVerification = async () => {
    setErrorMsg('');
    setSuccessMsg('');
    setIsLoading(true);
    const result = await resendVerificationEmail();
    setIsLoading(false);
    if (result.success) setSuccessMsg(localizeAccountMessage(result.message, language));
    else setErrorMsg(localizeAccountMessage(result.message, language));
  };

  const handleRefreshVerification = async () => {
    setErrorMsg('');
    setSuccessMsg('');
    setIsLoading(true);
    const result = await refreshEmailVerification();
    setIsLoading(false);
    if (result.success) setSuccessMsg(localizeAccountMessage(result.message, language));
    else setErrorMsg(localizeAccountMessage(result.message, language));
  };

  const handleLogout = async () => {
    setIsLoading(true);
    await logoutUserServer();
    setIsLoading(false);
    setShowDeletion(false);
    setDeletionPassword('');
    setDeletionConfirmed(false);
    setMode('login');
  };

  const handleDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!deletionConfirmed) return;
    setErrorMsg('');
    setSuccessMsg('');
    setIsDeleting(true);
    const result = await deleteAccountServer(deletionPassword);
    setIsDeleting(false);
    setDeletionPassword('');
    if (result.success) {
      setShowDeletion(false);
      setDeletionConfirmed(false);
      setMode('login');
      setSuccessMsg(localizeAccountMessage(result.message, language));
    } else {
      setErrorMsg(localizeAccountMessage(result.message, language));
    }
  };

  const handlePaymentCheckout = async () => {
    setIsUpgrading(true);
    setErrorMsg('');
    setSuccessMsg('');
    
    const result = await createLemonCheckout(selectedPlan);
    setIsUpgrading(false);

    if (result.success && result.url) {
      window.location.href = result.url;
    } else {
      setErrorMsg(result.message ? localizeAccountMessage(result.message, language) : copy.checkoutUnavailable);
    }
  };

  const handleSubscriptionPortal = async () => {
    setIsUpgrading(true);
    setErrorMsg('');
    const result = await getSubscriptionPortal();
    setIsUpgrading(false);
    if (result.success && result.url) window.location.href = result.url;
    else setErrorMsg(result.message ? localizeAccountMessage(result.message, language) : copy.portalUnavailable);
  };

  const handleOrganizationCode = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setIsRedeemingCode(true);
    const result = await redeemOrganizationAccessKey(organizationCode);
    setIsRedeemingCode(false);
    if (result.success) {
      setOrganizationCode('');
      setSuccessMsg(localizeAccountMessage(result.message, language));
    } else setErrorMsg(localizeAccountMessage(result.message, language));
  };

  const subscription = user ? subscriptionDisplay(user, new Date(), language) : null;
  const subscriptionTone = subscription?.status === 'privileged'
    ? 'bg-indigo-100 text-indigo-800 border-indigo-300'
    : subscription?.status === 'active'
      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
      : subscription?.status === 'cancelled'
        ? 'bg-amber-100 text-amber-800 border-amber-300'
        : subscription?.status === 'past_due'
          ? 'bg-red-100 text-red-800 border-red-300'
          : 'bg-gray-100 text-gray-700 border-gray-300';
  const modalTitle = user
    ? copy.profileTitle
    : mode === 'login'
      ? copy.loginTitle
      : mode === 'reset'
        ? copy.resetTitle
        : copy.registerTitle;
  const deletionBlockedBySubscription = user?.provider === 'lemonsqueezy'
    && ['active', 'past_due', 'paused'].includes(user.subscriptionStatus);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#182230]/45 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white text-[#252B2F] w-full max-w-md max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl shadow-[0_18px_48px_rgba(29,45,65,0.18)] border border-[#D6DEE6] relative">
        <div className="bg-[#116EEE] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">
                {modalTitle}
              </h3>
              <p className="text-xs text-[#D9E6FF]">
                {user ? user.email : copy.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label={copy.close}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {errorMsg && (
            <div role="alert" aria-live="polite" className="mb-4 p-3 bg-red-100 border border-red-300 text-red-800 text-xs rounded-lg flex items-center gap-2">
              <span className="font-bold">⚠️</span>
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="mb-4 p-3 bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs rounded-lg flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {!authReady ? (
            <div className="flex min-h-56 flex-col items-center justify-center gap-3 text-[#252B2F]" role="status">
              <Loader2 className="w-7 animate-spin" />
              <span className="text-sm font-semibold">{copy.checking}</span>
            </div>
          ) : user ? (
            <div className="space-y-5">
              <div className="bg-white p-4 rounded-xl border border-[#E4EBF3] shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <span className="text-xs text-gray-500">{copy.account}</span>
                  <span className="text-sm font-semibold text-[#116EEE] font-mono">{user.email}</span>
                </div>

                <div className="flex items-center justify-between gap-3 pb-3 border-b border-gray-100">
                  <span className="text-xs text-gray-500">{copy.emailVerification}</span>
                  <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                    user.emailVerified
                      ? 'border-emerald-300 bg-emerald-100 text-emerald-800'
                      : 'border-amber-300 bg-amber-100 text-amber-800'
                  }`}>
                    {user.emailVerified ? <CheckCircle2 className="w-3 h-3" /> : <Clock3 className="w-3 h-3" />}
                    {user.emailVerified ? copy.verified : copy.unverified}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-gray-500">{copy.subscriptionStatus}</span>
                  <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${subscriptionTone}`}>
                    {subscription?.status === 'active' || subscription?.status === 'privileged'
                      ? <CheckCircle2 className="w-3 h-3" />
                      : <Clock3 className="w-3 h-3" />}
                    {subscription?.label}
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-gray-500">{subscription?.detail}</p>

                {user.accessUntil && subscription?.dateLabel && (
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                    <span>{subscription.dateLabel}</span>
                    <span>{new Date(user.accessUntil).toLocaleDateString('ru-RU')}</span>
                  </div>
                )}
              </div>

              {!user.emailVerified && (
                <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-950">
                  <div className="flex items-start gap-2.5">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">{copy.verifyTitle}</p>
                      <p className="mt-1 text-xs leading-relaxed">
                        {copy.verifyBody}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={handleResendVerification}
                      disabled={isLoading}
                      className="rounded-lg border border-amber-400 bg-white px-3 py-1.5 text-xs font-medium hover:bg-amber-100 disabled:opacity-50"
                    >
                      {copy.resend}
                    </button>
                    <button
                      type="button"
                      onClick={handleRefreshVerification}
                      disabled={isLoading}
                      className="rounded-lg bg-amber-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-amber-800 disabled:opacity-50"
                    >
                      {copy.refresh}
                    </button>
                  </div>
                </div>
              )}

              <div className="bg-[#3B1E90] text-white p-5 rounded-xl shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#D9E6FF]" />
                  <h4 className="font-semibold text-sm">{copy.premiumTitle}</h4>
                </div>
                <p className="text-xs text-[#D9E6FF] leading-relaxed">
                  {copy.premiumBody}
                </p>

                {user.organizationAccess && (
                  <div className={`rounded-lg border p-3 text-xs ${user.organizationAccess.status === 'active' ? 'border-emerald-300/60 bg-emerald-400/15' : 'border-white/20 bg-white/10'}`}>
                    <div className="flex items-center gap-2 font-semibold"><Building2 className="h-4 w-4" />{user.organizationAccess.status === 'active' ? copy.organizationActive : copy.organizationInactive}</div>
                    <div className="mt-1 text-[#D9E6FF]">{user.organizationAccess.organizationName} · {formatAuthCopy(copy.until, { date: new Date(user.organizationAccess.accessUntil).toLocaleDateString(language) })}</div>
                  </div>
                )}

                <div className="pt-2 border-t border-white/10">
                  {subscription?.status === 'privileged' ? (
                    <span className="text-xs font-semibold text-indigo-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {copy.adminAccess}
                    </span>
                  ) : user.provider === 'lemonsqueezy' && (
                    user.subscriptionStatus === 'active'
                    || user.subscriptionStatus === 'cancelled'
                    || user.subscriptionStatus === 'past_due'
                    || user.subscriptionStatus === 'paused'
                  ) ? (
                    <button
                      onClick={handleSubscriptionPortal}
                      disabled={isUpgrading}
                      className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {isUpgrading ? copy.loading : copy.manage}
                    </button>
                  ) : (
                    <>
                      <fieldset disabled={isUpgrading || !user.emailVerified} className="space-y-2 mb-3 disabled:opacity-60">
                        <legend className="text-xs font-medium mb-2">{copy.chooseTerm}</legend>
                        {billingPlans.map(plan => (
                          <label key={plan.key} className={`flex items-center gap-2.5 rounded-lg border p-3 cursor-pointer ${selectedPlan === plan.key ? 'border-white/70 bg-white/15' : 'border-white/20 hover:bg-white/10'}`}>
                            <input type="radio" name="billing-plan" value={plan.key}
                              checked={selectedPlan === plan.key}
                              onChange={() => { setSelectedPlan(plan.key); setErrorMsg(''); }}
                              className="accent-white shrink-0" />
                            <span className="min-w-0 flex-1 text-xs">
                              <span className="flex flex-wrap justify-between gap-x-2 gap-y-1 font-semibold">
                                <span>{plan.title}</span><span className="whitespace-nowrap">{plan.formattedPrice}</span>
                              </span>
                              {plan.badge && <span className="block mt-1 text-[#D9E6FF]">{plan.badge}</span>}
                            </span>
                          </label>
                        ))}
                      </fieldset>
                      {!user.emailVerified && (
                        <p className="mb-3 text-xs font-medium text-amber-200">{copy.verifyToSubscribe}</p>
                      )}
                      <p className="text-xs text-[#D9E6FF] mb-3">{formatAuthCopy(copy.charge, { price: selectedPricing.formattedPrice, period: selectedPricing.billingLabel })}</p>
                      <button
                        onClick={handlePaymentCheckout}
                        disabled={isUpgrading || !user.emailVerified}
                        className="px-3.5 py-1.5 bg-[#C77B00] hover:bg-[#a37923] text-white rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs disabled:opacity-50"
                      >
                        {isUpgrading ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>{copy.processing}</span>
                          </>
                        ) : (
                          <>
                            <span>{formatAuthCopy(copy.buy, { price: selectedPricing.formattedPrice })}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </>
                  )}
                </div>
              </div>

              {user.organizationAccess?.status !== 'active' && (
                <form onSubmit={handleOrganizationCode} className="rounded-xl border border-[#D6DEE6] bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2 text-sm font-semibold"><KeyRound className="h-4 w-4 text-[#116EEE]" />{copy.organizationCodeTitle}</div>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">{copy.organizationCodeBody}</p>
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                    <input
                      value={organizationCode}
                      onChange={event => setOrganizationCode(event.target.value.toUpperCase())}
                      placeholder="MG-XXXX-XXXX-XXXX-XXXX"
                      autoCapitalize="characters"
                      spellCheck={false}
                      className="min-w-0 flex-1 rounded-lg border border-[#D6DEE6] px-3 py-2 font-mono text-xs focus:border-[#116EEE] focus:outline-none"
                    />
                    <button type="submit" disabled={isRedeemingCode || !organizationCode.trim()} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#116EEE] px-4 py-2 text-xs font-semibold text-white disabled:opacity-50">
                      {isRedeemingCode && <Loader2 className="h-4 w-4 animate-spin" />}{copy.activate}
                    </button>
                  </div>
                </form>
              )}

              <div className="pt-2 flex flex-wrap justify-between gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowDeletion(value => !value);
                    setErrorMsg('');
                    setSuccessMsg('');
                  }}
                  className="px-4 py-2 border border-red-300 bg-white hover:bg-red-50 text-red-700 rounded-xl text-xs font-medium transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>{copy.deleteAccount}</span>
                </button>
                <button
                  onClick={handleLogout}
                  disabled={isLoading}
                  className="px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-xl text-xs font-medium transition-colors cursor-pointer flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4 text-gray-500" />
                  <span>{copy.logout}</span>
                </button>
              </div>

              {showDeletion && (
                <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-red-950">
                  <h4 className="text-sm font-bold">{copy.deleteTitle}</h4>
                  <p className="mt-2 text-xs leading-relaxed">{copy.deleteLead}</p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-xs leading-relaxed">
                    {copy.deleteItems.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <p className="mt-3 text-xs leading-relaxed">
                    {copy.retention}
                  </p>

                  {deletionBlockedBySubscription ? (
                    <div className="mt-4 rounded-lg border border-red-300 bg-white p-3">
                      <p className="text-xs font-semibold leading-relaxed">
                        {copy.cancelFirst}
                      </p>
                      <button
                        type="button"
                        onClick={handleSubscriptionPortal}
                        disabled={isUpgrading}
                        className="mt-2 rounded-lg bg-[#3B1E90] px-3 py-1.5 text-xs font-medium text-white disabled:opacity-50"
                      >
                        {isUpgrading ? copy.loading : copy.openPortal}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleDeleteAccount} className="mt-4 space-y-3">
                      <div>
                        <label htmlFor="account-delete-password" className="block text-xs font-medium mb-1">
                          {copy.currentPassword}
                        </label>
                        <input
                          id="account-delete-password"
                          type="password"
                          autoComplete="current-password"
                          required
                          value={deletionPassword}
                          onChange={(event) => setDeletionPassword(event.target.value)}
                          className="w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-xs focus:outline-none focus:border-red-600"
                        />
                      </div>
                      <label className="flex items-start gap-2 text-xs leading-relaxed">
                        <input
                          type="checkbox"
                          checked={deletionConfirmed}
                          onChange={(event) => setDeletionConfirmed(event.target.checked)}
                          className="mt-0.5"
                        />
                        <span>{copy.deletionConsent}</span>
                      </label>
                      <button
                        type="submit"
                        disabled={isDeleting || !deletionPassword || !deletionConfirmed}
                        className="inline-flex items-center gap-2 rounded-lg bg-red-700 px-3 py-2 text-xs font-semibold text-white hover:bg-red-800 disabled:opacity-50"
                      >
                        {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                        {copy.deleteForever}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          ) : (
            /* AUTH FORM MODE (LOGIN / REGISTER) */
            <div>
              {mode !== 'reset' && (
                <div className="flex rounded-xl bg-[#EFE6D5] p-1 mb-5">
                  <button
                    type="button"
                    onClick={() => {
                      setMode('login');
                      setErrorMsg('');
                      setSuccessMsg('');
                    }}
                    className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                      mode === 'login'
                        ? 'bg-white text-[#116EEE] shadow-xs font-semibold'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {copy.loginTab}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMode('register');
                      setErrorMsg('');
                      setSuccessMsg('');
                    }}
                    className={`flex-1 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                      mode === 'register'
                        ? 'bg-white text-[#116EEE] shadow-xs font-semibold'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {copy.registerTab}
                  </button>
                </div>
              )}

              {mode === 'login' ? (
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="user-login-email" className="block text-xs font-medium text-gray-700 mb-1">
                      {copy.email}
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        id="user-login-email"
                        autoComplete="username"
                        autoCapitalize="none"
                        spellCheck={false}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="student@example.com"
                        className="w-full pl-9 pr-3 py-2 bg-white border border-[#D6DEE6] rounded-xl text-xs focus:outline-none focus:border-[#116EEE]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="user-login-password" className="block text-xs font-medium text-gray-700 mb-1">
                      {copy.password}
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        id="user-login-password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-9 pr-3 py-2 bg-white border border-[#D6DEE6] rounded-xl text-xs focus:outline-none focus:border-[#116EEE]"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        setMode('reset');
                        setErrorMsg('');
                        setSuccessMsg('');
                        setPassword('');
                      }}
                      className="text-xs font-medium text-[#116EEE] underline-offset-2 hover:underline"
                    >
                      {copy.forgot}
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2.5 bg-[#116EEE] hover:bg-[#0D5ED0] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 mt-2"
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <span>{copy.signIn}</span>
                    )}
                  </button>
                </form>
              ) : mode === 'reset' ? (
                <form onSubmit={handlePasswordReset} className="space-y-4">
                  <p className="text-sm leading-relaxed text-gray-600">
                    {copy.resetHelp}
                  </p>
                  <div>
                    <label htmlFor="user-reset-email" className="block text-xs font-medium text-gray-700 mb-1">
                      {copy.email}
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        id="user-reset-email"
                        autoComplete="email"
                        autoCapitalize="none"
                        spellCheck={false}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="student@example.com"
                        className="w-full pl-9 pr-3 py-2 bg-white border border-[#D6DEE6] rounded-xl text-xs focus:outline-none focus:border-[#116EEE]"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2.5 bg-[#116EEE] hover:bg-[#0D5ED0] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : copy.sendReset}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMode('login');
                      setErrorMsg('');
                      setSuccessMsg('');
                    }}
                    className="w-full py-2 text-xs font-medium text-[#116EEE] hover:underline"
                  >
                    {copy.backToLogin}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="user-register-email" className="block text-xs font-medium text-gray-700 mb-1">
                      {copy.yourEmail}
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        id="user-register-email"
                        autoComplete="username"
                        autoCapitalize="none"
                        spellCheck={false}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="student@example.com"
                        className="w-full pl-9 pr-3 py-2 bg-white border border-[#D6DEE6] rounded-xl text-xs focus:outline-none focus:border-[#116EEE]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="user-register-password" className="block text-xs font-medium text-gray-700 mb-1">
                      {copy.createPassword}
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        id="user-register-password"
                        autoComplete="new-password"
                        minLength={6}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-9 pr-3 py-2 bg-white border border-[#D6DEE6] rounded-xl text-xs focus:outline-none focus:border-[#116EEE]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="user-register-confirm" className="block text-xs font-medium text-gray-700 mb-1">
                      {copy.repeatPassword}
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        id="user-register-confirm"
                        autoComplete="new-password"
                        minLength={6}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-9 pr-3 py-2 bg-white border border-[#D6DEE6] rounded-xl text-xs focus:outline-none focus:border-[#116EEE]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2.5 bg-[#116EEE] hover:bg-[#0D5ED0] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 mt-2"
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <span>{copy.register}</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
