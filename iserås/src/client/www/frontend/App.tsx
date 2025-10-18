import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import ServicesSection from "./components/servicesSection/ServicesSection";

export default function App() {
   const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname === "/" && <Hero />}
      {location.pathname === "/" && <ServicesSection/>}

      <main>
        <Routes>
          <Route path="/" element={<div>Hem</div>} />
          <Route path="/om-oss" element={<div>Om oss</div>} />
          <Route path="/tjanster" element={<div>Tjänster</div>} />
          <Route path="/galleri" element={<div>Galleri</div>} />
          <Route path="/kontakt" element={<div>Kontakt</div>} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

