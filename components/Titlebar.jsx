//import imgHero from "../public/img/hero_smartphone_car.jpg";
import imgHero from "../public/img/solidarMOBIL.jpg";

export default function Titlebar(props) {
  const defHeading = "Heading";
  const defSubheading = "";
  // background color: dark green #679436 => rgb(100, l48, 54)

  return (
    <div
      className="hero min-h-screen relative"
      style={{
        backgroundImage: `url(${imgHero.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <h1 className="absolute top-1/4 max-w-md mb-5 text-5xl font-heading font-medium">
          {props.heading || defHeading}
        </h1>
        <p className="absolute bottom-1/4 max-w-xl font-subheading italic text-3xl">
          {props.subheading || defSubheading}
        </p>
      </div>
    </div>
  );
}
