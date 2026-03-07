import { Helmet } from "react-helmet-async";
import "./servicesPage.css";

const services = [
    {
        title: "Installation av kaminer",
        text: "Vi hjälper dig att hitta rätt kaminlösning utifrån ditt hem, dina behov och gällande förutsättningar. Från planering till färdig installation arbetar vi med fokus på säkerhet, funktion och helhetskänsla.",
        points: [
            "Rådgivning inför val av kamin",
            "Planering utifrån hem och placering",
            "Trygg och noggrann installation",
        ],
        image: "/images/service1.jpg",
        reverse: false,
    },
    {
        title: "Renovering av skorstenar",
        text: "En väl fungerande skorsten är avgörande för både säkerhet och prestanda. Vi hjälper till med renovering, tätning och förbättringar för att skapa en hållbar och trygg lösning över tid.",
        points: [
            "Bedömning av befintligt skick",
            "Renovering",
            "Lösningar med fokus på hållbarhet",
        ],
        image: "/images/service2.jpg",
        reverse: true,
    },

    {
        title: "Rådgivning & planering",
        text: "Behöver du hjälp att planera från början? Vi guidar dig kring placering, val av lösning och vad som är viktigt att tänka på inför ett projekt, så att du får en lösning som passar både hemmet och behoven.",
        points: [
            "Hjälp att välja rätt lösning",
            "Planering inför kommande projekt",
            "Tydlig och personlig vägledning",
        ],
        image: "/images/service3.jpg",
        reverse: false,
    },
];

const steps = [
    {
        number: "01",
        title: "Kontakt & rådgivning",
        text: "Vi börjar med att lyssna på dina behov och går igenom vilka förutsättningar som finns i hemmet.",
    },
    {
        number: "02",
        title: "Planering & utförande",
        text: "Vi planerar lösningen tillsammans och ser till att arbetet utförs med omsorg, noggrannhet och kvalitet.",
    },
    {
        number: "03",
        title: "Klart för besiktning",
        text: "När installationen är färdig behöver den kontrolleras av en behörig besiktningsman innan eldstaden kan börja användas.",
    },
];

export default function ServicesPage() {
    <Helmet>
        <title>Tjänster | Kamininstallation och renovering av skorsten</title>
        <meta
            name="description"
            content="Läs mer om våra tjänster inom installation av kaminer, renovering av skorstenar, besiktning och rådgivning."
        />
    </Helmet>
    return (
        <main className="servicesPage">
            <section className="servicesPage__hero">
                <div className="servicesPage__container">
                    <p className="servicesPage__eyebrow">Våra tjänster</p>
                    <h1 className="servicesPage__title">Kamininstallation och renovering av skorsten</h1>
                    <p className="servicesPage__lead">
                        Vi hjälper dig med installation, renovering, service och rådgivning
                        för att skapa hållbara och trivsamma eldstadslösningar i hemmet.
                    </p>
                </div>
            </section>

            <section className="servicesPage__list">
                <div className="servicesPage__container">
                    {services.map((service, index) => (
                        <article
                            key={index}
                            className={`servicesPage__service ${service.reverse ? "servicesPage__service--reverse" : ""
                                }`}
                        >
                            <div className="servicesPage__serviceImageCard">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="servicesPage__serviceImage"
                                />
                            </div>

                            <div className="servicesPage__serviceContent">
                                <p className="servicesPage__serviceEyebrow">Tjänst</p>
                                <h2 className="servicesPage__sectionTitle">{service.title}</h2>
                                <p className="servicesPage__text">{service.text}</p>

                                <ul className="servicesPage__points">
                                    {service.points.map((point, i) => (
                                        <li key={i} className="servicesPage__point">
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <a href="/kontakt" className="servicesPage__linkButton">
                                    Kontakta oss
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="servicesPage__process">
                <div className="servicesPage__container">
                    <div className="servicesPage__sectionIntro">
                        <p className="servicesPage__eyebrow">Så går det till</p>
                        <h2 className="servicesPage__sectionTitle">En enkel och trygg process</h2>
                        <p className="servicesPage__text servicesPage__introText">
                            Vi vill att det ska kännas tydligt och tryggt att anlita oss – från
                            första kontakt till färdigt resultat.
                        </p>
                    </div>

                    <div className="servicesPage__steps">
                        {steps.map((step, index) => (
                            <article key={index} className="servicesPage__step">
                                <span className="servicesPage__stepNumber">{step.number}</span>
                                <h3 className="servicesPage__stepTitle">{step.title}</h3>
                                <p className="servicesPage__stepText">{step.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="servicesPage__cta">
                <div className="servicesPage__container servicesPage__ctaInner">
                    <div>
                        <p className="servicesPage__eyebrow">Nästa steg</p>
                        <h2 className="servicesPage__sectionTitle">
                            Behöver du hjälp att hitta rätt lösning?
                        </h2>
                        <p className="servicesPage__text servicesPage__ctaText">
                            Hör av dig så hjälper vi dig vidare med rådgivning, planering och
                            nästa steg för ditt projekt. Helt kostnadsfritt! Du kan också kontakta oss via {" "}
                            <a
                                href="https://eldabutiken.se/butik/goteborg-centrum/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="servicesPage__eldaLink"
                            >
                                Elda
                            </a>{" "}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}