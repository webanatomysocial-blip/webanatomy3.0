import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../workCss/VideoExpand.css";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function VideoExpand({ src, poster }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(
    () => {
      if (!videoRef.current || !containerRef.current) return;

      gsap.to(videoRef.current, {
        width: "100%",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center center",
          scrub: 0.4,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="expand-video-container" ref={containerRef}>
      <video
        ref={videoRef}
        className="resizable-video"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
