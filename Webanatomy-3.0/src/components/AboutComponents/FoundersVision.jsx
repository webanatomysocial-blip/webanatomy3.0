"use client";

import React from "react";
import "@/css/AboutComponentsCss/FounderVision.css";
import bannerImg from "@/assets/images/about/banner.avif";

export default function FoundersVision() {
  return (
    <section className="fv-section">
      <div className="fv-container">
        
        {/* Header row: title and tag */}
        <div className="fv-header">
          <h2 className="head-text fv-title">Founders Vision</h2>
          <span className="fv-tag">✦ social proof</span>
        </div>

        {/* 50/50 Split Grid */}
        <div className="fv-split">
          
          {/* Left panel: Portrait placeholder image */}
          <div className="fv-left">
            <img
              src={bannerImg.src}
              alt="Srujan & Supraja - Founders"
              className="fv-image"
            />
          </div>

          {/* Right panel: Black details card */}
          <div className="fv-right">
            
            {/* Top info section */}
            <div className="fv-right-top">
              <h3 className="fv-name">Hi, We Are Srujan & Supraja</h3>
              <p className="fv-role">Founder & CEO — Web Anatomy & The mosol9</p>
              <div className="fv-divider"></div>
            </div>

            {/* Bottom bio section */}
            <div className="fv-right-bottom">
              <h4 className="fv-bio-title">Bio</h4>
              <p className="fv-bio-text">
                I've spent over a decade helping brands grow online — from startups to Fortune 500
                companies. My expertise spans SEO, paid ads, content strategy, and AI-driven
                marketing, focused on delivering real, measurable results. We created this course to
                cut through the noise and teach what actually works — practical, actionable skills
                you can apply immediately to grow faster and smarter.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}