"use client";

import React from "react";
import "@/css/AboutComponentsCss/MeetTheTeam.css";

// Import dummy images from the CTA assets
import img1 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM.jpeg";
import img2 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (1).jpeg";
import img3 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (2).jpeg";
import img4 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (3).jpeg";
import img5 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (4).jpeg";
import img6 from "@/assets/images/cta/WhatsApp Image 2026-06-06 at 10.32.39 AM (5).jpeg";

const TEAM_MEMBERS = [
  { name: "Dheeraj Reddy", role: "Web Developer", img: img1 },
  { name: "Nitish", role: "Web Developer", img: img2 },
  { name: "Srinivasa", role: "Performance Marketer", img: img3 },
  { name: "Abhilash", role: "SEO Executive", img: img4 },
  { name: "Hemanth", role: "SEO Executive", img: img5 },
  { name: "Bala", role: "CTO", img: img6 },
];

export default function MeetTheTeam() {
  return (
    <section className="team-section">
      <div className="team-container">
        
        {/* Section Header */}
        <div className="team-header">
          <span className="team-tag">✦ Team</span>
          <h2 className="team-title">Meet The Team</h2>
        </div>

        {/* 3-Column Team Grid */}
        <div className="team-grid">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="team-card">
              
              {/* Member Image */}
              <img
                src={member.img.src}
                alt={member.name}
                className="team-card-img"
              />

              {/* Warm Golden/Orange Gradient Overlay */}
              <div className="team-card-overlay"></div>

              {/* Card Footer Text */}
              <div className="team-card-content">
                <div className="team-card-text">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                </div>

                {/* LinkedIn Rounded Button */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-linkedin-btn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="team-linkedin-icon"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
