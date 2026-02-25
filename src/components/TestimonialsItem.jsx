import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialsItem({
  text,
  profilePictureUrl,
  authorName,
  authorJobPosition,
}) {
  return (
    <div className="testimonials-item">
      <div className="testimonials-quote">
        <FaQuoteLeft />
      </div>
      <div className="testimonials-info">
        <p className="testimonials-text">{text}</p>
        <div className="testimonials-author">
          <img src={profilePictureUrl} alt="Avatar" className="testimonials-author__image" />
          <div className="testimonials-author__info">
            <h6 className="testimonials-author__name">{authorName}</h6>
            <p className="testimonials-author__position">{authorJobPosition}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
