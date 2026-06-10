"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import logoImg from "@/assets/logo.png";
import WhiteButton from "@/components/WhiteButton";
import "@/css/Header.css";

// Import dummy images for the carousel
import s1 from "@/assets/images/Services/service-1.webp";
import s2 from "@/assets/images/Services/service-2.webp";
import s3 from "@/assets/images/Services/service-3.webp";
import s4 from "@/assets/images/Services/service-4.webp";

const CAROUSEL_IMAGES = [s1.src, s2.src, s3.src, s4.src];

const Carousel = ({ currentIndex }) => {
  return (
    <div className="menu-carousel-box">
      <div 
        className="menu-carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {CAROUSEL_IMAGES.map((src, i) => (
          <div key={i} className="menu-carousel-slide">
            <img
              src={src}
              alt={`Work Showcase ${i + 1}`}
              className="menu-carousel-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Handle scroll behavior (smart sticky)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsTop(currentScrollY === 0);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down -> hide header
        setVisible(false);
      } else {
        // Scrolling up -> show header
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Carousel auto-slide timer (Slides right to left)
  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Header Container */}
      <header
        className={`header-container ${!visible && !isOpen ? "header-hidden" : ""} ${
          !isTop || isOpen ? "header-scrolled" : ""
        }`}
      >
        <Link href="/" className="header-logo-link">
          <img src={logoImg.src} alt="Web Anatomy Logo" className="header-logo" />
        </Link>

        {/* Hamburger Icon (acts as morphing close button when open) */}
        <button
          className={`hamburger-btn ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          <span className="hamburger-line hamburger-line-top"></span>
          <span className="hamburger-line hamburger-line-middle"></span>
          <span className="hamburger-line hamburger-line-bottom"></span>
        </button>
      </header>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="menu-overlay"
          >
            <div className="menu-content">
              {/* Left Column: Navigation Links */}
              <nav className="menu-links-list">
                <Link href="/about-us" className="menu-item-link">
                  About us
                </Link>
                <Link href="/services" className="menu-item-link">
                  Services
                </Link>
                <Link href="/works" className="menu-item-link">
                  Case Studies
                </Link>
                <Link href="#" className="menu-item-link">
                  Industries
                </Link>
                <Link href="#" className="menu-item-link">
                  Contact
                </Link>
              </nav>

              {/* Right Column: Carousel + Styled Capsule Footer Box */}
              <div className="menu-right-panel">
                <Carousel currentIndex={carouselIndex} />
                
                <div className="menu-footer-bar">
                  <div className="menu-socials">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu-social-link"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu-social-link"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu-social-link"
                    >
                      X
                    </a>
                    <a
                      href="https://behance.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu-social-link"
                    >
                      Behance
                    </a>
                    <a
                      href="https://contra.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menu-social-link"
                    >
                      Contra
                    </a>
                  </div>

                  <Link href="/services" style={{ textDecoration: 'none' }}>
                    <WhiteButton text="View All Services" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
