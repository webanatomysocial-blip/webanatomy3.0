"use client";

import React, { useState, useRef, useEffect } from "react";
import "../css/HomeComponentsCss/Faq.css";
import { FaSquare } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import BlueButton from './BlueButton';

export default function Faq() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.18 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const faqs = [
    {
      question: "What Is Business Anatomy?",
      answer:
        "Business Anatomy is a full service agency that helps businesses grow through digital marketing, branding, printing, and logistics solutions tailored to their goals.",
    },
    {
      question: "What Makes Business Anatomy Different?",
      answer:
        "We focus on understanding your business inside out by combining creativity, strategy, and technology to deliver measurable and lasting growth.",
    },
    {
      question: "How Does Business Anatomy Help Businesses Succeed?",
      answer:
        "We design customized strategies, strengthen brand identity, and streamline operations to help you reach your audience effectively and scale with confidence.",
    },
    {
      question: "What is Business Anatomy’s vision?",
      answer:
        "Our vision is to empower brands to grow smarter, stronger, and more sustainably in today’s fast changing business world.",
    },
    {
      question: "How Much Do Your Services Cost?",
      answer:
        "Pricing depends on project size, complexity, and deliverables. We provide flexible packages and custom quotes after understanding your requirements during the discovery phase.",
    },
    {
      question: "Can I Request Revisions?",
      answer:
        "Absolutely. We include structured revision rounds in every project to refine the design. Our goal is to ensure the final outcome aligns perfectly with your vision and expectations.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="faq fade-in">
      <div className="faqHeader">
        <div className="faq-header">
          <span className="clients-bullet">
            <FaSquare size={10} style={{ marginRight: '10px' }} />
            KNOW US BETTER
          </span> 
          <h2 className="head-text">FAQ.</h2>
        </div>
      </div>

      <div className="faq-bottom">
        <div className="faq-content">
          <div className="faq-top">
            <h2 className="sub-big-heading">Got Questions?<br />We've Got Answers.</h2>
            <p className="paragraph-text" style={{ marginTop: '16px' }}>
              Explore our frequently asked questions to learn how we help businesses grow, structure, and scale with confidence.
            </p>
          </div>
          <div className="faq-bottom-right">                    
            <BlueButton text="Ask anything." />
            <p className="sub-para-text">No bots, we promise. Ask us anything or tell us your idea.</p>
          </div>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-question sub-heading"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="faq-answer"
                  >
                    <p className="sub-para-text" style={{ paddingBottom: '24px' }}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
