import { Navigate, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import BooksPage from "../pages/BooksPage";
import SingleBookPage from "../pages/SingleBookPage";
import TestimonialsPage from "../pages/TestimonialsPage";
import SupportPage from "../pages/SupportPage";
import SearchPage from "../pages/SearchPage";
import { useTheme } from "../providers/ThemeProvider";
import { useEffect } from "react";

export default function AppRouter() {
  const { isDark } = useTheme();

  useEffect(() => {
    document.body.style.background = isDark ? "#1c1c1c" : "#fff";
  }, [isDark]);

  return (
    <main className={`container ${isDark && "dark"}`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:id" element={<SingleBookPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}
