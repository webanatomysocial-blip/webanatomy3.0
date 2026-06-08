"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "@/css/Footer.css";

// Import custom high-res clover logos from assets
import img0 from "@/assets/images/footerImages/0@4x.png";
import img1 from "@/assets/images/footerImages/1.1@4x.png";
import img2 from "@/assets/images/footerImages/2@4x.png";
import img3 from "@/assets/images/footerImages/3@4x.png";
import img4 from "@/assets/images/footerImages/4@4x.png";
import img5 from "@/assets/images/footerImages/5@4x.png";

export default function Footer() {
  const containerRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const [physicsActive, setPhysicsActive] = useState(false);

  useEffect(() => {
    // Scroll Intersection Observer: drop items when scrolled into viewport
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhysicsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!physicsActive || typeof window === "undefined") return;

    // Dynamically load matter-js to guarantee zero SSR issues
    const Matter = require("matter-js");
    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;

    const container = containerRef.current;
    const canvasContainer = canvasContainerRef.current;
    if (!container || !canvasContainer) return;

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height || 280;

    if (width <= 0 || height <= 0) return;

    // Create the physics engine
    const engine = Engine.create();
    engine.world.gravity.y = 0.8; // Realistic natural gravity fall

    // Create renderer target
    const render = Render.create({
      element: canvasContainer,
      engine,
      options: {
        width,
        height,
        background: "transparent",
        wireframes: false, // Turn off wireframes to render image sprites!
      },
    });

    // Solid invisible border bounds so images stay within container
    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: "transparent" },
    };
    const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);

    // List of logo image objects
    const cloverImages = [img0, img1, img2, img3, img4, img5];

    // Generate physical boxes with image sprites mapped as texture
    const wordBodies = cloverImages.map((img, i) => {
      // Stagger drops along the width
      const x = (width / 7) * (i + 1);
      const y = -60 - i * 50; // Rain down sequentially just above the visible boundary
      const size = 210; // Match screenshot sizes

      // Dynamic scales to support high-res PNG ratios perfectly
      const scaleX = size / img.width;
      const scaleY = size / img.height;

      const body = Bodies.rectangle(x, y, size, size, {
        restitution: 0.65, // Lively bounce
        friction: 0.08,
        frictionAir: 0.015,
        render: {
          sprite: {
            texture: img.src,
            xScale: scaleX,
            yScale: scaleY,
          },
        },
      });

      // Give a tiny random initial nudge
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 4,
        y: 0,
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.03);

      return body;
    });

    // Create interactive Mouse Constraint bound directly to the canvas
    const mouse = Mouse.create(render.canvas);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.15,
        render: { visible: false },
      },
    });

    // Share mouse with the renderer for exact coordinate mapping
    render.mouse = mouse;

    // Allow native page scrolling with trackpad/mousewheel over the canvas
    if (mouse.element) {
      mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
      mouse.element.removeEventListener("wheel", mouse.mousewheel);

      // Remove default aggressive touch listeners that block swipe-scrolling
      mouse.element.removeEventListener("touchmove", mouse.mousemove);
      mouse.element.removeEventListener("touchstart", mouse.mousedown);
      mouse.element.removeEventListener("touchend", mouse.mouseup);

      // Selective touchmove handler: only call preventDefault when actively dragging a physics body (clover)
      const touchMoveHandler = (e) => {
        if (mouseConstraint.body) {
          if (e.cancelable) {
            e.preventDefault();
          }
        }
      };

      // Re-add touch events with passive: false to allow selective preventDefault calls
      mouse.element.addEventListener("touchmove", touchMoveHandler, { passive: false });
      mouse.element.addEventListener("touchmove", mouse.mousemove, { passive: false });
      mouse.element.addEventListener("touchstart", mouse.mousedown, { passive: false });
      mouse.element.addEventListener("touchend", mouse.mouseup, { passive: false });
    }

    // Add boundaries, mouse grab constraints, and clover bodies to the physics engine (no ceiling)
    World.add(engine.world, [
      floor,
      leftWall,
      rightWall,
      mouseConstraint,
      ...wordBodies,
    ]);

    // Fire runner
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Handle resizing on client windows dynamically to prevent canvas offsets
    const handleResize = () => {
      if (!container) return;
      const newRect = container.getBoundingClientRect();
      render.options.width = newRect.width;
      render.options.height = newRect.height || 280;
      
      // Re-position ceiling and walls
      Matter.Body.setPosition(floor, { x: newRect.width / 2, y: (newRect.height || 280) + 25 });
      Matter.Body.setPosition(rightWall, { x: newRect.width + 25, y: (newRect.height || 280) / 2 });
    };

    window.addEventListener("resize", handleResize);

    // Physics Engine loop
    const updateLoop = () => {
      Matter.Engine.update(engine);
      requestAnimationFrame(updateLoop);
    };
    const loopId = requestAnimationFrame(updateLoop);

    // Cleanup Matter-JS on destroy
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(loopId);
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainer) {
        canvasContainer.removeChild(render.canvas);
      }
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, [physicsActive]);

  return (
    <footer className="site-footer">
      <div className="footer-top">
        {/* Left Column */}
        <div className="footer-left">
          <h2 className="footer-title">
            GROW YOUR <br />
            <span className="purple-gradient-text">BUSINESS WITH</span> <br />
            <span className="purple-solid-text">SMART DIGITAL</span> <br />
            <span className="purple-deep-text">SOLUTIONS.</span>
          </h2>
        </div>

        {/* Middle Column */}
        <div className="footer-middle">
          <a href="#" className="footer-link">Home</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#cases" className="footer-link">Case Studies</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>

        {/* Right Column */}
        <div className="footer-right">
          {/* Email Subscription Form */}
          <div className="email-box">
            <input
              type="email"
              placeholder="Your work email"
              className="email-input"
              aria-label="Your work email"
            />
            <button className="get-started-btn">Get started</button>
          </div>

          {/* Follow row */}
          <div className="follow-row">
            <span>Follow us:</span>
            <div className="social-squares">
              <a href="#" className="social-square-link" aria-label="Instagram">
                <svg className="social-square-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a href="#" className="social-square-link" aria-label="LinkedIn">
                <svg className="social-square-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Location row */}
          <div className="location-row">
            <span>Location:</span>
            <div className="location-details">
              Admiral House, Cardiff, UK. <br />
              CF24 0DP
            </div>
          </div>
        </div>
      </div>

      {/* Matter-JS Physics falling image playground */}
      <div 
        ref={containerRef} 
        className="falling-images-wrapper"
        title="Interactive Clover Physics - Drag or throw them!"
      >
        {/* Render canvas injected by Matter-JS */}
        <div ref={canvasContainerRef} className="falling-images-canvas" />

        {/* Fallback Static layout before intersection observer triggers canvas */}
        <div className={`falling-images-static ${physicsActive ? "hidden" : ""}`}>
          <Image src={img0} alt="Clover Clover 0" className="static-clover" />
          <Image src={img1} alt="Clover Clover 1" className="static-clover" />
          <Image src={img2} alt="Clover Clover 2" className="static-clover" />
          <Image src={img3} alt="Clover Clover 3" className="static-clover" />
          <Image src={img4} alt="Clover Clover 4" className="static-clover" />
          <Image src={img5} alt="Clover Clover 5" className="static-clover" />
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="footer-bottom">
        <span className="footer-bottom-copy">
          © {new Date().getFullYear()} BUSINESS ANATOMY. ALL RIGHTS RESERVED.
        </span>
        <span className="footer-bottom-design">
          DESIGNED AND DEVELOPED BY WEB ANATOMY
        </span>
      </div>
    </footer>
  );
}
