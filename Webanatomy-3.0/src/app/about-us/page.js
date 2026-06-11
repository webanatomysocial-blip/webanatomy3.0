import AboutBanner from "@/components/AboutComponents/AboutBanner";
import WhoWeAre from "@/components/AboutComponents/WhoWeAre";
import KnowUs from "@/components/AboutComponents/KnowUs";
import BuiltForFocus from "@/components/AboutComponents/BuiltForFocus";
import WhatWeCapture from "@/components/AboutComponents/WhatWeCapture";
import ClientsRecognition from "@/components/AboutComponents/ClientsRecognition";
import FoundersVision from "@/components/AboutComponents/FoundersVision";
import MeetTheTeam from "@/components/AboutComponents/MeetTheTeam";
import FaqSection from "@/components/AboutComponents/FaqSection";
import GloballyConnected from "@/components/AboutComponents/GloballyConnected";
import MultiImagesCTA from "@/components/MultiImagesCTA";

import "@/css/AboutComponentsCss/AboutBanner.css";
import "@/css/AboutComponentsCss/WhoWeAre.css";
import "@/css/AboutComponentsCss/KnowUs.css";
import "@/css/AboutComponentsCss/BuiltForFocus.css";
import "@/css/AboutComponentsCss/WhatWeCapture.css";
import "@/css/AboutComponentsCss/ClientsRecognition.css";
import "@/css/AboutComponentsCss/FounderVision.css";
import "@/css/AboutComponentsCss/MeetTheTeam.css";
import "@/css/AboutComponentsCss/FaqSection.css";
import "@/css/AboutComponentsCss/GloballyConnected.css";

export default function AboutPage() {
    return (
        <>
            <AboutBanner />
            <WhoWeAre />
            <KnowUs />
            <BuiltForFocus />
            <WhatWeCapture />
            <ClientsRecognition 
              tag="✦ Clients & Recognition" 
              title="Businesses That Trust WebAnatomy to Get It Right." 
              statNum="100+" 
            />
            <FoundersVision />
            {/* <MeetTheTeam /> */}
            <FaqSection />
            <GloballyConnected />
            <MultiImagesCTA />
        </>
    );
}

