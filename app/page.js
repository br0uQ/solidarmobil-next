import Titlebar from "@/components/Titlebar";

export default function Home() {
  return (
    <div>
      <Titlebar
        heading="SolidarMobil"
      /* heading="Fahrzeug-Sharing im Raum Hersbruck" */
        subheading="Gemeinsam unterwegs, nachhaltig verbunden!"
      /* subheading="Wir ermöglichen und unterstützen das Teilen von Autos, Lastenrädern, Mobicards & Co." */
      />

      <div className="page-content">
        <h1 className="">SolidarMobil e.V.</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>

        <a className="btn btn-primary m-4">Button</a>
      </div>
    </div>
  );
}
