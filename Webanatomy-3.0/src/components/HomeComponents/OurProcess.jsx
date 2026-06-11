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

        const ctx = gsap.context(() => {
            const getScrollAmount = () => {
                let trackWidth = track.scrollWidth;
                return -(trackWidth - window.innerWidth + 150); 
            };

            gsap.to(track, {
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
        }, sectionRef);

        return () => {
            ctx.revert();
        };
    }, []);

    const processSteps = [
        {
            id: "01",
            title: "Discover & Question",
            desc: "Every project begins with the questions most companies never ask. We immerse ourselves in your business, challenge your assumptions and build a clear picture of what actually needs to be solved before anything else begins.",
            imgUrl: image1
        },
        {
            id: "02",
            title: "Strategise & Design",
            desc: "With a deep understanding of your users and your goals, we define the strategy and design the experience. Every decision is deliberate, every interaction considered and every screen tested against what your users actually need.",
            imgUrl: image2
        },
        {
            id: "03",
            title: "Build & Engineer",
            desc: "Our engineering teams bring the design to life with precision and care on time, on budget and built with the architecture to scale from the very first day.",
            imgUrl: image3
        },
        {
            id: "04",
            title: "Launch & Grow",
            desc: "Launch is the beginning, not the end. We track performance, measure outcomes and keep refining because the best digital products are never finished, they are continuously made better.",
            imgUrl: image4
        }
    ];

    return (
        <div className="our-process-pin-wrapper">
            <section className="our-process-section" ref={sectionRef}>
                <div className="op-track-wrapper">
                    <div className="op-track" ref={trackRef}>
                        <div className="op-header-container">
                            <div className="op-header-top">
                                <PiSparkleFill size={14} style={{marginRight: '6px'}} /> How We Work
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
        </div>
    );
}
