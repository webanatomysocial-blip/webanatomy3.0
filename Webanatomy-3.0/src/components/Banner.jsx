"use client";

import React from "react";
import "@/css/AboutComponentsCss/AboutBanner.css";
import WhiteButton from "./WhiteButton";
import BlackButton from "./BlackButton";
import BlueButton from "./BlueButton";

export default function Banner({ title, desc, image, buttons = [] }) {
  // Extract image source string whether it's a static Next.js import object or a string
  const imageSrc = image && typeof image === "object" ? image.src : image;

  return (
    <div className="about-banner-container">
      {/* Background Image */}
      {imageSrc && (
        <img
          className="about-banner-bg"
          src={imageSrc}
          alt="Banner Background"
        />
      )}

      {/* Overlay for readability */}
      <div className="AboutBannerOverlay"></div>

      {/* Content Overlay */}
      <div className="about-banner-content">
        <div className="about-banner-bottom-left">
          <h1 className="head-text-white">{title}</h1>
          {desc && <p className="about-banner-desc">{desc}</p>}
        </div>

        {buttons && buttons.length > 0 && (
          <div className="about-banner-bottom-right">
            {buttons.map((btn, index) => {
              if (btn.type === "black") {
                return (
                  <BlackButton
                    key={index}
                    text={btn.text}
                    onClick={btn.onClick}
                  />
                );
              } else if (btn.type === "blue") {
                return (
                  <BlueButton
                    key={index}
                    text={btn.text}
                    onClick={btn.onClick}
                  />
                );
              } else {
                return (
                  <WhiteButton
                    key={index}
                    text={btn.text}
                    onClick={btn.onClick}
                  />
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
}
