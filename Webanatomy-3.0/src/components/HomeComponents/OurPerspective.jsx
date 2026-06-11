"use client";
import React from 'react';
import '../../css/HomeComponentsCss/OurPerspective.css';

import img1 from "../../assets/images/OurPerspective/human-machine.webp";
import img2 from "../../assets/images/OurPerspective/vibe-coding.webp";
import img3 from "../../assets/images/OurPerspective/future-first.webp";
import img4 from "../../assets/images/OurPerspective/ethical.jpg";

const perspectiveData = [
  {
    id: "01",
    title: "Human × Machine",
    alt: "Human x Machine",
    text: "The most powerful digital products are built at the intersection of deep technology and deep human understanding. We never lose sight of either side of that equation.",
    img: img1.src
  },
  {
    id: "02",
    title: "Design With Intent",
    alt: "Design With Intent",
    text: "Every element of a great digital product exists for a reason. We question every decision, remove everything unnecessary and keep only what genuinely serves the person using it.",
    img: img2.src
  },
  {
    id: "03",
    title: <>Future-First Thinking</>,
    alt: "Future-First Thinking",
    text: "We build for where your business is going, not just where it is today. Every product we deliver is architected to grow, scale and evolve alongside the ambitions of the business behind it.",
    img: img3.src
  },
  {
    id: "04",
    title: <>Ethical by Design</>,
    alt: "Ethical by Design",
    text: "We believe technology built with the user's best interests at its core performs better, lasts longer and earns more trust. That principle guides every decision we make.",
    img: img4.src
  }
];

const OurPerspective = () => {
  return (
    <section className="pers-section">
        <div className="pers-container">
          <div className="pers-header">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '50%' }}>
              <div className="pers-pill">
                <span>✦</span> Highlights
              </div>
              <h2 className="pers-title" style={{ width: '100%' }}>Our Perspective</h2>
            </div>
            <p className="pers-desc">
              We fuse human intuition with intelligent systems to craft experiences that define brands and drive growth.
            </p>
          </div>

          <div className="pers-cards-wrapper">
            {perspectiveData.map((card) => (
              <div className="pers-card" key={card.id}>
                <img
                  src={card.img}
                  alt={card.alt}
                  className="pers-card-bg"
                />
                <div className="pers-card-content">
                  <h3 className="pers-card-title">{card.title}</h3>
                  <p className="pers-card-hover-text">{card.text}</p>
                  <div className="pers-card-bottom">
                    <div className="pers-card-line"></div>
                    <span className="pers-card-number">{card.id}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default OurPerspective;
