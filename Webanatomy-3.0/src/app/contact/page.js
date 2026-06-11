"use client";

import React from "react";
import "../../css/contact.css";
import fullBg from "@/assets/images/contact/full-bg.png";

export default function Contact() {
  return (
    <div className="contact-page">
      <div
        className="contact-left"
        style={{ backgroundImage: `url(${fullBg.src})` }}
      >
        <div className="contact-left-content">
          <div className="main-stat-block">
            <h1 className="big-head-text-white">$1.72B</h1>
            <p className="sub-head-text-white">Assets Under Management</p>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <h2 className="sub-head-text-white">80+</h2>
              <p className="sub-para-text-white">Portfolio Managed</p>
            </div>
            <div className="stat-item">
              <h2 className="sub-head-text-white">300%</h2>
              <p className="sub-para-text-white">Return on investment</p>
            </div>
            <div className="stat-item">
              <h2 className="sub-head-text-white">2k+</h2>
              <p className="sub-para-text-white">Global Customers</p>
            </div>
            <div className="stat-item">
              <h2 className="sub-head-text-white">~10+</h2>
              <p className="sub-para-text-white">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <div className="contact-header">
          <h2 className="head-text-white">Contact Us</h2>
          <p className="para-text-white">
            Have questions or need assistance? Reach out to us, and our team
            will get back to you promptly
          </p>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label>First name</label>
              <input type="text" placeholder="Tony" />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input type="text" placeholder="Stark" />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="tony@starkindustries.com" />
          </div>

          <div className="form-group">
            <label>Phone number</label>
            <div className="phone-input-wrapper">
              <select className="country-select">
                <option>US</option>
                <option>IN</option>
                <option>UK</option>
              </select>
              <input
                type="tel"
                placeholder="+1 (555) 020-3050"
                style={{ flex: 1 }}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Leave us a message..."></textarea>
          </div>

          <div className="privacy-policy">
            <input type="checkbox" id="privacy" />
            <label htmlFor="privacy">
              You agree to our friendly <a href="#">privacy policy</a>.
            </label>
          </div>

          <button type="submit" className="white-bg-btn">
            Send Message
            <div className="icon-btn">
              <span className="icon-inside-btn-1">→</span>
              <span className="icon-inside-btn-2">→</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
