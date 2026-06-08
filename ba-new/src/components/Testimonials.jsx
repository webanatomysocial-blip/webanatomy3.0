"use client";

import React, { useRef, useEffect } from 'react';
import '../css/HomeComponentsCss/Testimonials.css';
import { FaSquare } from 'react-icons/fa';

export default function Testimonials() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.classList.add('in-view');
                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.18 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const testimonialVideos = [
        { id: 1, videoSrc: '/videos/Testimonials/testimonial-1.mp4', alt: 'Sarah Jenkins — Brand Director' },
        { id: 2, videoSrc: '/videos/Testimonials/testimonial-1.mp4', alt: 'Marcus Chen — Product Architect' },
        { id: 3, videoSrc: '/videos/Testimonials/testimonial-1.mp4', alt: 'Elena Rostova — Tech Lead' },
        { id: 4, videoSrc: '/videos/Testimonials/testimonial-1.mp4', alt: 'David K. — Managing Director' },
    ];

    return (
        <section ref={ref} className="testimonials fade-in">
            <div className="testimonials-header">
                <span className="clients-bullet">
                    <FaSquare size={10} style={{ marginRight: '10px' }} />
                    WHAT ARE PEOPLE SAYING
                </span>
                <h2 className="head-text-white">TESTIMONIALS.</h2>
            </div>
            <div className="video-grid">
                {testimonialVideos.map((testimonial) => (
                    <div key={testimonial.id} className="video-item">
                        <video controls>
                            <source src={testimonial.videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                      
                    </div>
                ))}
            </div>
        </section>
    );
}
