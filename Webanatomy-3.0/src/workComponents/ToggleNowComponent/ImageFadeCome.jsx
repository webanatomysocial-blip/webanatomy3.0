import React, { useRef } from "react";
import screen1 from "../../WorkImages/ToggleNow/phoneFadeTogglenow/screen1.webp";
import screen2 from "../../WorkImages/ToggleNow/phoneFadeTogglenow/screen2.webp";
import bg from "../../WorkImages/ToggleNow/phoneFadeTogglenow/bg.webp";
import "../../workCss/ToggleNowCss/ImageFadeCome.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ImageFadeCome() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const leftBgRef = useRef(null);
  const textRef = useRef(null);
  const screen1Ref = useRef(null);
  const screen2Ref = useRef(null);

  useGSAP(
    () => {
      const imagefade = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "8% top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      imagefade
        .to(bgRef.current, {
          opacity: 0,
          duration: 1,
        })
        .to(
          leftBgRef.current,
          {
            left: "-20%",
            duration: 1,
          },
          "<",
        )
        .to(
          textRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            force3D: true,
            rotation: 0.01,
          },
          "<",
        )
        .to(screen1Ref.current, {
          left: "40%",
        })
        .to(
          screen2Ref.current,
          {
            left: "70%",
          },
          "<",
        );
    },
    { scope: containerRef },
  );

  return (
    <section className="ImageFadeCome-work-section" ref={containerRef}>
      <div className="ImageFadeCome-sticky-container">
        <img
          src={bg}
          className="ImageFadeCome-sticky-bg-img"
          alt=""
          ref={bgRef}
        />
        <div className="ImageFadeCome-sticky-container-left">
          <img
            src={bg}
            className="ImageFadeCome-sticky-container-left-bg-img"
            alt=""
            ref={leftBgRef}
          />
          <div className="textscallCome" ref={textRef}>
            <p className="head-text-white">TextCall</p>
          </div>
        </div>
        <img
          src={screen1}
          className="ImageFadeCome-screen1-img"
          alt=""
          ref={screen1Ref}
        />
        <img
          src={screen2}
          className="ImageFadeCome-screen2-img"
          alt=""
          ref={screen2Ref}
        />
      </div>
    </section>
  );
}
