"use client";

import React from "react";
import Banner from "../Banner";
import bannerImg from "@/assets/images/about/banner.avif";

export default function AboutBanner() {
  return (
    <Banner
      title={
        <>
          We Are Company
          <br />
          With A Vision
        </>
      }
      desc="Whether you're launching a startup or scaling an established business, our services are built to help you stand out, attract the right audience, and grow with confidence."
      image={bannerImg}
      buttons={[
        { text: "Explore Our Works" },
        { text: "Book a Free Call" }
      ]}
    />
  );
}
