import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-inner glass">

          {/* LEFT */}
          <h1 className="logo">Siddhartha</h1>

          {/* DESKTOP LINKS */}
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* MOBILE MENU ICON */}
          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

        </div>
      </header>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#education" onClick={() => setOpen(false)}>Education</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </>
  );
}
