import './Services.css';
import service1 from "../assets/Service-Parts1.png";
import service2 from "../assets/Service-Parts2.png";
import service3 from "../assets/Service-Parts3.png";
import service4 from "../assets/Service-Parts4.png";

export default function Services() {
  return (
    <section className="services" id="services">
      <h2 className="services__title">Любые услуги за ваши денишки</h2>
      <p className="services__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem
        id integer.
      </p>

      <article className="services__card services__card--parts">
        <h3 className="services__card-title">Б/у запчасти для грузовых авто из Европы</h3>
        <p className="services__card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit
          lorem id integer.
        </p>
        <img className="services__card-image" src={service1} alt="Б/у запчасти для грузовых авто" />
      </article>

      <article className="services__card services__card--wash">
        <h3 className="services__card-title">Автомойка грузовых и легковых авто</h3>
        <p className="services__card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit
          lorem id integer.
        </p>
        <img className="services__card-image" src={service2} alt="Автомойка грузовых и легковых авто" />
      </article>

      <article className="services__card services__card--accessories">
        <h3 className="services__card-title">Магазин аксессуаров</h3>
        <p className="services__card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit
          lorem id integer.
        </p>
        <img className="services__card-image" src={service3} alt="Магазин аксессуаров" />
      </article>

      <article className="services__card services__card--oil">
        <h3 className="services__card-title">Пункт замены масла легковых авто</h3>
        <p className="services__card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit
          lorem id integer.
        </p>
        <img className="services__card-image" src={service4} alt="Пункт замены масла легковых авто" />
      </article>
    </section>
  );
}







