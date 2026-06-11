"use client";
import React, { useState } from 'react';
import '../../css/HomeComponentsCss/ClientTestimonials.css';

const testimonials = [
  {
    id: 1,
    company: 'Netflix',
    logo: 'NETFLIX',
    tagline: 'New Age Startup',
    text: "This has been a reliable and efficient solution for our business. It allowed us to improve productivity, reduce manual work, and manage tasks more effectively without adding unnecessary complexity. Definitely a tool we can depend on long-term.",
    author: 'Reed Hastings',
    role: 'Co-CEO Netflix'
  },
  {
    id: 2,
    company: 'Cosmic',
    logo: 'COSMIC',
    tagline: 'Edtech Startup',
    text: "This has been a reliable and efficient solution for our business. It allowed us to improve productivity, reduce manual work, and manage tasks more effectively without adding unnecessary complexity. Definitely a tool we can depend on long-term.",
    author: 'John Doe',
    role: 'CEO Cosmic'
  },
  {
    id: 3,
    company: 'Amazon',
    logo: 'amazon',
    tagline: 'E-commerce Giant',
    text: "This has been a reliable and efficient solution for our business. It allowed us to improve productivity, reduce manual work, and manage tasks more effectively without adding unnecessary complexity. Definitely a tool we can depend on long-term.",
    author: 'Andy Jassy',
    role: 'CEO Amazon'
  },
  {
    id: 4,
    company: 'Loom',
    logo: 'loom',
    tagline: 'Fintech Startup',
    text: "This has been a reliable and efficient solution for our business. It allowed us to improve productivity, reduce manual work, and manage tasks more effectively without adding unnecessary complexity. Definitely a tool we can depend on long-term.",
    author: 'Jane Doe',
    role: 'CEO Loom'
  },
  {
    id: 5,
    company: 'Google',
    logo: 'Google',
    tagline: 'Tech Giant',
    text: "This has been a reliable and efficient solution for our business. It allowed us to improve productivity, reduce manual work, and manage tasks more effectively without adding unnecessary complexity. Definitely a tool we can depend on long-term.",
    author: 'Sundar Pichai',
    role: 'CEO Google'
  }
];

const ClientTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Amazon is the 3rd item, index 2

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>Client Testimonials</h2>
        <button className="feedback-btn">+ Feedback</button>
      </div>
      
      <div className="testimonials-container">
        {testimonials.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div 
              key={item.id} 
              className={`testimonial-card ${isActive ? 'active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="testimonial-logo">
                {item.logo}
              </div>
              
              <div className="testimonial-quote-container">
                <div className="quote-content-inner">
                  <p className="testimonial-quote">{item.text}</p>
                </div>
              </div>

              <div className="testimonial-footer">
                <div className="footer-left">
                  <span className="company-name">{item.company}</span>
                  {!isActive && <span className="company-tagline">{item.tagline}</span>}
                </div>
                {isActive && (
                  <div className="footer-right">
                    <span className="author-name">{item.author}</span>
                    <span className="author-role">{item.role}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ClientTestimonials;
