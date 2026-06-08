import React from "react";
import "../workCss/TnowResults.css";

const TnowResults = ({ videoSrc, title, description, stats }) => {
  return (
    <section className="tnow-results-section">
      <div className="tnow-results-video-container">
        <video
          src={videoSrc}
          className="tnow-results-video"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="tnow-results-overlap-container">
        <div className="tnow-results-content">
          <h1 className="big-head-text">{title}</h1>
          <p className="para-text">{description}</p>
        </div>

        <div className="tnow-results-stats-grid">
          {stats &&
            stats.map((stat, index) => (
              <div key={index} className="tnow-results-stat-item">
                <h2 className="tnow-results-stat-value">{stat.value}</h2>
                <p className="tnow-results-stat-label">{stat.label}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TnowResults;
