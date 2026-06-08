import React from 'react';
import '../css/OurServices.css';
import { PiSparkleFill, PiStarFourFill, PiSquaresFourFill, PiSunFill, PiAsteriskFill } from 'react-icons/pi';

import s1 from '@/assets/images/Services/service-1.webp';
import s2 from '@/assets/images/Services/service-2.webp';
import s3 from '@/assets/images/Services/service-3.webp';
import s4 from '@/assets/images/Services/service-4.webp';

const services = [
  {
    id: 1,
    title: "Brand Identity",
    description: "We create a clear brand identity to help your business stand out and stay consistent",
    tags: "Strategy • Logo • Guidelines",
    img: s1,
    Icon: PiStarFourFill,
    number: "Service 1"
  },
  {
    id: 2,
    title: "Technology",
    description: "Build fast, functional websites that support your business and work across devices",
    tags: "Frontend • Logo • Guidelines",
    img: s2,
    Icon: PiSquaresFourFill,
    number: "Service 2"
  },
  {
    id: 3,
    title: "User Experience",
    description: "Design smooth and simple experiences that make your product easy to use",
    tags: "Research • Logo • Guidelines",
    img: s3,
    Icon: PiSunFill,
    number: "Service 3"
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Create visuals and assets that help your brand.",
    tags: "Posters • Logo • Guidelines",
    img: s4,
    Icon: PiAsteriskFill,
    number: "Service 4"
  }
];

export default function OurServices() {
  return (
    <section className="os-section">
      <div className="os-header">
        <h2 className="head-text-white">Our Services</h2>
        <div className="os-highlights">
          <PiSparkleFill size={16} /> HighlightServices
        </div>
      </div>
      
      <div className="os-grid">
        {services.map((svc) => (
          <div key={svc.id} className="os-card">
            {/* Background Image */}
            <img src={svc.img.src} alt={svc.title} className="os-card-bg" loading="lazy" />
            
            {/* Gradient Overlay to ensure text readability */}
            <div className="os-card-overlay"></div>

            <div className="os-card-top">
              <svc.Icon className="os-card-icon" size={24} />
              <span className="os-card-number">{svc.number}</span>
            </div>

            <div className="os-card-bottom">
              <div>
                <h3 className="os-card-title">{svc.title}</h3>
                <p className="os-card-desc">{svc.description}</p>
              </div>
              <div className="os-card-tags">{svc.tags}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
