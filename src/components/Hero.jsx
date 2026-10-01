import "./Hero.css";
import trucks from "../assets/Trucks.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          <span>Affordable truck</span>
          <br />
          <span>service</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer.
        </p>

        <a href="#services" className="hero-button">
          Чета сделать
        </a>
      </div>

      <div className="hero-image">
        <img src={trucks} alt="EURO truck service vehicles" />
      </div>
    </section>
  );
}

export default Hero;









