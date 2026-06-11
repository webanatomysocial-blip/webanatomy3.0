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
      categoryTitle: "Experience Design",
      videoSrc: "/videos/services-page/Experience-Design.mp4",
      items: [
        {
          title: "UI/UX Design",
          description: "We create clean, intuitive user interfaces and experiences tailored to your audience. From user research and wireframing to high-fidelity designs, we ensure every interaction is meaningful and seamless."
        },
        {
          title: "Website Design",
          description: "Stunning, responsive, and performance-optimized websites built to capture attention. We design visually striking layouts that communicate your brand values and engage visitors."
        },
        {
          title: "Mobile Experience",
          description: "Mobile-first design strategies that deliver cohesive brand experiences on smartphones and tablets. We optimize workflows and touch targets for mobile interfaces."
        },
        {
          title: "Commerce Experience",
          description: "Designing seamless, friction-free e-commerce paths that boost conversion and drive sales. We optimize shopping carts, product displays, and checkout experiences."
        },
        {
          title: "Prototyping & User Testing",
          description: "Interactive prototypes to validate design concepts with real users. We gather critical feedback, iterate rapidly, and eliminate usability hurdles before engineering."
        },
        {
          title: "Accessibility & Inclusive Design",
          description: "Designing websites and digital platforms that are usable by everyone. We follow WCAG compliance standards to ensure accessibility across diverse needs."
        },
        {
          title: "AR/VR Experience Design",
          description: "Crafting immersive spatial experiences for augmented and virtual reality. We design interfaces for 3D environments that feel intuitive and responsive."
        },
        {
          title: "Design Systems & Component Libraries",
          description: "Standardized design languages with reusable UI elements. We build design systems that streamline development, align teams, and maintain consistency."
        }
      ]
    },
    {
      categoryTitle: "Technology & Engineering",
      videoSrc: "/videos/services-page/Teachnology - Website.mp4",
      items: [
        {
          title: "Frontend Development",
          description: "We implement modern, pixel-perfect frontend experiences using clean React and Javascript, optimized for speed and fluidity."
        },
        {
          title: "Backend Systems",
          description: "Scalable, secure, and robust server architecture. We design resilient databases, secure APIs, and server logic tailored to handle heavy traffic."
        },
        {
          title: "Mobile App Development",
          description: "Cross-platform and native mobile applications that offer native-level performance and smooth, animated interactions."
        },
        {
          title: "Next.js & React Apps",
          description: "Production-ready web apps leverage server-side rendering (SSR) and static site generation (SSG) for elite SEO performance and fast load times."
        },
        {
          title: "E-commerce Platforms",
          description: "Custom storefronts and Shopify/WooCommerce integrations built with robust inventory systems, secure payment getaways, and smooth checkouts."
        },
        {
          title: "Headless CMS Integration",
          description: "Content management solutions powered by headless systems like Sanity, Strapi, or Contentful, separating content administration from visual presentation."
        },
        {
          title: "API Development & Integrations",
          description: "Designing clean RESTful or GraphQL APIs that connect services and third-party tools seamlessly to power your application flow."
        },
        {
          title: "DevOps & Cloud Setup",
          description: "Optimized deployment pipelines and cloud infrastructure on AWS, Vercel, or GCP with automated CI/CD and secure domain/SSL setup."
        }
      ]
    },
    {
      categoryTitle: "Brand & Creative",
      videoSrc: "/videos/services-page/Branding - Website.mp4",
      items: [
        {
          title: "Brand Identity",
          description: "Developing memorable visual assets including logo families, custom iconography, and visual marks that establish a distinctive presence."
        },
        {
          title: "Brand Positioning",
          description: "Defining your unique value proposition, voice, and message hierarchy to position your business correctly within competitive landscapes."
        },
        {
          title: "Logo & Visual Systems",
          description: "Crafting beautiful, scalable logos and dynamic visual systems that convey identity across digital and physical touchpoints."
        },
        {
          title: "Brand Guidelines",
          description: "Comprehensive rulebooks governing typography, color usage, image styles, and layouts to ensure complete brand consistency."
        },
        {
          title: "Typography & Design",
          description: "Selecting and pairing typefaces that define character and establish a clear hierarchy, accompanied by bespoke layouts."
        },
        {
          title: "Packaging & Print",
          description: "Tactile, premium packaging and print collateral designed to wow customers at first touch and leave a lasting impression."
        },
        {
          title: "Graphic Illustration",
          description: "Bespoke illustrations and graphic assets tailored to your brand style to communicate concepts elegantly and uniquely."
        },
        {
          title: "Motion Identity",
          description: "Creating micro-interactions, logo animations, and transition assets that bring your digital interface to life."
        }
      ]
    },
    {
      categoryTitle: "Digital Marketing",
      videoSrc: "/videos/services-page/Digital-Marketing.mp4",
      items: [
        {
          title: "SEO Optimization",
          description: "Comprehensive on-page and off-page optimization to improve search engine rankings, drive organic traffic, and build authority."
        },
        {
          title: "Social Media Marketing",
          description: "Targeted campaigns and organic content strategies across Instagram, LinkedIn, and YouTube to build active online communities."
        },
        {
          title: "PPC & Google Ads",
          description: "High-yielding paid search and display advertisements focused on keywords that attract ready-to-buy customers."
        },
        {
          title: "Content Strategy",
          description: "Designing a comprehensive roadmap for blog articles, newsletters, and case studies that capture authority and educate audiences."
        },
        {
          title: "Performance Marketing",
          description: "Data-driven advertising campaigns that leverage pixel tracking and custom audiences to optimize advertising spend return."
        },
        {
          title: "Copywriting",
          description: "Persuasive and crisp copy tailored for website homepages, landing pages, and email sequences that motivates user action."
        },
        {
          title: "Marketing Analytics",
          description: "Clear dashboard integrations with Google Analytics and Mixpanel to measure growth trends, user behavior, and campaigns."
        },
        {
          title: "CRO Audits",
          description: "Analyzing user sessions and heatmaps to discover conversion friction points, improving key user flow pathways."
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
