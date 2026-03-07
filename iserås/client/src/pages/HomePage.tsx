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
          Iserås Kamin & Skorsten | Installation av kaminer & renovering av skorsten
        </title>

        <meta
          name="description"
          content="Iserås Kamin & Skorsten hjälper dig med installation av kaminer, renovering av skorstenar och rådgivning för trygga och hållbara eldstadslösningar."
        />

        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Iserås Kamin & Skorsten",
  "url": "https://iserås.se",
  "description": "Installation av kaminer, renovering av skorstenar och rådgivning kring eldstäder. I västra götaland, Göteborg. ",
  "telephone": "+460707444467",
  "areaServed": "Göteborg",
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
