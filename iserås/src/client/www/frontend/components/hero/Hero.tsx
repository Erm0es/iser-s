import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="hero__content">
          <h1>Trygg installation av skorsten & kamin</h1>
          <p>
            Vi hjälper dig skapa värme i hemmet — säkert, snyggt och hållbart.
          </p>
          <a href="/kontakt" className="hero__cta">
            Boka kostnadsfritt hembesök
          </a>
        </div>
      </div>
    </section>
  );
}