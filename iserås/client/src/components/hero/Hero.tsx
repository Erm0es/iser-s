import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="hero__content">
          <h1>Kamininstallation och skorstensrenovering i Göteborg</h1>
          <p>
            Vi hjälper dig skapa värme i hemmet — säkert, snyggt och hållbart.
          </p>
          <Link to="/kontakt" className="hero__cta">
            Boka kostnadsfritt hembesök
          </Link>
        </div>
      </div>
    </section>
  );
}