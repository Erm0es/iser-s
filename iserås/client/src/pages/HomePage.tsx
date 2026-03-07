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
        <title>
          Iserås Kamin & Skorsten | Kamininstallation i Göteborg & Västra Götaland
        </title>

        <meta
          name="description"
          content="Iserås Kamin & Skorsten hjälper dig med kamininstallation, renovering av skorstenar och rådgivning i Göteborg och Västra Götaland. Tryggt hantverk från planering till färdig installation."
        />

        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Iserås Kamin & Skorsten",
  "url": "https://iseras.se",
  "description": "Installation av kaminer, renovering av skorstenar och rådgivning kring eldstäder i Göteborg och Västra Götaland.",
  "telephone": "+46707444467",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Västra Götaland"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "SE"
  },
  "serviceType": [
    "Kamininstallation",
    "Renovering av skorsten",
    "Rådgivning om eldstäder"
  ]
}
`}
        </script>
      </Helmet>

      <Hero />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <ContactCTA withForm={false} />
    </>
  );
}