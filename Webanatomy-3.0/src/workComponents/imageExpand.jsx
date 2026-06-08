import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../workCss/ImageExpand.css";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function ImageExpand({ src, alt = "Expandable Image" }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      if (!imageRef.current || !containerRef.current) return;

      gsap.to(imageRef.current, {
        width: "100%",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center center",
          scrub: 0.4,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="expand-container" ref={containerRef}>
      <img
        ref={imageRef}
        className="resizable-image"
        src={
          src ||
          "https://wa.ctsi.in/wp-content/uploads/2025/04/image-1-scaled.png"
        }
        alt={alt}
      />
    </div>
  );
}
