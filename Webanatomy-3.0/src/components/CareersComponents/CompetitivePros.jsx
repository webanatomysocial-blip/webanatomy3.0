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
            Competitive Pros,<br />
            Just for a Start
            

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
            <h3 className="cpros-card-title">Grow With Us</h3>
            <p className="cpros-card-desc">
              Every project at WebAnatomy is an opportunity to push what you know further. You will work across disciplines, industries and global clients, building a body of work that grows with you.

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
            <h3 className="cpros-card-title">A Culture Worth Being Part Of</h3>
            <p className="cpros-card-desc">
            Ask anyone on our team what they love most about working here, and the answer is always the same, the people. We brainstorm together, challenge each other and build something we are genuinely proud of every single day.

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
              Competitive compensation, a collaborative environment and work that actually excites you. We take care of our people because great work only comes from people who feel valued.

            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
