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
    text: "Design is more than function. It's energy, emotion, and rhythm — translated into product form.",
    img: img1.src
  },
  {
    id: "02",
    title: "Vibe Coding",
    alt: "Vibe Coding",
    text: "Design is more than function. It's energy, emotion, and rhythm — translated into product form.",
    img: img2.src
  },
  {
    id: "03",
    title: <>Future-First Thinking</>,
    alt: "Future-First Thinking",
    text: "Design is more than function. It's energy, emotion, and rhythm — translated into product form.",
    img: img3.src
  },
  {
    id: "04",
    title: <>Ethical Intelligence</>,
    alt: "Ethical Intelligence",
    text: "Design is more than function. It's energy, emotion, and rhythm — translated into product form.",
    img: img4.src
  }
];

const OurPerspective = () => {
  return (
    <section className="pers-section">
        <div className="pers-container">
          <div className="pers-header">
            <h2 className="pers-title">Our Perspective</h2>
            <p className="pers-desc">
              At Business Anatomy, we believe the future of creativity is not
              artificial it's amplified. We fuse human intuition with
              intelligent systems to craft experiences.
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
