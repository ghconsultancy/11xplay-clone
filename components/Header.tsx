"use client";

import Link from "next/link";
import { useState } from "react";

const sportMenuLinks = [
  { href: "/", label: "Home" },
  { href: "/sports/cricket", label: "Cricket" },
  { href: "/sports/ipl", label: "IPL 2026", blinker: true },
  { href: "/sports/kabaddi", label: "Kabaddi" },
  { href: "#", label: "Football" },
  { href: "#", label: "Tennis" },
  { href: "#", label: "Horse Racing" },
  { href: "#", label: "Basketball" },
  { href: "#", label: "Volleyball" },
  { href: "#", label: "Table Tennis" },
  { href: "/casino", label: "Live Casino" },
  { href: "/app", label: "Download App" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-wrapper">
      {/* Marquee ticker */}
      <div className="marquee-bar" aria-hidden="true">
        <div className="marquee-track">
          <span>
            🔴 LIVE: India vs Pakistan — Match in Progress &nbsp;|&nbsp;
            🏆 IPL 2026 Season Live Now &nbsp;|&nbsp;
            💰 Instant UPI Withdrawal Available &nbsp;|&nbsp;
            🎰 New Casino Games Added &nbsp;|&nbsp;
            🏏 CSK vs MI — Today 7:30 PM IST &nbsp;|&nbsp;
            📲 Get Instant ID on WhatsApp &nbsp;|&nbsp;
            🔴 LIVE: India vs Pakistan — Match in Progress &nbsp;|&nbsp;
            🏆 IPL 2026 Season Live Now &nbsp;|&nbsp;
            💰 Instant UPI Withdrawal Available &nbsp;|&nbsp;
            🎰 New Casino Games Added &nbsp;|&nbsp;
            🏏 CSK vs MI — Today 7:30 PM IST &nbsp;|&nbsp;
            📲 Get Instant ID on WhatsApp &nbsp;|&nbsp;
          </span>
          <span aria-hidden="true">
            🔴 LIVE: India vs Pakistan — Match in Progress &nbsp;|&nbsp;
            🏆 IPL 2026 Season Live Now &nbsp;|&nbsp;
            💰 Instant UPI Withdrawal Available &nbsp;|&nbsp;
            🎰 New Casino Games Added &nbsp;|&nbsp;
            🏏 CSK vs MI — Today 7:30 PM IST &nbsp;|&nbsp;
            📲 Get Instant ID on WhatsApp &nbsp;|&nbsp;
            🔴 LIVE: India vs Pakistan — Match in Progress &nbsp;|&nbsp;
            🏆 IPL 2026 Season Live Now &nbsp;|&nbsp;
            💰 Instant UPI Withdrawal Available &nbsp;|&nbsp;
            🎰 New Casino Games Added &nbsp;|&nbsp;
            🏏 CSK vs MI — Today 7:30 PM IST &nbsp;|&nbsp;
            📲 Get Instant ID on WhatsApp &nbsp;|&nbsp;
          </span>
        </div>
      </div>

      {/* Top header bar */}
      <div className="top-header">
        <div className="header-inner">
          {/* Logo */}
          <div className="header-logo">
            <Link href="/" aria-label="11xPlay Home">
              <span className="logo-text">
                11x<span>Play</span>
              </span>
            </Link>
          </div>

          {/* Rules link — desktop */}
          <nav className="header-nav-rules" aria-label="Site links">
            <Link href="/responsible-gaming" className="rules-link">
              Responsible Gaming
            </Link>
          </nav>

          {/* Search + Auth — desktop */}
          <div className="header-actions">
            <input
              type="search"
              placeholder="Search Events"
              className="search-input"
              aria-label="Search events"
            />
            <Link href="/login" className="btn-login">
              LogIn
            </Link>
            <Link href="/login" className="btn-register">
              Register
            </Link>
          </div>

          {/* Mobile: auth buttons + hamburger */}
          <div
            className="flex items-center gap-2 ml-auto md:hidden"
            style={{ flexShrink: 0 }}
          >
            <Link
              href="/login"
              className="btn-login"
              style={{ fontSize: "12px", padding: "4px 10px" }}
            >
              LogIn
            </Link>
            <Link
              href="/login"
              className="btn-register"
              style={{ fontSize: "12px", padding: "4px 10px" }}
            >
              Register
            </Link>
            <button
              className="hamburger"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className="ham-line"
                style={
                  menuOpen
                    ? { transform: "translateY(7px) rotate(45deg)" }
                    : {}
                }
              />
              <span
                className="ham-line"
                style={menuOpen ? { opacity: 0 } : {}}
              />
              <span
                className="ham-line"
                style={
                  menuOpen
                    ? { transform: "translateY(-7px) rotate(-45deg)" }
                    : {}
                }
              />
            </button>
          </div>
        </div>
      </div>

      {/* Sport menu nav — desktop scrollable */}
      <nav className="sport-menu" aria-label="Sport categories">
        <ul className="sport-menu-list">
          {sportMenuLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`sport-menu-link${link.blinker ? " ipl-link" : ""}`}
              >
                {link.blinker && (
                  <span className="blinker-dot" aria-hidden="true" />
                )}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-menu-dropdown md:hidden">
          {sportMenuLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`mobile-menu-item${link.blinker ? " ipl-item" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.blinker && (
                <span className="blinker-dot" aria-hidden="true" />
              )}
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
