export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return { title: locale === 'de' ? 'Datenschutz' : 'Privacy Policy' };
}

export default function DatenschutzPage({ params: { locale } }: { params: { locale: string } }) {
  const isDE = locale === 'de';

  return (
    <main className="pt-20">
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-forest-800 mb-10">
            {isDE ? 'Datenschutzerkl\u00e4rung' : 'Privacy Policy'}
          </h1>
          <div className="space-y-10 text-forest-700/80 leading-relaxed">

            {/* 1 */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-forest-800 mb-4">
                {isDE ? '1. Datenschutz auf einen Blick' : '1. Privacy at a Glance'}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-forest-800 mb-1">
                    {isDE ? 'Allgemeine Hinweise' : 'General Information'}
                  </h3>
                  <p>
                    {isDE
                      ? 'Die folgenden Hinweise geben einen einfachen \u00dcberblick dar\u00fcber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers\u00f6nlich identifiziert werden k\u00f6nnen. Ausf\u00fchrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef\u00fchrten Datenschutzerkl\u00e4rung.'
                      : 'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you. For detailed information on data protection, please refer to our privacy policy below.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-forest-800 mb-1">
                    {isDE ? 'Datenerfassung auf dieser Website' : 'Data Collection on This Website'}
                  </h3>
                  <p className="font-medium text-forest-700 mb-1">
                    {isDE
                      ? 'Wer ist verantwortlich f\u00fcr die Datenerfassung auf dieser Website?'
                      : 'Who is responsible for data collection on this website?'}
                  </p>
                  <p>
                    {isDE
                      ? 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k\u00f6nnen Sie dem Impressum dieser Website entnehmen.'
                      : 'Data processing on this website is carried out by the website operator. Their contact details can be found in the imprint of this website.'}
                  </p>
                  <p className="font-medium text-forest-700 mt-3 mb-1">
                    {isDE ? 'Wie erfassen wir Ihre Daten?' : 'How do we collect your data?'}
                  </p>
                  <p>
                    {isDE
                      ? 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).'
                      : 'Your data is collected in part when you provide it to us. This may include data you enter into a contact form. Other data is collected automatically or with your consent when you visit the website by our IT systems. This primarily includes technical data (e.g., internet browser, operating system, or time of page access).'}
                  </p>
                  <p className="font-medium text-forest-700 mt-3 mb-1">
                    {isDE ? 'Wof\u00fcr nutzen wir Ihre Daten?' : 'What do we use your data for?'}
                  </p>
                  <p>
                    {isDE
                      ? 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew\u00e4hrleisten. Andere Daten k\u00f6nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.'
                      : 'Some data is collected to ensure the error-free provision of the website. Other data may be used to analyze your user behavior.'}
                  </p>
                  <p className="font-medium text-forest-700 mt-3 mb-1">
                    {isDE
                      ? 'Welche Rechte haben Sie bez\u00fcglich Ihrer Daten?'
                      : 'What rights do you have regarding your data?'}
                  </p>
                  <p>
                    {isDE
                      ? 'Sie haben jederzeit das Recht, unentgeltlich Auskunft \u00fcber Herkunft, Empf\u00e4nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au\u00dferdem ein Recht, die Berichtigung oder L\u00f6schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k\u00f6nnen Sie diese Einwilligung jederzeit f\u00fcr die Zukunft widerrufen. Au\u00dferdem haben Sie das Recht, unter bestimmten Umst\u00e4nden die Einschr\u00e4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.'
                      : 'You have the right to receive free information about the origin, recipient, and purpose of your stored personal data at any time. You also have the right to request correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. You also have the right to request restriction of processing of your personal data under certain circumstances.'}
                  </p>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-forest-800 mb-4">
                {isDE ? '2. Hosting' : '2. Hosting'}
              </h2>
              <p>
                {isDE
                  ? 'Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die \u00fcber eine Website generiert werden, handeln.'
                  : 'This website is hosted by an external service provider (hoster). The personal data collected on this website is stored on the hoster\'s servers. This may include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website access, and other data generated through a website.'}
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-forest-800 mb-4">
                {isDE ? '3. Allgemeine Hinweise und Pflichtinformationen' : '3. General Information and Mandatory Disclosures'}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-forest-800 mb-1">
                    {isDE ? 'Datenschutz' : 'Data Protection'}
                  </h3>
                  <p>
                    {isDE
                      ? 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers\u00f6nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl\u00e4rung.'
                      : 'The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-forest-800 mb-1">
                    {isDE ? 'Hinweis zur verantwortlichen Stelle' : 'Notice on the Responsible Party'}
                  </h3>
                  <p>{isDE
                    ? 'Die verantwortliche Stelle f\u00fcr die Datenverarbeitung auf dieser Website ist:'
                    : 'The responsible party for data processing on this website is:'}
                  </p>
                  <p className="mt-2">
                    Daniel Hanke<br />
                    Next Level Education GmbH<br />
                    Gottlob-Schneider-Stra\u00dfe 37<br />
                    76275 Ettlingen<br />
                    {isDE ? 'Deutschland' : 'Germany'}
                  </p>
                  <p className="mt-2">
                    E-Mail:{' '}
                    <a href="mailto:daniel@mitdaniel.de" className="text-sage-600 hover:text-sage-700 underline">
                      daniel@mitdaniel.de
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-forest-800 mb-1">
                    {isDE ? 'Widerruf Ihrer Einwilligung zur Datenverarbeitung' : 'Revocation of Your Consent to Data Processing'}
                  </h3>
                  <p>
                    {isDE
                      ? 'Viele Datenverarbeitungsvorg\u00e4nge sind nur mit Ihrer ausdr\u00fccklichen Einwilligung m\u00f6glich. Sie k\u00f6nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtm\u00e4\u00dfigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber\u00fchrt.'
                      : 'Many data processing operations are only possible with your express consent. You can revoke consent already given at any time. The legality of data processing carried out until the revocation remains unaffected.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-forest-800 mb-1">
                    {isDE ? 'Recht auf Daten\u00fcbertragbarkeit' : 'Right to Data Portability'}
                  </h3>
                  <p>
                    {isDE
                      ? 'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf\u00fcllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem g\u00e4ngigen, maschinenlesbaren Format aush\u00e4ndigen zu lassen.'
                      : 'You have the right to have data that we process automatically based on your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-forest-800 mb-1">
                    {isDE ? 'Auskunft, L\u00f6schung und Berichtigung' : 'Information, Deletion and Correction'}
                  </h3>
                  <p>
                    {isDE
                      ? 'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft \u00fcber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf\u00e4nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder L\u00f6schung dieser Daten.'
                      : 'Within the framework of applicable legal provisions, you have the right to free information about your stored personal data, its origin and recipients, and the purpose of data processing, and, if applicable, a right to correction or deletion of this data.'}
                  </p>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-forest-800 mb-4">
                {isDE ? '4. Datenerfassung auf dieser Website' : '4. Data Collection on This Website'}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-forest-800 mb-1">Cookies</h3>
                  <p>
                    {isDE
                      ? 'Unsere Internetseiten verwenden so genannte "Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endger\u00e4t keinen Schaden an. Sie werden entweder vor\u00fcbergehend f\u00fcr die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endger\u00e4t gespeichert.'
                      : 'Our website uses so-called "cookies." Cookies are small text files that do not cause any damage to your device. They are stored on your device either temporarily for the duration of a session (session cookies) or permanently (persistent cookies).'}
                  </p>
                  <p className="mt-2">
                    {isDE
                      ? 'Sie k\u00f6nnen Ihren Browser so einstellen, dass Sie \u00fcber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies f\u00fcr bestimmte F\u00e4lle oder generell ausschlie\u00dfen sowie das automatische L\u00f6schen der Cookies beim Schlie\u00dfen des Browsers aktivieren.'
                      : 'You can set your browser to inform you about the setting of cookies and only allow cookies on a case-by-case basis, exclude the acceptance of cookies for certain cases or in general, and activate the automatic deletion of cookies when closing the browser.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-forest-800 mb-1">
                    {isDE ? 'Kontaktformular' : 'Contact Form'}
                  </h3>
                  <p>
                    {isDE
                      ? 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f\u00fcr den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.'
                      : 'If you send us inquiries via the contact form, your information from the inquiry form, including the contact data you provided, will be stored for the purpose of processing the inquiry and in case of follow-up questions. We do not share this data without your consent.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-forest-800 mb-1">Newsletter</h3>
                  <p>
                    {isDE
                      ? 'Wenn Sie den auf der Website angebotenen Newsletter beziehen m\u00f6chten, ben\u00f6tigen wir von Ihnen eine E-Mail-Adresse. Die Anmeldung zum Newsletter erfolgt im Double-Opt-In-Verfahren. Sie k\u00f6nnen den Newsletter jederzeit abbestellen. Einen entsprechenden Link finden Sie in jeder Newsletter-Nachricht.'
                      : 'If you wish to subscribe to the newsletter offered on the website, we require an email address from you. Newsletter registration uses a double opt-in procedure. You can unsubscribe from the newsletter at any time. A corresponding link can be found in every newsletter message.'}
                  </p>
                </div>
              </div>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-forest-800 mb-4">
                {isDE ? '5. Externe Dienste' : '5. External Services'}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-forest-800 mb-1">Calendly</h3>
                  <p>
                    {isDE
                      ? 'Wir nutzen den Dienst Calendly (Calendly LLC, USA) zur Terminbuchung. Wenn Sie einen Termin buchen, werden Ihre Daten (Name, E-Mail, ggf. weitere Angaben) an Calendly \u00fcbermittelt. Weitere Informationen finden Sie in der Datenschutzerkl\u00e4rung von Calendly.'
                      : 'We use the Calendly service (Calendly LLC, USA) for appointment booking. When you book an appointment, your data (name, email, and possibly other information) is transmitted to Calendly. For more information, please see Calendly\'s privacy policy.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-forest-800 mb-1">Google Fonts</h3>
                  <p>
                    {isDE
                      ? 'Diese Seite nutzt Google Fonts. Beim Aufrufen einer Seite l\u00e4dt Ihr Browser die ben\u00f6tigten Schriftarten von Google-Servern. Dabei wird Ihre IP-Adresse an Google \u00fcbermittelt. Weitere Informationen finden Sie in den Datenschutzrichtlinien von Google.'
                      : 'This site uses Google Fonts. When accessing a page, your browser loads the required fonts from Google servers. Your IP address is transmitted to Google. For more information, please see Google\'s privacy policy.'}
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-forest-800 mb-1">YouTube</h3>
                  <p>
                    {isDE
                      ? 'Wir binden Videos der Plattform YouTube ein. Betreiber ist die Google Ireland Limited. Wenn Sie eine unserer Seiten mit YouTube-Einbindung besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.'
                      : 'We embed videos from the YouTube platform. The operator is Google Ireland Limited. When you visit one of our pages with YouTube integration, a connection to YouTube\'s servers is established. The YouTube server is informed which of our pages you have visited.'}
                  </p>
                </div>
              </div>
            </div>

            {/* 6 */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-forest-800 mb-4">
                {isDE ? '6. \u00c4nderungen' : '6. Changes'}
              </h2>
              <p>
                {isDE
                  ? 'Wir behalten uns vor, diese Datenschutzerkl\u00e4rung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um \u00c4nderungen unserer Leistungen in der Datenschutzerkl\u00e4rung umzusetzen. F\u00fcr Ihren erneuten Besuch gilt dann die neue Datenschutzerkl\u00e4rung.'
                  : 'We reserve the right to adapt this privacy policy to ensure it always complies with current legal requirements or to implement changes to our services in the privacy policy. Your next visit will then be subject to the new privacy policy.'}
              </p>
            </div>

            {/* Hinweis */}
            <div className="p-5 bg-sand-100 rounded-xl text-sm text-warm-gray-500 border border-sand-200">
              <p>
                <strong>{isDE ? 'Hinweis:' : 'Note:'}</strong>{' '}
                {isDE
                  ? 'Diese Datenschutzerkl\u00e4rung ist ein Muster und ersetzt keine Rechtsberatung. Bitte lasse sie von einem Anwalt oder einem spezialisierten Dienst (z.B. eRecht24, Datenschutz-Generator) pr\u00fcfen bzw. erg\u00e4nzen.'
                  : 'This privacy policy is a template and does not constitute legal advice. Please have it reviewed or supplemented by a lawyer or a specialized service (e.g., eRecht24, Datenschutz-Generator).'}
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
