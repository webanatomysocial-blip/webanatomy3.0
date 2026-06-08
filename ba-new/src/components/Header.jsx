"use client";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import "@/css/Header.css";
import { LenisContext } from "./LenisContext";

const MenuItems = () => {
  return (
    <>
    <div className="menu-items-wrapper">
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="nav-item"
            onClick={() => setMenuOpen(false)}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Primary text layer (slides up and blurs away on hover) */}
            <span className="text-layer text-primary">
              {item.name.split("").map((char, charIdx) => (
                <span
                  key={charIdx}
                  className="char"
                  style={{ transitionDelay: `${charIdx * 0.02}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>

            {/* Secondary text layer (slides up and clarifies from y: 100px on hover) */}
            <span className="text-layer text-secondary" aria-hidden="true">
              {item.name.split("").map((char, charIdx) => (
                <span
                  key={charIdx}
                  className="char"
                  style={{ transitionDelay: `${charIdx * 0.02}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </a>
        ))}
      </div>
      
    </>
  );
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const lenis = useContext(LenisContext);

  useEffect(() => {
    if (!lenis) {
      // Fallback native scroll if lenis is not ready
      let lastScrollY = window.scrollY;
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY <= 0) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        lastScrollY = currentScrollY;
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    // Smooth Lenis Scroll implementation
    let lastScrollY = lenis.scroll;
    const handleLenisScroll = (e) => {
      const currentScrollY = e.scroll;
      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    lenis.on('scroll', handleLenisScroll);
    return () => lenis.off('scroll', handleLenisScroll);
  }, [lenis]);

  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "CASE STUDIES", href: "/cases" },
    { name: "CONTACT", href: "/contact" }
  ];

  const bgColors = [
    "rgba(60, 24, 116, 1)",   // HOME (deep violet)
    "rgba(20, 25, 51, 1)",    // ABOUT (deep navy)
    "rgba(11, 42, 51, 1)",    // SERVICES (deep dark teal)
    "rgba(11, 40, 23, 1)",    // CASE STUDIES (deep pine green)
    "rgba(51, 12, 24, 1)"     // CONTACT (deep maroon)
  ];
  const defaultBg = "rgba(81, 37, 148, 1)";
  const currentBg = hoveredIndex !== null ? bgColors[hoveredIndex] : defaultBg;

  return (
    <header className={`site-header ${isVisible ? "" : "header-hidden"}`}>
      <div className="header-container">
        <a href="#" className="header-logo-link">
          <Image
            src={logo}
            alt="Business Anatomy Logo"
            className="header-logo"
            height={38}
            priority
          />
        </a>

        {/* Burger Button - Hidden when the menu overlays to let the centralized top close icon take over */}
        <button
          className={`menu-toggle ${menuOpen ? "hidden" : ""}`}
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <span className="burger-line line-top"></span>
          <span className="burger-line line-middle"></span>
          <span className="burger-line line-bottom"></span>
        </button>
      </div>

      {/* Fullscreen solid purple premium overlay menu */}
      <div 
        className={`nav-overlay ${menuOpen ? "active" : ""} ${hoveredIndex !== null ? "hovered" : ""}`}
        style={{ backgroundColor: currentBg }}
      >
        {/* Top Centered Close Button */}
        <button
          className="overlay-close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close Menu"
        >
          <svg
            className="overlay-close-icon"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Navigation list in center */}
        <nav className="overlay-nav-links">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="nav-item"
              onClick={() => setMenuOpen(false)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Primary text layer (slides up and blurs away on hover) */}
              <span className="text-layer text-primary">
                {item.name.split("").map((char, charIdx) => (
                  <span
                    key={charIdx}
                    className="char"
                    style={{ transitionDelay: `${charIdx * 0.02}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>

              {/* Secondary text layer (slides up and clarifies from y: 100px on hover) */}
              <span className="text-layer text-secondary" aria-hidden="true">
                {item.name.split("").map((char, charIdx) => (
                  <span
                    key={charIdx}
                    className="char"
                    style={{ transitionDelay: `${charIdx * 0.02}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </a>
          ))}
        </nav>

        {/* Footer exactly matching screenshot layout */}
        <div className="overlay-footer">
          <span className="overlay-footer-text">
            © 2026 BUSINESS ANATOMY. ALL RIGHTS RESERVED.
          </span>
          <span className="overlay-footer-design">
            DESIGNED BY WEB ANATOMY
          </span>
        </div>
      </div>
    </header>
  );
}
