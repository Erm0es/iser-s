import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/contactPage/ContactPage";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="kontakt" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

