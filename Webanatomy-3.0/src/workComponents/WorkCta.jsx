import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../workCss/WorkCta.css";
import landscapeImg from "../WorkImages/threatsenseai/beautiful-scenery.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function WorkCta({ src, text }) {
  const containerRef = useRef(null);

  // Note: Previous animation logic for rotateimg and handPhoneImg is disabled
  // as per the current RotatePhonesGrid.jsx state, but kept in structure.

  return (
    <section className="work-cta-wrapper" ref={containerRef}>
      <div className="work-cta-bottom">
        <img
          src={src || landscapeImg}
          alt="landscape"
          className="work-cta-landscape-bg"
        />
        <div className="work-cta-text-box">
          <div className="work-cta-flag">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
              alt="India Flag"
              width="40"
            />
          </div>
          <p>
            {text ||
              "On a COVID morning, with barely enough groceries to whip up a meal, every Mrs. Helpless was completely clueless looking at the hungry, wailing babies, and this scenario was increasing in numbers. This was indeed a pressing problem, and from an established furniture design tycoon like IKEA, a marvellous idea came into form!"}
          </p>
        </div>
      </div>
    </section>
  );
}
