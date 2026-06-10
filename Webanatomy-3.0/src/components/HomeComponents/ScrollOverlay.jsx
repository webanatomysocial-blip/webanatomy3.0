"use client";

import React from "react";
import "../../css/HomeComponentsCss/VideoBanner.css";

export default function ScrollOverlay({ color = "black", heights = [150, 180, 200] }) {
  const getVal = (val) => typeof val === "number" ? `${val}px` : val;

  return (
    <>
      <div 
        className="videooverlaywidth100 video-scroll-up" 
        style={{ backgroundColor: color, height: getVal(heights[0] ?? 150) }}
      ></div>
      <div 
        className="videooverlaywidth60 video-scroll-up" 
        style={{ backgroundColor: color, height: getVal(heights[1] ?? 180) }}
      ></div>
      <div 
        className="videooverlaywidth40 video-scroll-up" 
        style={{ backgroundColor: color, height: getVal(heights[2] ?? 200) }}
      ></div>
    </>
  );
}
