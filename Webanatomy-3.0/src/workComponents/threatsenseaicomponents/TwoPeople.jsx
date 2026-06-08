import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../../workCss/threatsenseaicss/TwoPeople.css";

// Import downloaded images
import img1Src from "../../WorkImages/threatsenseai/threatsenseai-image-for-boder-scaled.png";
import img4Src from "../../WorkImages/threatsenseai/threatsenseai-image-border-scaled.png";
import img2Src from "../../WorkImages/threatsenseai/image-3-scaled.png";
import img3Src from "../../WorkImages/threatsenseai/image-4-scaled.png";

gsap.registerPlugin(ScrollTrigger);

export default function TwoPeople() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Main timeline for img-1 and img-4
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-left-right",
          start: "top 0%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      // Initial transition for img-1 and img-4
      tl.fromTo(
        ".img-4",
        { opacity: 1, scale: 1 },
        { opacity: 0, scale: 1.4 },
      ).fromTo(
        ".img-1",
        { opacity: 0, scale: 1 },
        { opacity: 1, scale: 1.4 },
        0,
      );

      // Animation for img-1 scaling further in end-container
      gsap.fromTo(
        ".img-1",
        { scale: 1.4 },
        {
          scale: 1.6,
          ease: "none",
          scrollTrigger: {
            trigger: ".end-container",
            start: "top top",
            end: "30% bottom",
            scrub: 1,
          },
        },
      );

      // Animation for img-2
      gsap.to(".img-2", {
        left: "-100%",
        scale: 3,
        duration: 3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".section-left-right",
          start: "top top",
          end: "+=700",
          scrub: 1,
        },
      });

      // Animation for img-3
      gsap.to(".img-3", {
        left: "100%",
        scale: 3,
        duration: 3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".section-left-right",
          start: "top top",
          end: "+=700",
          scrub: 1,
        },
      });

      // Animation for section-left-right width
      gsap.to(".section-left-right", {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".end-container",
          start: "top top",
          end: "30% bottom",
          scrub: 1,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="motham-container" ref={containerRef}>
      <div className="section-left-right">
        <img className="img-1" src={img1Src} alt="" />
        <img className="img-4" src={img4Src} alt="" />
        <img className="img-2" src={img2Src} alt="" />
        <img className="img-3" src={img3Src} alt="" />
      </div>
      <div className="end-container"></div>
    </div>
  );
}
