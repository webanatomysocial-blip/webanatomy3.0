"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/css/HomeComponentsCss/PinCardsHome.css";

const projects = [
  {
    id: "01",
    total: "03",
    title: "Pearl",
    year: "2024",
    services: ["Website Design", "Product Design"],
    image: "https://i.pinimg.com/1200x/6d/c1/51/6dc151fccad84848851615bf7fd5273e.jpg",
    desc: "We've helped businesses across industries achieve their goals. Here are some of our selected works."
  },
  {
    id: "02",
    total: "03",
    title: "Prugens consultin",
    year: "2024",
    services: ["Website Design", "Product Design", "Branding", "Development"],
    image: "https://i.pinimg.com/1200x/83/a0/61/83a0611b7dffe9a845b371161da4a6ca.jpg",
    desc: "We've helped businesses across industries achieve their goals. Here are some of our selected works."
  },
  {
    id: "03",
    total: "03",
    title: "The Last Of Us",
    year: "2024",
    services: ["Marketing", "SEO Optimization"],
    image: "https://i.pinimg.com/1200x/6f/4a/73/6f4a73124e676232f7790afc347aa7cf.jpg",
    desc: "We've helped businesses across industries achieve their goals. Here are some of our selected works."
  }
];

export default function PinCardsHome() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const pinCards = cardsRef.current;

      pinCards.forEach((eachCard, index) => {
        if (index < pinCards.length - 1) {
          ScrollTrigger.create({
            trigger: eachCard,
            start: "top 50px",
            endTrigger: pinCards[pinCards.length - 1],
            end: "top 50px",
            pin: true,
            pinSpacing: false
          });

          ScrollTrigger.create({
            trigger: pinCards[index + 1],
            start: "top bottom",
            end: "top 50px",
            onUpdate: (self) => {
              const progress = self.progress;
              const inner = eachCard.querySelector('.pin-card-inner');
              // 3D Stacking animation logic applied to inner wrapper to prevent Pin conflict
              if (inner) {
                gsap.set(inner, {
                  scale: 1 - progress * 0.25,
                  rotation: index % 2 === 0 ? progress * 5 : -progress * 5,
                  rotationX: progress * 40,
                });
                gsap.set(inner.querySelector(".pin-card-overlay"), {
                  opacity: progress * 0.4
                });
              }
            }
          });
        }
      });
      
      // Wait a frame and refresh for accurate pinning size calculation
      requestAnimationFrame(() => {
          ScrollTrigger.refresh();
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pin-cards-container" ref={containerRef}>
      {projects.map((project, i) => (
        <div
          key={project.id} 
          className="pin-card-wrapper" 
          ref={addToRefs}
          style={{ zIndex: i + 10 }} // Ensure proper stacking
        >
          <div className="pin-card-inner">
            {/* Blurred Background inherits image */}
            <div 
              className="pin-card-bg" 
              style={{ backgroundImage: `url(${project.image})` }}
            />
            {/* Dark Overlay animated by GSAP */}
            <div className="pin-card-overlay" />

            {/* Foreground Content */}
            <div className="pin-card-content">
              
              <div className="pc-left">
                <p className="pc-desc para-text-white">{project.desc}</p>
                <div className="pc-left-bottom">
                  <span className="pc-count">{project.id} / {project.total}</span>
                  <h2 className="head-text-white pc-title">{project.title}</h2>
                </div>
              </div>

              <div className="pc-center">
                <img src={project.image} alt={project.title} className="pc-center-image" />
              </div>

              <div className="pc-right">
                <div className="pc-year">
                  <span className="para-text-white">Year</span>
                  <h3 className="sub-heading-white">{project.year}</h3>
                </div>
                <div className="pc-services">
                  <span className="para-text-white">Services</span>
                  <ul>
                    {project.services.map((service, idx) => (
                      <li key={idx} className="sub-para-text-white">{service}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
