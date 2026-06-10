"use client";

import React from "react";
import Banner from "../Banner";
import bannerImg from "@/assets/images/about/banner.avif";

export default function ServiceBanner() {
  return (
    <Banner
      title={
        <>
          We Build Digital
          <br />
          Experiences That
          <br />
          Move Brands Forward
        </>
      }
      desc="At Web Anatomy, we blend creativity, strategy, and technology to craft modern digital experiences that help businesses grow, connect, and stand out in the digital world."
      image={bannerImg}
      buttons={[
        { text: "Explore Our Works" },
        { text: "Book a Free Call" }
      ]}
    />
  );
}
