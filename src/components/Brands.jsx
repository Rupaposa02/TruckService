import "./Brands.css";

import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";

const brands = [
  { id: "scania", image: brand1, name: "Scania" },
  { id: "volvo", image: brand2, name: "Volvo" },
  { id: "man", image: brand3, name: "MAN" },
  { id: "daf", image: brand4, name: "DAF" },
  { id: "renault", image: brand5, name: "Renault" },
];

function Brands() {
  return (
    <section className="brands" id="brands">
      <div className="brands-content">
        <h2>У вас вопрос кто мы а кто мы блин</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer.
        </p>
      </div>

      <div className="brands-logos">
        {brands.map((brand) => (
          <div className={`brand-logo brand-${brand.id}`} key={brand.name}>
            <img src={brand.image} alt={brand.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;