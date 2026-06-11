"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiX } from 'react-icons/fi';
import '@/css/ServiceComponentsCss/ServiceAccordionList.css';



// Rotating sparkle star component (Clockwise slow rotation)


// Individual Service Category Row Component (manages its own active accordion state)
const ServiceCategoryRow = ({ category, index }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const isEven = index % 2 === 0;

  return (
    <div className={`service-row ${isEven ? 'row-normal' : 'row-reverse'}`}>
      
      {/* Media Column */}
      <div className="service-media-col">
        <div className="service-header-left">
          <h2 className="head-text">{category.categoryTitle}</h2>
          {category.categoryDesc && (
            <p className="service-category-desc" style={{ marginTop: "16px", fontSize: "16px", color: "#555", lineHeight: "1.6", fontWeight: "300" }}>
              {category.categoryDesc}
            </p>
          )}
        </div>
        
        {/* Rounded browser mockup container */}
        <div className="service-media-card">
          <div className="service-video-container">
            {/* 
              Video tag structure as requested. 
              Uses poster attribute for dummy image rendering. 
              Actual video src will be replaced later by the user.
            */}
            <video
              src={category.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="service-video"
            />
          </div>
        </div>
      </div>

      {/* Accordion Column */}
      <div className="service-accordion-col">
        {category.items.map((item, itemIdx) => {
          const isOpen = activeItemIndex === itemIdx;

          return (
            <div
              key={itemIdx}
              className={`accordion-item-wrapper ${isOpen ? 'active' : ''}`}
            >
              <button
                className="accordion-header"
                onClick={() => setActiveItemIndex(isOpen ? null : itemIdx)}
                aria-expanded={isOpen}
              >
                <span className="accordion-title">{item.title}</span>
                <span className="accordion-icon">
                  {isOpen ? <FiX /> : <FiPlus />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    className="accordion-content"
                  >
                    <div className="accordion-content-inner">
                      <p className="accordion-desc">{item.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default function ServiceAccordionList() {
  const serviceCategories = [
    {
      categoryTitle: "Product Engineering",
      categoryDesc: "We place engineering at the heart of everything we build. Whether it is a SaaS platform, a mobile application or a custom software solution, our teams bring the technical depth and product thinking to deliver something that works — reliably, scalably and exactly as intended.",
      videoSrc: "/videos/services-page/Teachnology - Website.mp4",
      items: [
        {
          title: "Web Development",
          description: "Performant, scalable web applications built on modern frameworks with the architecture to grow alongside your business."
        },
        {
          title: "Mobile App Development",
          description: "Native and cross-platform mobile applications built around how your users actually behave — on Android and iOS alike."
        },
        {
          title: "SaaS Product Development",
          description: "End-to-end SaaS platforms engineered for scale, with the foundation to support your product as your user base grows."
        },
        {
          title: "Custom Software Development",
          description: "Bespoke software built around the specific operational demands of your business — not adapted from a generic template."
        },
        {
          title: "API Development & Integration",
          description: "Robust APIs and third-party integrations that connect your systems and keep your product ecosystem running without friction."
        },
        {
          title: "E-commerce Development",
          description: "Commerce platforms built for conversion — fast, intuitive and engineered to handle the demands of modern online retail."
        }
      ]
    },
    {
      categoryTitle: "Experience Design",
      categoryDesc: "Design is not decoration. It is the difference between a product people use and a product people love. Our experience design practice begins with a deep understanding of your users — their needs, their behaviour and their expectations — and builds from that foundation to create digital experiences that feel effortless.",
      videoSrc: "/videos/services-page/Experience-Design.mp4",
      items: [
        {
          title: "UI/UX Design",
          description: "User interfaces designed around research, tested against real behaviour and refined until they genuinely perform."
        },
        {
          title: "Website Design",
          description: "Websites that communicate the right things to the right people — designed to earn trust and drive action from the very first visit."
        },
        {
          title: "Mobile Experience Design",
          description: "Mobile experiences that feel native to the device and natural to the user — across every screen size and interaction."
        },
        {
          title: "Commerce Experience",
          description: "Shopping experiences designed to reduce friction and increase conversion — from first browse to completed purchase."
        },
        {
          title: "Prototyping & User Testing",
          description: "Ideas validated before they are built — through high-fidelity prototypes and real user feedback that shapes every design decision."
        },
        {
          title: "Design Systems & Component Libraries",
          description: "Scalable design systems that give your product team the consistency and speed to build confidently across every touchpoint."
        }
      ]
    },
    {
      categoryTitle: "Brand & Identity",
      categoryDesc: "A brand is the first impression your business makes — before a product is used, before a meeting is held, before a word is spoken. We build brand identities that are grounded in strategy and distinctive in their execution, designed to hold their own in any room and scale across every medium.",
      videoSrc: "/videos/services-page/Branding - Website.mp4",
      items: [
        {
          title: "Logo Design",
          description: "Logomarks built around the strategy of the brand — designed to be distinctive, memorable and built to last."
        },
        {
          title: "Visual Identity & Guidelines",
          description: "Comprehensive identity systems that keep your brand consistent across every platform, channel and touchpoint."
        },
        {
          title: "Brand Strategy & Positioning",
          description: "Clarity on who you are, who you are for and why it matters — the strategic foundation every brand decision is built on."
        },
        {
          title: "Motion Branding & Video Identity",
          description: "Brand identities brought to life through motion — for digital platforms, product interfaces and video content."
        },
        {
          title: "Rebranding & Brand Refresh",
          description: "When a brand has outgrown its identity, we rebuild it — honouring what has been established while positioning the business for where it is going."
        },
        {
          title: "Graphic Design",
          description: "Design across print and digital — from campaign visuals to corporate collateral — executed at the standard your brand deserves."
        }
      ]
    },
    {
      categoryTitle: "Digital Marketing",
      categoryDesc: "Building a great product is only half the equation. Getting the right people to find it, understand it and choose it is the other half. Our digital marketing practice is built around measurable performance — every channel, every campaign and every piece of content is held accountable to what it delivers for your business.",
      videoSrc: "/videos/services-page/Digital-Marketing.mp4",
      items: [
        {
          title: "Search Engine Optimisation",
          description: "Organic visibility built on keyword strategy, technical SEO and content that earns rankings — and holds them over time."
        },
        {
          title: "Performance Marketing",
          description: "Paid campaigns across search and social, optimised continuously for the metrics that matter most to your business."
        },
        {
          title: "Social Media Management",
          description: "Social presence managed with consistency and strategic intent — building an audience that engages and a brand that is recognised."
        },
        {
          title: "Content Marketing",
          description: "Content that earns attention, builds authority and moves the right audience through the funnel at every stage of their journey."
        },
        {
          title: "Pay-Per-Click Advertising",
          description: "PPC campaigns built for efficiency — precise targeting, rigorous testing and continuous optimisation on every rupee spent."
        },
        {
          title: "Marketing Automation",
          description: "Systems that keep your marketing working around the clock — nurturing leads, personalising journeys and converting at scale."
        }
      ]
    }
  ];

  return (
    <section className="services-accordion-section">
      <div className="services-accordion-container">
        {serviceCategories.map((category, idx) => (
          <ServiceCategoryRow
            key={idx}
            category={category}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}
