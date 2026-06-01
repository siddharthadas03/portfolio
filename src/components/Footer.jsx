import { socialLinks } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-inner">
          <div className="footer-meta">
            <strong>Siddhartha Das</strong>
            <p>MERN developer building clean products with modern UI.</p>
          </div>

          <div className="footer-links">
            {socialLinks.map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
