import { useSearchParams } from "react-router";
import BooksGrid from "../components/BooksGrid";

export default function SearchPage() {
  const [searchParams] = useSearchParams();

  return (
    <section id="books">
      <h2 className="title">Результаты поиска</h2>
      <BooksGrid searchQuery={searchParams.get("searchQuery")} />
    </section>
  );
}
