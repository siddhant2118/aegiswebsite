"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#waitlist", label: "Waitlist" },
]

export function LandingNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="landing-nav-wrap" data-hero-item>
      <nav className="landing-nav" aria-label="Primary">
        <Link href="/" className="landing-brand" aria-label="AegisCycle home">
          <span className="landing-brand-mark" aria-hidden>
            AC
          </span>
          <span className="landing-brand-name">AegisCycle</span>
        </Link>

        <ul className="landing-nav-links" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#waitlist" className="landing-nav-cta" data-magnet>
          Join Waitlist
        </a>

        <button
          type="button"
          className="landing-nav-menu-btn"
          aria-expanded={menuOpen}
          aria-controls="landing-mobile-nav"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div id="landing-mobile-nav" className={`landing-mobile-nav ${menuOpen ? "is-open" : ""}`}>
        <ul role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#waitlist" className="landing-mobile-cta" onClick={() => setMenuOpen(false)}>
          Join Waitlist
        </a>
      </div>
    </header>
  )
}
