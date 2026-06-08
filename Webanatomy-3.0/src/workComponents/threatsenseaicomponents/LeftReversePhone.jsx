import img1 from "../../WorkImages/threatsenseai/phone-img.png";
import "../../workCss/threatsenseaicss/LeftReversePhone.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function LeftReversePhone() {
  const containerRef = useRef();

  useGSAP(
    () => {
      const leftright = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          markers: false,
        },
      });
      leftright.to(
        ".left-reverse-phone-left img",
        {
          x: "-10vw",
          ease: "none",
        },
        0,
      );
      leftright.to(
        ".left-reverse-phone-right img",
        {
          x: "10vw",
          ease: "none",
        },
        0,
      );
    },
    { scope: containerRef },
  );
  return (
    <>
      <section className="left-reverse-phone-section" ref={containerRef}>
        <div className="left-reverse-phone-left">
          <img src={img1} alt="left-reverse-phone" />
        </div>
        <div className="left-reverse-phone-right">
          <img src={img1} alt="" />
        </div>
      </section>
    </>
  );
}
