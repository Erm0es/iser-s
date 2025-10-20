import "./GallerySection.css";
import { Link } from "react-router-dom";

//Bilder ligger i arr, kanske byta till db?
const images = [
  "/images/gallery/img1.jpg",
  "/images/gallery/img2.jpg",
  "/images/gallery/img3.jpg",
  "/images/gallery/img4.jpg",
];

export default function GallerySection() {
  return (
    <section className="gallery">
      <div className="gallery__inner">
        <h2>Inspirationsgalleri</h2>
        <p>
          Ta del av några av våra färdiga installationer – kaminer, skorstenar
          och eldstäder som sprider värme i hem runt om i västra götaland.
        </p>

        <div className="gallery__grid">
          {images.map((src, index) => (
            <div key={index} className="gallery__item">
              <img src={src} alt={`Galleri bild ${index + 1}`} />
              <div className="gallery__overlay">
                 <Link to="/galleri" className="gallery__overlay-link">
                  Se fler bilder
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
