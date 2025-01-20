export default function Impressum() {
  return (
    <div>
      <Head>
        <title>
          Impressum
        </title>
      </Head>
      <div className="hero bg-neutral text-secondary md:py-12 md:px-12 pb-6">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">Impressum</h1>
            {/*
            <button className="btn btn-primary">Mitglied werden</button>
          */}
          </div>
        </div>
      </div>
      <main>
        <div className="page-element bg-base-100 text-black ">
          <div className="pt-5 mx-auto mb-5 text-center">
            <section>
              <p>
                <b>SolidarMobil</b>
                {/*
              <br />
              Pegnitztalstr. 21
              <br />
              91224 Pommelsbrunn
              */}
              </p>
            </section>

            <hr className="my-5" />

            <section>
              {/*
              <p>
                <b>Registergericht:</b> Mustergericht
                <br />
                <b>Registernummer:</b> XX XXXXXX
              </p>

            <p>
              <b>Umsatzsteuer - Identifikationsnummer:</b>
              <br />
              {UMSATZSTEUER_ID}
            </p>
          */}

              <p>
                <b>
                  V.i.S.d § 18 Abs. 2 MStV (Verantwortlich im Sinne des
                  Medienstaatsvertrags)
                </b>
                <br />
                Joshua Schmucker
                <br />
                Pegnitztalstr. 21
                <br />
                91224 Pommelsbrunn
              </p>
            </section>
          </div>

          <hr className="my-5" />

          <div className="pt-5 mx-auto mb-5">
            <div>
              <div>
                <h1 className="text-xl">1. Haftungsbeschränkung</h1>
                <p>
                  Die Inhalte dieser Webseite werden mit größtmöglicher Sorgfalt
                  erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die
                  Richtigkeit, Vollständigkeit und Aktualität der
                  bereitgestellten Inhalte. Die Nutzung der Inhalte der Webseite
                  erfolgt auf eigene Gefahr des Nutzers.
                </p>

                <p>
                  Namentlich gekennzeichnete Beiträge geben die Meinung des
                  jeweiligen Autors und nicht immer die Meinung des Anbieters
                  wieder. Mit der reinen Nutzung der Webseite des Anbieters
                  kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem
                  Anbieter zustande.
                </p>
              </div>

              <hr className="my-5" />

              <div>
                <h1 className="text-xl">2. Externe Links</h1>
                <p>
                  Diese Webseite enthält Verknüpfungen zu Webseiten Dritter
                  (&#34;externe Links&#34;). Diese Webseiten unterliegen der
                  Haftung der jeweiligen Betreiber. Der Anbieter hat bei der
                  erstmaligen Verknüpfung der externen Links die fremden Inhalte
                  daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu
                  dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der
                  Anbieter hat keinerlei Einfluss auf die aktuelle und
                  zukünftige Gestaltung und auf die Inhalte der verknüpften
                  Seiten. Das Setzen von externen Links bedeutet nicht, dass
                  sich der Anbieter die hinter dem Verweis oder Link liegenden
                  Inhalte zu Eigen macht. Eine ständige Kontrolle der externen
                  Links ist für den Anbieter ohne konkrete Hinweise auf
                  Rechtsverstöße nicht zumutbar. Bei Kenntnis von
                  Rechtsverstößen werden jedoch derartige externe Links
                  unverzüglich gelöscht.
                </p>
              </div>

              <hr className="my-5" />

              <div>
                <h1 className="text-xl">
                  3. Urheber- und Leistungsschutzrechte
                </h1>
                <p>
                  Die auf dieser Webseite veröffentlichten Inhalte unterliegen
                  dem deutschen Urheber- und Leistungsschutzrecht. Jede vom
                  deutschen Urheber- und Leistungsschutzrecht nicht zugelassene
                  Verwertung bedarf der vorherigen schriftlichen Zustimmung des
                  Anbieters oder jeweiligen Rechteinhabers. Dies gilt
                  insbesondere für Vervielfältigung, Bearbeitung, Übersetzung,
                  Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in
                  Datenbanken oder anderen elektronischen Medien und Systemen.
                  Inhalte und Rechte Dritter sind dabei als solche
                  gekennzeichnet. Die unerlaubte Vervielfältigung oder
                  Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht
                  gestattet und strafbar. Lediglich die Herstellung von Kopien
                  und Downloads für den persönlichen, privaten und nicht
                  kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser
                  Webseite in fremden Frames ist nur mit schriftlicher Erlaubnis
                  zulässig.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
