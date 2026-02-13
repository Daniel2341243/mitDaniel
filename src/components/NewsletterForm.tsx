'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Mail, Check, Loader2 } from 'lucide-react';

export default function NewsletterForm() {
  const t = useTranslations('newsletter');
  const locale = useLocale();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage(
          locale === 'de'
            ? 'Willkommen! Du bist jetzt angemeldet.'
            : 'Welcome! You are now subscribed.'
        );
        setEmail('');
      } else {
        setStatus('error');
        setMessage(
          locale === 'de'
            ? 'Etwas ist schiefgelaufen. Bitte versuche es erneut.'
            : 'Something went wrong. Please try again.'
        );
      }
    } catch {
      setStatus('error');
      setMessage(
        locale === 'de'
          ? 'Verbindungsfehler. Bitte versuche es erneut.'
          : 'Connection error. Please try again.'
      );
    }
  };

  return (
    <div className="text-center">
      <Mail className="w-12 h-12 text-gold-500 mx-auto mb-6" />
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-forest-800 mb-4">
        {t('headline')}
      </h2>
      <p className="text-lg text-warm-gray-500 mb-8 max-w-xl mx-auto">
        {t('subtext')}
      </p>

      {status === 'success' ? (
        <div className="flex items-center justify-center gap-3 max-w-lg mx-auto p-4 bg-sage-100 rounded-2xl">
          <Check className="w-6 h-6 text-sage-600 flex-shrink-0" />
          <p className="text-sage-700 font-medium">{message}</p>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('placeholder')}
              className="flex-1 px-6 py-4 rounded-full border border-sand-400 bg-white text-forest-800 placeholder:text-warm-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent text-base"
              required
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-500 text-white font-medium rounded-full hover:opacity-90 transition-all shadow-warm hover:-translate-y-0.5 transform whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {locale === 'de' ? 'Wird angemeldet...' : 'Subscribing...'}
                </>
              ) : (
                t('cta')
              )}
            </button>
          </form>
          {status === 'error' && (
            <p className="mt-3 text-sm text-red-500">{message}</p>
          )}
        </>
      )}
    </div>
  );
}
