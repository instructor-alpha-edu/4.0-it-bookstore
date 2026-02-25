import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa6";
import logo from "../assets/img/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-part">
          <img src={logo} alt="Logo" height="48" />
          <p className="footer-text">Все права защищены</p>
        </div>
        <div className="footer-part">
          <a href="https://www.youtube.com/" target="_blank" className="footer-link">
            <FaYoutube />
          </a>

          <a href="https://telegram.org/" target="_blank" className="footer-link">
            <FaTelegram />
          </a>

          <a href="https://www.instagram.com/" target="_blank" className="footer-link">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
