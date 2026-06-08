import React from "react";
import ServicesSecondSec from "../workComponents/ServicesSecondSec";
import WorkBanner from "../workComponents/WorkBanner";
import bannerimage from "../WorkImages/threatsenseai/Threat-Home-banner.png";
import ImageExpand from "../workComponents/imageExpand";
import Context from "../workComponents/Context";
import TwoPeople from "../workComponents/threatsenseaicomponents/TwoPeople";
import JustHeading from "../workComponents/JustHeading";
import ThreatsenseaiGalleryScroll from "../workComponents/threatsenseaicomponents/threatsenseaiGalleryScroll";

import ThreatsenseaiStickyImages from "../workComponents/threatsenseaicomponents/threatsenseaiStickyImages";
import ThreatSenseAIIconScroll from "../workComponents/threatsenseaicomponents/ThreatSenseAIIconScroll";
import BothImages from "../workComponents/threatsenseaicomponents/BothImages";
import LeftReversePhone from "../workComponents/threatsenseaicomponents/LeftReversePhone";
import WorkCta from "../workComponents/WorkCta";

import scrollwidth from "../WorkImages/threatsenseai/second.jpeg";

// scroll image

import img1 from "../WorkImages/threatsenseai/scroll-gallery/1.png";
import img2 from "../WorkImages/threatsenseai/scroll-gallery/2.png";
import img3 from "../WorkImages/threatsenseai/scroll-gallery/3.png";
import img4 from "../WorkImages/threatsenseai/scroll-gallery/4.png";
import img5 from "../WorkImages/threatsenseai/scroll-gallery/5.png";
import img6 from "../WorkImages/threatsenseai/scroll-gallery/6.png";

// both images

import both1 from "../WorkImages/threatsenseai/both-left.jpeg";
import both2 from "../WorkImages/threatsenseai/both-right.jpeg";

// cta image
import ctaimage from "../WorkImages/threatsenseai/cta.jpeg";

export default function ThreatSenseAI() {
  const services = [
    "SaaS Development",
    "Business Automation",
    "UI/UX Strategy",
  ];
  const stats = [
    { label: "Technology", value: "React / Node.js / PostgreSQL" },
    { label: "Timeline", value: "16 Weeks" },
    { label: "Focus", value: "Enterprise Scale" },
  ];

  const galleryImages = [img1, img2, img3, img4, img5, img6, img1, img2, img3];

  return (
    <div>
      <WorkBanner
        title="ThreatSenseAI - Transforming Project Management"
        src={bannerimage}
        title2="ThreatSenseAI"
        category2="SaaS / Automation"
      />
      <ServicesSecondSec
        services={services}
        title="Streamlining Project Management with a Custom Enterprise SaaS Solution"
        description="ThreatSenseAI reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        stats={stats}
        liveLink="https://threatsenseai.com"
      />
      <ThreatSenseAIIconScroll />

      <Context
        subheading="Context"
        tittle="ThreatSenseAI"
        description="ThreatSenseAI reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        description2="ThreatSenseAI reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
      />

      <ImageExpand src={scrollwidth} alt="Expandable Image" />
      {/* <TwoPeople /> */}
      <JustHeading
        tittle={
          ' "The probability that a student will join a university after browsing the college website is high" '
        }
      />
      <ThreatsenseaiGalleryScroll images={galleryImages} />
      <Context
        subheading="Context"
        tittle="ThreatSenseAI"
        description="ThreatSenseAI reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        description2="ThreatSenseAI reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        paddingBottom="0px"
      />
      <ThreatsenseaiStickyImages />

      <Context
        subheading="Context"
        tittle="ThreatSenseAI"
        description="ThreatSenseAI reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        description2="ThreatSenseAI reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
      />
      <BothImages src1={both1} src2={both2} />
      <Context
        subheading="Context"
        tittle="ThreatSenseAI"
        description="ThreatSenseAI reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        description2="ThreatSenseAI reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        paddingBottom="0px"
      />
      {/* <LeftReversePhone /> */}
      <WorkCta
        text="On a COVID morning, with barely enough groceries to whip up a meal, every Mrs. Helpless was completely clueless looking at the hungry, wailing babies, and this scenario was increasing in numbers."
        src={ctaimage}
      />
    </div>
  );
}
