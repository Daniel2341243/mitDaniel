import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import QuoteBlock from '@/components/QuoteBlock';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import ImageSlideshow from '@/components/ImageSlideshow';
import { Award, BookOpen, GraduationCap, Heart, Youtube, Star } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: locale === 'de' ? 'Über mich' : 'About Me',
  };
}

export default async function AboutPage() {
  const t = await getTranslations();

  const qualificationIcons = [
    GraduationCap, GraduationCap, Award, Award, Award, Star, Heart, BookOpen, Youtube
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sand-100 to-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-forest-800 mb-6">
                {t('about.heroHeadline')}
              </h1>
              <p className="text-xl text-forest-700/80 leading-relaxed">
                {t('about.intro')}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative max-w-md mx-auto overflow-hidden rounded-2xl shadow-elevated">
                <Image
                  src="/images/daniel-portrait.jpg"
                  alt="Daniel Hanke – Portrait"
                  width={896}
                  height={1088}
                  className="w-full h-auto object-cover"
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="prose-like space-y-6 text-lg text-forest-700/80 leading-relaxed">
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
          </ScrollReveal>
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <ScrollReveal>
            <ImageSlideshow
              slides={[
                { src: '/images/Kindheit_1.JPG', alt: 'Daniel als Kind' },
                { src: '/images/Kindheit_2.JPG', alt: 'Daniel in der Jugend' },
                { src: '/images/Kindheit_3.JPG', alt: 'Daniel als Teenager' },
                { src: '/images/Kindheit_4.JPG', alt: 'Daniel in jungen Jahren' },
              ]}
            />
          </ScrollReveal>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <ScrollReveal>
            <div className="space-y-6 text-lg text-forest-700/80 leading-relaxed">
              <p>{t('about.p4')}</p>
              <p>{t('about.p5')}</p>
            </div>
          </ScrollReveal>
        </div>
        <div className="max-w-sm mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/Zertifikate.jpg"
                alt="Zertifikate – NLP Practitioner, Bachelor Wirtschaftspsychologie, Master Management"
                width={1200}
                height={900}
                className="w-full h-auto object-cover"
                quality={85}
                sizes="(max-width: 768px) 80vw, 384px"
              />
            </div>
          </ScrollReveal>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <ScrollReveal>
            <div className="space-y-6 text-lg text-forest-700/80 leading-relaxed">
              <p>{t('about.p6')}</p>
              <p className="whitespace-pre-line">{t('about.p7')}</p>
            </div>
          </ScrollReveal>
        </div>
        <div className="max-w-sm mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/Bücher.jpg"
                alt="Bücher von Daniel Hanke – Selbstdisziplin 2.0, Projektmanagement, Optimale Führung"
                width={1200}
                height={900}
                className="w-full h-auto object-cover"
                quality={85}
                sizes="(max-width: 768px) 80vw, 384px"
              />
            </div>
          </ScrollReveal>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <ScrollReveal>
            <div className="space-y-6 text-lg text-forest-700/80 leading-relaxed">
              <p>{t('about.p8')}</p>
            </div>
          </ScrollReveal>
        </div>
        <div className="max-w-sm mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/Meditation.jpg"
                alt="Daniel Hanke meditierend im Park"
                width={900}
                height={1200}
                className="w-full h-auto object-cover"
                quality={85}
                sizes="(max-width: 768px) 80vw, 384px"
              />
            </div>
          </ScrollReveal>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <ScrollReveal>
            <div className="space-y-6 text-lg text-forest-700/80 leading-relaxed">
              <p>{t('about.p9')}</p>
              <p className="text-forest-700 font-medium">{t('about.p12')}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote */}
      <QuoteBlock quote={t('about.quote.text')} author={t('about.quote.author')} variant="fullwidth" />

      {/* Qualifications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-forest-800 text-center mb-12">
              {t('about.qualifications.headline')}
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {qualificationIcons.map((Icon, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-sand-50 hover:bg-sand-100 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-sage-600" />
                  </div>
                  <p className="text-forest-700 text-sm md:text-base font-medium">
                    {t(`about.qualifications.items.${index}`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="py-12 md:py-16 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <QuoteBlock quote={t('quotes.fear')} author={t('quotes.author')} variant="centered" />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
