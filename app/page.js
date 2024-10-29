import Titlebar from "@/components/Titlebar";

export default function Home() {
  return (
    <div>
      <Titlebar
        heading="Statt kaufen: PKWs teilen!"
        /* heading="Fahrzeug-Sharing im Raum Hersbruck" */
        subheading='Der Hersbrucker Car-Sharing-Verein "SolidarMOBIL" nimmt Gestalt an.'
        /* subheading="Wir ermöglichen und unterstützen das Teilen von Autos, Lastenrädern, Mobicards & Co." */
      />
      <div className="page-content hidden md:max-w-screen-xl"></div>
      <div className="page-content">
        <h1 className="">Zielvorstellung</h1>
        <p>
          In einer Gruppe aktiver Leute aus Hersbruck und Umgebung
          bringen sich Menschen aus unterschiedlichsten Gründen in die
          Initiative ein. Die Zielvorstellung sieht für alle so aus: Braucht man
          ein Auto, nimmt man mit &quot;SolidarMobil&quot; Kontakt auf. Zu einem
          genau ermittelten Tarif, der gerade die Kosten deckt, kann man dann
          einen vereinseigenen PKW nutzen. Um Kundendienst, Versicherung,
          Reparaturen, Tankstellenbesuche etc. muss man sich nicht kümmern. Das
          ist tatsächlich günstiger, als ein Auto privat zu halten, denn die
          Basiskosten werden ja geteilt. Und der überlegte, sparsame Einsatz von
          Kraftfahrzeugen steht natürlich, im Einklang mit einem
          verantwortlichen Umgang mit der Umwelt, im Satzungsentwurf des Vereins
          &quot;SolidarMobil&quot;.
        </p>
      </div>

      <div className="page-content">
        <h1 className="">Entstehung</h1>
        <p>
          Nach einem informativen Abend über einen selbstorganisierten
          Car-Sharing-Verein aus dem Wendland (die HZ berichtete), hat sich die
          Initiativgruppe aus unserer Region gebildet. Viel Energie wurde schon
          investiert, um (vereins-)rechtliche und (versicherungs-)technische
          Probleme zu klären. Es gibt zwar in dieser Hinsicht bereits Vorbilder
          in anderen Kommunen, doch noch immer ist das Vorhaben abseits von
          Großstädten nichts Alltägliches. Alles muss gewissenhaft durchdacht,
          kalkuliert und abgesichert werden.
        </p>
      </div>

      <div className="page-content">
        <h1 className="">Wie geht es weiter?</h1>
        <p>
          Voraussetzung, um das Ziel zu erreichen, ist eine Vereinsgründung mit
          einer ausreichend großen Anzahl an Mitgliedern. Nur dann ist es
          möglich, zwei oder mehr Fahrzeuge zum Beispiel mittels
          Überlassungsverträgen zu beschaffen, sie zu betreuen und zu betreiben.
        </p>
      </div>

      <div className="page-content">
        <h1 className="">Nicht nur Autos teilen</h1>
        <p>
          Die Initiator/innen denken auch schon weiter: Es sollen nicht nur
          Kraftfahrzeuge sinnvoll und sparsam zum Einsatz kommen. Auch der
          Austausch von Fahrrädern, vor allem von elektrischen, sowie die
          gemeinsame Nutzung geeigneter Fahrkarten für den öffentlichen
          Nahverkehr werden angestrebt.
        </p>
      </div>

      <div className="page-content">
        <h1 className="">Einladung zur Infoveranstaltung</h1>
        <p>
          Am Mittwoch, 13. November 2024, findet um 19:15 Uhr in den Räumen des
          Kulturbahnhof Hersbruck e.V. am Hersbrucker Bahnhof r. d. P. ein
          Treffen für alle Interessierten statt. Der Satzungsentwurf, die
          bisherigen Konzepte und Kalkulationen sowie Ideen zur Kommunikation
          usw. werden vorgestellt und stehen zur Diskussion.
        </p>

        <p>
          Eingeladen hierzu sind alle Menschen, die sich zu dieser Chance des
          „etwas anderen Umgangs“ mit Mobilität gründlich informieren möchten,
          unabhängig davon, ob sie sich eine aktive oder eher eine passive
          Mitwirkung beim Car-Sharing vorstellen können.
        </p>

        <p>
          Bei ausreichender Resonanz soll dann im Januar 2025 die
          Vereinsgründung erfolgen – und dann kann’s richtig losgehen!
        </p>
      </div>
      {/*
        <a className="btn btn-primary m-4">Button</a>
      */}
    </div>
  );
}
