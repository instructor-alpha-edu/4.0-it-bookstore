import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBooks() {
      try {
        setIsLoading(true);
        const { data } = await axios.get("https://api.itbook.store/1.0/new");
        setBooks(data.books);
      } catch (error) {
        setError(`Произошла ошибка при загрузки книг: ${error}`);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBooks();
  }, []);

  if (isLoading) {
    return (
      <section id="books">
        <h2 className="title">Последние книги</h2>
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="books">
        <h2 className="title">Последние книги</h2>
        <div id="error">{error}</div>
      </section>
    );
  }

  return (
    <section id="books">
      <h2 className="title">Последние книги</h2>
      <div className="books">
        {books.map(book => (
          <BookCard key={book.isbn13} book={book} />
        ))}
      </div>
    </section>
  );
}
