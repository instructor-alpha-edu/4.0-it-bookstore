import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { GoSearch } from "react-icons/go";
import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "../providers/ThemeProvider";
import logo from "../assets/img/logo.png";

export default function Header() {
  const navigate = useNavigate();

  const { isDark, toggleTheme } = useTheme();
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  function toggleForm() {
    setFormIsOpen(!formIsOpen);
  }

  function handleSubmitSearchForm(event) {
    event.preventDefault();

    if (searchInput) {
      navigate(`/search?searchQuery=${searchInput}`);
      setSearchInput("");
      setFormIsOpen(false);
    }
  }

  return (
    <header className={`header ${isDark && "dark"}`}>
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

        <div className="nav-part nav-flex">
          {formIsOpen && (
            <form className="nav-form" onSubmit={handleSubmitSearchForm}>
              <input
                type="text"
                className="nav-input"
                placeholder="Поиск..."
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
              />
              <button type="submit" className="nav-submit">
                Отправить
              </button>
            </form>
          )}
          <button className="nav-btn" onClick={toggleForm}>
            <GoSearch />
          </button>
          <button className="nav-btn" onClick={toggleTheme}>
            {isDark ? <LuSun /> : <LuMoon />}
          </button>
        </div>
      </nav>
    </header>
  );
}
