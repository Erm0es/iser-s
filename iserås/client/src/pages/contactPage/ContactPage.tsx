import "./ContactPage.css";

export default function ContactPage() {
  return (
    <section className="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        
        {/* Sektionstitel + intro */}
        <header className="contact__header">
          <h1 id="contact-title">Kontakta oss</h1>
          <p className="contact__lead">
            Snabb återkoppling och personlig service. Vi hjälper dig hitta rätt kamin
            och en trygg installation – från första samtal till första brasan.
          </p>
        </header>

        {/* Kort-grid med CTA */}
        <section className="contact__cards" aria-label="Kontaktvägar">
          <article className="card">
            <h3>Ring oss</h3>
            <p>Snabbast svar vardagar 08–17.</p>
            <a className="btn btn--primary" href="tel:+4670XXXXXXX">
              070-XXX XX XX
            </a>
          </article>

          <article className="card">
            <h3>Mejla oss</h3>
            <p>Vi svarar normalt inom 24 timmar.</p>
            <a className="btn btn--secondary" href="mailto:info@eldstad.nu">
              info@eldstad.nu
            </a>
          </article>
        </section>

        {/* Serviceområde */}
        <section className="contact__service" aria-label="Serviceområde">
          <h2>Vi kommer till dig i Västra Götaland!</h2>
          <p className="muted">
            Vi utgår från Göteborg stad. Offert och tid enligt överenskommelse.
          </p>
        </section>

        {/* FAQ */}
        <section className="contact__faq" aria-label="Vanliga frågor">
          <h2>Vanliga frågor</h2>

          <details>
            <summary>Behöver jag bygglov eller räcker anmälan?</summary>
            <p>
              Ofta räcker en anmälan till kommunen vid installation av kamin och skorsten.
              Vi guidar dig i vad som gäller för din bostad.
            </p>
          </details>

          <details>
            <summary>Hur lång tid tar installationen?</summary>
            <p>
              Vanligen 1–2 dagar beroende på förutsättningar och vald modell.
            </p>
          </details>

          <details>
            <summary>Tar ni hela jobbet?</summary>
            <p>
              Ja. Vi hjälper med rådgivning, beställning, auktoriserad montering och genomgång.
            </p>
          </details>
        </section>
      </div>
    </section>
  );
}