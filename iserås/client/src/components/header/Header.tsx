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

  const closeMenu = () => setOpen(false);

  return (
    <header className={`header ${elevated ? "header--shadow" : ""}`}>
      <div className="header__inner">
        <div className="header__brand">
          <Link to="/" className="header__logo" onClick={closeMenu}>
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
          <NavLink to="/" onClick={closeMenu}>
            Hem
          </NavLink>
          <NavLink to="/om-oss" onClick={closeMenu}>
            Om oss
          </NavLink>
          <NavLink to="/tjanster" onClick={closeMenu}>
            Tjänster
          </NavLink>
          <NavLink to="/galleri" onClick={closeMenu}>
            Galleri
          </NavLink>
          <NavLink to="/kontakt" onClick={closeMenu}>
            Kontakt
          </NavLink>
          <a href="tel:+46707444467" className="nav__cta" onClick={closeMenu}>
            Ring oss
          </a>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setOpen((o) => !o)}
          aria-label="Öppna meny"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}