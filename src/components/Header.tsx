'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const switchLocale = () => {
    const newLocale = locale === 'de' ? 'en' : 'de';
    router.replace(pathname, { locale: newLocale });
  };

  const navLinks = [
    { href: '/' as const, label: t('nav.home') },
    { href: '/ueber-mich' as const, label: t('nav.about') },
    { href: '/coaching' as const, label: t('nav.coaching') },
    { href: '/methoden' as const, label: t('nav.methods') },
    { href: '/seminare' as const, label: t('nav.seminars') },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-100/90 backdrop-blur-lg shadow-soft'
            : 'bg-gradient-to-b from-black/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className={`font-heading text-2xl md:text-3xl font-semibold transition-colors ${
                isScrolled ? 'text-forest-700 hover:text-forest-500' : 'text-white hover:text-white/80'
              }`}
            >
              mitDaniel
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors text-sm font-medium ${
                    isScrolled ? 'text-forest-700 hover:text-sage-500' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side: Language toggle + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={switchLocale}
                className={`flex items-center gap-1.5 text-sm transition-colors px-3 py-1.5 rounded-full border ${
                  isScrolled
                    ? 'text-forest-600 hover:text-forest-800 border-forest-200 hover:border-forest-300'
                    : 'text-white/90 hover:text-white border-white/40 hover:border-white/60'
                }`}
              >
                {locale === 'de' ? '🇬🇧 EN' : '🇩🇪 DE'}
              </button>
              <a
                href="#newsletter"
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-gold-400 to-gold-500 text-white text-sm font-medium rounded-full hover:opacity-90 transition-all shadow-warm hover:-translate-y-0.5 transform"
              >
                {t('nav.subscribe')}
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={switchLocale}
                className={`text-sm px-2 py-1 rounded-full border ${
                  isScrolled ? 'text-forest-600 border-forest-200' : 'text-white/90 border-white/40'
                }`}
              >
                {locale === 'de' ? 'EN' : 'DE'}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 ${isScrolled ? 'text-forest-700' : 'text-white'}`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-cream-100/98 backdrop-blur-xl pt-24"
          >
            <nav className="flex flex-col items-center gap-8 p-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-heading text-2xl text-forest-700 hover:text-sage-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1 }}
              >
                <a
                  href="#newsletter"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 text-white font-medium rounded-full shadow-warm"
                >
                  {t('nav.subscribe')}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
