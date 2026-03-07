import { Helmet } from "react-helmet-async";
import "./AboutPage.css";

export default function AboutPage() {
  <Helmet>
    <title>Om Iserås Kamin & Skorsten</title>
    <meta
      name="description"
      content="Lär känna Iserås Kamin & Skorsten och vårt arbete med installation av kaminer och renovering av skorstenar."
    />
  </Helmet>
  return (
    <main className="about">
      <section className="about__hero">
        <div className="about__container">
          <p className="about__eyebrow">Om Iserås</p>
          <h1 className="about__title">Värme, trygghet och hantverk</h1>
          <p className="about__lead">
            Vi på Iserås Skorsten & Kamin arbetar med installation, renovering
            och rådgivning för att skapa trygga och hållbara lösningar för
            hemmet. För oss handlar det inte bara om funktion, utan också om
            känslan av värme, trivsel och kvalitet.
          </p>
        </div>
      </section>

      <section className="about__story">
        <div className="about__container about__grid">
          <div className="about__textBlock">
            <h2 className="about__sectionTitle">Ett personligt och noggrant arbetssätt</h2>
            <p className="about__text">
              Vi tror på noggrant utfört arbete, tydlig kommunikation och
              lösningar som håller över tid. Oavsett om det gäller en ny kamin,
              renovering av skorsten eller planering inför ett framtida projekt
              vill vi göra processen enkel och trygg för dig som kund.
            </p>
            <p className="about__text">
              Varje hem är unikt, och därför utgår vi alltid från dina behov,
              förutsättningar och önskemål. Med ett personligt bemötande och
              fokus på detaljer hjälper vi dig från första idé till färdigt
              resultat.
            </p>
          </div>

          <div className="about__imageCard">
            <img
              src="/images/about-img.jpg"
              alt="Varm och inbjudande kaminmiljö i ett hem"
              className="about__image"
            />
          </div>
        </div>
      </section>

      <section className="about__values">
        <div className="about__container">
          <div className="about__sectionIntro">
            <p className="about__eyebrow">Det som är viktigt för oss</p>
            <h2 className="about__sectionTitle">Så vill vi att det ska kännas för dig att anlita Iserås!</h2>
          </div>

          <div className="about__cards">
            <article className="about__card">
              <h3 className="about__cardTitle">Trygghet</h3>
              <p className="about__cardText">
                Vi arbetar med omsorg och noggrannhet i varje steg, så att du
                kan känna dig säker genom hela processen.
              </p>
            </article>

            <article className="about__card">
              <h3 className="about__cardTitle">Kvalitet</h3>
              <p className="about__cardText">
                Vi strävar efter hållbara lösningar och ett resultat som både
                fungerar väl och känns rätt i ditt hem.
              </p>
            </article>

            <article className="about__card">
              <h3 className="about__cardTitle">Personlig service</h3>
              <p className="about__cardText">
                Vi tror på nära dialog, tydlig rådgivning och ett bemötande som
                känns enkelt, varmt och professionellt.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about__cta">
        <div className="about__container about__ctaInner">
          <div>
            <p className="about__eyebrow">Nästa steg</p>
            <h2 className="about__sectionTitle">Behöver du hjälp med kamin eller skorsten?</h2>
            <p className="about__text about__ctaText">
              Hör gärna av dig om du vill ha hjälp med rådgivning, installation
              eller renovering. Vi hjälper dig vidare från första tanke till
              färdigt resultat.
            </p>
          </div>

          <a href="/kontakt" className="about__button">
            Kontakta oss
          </a>
        </div>
      </section>
    </main>
  );
}