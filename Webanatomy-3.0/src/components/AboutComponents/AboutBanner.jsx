"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Banner from "../Banner";
import bannerImg from "@/assets/images/about/banner.avif";

export default function AboutBanner() {
  const router = useRouter();

  return (
    <Banner
      title={
        <>
          We Are Web Anatomy.
          <br />
          And This Is Our Story.
        </>
      }
      desc="A technology and marketing company built on curiosity, craft and the belief that every business deserves a digital presence as ambitious as its vision."
      image={bannerImg}
      buttons={[
        { text: "Explore Our Works", onClick: () => router.push("/works") },
        { text: "Book a Free Call", onClick: () => router.push("/contact") }
      ]}
    />
  );
}
