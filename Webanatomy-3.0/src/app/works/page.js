"use client";

import React from "react";
import Banner from "@/components/Banner";
import CaseStudyCard from "@/components/CaseStudyCard";
import MultiImagesCTA from "@/components/MultiImagesCTA";
import { worksMetadata } from "@/works/metadata";
import bannerImg from "@/assets/images/about/banner.avif";
import { PiSparkleFill } from "react-icons/pi";
import "@/css/CaseStudiesSection.css";
import GloballyConnected from "@/components/AboutComponents/GloballyConnected";

export default function WorksPage() {
  return (
    <>
      {/* Reusable Banner Component with props */}
      <Banner
        title={
          <>
            Explore Our
            <br />
            Latest Works
          </>
        }
        desc="We craft high-performing websites, custom digital systems, and memorable brand identity designs to help businesses grow with confidence."
        image={bannerImg}
        buttons={[
          { text: "Book a Free Call" }
        ]}
      />

      {/* Case Studies Listing Grid */}
      <section className="case-studies-section">
        <div className="case-studies-header">
          <h2 className="head-text">Portfolio</h2>
          <div className="case-studies-highlights">
            <PiSparkleFill size={16} color="#000" /> All Projects
          </div>
        </div>
        <div className="case-studies-grid">
          {worksMetadata.map((work) => (
            <CaseStudyCard
              key={work.id}
              study={{
                title: work.title,
                subtitle: work.category,
                image: work.image,
                imageAlt: work.title,
                id: work.id // enables click navigations if setup in card
              }}
            />
          ))}
        </div>
      </section>
  <GloballyConnected/>
      <MultiImagesCTA />
    </>
  );
}
