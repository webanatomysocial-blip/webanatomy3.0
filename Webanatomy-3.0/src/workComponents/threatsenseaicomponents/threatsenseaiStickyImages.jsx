import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../../workCss/threatsenseaicss/threatsenseaiStickyImages.css";
const mainvideo = "/videos/work/threatsenseai/main.mp4";
const frontvideo = "/videos/work/threatsenseai/bigmiddle.mp4";
const leftvideo = "/videos/work/threatsenseai/left.mp4";
const rightvideo = "/videos/work/threatsenseai/right.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function ThreatsenseaiStickyImages() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const animationTimeline1 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=800",
          scrub: 1,
          pin: true,
          // markers: true,
        },
      });

      animationTimeline1
        .to(".threatsenseai-main-img", {
          scale: 0.27,
          height: "120%",
          y: -167,
          x: 5,
          duration: 1,
          onUpdate: function () {
            const currentScale = gsap.getProperty(this.targets()[0], "scaleX");
            if (currentScale <= 0.28) {
              gsap.set(this.targets()[0], { opacity: 0 });
            } else {
              gsap.set(this.targets()[0], { opacity: 1 });
            }
          },
        })
        .to(
          ".threatsenseai-left-img",
          {
            left: "30%",
            scale: 1,
            duration: 1,
          },
          "sameTime",
        )
        .to(
          ".threatsenseai-right-img",
          {
            left: "70%",
            scale: 1,
            duration: 1,
          },
          "sameTime",
        );
    },
    { scope: containerRef },
  );

  return (
    <div className="threatsenseai-phone-wrapper">
      <section className="threatsenseai-phone-section" ref={containerRef}>
        <div className="threatsenseai-phone-container">
          <video
            autoPlay
            muted
            loop
            className="threatsenseai-main-img"
            src={frontvideo}
            alt=""
          />
          <video
            autoPlay
            muted
            loop
            src={mainvideo}
            alt=""
            className="threatsenseai-front-img"
          />
          <video
            autoPlay
            muted
            loop
            src={leftvideo}
            alt=""
            className="threatsenseai-left-img"
          />
          <video
            autoPlay
            muted
            loop
            src={rightvideo}
            alt=""
            className="threatsenseai-right-img"
          />
        </div>
      </section>
    </div>
  );
}
