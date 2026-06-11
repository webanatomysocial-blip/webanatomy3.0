import HomeBanner from "@/components/HomeComponents/HomeBanner";
import VideoBanner from "@/components/HomeComponents/VideoBanner";
import TextFadeSection from "@/components/HomeComponents/TextFadeSection";
import OurProcess from "@/components/HomeComponents/OurProcess";
import OurPerspective from "@/components/HomeComponents/OurPerspective";
import FeaturesSection from "@/components/HomeComponents/FeaturesSection";
import WhatWeDo from "@/components/HomeComponents/WhatWeDo";
import IntegrationsSection from "@/components/HomeComponents/IntegrationsSection";
import ClientTestimonials from "@/components/HomeComponents/ClientTestimonials";
import OurServices from "@/components/OurServices";
import CaseStudyCard from "@/components/CaseStudyCard";
import MultiImagesCTA from "@/components/MultiImagesCTA";
import { worksMetadata } from "@/works/metadata";
import { PiSparkleFill } from "react-icons/pi";
import "@/css/CaseStudiesSection.css";

export default function Home() {
  // Reverse the array to get descending order and take only the first 4
  const recentWorks = [...worksMetadata].reverse().slice(0, 4);

  return (
    <>
      <HomeBanner />
      <VideoBanner />
      <TextFadeSection />
    
      <section className="case-studies-section">
        <div className="case-studies-header">
          <h2 className="head-text" >Case Studies</h2>
          <div className="case-studies-highlights">
             <PiSparkleFill size={16} color="#000" /> Highlights
          </div>
        </div>
        <div className="case-studies-grid">
          {recentWorks.map((work) => (
            <CaseStudyCard 
              key={work.id} 
              study={{
                title: work.title,
                subtitle: work.category,
                image: work.image,
                imageAlt: work.title,
                id: work.id
              }} 
            />
          ))}
        </div>
      </section>
      <OurServices />

      <OurProcess />
      <OurPerspective />
      <FeaturesSection />
      <WhatWeDo />
      <IntegrationsSection />
      <ClientTestimonials />
      
      <MultiImagesCTA />
    </>
  );
}

