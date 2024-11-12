import Titlebar from "@/components/Titlebar";
import Image from "next/image";
import imgCarPhone from "/public/img/hero_smartphone_car.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Titlebar
        heading="AUTOS TEILEN STATT BESITZEN"
        /* heading="Fahrzeug-Sharing im Raum Hersbruck" */
        subheading="Mach mit bei der Car-Sharing-Initiative „SolidarMOBIL“ in und um Hersbruck!"
        /* subheading="Wir ermöglichen und unterstützen das Teilen von Autos, Lastenrädern, Mobicards & Co." */
      />
      <div className="flex flex-col-reverse lg:flex-row-reverse ">
        <Image
          src={imgCarPhone}
          className="max-w-sm rounded-lg aspect-video object-center object-cover mb-12 md:my-12 md:mx-16"
          alt="Picture of a car that has solidarMOBIL written on it"
        />
        <div className="bg-base-100 text-black page-element">
          <h1 className="">Zielvorstellung</h1>
          <p>
            In einer Gruppe aktiver Leute aus Hersbruck und Umgebung bringen
            sich Menschen aus unterschiedlichsten Gründen in die Initiative ein.
            Die Zielvorstellung sieht für alle so aus: Braucht man ein Auto,
            nimmt man mit &quot;SolidarMobil&quot; Kontakt auf. Zu einem genau
            ermittelten Tarif, der gerade die Kosten deckt, kann man dann einen
            vereinseigenen PKW nutzen. Um Kundendienst, Versicherung,
            Reparaturen, Tankstellenbesuche etc. muss man sich nicht kümmern.
            Das ist tatsächlich günstiger, als ein Auto privat zu halten, denn
            die Basiskosten werden ja geteilt. Und der überlegte, sparsame
            Einsatz von Kraftfahrzeugen steht natürlich, im Einklang mit einem
            verantwortlichen Umgang mit der Umwelt, im Satzungsentwurf des
            Vereins &quot;SolidarMobil&quot;.
          </p>
        </div>
      </div>

      <div className="bg-secondary text-black page-element md:flex">
        <p className="mb-6">
          Um Bedarf und Interesse an einem Carsharing festzustellen, sowie auch
          um besser planen zu können wie dieses Carsharing gestaltet sein soll,
          haben wir eine Umfrage laufen.
        </p>
        <Link href="/umfrage">
          <button className="btn btn-primary m-4">
            Umfrage
          </button>
        </Link>
      </div>

      <div className="bg-base-200 text-black page-element">
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

      <div className="bg-base-100 text-black px-6 md:px-16 md:flex">
        <div className="pt-6 md:pt-12 md:pr-8">
          <h1 className="">Wie geht es weiter?</h1>
          <p>
            Voraussetzung, um das Ziel zu erreichen, ist eine Vereinsgründung
            mit einer ausreichend großen Anzahl an Mitgliedern. Nur dann ist es
            möglich, zwei oder mehr Fahrzeuge zum Beispiel mittels
            Überlassungsverträgen zu beschaffen, sie zu betreuen und zu
            betreiben.
          </p>
        </div>

        <div className="py-6 md:py-12 md:pl-8">
          <h1 className="">Nicht nur Autos teilen</h1>
          <p>
            Die Initiator/innen denken auch schon weiter: Es sollen nicht nur
            Kraftfahrzeuge sinnvoll und sparsam zum Einsatz kommen. Auch der
            Austausch von Fahrrädern, vor allem von elektrischen, sowie die
            gemeinsame Nutzung geeigneter Fahrkarten für den öffentlichen
            Nahverkehr werden angestrebt.
          </p>
        </div>
      </div>

      <div className="bg-base-200 text-black page-element">
        <h1 className="text-center">Einladung zur Infoveranstaltung</h1>
        <p>
          Am Mittwoch, 13. November 2024, findet um 19:15 Uhr in den Räumen des
          Kulturbahnhof Hersbruck e.V. am Hersbrucker Bahnhof r. d. P. ein
          Treffen für alle Interessierten statt. Der Satzungsentwurf, die
          bisherigen Konzepte und Kalkulationen sowie Ideen zur Kommunikation
          usw. werden vorgestellt und stehen zur Diskussion.
        </p>

        <p className="pt-4">
          Eingeladen hierzu sind alle Menschen, die sich zu dieser Chance des
          „etwas anderen Umgangs“ mit Mobilität gründlich informieren möchten,
          unabhängig davon, ob sie sich eine aktive oder eher eine passive
          Mitwirkung beim Car-Sharing vorstellen können.
        </p>

        <p className="pt-4">
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
