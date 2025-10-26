import Hero from "../components/hero/Hero";
import AboutSection from "../components/aboutSection/AboutSection";
import GallerySection from "../components/gallerySection/GallerySection";
import ContactCTA from "../components/contactCta/ContactCTA";
import ServicesSection from "../components/servicesSection/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <ContactCTA withForm={true} />
    </>
  );
}
