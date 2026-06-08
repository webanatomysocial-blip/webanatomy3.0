import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../../workCss/theSaseCss/UpImageAnimation.css";
import imageSrc from "../../WorkImages/Thesase/upimages/Sase-web-01.png";
import imageSrc2 from "../../WorkImages/Thesase/upimages/Sase-web-02.png";
import imageSrc3 from "../../WorkImages/Thesase/upimages/Sase-web-03.png";
import imageSrc4 from "../../WorkImages/Thesase/upimages/Sase-web-04.png";
import imageSrc5 from "../../WorkImages/Thesase/upimages/Sase-web-05.png";
import imageSrc6 from "../../WorkImages/Thesase/upimages/Sase-web-06.png";

gsap.registerPlugin(ScrollTrigger);

const UpImageAnimation = () => {
  const containerRef = useRef(null);
  const images = [
    imageSrc,
    imageSrc2,
    imageSrc3,
    imageSrc4,
    imageSrc5,
    imageSrc6,
  ];

  useGSAP(
    () => {
      // Column 1 — scroll up
      gsap.to(".UpImageAnimation-col-1", {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Column 2 — scroll down (opposite direction)
      gsap.to(".UpImageAnimation-col-2", {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Column 3 — scroll up (same as col 1)
      gsap.to(".UpImageAnimation-col-3", {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="UpImageAnimation-main-section" ref={containerRef}>
      <div className="UpImageAnimation-container">
        <div className="UpImageAnimation-column UpImageAnimation-col-1">
          {images.slice(0, 2).map((src, index) => (
            <div key={index} className="UpImageAnimation-img-wrapper">
              <img src={src} alt={`Animation 1-${index}`} />
            </div>
          ))}
        </div>
        <div className="UpImageAnimation-column UpImageAnimation-col-2">
          {images.slice(2, 4).map((src, index) => (
            <div key={index} className="UpImageAnimation-img-wrapper">
              <img src={src} alt={`Animation 2-${index}`} />
            </div>
          ))}
        </div>
        <div className="UpImageAnimation-column UpImageAnimation-col-3">
          {images.slice(4, 6).map((src, index) => (
            <div key={index} className="UpImageAnimation-img-wrapper">
              <img src={src} alt={`Animation 3-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpImageAnimation;
