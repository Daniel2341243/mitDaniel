import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import QuoteBlock from '@/components/QuoteBlock';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import NewsletterForm from '@/components/NewsletterForm';
import { ArrowRight, Play, Mail, Youtube } from 'lucide-react';

export default async function HomePage() {
  const t = await getTranslations();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-daniel.jpg"
            alt="Daniel Hanke – Mindfulness Coach"
            fill
            className="object-cover"
            style={{ objectPosition: '50% 15%' }}
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/60 via-forest-800/40 to-cream-100" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight">
            {t('hero.headline')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero.subheadline')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/coaching"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-forest-700 font-medium rounded-full hover:bg-cream-100 transition-all shadow-elevated hover:-translate-y-0.5 transform text-lg"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#newsletter"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-medium rounded-full border-2 border-white/60 hover:bg-white/10 transition-all text-lg"
            >
              {t('hero.ctaSecondary')}
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-forest-700">
                <AnimatedCounter end={10000} suffix="+" />
              </div>
              <p className="mt-2 text-sm md:text-base text-warm-gray-500">{t('stats.subscribers')}</p>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-forest-700">
                <AnimatedCounter end={1000000} suffix="+" />
              </div>
              <p className="mt-2 text-sm md:text-base text-warm-gray-500">{t('stats.views')}</p>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-forest-700">
                <AnimatedCounter end={6} suffix="+" />
              </div>
              <p className="mt-2 text-sm md:text-base text-warm-gray-500">{t('stats.experience')}</p>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-forest-700">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <p className="mt-2 text-sm md:text-base text-warm-gray-500">{t('stats.methods')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote 1 */}
      <QuoteBlock quote={t('quote1.text')} author={t('quote1.author')} variant="fullwidth" />

      {/* Why Mindfulness Section */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-forest-800 mb-8">
                  {t('whyMindfulness.headline')}
                </h2>
                <div className="space-y-6 text-forest-700/80 text-lg leading-relaxed">
                  <p>{t('whyMindfulness.p1')}</p>
                  <p>{t('whyMindfulness.p2')}</p>
                  <p>{t('whyMindfulness.p3')}</p>
                  <p>{t('whyMindfulness.p4')}</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl shadow-elevated">
                <Image
                  src="/images/daniel-anzug.jpg"
                  alt="Daniel Hanke – Psychologische Beratung"
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

      {/* Additional Quote */}
      <section className="py-12 md:py-16 bg-sand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <QuoteBlock quote={t('quotes.mindfulness')} author={t('quotes.author')} variant="centered" />
          </ScrollReveal>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-forest-800 mb-4">
                {t('youtube.headline')}
              </h2>
              <p className="text-lg text-warm-gray-500 max-w-2xl mx-auto">
                {t('youtube.text')}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { id: 'FsTrZiCxZZs', title: 'Reue achtsam nutzen' },
                { id: '92soXPqnTcA', title: 'Im Hamsterrad des Ehrgeizes' },
                { id: 'vZXyHpQPJcM', title: 'Alles ist gut, wie es ist' },
              ].map((video) => (
                <div key={video.id} className="overflow-hidden rounded-2xl shadow-soft hover:shadow-soft-lg transition-all">
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <div className="text-center">
            <a
              href="https://www.youtube.com/@MitDaniel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-medium rounded-full hover:bg-red-700 transition-all shadow-soft hover:-translate-y-0.5 transform text-lg"
            >
              <Youtube className="w-6 h-6" />
              {t('youtube.cta')}
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 md:py-24 bg-gradient-to-br from-sand-200 via-sand-100 to-warm-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <NewsletterForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Coaching Teaser / Pricing */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-4">
              <span className="inline-block px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-medium mb-4">
                {t('coachingTeaser.badge')}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-forest-800">
                {t('coachingTeaser.headline')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {/* Single Session */}
            <ScrollReveal delay={0}>
              <div className="bg-white rounded-2xl shadow-soft p-8 hover:shadow-soft-lg transition-all h-full flex flex-col">
                <h3 className="font-heading text-xl font-semibold text-forest-800">{t('coachingTeaser.single.name')}</h3>
                <p className="text-warm-gray-400 text-sm mt-1">{t('coachingTeaser.single.sessions')}</p>
                <div className="mt-6 mb-2">
                  <span className="text-warm-gray-300 line-through text-lg">{t('coachingTeaser.single.oldPrice')}</span>
                  <span className="block font-heading text-4xl font-bold text-forest-700 mt-1">{t('coachingTeaser.single.price')}</span>
                  <span className="text-sm text-warm-gray-400">{t('coachingTeaser.single.perSession')}</span>
                </div>
                <div className="mt-auto pt-6">
                  <Link href="/coaching" className="block w-full text-center px-6 py-3 border-2 border-forest-400 text-forest-600 font-medium rounded-full hover:bg-forest-50 transition-colors">
                    {t('coachingTeaser.cta')}
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* 6-Pack */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl shadow-soft p-8 hover:shadow-soft-lg transition-all h-full flex flex-col">
                <h3 className="font-heading text-xl font-semibold text-forest-800">{t('coachingTeaser.six.name')}</h3>
                <p className="text-warm-gray-400 text-sm mt-1">{t('coachingTeaser.six.sessions')}</p>
                <div className="mt-6 mb-2">
                  <span className="text-warm-gray-300 line-through text-lg">{t('coachingTeaser.six.oldPrice')}</span>
                  <span className="block font-heading text-4xl font-bold text-forest-700 mt-1">{t('coachingTeaser.six.price')}</span>
                  <span className="text-sm text-warm-gray-400">{t('coachingTeaser.six.perSession')}</span>
                </div>
                <div className="mt-auto pt-6">
                  <Link href="/coaching" className="block w-full text-center px-6 py-3 border-2 border-forest-400 text-forest-600 font-medium rounded-full hover:bg-forest-50 transition-colors">
                    {t('coachingTeaser.cta')}
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* 12-Pack (Most Popular) */}
            <ScrollReveal delay={0.2}>
              <div className="relative bg-white rounded-2xl shadow-elevated p-8 border-2 border-gold-400 h-full flex flex-col">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-gold-400 to-gold-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                    {t('coachingTeaser.twelve.popular')}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-forest-800">{t('coachingTeaser.twelve.name')}</h3>
                <p className="text-warm-gray-400 text-sm mt-1">{t('coachingTeaser.twelve.sessions')}</p>
                <div className="mt-6 mb-2">
                  <span className="text-warm-gray-300 line-through text-lg">{t('coachingTeaser.twelve.oldPrice')}</span>
                  <span className="block font-heading text-4xl font-bold text-forest-700 mt-1">{t('coachingTeaser.twelve.price')}</span>
                  <span className="text-sm text-warm-gray-400">{t('coachingTeaser.twelve.perSession')}</span>
                </div>
                <div className="mt-auto pt-6">
                  <Link href="/coaching" className="block w-full text-center px-6 py-3 bg-gradient-to-r from-gold-400 to-gold-500 text-white font-medium rounded-full hover:opacity-90 transition-all shadow-warm">
                    {t('coachingTeaser.cta')}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <p className="text-center text-sm text-warm-gray-400 mt-8">{t('coachingTeaser.vatNote')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote 2 */}
      <QuoteBlock quote={t('quote2.text')} author={t('quote2.author')} variant="fullwidth" />

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-forest-800 text-center mb-16">
              {t('testimonials.headline')}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {/* Testimonial 1 – Karte mit Akzentlinie oben */}
            <ScrollReveal delay={0}>
              <div className="relative bg-cream-100 rounded-2xl p-8 pt-10 h-full flex flex-col">
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-sage-400 to-sage-500 rounded-b-full" />
                <p className="text-forest-700/80 text-base leading-relaxed italic flex-1">
                  &ldquo;{t('testimonials.t1.text')}&rdquo;
                </p>
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-sage-200">
                  <div className="w-12 h-12 rounded-full bg-sage-200 flex items-center justify-center text-sage-700 font-heading font-bold text-lg">
                    {t('testimonials.t1.name').charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-forest-800">{t('testimonials.t1.name')}</p>
                    <p className="text-sm text-warm-gray-400">{t('testimonials.t1.role')}, {t('testimonials.t1.age')}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonial 2 – Dunkle Karte, auffällig */}
            <ScrollReveal delay={0.1}>
              <div className="relative bg-forest-800 rounded-2xl p-8 h-full flex flex-col shadow-elevated">
                <div className="text-gold-400 text-5xl font-heading leading-none mb-4">&ldquo;</div>
                <p className="text-white/90 text-base leading-relaxed flex-1">
                  {t('testimonials.t2.text')}
                </p>
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/15">
                  <div className="w-12 h-12 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400 font-heading font-bold text-lg">
                    {t('testimonials.t2.name').charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-white">{t('testimonials.t2.name')}</p>
                    <p className="text-sm text-white/50">{t('testimonials.t2.role')}, {t('testimonials.t2.age')}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonial 3 – Karte mit seitlichem Akzent */}
            <ScrollReveal delay={0.2}>
              <div className="relative bg-sand-100 rounded-2xl p-8 pl-10 h-full flex flex-col border border-sand-200">
                <div className="absolute top-8 bottom-8 left-0 w-1 bg-gradient-to-b from-gold-400 to-gold-500 rounded-r-full" />
                <div className="flex gap-1 text-gold-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-forest-700/80 text-base leading-relaxed italic flex-1">
                  &ldquo;{t('testimonials.t3.text')}&rdquo;
                </p>
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-sand-200">
                  <div className="w-12 h-12 rounded-full bg-sand-300 flex items-center justify-center text-forest-700 font-heading font-bold text-lg">
                    {t('testimonials.t3.name').charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-forest-800">{t('testimonials.t3.name')}</p>
                    <p className="text-sm text-warm-gray-400">{t('testimonials.t3.role')}, {t('testimonials.t3.age')}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final breathing quote */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <QuoteBlock quote={t('quotes.breath')} author={t('quotes.author')} variant="centered" />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
