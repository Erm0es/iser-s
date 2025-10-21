import "./ContactCTA.css";

type ContactCTAProps = {
  withForm?: boolean; 
};

export default function ContactCTA({ withForm = false }: ContactCTAProps) {
  return (
    <section className="contact-cta" aria-labelledby="contact-cta-title">
      <div className="contact-cta__inner">
        <div className="contact-cta__text">
          <h2 id="contact-cta-title">Redo för värme i hemmet?</h2>
          <p>Hör av dig så hjälper vi dig med kamin och skorsten — tryggt och smidigt.</p>

          <div className="contact-cta__actions">
            <a href="/kontakt" className="contact-cta__button">Kontakta oss</a>

            <ul className="contact-cta__info">
              <li><a href="tel:+4670XXXXXXX">070-XXX XX XX</a></li>
              <li><a href="mailto:info@eldstad.nu">info@eldstad.nu</a></li>
              <li>Iserås, Västra Götaland</li>
            </ul>
          </div>
        </div>

        {withForm && (
          <form className="contact-cta__form" onSubmit={(e) => e.preventDefault()} aria-label="Snabbkontakt">
            <div className="form-row">
              <label htmlFor="cta-name">Namn</label>
              <input id="cta-name" name="name" type="text" required />
            </div>
            <div className="form-row">
              <label htmlFor="cta-email">E-post</label>
              <input id="cta-email" name="email" type="email" required />
            </div>
            <div className="form-row">
              <label htmlFor="cta-message">Meddelande</label>
              <textarea id="cta-message" name="message" rows={3} />
            </div>
            <button type="submit" className="contact-cta__submit">Skicka</button>
            <p className="contact-cta__privacy">Vi använder dina uppgifter enbart för att kunna besvara ditt meddelande
              och raderar dem efter avslutad kontakt.</p>
          </form>
        )}
      </div>
    </section>
  );
}
