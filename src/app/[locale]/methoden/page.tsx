import { getTranslations } from 'next-intl/server';
import ScrollReveal from '@/components/ScrollReveal';
import QuoteBlock from '@/components/QuoteBlock';
import { Link } from '@/i18n/routing';
import {
  Eye, Brain, HeartHandshake, MessageCircle, Network,
  Target, Zap, Users, Activity, BookOpen, RotateCcw, Rocket, ArrowRight
} from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return { title: locale === 'de' ? 'Methoden' : 'Methods' };
}

const methodIcons = [Eye, Brain, HeartHandshake, MessageCircle, Network, Target, Zap, Users, Activity, BookOpen, RotateCcw, Rocket];

const methodColors = [
  'from-sage-100 to-sage-50',
  'from-sand-100 to-sand-50',
  'from-warm-100 to-warm-50',
  'from-sage-100 to-sage-50',
  'from-sand-100 to-sand-50',
  'from-warm-100 to-warm-50',
  'from-sage-100 to-sage-50',
  'from-sand-100 to-sand-50',
  'from-warm-100 to-warm-50',
  'from-sage-100 to-sage-50',
  'from-sand-100 to-sand-50',
  'from-warm-100 to-warm-50',
];

export default async function MethodsPage() {
  const t = await getTranslations();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-sage-100 to-cream-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-forest-800 mb-6">
              {t('methods.headline')}
            </h1>
            <p className="text-xl text-forest-700/70 max-w-2xl mx-auto">
              {t('methods.subline')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Methods List */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {methodIcons.map((Icon, index) => (
            <ScrollReveal key={index} delay={index * 0.03}>
              <div className={`bg-gradient-to-br ${methodColors[index]} rounded-2xl p-6 md:p-8 lg:p-10 hover:shadow-soft transition-all`}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-soft flex items-center justify-center">
                      <Icon className="w-7 h-7 text-forest-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-forest-800 mb-3">
                      {t(`methods.items.${index}.title`)}
                    </h3>
                    <p className="text-forest-700/80 leading-relaxed mb-3">
                      {t(`methods.items.${index}.description`)}
                    </p>
                    <p className="text-forest-700/70 leading-relaxed mb-3">
                      {t(`methods.items.${index}.usage`)}
                    </p>
                    <p className="text-sage-600 font-medium text-sm">
                      {t(`methods.items.${index}.bestFor`)}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Quote */}
      <QuoteBlock quote={t('methods.quote.text')} author={t('methods.quote.author')} variant="fullwidth" />

      {/* CTA */}
      <section className="py-16 md:py-24 bg-cream-100 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-forest-800 mb-6">
              {t('coachingTeaser.headline')}
            </h2>
            <Link
              href="/coaching"
              className="inline-flex items-center gap-2 px-8 py-4 bg-forest-700 text-white font-medium rounded-full hover:bg-forest-800 transition-all shadow-soft text-lg"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
