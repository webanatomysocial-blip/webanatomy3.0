"use client";

import React from "react";
import Banner from "../Banner";
import bannerImg from "@/assets/images/about/banner.avif";

export default function ServiceBanner() {
  return (
    <Banner
      title={
        <>
          The Expertise to Build It.
          <br />
          The Experience to Build It Right.
        </>
      }
      desc="At WebAnatomy, we have spent years building products, designing experiences and growing businesses for clients who expect the best — and we have never once lowered that standard."
      image={bannerImg}
      buttons={[
        { text: "Explore Our Work →" },
        { text: "Book a Call" }
      ]}
    />
  );
}
