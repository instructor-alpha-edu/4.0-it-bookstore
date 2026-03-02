import { Navigate, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import BooksPage from "../pages/BooksPage";
import SingleBookPage from "../pages/SingleBookPage";
import TestimonialsPage from "../pages/TestimonialsPage";
import SupportPage from "../pages/SupportPage";

export default function AppRouter() {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:isbn13" element={<SingleBookPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}
