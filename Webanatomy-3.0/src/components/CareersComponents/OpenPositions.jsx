"use client";

import React from "react";
import "@/css/CareersComponentsCss/OpenPositions.css";

const JOBS = [
  {
    id: 1,
    title: "Graphic Designer",
    tags: ["Remote", "Full-time"],
    desc: "Design intuitive experiences for sales teams and shape the future of CloseCRM."
  },
  {
    id: 2,
    title: "UI/UX Designer",
    tags: ["On-site", "On-site"],
    desc: "Build fast, scalable interfaces that power the modern CRM experience"
  },
  {
    id: 3,
    title: "Digital Marketer",
    tags: ["On-site", "Contract"],
    desc: "Lead product initiatives and help define the direction of CloseCRM."
  },
  {
    id: 4,
    title: "UX Researcher",
    tags: ["Hybrid", "Part-time"],
    desc: "Conduct user interviews and usability tests to enhance the user journey across our platform."
  },
  {
    id: 5,
    title: "Sales",
    tags: ["Remote", "Full-time"],
    desc: "Analyze user data to inform design decisions and improve product functionalities."
  },
  {
    id: 6,
    title: "Mobile App Developer",
    tags: ["On-site", "Full-time"],
    desc: "Develop and execute marketing strategies to promote CloseCRM effectively."
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
              We're looking for thoughtful builders who want to create better tools for modern sales teams.
            </p>
          </div>
          <div className="openpos-header-right">
            <span className="openpos-badge">6 Open Roles</span>
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
