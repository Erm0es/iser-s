import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/contactPage/ContactPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ServicesPage from "./pages/servicesPage/ServicesPage";
import GalleryPage from "./pages/galleryPage/GalleryPage";


export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="kontakt" element={<ContactPage />} />
          <Route path="om-oss" element={<AboutPage />} />
          <Route path="tjanster" element={<ServicesPage />} />
          <Route path="galleri" element={<GalleryPage />} />

        </Routes>
      </main>
      <Footer />
    </>
  );
}

