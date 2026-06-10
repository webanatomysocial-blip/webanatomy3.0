"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/css/Footer.css";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const webRef = useRef(null);
  const anatomyRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const webEl = webRef.current;
    const anatomyEl = anatomyRef.current;
    if (!footer || !webEl || !anatomyEl) return;

    // Use gsap.context for clean scoping and garbage collection
    const ctx = gsap.context(() => {
      // Set initial positions off-screen
      gsap.set(webEl, { x: "-100vw" });
      gsap.set(anatomyEl, { x: "100vw" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: "top bottom", // starts when footer top enters the bottom of viewport
          end: "bottom bottom", // completes when footer bottom is at the bottom of viewport
          scrub: 1.5,
        },
      });

      tl.to(webEl, { x: 0, ease: "power1.out" }, 0)
        .to(anatomyEl, { x: 0, ease: "power1.out" }, 0);
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="wa-footer" ref={footerRef}>
      {/* Top Row: Contact Details */}
      <div className="wa-footer-top">
        <div className="wa-footer-contact-item">
          <span className="wa-footer-label">Address</span>
          <span className="wa-footer-value">+91 98765 43210</span>
        </div>
        <div className="wa-footer-contact-item wa-align-right">
          <span className="wa-footer-label">Get in Touch</span>
          <a href="mailto:contact@wa.com" className="wa-footer-value wa-email-link">
            contact@wa.com
          </a>
        </div>
      </div>

      {/* Middle Row: Links and Socials */}
      <div className="wa-footer-middle">
        <div className="wa-footer-links">
          <Link href="/" className="wa-footer-link">Home</Link>
          <Link href="/services" className="wa-footer-link">Services</Link>
          <Link href="/about-us" className="wa-footer-link">About Us</Link>
          <Link href="/projects" className="wa-footer-link">Projects</Link>
          <Link href="/our-team" className="wa-footer-link">Our Team</Link>
          <Link href="/gallery" className="wa-footer-link">Gallery</Link>
        </div>
        <div className="wa-footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="wa-footer-link">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="wa-footer-link">Facebook</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="wa-footer-link">Linkedin</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="wa-footer-link">Twitter</a>
        </div>
      </div>

      {/* Big Animated Text: WebAnatomy */}
      <div className="wa-footer-bigtext-wrapper">
        <div className="wa-footer-bigtext-inner">
          <span ref={webRef} className="wa-footer-bigword">Web</span>
          <span ref={anatomyRef} className="wa-footer-bigword">Anatomy</span>
        </div>
      </div>

      {/* Bottom Row: Copyright and Legal */}
      <div className="wa-footer-bottom">
        <div className="wa-footer-copy">
          © {new Date().getFullYear()} WA. All rights reserved.
        </div>
        <div className="wa-footer-legal">
          <Link href="/privacy-policy" className="wa-footer-legal-link">Privacy Policy</Link>
          <Link href="/terms-of-service" className="wa-footer-legal-link">Terms of Service</Link>
          <Link href="/cookie-policy" className="wa-footer-legal-link">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}