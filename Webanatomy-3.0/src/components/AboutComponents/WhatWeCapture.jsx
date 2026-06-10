"use client";

import React, { useEffect, useRef } from "react";
import "@/css/AboutComponentsCss/WhatWeCapture.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ── Carousel images: pull from the CTA folder (8 real photos) ──
import img1 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM.jpeg";
import img2 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (1).jpeg";
import img3 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (2).jpeg";
import img4 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (3).jpeg";
import img5 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (4).jpeg";
import img6 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (5).jpeg";
import img7 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (6).jpeg";
import img8 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (7).jpeg";

const IMAGES = [
  img1, img2, img3, img4, img5, img6, img7, img8,
  // duplicate for seamless infinite scroll
  img1, img2, img3, img4, img5, img6, img7, img8,
];

export default function WhatWeCapture() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const autoOffsetRef = useRef(0);   // auto-scroll accumulated px
  const gsapOffsetRef = useRef(0);   // GSAP scroll-linked px
  const isDraggingRef = useRef(false);
  const isPausedRef = useRef(false);
  const resumeTimeoutRef = useRef(null);
  const inertiaVelocityRef = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    // Total width of one set of images (half the track since we duplicated)
    const cardWidthVal = typeof window !== "undefined" && window.innerWidth <= 768 ? 320 : 500;
    const CARD_W = cardWidthVal + 16; // card width + gap
    const HALF = CARD_W * 8; // 8 real images

    /* ── 1. GSAP scroll-linked x offset ── */
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          gsapOffsetRef.current -= velocity * 0.004;
        },
      });
    }, sectionRef);

    /* ── 2. Scroll detection to pause auto-scroll ── */
    const handleScroll = () => {
      if (!isDraggingRef.current) {
        isPausedRef.current = true;
        clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = setTimeout(() => {
          isPausedRef.current = false;
        }, 500);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    /* ── 3. Dragging & Inertia ── */
    let startX = 0;
    let startOffset = 0;
    let velocity = 0;
    let lastX = 0;
    let lastTime = 0;
    let isDragging = false;

    const onDragStart = (clientX) => {
      isDragging = true;
      isDraggingRef.current = true;
      isPausedRef.current = true;
      clearTimeout(resumeTimeoutRef.current);
      section.classList.add("is-dragging");

      startX = clientX;
      startOffset = autoOffsetRef.current;
      lastX = clientX;
      lastTime = performance.now();
      velocity = 0;
      inertiaVelocityRef.current = 0;
    };

    const onDragMove = (clientX) => {
      if (!isDragging) return;

      const now = performance.now();
      const dt = now - lastTime;
      const dx = clientX - lastX;

      if (dt > 0) {
        // velocity in px per frame (approx 16.67ms per frame)
        velocity = (dx / dt) * 16.67;
      }

      const deltaX = clientX - startX;
      autoOffsetRef.current = startOffset - deltaX;

      lastX = clientX;
      lastTime = now;
    };

    const onDragEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      isDraggingRef.current = false;
      section.classList.remove("is-dragging");

      // Apply inertia velocity (negative because track translate is -offset)
      inertiaVelocityRef.current = -velocity;

      // Set 2s delay to resume auto-scroll
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        isPausedRef.current = false;
      }, 2000);
    };

    // Event listeners for dragging
    const handleMouseDown = (e) => {
      if (e.button !== 0) return; // left click only
      onDragStart(e.clientX);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e) => {
      onDragMove(e.clientX);
    };

    const handleMouseUp = () => {
      onDragEnd();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    const handleTouchStart = (e) => {
      onDragStart(e.touches[0].clientX);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd);
    };

    const handleTouchMove = (e) => {
      onDragMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
      onDragEnd();
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };

    section.addEventListener("mousedown", handleMouseDown);
    section.addEventListener("touchstart", handleTouchStart, { passive: true });

    /* ── 4. Auto-scroll & Inertia RAF loop ── */
    const AUTO_SPEED = 0.3; // px per frame (slowed down from 0.5)

    const tick = () => {
      if (!isDraggingRef.current) {
        // Apply inertia if any
        if (Math.abs(inertiaVelocityRef.current) > 0.05) {
          autoOffsetRef.current += inertiaVelocityRef.current;
          inertiaVelocityRef.current *= 0.95; // decay factor
        } else {
          inertiaVelocityRef.current = 0;
          if (!isPausedRef.current) {
            autoOffsetRef.current += AUTO_SPEED;
          }
        }
      }

      // Combine both offsets
      let total = autoOffsetRef.current + gsapOffsetRef.current;

      // Seamless loop: reset when we've scrolled one full set
      total = ((total % HALF) + HALF) % HALF;

      track.style.transform = `translateX(-${total}px)`;

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
      section.removeEventListener("mousedown", handleMouseDown);
      section.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="wwc-section">
      <div ref={trackRef} className="wwc-track">
        {IMAGES.map((img, i) => (
          <div key={i} className="wwc-card">
            <img
              src={img.src}
              alt={`What we capture ${(i % 8) + 1}`}
              className="wwc-card-img"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
