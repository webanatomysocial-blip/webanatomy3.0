"use client";
import { useEffect, useRef } from 'react';
import { FaSquare } from 'react-icons/fa';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../css/HomeComponentsCss/HowDoWeWork.css';
import image1 from "../../assets/images/HomeImages/howdowework/1.avif";
import image2 from "../../assets/images/HomeImages/howdowework/2.avif";
import image3 from "../../assets/images/HomeImages/howdowework/3.avif";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function HowDoWeWork() {
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
            title: "Discover",
            desc: "We start with discovering what truly drives your business and brand vision forward.",
            imgUrl: image1
        },
        {
            id: "02",
            title: "Strategize",
            desc: "We create a customized strategy designed to elevate your digital presence.",
            imgUrl: image2
        },
        {
            id: "03",
            title: "Build",
            desc: "We bring your strategy to life by building innovative and scalable solutions.",
            imgUrl: image3
        },
        {
            id: "04",
            title: "Optimize",
            desc: "We refine and optimize to ensure maximum performance and user engagement.",
            imgUrl: image1
        }
    ];

    return (
        <section className="how-do-we-work-section" ref={sectionRef}>
            <div className="overview-header">
                <span className="clients-bullet">
                    <FaSquare size={10} style={{ marginRight: '10px' }} />
                    PROCESS
                </span>
                <h2 className="head-text-white">HOW DO WE WORK.</h2>
            </div>

            <div className="how-do-we-work-process-wrapper">
                <div className="how-do-we-work-process-container" ref={trackRef}>
                    {processSteps.map((step, idx) => (
                        <div className="process-card" key={idx}>
                            {/* Top Panel: Number + Arrow + Title */}
                            <div className="process-card-top">
                                <div className="process-card-top-row">
                                    <span className="process-number">{step.id}</span>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                                <h3 className="process-title">{step.title}</h3>
                            </div>

                            {/* Bottom Panel: Description + Image */}
                            <div className="process-card-bottom">
                                <p className="process-desc">{step.desc}</p>
                                <div className="process-card-bottom-row">
                                    <div className="process-image-wrapper">
                                        <Image src={step.imgUrl} alt={step.title} fill className="process-image" />
                                    </div>
                                    <div className="process-image-label">
                                        <span>Lorem Ipsum</span>
                                        <span>Lorem Ipsum</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* 5th CTA Card */}
                    <div className="process-card cta-card">
                        <h3 className="cta-text">LET'S WORK TOGETHER</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}