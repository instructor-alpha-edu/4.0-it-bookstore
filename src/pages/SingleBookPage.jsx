import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SingleBookPage() {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchBookById(paramId) {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://www.dbooks.org/api/book/${paramId.toLowerCase()}`
        );
        setBookDetails(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBookById(id);
  }, [id]);

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
          alt={`Book's image for ${bookDetails.id}`}
          className="book-poster"
        />
      </div>
      <div className="book-part">
        <h2 className="title">{bookDetails.title}</h2>
        <p className="book-description">{bookDetails.description}</p>
      </div>
    </section>
  );
}
