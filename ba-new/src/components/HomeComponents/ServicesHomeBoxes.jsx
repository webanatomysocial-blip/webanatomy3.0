"use client";

import { gsap } from "gsap/gsap-core";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/css/HomeComponentsCss/ServicesHomeBoxes.css";

const servicesData = [
    { num: '01', letter: 'D', title: 'Digital Marketing' },
    { num: '02', letter: 'B', title: 'Brand Strategy' },
    { num: '03', letter: 'U', title: 'UI/UX Design' },
    { num: '04', letter: 'W', title: 'Web Development' },
    { num: '05', letter: 'C', title: 'Content Creation' },
    { num: '06', letter: 'S', title: 'SEO Optimization' },
];

export default function ServicesHomeBoxes() {
    const sectionBoxRef = useRef(null);
    const boxesRef = useRef([]);
    boxesRef.current = [];

    const addToRefs = (el) => {
        if (el && !boxesRef.current.includes(el)) {
            boxesRef.current.push(el);
        }
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
            const timeLine = gsap.timeline({
               scrollTrigger:{
                    trigger: sectionBoxRef.current,
                    start: "10% 30%",
                    end: "bottom 30%",
                    scrub: 1,
                    // markers: true,
                }
            });
            
            boxesRef.current.forEach((box, i) => {
               
                let initialX = (i - 3) * 1; 
                
                // Final position: spaced evenly across the screen. 
                // e.g. 0vw, 14vw, 28vw, 42vw, 56vw, 70vw
                let finalX = i * 14; 

                timeLine.to(".service-heading-middle",{
                  top: "20%",

                    ease: "none",
                })            
                .fromTo(
                    box,
                    {
                        x: `${initialX}vw`,
                        rotationY: 30,
                     
                    },
                    {
                        x: `${finalX}vw`,
                         rotationY: 0,
                        force3D: true
                    },
                    0 
                ), ">";
            });

            // Wait for other components (like GredientScrollText) to finish their pin-spacing layout
            requestAnimationFrame(() => {
                setTimeout(() => {
                    ScrollTrigger.refresh();
                }, 100);
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="services-home-section" ref={sectionBoxRef} >
           <div className="service-home-box-parent">
                <div className="service-heading-middle">
                    <h2 className="head-text-white">Services</h2>
                </div>
                
                {servicesData.map((service, index) => (
                    <div ref={addToRefs} key={index} className="service-home-box-1" style={{ zIndex: index + 10 }}>
                        <div className="service-box-number">
                            {service.num}
                        </div>
                        <div className="service-box-heading">
                            <h3 className="head-text-white">
                                {service.letter}
                            </h3>
                            <p className="sub-heading-text">
                                {service.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}