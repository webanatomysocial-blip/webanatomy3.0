import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../../workCss/pipeCss/UpDownImages.css";
import img1 from "../../WorkImages/piedpipper/last.jpg";
// import img2 from "../../WorkImages/pipe/2.png";
gsap.registerPlugin(ScrollTrigger);

const UpDownImages = () => {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      // gsap.to(".UpDownImages-stick-img", { // Target the img directly
      gsap.to(".UpDownImages-stick-img", {
        width: "100%",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "center center",
          scrub: 0.2,
          // markers: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <sec
      className="UpDownImages-whole-container"
      ref={containerRef}
      style={{ height: "200vh" }}
    >
      <div className="UpDownImages-stick-img">
        <img src={img1} alt="" />
      </div>
    </sec>
  );
};

export default UpDownImages;
