"use client";

import React, { useEffect, useRef } from 'react';
import '../../css/HomeComponentsCss/SpiralSwiper.css';

const ARTWORKS = [
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=700&q=80",
];

const SLIDE_COUNT = 12;
const ANGLE_STEP = 360 / SLIDE_COUNT;
const START_ANGLE = 0;

export default function SpiralSwiper() {
    const outerRef = useRef(null);
    const wrapperRef = useRef(null);
    const rafId = useRef(null);

    // Physics and interaction state kept outside of React rendering cycle
    const state = useRef({
        wrapperRotation: 0,
        activeIndex: 0,
        isDragging: false,
        dragStartX: 0,
        rotAtDragStart: 0,
        velocity: 0,
        prevX: 0,
        prevTime: 0
    });

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const render = () => {
            if (!wrapper) return;
            wrapper.style.transform = `rotateY(${state.current.wrapperRotation.toFixed(4)}deg)`;

            let min = Infinity;
            for (let i = 0; i < SLIDE_COUNT; i++) {
                const slideWorldAngle = state.current.wrapperRotation + i * ANGLE_STEP;
                const d = Math.abs((((slideWorldAngle % 360) + 540) % 360) - 180);
                if (d < min) {
                    min = d;
                    state.current.activeIndex = i;
                }
            }
        };

        const loop = () => {
            if (!state.current.isDragging) {
                if (Math.abs(state.current.velocity) > 0.05) {
                    // Inertia coast
                    state.current.wrapperRotation += state.current.velocity;
                    state.current.velocity *= 0.93;
                    render();
                } else {
                    // Spring snap to nearest
                    state.current.velocity = 0;
                    const target = -(state.current.activeIndex * ANGLE_STEP);
                    let diff = target - state.current.wrapperRotation;
                    diff = ((((diff + 180) % 360) + 360) % 360) - 180;

                    if (Math.abs(diff) > 0.01) {
                        state.current.wrapperRotation += diff * 0.13;
                        render();
                    } else {
                        state.current.wrapperRotation = target;
                        render();
                    }
                }
            }
            rafId.current = requestAnimationFrame(loop);
        };

        render();
        loop();

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    // Drag Interaction Handlers
    useEffect(() => {
        const outer = outerRef.current;
        if (!outer) return;

        const getX = (e) => e.touches ? e.touches[0].clientX : e.clientX;

        const onDragStart = (e) => {
            state.current.isDragging = true;
            state.current.dragStartX = getX(e);
            state.current.rotAtDragStart = state.current.wrapperRotation;
            state.current.velocity = 0;
            state.current.prevX = state.current.dragStartX;
            state.current.prevTime = performance.now();
        };

        const onDragMove = (e) => {
            if (!state.current.isDragging) return;
            const x = getX(e);
            const dx = x - state.current.dragStartX;
            const now = performance.now();
            const dt = now - state.current.prevTime || 1;

            state.current.wrapperRotation = state.current.rotAtDragStart - dx * 0.25;
            state.current.velocity = -((x - state.current.prevX) * 0.25) / (dt / 16.667);
            
            state.current.prevX = x;
            state.current.prevTime = now;
            
            if (wrapperRef.current) {
                wrapperRef.current.style.transform = `rotateY(${state.current.wrapperRotation.toFixed(4)}deg)`;
            }
        };

        const onDragEnd = () => {
            if (!state.current.isDragging) return;
            state.current.isDragging = false;
            const MAX_V = 14;
            state.current.velocity = Math.max(-MAX_V, Math.min(MAX_V, state.current.velocity));
        };

        outer.addEventListener("mousedown", onDragStart);
        window.addEventListener("mousemove", onDragMove);
        window.addEventListener("mouseup", onDragEnd);

        outer.addEventListener("touchstart", onDragStart, { passive: true });
        window.addEventListener("touchmove", onDragMove, { passive: true });
        window.addEventListener("touchend", onDragEnd);

        return () => {
            outer.removeEventListener("mousedown", onDragStart);
            window.removeEventListener("mousemove", onDragMove);
            window.removeEventListener("mouseup", onDragEnd);

            outer.removeEventListener("touchstart", onDragStart);
            window.removeEventListener("touchmove", onDragMove);
            window.removeEventListener("touchend", onDragEnd);
        };
    }, []);

    return (
        <div className="swiper-outer-container" ref={outerRef}>
            <div className="images-wrapper" ref={wrapperRef}>
                {ARTWORKS.map((src, i) => {
                    const angle = START_ANGLE + i * ANGLE_STEP;
                    return (
                        <div
                            key={i}
                            className="spiral-slide"
                            style={{ transform: `rotateY(${angle}deg)` }}
                        >
                            <img src={src} alt={`Artwork ${i + 1}`} draggable={false} loading="lazy" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
