import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__text">
          <h2>Varför välja Iserås Kamin & Skorsten?</h2>
          <p>
            Vi är ett lokalt familjeföretag med över 30 års erfarenhet av
            skorstenar, kaminer och eldstäder. Hos oss får du personlig service,
            gediget hantverk och trygga installationer – från första kontakt
            till färdig brasa.
          </p>

          <ul className="about__list">
            <li> 30+ års erfarenhet</li>
            <li> Lokalt familjeföretag</li>
            <li> Auktoriserade installatörer</li>
            <li> Fokus på trygghet och kvalitet</li>
          </ul>
        </div>

        <div className="about__image">
          <img src="/images/about.jpg" alt="Hantverkare installerar kamin" />
        </div>
      </div>
    </section>
  );
}