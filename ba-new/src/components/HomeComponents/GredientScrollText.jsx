"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/HomeComponentsCss/GredientScrollText.css";

// Import car image asset
import car1 from "@/assets/images/HomeImages/TextFadeSection/car1.avif";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const GredientScrollText = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const plainChars = section.querySelectorAll(".char-span:not(.gradient-char)");
    const gradientChars = section.querySelectorAll(".gradient-char");
    const subContent = section.querySelector(".sub-content-container");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(plainChars, { color: "#ffffff" });
      gsap.set(gradientChars, { color: "transparent" });
      gsap.set(subContent, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=100%",
          scrub: 0.8,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      // 1. Stagger normal characters to white
      tl.to(plainChars, {
        color: "#ffffff",
        duration: 1.5,
        stagger: 0.04,
        ease: "power2.out",
      });

      // 2. Reveal gradient characters (color transparent reveals CSS gradient)
      tl.to(
        gradientChars,
        {
          color: "transparent",
          duration: 1.8,
          stagger: 0.04,
          ease: "power2.out",
        },
        "-=1.1" // Stagger overlap
      );

      // 3. Smoothly fade in subtitle & logos container without React state triggers (avoids layout jumping)
      tl.to(
        subContent,
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.6" // Overlay near the end of the text animations
      );
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    window.addEventListener("resize", refresh);

    return () => {
      window.removeEventListener("resize", refresh);
      ctx.revert();
    };
  }, []);

  const textLines = [
    "Business Anatomy builds",
    "and elevates Digital",
    "Brands through strategy,",
    "design, and innovation.",
  ];

  const carouselCards = [
    {
      id: 1,
      category: "Brand Strategy & Vision",
      title: "AETHER DYNAMICS",
      desc: "Reimagining modern high-performance engineering through minimalist structural semantics and future-ready branding.",
      filterClass: "filter-monochrome",
    },
    {
      id: 2,
      category: "Digital UX & Design",
      title: "CHRONOS SYSTEM",
      desc: "Crafting beautiful timekeeping environments and immersive digital ecosystems that amplify product engagement.",
      filterClass: "filter-sunset",
    },
    {
      id: 3,
      category: "Innovation & Experience",
      title: "VORTEX SPATIAL",
      desc: "Pushing the boundaries of spatial interfaces and augmented brand architecture to inspire human connection.",
      filterClass: "filter-purple",
    },
  ];

  const nextSlide = () => {
    if (activeIndex < carouselCards.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const getTrackTransform = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return `translateX(calc(-${activeIndex * 100}% - ${activeIndex * 30}px))`;
    }
    return `translateX(-${activeIndex * 430}px)`; // card width 400px + gap 30px
  };

  return (
    <div className="scroll-text-parent">
      {/* Sticky Text Reveal Section */}
      <section className="Text-Section" ref={sectionRef}>
        <video 
          className="bg-video"
          src="/videos/textScrollSectionHome/secondSection.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
        />
        <div className="sticky-wrapper">
          <div className="text-container">
            <h1 className="main-title">
              {textLines.map((line, lineIndex) => {
                const isGradientLine = lineIndex > 0;
                return (
                  <span key={lineIndex} className="line">
                    {line.split("").map((char, charIndex) => {
                      if (char === " ") {
                        return <span key={charIndex} className="space" />;
                      }
                      return (
                        <span
                          key={charIndex}
                          className={`char-span ${
                            isGradientLine ? "gradient-char" : ""
                          }`}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </span>
                );
              })}
            </h1>

            {/* Subtitle and Partner Logos Row */}
            <div className="sub-content-container">
              <p className="text-subtitle">
                Turning bold visions into brands that inspire and thrive in the
                digital age.
              </p>

              <div className="logos-container">
                {/* Logo 1: Abstract Curvy Loop */}
                <div className="partner-logo-wrapper" title="Infinity Loop">
                  <svg
                    className="partner-logo"
                    viewBox="0 0 100 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20,20 C20,13.5 25,10 30,10 C35,10 38,13 41,16 L49,24 C52,27 55,30 60,30 C65,30 70,26.5 70,20 C70,13.5 65,10 60,10 C55,10 52,13 49,16 L41,24 C38,27 35,30 30,30 C25,30 20,26.5 20,20 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <circle cx="30" cy="20" r="3.5" fill="currentColor" />
                    <circle cx="60" cy="20" r="3.5" fill="currentColor" />
                  </svg>
                </div>

                {/* Logo 2: Logosmiths script styled typography */}
                <div className="partner-logo-wrapper" title="Logosmiths">
                  <svg
                    className="partner-logo"
                    viewBox="0 0 120 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10,25 C15,10 25,5 35,22 C40,30 45,30 50,20 C55,10 65,10 70,20 C75,30 80,30 85,20 C90,10 100,10 110,25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12,24 L105,24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>

                {/* Logo 3: 1090 blocky style */}
                <div className="partner-logo-wrapper" title="1090">
                  <svg
                    className="partner-logo"
                    viewBox="0 0 100 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="15"
                      y="8"
                      width="10"
                      height="24"
                      rx="2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <rect
                      x="33"
                      y="8"
                      width="14"
                      height="24"
                      rx="2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <rect
                      x="55"
                      y="8"
                      width="14"
                      height="24"
                      rx="2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <line
                      x1="20"
                      y1="8"
                      x2="20"
                      y2="32"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <rect
                      x="77"
                      y="8"
                      width="10"
                      height="24"
                      rx="2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                  </svg>
                </div>

                {/* Logo 4: Circular Spiral Loop */}
                <div className="partner-logo-wrapper" title="CoreSpiral">
                  <svg
                    className="partner-logo"
                    viewBox="0 0 80 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40,20 A15,15 0 1,0 40,21"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M40,20 A10,10 0 1,1 40,21"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M40,20 A5,5 0 1,0 40,21"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Logo 5: LOOO styled text */}
                <div className="partner-logo-wrapper" title="LOOO">
                  <svg
                    className="partner-logo"
                    viewBox="0 0 100 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15,8 L15,30 L30,30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="45"
                      cy="20"
                      r="10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="5.5"
                    />
                    <circle
                      cx="68"
                      cy="20"
                      r="10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="5.5"
                    />
                    <circle
                      cx="90"
                      cy="20"
                      r="10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="5.5"
                    />
                  </svg>
                </div>

                {/* Logo 6: Equalizer wave graphic */}
                <div className="partner-logo-wrapper" title="AudioWave">
                  <svg
                    className="partner-logo"
                    viewBox="0 0 80 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="15"
                      y1="18"
                      x2="15"
                      y2="22"
                      stroke="currentColor"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="23"
                      y1="12"
                      x2="23"
                      y2="28"
                      stroke="currentColor"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="31"
                      y1="6"
                      x2="31"
                      y2="34"
                      stroke="currentColor"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="39"
                      y1="10"
                      x2="39"
                      y2="30"
                      stroke="currentColor"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="47"
                      y1="14"
                      x2="47"
                      y2="26"
                      stroke="currentColor"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="55"
                      y1="8"
                      x2="55"
                      y2="32"
                      stroke="currentColor"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="63"
                      y1="18"
                      x2="63"
                      y2="22"
                      stroke="currentColor"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 
    </div>
  );
};

export default GredientScrollText;
