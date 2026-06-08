import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../../workCss/threatsenseaicss/threatsenseaiGalleryScroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function ThreatsenseaiGalleryScroll({ images = [] }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const animationTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".main-scroll-area",
          start: "top top",
          end: "+=1000",
          pin: true,
          scrub: 1,
        },
      });

      animationTimeline
        .to(
          ".content-wrapper",
          {
            rotate: -10,
            scale: 0.5,
          },
          "<",
        )
        .to(
          ".slide-group1",
          {
            x: 500,
          },
          "<",
        )
        .to(
          ".slide-group2",
          {
            x: -500,
          },
          "<",
        );
    },
    { scope: containerRef },
  );

  // Helper to get image at index, cycling through the array
  const getImage = (index) => {
    if (images.length === 0) return "";
    return images[index % images.length];
  };

  // Generating arrays for repeated slots in each row
  const group1Slots = Array.from({ length: 10 }, (_, i) => i);
  const group2Slots = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="container-scroll" ref={containerRef}>
      <div className="main-scroll-area">
        <div className="content-wrapper">
          <div className="slide-group1">
            {group1Slots.map((id) => (
              <img
                key={`g1-top-${id}`}
                className="gallery-images"
                src={getImage(id)}
                alt=""
              />
            ))}
          </div>

          <div className="slide-group2">
            {group2Slots.map((id) => (
              <img
                key={`g2-${id}`}
                className="gallery-images"
                src={getImage(id)}
                alt=""
              />
            ))}
          </div>

          <div className="slide-group1">
            {group1Slots.map((id) => (
              <img
                key={`g1-bottom-${id}`}
                className="gallery-images"
                src={getImage(id)}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
