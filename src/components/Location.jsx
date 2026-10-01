import "./Location.css";
import mapImage from "../assets/Map.png";

function Location() {
  return (
    <section className="location-section" id="location">
      <div className="location-content">
        <h2>Где мы?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          odio in et, lectus sit lorem id integer.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          odio in et, lectus sit lorem id integer.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          odio in et, lectus sit lorem id integer.
        </p>
      </div>

      <div className="location-map">
        <img src={mapImage} alt="Map Location" />
      </div>
    </section>
  );
}

export default Location;