import "./Navbar.css";
import euroLogo from "../assets/EURO.png";
import Location from "../assets/location.png";
import Clock from "../assets/clock.png";
import Phone from "../assets/phone.png";
function Navbar() {
  return (
    <header>
      <div className="topbar">
        <div className="top-info">
        <img className="top-icon" src={Location} alt="Location"/>
          <div>
            <small>Наш адрес:</small>
            <p>г. Бишкек, ул. Паллада 69</p>
          </div>
        </div>

        <div className="top-info">
        <img className="top-icon" src={Clock} alt="Clock" />
          <div>
            <small>График работы:</small>
            <p>С 8:00 до 22:00 без выходных</p>
          </div>
        </div>

        <div className="top-info phone-info">
        <img className="top-icon"src={Phone} alt="Phone" />
          <div>
            <a href="tel:+77085151518">+7 (708) 51 51 518</a>
            <a href="tel:+77005151518">+7 (700) 51 51 518</a>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <a href="#home" className="navbar-logo">
          <img src={euroLogo} alt="EURO Truck Service" />
        </a>

        <div className="nav-links">
          <a href="#about">Это мы</a>
          <a href="#services">Почему мы?</a>
          <a href="#brands">А вот поэтому</a>
          <a href="#contact">Контакты</a>
        </div>

        <a href="#contact" className="nav-button">
          Заказать звонок
        </a>
      </nav>
    </header>
  );
}

export default Navbar;