"use client";

import React, { useEffect, useRef } from "react";
import "@/css/AboutComponentsCss/ClientsRecognition.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bannerImg from "@/assets/images/about/banner.avif";
import ScrollOverlay from "../HomeComponents/ScrollOverlay";

export default function ClientsRecognition({ scrollOverlayColor = "white", title, tag }) {
  const sectionRef = useRef(null);
  const floatingImgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const floatingImg = floatingImgRef.current;
    if (!section) return;

    const anims = [];

    if (floatingImg) {
      // Smooth parallax GSAP scroll effect on the floating dummy image
      const anim = gsap.to(floatingImg, {
        y: 160, // smoothly scrolls downward relative to the section scroll
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // scrubbing with delay for premium smoothness
        },
      });
      anims.push(anim);
    }

    // Scroll overlay divs animation aligned with top of the section
    const elements = section.querySelectorAll(".video-scroll-up");
    if (elements.length > 0) {
      const overlayTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // starts when top of section enters 80% viewport
          end: "top 20%",   // ends when top of section reaches 20% viewport
          scrub: 1,
        }
      });

      elements.forEach((el, index) => {
        overlayTl.to(el, {
          top: "-300px",
          ease: "none",
        }, index * 0.05);
      });

      anims.push(overlayTl);
    }

    return () => {
      anims.forEach(anim => anim.kill());
    };
  }, []);

  const LOGO_CARDS = [
    { name: "ab", row: 1, col: 2, type: "text" },
    { name: "Cairo", row: 1, col: 4, type: "text" },
    { name: "50+ Clients", row: 2, col: 3, type: "stat" },
    { name: "ther", row: 3, col: 2, type: "text" },
    { name: "alaska", row: 3, col: 4, type: "text" },
    { name: "KOBE", row: 4, col: 1, type: "logo-text", icon: "市" },
    { name: "Berlin.", row: 4, col: 3, type: "text" },
    { name: "Swiss", row: 5, col: 2, type: "logo-text", icon: "✦" },
    { name: "oslo.", row: 5, col: 4, type: "text" },
    { name: "U-Turn", row: 6, col: 3, type: "logo-text", icon: "⟳" },
    { name: "Imprintify", row: 7, col: 4, type: "logo-text", icon: "f" },
  ];

  return (
    <section ref={sectionRef} className="cr-section">
      <ScrollOverlay color={scrollOverlayColor} heights={[60, 80, 100]} />
      {/* Background Grid Lines to match reference image */}
      <div className="cr-grid-lines">
        <div className="cr-line"></div>
        <div className="cr-line"></div>
        <div className="cr-line"></div>
        <div className="cr-line"></div>
        <div className="cr-line"></div>
      </div>

      <div className="cr-container">
        {/* Left column: Header text */}
        <div className="cr-left">
          <div className="cr-tag">{tag || "✦ Clients & Recognition"}</div>
          <h2 className="cr-title">
            {title || (
              <>
                Trusted By Clients,<br />
                Recognized For Leads.
              </>
            )}
          </h2>
        </div>

        {/* Right column: Logo grid and floating image */}
        <div className="cr-right">
          <div className="cr-logo-grid">
            {/* Floating dummy image (about banner) with GSAP scroll effect */}
            <div className="cr-floating-img-wrapper">
              <img
                ref={floatingImgRef}
                src={bannerImg.src}
                alt="Floating Brand Emblem"
                className="cr-floating-img"
              />
            </div>
            {LOGO_CARDS.map((card, i) => (
              <div
                key={i}
                className={`cr-logo-card cr-card-${card.type}`}
                style={{ gridRow: card.row, gridColumn: card.col }}
              >
                {card.type === "stat" ? (
                  <div className="cr-stat-content">
                    <span className="cr-stat-num">50+</span>
                    <span className="cr-stat-lbl">Clients</span>
                  </div>
                ) : card.type === "logo-text" ? (
                  <div className="cr-logo-content">
                    <span className="cr-logo-icon">{card.icon}</span>
                    <span className="cr-logo-name">{card.name}</span>
                  </div>
                ) : (
                  <div className="cr-logo-content">
                    <span className="cr-logo-name">{card.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
