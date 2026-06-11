"use client";

import React, { useRef } from "react";
import "@/css/AboutComponentsCss/BuiltForFocus.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Image for the left panel
import bannerImg from "@/assets/images/about/banner.avif";

// Carousel slides — body uses mixed grey/white formatting like the reference
const milestoneSlides = [
  {
    id: 1,
    eyebrow: "Our Team",
    body: (
      <>
        Web Anatomy is built by a{" "}
        <strong>small, focused team</strong> that values{" "}
        <strong>quality over speed.</strong>
      </>
    ),
  },
  {
    id: 2,
    eyebrow: "Our Mission",
    body: (
      <>
        Our Mission to create tools that help{" "}
        <strong>people think clearly</strong> and{" "}
        <strong>capture ideas</strong> without friction.
      </>
    ),
  },
  {
    id: 3,
    eyebrow: "Our Process",
    body: (
      <>
        Every pixel has a purpose. We design from{" "}
        <strong>first principles,</strong> not templates — so your product{" "}
        <strong>actually converts.</strong>
      </>
    ),
  },
  {
    id: 4,
    eyebrow: "Our Growth",
    body: (
      <>
        From <strong>20 projects</strong> to complex SaaS products —{" "}
        we scale with you, never losing sight of{" "}
        <strong>craft and clarity.</strong>
      </>
    ),
  },
];

export default function BuiltForFocus() {
  return (
    <section className="bff-section">

      {/* ── Section Header ── */}
      <div className="bff-header">
        <h2 className="head-text bff-title">
          Where Technology Meets Imagination,
          <br />
          and Imagination Becomes Reality.
        </h2>
        <span className="bff-tag">✦ Key milestones</span>
      </div>

      {/* ── 50 / 50 Split ── */}
      <div className="bff-split">

        {/* ── Left: image + below-text ── */}
        <div className="bff-left">
          {/* Image with text overlaid on top */}
          <div className="bff-image-wrapper">
            <img
              src={bannerImg.src}
              alt="Our work grows with your business"
              className="bff-bg-image"
            />
            {/* gradient overlay */}
            <div className="bff-image-overlay" />
            {/* Text on the image — bottom row */}
            <div className="bff-image-text">
              <p className="sub-big-heading bff-caption-title">
                Our Work Grows With
                <br />
                Your Business
              </p>
              <p className="sub-heading bff-caption-desc">
                Seven years of building products, designing experiences and growing businesses — and we are still as hungry as day one.
              </p>
            </div>
          </div>
        </div>

        {/* ── Right: black card with pagination TOP, text BOTTOM ── */}
        <div className="bff-right">

          {/* Pagination line-bullets at the top */}
          <div className="bff-swiper-pagination" />

          {/* Swiper fills the remaining space */}
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              el: ".bff-swiper-pagination",
              bulletClass: "bff-bullet",
              bulletActiveClass: "bff-bullet--active",
              renderBullet: (_index, className) =>
                `<span class="${className}"></span>`,
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            speed={700}
            className="bff-swiper"
          >
            {milestoneSlides.map((slide) => (
              <SwiperSlide key={slide.id} className="bff-slide">
                <p className="bff-slide-body paragraph-text">{slide.body}</p>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
}
