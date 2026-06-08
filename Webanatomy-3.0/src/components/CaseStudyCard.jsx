"use client";
import { useState } from 'react';
import '../css/CaseStudyCard.css';
import Image from 'next/image';

import { FiArrowUpRight } from 'react-icons/fi';

export default function CaseStudyCard({ study }) {
  const [hovered, setHovered] = useState(false);

  // Provide fallback values if study is undefined
  const safeStudy = study || {
    title: 'Placeholder Title',
    subtitle: 'Placeholder Subtitle',
    image: '',
    imageAlt: 'Placeholder Image',
  };

  return (
    <article
      className="csc-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Case study: ${safeStudy.title}`}
    >
      {/* Image with blur overlay */}
      <div className="csc-image-wrap">
        <Image
          src={safeStudy.image}
          alt={safeStudy.imageAlt}
          className={`csc-img${hovered ? ' csc-img--blurred' : ''}`}
          loading="lazy"
          draggable="false"
        />

        {/* Logo overlay visible at start */}
        {safeStudy.logoImage && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", zIndex: 1 }}>
            <img src={safeStudy.logoImage} alt={`${safeStudy.title} logo`} style={{ maxWidth: "80%", maxHeight: "100px", objectFit: "contain", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))" }} />
          </div>
        )}

        {/* Hover overlay with dynamic Icon from metadata */}
        <div className={`csc-overlay${hovered ? ' csc-overlay--visible' : ''}`} aria-hidden="true" style={{ zIndex: 2 }}>
          {safeStudy.icon && (
            <div className="csc-icon-circle">
              <safeStudy.icon size={32} color="#000" />
            </div>
          )}
        </div>
      </div>

      {/* Card Footer */}
      <div className="csc-footer">
        <h3 className="csc-name">{safeStudy.title}</h3>
        <span className="csc-meta">{safeStudy.subtitle}</span>
      </div>
    </article>
  );
}
