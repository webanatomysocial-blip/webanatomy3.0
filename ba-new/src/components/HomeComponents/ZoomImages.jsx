"use client";

import React, { useRef, useEffect } from 'react';
import '../../css/HomeComponentsCss/ZoomImages.css';
import bg1 from '@/assets/images/HomeImages/multiimagesscale/bg1.avif';
import bg2 from '@/assets/images/HomeImages/multiimagesscale/bg2.avif';
import bg3 from '@/assets/images/HomeImages/multiimagesscale/bg3.avif';
import bg4 from '@/assets/images/HomeImages/multiimagesscale/bg4.avif';
import bg5 from '@/assets/images/HomeImages/multiimagesscale/bg5.avif';
import bg6 from '@/assets/images/HomeImages/multiimagesscale/bg6.avif';
import bg7 from '@/assets/images/HomeImages/multiimagesscale/bg7.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const ZOOM_IMGS = [bg1, bg2, bg3, bg4, bg5, bg6, bg7];

const SEGMENT = 3;    
const STEP    = 1.8;

export default function ZoomImages() {
    const wrapperRef  = useRef(null);
    const layerRefs   = useRef([]); 

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: 'top top',  
                    end: 'bottom bottom',
                    scrub: 1, // Smooth scrubbing
                }
            });

            // Center the layers properly before scaling
            gsap.set(layerRefs.current, { xPercent: -50, yPercent: -50 });

            // duration: 1 and stagger: 1 makes them animate perfectly one by one in equal time
            tl.fromTo(
                layerRefs.current,
                { scale: 0.001 },
                { 
                    scale: (index) => index === ZOOM_IMGS.length - 1 ? 1.1 : 1.5, 
                    duration: 1,
                    stagger: 0.35, 
                    ease: 'none' 
                }
            );

        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={wrapperRef} className="zoom-wrapper">
            <div className="zoom-sticky">

                <img src={bg1.src || bg1} alt="background" className="zoom-bg-static" />

                {ZOOM_IMGS.map((srcObj, i) => {
                    const src = srcObj.src || srcObj;
                    const isLast = i === ZOOM_IMGS.length - 1
                    return (
                        <div
                            key={i}
                            ref={el => (layerRefs.current[i] = el)}
                            className={`zoom-layer ${isLast ? 'zoom-layer--square' : ''}`}
                            style={{ zIndex: i + 2, overflow: 'hidden' }}
                        >
                            <img
                                src={src}
                                alt={`zoom layer ${i + 2}`}
                                className="zoom-image"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
