import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../../workCss/ToggleNowCss/ThreeImagesScroll.css";
import img1 from "../../WorkImages/ToggleNow/Tnow-03.png";
import img2 from "../../WorkImages/ToggleNow/Tnow-04.png";
import img3 from "../../WorkImages/ToggleNow/Tnow-05.png";

gsap.registerPlugin(ScrollTrigger);

const ThreeImagesScroll = () => {
  const containerRef = React.useRef(null);
  const leftImgRef = React.useRef(null);
  const rightImgRef = React.useRef(null);
  const centerImgRef = React.useRef(null);

  useGSAP(
    () => {
      // Set initial centering for all images via GSAP (avoids CSS transform conflicts)
      gsap.set(
        [leftImgRef.current, rightImgRef.current, centerImgRef.current],
        {
          xPercent: -50,
          yPercent: -50,
          x: 0,
        },
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 5%",
          end: "+=1200",
          scrub: 0.4,
          pin: true,
          // markers: true,
        },
      });

      // All images animate at once out from the center
      tl.to(leftImgRef.current, {
        x: "-30vw",
        ease: "none",
      })
        .to(
          rightImgRef.current,
          {
            x: "-8vw",
            ease: "none",
          },
          "<",
        )
        .to(
          centerImgRef.current,
          {
            x: "30vw",
            ease: "none",
          },
          "<",
        );
    },
    { scope: containerRef },
  );

  return (
    <section className="triggertab" ref={containerRef}>
      <div className="three-images-container">
        <img src={img1} alt="Phone Left" className="imgleft" ref={leftImgRef} />
        <img
          src={img2}
          alt="Phone Right"
          className="imgright"
          ref={rightImgRef}
        />
        <img
          src={img3}
          alt="iPad Center"
          className="imgcenter"
          ref={centerImgRef}
        />
      </div>
    </section>
  );
};

export default ThreeImagesScroll;
