import { Helmet } from "react-helmet-async";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Kontakt | Iserås Kamin & Skorsten</title>
        <meta
          name="description"
          content="Kontakta Iserås Kamin & Skorsten för rådgivning, installation av kamin, renovering av skorsten och personlig service i Västra Götaland."
        />
        <meta
          name="keywords"
          content="kontakt, Iserås Kamin & Skorsten, kamininstallation, skorsten, skorstensrenovering, rådgivning, Västra Götaland"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="contact" aria-labelledby="contact-title">
        <div className="contact__inner">
          {/* Sektionstitel + intro */}
          <header className="contact__header">
            <h1 id="contact-title">Kontakta oss</h1>
            <p className="contact__lead">
              Snabb återkoppling och personlig service. Vi hjälper dig hitta rätt
              kamin och en trygg installation – från första samtal till första
              brasan.
            </p>
          </header>

          {/* Kort-grid med CTA */}
          <section className="contact__cards" aria-label="Kontaktvägar">
            {/* CALL */}
            <article className="contact-card call-card">
              <div className="contact-card__glass">
                <h3>Skicka ett Sms</h3>
                <p>
                  För snabbast svar skicka ett <strong>sms.</strong>
                </p>
                <a className="btn btn--primary" href="tel:+46707444467">
                  0707-444&nbsp;467
                </a>
              </div>
            </article>

            {/* MAIL */}
            <article className="contact-card mail-card">
              <div className="contact-card__glass">
                <h3>Mejla oss</h3>
                <p>Vi svarar normalt inom 24 timmar.</p>
                <a className="btn btn--secondary" href="mailto:info@eldstad.nu">
                  info@eldstad.nu
                </a>
              </div>
            </article>
          </section>

          {/* Serviceområde */}
          <section className="contact__service" aria-label="Serviceområde">
            <h2>Vi kommer till dig i Västra Götaland!</h2>
            <p className="muted">
              Vi utgår från Göteborg stad. Offert och tid enligt överenskommelse.
            </p>
            <p className="contact__partner">
              <a
                href="https://eldabutiken.se/butik/goteborg-centrum/"
                target="_blank"
                rel="noopener noreferrer"
              >
                I samarbete med Elda 🔥
              </a>
            </p>
          </section>

          {/* FAQ */}
          <section className="contact__faq" aria-label="Vanliga frågor">
            <h2>Vanliga frågor</h2>

            <details>
              <summary>Behöver jag bygglov eller räcker anmälan?</summary>
              <p>
                Ofta räcker en anmälan till kommunen vid installation av kamin
                och skorsten. Vi guidar dig i vad som gäller för din bostad.
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
                Ja. Vi hjälper med rådgivning, beställning, auktoriserad
                montering och genomgång.
              </p>
            </details>
          </section>
        </div>
      </section>
    </>
  );
}