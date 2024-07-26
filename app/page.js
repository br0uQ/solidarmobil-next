import Titlebar from "@/components/Titlebar";

export default function Home() {
  return (
    <div>
      <Titlebar
        heading="Gemeinsam mobil machen"
        subheading="Der SolidarMobil e.V. macht Fahrzeug-Sharing im Raum Hersbruck und Umgebung möglich."
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

        <a className="btn bg-accent text-accent-content m-4">Button</a>
      </div>
    </div>
  );
}
