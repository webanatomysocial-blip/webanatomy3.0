"use client";

import React from 'react';
import Link from 'next/link';
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
        src="/videos/homeBanner/banner.mp4?v=2"
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
            <PiSparkleFill color="#FFDD00" size={18} className="rotating-star" style={{marginRight: '8px'}} />
            Design · Engineering · Growth
          </div>
          <h1 className="big-head-text-white">
            Engineering Digital<br /> Experiences
            That Define<br /> Brands and Drive Growth.
          </h1>
        </div>
        <div className="home-banner-bottom-right">
          <Link href="/works" style={{ textDecoration: 'none' }}>
            <WhiteButton text="Explore our Works" />
          </Link>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <WhiteButton text="Book a Free Call" />
          </Link>
        </div>
      </div>
    </div>
    
</>
  );
}
