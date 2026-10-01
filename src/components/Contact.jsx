import "./Contact.css";
import truckdriver from "../assets/TruckDriver.png";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      {/* Background Graphic */}
      <img
        src={truckdriver}
        alt="Автомеханик"
        className="contact-bg-image"
      />

      {/* Form Card */}
      <div className="contact-card">
        <h2>Остались вопросы?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nunc odio in et, lectus sit lorem id integer.
        </p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Имя"
            className="contact-input"
          />
          <input
            type="tel"
            placeholder="Номер телефона"
            className="contact-input"
          />
          <button type="submit" className="contact-submit-btn">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;