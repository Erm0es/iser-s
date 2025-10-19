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
        <Link to="/" className="header__logo">
          <div className="header__logo-mark" />
          <span>Iserås Kamin & Skorsten</span>
        </Link>

        <nav className={`nav ${open ? "nav--open" : ""}`}>
          <NavLink to="/">Hem</NavLink>
          <NavLink to="/om-oss">Om oss</NavLink>
          <NavLink to="/tjanster">Tjänster</NavLink>
          <NavLink to="/galleri">Galleri</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
          <a href="tel:+4670XXXXXXX" className="nav__cta">Ring oss</a>
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
