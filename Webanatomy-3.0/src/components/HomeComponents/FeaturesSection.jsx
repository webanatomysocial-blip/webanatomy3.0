"use client";
import React from 'react';
import '../../css/HomeComponentsCss/FeaturesSection.css';
import { PiSparkleFill, PiDiamondFill, PiCircleHalfFill, PiStarFourFill, PiSquaresFourFill, PiCirclesFourFill } from "react-icons/pi";

const featuresData = [
  {
    id: 1,
    title: "Results That Matter",
    desc: "Good design and solid engineering are not the finish line, they are the foundation. What matters is what happens after launch. More leads, better conversion, stronger brand recognition and a product your users keep coming back to.",
    icon: <PiDiamondFill size={40} color="#555" />
  },
  {
    id: 2,
    title: "We Think Like Your Users",
    desc: "Before a single screen is designed or a line of code is written, we put ourselves in the shoes of the people who will use what we build. That thinking is what separates good products from great ones.",
    icon: <PiCircleHalfFill size={40} color="#555" />
  },
  {
    id: 3,
    title: "Strategy Before Everything",
    desc: "We question the brief before we answer it. The right solution always begins with the right understanding, and we never skip that step.",
    icon: <PiStarFourFill size={40} color="#555" />
  },
  {
    id: 4,
    title: "Built to Scale",
    desc: "Every product we deliver is engineered with the architecture to grow. We build for where your business is going, not just where it is today.",
    icon: <PiSquaresFourFill size={40} color="#555" />
  },
  {
    id: 5,
    title: "True Partners",
    desc: "We work alongside our clients the way a great co-founder would be deeply invested, consistently communicative and always thinking about what comes next.",
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
            <PiSparkleFill size={14} color="#fff" style={{marginRight: "8px"}} /> What Sets Us Apart
          </div>
          <h2 className="big-head-text-white" style={{margin: 0, fontSize: "60px"}}>How We Work With You</h2>
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
