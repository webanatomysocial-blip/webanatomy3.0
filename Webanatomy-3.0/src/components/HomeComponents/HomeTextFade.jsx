"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../css/HomeComponentsCss/HomeTextFade.css";

gsap.registerPlugin(ScrollTrigger);

const HomeTextFade = ({ triggerRef }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef ? triggerRef.current : sectionRef.current,
          start: "top top", // Start when wrapper hits top
          end: "bottom bottom", // End when wrapper hits bottom
          scrub: 0.1,
        },
      });

      // Animate normal chars to white
      tl.to(".char-span:not(.gradient-char)", {
        color: "white",
        duration: 1,
        stagger: 0.1,
        ease: "power1.inOut",
      }).to(".gradient-char", {
        color: "white",
        duration: 1,
        stagger: 0.1,
        ease: "power1.inOut",
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const text = `At WebAnatomy, we believe that every business
deserves a digital presence that is as ambitious
as the vision behind it, and we have built
our entire practice around making that a reality.`;

  const lines = text.split("\n");
  const targetPhrase = "making that a reality.";

  return (
    <div className="Text-Section" ref={sectionRef}>
      <div className="text-container">
        {lines.map((line, lineIndex) => {
          const isTargetLine = line.includes(targetPhrase);
          const targetStartIndex = line.indexOf(targetPhrase);

          return (
            <div key={lineIndex} className="line">
              {line.split("").map((char, charIndex) => {
                if (char === " ") {
                  return <span key={charIndex} className="space" />;
                }

                const isLastPeriod =
                  lineIndex === lines.length - 1 &&
                  charIndex === line.length - 2 &&
                  char === ".";

                let isGradientChar = false;
                if (isTargetLine && charIndex >= targetStartIndex) {
                  if (charIndex < targetStartIndex + targetPhrase.length) {
                    isGradientChar = true;
                  }
                }

                return (
                  <span
                    key={charIndex}
                    className={`char-span ${isLastPeriod ? "visi" : ""} ${
                      isGradientChar ? "gradient-char" : ""
                    }`}
                  >
                    {char}
                  </span>
                );
              })}
              {lineIndex < lines.length - 1 && <br className="desktop-br" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeTextFade;
