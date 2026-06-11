import React, { useRef } from "react";
import img from "../../WorkImages/ToggleNow/TNow.png";
import img2 from "../../WorkImages/ToggleNow/TNow-02.png";
import "../../workCss/ToggleNowCss/TwoImagesScroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TwoImagesScroll() {
  const containerRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        tl.to(img1Ref.current, {
          y: "50px",
          ease: "none",
        }).to(
          img2Ref.current,
          {
            y: "-50px",
            ease: "none",
          },
          "<",
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="TwoImagesScroll-work-section" ref={containerRef}>
      <img src={img.src} alt="" ref={img1Ref} />
      <img src={img2.src} alt="" ref={img2Ref} />
    </section>
  );
}
