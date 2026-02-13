'use client';

import { useEffect } from 'react';

export default function CalendlyEmbed() {
  useEffect(() => {
    // Load Calendly widget script
    if (!document.getElementById('calendly-script')) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-2xl overflow-hidden"
      data-url="https://calendly.com/mitdaniel/achtsamkeitscoaching?hide_event_type_details=1&hide_gdpr_banner=1"
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}
