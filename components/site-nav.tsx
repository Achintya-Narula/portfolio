"use client";

import { useState } from "react";

const navLinks = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
] as const;

export function SiteNav(): React.ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-nav-shell">
        <a className="site-name" href="#top" aria-label="Achintya Narula, back to top">
          Achintya Narula
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a className="resume-nav-link" href="#tracks">Resumes</a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen ? (
        <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#tracks" onClick={() => setMenuOpen(false)}>Resumes</a>
        </nav>
      ) : null}
    </header>
  );
}
