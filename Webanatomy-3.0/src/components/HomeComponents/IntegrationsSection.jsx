"use client";
import React from 'react';
import '../../css/HomeComponentsCss/IntegrationsSection.css';
import { FiSlack, FiFigma, FiTrello, FiTwitter, FiGithub, FiMail, FiGlobe, FiDatabase } from 'react-icons/fi';

const icons = [
  { id: 1, Icon: FiSlack, color: '#E01E5A' },
  { id: 2, Icon: FiFigma, color: '#F24E1E' },
  { id: 3, Icon: FiTrello, color: '#0052CC' },
  { id: 4, Icon: FiTwitter, color: '#1DA1F2' },
  { id: 5, Icon: FiGithub, color: '#333' },
  { id: 6, Icon: FiMail, color: '#EA4335' },
  { id: 7, Icon: FiGlobe, color: '#34A853' },
  { id: 8, Icon: FiDatabase, color: '#FBBC05' },
];

const IntegrationsSection = () => {
  return (
    <section className="integrations-section">
      <div className="integrations-container">
        
        {/* Left Side Content */}
        <div className="integrations-left">
          <div className="integrations-pill">
            <span className="pill-icon">✦</span> Integrations
          </div>
          
          <h2 className="integrations-title">
            Your Entire Marketing Ecosystem,<br/>
            Managed From One Place
          </h2>
          
          <p className="integrations-subtitle">
            We connect your business across every platform your audience uses — search, social, email and beyond — running a unified strategy that is built around your goals and refined continuously against real results.
          </p>
          
          <button className="integrations-btn">
            View All Services →
          </button>
        </div>

        {/* Right Side Orbit */}
        <div className="integrations-right">
          <div className="orbit-wrapper">
            {/* Center Gradient Circle */}
            <div className="orbit-center"></div>
            
            {/* Inner dashed ring (optional, sometimes added for effect) */}
            <div className="orbit-ring-inner"></div>

            {/* Rotating Ring */}
            <div className="orbit-ring">
              {icons.map((item, index) => {
                const angle = index * (360 / icons.length);
                return (
                  <div 
                    className="orbit-anchor" 
                    key={item.id} 
                    style={{ '--angle': `${angle}deg` }}
                  >
                    <div className="orbit-icon-counter-spin">
                      <div className="orbit-icon" style={{ color: item.color }}>
                        <item.Icon />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <p className="integrations-quote">
            “One strategy. Every platform.<br/>
            Measurable growth at every step.”
          </p>
        </div>

      </div>
    </section>
  );
};

export default IntegrationsSection;
