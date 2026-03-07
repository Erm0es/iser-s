import { Helmet } from "react-helmet-async";
import { useState } from "react";
import "./galleryPage.css";

type GalleryImage = {
  src: string;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/kamin-1.jpg", alt: "Kamin i vardagsrum" },
  { src: "/images/gallery/kamin-2.jpg", alt: "Modern kamin" },
  { src: "/images/gallery/kamin-3.jpg", alt: "Kaminhörna i hem" },
  { src: "/images/gallery/kamin-4.jpg", alt: "Renoverad skorsten" },
  { src: "/images/gallery/kamin-5.jpg", alt: "Kamininstallation" },
  { src: "/images/gallery/kamin-6.jpg", alt: "Detaljbild eldstad" },
  { src: "/images/gallery/kamin-7.jpg", alt: "Kamin i interiör" },
  { src: "/images/gallery/kamin-8.jpg", alt: "Varm kaminmiljö" },
  { src: "/images/gallery/kamin-9.jpg", alt: "Skorsten med utsikt" },
  { src: "/images/gallery/kamin-10.jpg", alt: "Putsad kamin" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <Helmet>
        <title>Galleri | Iserås Kamin & Skorsten</title>
        <meta
          name="description"
          content="Se bilder från våra kamininstallationer, renoverade skorstenar och inspirerande eldstadsmiljöer från projekt i Västra Götaland."
        />
        <meta
          name="keywords"
          content="kamin galleri, eldstad inspiration, kamininstallation bilder, skorsten renovering, Iserås Kamin & Skorsten"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="galleryPage">
        <section className="galleryPage__hero">
          <div className="galleryPage__container">
            <p className="galleryPage__eyebrow">Galleri</p>
            <h1 className="galleryPage__title">Miljöer och inspiration</h1>
            <p className="galleryPage__lead">
              Här har vi samlat ett urval av miljöer och detaljer från olika
              projekt för att visa känslan och lösningarna vi arbetar med.
            </p>
          </div>
        </section>

        <section className="galleryPage__content">
          <div className="galleryPage__container">
            <div className="galleryPage__masonry">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  className="galleryPage__item"
                  onClick={() => setSelectedImage(image)}
                  aria-label={`Öppna bild: ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="galleryPage__image"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {selectedImage && (
          <div
            className="galleryPage__lightbox"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Förstorad bild"
          >
            <div
              className="galleryPage__lightboxContent"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="galleryPage__close"
                onClick={() => setSelectedImage(null)}
                aria-label="Stäng bild"
              >
                ×
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="galleryPage__lightboxImage"
              />

              <p className="galleryPage__caption">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}