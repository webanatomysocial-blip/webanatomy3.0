"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FiLinkedin, FiInstagram, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
// Using the same CSS file referenced in your blog code
import '../css/HomeComponentsCss/blog-post.css';

gsap.registerPlugin(ScrollTrigger);

const DynamicWork = ({
  category = "Work",
  title,
  content,
  image,
}) => {
  const progressBarRef = useRef(null);
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);

    // Animate Progress Bar width based on scroll
    gsap.to(progressBarRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });
  }, []);

  const handleShare = () => {
    const shareData = {
      title: title,
      url: currentUrl,
    };
    if (navigator.share) {
      navigator.share(shareData).catch((err) => console.log("Error sharing", err));
    } else {
      navigator.clipboard.writeText(currentUrl);
      alert("Link copied to clipboard!");
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="pod-post-page">
      {/* Sticky Scroll Header */}
      <div className="pod-sticky-header" style={{ top: "80px" }}>
        <div className="pod-header-content">
          <div className="pod-header-title">
            {category} <span style={{ margin: "0 10px", color: "#666" }}>|</span> {title}
          </div>
          <div className="pod-header-actions">
            <div className="social-icons-header">
              <button
                onClick={handleShare}
                aria-label="Share"
                className="social-link-header"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                <FiInstagram size={20} color="#fff" />
              </button>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="social-link-header"
              >
                <FiLinkedin size={20} color="#fff" />
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-progress-bar" ref={progressBarRef}></div>
      </div>

      <div className="pod-container">
        {/* Main Content */}
        <div className="pod-main-content">
          <button onClick={handleGoBack} className="go-back-btn">
            <FiArrowLeft size={20} />
            Go Back
          </button>
          
          <div className="pod-split-header">
            <div className="pod-title-section">
              <h1 className="head-text-white">{title}</h1>
            </div>
            <div className="pod-hero-img-container">
              {image && (
                <Image 
                  src={image} 
                  alt={title} 
                  width={800} 
                  height={600} 
                  style={{ width: "100%", height: "auto", borderRadius: "12px" }} 
                />
              )}
            </div>
          </div>

          <div className="pod-body sub-para-text-white" style={{ marginTop: '40px' }}>
            {content || <p>This is dynamic work content. In a full implementation, the body of the work post would be injected here.</p>}
          </div>
        </div>

        {/* Sticky Sidebar */}
        <aside className="pod-sidebar">
          <div className="recent-posts">
            <h3 style={{ color: '#fff', marginBottom: '20px', fontFamily: 'var(--font-geist)' }}>More works</h3>
            <Link href="/" className="recent-post-item" style={{ color: '#ccc', textDecoration: 'none', display: 'block', marginBottom: '15px' }}>
              Back to Home
              <hr style={{ borderColor: '#333', marginTop: '10px' }} />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DynamicWork;
