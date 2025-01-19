import imgAbout from "/public/img/undraw/011b28/undraw_team_85hs.svg";

export default function UeberUns() {
  return (
    <main>
      <div className="hero bg-neutral text-secondary md:py-12 md:px-12 pb-6">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">Über uns</h1>
            {/*
            <button className="btn btn-primary">Mitglied werden</button>
          */}
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row-reverse ">
        <img
          src={imgAbout.src}
          className="md:max-w-md shadow-2xl max-w-sm rounded-lg mb-12 md:my-12 md:mx-16"
          alt=""
        />
        <div className="bg-base-100 text-black page-element">
          <h1 className="">Zielvorstellung</h1>
          <p>
            In einer Gruppe aktiver Leute aus Hersbruck und Umgebung bringen
            sich Menschen aus unterschiedlichsten Gründen in den Verein ein. Die
            Zielvorstellung sieht für alle so aus: Braucht man ein Auto, nimmt
            man mit SolidarMobil Kontakt auf. Zu einem genau ermittelten Tarif,
            der gerade die Kosten deckt, kann man dann einen vereinseigenen PKW
            nutzen. Um Kundendienst, Versicherung, Reparaturen etc. muss man
            sich nicht kümmern. Das ist tatsächlich günstiger, als ein Auto
            privat zu halten, denn die Basiskosten werden ja geteilt.
          </p>
        </div>
      </div>

      <div className="bg-base-200 text-black page-element">
        <h1 className="">Entstehung</h1>
        <p>
          Nach einem informativen Abend über einen{" "}
          <a className="link" href="https://www.carsharingimwendland.de/">
            selbstorganisierten Car-Sharing-Verein aus dem Wendland
          </a>
          , hat sich die Initiativgruppe aus unserer Region gebildet. Viel
          Energie wurde schon investiert, um (vereins-)rechtliche und
          (versicherungs-)technische Probleme zu klären. Es gibt zwar in dieser
          Hinsicht bereits Vorbilder in anderen Kommunen, doch noch immer ist
          das Vorhaben abseits von Großstädten nichts Alltägliches. Alles muss
          gewissenhaft durchdacht, kalkuliert und abgesichert werden.
        </p>

        <p className="pt-5">
          Am 15.01.2025 war es dann soweit und der Verein SolidarMobil wurde
          erfolgreich mit 17 Gründungsmitgliedern gegründet.
        </p>
      </div>
    </main>
  );
}
