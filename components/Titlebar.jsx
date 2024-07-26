import imgHero from "../public/img/hero_smartphone_car.jpg";

export default function Titlebar(props) {
  const defHeading = "Heading";
  const defSubheading = "";
  // background color: dark green #679436 => rgb(100, l48, 54)

  return (
    <div
      className="hero min-h-screen mb-12"
      style={{
        backgroundImage: `url(${imgHero.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-heading">
            {props.heading || defHeading}
          </h1>
          <p className="mb-5 font-subheading italic text-3xl">
            {props.subheading || defSubheading}
          </p>
        </div>
      </div>
    </div>
  );
}
