import { Helmet } from "react-helmet-async";
import Hero from "../components/hero/Hero";
import AboutSection from "../components/aboutSection/AboutSection";
import GallerySection from "../components/gallerySection/GallerySection";
import ContactCTA from "../components/contactCta/ContactCTA";
import ServicesSection from "../components/servicesSection/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Iserås Kamin & Skorsten | Installation av kaminer & renovering av skorstenar</title>
        <meta
          name="description"
          content="Iserås Kamin & Skorsten hjälper dig med installation av kaminer, renovering av skorstenar och rådgivning för trygga och hållbara eldstadslösningar."
        />
        <link rel="canonical" href="https://iserås.se/" />
      </Helmet>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <ContactCTA withForm={false} />
    </>
  );
}
