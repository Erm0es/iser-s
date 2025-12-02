import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import ServicesSection from "./components/servicesSection/ServicesSection";
import AboutSection from "./components/aboutSection/AboutSection";
import GallerySection from "./components/gallerySection/GallerySection";
import ContactCTA from "./components/contactCta/ContactCTA";

export default function App() {
   const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname === "/" && (
       <>
       <Hero />
       <ServicesSection/>
       <AboutSection/>
       <GallerySection />
       <ContactCTA withForm={true} />
       </>

      )}


      <main>
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/om-oss" element={<div>Om oss</div>} />
          <Route path="/tjanster" element={<div>Tjänster</div>} />
          <Route path="/galleri" element={<div>Galleri</div>} />
          <Route path="/kontakt" element={<ContactCTA withForm={true} />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

