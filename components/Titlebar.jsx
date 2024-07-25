import imgHero from "../public/img/hero_smartphone_car.jpg";

export default function Titlebar(props) {
  const defHeading = "Heading";
  const defSubheading = "";
  // background color: dark green #679436 => rgb(100, l48, 54)

  return (
    <div
      className="hero min-h-screen bg-primary text-primary-content mb-12"
      style={{
        backgroundImage: `url(${imgHero.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center">
        <div className="text-5xl font-nothing">
          <h1>{props.heading || defHeading}</h1>
          {/*<h2 className="mb-3">{props.subheading || defSubheading}</h2> */}
        </div>
      </div>
    </div>
  );
}
