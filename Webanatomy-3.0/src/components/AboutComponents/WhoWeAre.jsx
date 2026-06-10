"use client";

import React, { useEffect, useState, useRef } from 'react';
import '@/css/AboutComponentsCss/WhoWeAre.css';
import BlackButton from '../BlackButton';

// Eased Counter Component
function Counter({ value, prefix = "", suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          let startTimestamp = null;
          const endVal = parseInt(value, 10);
          
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Quadratic ease-out progress
            const easedProgress = progress * (2 - progress);
            setCount(Math.floor(easedProgress * endVal));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(endVal);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={elementRef} className="stat-counter-value">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function WhoWeAre() {
  const statsData = [
    {
      id: 1,
      value: 12,
      prefix: "$",
      suffix: " M+",
      label: "Lorem Ipsum",
      topOffset: 80, // px from top of stats section
    },
    {
      id: 2,
      value: 18,
      prefix: "",
      suffix: "+",
      label: "Lorem Ipsum",
      topOffset: 155,
    },
    {
      id: 3,
      value: 85,
      prefix: "",
      suffix: "+",
      label: "Lorem Ipsum",
      topOffset: 200,
    },
    {
      id: 4,
      value: 48,
      prefix: "",
      suffix: " M+",
      label: "Lorem Ipsum",
      topOffset: 220,
    }
  ];

  return (
    <section className="who-we-are-section">
      <div className="who-we-are-container">
        
        {/* Header Section */}
        <div className="who-we-are-header">
          <div className="who-we-are-subtitle">
            <span className="subtitle-star">✦</span> Who We Are
          </div>
          <div className="who-we-are-content-right">
            <h2 className="big-head-text who-we-are-title">
              We’re just a bunch of talented, creative people aspiring to do
              incredible things together and have some fun along the way.
            </h2>
            <p className="who-we-are-desc">
              We are not pixel pushers or code monkeys. At Web Anatomy, we let our
              creativity lead the way, but we know where we're headed, and there's a
              purpose to everything we do.
            </p>
            <div className="who-we-are-btn-wrapper">
              <BlackButton text="View All Services" />
            </div>
          </div>
        </div>

        {/* Stats Timeline Section */}
        <div className="who-we-are-stats-container">
          
          {/* Background Curve SVG */}
          <div className="who-we-are-curve-overlay">
            <svg viewBox="0 0 1200 380" preserveAspectRatio="none" className="curve-svg">
              <path
                d="M 0 80 C 400 202, 800 231, 1200 220"
                fill="none"
                stroke="rgba(0, 0, 0, 0.08)"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Grid of Stats Columns */}
          <div className="who-we-are-stats-grid">
            {statsData.map((stat) => (
              <div key={stat.id} className="who-we-are-stat-col">
                
                {/* Guideline line */}
                <div 
                  className="stat-vertical-line" 
                  style={{ top: `${stat.topOffset}px` }}
                ></div>
                
                {/* Yellow circle node */}
                <div 
                  className="stat-circle" 
                  style={{ top: `${stat.topOffset}px` }}
                ></div>

                {/* Content Block */}
                <div className="stat-content-block">
                  <h3 className="big-head-text stat-number">
                    <Counter 
                      value={stat.value} 
                      prefix={stat.prefix} 
                      suffix={stat.suffix} 
                    />
                  </h3>
                  <p className="stat-label">{stat.label}</p>
                </div>



              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
