"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "@/css/CareersComponentsCss/CareersCarousel.css";

// Import dummy images for background slides
import slide1 from "@/assets/images/Services/service-1.webp";
import slide2 from "@/assets/images/Services/service-2.webp";
import slide3 from "@/assets/images/Services/service-3.webp";
import slide4 from "@/assets/images/Services/service-4.webp";
import slide5 from "@/assets/images/OurPerspective/vibe-coding.webp";
import slide6 from "@/assets/images/OurPerspective/future-first.webp";

// Import transparent image for the overlay card
import centerImg from "@/WorkImages/Thesase/reverse-nobackground-locker/locker_01_trans_0284.webp";

const SLIDES = [slide1, slide2, slide3, slide4, slide5, slide6];

export default function CareersCarousel() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Create a linear infinite scroll from right to left (xPercent goes to -50% because slides are duplicated)
    const tween = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    tweenRef.current = tween;

    return () => {
      if (tween) tween.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (tweenRef.current) {
      // Smoothly decelerate the scroll speed on hover
      gsap.to(tweenRef.current, { timeScale: 0.15, duration: 0.8, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      // Smoothly accelerate back to normal speed on leave
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.8, ease: "power2.out" });
    }
  };

  // Duplicate the slides list to achieve a seamless loop
  const doubledSlides = [...SLIDES, ...SLIDES];

  return (
    <section className="ccar-section">
      <div 
        className="ccar-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Carousel Track Wrapper */}
        <div className="ccar-track-wrapper">
          <div ref={trackRef} className="ccar-track">
            {doubledSlides.map((slide, index) => (
              <div key={index} className="ccar-slide">
                <img 
                  src={slide.src} 
                  alt={`Slide ${index + 1}`} 
                  className="ccar-slide-image"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Central Overlay Glass Card */}
        <div className="ccar-center-card">
          <div className="ccar-center-image-wrapper">
           
          </div>
          
          <button className="ccar-center-button">
            <span className="ccar-center-button-text">Start Your Growth Journey</span>
            <svg viewBox="0 0 24 24" className="ccar-button-arrow" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
