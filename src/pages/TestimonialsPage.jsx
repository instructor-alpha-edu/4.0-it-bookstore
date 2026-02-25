import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { testimonials } from "../data/testimonials";
import TestimonialsItem from "../components/TestimonialsItem";
import { useState } from "react";

export default function TestimonialsPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  function previousSlide() {
    setActiveSlide(prev => (prev > 0 ? prev - 1 : 0));
  }

  function nextSlide() {
    setActiveSlide(prev => (prev < 2 ? prev + 1 : prev));
  }

  return (
    <section id="testimonials">
      <div className="testimonials-header">
        <h2 className="title">Отзывы клиентов</h2>
        <div className="testimonials-nav">
          <div className="testimonials-btn" onClick={previousSlide}>
            <FaArrowLeft />
          </div>
          <div className="testimonials-btn" onClick={nextSlide}>
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonials-container" style={{ marginLeft: `-${activeSlide * 100}%` }}>
          {testimonials.map((item, idx) => (
            <TestimonialsItem
              key={idx}
              text={item.text}
              profilePictureUrl={item.profilePictureUrl}
              authorName={item.authorName}
              authorJobPosition={item.authorJobPosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
