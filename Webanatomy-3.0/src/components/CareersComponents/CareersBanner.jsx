"use client";

import React from "react";
import Banner from "../Banner";
import bannerImg from "@/assets/images/about/banner.avif";

export default function CareersBanner() {
  return (
    <Banner
      title="Build the Kind of Work You Are Proud to Put Your Name On"
      desc=" The work is only as good as the team behind it. Come be part of ours."
      image={bannerImg}
      buttons={[
        { text: "View Open Roles " },
       
      ]}
    />
  );
}
