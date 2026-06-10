"use client";

import React, { useState } from "react";
import "@/css/AboutComponentsCss/FaqSection.css";

const FAQ_DATA = [
  {
    id: 1,
    question: "What digital marketing services does Web Anatomy provide?",
    answer: "We provide comprehensive digital solutions including search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, content creation, and custom website development to scale your brand.",
    defaultOpen: false,
  },
  {
    id: 2,
    question: "How long does it take to see significant results?",
    answer: "Results depend on the service and industry. Paid advertising can generate leads quickly, while SEO and organic growth strategies typically show significant results within 3-6 months.",
    defaultOpen: true, // always open on load / refresh as requested
  },
  {
    id: 3,
    question: "Do you work with startups and small businesses?",
    answer: "Yes, we partner with businesses of all sizes. We design custom, budget-friendly growth strategies specifically tailored to help startups and small businesses establish authority and scale efficiently.",
    defaultOpen: false,
  },
];

export default function FaqSection() {
  // Store open card IDs. Using a Set/object allows opening multiple FAQs at once
  const [openIds, setOpenIds] = useState(() => {
    const initialOpen = FAQ_DATA.find((faq) => faq.defaultOpen);
    return initialOpen ? { [initialOpen.id]: true } : {};
  });

  const toggleFaq = (id) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        
        {/* Header Section */}
        <div className="faq-header">
          <h2 className="head-text faq-title">
            Frequently<br />
            asked questions
          </h2>
          <span className="faq-tag">✦ FAQ</span>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="faq-grid">
          {FAQ_DATA.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className={`faq-card ${isOpen ? "is-open" : ""}`}
                onClick={() => toggleFaq(faq.id)}
              >
                {/* Text Wrapper */}
                <div className="faq-text-container">
                  <p className="faq-question-text">{faq.question}</p>
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>

                {/* Floating Plus/Minus Button at Bottom-Right */}
                <div className="faq-icon-btn">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="faq-svg-icon"
                  >
                    {isOpen ? (
                      // Minus sign
                      <line x1="5" y1="12" x2="19" y2="12" />
                    ) : (
                      // Plus sign
                      <>
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </>
                    )}
                  </svg>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
