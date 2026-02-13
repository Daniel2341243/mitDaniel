'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const t = useTranslations('cookies');
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent');
    if (!stored) {
      // Small delay so it doesn't appear instantly
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      const parsed = JSON.parse(stored) as CookieConsent;
      if (parsed.analytics) loadAnalytics();
    }
  }, []);

  const loadAnalytics = () => {
    // GA4 placeholder - replace G-5VW5ZXHQQK with actual Measurement ID
    if (typeof window !== 'undefined' && !document.getElementById('ga-script')) {
      const script = document.createElement('script');
      script.id = 'ga-script';
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-5VW5ZXHQQK';
      script.async = true;
      document.head.appendChild(script);

      const inline = document.createElement('script');
      inline.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5VW5ZXHQQK');
      `;
      document.head.appendChild(inline);
    }
  };

  const saveConsent = (newConsent: CookieConsent) => {
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
    document.cookie = `cookie-consent=${JSON.stringify(newConsent)};max-age=31536000;path=/;SameSite=Lax`;
    if (newConsent.analytics) loadAnalytics();
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => saveConsent({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => saveConsent({ necessary: true, analytics: false, marketing: false });
  const saveSelection = () => saveConsent(consent);

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-elevated p-6 border border-sand-200">
            {!showSettings ? (
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Cookie className="w-5 h-5 text-gold-500" />
                    <h3 className="font-heading text-lg font-semibold text-forest-800">{t('title')}</h3>
                  </div>
                  <p className="text-sm text-warm-gray-500">{t('description')}</p>
                </div>
                <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                  <button onClick={rejectAll} className="px-4 py-2 text-sm text-forest-600 border border-forest-200 rounded-full hover:bg-forest-50 transition-colors">
                    {t('rejectAll')}
                  </button>
                  <button onClick={() => setShowSettings(true)} className="px-4 py-2 text-sm text-forest-600 border border-forest-200 rounded-full hover:bg-forest-50 transition-colors">
                    {t('settings')}
                  </button>
                  <button onClick={acceptAll} className="px-4 py-2 text-sm text-white bg-forest-600 rounded-full hover:bg-forest-700 transition-colors">
                    {t('acceptAll')}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading text-lg font-semibold text-forest-800">{t('title')}</h3>
                  <button onClick={() => setShowSettings(false)} className="text-warm-gray-400 hover:text-forest-600">
                    <X size={20} />
                  </button>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-sand-50 rounded-xl">
                    <div>
                      <p className="font-medium text-sm text-forest-800">{t('necessary')}</p>
                      <p className="text-xs text-warm-gray-400">{t('necessaryDesc')}</p>
                    </div>
                    <div className="w-10 h-6 bg-sage-400 rounded-full flex items-center justify-end px-0.5 cursor-not-allowed">
                      <div className="w-5 h-5 bg-white rounded-full shadow" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-sand-50 rounded-xl">
                    <div>
                      <p className="font-medium text-sm text-forest-800">{t('analytics')}</p>
                      <p className="text-xs text-warm-gray-400">{t('analyticsDesc')}</p>
                    </div>
                    <button
                      onClick={() => setConsent(c => ({ ...c, analytics: !c.analytics }))}
                      className={`w-10 h-6 rounded-full flex items-center px-0.5 transition-colors ${consent.analytics ? 'bg-sage-400 justify-end' : 'bg-warm-gray-200 justify-start'}`}
                    >
                      <div className="w-5 h-5 bg-white rounded-full shadow" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-sand-50 rounded-xl">
                    <div>
                      <p className="font-medium text-sm text-forest-800">{t('marketing')}</p>
                      <p className="text-xs text-warm-gray-400">{t('marketingDesc')}</p>
                    </div>
                    <button
                      onClick={() => setConsent(c => ({ ...c, marketing: !c.marketing }))}
                      className={`w-10 h-6 rounded-full flex items-center px-0.5 transition-colors ${consent.marketing ? 'bg-sage-400 justify-end' : 'bg-warm-gray-200 justify-start'}`}
                    >
                      <div className="w-5 h-5 bg-white rounded-full shadow" />
                    </button>
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <button onClick={rejectAll} className="px-4 py-2 text-sm text-forest-600 border border-forest-200 rounded-full hover:bg-forest-50 transition-colors">
                    {t('rejectAll')}
                  </button>
                  <button onClick={saveSelection} className="px-4 py-2 text-sm text-white bg-forest-600 rounded-full hover:bg-forest-700 transition-colors">
                    {t('save')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
