import React from "react";
import "../workCss/ServicesSecondSec.css";

export default function ServicesSecondSec({
  services = [],
  title = "",
  description = "",
  stats = [],
  liveLink = "#",
}) {
  return (
    <section className="worker-details-section">
      <div className="worker-services-column">
        <h3>Services Provided</h3>
        <div className="worker-services-list">
          {services.map((service, index) => (
            <span key={index} className="service-pill">
              {service}
            </span>
          ))}
        </div>
      </div>

      <div className="worker-info-column">
        <h2>{title}</h2>
        <p className="worker-description">{description}</p>

        <div className="worker-stats-table">
          {stats.map((stat, index) => (
            <div key={index} className="stat-row">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
            </div>
          ))}
        </div>

        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="view-live-link"
        >
          View Live Site <span>→</span>
        </a>
      </div>
    </section>
  );
}
