import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const handleScroll = () => setElevated(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${elevated ? "header--shadow" : ""}`}>
      <div className="header__inner">
        {/* 👇 Ny wrapper som staplar logga + partnerlänk */}
        <div className="header__brand">
          <Link to="/" className="header__logo">
            <span>Iserås Kamin & Skorsten</span>
          </Link>

          <a
            href="https://eldabutiken.se/butik/goteborg-centrum"
            target="_blank"
            rel="noopener noreferrer"
            className="header__partner"
          >
            i samarbete med <span>Elda</span>
          </a>
        </div>

        <nav className={`nav ${open ? "nav--open" : ""}`}>
          <NavLink to="/">Hem</NavLink>
          <NavLink to="/om-oss">Om oss</NavLink>
          <NavLink to="/tjanster">Tjänster</NavLink>
          <NavLink to="/galleri">Galleri</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
          <a href="tel:+46707444467" className="nav__cta">Ring oss</a>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setOpen((o) => !o)}
          aria-label="Öppna meny"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
