import type { InstructionLanguage } from './types';

export interface LegalSectionCopy { title: string; paragraphs: readonly string[] }
export interface LegalPageCopy { eyebrow: string; title: string; intro: string; sections: readonly LegalSectionCopy[] }
interface LegalCopy {
  updated: string;
  lastUpdated: string;
  productTitle: string;
  productSummary: string;
  periods: Record<'monthly' | 'quarterly' | 'yearly', string>;
  terms: LegalPageCopy;
  privacy: LegalPageCopy;
  refund: LegalPageCopy;
}

const en: LegalCopy = {
  updated: 'September 8, 2026', lastUpdated: 'Last updated', productTitle: 'Product summary',
  productSummary: 'Magyaro is a premade digital Hungarian self-study course. Lessons 1–2 are free. Premium unlocks lessons 3–28 for the selected subscription period at the price shown at checkout. Subscriptions renew until cancelled. The initial Premium payment has a 14-day money-back guarantee. Lemon Squeezy is intended to process payments as Merchant of Record.',
  periods: { monthly: '1 month', quarterly: '3 months', yearly: '1 year' },
  terms: { eyebrow: 'Legal · Terms of Service', title: 'Terms of Service', intro: 'These Terms govern access to the Magyaro website and digital Hungarian-language course.', sections: [
    { title: '1. About Magyaro', paragraphs: ['Magyaro is a premade digital product for self-study of Hungarian. It includes 28 interactive A0–B1 lessons, exercises, recorded audio, vocabulary review, and progress tracking.', 'Magyaro does not provide consulting, agency work, custom development, or one-to-one tutoring.'] },
    { title: '2. Free and Premium access', paragraphs: ['Lessons 1–2 are free. Lessons 3–28 and Premium features require an active paid subscription for 1 month, 3 months, or 1 year. The selected price is confirmed at checkout.'] },
    { title: '3. Accounts', paragraphs: ['An account is required to save progress and use Premium. Users must provide a valid email, protect their password, and not share account access.'] },
    { title: '4. Subscription, payment, and renewal', paragraphs: ['Unless checkout states otherwise, subscriptions renew automatically for the selected period until cancelled. Lemon Squeezy is intended to act as Merchant of Record. The final amount, currency, taxes, and terms are shown before purchase.'] },
    { title: '5. Cancelling a subscription', paragraphs: ['Cancel before the next renewal through Customer Portal or the purchase receipt. Unless law requires otherwise, Premium remains available until the paid period ends.'] },
    { title: '6. Refunds', paragraphs: ['The separate Refund Policy forms part of these Terms.'] },
    { title: '7. Licence and intellectual property', paragraphs: ['Users receive a limited, personal, non-exclusive, non-transferable licence for personal learning. Copying, bulk downloading, reselling, publishing materials, or giving paid access to others is prohibited.'] },
    { title: '8. Acceptable use', paragraphs: ['Users may not bypass access controls, interfere with the service, automatically extract protected content, use another person’s account without permission, or violate applicable law.'] },
    { title: '9. Educational results', paragraphs: ['Magyaro does not guarantee an exam, academic, immigration, employment, or certification result. Results depend on individual effort and circumstances.'] },
    { title: '10. Availability and changes', paragraphs: ['We may correct errors, update lessons, improve features, and perform maintenance. Material changes will not be applied retroactively to an already-paid period.'] },
    { title: '11. Consumer rights', paragraphs: ['These Terms do not limit mandatory consumer rights that cannot legally be waived in the user’s country of residence.'] },
    { title: '12. Contact', paragraphs: ['For account, billing, or Terms questions, use the support channel shown in your purchase receipt or Lemon Squeezy email.'] },
  ] },
  privacy: { eyebrow: 'Legal · Privacy Policy', title: 'Privacy Policy', intro: 'This Policy explains what information is processed to operate Magyaro and why.', sections: [
    { title: '1. Information we process', paragraphs: ['We may process an email, technical account identifier, account creation date, and authentication information.', 'Learning data may include viewed lessons and slides, exercise and quiz results, vocabulary review state, and synchronised progress. For Premium, we may store subscription status and technical order identifiers. Magyaro does not store full payment-card details.'] },
    { title: '2. How we use information', paragraphs: ['We use information to protect accounts, provide lessons, synchronise progress, verify Premium, support users, prevent abuse, secure the service, and meet legal obligations.'] },
    { title: '3. Legal bases', paragraphs: ['Processing may be needed to perform a contract, meet legal obligations, operate a safe service, or rely on consent where required.'] },
    { title: '4. Service providers', paragraphs: ['Magyaro uses Google Firebase for authentication, backend infrastructure, and operational data. Lemon Squeezy is intended to act as Merchant of Record and processes payments under its own terms.'] },
    { title: '5. Browser storage', paragraphs: ['The browser may store session information, language preference, and a local progress cache. Magyaro does not currently use advertising trackers.'] },
    { title: '6. Sharing and international processing', paragraphs: ['Information is shared only with providers needed for infrastructure, payments, security, or legal compliance. They may process data in other countries using legally required safeguards.'] },
    { title: '7. Data retention', paragraphs: ['Account and progress data are retained while needed for the service, security, disputes, or law. Payment records may be retained for accounting, tax, fraud prevention, refunds, and disputes.'] },
    { title: '8. Account deletion', paragraphs: ['Self-service deletion removes the Firebase Authentication account, Magyaro profile, progress, results, settings, review cards, entitlement, and the account cache on the current device. An organization seat is released, while a redeemed key is never reusable. Retained organization history is pseudonymised where applicable. Deletion is permanent.', 'An active, paused, or past-due Lemon Squeezy subscription must first be cancelled in Customer Portal. Deleting a cancelled subscription account immediately removes any remaining Premium access.', 'Required billing and webhook records are retained separately with direct UID links removed where possible. A minimal pseudonymous marker may remain to prevent later webhooks from recreating deleted access.'] },
    { title: '9. Your rights', paragraphs: ['Depending on applicable law, users may request access, correction, deletion, restriction, or a copy of personal data, object to certain processing, and complain to a data-protection authority.'] },
    { title: '10. Security', paragraphs: ['We use technical and organisational measures to protect accounts and data, but no online service can guarantee absolute security.'] },
    { title: '11. Children', paragraphs: ['Where local law requires parental or guardian consent, it must be obtained before a child’s account is created.'] },
    { title: '12. Privacy requests', paragraphs: ['Use the Magyaro support channel and identify the account email. Never send a password, CVV, or full payment-card details.'] },
  ] },
  refund: { eyebrow: 'Legal · Refund Policy', title: 'Refund Policy', intro: 'This Policy explains refund eligibility for a Magyaro Premium digital subscription.', sections: [
    { title: '1. 14-day guarantee for the initial payment', paragraphs: ['The first Premium subscription payment has a 14-day money-back guarantee. Submit the request no later than 14 calendar days after that payment.'] },
    { title: '2. Automatic renewal payments', paragraphs: ['The guarantee applies to the initial payment and does not normally cover later renewals. Cancel at least 24 hours before renewal to avoid the next charge.', 'Mandatory consumer rights and appropriate refunds for duplicate or erroneous charges remain unaffected.'] },
    { title: '3. How to request a refund', paragraphs: ['Use the support channel in the Lemon Squeezy receipt. Include the purchase email, date, and reason. Never send full card details, CVV, passwords, or banking codes.'] },
    { title: '4. Refund processing', paragraphs: ['As Merchant of Record, Lemon Squeezy may process approved refunds under this Policy, applicable law, and its payment rules.'] },
    { title: '5. Time to receive the money', paragraphs: ['After approval, timing depends on the payment method and bank. Payment-network processing may take up to 10 days.'] },
    { title: '6. Cancellation is not automatically a refund', paragraphs: ['Cancellation stops future renewals but does not automatically reverse a paid period. Access normally continues until that period ends unless a refund is approved or law requires otherwise.'] },
  ] },
};

const ru: LegalCopy = {
  updated: '8 сентября 2026 г.', lastUpdated: 'Последнее обновление', productTitle: 'Кратко о продукте',
  productSummary: 'Magyaro — готовый цифровой курс венгерского языка для самостоятельного обучения. Уроки 1–2 бесплатны. Premium открывает уроки 3–28 на выбранный срок по цене, указанной при оформлении. Подписка продлевается до отмены. На первый платёж Premium действует 14-дневная гарантия возврата. Платежи предполагается обрабатывать через Lemon Squeezy как Merchant of Record.',
  periods: { monthly: '1 месяц', quarterly: '3 месяца', yearly: '1 год' },
  terms: { eyebrow: 'Правовая информация · Условия', title: 'Условия использования', intro: 'Эти Условия регулируют доступ к сайту Magyaro и цифровому курсу венгерского языка.', sections: [
    { title: '1. О Magyaro', paragraphs: ['Magyaro — готовый цифровой продукт для самостоятельного изучения венгерского. Он включает 28 интерактивных уроков A0–B1, упражнения, записанное аудио, повторение слов и прогресс.', 'Magyaro не предоставляет консультации, агентские услуги, заказную разработку или индивидуальные занятия.'] },
    { title: '2. Бесплатный и Premium-доступ', paragraphs: ['Уроки 1–2 бесплатны. Для уроков 3–28 и функций Premium нужна активная подписка на 1 месяц, 3 месяца или 1 год. Цена подтверждается при оформлении.'] },
    { title: '3. Аккаунты', paragraphs: ['Аккаунт нужен для сохранения прогресса и Premium. Пользователь обязан указать действующий email, защищать пароль и не передавать доступ другим.'] },
    { title: '4. Подписка, оплата и продление', paragraphs: ['Если при оформлении не указано иное, подписка автоматически продлевается до отмены. Предполагается, что Lemon Squeezy выступает Merchant of Record. Сумма, валюта, налоги и условия видны до покупки.'] },
    { title: '5. Отмена подписки', paragraphs: ['Отмените подписку до следующего продления через Customer Portal или по инструкции в чеке. Если закон не требует иного, Premium действует до конца оплаченного периода.'] },
    { title: '6. Возвраты', paragraphs: ['Отдельная Политика возвратов является частью этих Условий.'] },
    { title: '7. Лицензия и интеллектуальная собственность', paragraphs: ['Пользователь получает ограниченную личную неисключительную непередаваемую лицензию для обучения. Копирование, массовое скачивание, перепродажа, публикация и передача платного доступа запрещены.'] },
    { title: '8. Допустимое использование', paragraphs: ['Запрещено обходить контроль доступа, мешать сервису, автоматически извлекать защищённый контент, пользоваться чужим аккаунтом без разрешения или нарушать закон.'] },
    { title: '9. Результаты обучения', paragraphs: ['Magyaro не гарантирует результат экзамена, учёбы, иммиграции, трудоустройства или сертификации. Результат зависит от усилий и обстоятельств пользователя.'] },
    { title: '10. Доступность и изменения', paragraphs: ['Мы можем исправлять ошибки, обновлять уроки, улучшать функции и проводить обслуживание. Существенные изменения не применяются задним числом к оплаченному периоду.'] },
    { title: '11. Права потребителей', paragraphs: ['Эти Условия не ограничивают обязательные права потребителя, от которых нельзя законно отказаться в стране проживания.'] },
    { title: '12. Контакты', paragraphs: ['По вопросам аккаунта, оплаты или Условий используйте канал поддержки из чека или письма Lemon Squeezy.'] },
  ] },
  privacy: { eyebrow: 'Правовая информация · Конфиденциальность', title: 'Политика конфиденциальности', intro: 'Здесь объясняется, какие данные обрабатываются для работы Magyaro и зачем.', sections: [
    { title: '1. Какие данные мы обрабатываем', paragraphs: ['Мы можем обрабатывать email, технический идентификатор аккаунта, дату создания и сведения для аутентификации.', 'Учебные данные могут включать просмотренные уроки и слайды, результаты, состояние повторения слов и прогресс. Для Premium могут храниться статус подписки и идентификаторы заказа. Magyaro не хранит полные данные карты.'] },
    { title: '2. Как используются данные', paragraphs: ['Данные нужны для защиты аккаунтов, показа уроков, синхронизации прогресса, проверки Premium, поддержки, предотвращения злоупотреблений, безопасности и выполнения закона.'] },
    { title: '3. Правовые основания', paragraphs: ['Обработка может быть нужна для исполнения договора, выполнения закона, безопасной работы сервиса или основываться на согласии, когда оно требуется.'] },
    { title: '4. Поставщики услуг', paragraphs: ['Magyaro использует Google Firebase для аутентификации, серверной инфраструктуры и рабочих данных. Lemon Squeezy предполагается использовать как Merchant of Record по его собственным условиям.'] },
    { title: '5. Данные в браузере', paragraphs: ['Браузер может хранить сведения о сессии, выбранный язык и локальный кэш прогресса. Сейчас Magyaro не использует рекламные трекеры.'] },
    { title: '6. Передача и международная обработка', paragraphs: ['Данные передаются только поставщикам инфраструктуры, платежей, безопасности или для соблюдения закона. Они могут обрабатывать данные в других странах с предусмотренными законом гарантиями.'] },
    { title: '7. Срок хранения', paragraphs: ['Данные аккаунта и прогресса хранятся, пока нужны для сервиса, безопасности, споров или закона. Платёжные записи могут храниться для бухгалтерии, налогов, предотвращения мошенничества, возвратов и споров.'] },
    { title: '8. Удаление аккаунта', paragraphs: ['Самостоятельное удаление стирает аккаунт Firebase Authentication, профиль Magyaro, прогресс, результаты, настройки, карточки повторения, entitlement и кэш аккаунта на текущем устройстве. Место в организации освобождается, но использованный ключ не становится доступным повторно. Сохраняемая история по возможности псевдонимизируется. Удаление необратимо.', 'Активную, приостановленную или просроченную подписку Lemon Squeezy сначала нужно отменить в Customer Portal. При немедленном удалении отменённой подписки оставшийся Premium-доступ теряется.', 'Требуемые billing- и webhook-записи хранятся отдельно; прямые ссылки на UID по возможности удаляются. Минимальный псевдонимный маркер может сохраняться, чтобы поздний webhook не восстановил доступ.'] },
    { title: '9. Ваши права', paragraphs: ['В зависимости от закона пользователь может запросить доступ, исправление, удаление, ограничение или копию данных, возразить против обработки и обратиться в орган по защите данных.'] },
    { title: '10. Безопасность', paragraphs: ['Мы применяем технические и организационные меры защиты, но ни один онлайн-сервис не гарантирует абсолютную безопасность.'] },
    { title: '11. Дети', paragraphs: ['Если закон требует согласия родителя или опекуна, его необходимо получить до создания аккаунта ребёнка.'] },
    { title: '12. Запросы о конфиденциальности', paragraphs: ['Используйте канал поддержки Magyaro и укажите email аккаунта. Никогда не отправляйте пароль, CVV или полные данные карты.'] },
  ] },
  refund: { eyebrow: 'Правовая информация · Возвраты', title: 'Политика возвратов', intro: 'Здесь описаны условия возврата за цифровую подписку Magyaro Premium.', sections: [
    { title: '1. 14-дневная гарантия для первого платежа', paragraphs: ['На первый платёж Premium действует 14-дневная гарантия возврата. Подайте запрос не позднее 14 календарных дней после платежа.'] },
    { title: '2. Автоматические продления', paragraphs: ['Гарантия относится к первому платежу и обычно не покрывает последующие продления. Отмените подписку минимум за 24 часа до продления.', 'Обязательные права потребителей и обоснованные возвраты при двойном или ошибочном списании сохраняются.'] },
    { title: '3. Как запросить возврат', paragraphs: ['Используйте канал поддержки из чека Lemon Squeezy. Укажите email покупки, дату и причину. Не отправляйте данные карты, CVV, пароль или банковские коды.'] },
    { title: '4. Обработка возврата', paragraphs: ['Как Merchant of Record, Lemon Squeezy может обрабатывать одобренные возвраты по этой Политике, закону и своим платёжным правилам.'] },
    { title: '5. Срок поступления денег', paragraphs: ['После одобрения срок зависит от способа оплаты и банка. Обработка платёжной сетью может занять до 10 дней.'] },
    { title: '6. Отмена не означает автоматический возврат', paragraphs: ['Отмена прекращает будущие продления, но не возвращает автоматически оплаченный период. Доступ обычно действует до конца периода, если возврат не одобрен или закон не требует иного.'] },
  ] },
};

const es: LegalCopy = {
  updated: '8 de septiembre de 2026', lastUpdated: 'Última actualización', productTitle: 'Resumen del producto',
  productSummary: 'Magyaro es un curso digital de húngaro ya preparado para estudiar por cuenta propia. Las lecciones 1–2 son gratuitas. Premium desbloquea las lecciones 3–28 durante el periodo elegido al precio indicado al pagar. La suscripción se renueva hasta que se cancele. El primer pago Premium tiene una garantía de devolución de 14 días. Está previsto que Lemon Squeezy procese los pagos como Merchant of Record.',
  periods: { monthly: '1 mes', quarterly: '3 meses', yearly: '1 año' },
  terms: { eyebrow: 'Información legal · Condiciones', title: 'Condiciones del servicio', intro: 'Estas Condiciones regulan el acceso al sitio Magyaro y al curso digital de húngaro.', sections: [
    { title: '1. Acerca de Magyaro', paragraphs: ['Magyaro es un producto digital ya preparado para estudiar húngaro. Incluye 28 lecciones interactivas A0–B1, ejercicios, audio grabado, repaso de vocabulario y seguimiento del progreso.', 'Magyaro no presta consultoría, servicios de agencia, desarrollo a medida ni clases individuales.'] },
    { title: '2. Acceso gratuito y Premium', paragraphs: ['Las lecciones 1–2 son gratuitas. Las lecciones 3–28 y Premium requieren una suscripción de 1 mes, 3 meses o 1 año. El precio se confirma al pagar.'] },
    { title: '3. Cuentas', paragraphs: ['Se necesita una cuenta para guardar el progreso y usar Premium. El usuario debe proporcionar un email válido, proteger su contraseña y no compartir el acceso.'] },
    { title: '4. Suscripción, pago y renovación', paragraphs: ['Salvo indicación distinta en el checkout, la suscripción se renueva hasta su cancelación. Está previsto que Lemon Squeezy actúe como Merchant of Record. El importe, moneda, impuestos y condiciones aparecen antes de comprar.'] },
    { title: '5. Cancelación', paragraphs: ['Cancela antes de la siguiente renovación en Customer Portal o siguiendo el recibo. Salvo obligación legal distinta, Premium continúa hasta el final del periodo pagado.'] },
    { title: '6. Reembolsos', paragraphs: ['La Política de reembolsos forma parte de estas Condiciones.'] },
    { title: '7. Licencia y propiedad intelectual', paragraphs: ['El usuario recibe una licencia limitada, personal, no exclusiva e intransferible. Se prohíbe copiar, descargar en masa, revender, publicar materiales o dar acceso de pago a terceros.'] },
    { title: '8. Uso aceptable', paragraphs: ['No se permite eludir controles de acceso, interferir con el servicio, extraer contenido protegido automáticamente, usar cuentas ajenas sin permiso ni infringir la ley.'] },
    { title: '9. Resultados educativos', paragraphs: ['Magyaro no garantiza resultados académicos, migratorios, laborales, de examen o certificación. Dependen del esfuerzo y las circunstancias individuales.'] },
    { title: '10. Disponibilidad y cambios', paragraphs: ['Podemos corregir errores, actualizar lecciones, mejorar funciones y realizar mantenimiento. Los cambios sustanciales no se aplicarán retroactivamente a un periodo pagado.'] },
    { title: '11. Derechos del consumidor', paragraphs: ['Estas Condiciones no limitan derechos obligatorios del consumidor que no puedan renunciarse en su país de residencia.'] },
    { title: '12. Contacto', paragraphs: ['Para preguntas de cuenta, pagos o Condiciones, usa el canal de soporte del recibo o email de Lemon Squeezy.'] },
  ] },
  privacy: { eyebrow: 'Información legal · Privacidad', title: 'Política de privacidad', intro: 'Esta Política explica qué información se trata para operar Magyaro y por qué.', sections: [
    { title: '1. Información que tratamos', paragraphs: ['Podemos tratar el email, identificador técnico, fecha de creación e información de autenticación.', 'Los datos de aprendizaje pueden incluir lecciones y diapositivas vistas, resultados, estado de repaso y progreso. Para Premium podemos guardar el estado de suscripción e identificadores del pedido. Magyaro no guarda datos completos de tarjetas.'] },
    { title: '2. Cómo usamos la información', paragraphs: ['La usamos para proteger cuentas, ofrecer lecciones, sincronizar progreso, verificar Premium, atender a usuarios, evitar abusos, proteger el servicio y cumplir la ley.'] },
    { title: '3. Bases jurídicas', paragraphs: ['El tratamiento puede ser necesario para ejecutar un contrato, cumplir la ley, operar un servicio seguro o basarse en consentimiento cuando sea obligatorio.'] },
    { title: '4. Proveedores', paragraphs: ['Magyaro usa Google Firebase para autenticación, infraestructura y datos operativos. Está previsto que Lemon Squeezy actúe como Merchant of Record bajo sus propias condiciones.'] },
    { title: '5. Almacenamiento del navegador', paragraphs: ['El navegador puede guardar sesión, idioma y una caché local del progreso. Magyaro no usa actualmente rastreadores publicitarios.'] },
    { title: '6. Compartición y tratamiento internacional', paragraphs: ['La información solo se comparte con proveedores necesarios para infraestructura, pagos, seguridad o cumplimiento legal. Pueden tratarla en otros países con las garantías aplicables.'] },
    { title: '7. Conservación', paragraphs: ['Los datos de cuenta y progreso se conservan mientras sean necesarios para el servicio, seguridad, disputas o ley. Los registros de pago pueden conservarse por contabilidad, impuestos, fraude, reembolsos y disputas.'] },
    { title: '8. Eliminación de la cuenta', paragraphs: ['La eliminación autoservicio borra la cuenta de Firebase Authentication, el perfil Magyaro, progreso, resultados, ajustes, tarjetas de repaso, entitlement y caché de la cuenta en el dispositivo actual. Se libera la plaza de organización, pero una clave canjeada no vuelve a ser reutilizable. El historial conservado se seudonimiza cuando corresponde. La eliminación es permanente.', 'Una suscripción de Lemon Squeezy activa, pausada o vencida debe cancelarse primero en Customer Portal. Al eliminar de inmediato una cuenta con suscripción cancelada se pierde el acceso Premium restante.', 'Los registros de facturación y webhook exigidos se conservan por separado, eliminando enlaces directos al UID cuando sea posible. Puede quedar un marcador seudónimo mínimo para impedir que un webhook posterior recree el acceso.'] },
    { title: '9. Tus derechos', paragraphs: ['Según la ley, puedes solicitar acceso, corrección, eliminación, limitación o copia de tus datos, oponerte a ciertos tratamientos y reclamar ante una autoridad de protección de datos.'] },
    { title: '10. Seguridad', paragraphs: ['Aplicamos medidas técnicas y organizativas, pero ningún servicio en línea puede garantizar seguridad absoluta.'] },
    { title: '11. Menores', paragraphs: ['Si la ley exige consentimiento parental o del tutor, debe obtenerse antes de crear la cuenta del menor.'] },
    { title: '12. Solicitudes de privacidad', paragraphs: ['Usa el canal de soporte de Magyaro e indica el email de la cuenta. Nunca envíes contraseña, CVV ni datos completos de tarjeta.'] },
  ] },
  refund: { eyebrow: 'Información legal · Reembolsos', title: 'Política de reembolsos', intro: 'Esta Política explica cuándo puede reembolsarse una suscripción digital Magyaro Premium.', sections: [
    { title: '1. Garantía de 14 días para el primer pago', paragraphs: ['El primer pago Premium tiene una garantía de devolución de 14 días. Solicítala como máximo 14 días naturales después del pago.'] },
    { title: '2. Renovaciones automáticas', paragraphs: ['La garantía se aplica al primer pago y normalmente no cubre renovaciones posteriores. Cancela al menos 24 horas antes para evitar el siguiente cargo.', 'No se limitan los derechos obligatorios ni los reembolsos apropiados por cargos duplicados o erróneos.'] },
    { title: '3. Cómo solicitar un reembolso', paragraphs: ['Usa el canal de soporte del recibo de Lemon Squeezy. Incluye email de compra, fecha y motivo. Nunca envíes datos completos de tarjeta, CVV, contraseña ni códigos bancarios.'] },
    { title: '4. Tramitación', paragraphs: ['Como Merchant of Record, Lemon Squeezy puede tramitar reembolsos aprobados según esta Política, la ley y sus reglas de pago.'] },
    { title: '5. Plazo de recepción', paragraphs: ['Tras la aprobación, el plazo depende del método y del banco. La red de pagos puede tardar hasta 10 días.'] },
    { title: '6. Cancelar no reembolsa automáticamente', paragraphs: ['La cancelación detiene renovaciones futuras, pero no revierte automáticamente un periodo pagado. El acceso suele continuar hasta su fin salvo reembolso aprobado u obligación legal.'] },
  ] },
};

export const LEGAL_COPY: Record<InstructionLanguage, LegalCopy> = { ru, en, es };
