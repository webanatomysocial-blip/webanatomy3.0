"use client";

import React from "react";
import "@/css/CareersComponentsCss/CompetitivePros.css";

export default function CompetitivePros() {
  return (
    <section className="cpros-section">
      <div className="cpros-container">
        
        {/* Section Header */}
        <div className="cpros-header">
          <h2 className="head-text cpros-title">
            Competitive pros<br />
            just for a start.
          </h2>
          <span className="cpros-tag">✦ Key milestones</span>
        </div>

        {/* Cards Grid */}
        <div className="cpros-grid">
          
          {/* Card 1 */}
          <div className="cpros-card">
            <div className="cpros-card-icon-wrapper">
              <svg viewBox="0 0 24 24" className="cpros-card-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="4" x2="12" y2="14" />
                <line x1="7" y1="9" x2="17" y2="9" />
                <line x1="7" y1="19" x2="17" y2="19" />
              </svg>
            </div>
            <h3 className="cpros-card-title">Making A Difference</h3>
            <p className="cpros-card-desc">
              We believe in giving back and making a positive impact. As part of the Butterfly team, 
              you'll have opportunities to engage in community projects, sustainability initiatives.
            </p>
          </div>

          {/* Card 2 */}
          <div className="cpros-card">
            <div className="cpros-card-icon-wrapper">
              <svg viewBox="0 0 24 24" className="cpros-card-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="17 11 12 6 7 11" />
                <polyline points="17 18 12 13 7 18" />
              </svg>
            </div>
            <h3 className="cpros-card-title">Grow With Us</h3>
            <p className="cpros-card-desc">
              Professional growth is a cornerstone of life at Butterfly. We provide continuous learning 
              opportunities, mentorship programs, and the chance to work on diverse.
            </p>
          </div>

          {/* Card 3 */}
          <div className="cpros-card">
            <div className="cpros-card-icon-wrapper">
              <svg viewBox="0 0 24 24" className="cpros-card-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 8V4h4" />
                <path d="M20 8V4h-4" />
                <path d="M4 16v4h4" />
                <path d="M20 16v4h-4" />
                <path d="M12 16c0 0-4-2.5-4-5.5C8 9 9 8 10.5 8c1 0 1.5.5 1.5.5s.5-.5 1.5-.5C15 8 16 9 16 10.5c0 3-4 5.5-4 5.5z" />
              </svg>
            </div>
            <h3 className="cpros-card-title">Your Well-Being Matters</h3>
            <p className="cpros-card-desc">
              We offer a benefits package designed with your well-being in mind. Enjoy competitive salaries, 
              health coverage, retirement plans, and work-life balance initiatives.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
