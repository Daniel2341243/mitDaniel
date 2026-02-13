export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return { title: locale === 'de' ? 'Impressum' : 'Legal Notice' };
}

export default function ImpressumPage({ params: { locale } }: { params: { locale: string } }) {
  const isDE = locale === 'de';

  return (
    <main className="pt-20">
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-forest-800 mb-8">
            {isDE ? 'Impressum' : 'Legal Notice'}
          </h1>
          <div className="space-y-8 text-forest-700/80 leading-relaxed">

            <div>
              <h2 className="font-heading text-xl font-semibold text-forest-800 mb-2">
                {isDE ? 'Angaben gem\u00e4\u00df \u00a7 5 TMG' : 'Information according to \u00a7 5 TMG'}
              </h2>
              <p>
                mitdaniel.de<br />
                {isDE
                  ? '(Angebot der Next Level Education GmbH)'
                  : '(Offered by Next Level Education GmbH)'}
              </p>
              <p className="mt-3">
                Next Level Education GmbH<br />
                Gottlob-Schneider-Stra\u00dfe 37<br />
                76275 Ettlingen<br />
                {isDE ? 'Deutschland' : 'Germany'}
              </p>
              <p className="mt-3">
                Website: <a href="https://mitdaniel.de" className="text-sage-600 hover:text-sage-700 underline">mitdaniel.de</a>
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-forest-800 mb-2">
                {isDE ? 'Handelsregister' : 'Commercial Register'}
              </h2>
              <p>
                {isDE ? 'Handelsregister' : 'Commercial Register'}: HRB 700221<br />
                {isDE ? 'Registergericht' : 'Registration Court'}: Amtsgericht Mannheim
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-forest-800 mb-2">
                {isDE ? 'Vertreten durch' : 'Represented by'}
              </h2>
              <p>{isDE ? 'Gesch\u00e4ftsf\u00fchrer' : 'Managing Director'}: Daniel Hanke</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-forest-800 mb-2">
                {isDE ? 'Kontakt' : 'Contact'}
              </h2>
              <p>E-Mail: <a href="mailto:daniel@mitdaniel.de" className="text-sage-600 hover:text-sage-700 underline">daniel@mitdaniel.de</a></p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-forest-800 mb-2">
                {isDE ? 'Postadresse' : 'Postal Address'}
              </h2>
              <p>
                Daniel Hanke<br />
                Postfach 100609<br />
                76260 Ettlingen<br />
                {isDE ? 'Deutschland' : 'Germany'}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-forest-800 mb-2">
                {isDE ? 'Umsatzsteuer-ID' : 'VAT ID'}
              </h2>
              <p>
                {isDE
                  ? 'Umsatzsteuer-Identifikationsnummer gem\u00e4\u00df \u00a7 27 a Umsatzsteuergesetz:'
                  : 'VAT identification number according to \u00a7 27 a of the German VAT Act:'}<br />
                DE814634983
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-forest-800 mb-2">
                {isDE ? 'Redaktionell verantwortlich' : 'Editorially Responsible'}
              </h2>
              <p>Daniel Hanke</p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-forest-800 mb-2">
                {isDE ? 'EU-Streitschlichtung' : 'EU Dispute Resolution'}
              </h2>
              <p>
                {isDE
                  ? 'Die Europ\u00e4ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: '
                  : 'The European Commission provides a platform for online dispute resolution (ODR): '}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-700 underline break-all">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                {isDE
                  ? 'Unsere E-Mail-Adresse finden Sie oben im Impressum.'
                  : 'Our email address can be found above in this legal notice.'}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-forest-800 mb-2">
                {isDE
                  ? 'Verbraucherstreitbeilegung / Universalschlichtungsstelle'
                  : 'Consumer Dispute Resolution'}
              </h2>
              <p>
                {isDE
                  ? 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
                  : 'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.'}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-forest-800 mb-2">
                {isDE ? 'Haftung f\u00fcr Inhalte' : 'Liability for Content'}
              </h2>
              <p>
                {isDE
                  ? 'Als Diensteanbieter sind wir gem\u00e4\u00df \u00a7 7 Abs. 1 TMG f\u00fcr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \u00a7\u00a7 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, \u00fcbermittelte oder gespeicherte fremde Informationen zu \u00fcberwachen.'
                  : 'As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to \u00a7 7 para. 1 TMG. However, according to \u00a7\u00a7 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information.'}
              </p>
              <p className="mt-2">
                {isDE
                  ? 'Eine Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m\u00f6glich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.'
                  : 'Liability is only possible from the time of knowledge of a specific legal violation. Upon becoming aware of corresponding legal violations, we will remove this content immediately.'}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-forest-800 mb-2">
                {isDE ? 'Haftung f\u00fcr Links' : 'Liability for Links'}
              </h2>
              <p>
                {isDE
                  ? 'Unser Angebot enth\u00e4lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\u00f6nnen wir f\u00fcr diese fremden Inhalte keine Gew\u00e4hr \u00fcbernehmen.'
                  : 'Our website contains links to external third-party websites, over whose content we have no influence. Therefore, we cannot assume any liability for this external content.'}
              </p>
              <p className="mt-2">
                {isDE
                  ? 'Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.'
                  : 'Upon becoming aware of legal violations, we will remove such links immediately.'}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-forest-800 mb-2">
                {isDE ? 'Urheberrecht' : 'Copyright'}
              </h2>
              <p>
                {isDE
                  ? 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Downloads und Kopien dieser Seite sind nur f\u00fcr den privaten, nicht kommerziellen Gebrauch gestattet.'
                  : 'The content and works created by the site operators on these pages are subject to German copyright law. Downloads and copies of this site are only permitted for private, non-commercial use.'}
              </p>
              <p className="mt-2">
                {isDE
                  ? 'Sollten Sie auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.'
                  : 'Should you become aware of a copyright infringement, please notify us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.'}
              </p>
            </div>

            <p className="text-sm text-warm-gray-500 pt-4 border-t border-sand-200">
              {isDE ? 'Stand: Februar 2026' : 'Last updated: February 2026'}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
