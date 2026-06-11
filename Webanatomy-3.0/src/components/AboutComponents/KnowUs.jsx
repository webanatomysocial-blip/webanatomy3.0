"use client";

import React, { useEffect, useRef } from 'react';
import '@/css/AboutComponentsCss/KnowUs.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bannerImg from '@/assets/images/about/banner.avif';

export default function KnowUs() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Refresh ScrollTrigger to calculate offsets correctly after load
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    // Timeline for scroll zoom-out and stagger fade-in
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // Zoom out the image
    tl.fromTo(imageRef.current, 
      { scale: 1.35 }, 
      { scale: 1.0, ease: "none" }
    );

    // Fade in and translate stats staggeredly
    tl.fromTo(statsRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.1, ease: "power2.out" },
      "-=0.5"
    );

    return () => {
      clearTimeout(refreshTimer);
      // Kill the scroll triggers associated with this section
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  const stats = [
    {
      id: 1,
      number: "25+",
      line1: "Talented",
      line2: "Individuals"
    },
    {
      id: 2,
      number: "5",
      line1: "Cities",
      line2: "Represented"
    },
    {
      id: 3,
      number: "∞",
      line1: "Ideas",
      line2: "Brainstormed"
    }
  ];

  return (
    <section ref={sectionRef} className="know-us-section">
      
      {/* Title above image */}
      <h2 className="sub-big-heading know-us-heading">
        Do you wanna know us first!!
      </h2>

      {/* Zoom image block wrapper */}
      <div ref={containerRef} className="know-us-image-wrapper">
        <img 
          ref={imageRef}
          src={bannerImg.src} 
          alt="Know Us Background" 
          className="know-us-bg-image"
        />
        
        {/* Black overlay for contrast */}
        <div className="know-us-overlay"></div>

        {/* Stats content stacked on bottom of the image */}
        <div className="know-us-stats-overlay">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              ref={(el) => (statsRef.current[index] = el)}
              className="know-us-stat-item"
            >
              <span className="know-us-stat-num">{stat.number}</span>
              <div className="know-us-stat-label">
                <span>{stat.line1}</span>
                <span>{stat.line2}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
