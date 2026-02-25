import { Link } from "react-router";

export default function BookCard({ book }) {
  return (
    <Link to={`/books/${book.isbn13}`} className="books-item">
      <div className="books-img">
        <img src={book.image} alt={`Book's image for ${book.isbn13}`} />
      </div>
      <div className="books-info">
        <h6 className="books-title">{book.title}</h6>
        <span className="books-price">{book.price}</span>
      </div>
    </Link>
  );
}
