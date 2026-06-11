"use client";

import React, { useEffect, useRef } from "react";
import HomeTextFade from "./HomeTextFade";
import "../../css/HomeComponentsCss/TextFadeSection.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiSparkleFill } from "react-icons/pi";

// Import avatar images of people
import av1 from "@/assets/images/knxrt-B7ZHkZ-Gavo-unsplash.jpg.jpeg";
import av2 from "@/assets/images/knxrt-CZynSbrMmrk-unsplash.jpg.jpeg";
import av3 from "@/assets/images/knxrt-lQkKjE2pSFc-unsplash.jpg.jpeg";
import av4 from "@/assets/images/mo-mMXgAajaTNw-unsplash.jpg.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function TextFadeSection() {
  const containerRef = useRef(null);
  const countersRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="text-fade-section-container">
      {/* 1st Container: Trusted By (Not Sticky) */}
      <div className="trusted-by-container">
        <div className="trusted-by-pill">
          <div className="avatars">
            <img src={av1.src} alt="Founder 1" className="avatar-img" />
            <img src={av2.src} alt="Founder 2" className="avatar-img" />
            <img src={av3.src} alt="Founder 3" className="avatar-img" />
            <img src={av4.src} alt="Founder 4" className="avatar-img" />
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
            <span className="counter-val" data-target="50" dangerouslySetInnerHTML={{ __html: "0" }}></span>+
          </div>
          <p className="counter-label">Global Clients</p>
        </div>
        <div className="counter-item">
          <div className="counter-number">
            <span className="counter-val" data-target="100" dangerouslySetInnerHTML={{ __html: "0" }}></span>+
          </div>  
          <p className="counter-label">Projects Delivered</p>
        </div>
        <div className="counter-item">
          <div className="counter-number">
            <span className="counter-val" data-target="6" dangerouslySetInnerHTML={{ __html: "0" }}></span>+
          </div>
          <p className="counter-label">Years of Craft</p>
        </div>
        <div className="counter-item">
          <div className="counter-number">
            <span className="counter-val" data-target="25" dangerouslySetInnerHTML={{ __html: "0" }}></span>+
          </div>
          <p className="counter-label">Expert Team</p>
        </div>
      </div>
    </section>
  );
}
