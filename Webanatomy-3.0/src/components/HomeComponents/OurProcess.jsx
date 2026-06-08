"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PiSparkleFill } from "react-icons/pi";
import '../../css/HomeComponentsCss/OurProcess.css';
import image1 from "../../assets/images/OurProcess/1.png";
import image2 from "../../assets/images/OurProcess/2.png";
import image3 from "../../assets/images/OurProcess/3.png";
import image4 from "../../assets/images/OurProcess/4.png";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function OurProcess() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        // Ensure GSAP knows about the dimensions
        const getScrollAmount = () => {
            let trackWidth = track.scrollWidth;
            return -(trackWidth - window.innerWidth + 150); 
        };

        const tween = gsap.to(track, {
            x: getScrollAmount,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${Math.abs(getScrollAmount())}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
            }
        });

        return () => {
            tween.kill();
        };
    }, []);

    const processSteps = [
        {
            id: "01",
            title: "Capture anything",
            desc: "Notes, ideas, links, and thoughts — saved instantly, organized later.",
            imgUrl: image1
        },
        {
            id: "02",
            title: "Think with AI",
            desc: "Summarize, expand, brainstorm, and connect ideas in seconds.",
            imgUrl: image2
        },
        {
            id: "03",
            title: "Collaborate",
            desc: "Unite on projects, exchange ideas, and co-create seamlessly.",
            imgUrl: image3
        },
        {
            id: "04",
            title: "Connect everything",
            desc: "Turn scattered thoughts into an organized, ",
            imgUrl: image4
        }
    ];

    return (
        <section className="our-process-section" ref={sectionRef}>
            <div className="op-track-wrapper">
                <div className="op-track" ref={trackRef}>
                    <div className="op-header-container">
                        <div className="op-header-top">
                            <PiSparkleFill size={14} /> Lorem ipsum
                        </div>
                        
                        <div className="op-header-bottom">
                            <h2 className="head-text">Our Process</h2>
                        </div>
                    </div>

                    {processSteps.map((step, idx) => (
                        <div className="op-card" key={idx}>
                            <div className="op-card-number">{step.id}</div>
                            
                            <h3 className="sub-big-heading op-card-title">
                                {step.title}
                            </h3>
                            
                            <div className="op-card-image-wrapper">
                                <img src={step.imgUrl.src} alt={step.title} className="op-card-image" loading="lazy" />
                            </div>
                            
                            <p className="sub-para-text op-card-desc">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
