import React from "react";
import { FaSquare } from 'react-icons/fa';
import "@/css/HomeComponentsCss/OverviewHome.css";

export default function OverviewHome() {
  const cards = [
    {
      value: "1500+",
      label: "Campaigns launched"
    },
    {
      value: "87%",
      label: "Conversion boost"
    },
    {
      value: "$30M+",
      label: "Revenue influenced"
    },
    {
      value: "4M",
      label: "High-intent leads"
    }
  ];

  return (
    <section className="overview-section">
      <div className="overview-header">
        <span className="clients-bullet">
          <FaSquare size={10} style={{ marginRight: '10px' }} />
          BUILD WITH STRUCTURE. SCALE WITH CONFIDENCE.
        </span>
        <h2 className="head-text-white">OVERVIEW.</h2>
      </div>

      <div className="overview-grid">
        {cards.map((card, index) => (
          <div key={index} className="overview-card">
            <h3 className="card-value head-text-white">{card.value}</h3>
            <p className="card-label sub-para-text-white">{card.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
