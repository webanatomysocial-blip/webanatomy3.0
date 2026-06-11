"use client";
import React from 'react';
import '../../css/HomeComponentsCss/WhatWeDo.css';

import metaImg from "../../assets/images/home/whatwedo/meta.png";
import meta2Img from "../../assets/images/home/whatwedo/meta2.png";

const cardsData = [
  {
    id: 1,
    title: "24/7 Priority Care",
    desc: "Every client has a dedicated team that is reachable when it matters. Urgent timelines, critical updates and important decisions never wait until Monday morning.",
    img: metaImg.src,
    layout: "image-top"
  },
  {
    id: 2,
    title: "Built on Strategy",
    desc: "Every product we build starts with a strategic foundation because the best engineering in the world means nothing if it is solving the wrong problem.",
    img: meta2Img.src,
    layout: "text-top"
  },
  {
    id: 3,
    title: "Brand at Your Fingertips",
    desc: "We build brand systems that travel consistently across every platform, every campaign and every customer touchpoint your business will ever need.",
    img: metaImg.src,
    layout: "image-top"
  },
  {
    id: 4,
    title: "Engineering That Scales",
    desc: "From the first line of code to the final deployment, we build with the architecture that grows alongside your business without needing to be rebuilt from scratch.",
    img: meta2Img.src,
    layout: "text-top"
  },
  {
    id: 5,
    title: "Design That Converts",
    desc: "Every screen, every interaction and every user journey is designed with one goal, turning visitors into customers and customers into advocates.",
    img: metaImg.src,
    layout: "image-top"
  },
  {
    id: 6,
    title: "Marketing That Performs",
    desc: "Data-driven campaigns across every major platform, built to find the right audience, earn their attention and convert it into measurable business growth.",
    img: meta2Img.src,
    layout: "text-top"
  }
];

const WhatWeDo = () => {
  return (
    <section className="what-we-do-section">
      <div className="what-we-do-container">
        
        {/* Header */}
        <div className="what-we-do-header">
          <h2 className="what-we-do-title">What We Do</h2>
          <div className="what-we-do-pill">
            <span>✦</span> Key milestones
          </div>
        </div>

        {/* Cards Grid */}
        <div className="what-we-do-grid">
          {cardsData.map((card) => {
            const isImageTop = card.layout === "image-top";
            
            return (
              <div key={card.id} className={`what-we-do-card card-style-${card.id}`}>
                {isImageTop ? (
                  <>
                    <div className="card-image-container">
                      <img src={card.img} alt={card.title} className="card-logo-image" />
                    </div>
                    <div className="card-text-box">
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="card-text-box">
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                    </div>
                    <div className="card-image-container">
                      <img src={card.img} alt={card.title} className="card-logo-image" />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
