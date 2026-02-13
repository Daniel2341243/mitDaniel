import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import QuoteBlock from '@/components/QuoteBlock';
import { Calendar, Clock, Mic, Users, Leaf, Mail, ArrowRight } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return { title: locale === 'de' ? 'Seminare & Business' : 'Seminars & Business' };
}

const formatIcons = [Calendar, Clock, Mic, Users, Leaf];

export default async function SeminarsPage() {
  const t = await getTranslations();

  return (
    <main className="pt-20">
      <section className="py-20 md:py-32 bg-gradient-to-b from-sand-200 to-cream-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-forest-800 mb-6">
            {t('seminars.headline')}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal>
              <div className="space-y-6 text-lg text-forest-700/80 leading-relaxed">
                <p>{t('seminars.intro')}</p>
                <p>{t('seminars.custom')}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-elevated">
                <Image
                  src="/images/Business-Coaching.jpg"
                  alt="Daniel Hanke – Business Coaching"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-forest-800 mb-8">
              {t('seminars.formatsHeadline')}
            </h2>
          </ScrollReveal>

          <div className="space-y-4 mb-16">
            {formatIcons.map((Icon, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="flex items-center gap-4 p-5 bg-white rounded-xl hover:shadow-soft transition-all">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-sage-600" />
                  </div>
                  <p className="text-forest-700 font-medium">{t(`seminars.formats.${index}`)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-gradient-to-br from-forest-800 to-forest-700 rounded-2xl p-8 md:p-12 text-center">
              <p className="text-white/80 text-lg mb-4">{t('seminars.contactText')}</p>
              <a
                href={`mailto:${t('seminars.email')}`}
                className="inline-flex items-center gap-3 text-2xl md:text-3xl font-heading font-semibold text-gold-400 hover:text-gold-300 transition-colors"
              >
                <Mail className="w-8 h-8" />
                {t('seminars.email')}
              </a>
              <p className="text-white/70 text-lg mt-4">{t('seminars.closing')}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <QuoteBlock quote={t('quotes.investment')} author={t('quotes.author')} variant="fullwidth" />
    </main>
  );
}
