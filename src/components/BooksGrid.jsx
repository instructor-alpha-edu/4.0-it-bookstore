import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

export default function BooksGrid({ searchQuery }) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBooks() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          searchQuery
            ? `https://www.dbooks.org/api/search/${searchQuery}`
            : "https://www.dbooks.org/api/recent"
        );
        setBooks(data.books);
      } catch (error) {
        setError(`Произошла ошибка при загрузки книг: ${error}`);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBooks();
  }, [searchQuery]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
  }

  if (error) {
    return <div id="error">{error}</div>;
  }

  return (
    <div className="books">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
