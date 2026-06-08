"use client";

import React from 'react';
import '../../css/HomeComponentsCss/HomeBanner.css';
import WhiteButton from '../WhiteButton';
import { PiSparkleFill } from 'react-icons/pi';

export default function HomeBanner() {
  return (
    <>
    <div className="home-banner-container">
      {/* Background Video */}
      <video
        className="home-banner-bg"
        src="/videos/homeBanner/banner.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="HomeBannerOverlay">
        
      </div>

      {/* Content Overlay */}
      <div className="home-banner-content">
        <div className="home-banner-bottom-left">
          <div className="home-banner-subtitle">
            <PiSparkleFill color="#FFDD00" size={18} className="rotating-star" />
            Introducing AI Automations & Digital Marketing
          </div>
          <h1 className="big-head-text-white">
            Your AI-First<br />
            Agentic Technology
          </h1>
        </div>
        <div className="home-banner-bottom-right">
          <WhiteButton text="Explore our Works" />
          <WhiteButton text="Book a Free Call" />
        </div>
      </div>
    </div>
    
</>
  );
}
