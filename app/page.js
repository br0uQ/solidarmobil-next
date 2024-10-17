import Titlebar from "@/components/Titlebar";

export default function Home() {
  return (
    <div>
      <Titlebar
        heading="Statt kaufen: PKWs teilen!"
        /* heading="Fahrzeug-Sharing im Raum Hersbruck" */
        subheading="Der Hersbrucker Car-Sharing-Verein 'SolidarMOBIL' nimmt Gestalt an."
        /* subheading="Wir ermöglichen und unterstützen das Teilen von Autos, Lastenrädern, Mobicards & Co." */
      />
      <div className="page-content hidden md:max-w-screen-xl"></div>
      <div className="page-content">
        <h1 className="">
          So sieht die Zielvorstellung einer Gruppe aktiver Leute aus Hersbruck
          und Umgebung aus:
        </h1>
        <p>
          Braucht man ein Auto, nimmt man mit "SolidarMOBIL" Kontakt auf. Zu
          einem genau ermittelten Tarif, der gerade die Kosten deckt, kann man
          dann einen vereinseigenen PKW nutzen. Um Kundendienst, Versicherung,
          Tanken etc. muss man sich nicht kümmern. Das ist – wenn man nicht
          allzu häufig fährt – tatsächlich auch noch günstiger, als ein Auto
          privat zu halten. Und der überlegte, sparsame Einsatz von
          Kraftfahrzeugen steht natürlich, im Einklang mit einem
          verantwortlichen Umgang mit der Umwelt, im Satzungsentwurf des
          Vereins.
        </p>
      </div>

      <div className="page-content">
        <h1 className="">
          Viel Energie wurde schon investiert, um (vereins-)rechtliche und
          (versicherungs-)technische Probleme zu klären
        </h1>
        <p>
          Es gibt in dieser Hinsicht bereits Vorbilder in anderen Städten und
          Gegenden, doch noch immer ist das Vorhaben nichts Alltägliches. Alles
          muss gewissenhaft durchdacht, kalkuliert und abgesichert werden.
          Voraussetzung dafür, das Ziel zu erreichen, ist eine Vereinsgründung
          mit einer ausreichend großen Anzahl von Mitgliedern. Nur dann ist es
          möglich, zwei oder mehr Fahrzeuge mittels Überlassungsverträgen zu
          beschaffen, sie zu betreuen und zu betreiben. Übrigens sollen nicht
          nur Kraftfahrzeuge sinnvoll und sparsam zum Einsatz kommen. Auch der
          Austausch von Fahrrädern, vor allem von elektrischen, sowie die
          gemeinsame Nutzung geeigneter Fahrkarten für den öffentlichen
          Nahverkehr werden angestrebt.{" "}
        </p>
      </div>

      <div className="page-content">
        <h1 className="">Einladung zur Infoveranstaltung</h1>
        <p>
          Am Mittwoch, den 13. November, findet im Kultur-Bahnhof („KuBa“) am
          Hersbrucker Bahnhof rechts der Pegnitz das entscheidende Treffen für
          alle Interessierten statt. Der Satzungsentwurf und die bisherigen
          Kalkulationen, Ideen zur Kommunikation usw. werden vorgestellt und
          stehen zur Diskussion. Die Kandidaten für den Vorstand des Vereins
          stellen sich vor. Eingeladen hierzu sind alle Menschen, die sich zu
          dieser Chance des „etwas anderen Umgangs“ mit Fahrzeugen gründlich
          informieren möchten, unabhängig davon, ob sie sich eine aktive oder
          eher eine passive Mitwirkung beim Car-Sharing vorstellen können. Bei
          ausreichender Resonanz soll dann im Januar die Vereinsgründung
          erfolgen – und dann kann’s richtig losgehen!
        </p>
      </div>
      {/*
        <a className="btn btn-primary m-4">Button</a>
      */}
    </div>
  );
}
