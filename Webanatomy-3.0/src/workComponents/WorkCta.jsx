import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../workCss/WorkCta.css";
import landscapeImg from "../WorkImages/threatsenseai/beautiful-scenery.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function WorkCta({ src, text, heading, sub, ctaText }) {
  const containerRef = useRef(null);
  const imageSrc = src && typeof src === "object" ? src.src : src;
  const fallbackSrc = landscapeImg && typeof landscapeImg === "object" ? landscapeImg.src : landscapeImg;

  // Note: Previous animation logic for rotateimg and handPhoneImg is disabled
  // as per the current RotatePhonesGrid.jsx state, but kept in structure.

  return (
    <section className="work-cta-wrapper" ref={containerRef}>
      <div className="work-cta-bottom">
        <img
          src={imageSrc || fallbackSrc}
          alt="landscape"
          className="work-cta-landscape-bg"
        />
        <div className="work-cta-text-box">
          {heading ? (
            <div className="work-cta-custom-content" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h2 className="work-cta-heading" style={{ fontSize: "28px", fontWeight: "600", color: "#000", margin: 0, lineHeight: "1.2", letterSpacing: "-0.01em" }}>
                {heading}
              </h2>
              {sub && (
                <p className="work-cta-sub" style={{ fontSize: "15px", color: "#555", margin: 0, lineHeight: "1.5" }}>
                  {sub}
                </p>
              )}
              {ctaText && (
                <button
                  className="work-cta-btn"
                  style={{
                    marginTop: "8px",
                    alignSelf: "flex-start",
                    backgroundColor: "#ffdd00",
                    color: "#000",
                    border: "none",
                    borderRadius: "9999px",
                    padding: "12px 28px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#000";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffdd00";
                    e.currentTarget.style.color = "#000";
                  }}
                >
                  {ctaText}
                </button>
              )}
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}
