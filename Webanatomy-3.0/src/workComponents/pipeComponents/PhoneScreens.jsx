import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../../workCss/pipeCss/PhoneScreens.css";
import img1 from "../../WorkImages/piedpipper/PhoneScreens/img1.png";
import img2 from "../../WorkImages/piedpipper/PhoneScreens/img2.png";
import img3 from "../../WorkImages/piedpipper/PhoneScreens/img3.png";
import img4 from "../../WorkImages/piedpipper/PhoneScreens/img4.png";
import img5 from "../../WorkImages/piedpipper/PhoneScreens/img5.png";
import img6 from "../../WorkImages/piedpipper/PhoneScreens/img6.png";

gsap.registerPlugin(ScrollTrigger);

export default function PhoneScreens() {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.to([".column-2"], {
        y: -200,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.fromTo(
        ".column-3",
        { y: -300 }, // starting position
        {
          y: 200, // ending position
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );

      gsap.to([".column-1", ".column-4"], {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: containerRef },
  );

  // Arrays of images for each column. Use null to represent a blank slot.
  const column1Data = [img1, null, null];
  const column2Data = [img2, img3, null];
  const column3Data = [img4, img5, null];
  const column4Data = [img6, null, null];

  const renderCards = (data) => {
    return data.map((imageSource, i) => (
      <div key={i} className="context-card">
        {imageSource ? (
          <img src={imageSource} alt={`Card ${i + 1}`} />
        ) : (
          <div className="context-card-placeholder"></div>
        )}
      </div>
    ));
  };

  return (
    <div className="context-container" ref={containerRef}>
      <div className="context-img-container">
        <div className="context-column column-1">
          {renderCards(column1Data)}
        </div>
        <div
          className="context-column column-2"
          style={{ transform: "translateY(-100px)" }}
        >
          {renderCards(column2Data)}
        </div>
        <div className="context-column column-3">
          {renderCards(column3Data)}
        </div>
        <div
          className="context-column column-4"
          style={{ transform: "translateY(-100px)" }}
        >
          {renderCards(column4Data)}
        </div>
      </div>
    </div>
  );
}
