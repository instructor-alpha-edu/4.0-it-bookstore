import { FaArrowRight } from "react-icons/fa";
import homeImg from "../assets/img/home.png";

export default function HomePage() {
  return (
    <section id="home">
      <div className="home-part">
        <h1 className="title">Твоя личная библиотека в одном клике</h1>
        <p className="home-text">
          Погрузитесь в мир литературы: от вдохновляющих биографий до редких коллекционных изданий с
          быстрой доставкой
        </p>
        <div className="home-link-container">
          <a href="#home" className="home-link">
            Подробнее <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="home-part">
        <img src={homeImg} alt="Home" className="home-img" />
      </div>
    </section>
  );
}
