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
    "Brand Identity",
    "UI/UX Design",
    "Web Development",
  ];
  const stats = [
    { label: "Technology", value: "Next.js / Node.js" },
    { label: "Timeline", value: "4 Weeks" },
    { label: "Focus", value: "Enterprise Brand · SaaS Web Platform" },
  ];

  const galleryImages = [img1, img2, img3, img4, img5, img6, img1, img2, img3];

  return (
    <div>
      <WorkBanner
        title="ThreatSenseAI - Defining the Digital Identity of a Next-Generation Cybersecurity Platform"
        src={bannerimage}
        title2="ThreatSenseAI"
        category2="Brand Identity | UI/UX Design | Web Development"
      />
      <ServicesSecondSec
        services={services}
        title="Building a Brand and Digital Presence Worthy of the Enterprise Security Market"
        description="ThreatSenseAI is an AI-powered cybersecurity platform purpose-built for the enterprise, detecting insider threats, preventing data leaks and ensuring compliance across systems, browsers and AI tools in real time. WebAnatomy was entrusted with building its complete brand identity and digital presence from the ground up. The mandate was to position ThreatSenseAI as a credible, enterprise-grade player from the moment it entered the market."
        stats={stats}
        liveLink="https://threatsenseai.com"
      />
      <ThreatSenseAIIconScroll />

      <Context
        subheading="Branding"
        tittle="A Brand Identity Built With the Precision of the Product Itself"
        description="The ThreatSenseAI identity began with a single strategic question. What does interception look like? The logomark is a geometric form with a deliberate cut through its structure. It visualises a threat path being disrupted, a precise diagram of what the product does. The electric violet was a conscious departure from the predictable blues and greys that define enterprise security branding."
        description2="Every element of the visual system, typography, colour, architecture, iconography and motion language was designed to communicate one thing with absolute clarity: this is enterprise-grade technology, built by people who think at that level."
      />

      <ImageExpand src={scrollwidth} alt="Expandable Image" />
      
      <JustHeading
        tittle={
          ' "Cybersecurity buyers don\'t just buy technology. They buy confidence. Every design decision had to deliver that within the first 30 seconds." '
        }
      />
      <ThreatsenseaiGalleryScroll images={galleryImages} />
      
      <Context
        subheading="Development"
        tittle="Engineered to Perform Under the Scrutiny of Enterprise Buyers"
        description="ThreatSenseAI's website was built on a video-first philosophy, drawing from the design language of the world's most respected SaaS products, where the product experience speaks louder than copy ever could. Next.js and Node.js with server-side rendering, the platform was engineered for speed, scalability and search performance."
        description2="Full-screen video, fluid interactions and a zero-compromise approach to load time across all devices. In a market where a technically poor website sends the wrong signal before a single word is read, engineering quality was as integral to the brand as the visual design itself."
        paddingBottom="0px"
      />
      <ThreatsenseaiStickyImages />

      <JustHeading
        paddingTop={100}
        tittle={
          ' "WebAnatomy understood the weight of what we were building and the market we were entering. The brand and website they delivered became our strongest asset in every enterprise conversation from day one." '
        }
        subtitle="— Founder, ThreatSenseAI"
      />
      <BothImages src1={both1} src2={both2} />
      
      <Context
        subheading="The Result"
        tittle="The Result"
        description="ThreatSenseAI launched with a brand identity and digital presence that positioned them alongside established enterprise security players, commanding immediate credibility in a market that gives no second chances."
        description2="The video-first experience drives significantly stronger engagement than category benchmarks, and the visual identity has scaled seamlessly across product UI, investor materials and partner communications. A brand system built not just for launch, but for the long term."
        paddingBottom="0px"
      />
      
      <WorkCta
        src={ctaimage}
        heading="Let's Build Something Remarkable"
        sub="Tell us about your vision. We'll tell you how to get there."
        ctaText="Get in Touch →"
      />
    </div>
  );
}
