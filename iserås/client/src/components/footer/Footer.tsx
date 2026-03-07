import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__info">
          <h3>Iserås Skorsten & Kamin</h3>
          <p>Trygg installation och service av skorstenar och kaminer.</p>
        </div>

        <div className="footer__contact">
          <h4>Kontakt</h4>
          <p>📞 0707-444467</p>
          <p>✉️ info@eldstad.nu</p>
          <p>📍 Göteborg, Västra Götaland</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Iserås Skorsten & Kamin. All rights reserved.</p>
      </div>
    </footer>
  );
}