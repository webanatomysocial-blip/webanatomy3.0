"use client";

import React, { useState } from "react";
import "@/css/AboutComponentsCss/FaqSection.css";

const FAQ_DATA = [
  {
    id: 1,
    question: "What services does WebAnatomy offer?",
    answer: "We offer product engineering, experience design, brand identity and digital marketing, everything a business needs to build, grow and be taken seriously in the digital world.",
    defaultOpen: false,
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer: "It depends on the scope. A website typically takes 6 to 10 weeks. A full SaaS product or web application can take anywhere from 12 to 20 weeks. We always define timelines clearly before any work begins.",
    defaultOpen: true, // always open on load / refresh as requested
  },
  {
    id: 3,
    question: "Do you work with startups and small businesses?",
    answer: "We work with businesses at every stage, from early-stage startups building their first product to established companies scaling their digital presence. What matters to us is ambition, not size.",
    defaultOpen: false,
  },
  {
    id: 4,
    question: "Which platforms do you manage for social media and marketing?",
    answer: "We manage campaigns and content across Google, Meta, Instagram, LinkedIn and beyond, always as part of a unified strategy built around your specific business goals.",
    defaultOpen: false,
  },
  {
    id: 5,
    question: "How do you measure performance?",
    answer: "Every engagement is tied to real business outcomes, traffic, leads, conversion rates and revenue. We report clearly and consistently, so you always know exactly what the work is delivering.",
    defaultOpen: false,
  },
  {
    id: 6,
    question: "Can WebAnatomy customise a strategy for my business?",
    answer: "Every client we work with gets a strategy built specifically for them. We do not apply templates; we ask the right questions first and build from there.",
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
