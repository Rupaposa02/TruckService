import "./Footer.css";
import footerLogo from "../assets/euro2.png";
import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram.png";
import whatsappIcon from "../assets/what'sapp.png";
import pinIcon from "../assets/pin.png";

function Footer() {
  return (
    <footer className="footer-section" id="footer">
      <div className="footer-container">
        {/* Logo: width 200, height 40, top 50px, left 146px */}
        <div className="footer-logo">
          <img src={footerLogo} alt="Euro Truck Service" />
        </div>

        {/* Home Column: width 285, height 166, gap 15px */}
        <div className="footer-col col-home">
          <h3>Главная</h3>
          <ul>
            <li><a href="#about">Это мы</a></li>
            <li><a href="#who">Кто мы</a></li>
            <li><a href="#why">Почему мы?</a></li>
            <li><a href="#questions">Остались вопросы</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </div>

        {/* Contacts Column: width 285, height 213, gap 15px */}
        <div className="footer-col col-contacts">
          <h3>Контакты</h3>
          <div className="contacts-list">
            <span className="contact-item">+7 (708) 802 88 88</span>
            <span className="contact-item">+7 (708) 803 88 88</span>
            <span className="contact-item">+7 (708) 51 51 518</span>
            <span className="contact-item">+7 (700) 51 51 518</span>
            <span className="contact-item icon-item">
              <img src={whatsappIcon} alt="WhatsApp" className="footer-icon" />
              <span>+7 (708) 802 88 88</span>
            </span>
            <span className="contact-item icon-item">
              <img src={pinIcon} alt="Location" className="footer-icon pin-icon" />
              <span>г. Бишкек, ул. Ляляля 69</span>
            </span>
          </div>
        </div>

        {/* Follow Us Column: width 285, height 99.83, gap 15px */}
        <div className="footer-col col-follow">
          <h3>Следите за нами</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
              <span>truck_service_officlaL</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" className="social-icon" />
              <span>truck_service_officlaL</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Divider & Text */}
      <div className="footer-bottom">
        <p>Copyright © Truck Services 2022. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;