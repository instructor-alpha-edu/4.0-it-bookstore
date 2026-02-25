import { Link } from "react-router";
import { FaMagnifyingGlass } from "react-icons/fa6";
import logo from "../assets/img/logo.png";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-part">
          <Link to="/">
            <img src={logo} alt="Logo" height="48" />
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/books" className="nav-link">
                Книги
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="nav-link">
                Отзывы
              </Link>
            </li>
            <li>
              <Link to="/support" className="nav-link">
                Служба поддержки
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-part">
          <div>
            <FaMagnifyingGlass />
          </div>
        </div>
      </nav>
    </header>
  );
}
