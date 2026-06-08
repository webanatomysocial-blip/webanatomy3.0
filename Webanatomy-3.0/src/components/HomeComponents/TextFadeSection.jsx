"use client";

import React, { useEffect, useRef } from "react";
import HomeTextFade from "./HomeTextFade";
import "../../css/HomeComponentsCss/TextFadeSection.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiSparkleFill } from "react-icons/pi";

gsap.registerPlugin(ScrollTrigger);

export default function TextFadeSection() {
  const containerRef = useRef(null);
  const countersRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    // Counter animation scoped to the container
    const counters = gsap.utils.toArray(countersRef.current.querySelectorAll(".counter-val"));
    
    gsap.fromTo(
      counters,
      {
        innerText: 0,
      },
      {
        innerText: (i, target) => target.getAttribute("data-target"),
        duration: 2,
        ease: "power2.out",
        snap: { innerText: 1 },
        stagger: 0.2,
        scrollTrigger: {
          trigger: countersRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="text-fade-section-container">
      {/* 1st Container: Trusted By (Not Sticky) */}
      <div className="trusted-by-container">
        <div className="trusted-by-pill">
          <div className="avatars">
            <div className="avatar-placeholder"></div>
            <div className="avatar-placeholder"></div>
            <div className="avatar-placeholder"></div>
            <div className="avatar-placeholder"></div>
          </div>
          <span className="trusted-text">Trusted by 100+ Founders</span>
        </div>
        <div className="about-label">
          <PiSparkleFill size={14} color="#fff" style={{ marginRight: '6px' }} />
          About Web Anatomy
        </div>
      </div>

      {/* 2nd Container: Sticky Text Fade */}
      <div className="sticky-wrapper" ref={triggerRef}>
        <div className="sticky-text-container">
          <HomeTextFade triggerRef={triggerRef} />
        </div>
      </div>

      {/* 3rd Container: Counters */}
      <div className="counters-container" ref={countersRef}>
        <div className="counter-item">
          <div className="counter-number">
            <span className="counter-val" data-target="60">0</span>+
          </div>
          <p className="counter-label">Global Clients</p>
        </div>
        <div className="counter-item">
          <div className="counter-number">
            <span className="counter-val" data-target="30">0</span>%
          </div>
          <p className="counter-label">Higher Conversion</p>
        </div>
        <div className="counter-item">
          <div className="counter-number">
            <span className="counter-val" data-target="80">0</span>+
          </div>
          <p className="counter-label">Projects Completed</p>
        </div>
        <div className="counter-item">
          <div className="counter-number">
            <span className="counter-val" data-target="3">0</span>x
          </div>
          <p className="counter-label">Reduction in work</p>
        </div>
      </div>
    </section>
  );
}
