import React from "react";
import "./servicesSection.css";

type ServiceItem = {
    title: string;
    description: string;
    cta?: string;
    href?: string;
    image?: string;
};

const defaultServices: ServiceItem[] = [
    {
        title: "Installation av kaminer",
        description:
            "Rådgivning, dimensionering och montering – anpassat för ditt hem och gällande regler.",
        cta: "Läs mer",
        href: "/tjanster/installation",
        image: "/images/service-installation.jpg",
    },
    {
        title: "Renovering av skorstenar",
        description: "Fodring, tätning och reparationer för trygg och effektiv rökkanal.",
        cta: "Se hur vi jobbar",
        href: "/tjanster/renovering",
        image: "/images/service-renovation.jpg",
    },
    {
        title: "Rådgivning & planering",
        description:
            "Val av kamin, placering och myndighetskrav – vi guidar från idé till klart.",
        cta: "Boka rådgivning",
        href: "/kontakt",
        image: "/images/service-advice.png",
    },
];

export default function ServicesSection({
    title = "Våra tjänster",
    subtitle = "Snabb översikt över hur vi kan hjälpa dig.",
    services = defaultServices,
}: {
    title?: string;
    subtitle?: string;
    services?: ServiceItem[];
}) {
    return (
        <section className="services">
            <div className="services__container">
                <header className="services__header">
                    <h2 className="services__title">{title}</h2>
                    <p className="services__subtitle">{subtitle}</p>
                </header>

                <div className="services__grid">
                    {services.map((s, i) => (
                        <article key={i} className="services__card" role="article" aria-label={s.title}>
                            <div
                                className="services__image"
                                style={{ backgroundImage: `url(${s.image})` }}
                            />
                            <div className="services__content">
                                <h3 className="services__cardTitle">{s.title}</h3>
                                <p className="services__cardText">{s.description}</p>
                                {s.href && (
                                    <a className="services__link" href={s.href}>
                                        {s.cta ?? "Läs mer"}
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}