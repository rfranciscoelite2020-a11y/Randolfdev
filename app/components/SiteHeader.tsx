"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const homeLinks = [
  { label: "Work", href: "/#work" },
  { label: "Websites", href: "/#websites" },
  { label: "Skills", href: "/#services" },
  { label: "Feedback", href: "/#testimonials" },
  { label: "Profiles", href: "/#profiles" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("rf-theme");
    const initialDark = stored ? stored === "dark" : false;
    document.documentElement.dataset.theme = initialDark ? "dark" : "light";
    const frame = window.requestAnimationFrame(() => setDark(initialDark));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    function updateHeader() {
      setScrolled(window.scrollY > 16);
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    function closeOnDesktop() {
      if (window.innerWidth > 900) setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [menuOpen]);

  function toggleTheme() {
    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? "dark" : "light";
    window.localStorage.setItem("rf-theme", nextDark ? "dark" : "light");
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="Randolf Francisco portfolio home">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-copy">
              <strong>Randolf Francisco</strong>
              <small>GoHighLevel implementation specialist</small>
            </span>
          </Link>

          <button
            className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            <span />
            <span />
            <span />
          </button>

          <nav id="main-navigation" className={menuOpen ? "nav nav-open" : "nav"} aria-label="Primary navigation">
            <div className="mobile-nav-head">
              <span>Portfolio navigation</span>
              <small>GoHighLevel · Automation · AI</small>
            </div>

            <div className="nav-links">
              {homeLinks.map((link, index) => (
                <Link href={link.href.replace("/#", "#")} onClick={closeMenu} key={link.href}>
                  <span className="mobile-nav-number">{String(index + 1).padStart(2, "0")}</span>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="nav-actions">
              <button className="theme-toggle" onClick={toggleTheme} aria-label={dark ? "Use light theme" : "Use dark theme"}>
                <span className="theme-icon" aria-hidden="true">{dark ? "☀" : "☾"}</span>
                <span className="theme-label">{dark ? "Light mode" : "Dark mode"}</span>
              </button>
              <a
                className="nav-cta"
                href="mailto:rfranciscoelite2020@gmail.com?subject=Portfolio%20or%20Work%20Opportunity"
                onClick={closeMenu}
              >
                Contact me <span aria-hidden="true">↗</span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      <button
        className={menuOpen ? "nav-scrim is-visible" : "nav-scrim"}
        onClick={closeMenu}
        aria-label="Close navigation"
        tabIndex={menuOpen ? 0 : -1}
      />
    </>
  );
}
