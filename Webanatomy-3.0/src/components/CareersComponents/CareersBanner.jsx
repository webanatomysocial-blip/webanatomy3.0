"use client";

import React from "react";
import Banner from "../Banner";
import bannerImg from "@/assets/images/about/banner.avif";

export default function CareersBanner() {
  return (
    <Banner
      title="Spread your wings with us"
      desc="We’re looking for thoughtful builders who want to create better tools for modern sales teams."
      image={bannerImg}
      buttons={[
        { text: "Explore Our Works" },
        { text: "Book a Free Call" }
      ]}
    />
  );
}
