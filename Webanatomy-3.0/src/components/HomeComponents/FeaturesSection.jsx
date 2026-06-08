"use client";
import React from 'react';
import '../../css/HomeComponentsCss/FeaturesSection.css';
import { PiSparkleFill, PiDiamondFill, PiCircleHalfFill, PiStarFourFill, PiSquaresFourFill, PiCirclesFourFill } from "react-icons/pi";

const featuresData = [
  {
    id: 1,
    title: "Results That Matter",
    desc: "Driving Real Impact Through Purposeful Design.",
    icon: <PiDiamondFill size={40} color="#555" />
  },
  {
    id: 2,
    title: "Cutting-Edge Design",
    desc: "Modern, Bold Visuals That Capture Attention.",
    icon: <PiCircleHalfFill size={40} color="#555" />
  },
  {
    id: 3,
    title: "Strategy-Driven Approach",
    desc: "Every Move Backed By Insight And Purpose.",
    icon: <PiStarFourFill size={40} color="#555" />
  },
  {
    id: 4,
    title: "Innovation At The Core",
    desc: "Fresh Ideas That Challenge The Ordinary.",
    icon: <PiSquaresFourFill size={40} color="#555" />
  },
  {
    id: 5,
    title: "Effortless Teamwork",
    desc: "Work Smoothly Together With Perfect Sync And Shared Focus.",
    icon: <PiCirclesFourFill size={40} color="#555" />
  }
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        
        {/* Left Side */}
        <div className="features-left">
          <div className="features-subtitle">
            <PiSparkleFill size={14} color="#fff" style={{marginRight: "8px"}} /> Feedback
          </div>
          <h2 className="big-head-text-white" style={{margin: 0}}>Lorem Ipsum</h2>
        </div>

        {/* Right Side */}
        <div className="features-right">
          <div className="features-list">
            {featuresData.map((item) => (
              <div className="feature-item" key={item.id}>
                <div className="feature-icon">
                  {item.icon}
                </div>
                <div className="feature-title-wrapper">
                  <h3 className="sub-heading-white" style={{ color: "#fff", margin: 0 }}>{item.title}</h3>
                </div>
                <div className="feature-desc-wrapper">
                  <p className="sub-para-text-white" style={{ color: "#aaa", margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
