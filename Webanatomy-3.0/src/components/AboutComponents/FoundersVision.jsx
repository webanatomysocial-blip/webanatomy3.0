"use client";

import React from "react";
import "@/css/AboutComponentsCss/FounderVision.css";
import foundersVisionImg from "@/assets/images/Founders-Vision.jpeg";

export default function FoundersVision() {
  return (
    <section className="fv-section">
      <div className="fv-container">
        
        {/* Header row: title and tag */}
        <div className="fv-header">
          <h2 className="head-text fv-title">Founders Vision</h2>
          <span className="fv-tag">✦ Founders Vision</span>
        </div>

        {/* 50/50 Split Grid */}
        <div className="fv-split">
          
          {/* Left panel: Portrait placeholder image */}
          <div className="fv-left">
            <img
              src={foundersVisionImg.src}
              alt="Srujan & Supraja - Founders"
              className="fv-image"
            />
          </div>

          {/* Right panel: Black details card */}
          <div className="fv-right">
            
            {/* Top info section */}
            <div className="fv-right-top">
              <h3 className="fv-name">Hi, We Are Srujan & Supraja</h3>
              <p className="fv-role">Co-Founders, WebAnatomy</p>
              <div className="fv-divider"></div>
            </div>

            {/* Bottom bio section */}
            <div className="fv-right-bottom">
              <h4 className="fv-bio-title">Bio</h4>
              <p className="fv-bio-text">
                Srujan and Supraja started WebAnatomy with one belief that businesses deserve a technology and marketing partner that is as invested in their growth as they are. Over the years, that belief has shaped everything about how WebAnatomy works, the questions we ask, the standards we hold and the relationships we build with every client we work with. Today, Web Anatomy is a 25-person team delivering products, brands and marketing strategies for businesses across three continents and the ambition that started it all has never been stronger.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}