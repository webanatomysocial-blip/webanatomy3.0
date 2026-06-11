"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import "../css/MultiImagesCTA.css"; 

const MathUtils = {
  lerp: (a, b, n) => (1 - n) * a + n * b,
  distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)
};

import cta1 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM.jpeg";
import cta2 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (1).jpeg";
import cta3 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (2).jpeg";
import cta4 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (3).jpeg";
import cta5 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (4).jpeg";
import cta6 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (5).jpeg";
import cta7 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (6).jpeg";
import cta8 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (7).jpeg";

import { SiOpenai, SiAnthropic } from "react-icons/si";

export default function MultiImagesCTA() {
  const router = useRouter();
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let mousePos = { x: 0, y: 0 };
    let lastMousePos = { x: 0, y: 0 };
    let cacheMousePos = { x: 0, y: 0 };
    let isHovering = false;

    const handleMouseMove = (ev) => {
      mousePos = { x: ev.clientX, y: ev.clientY };
    };
    
    const handleMouseEnter = () => { 
        isHovering = true; 
        cacheMousePos = { x: mousePos.x, y: mousePos.y };
        lastMousePos = { x: mousePos.x, y: mousePos.y };
    };
    const handleMouseLeave = () => { isHovering = false; };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    let imgPosition = 0;
    let zIndexVal = 1;
    let threshold = 150; // Increased threshold to create a wider gap between images
    let animationFrameId;

    const render = () => {
      let distance = MathUtils.distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);
      cacheMousePos.x = MathUtils.lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.1);
      cacheMousePos.y = MathUtils.lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.1);

      if (distance > threshold && isHovering) {
        showNextImage();
        zIndexVal++;
        imgPosition = imgPosition < imagesRef.current.length - 1 ? imgPosition + 1 : 0;
        lastMousePos = { ...mousePos };
      }

      let isIdle = true;
      for (let img of imagesRef.current) {
        if (!img) continue;
        if (gsap.isTweening(img) || img.style.opacity != 0) {
          isIdle = false;
          break;
        }
      }
      if (isIdle && zIndexVal !== 1) {
        zIndexVal = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const showNextImage = () => {
      const img = imagesRef.current[imgPosition];
      if (!img) return;

      const rect = container.getBoundingClientRect();
      const localCacheX = cacheMousePos.x - rect.left;
      const localCacheY = cacheMousePos.y - rect.top;
      const localMouseX = mousePos.x - rect.left;
      const localMouseY = mousePos.y - rect.top;

      const imgWidth = img.offsetWidth || 400;
      const imgHeight = img.offsetHeight || 200;

      gsap.killTweensOf(img);

      const tl = gsap.timeline();
      tl.set(img, {
        opacity: 1,
        scale: 0.5,
        filter: "blur(5px)",
        zIndex: zIndexVal,
        x: localCacheX - imgWidth / 2,
        y: localCacheY - imgHeight / 2
      }, 0)
      .to(img, {
        duration: 0.9,
        ease: "expo.out",
        scale: 1,
        filter: "blur(0px)",
        x: localMouseX - imgWidth / 2,
        y: localMouseY - imgHeight / 2
      }, 0)
      .to(img, {
        duration: 1,
        ease: "power4.out",
        opacity: 0
      }, 0.4)
      .to(img, {
        duration: 1,
        ease: "power4.out",
        scale: 0.5
      }, 0.4);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const imageUrls = [
    cta1.src, cta2.src, cta3.src, cta4.src,
    cta5.src, cta6.src, cta7.src, cta8.src
  ];

  return (
    <>
      <div
        className="micta-content"
        ref={containerRef}
        onClick={() => router.push("/contact")}
      >
        {imageUrls.map((src, idx) => (
          <img
            key={idx}
            className="micta-content__img"
            src={src}
            alt={`Trail ${idx}`}
            ref={(el) => (imagesRef.current[idx] = el)}
            loading="lazy"
          />
        ))}
        <span className="micta-content__title" style={{ zIndex: 10000, pointerEvents: "none", color: "#000"}}>Let's Talk</span>
       
      </div>
        <div className="micta-ask-section">
        <h4 className="micta-ask-title">Ask ChatGPT And Claude About Web Anatomy</h4>
        <div className="micta-ask-buttons">
          <button className="micta-btn micta-btn--claude">
            <SiAnthropic size={30} className="claude-icon" />
           <span>
            Claude
            </span> 
          </button>
          <button className="micta-btn micta-btn--chatgpt">
            <SiOpenai size={30} className="chatgpt-icon" />
            <span>
              
              ChatGPT
              </span>
          </button>
        </div>
      </div>

     
    </>
  );
}
