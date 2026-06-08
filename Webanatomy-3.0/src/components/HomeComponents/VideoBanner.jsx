"use client";
import React, { useEffect, useRef } from "react";
import "../../css/HomeComponentsCss/VideoBanner.css";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoBanner() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: document.querySelector(".home-banner-container"),
                    start: "20% top",
                    end: "bottom top",
                    scrub: 1,
                    // markers : true
                }
            });

        
            const elements = gsap.utils.toArray(".video-scroll-up");
            
            // Add an animation to the timeline for each element, staggering them by 0.2s
            elements.forEach((el, index) => {
                tl.to(el, {
                    top: "-300px",
                    ease: "none",
                }, index * 0.05); // Position parameter handles the stagger
            });
        }, containerRef);

        return () => ctx.revert(); // Cleanup on unmount
    }, []);
    
    return (
        <>
        <div className="video-banner-container" ref={containerRef}>
            <video
                className="video-banner-bg"
                src="/videos/homeBanner/Web-anatomy-showreel.mp4"
                autoPlay
                loop
                muted
                playsInline
            ></video>

            <div className="videooverlaywidth100 video-scroll-up"></div>
            <div className="videooverlaywidth60 video-scroll-up"></div>
            <div className="videooverlaywidth40 video-scroll-up"></div>
        </div>


       
        </>
    );
}