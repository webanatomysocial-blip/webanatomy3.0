import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../../workCss/pipeCss/UpDownImages.css";

gsap.registerPlugin(ScrollTrigger);

const UpDownSticky = () => {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.to(".UpDownImages-inner-img1", {
        y: -150,
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.2,
          markers: false,
        },
      });

      gsap.to(".UpDownImages-inner-img2", {
        y: 150,
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.2,

          markers: false,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      className="UpDownImages-whole-container"
      ref={containerRef}
      style={{ height: "200vh" }}
    >
      <div className="UpDownImages-stick-container">
        <div className="UpDownImages-inner-img1">
          <img
            src="https://wa.ctsi.in/wp-content/uploads/2025/05/web-Image-02.png"
            alt=""
          />
        </div>
        <div className="UpDownImages-inner-img2">
          <img
            src="https://wa.ctsi.in/wp-content/uploads/2025/05/web-Image-01.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default UpDownSticky;
