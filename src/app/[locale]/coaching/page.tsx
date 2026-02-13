import { getTranslations } from 'next-intl/server';
import ScrollReveal from '@/components/ScrollReveal';
import QuoteBlock from '@/components/QuoteBlock';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { Link } from '@/i18n/routing';
import { MessageCircle, Users, Video, Lightbulb, Sparkles, ArrowRight, Check, User } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return { title: locale === 'de' ? 'Coaching' : 'Coaching' };
}

export default async function CoachingPage() {
  const t = await getTranslations();

  const stepIcons = [MessageCircle, Users, Video, Lightbulb, Sparkles];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-forest-800 to-forest-700 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              {t('coaching.heroHeadline')}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('coaching.heroSubline')}
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-forest-700 font-medium rounded-full hover:bg-cream-100 transition-all shadow-elevated hover:-translate-y-0.5 transform text-lg"
            >
              {t('coaching.bookNow')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-forest-800 text-center mb-16">
              {t('coaching.processHeadline')}
            </h2>
          </ScrollReveal>

          <div className="space-y-0">
            {stepIcons.map((Icon, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Timeline connecting line */}
                  {index < 4 && (
                    <div className="absolute left-6 top-14 w-0.5 h-full bg-sage-200" />
                  )}
                  {/* Step number + icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-sage-100 border-2 border-sage-300 flex items-center justify-center shadow-soft">
                      <Icon className="w-6 h-6 text-sage-600" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-forest-700 text-white text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="font-heading text-xl font-semibold text-forest-800 mb-2">
                      {t(`coaching.steps.${index}.title`)}
                    </h3>
                    <p className="text-forest-700/70 leading-relaxed">
                      {t(`coaching.steps.${index}.description`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Payment note */}
          <ScrollReveal>
            <p className="text-center text-warm-gray-500 mt-12 text-lg italic">
              {t('coaching.payment')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block px-6 py-2.5 bg-gold-100 text-gold-700 rounded-full text-base font-medium mb-6">
                {t('coachingTeaser.badge')}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-forest-800">
                {t('coachingTeaser.headline')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Single Session Card */}
            <ScrollReveal delay={0}>
              <div className="bg-cream-50 rounded-3xl p-8 lg:p-10 h-full flex flex-col border border-sand-200 hover:shadow-soft-lg transition-all">
                <div className="mb-2">
                  <h3 className="font-heading text-2xl font-semibold text-forest-800">
                    {t('coachingTeaser.single.name')}
                  </h3>
                  <p className="text-warm-gray-400 mt-1 text-sm">
                    {t('coachingTeaser.single.sessions')}
                  </p>
                </div>
                <div className="mt-6">
                  <span className="text-warm-gray-300 line-through text-xl">
                    {t('coachingTeaser.single.oldPrice')}
                  </span>
                  <span className="block font-heading text-5xl font-bold text-forest-700 mt-2">
                    {t('coachingTeaser.single.price')}
                  </span>
                  <span className="text-warm-gray-400 mt-1 block text-sm">
                    {t('coachingTeaser.single.perSession')}
                  </span>
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  <li className="flex items-start gap-3 text-forest-700/70">
                    <Check className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
                    <span>60 min via Zoom</span>
                  </li>
                  <li className="flex items-start gap-3 text-forest-700/70">
                    <Check className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-start gap-3 text-forest-700/70">
                    <Check className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
                    <span>Personal intake conversation</span>
                  </li>
                </ul>
                <a
                  href="#book"
                  className="mt-8 block w-full text-center px-6 py-4 border-2 border-forest-400 text-forest-600 font-medium rounded-full hover:bg-forest-50 transition-colors text-lg"
                >
                  {t('coaching.bookNow')}
                </a>
              </div>
            </ScrollReveal>

            {/* 6-Pack Card */}
            <ScrollReveal delay={0.1}>
              <div className="bg-cream-50 rounded-3xl p-8 lg:p-10 h-full flex flex-col border border-sand-200 hover:shadow-soft-lg transition-all">
                <div className="mb-2">
                  <h3 className="font-heading text-2xl font-semibold text-forest-800">
                    {t('coachingTeaser.six.name')}
                  </h3>
                  <p className="text-warm-gray-400 mt-1 text-sm">
                    {t('coachingTeaser.six.sessions')}
                  </p>
                </div>
                <div className="mt-6">
                  <span className="text-warm-gray-300 line-through text-xl">
                    {t('coachingTeaser.six.oldPrice')}
                  </span>
                  <span className="block font-heading text-5xl font-bold text-forest-700 mt-2">
                    {t('coachingTeaser.six.price')}
                  </span>
                  <span className="text-warm-gray-400 mt-1 block text-sm">
                    {t('coachingTeaser.six.perSession')}
                  </span>
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  <li className="flex items-start gap-3 text-forest-700/70">
                    <Check className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
                    <span>6 x 60 min via Zoom</span>
                  </li>
                  <li className="flex items-start gap-3 text-forest-700/70">
                    <Check className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
                    <span>Personal intake conversation</span>
                  </li>
                  <li className="flex items-start gap-3 text-forest-700/70">
                    <Check className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
                    <span>Exercises between sessions</span>
                  </li>
                  <li className="flex items-start gap-3 text-forest-700/70">
                    <Check className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" />
                    <span>Personalized action plan</span>
                  </li>
                </ul>
                <a
                  href="#book"
                  className="mt-8 block w-full text-center px-6 py-4 border-2 border-forest-400 text-forest-600 font-medium rounded-full hover:bg-forest-50 transition-colors text-lg"
                >
                  {t('coaching.bookNow')}
                </a>
              </div>
            </ScrollReveal>

            {/* 12-Pack Card (Most Popular) */}
            <ScrollReveal delay={0.2}>
              <div className="relative bg-gradient-to-b from-forest-800 to-forest-700 rounded-3xl p-8 lg:p-10 h-full flex flex-col text-white shadow-elevated border-2 border-gold-400">
                {/* Popular badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-5 py-1.5 bg-gradient-to-r from-gold-400 to-gold-500 text-white text-sm font-bold rounded-full uppercase tracking-wide shadow-warm whitespace-nowrap">
                    {t('coachingTeaser.twelve.popular')}
                  </span>
                </div>
                <div className="mb-2 mt-2">
                  <h3 className="font-heading text-2xl font-semibold">
                    {t('coachingTeaser.twelve.name')}
                  </h3>
                  <p className="text-white/60 mt-1 text-sm">
                    {t('coachingTeaser.twelve.sessions')}
                  </p>
                </div>
                <div className="mt-6">
                  <span className="text-white/40 line-through text-xl">
                    {t('coachingTeaser.twelve.oldPrice')}
                  </span>
                  <span className="block font-heading text-5xl font-bold mt-2">
                    {t('coachingTeaser.twelve.price')}
                  </span>
                  <span className="text-white/60 mt-1 block text-sm">
                    {t('coachingTeaser.twelve.perSession')}
                  </span>
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  <li className="flex items-start gap-3 text-white/80">
                    <Check className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>12 x 60 min via Zoom</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <Check className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>Personal intake conversation</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <Check className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>Exercises between sessions</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <Check className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>Full transformation journey</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <Check className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>Ongoing support &amp; integration</span>
                  </li>
                </ul>
                <a
                  href="#book"
                  className="mt-8 block w-full text-center px-6 py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-white font-medium rounded-full hover:opacity-90 transition-all shadow-warm text-lg"
                >
                  {t('coaching.bookNow')}
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* VAT Note */}
          <ScrollReveal>
            <p className="text-center text-sm text-warm-gray-400 mt-8">
              {t('coachingTeaser.vatNote')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Calendly Booking */}
      <section id="book" className="py-16 md:py-24 bg-sand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-forest-800 text-center mb-4">
              {t('coaching.bookNow')}
            </h2>
            <p className="text-center text-warm-gray-500 mb-10">
              {t('coaching.payment')}
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <CalendlyEmbed />
          </ScrollReveal>
        </div>
      </section>

      {/* Quote – Investment */}
      <QuoteBlock quote={t('quotes.investment')} author={t('quotes.author')} variant="fullwidth" />

      {/* Coaching Scenarios */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-forest-800 text-center mb-4">
              {t('coaching.scenariosHeadline')}
            </h2>
            <p className="text-center text-warm-gray-400 text-sm max-w-2xl mx-auto mb-16">
              {t('coaching.scenariosDisclaimer')}
            </p>
          </ScrollReveal>

          <div className="space-y-12">
            {[0, 1, 2].map((index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-soft-lg transition-all">
                  {/* Scenario Header */}
                  <div className="bg-gradient-to-r from-sage-100 to-sand-100 p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-forest-700/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-forest-700" />
                      </div>
                      <span className="text-sm font-medium text-sage-600 uppercase tracking-wide">
                        {t(`coaching.scenarios.${index}.name`)}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-forest-800">
                      {t(`coaching.scenarios.${index}.title`)}
                    </h3>
                    <p className="mt-3 text-forest-700/70 leading-relaxed">
                      {t(`coaching.scenarios.${index}.intro`)}
                    </p>
                  </div>
                  {/* Scenario Timeline / Weeks */}
                  <div className="p-6 md:p-8">
                    <div className="space-y-3">
                      {[0, 1, 2, 3, 4, 5].map((weekIndex) => (
                        <div key={weekIndex} className="flex gap-4 items-start">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-50 border border-sage-200 flex items-center justify-center">
                            <span className="text-xs font-bold text-sage-600">{weekIndex + 1}</span>
                          </div>
                          <p className="text-forest-700/70 text-sm leading-relaxed pt-1.5">
                            {t(`coaching.scenarios.${index}.weeks.${weekIndex}`)}
                          </p>
                        </div>
                      ))}
                    </div>
                    {/* Result */}
                    <div className="mt-8 p-5 bg-gradient-to-r from-sage-50 to-sand-50 rounded-xl border border-sage-100">
                      <p className="text-forest-700 font-medium text-sm leading-relaxed">
                        <span className="text-sage-600 font-bold mr-2">&#10003;</span>
                        {t(`coaching.scenarios.${index}.result`)}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Coaching Principles */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-forest-800 text-center mb-16">
              {t('coaching.principlesHeadline')}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {Array.from({ length: 10 }, (_, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="flex gap-5 p-6 rounded-xl bg-sand-50 hover:bg-sand-100 transition-colors h-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest-700 text-white flex items-center justify-center font-heading font-bold text-lg shadow-soft">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold text-forest-800 mb-1">
                      {t(`coaching.principles.${index}.title`)}
                    </h3>
                    <p className="text-forest-700/70 text-sm leading-relaxed">
                      {t(`coaching.principles.${index}.description`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final Quote – Silence */}
      <section className="py-12 md:py-16 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <QuoteBlock quote={t('quotes.silence')} author={t('quotes.author')} variant="centered" />
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-forest-800 to-forest-700 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
              {t('coachingTeaser.headline')}
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              {t('coaching.heroSubline')}
            </p>
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-white font-medium rounded-full hover:opacity-90 transition-all shadow-warm hover:-translate-y-0.5 transform text-lg"
            >
              {t('coaching.bookNow')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
