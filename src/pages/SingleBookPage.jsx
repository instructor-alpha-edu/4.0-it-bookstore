import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SingleBookPage() {
  const { isbn13 } = useParams();
  const [bookDetails, setBookDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchBookByISBN13(id) {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`https://api.itbook.store/1.0/books/${id}`);
        setBookDetails(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBookByISBN13(isbn13);
  }, [isbn13]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <section id="book">
      <div className="book-part">
        <img
          src={bookDetails.image}
          alt={`Book's image for ${bookDetails.isbn13}`}
          className="book-poster"
        />
      </div>
      <div className="book-part">
        <h2 className="title">{bookDetails.title}</h2>
        <p className="book-description">{bookDetails.desc}</p>
      </div>
    </section>
  );
}
