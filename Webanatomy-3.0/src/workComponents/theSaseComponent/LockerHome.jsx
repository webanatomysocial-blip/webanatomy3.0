import React, { useRef, useEffect, useState } from "react";
import Lenis from "lenis";
import "../../workCss/theSaseCss/LockerHome.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import img1 from "../../WorkImages/Thesase/Squence-images/locker_01_0260.webp";

gsap.registerPlugin(ScrollTrigger);

function LockerHome() {
  const canvasRef = useRef(null);
  const images = useRef([]);
  const [currentFrame, setCurrentFrame] = useState(260);
  const lenisRef = useRef(null);
  const totalFrames = 350;
  const animationSectionHeight = 3500;
  // const aboutUsSectionRef = useRef(null);
  const homeoverlay = useRef(null);

  // Generate image path using Webpack require.context
  const requireContext = require.context(
    "../../WorkImages/Thesase/Squence-images",
    false,
    /locker_01_\d{4}\.webp$/
  );

  const getFramePath = (frame) => {
    const paddedFrame = String(frame).padStart(4, "0");
    try {
      const module = requireContext(`./locker_01_${paddedFrame}.webp`);
      return module ? module.default || module : "";
    } catch (e) {
      return "";
    }
  };

  // Preload images
  useEffect(() => {
    images.current = [];
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const src = getFramePath(i);
      if (src) {
        img.src = src;
        images.current[i] = img;
      }
    }

    const firstImage = images.current[260];
    if (firstImage && firstImage.complete) {
      updateCanvasSize();
      drawFrame(260);
    } else if (firstImage) {
      firstImage.onload = () => {
        updateCanvasSize();
        drawFrame(260);
      };
    }
  });

  // Initialize Lenis
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenisRef.current?.destroy();
  }, []);

  // Canvas functions
  const updateCanvasSize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const drawFrame = (frame) => {
    const canvas = canvasRef.current;
    if (!canvas || !images.current[frame]?.complete) return;

    const ctx = canvas.getContext("2d");
    const img = images.current[frame];
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const imgAspect = img.width / img.height;
    let drawWidth = canvas.width;
    let drawHeight = canvas.width / imgAspect;
    let offsetX = 0;
    let offsetY = (canvas.height - drawHeight) / 2;

    if (drawHeight < canvas.height) {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgAspect;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Handle scroll with Lenis
  const handleScroll = React.useCallback(
    ({ scroll }) => {
      const maxScroll = animationSectionHeight - window.innerHeight;
      const frame =
        Math.floor((scroll / maxScroll) * (totalFrames - 260)) + 260;
      const clampedFrame = Math.max(260, Math.min(totalFrames, frame));

      if (clampedFrame !== currentFrame) {
        setCurrentFrame(clampedFrame);
        requestAnimationFrame(() => drawFrame(clampedFrame));
      }
    },
    [currentFrame],
  );

  // Lenis scroll listener + resize
  useEffect(() => {
    const lenis = lenisRef.current;
    if (lenis) lenis.on("scroll", handleScroll);

    const handleResize = () => {
      updateCanvasSize();
      drawFrame(currentFrame);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (lenis) lenis.off("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, currentFrame]);

  // GSAP Animations
  useGSAP(() => {
    // 1. Fade overlay to black when About section enters
    const aboutSection = document.querySelector(".about-us-section");
    const overlay = homeoverlay.current;

    if (aboutSection && overlay) {
      gsap.to(overlay, {
        backgroundColor: "#FFF5EA",
        ease: "none",
        scrollTrigger: {
          trigger: aboutSection,
          start: "top 100%",
          end: "top 40%",
          scrub: true,
          // markers: true,
        },
      });
    }
  }, [homeoverlay]); // re-run if ref changes

  return (
    <>
      {/* ANIMATION SECTION */}
      <div
        className="animation-section only-windows "
        style={{ height: `${animationSectionHeight}px`, position: "relative" }}
      >
        <div className="home-banner-overlay" ref={homeoverlay}></div>
        <canvas ref={canvasRef} className="canvas-sticky" />
      </div>
    </>
  );
}

export default LockerHome;
