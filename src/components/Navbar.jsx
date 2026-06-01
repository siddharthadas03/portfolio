import { useEffect, useState } from "react";
import { navLinks } from "../data/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") ?? "dark");
  const directEmailLink =
    "mailto:siddharthadas620@gmail.com?subject=Let%27s%20build%20something";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <a href="#home" className="brand-lockup" onClick={() => setOpen(false)}>
            <span className="brand-mark">SD</span>
            <span className="brand-copy">
              <strong>Siddhartha Das</strong>
              <small>MERN Developer</small>
            </span>
          </a>

          <nav className="nav-links">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href={directEmailLink} className="nav-cta">
            Let&apos;s build
          </a>

          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            aria-pressed={theme === "light"}
            onClick={toggleTheme}
          >
            <span className="theme-toggle-track">
              <span className="theme-toggle-thumb" />
            </span>
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>

          <button
            className="menu-btn"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={directEmailLink} className="mobile-cta" onClick={() => setOpen(false)}>
            Email directly
          </a>
          <button className="mobile-theme-toggle" type="button" onClick={toggleTheme}>
            Switch to {theme === "dark" ? "light" : "dark"} theme
          </button>
        </div>
      )}
    </>
  );
}
