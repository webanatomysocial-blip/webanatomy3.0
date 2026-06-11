"use client";

import React from "react";
import "@/css/CareersComponentsCss/OpenPositions.css";

const JOBS = [
  {
    id: 1,
    title: "SEO Executive",
    tags: ["On-site · Hyderabad", "Full-time · 6 months – 1 year"],
    desc: "Drive organic growth for WebAnatomy and our clients through smart keyword strategy, on-page optimisation and measurable performance."
  },
  {
    id: 2,
    title: "Video Editor",
    tags: ["On-site · Hyderabad", "Full-time · 2 Positions"],
    desc: "Craft video content that tells brand stories with precision, pace and visual impact across digital platforms."
  },
  {
    id: 3,
    title: "Sales Executive",
    tags: ["On-site · Hyderabad", "Full-time · Fresher"],
    desc: "Connect with businesses across India and beyond, understand their digital goals and help them discover what WebAnatomy can build for them."
  },
  {
    id: 4,
    title: "Account Manager",
    tags: ["On-site · Hyderabad", "Full-time · 0–1 Year"],
    desc: "Be the bridge between our clients and our team — managing relationships, timelines and expectations with clarity and confidence."
  },
  {
    id: 5,
    title: "Content Creator",
    tags: ["On-site · Hyderabad", "Full-time · 0–1 Year"],
    desc: "Write and create content that is sharp, purposeful and built for the right audience — across social media, campaigns and brand communication."
  },
  {
    id: 6,
    title: "Social Media Manager",
    tags: ["On-site · Hyderabad", "Full-time · 0–1 Year"],
    desc: "Own WebAnatomy's social presence — creating content that reflects the quality of our work and builds a community around the brand."
  },
  {
    id: 7,
    title: "Founder's Office",
    tags: ["On-site · Hyderabad", "Full-time · 0–6 Months"],
    desc: "Work directly alongside the founders across strategy, operations and growth initiatives. For someone who wants to understand how a premium agency is built — from the inside."
  }
];

export default function OpenPositions() {
  return (
    <section className="openpos-section">
      <div className="openpos-container">
        
        {/* Section Header */}
        <div className="openpos-header">
          <div className="openpos-header-left">
            <h2 className="head-text openpos-title">Open Positions</h2>
            <p className="openpos-subtitle">
              Seven roles. One team. Find where you fit.

            </p>
          </div>
          <div className="openpos-header-right">
            <span className="openpos-badge">7 Open Roles</span>
          </div>
        </div>

        {/* Divider */}
        <div className="openpos-divider-line"></div>

        {/* Jobs List */}
        <div className="openpos-list">
          {JOBS.map((job) => (
            <div key={job.id} className="openpos-item">
              <div className="openpos-item-left">
                {/* Title & Tags Row */}
                <div className="openpos-item-title-row">
                  <h3 className="openpos-item-title">{job.title}</h3>
                  <div className="openpos-item-tags">
                    {job.tags.map((tag, i) => (
                      <span key={i} className="openpos-tag-badge">{tag}</span>
                    ))}
                  </div>
                </div>
                {/* Description */}
                <p className="openpos-item-desc">{job.desc}</p>
              </div>

              {/* Apply Button */}
              <div className="openpos-item-right">
                <button className="openpos-apply-btn">
                  <span className="openpos-apply-btn-text-wrapper">
                    <span className="openpos-apply-btn-text-primary">Apply Now</span>
                    <span className="openpos-apply-btn-text-secondary">Apply Now</span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
