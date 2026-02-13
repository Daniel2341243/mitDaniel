'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { Youtube, Instagram, Mail, Check, Loader2 } from 'lucide-react';

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const newLocale = locale === 'de' ? 'en' : 'de';
    router.replace(pathname, { locale: newLocale });
  };

  const [footerEmail, setFooterEmail] = useState('');
  const [footerStatus, setFooterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleFooterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFooterStatus('loading');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: footerEmail }),
      });
      const data = await response.json();
      if (data.success) {
        setFooterStatus('success');
        setFooterEmail('');
      } else {
        setFooterStatus('error');
      }
    } catch {
      setFooterStatus('error');
    }
  };

  const navLinks = [
    { href: '/' as const, label: t('nav.home') },
    { href: '/ueber-mich' as const, label: t('nav.about') },
    { href: '/coaching' as const, label: t('nav.coaching') },
    { href: '/methoden' as const, label: t('nav.methods') },
    { href: '/seminare' as const, label: t('nav.seminars') },
  ];

  const socialLinks = [
    {
      href: 'https://www.youtube.com/@MitDaniel',
      label: 'YouTube',
      icon: <Youtube size={20} />,
    },
    {
      href: 'https://www.instagram.com/transformation_mit_daniel/',
      label: 'Instagram',
      icon: <Instagram size={20} />,
    },
    {
      href: 'https://www.tiktok.com/@mitdaniel.de',
      label: 'TikTok',
      icon: <TikTokIcon size={20} />,
    },
  ];

  return (
    <footer className="bg-forest-800 text-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-heading text-2xl font-semibold text-cream-100 hover:text-gold-400 transition-colors"
            >
              mitDaniel
            </Link>
            <p className="mt-4 text-sm text-cream-300 leading-relaxed">
              {locale === 'de'
                ? 'Psychologische Beratung & Achtsamkeitscoaching mit Daniel Hanke.'
                : 'Psychological counseling & mindfulness coaching with Daniel Hanke.'}
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-300 hover:text-gold-400 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream-100 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream-100 mb-4">
              {t('footer.newsletterHeadline')}
            </h3>
            <p className="text-sm text-cream-300 mb-4">
              {locale === 'de'
                ? 'Tägliche Impulse direkt in dein Postfach.'
                : 'Daily inspiration straight to your inbox.'}
            </p>
            {footerStatus === 'success' ? (
              <div className="flex items-center gap-2 p-3 bg-forest-700 rounded-xl">
                <Check className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <p className="text-sm text-cream-200">
                  {locale === 'de' ? 'Du bist angemeldet!' : "You're subscribed!"}
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-3"
                onSubmit={handleFooterSubmit}
              >
                <input
                  type="email"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  placeholder={t('newsletter.placeholder')}
                  className="w-full px-4 py-2.5 rounded-full bg-forest-700 border border-forest-600 text-cream-100 placeholder:text-cream-400 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all"
                  required
                  disabled={footerStatus === 'loading'}
                />
                <button
                  type="submit"
                  disabled={footerStatus === 'loading'}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-gold-400 to-gold-500 text-white text-sm font-medium rounded-full hover:opacity-90 transition-all shadow-warm disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {footerStatus === 'loading' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    t('footer.newsletterCta')
                  )}
                </button>
                {footerStatus === 'error' && (
                  <p className="text-xs text-red-400">
                    {locale === 'de' ? 'Fehler. Bitte erneut versuchen.' : 'Error. Please try again.'}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Column 4: Contact & Legal */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-cream-100 mb-4">
              {locale === 'de' ? 'Kontakt' : 'Contact'}
            </h3>
            <a
              href="mailto:daniel@mitdaniel.de"
              className="inline-flex items-center gap-2 text-sm text-cream-300 hover:text-gold-400 transition-colors"
            >
              <Mail size={16} />
              daniel@mitdaniel.de
            </a>

            <div className="mt-6">
              <h3 className="font-heading text-lg font-semibold text-cream-100 mb-4">
                {locale === 'de' ? 'Rechtliches' : 'Legal'}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/impressum"
                    className="text-sm text-cream-300 hover:text-gold-400 transition-colors"
                  >
                    {t('footer.imprint')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/datenschutz"
                    className="text-sm text-cream-300 hover:text-gold-400 transition-colors"
                  >
                    {t('footer.privacy')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-forest-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-cream-400">
              {t('footer.copyright')}
            </p>
            <button
              onClick={switchLocale}
              className="flex items-center gap-1.5 text-sm text-cream-300 hover:text-gold-400 transition-colors px-3 py-1.5 rounded-full border border-forest-600 hover:border-forest-500"
            >
              {locale === 'de' ? '🇬🇧 English' : '🇩🇪 Deutsch'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
