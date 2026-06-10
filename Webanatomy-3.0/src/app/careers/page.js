import CareersBanner from "@/components/CareersComponents/CareersBanner";
import CompetitivePros from "@/components/CareersComponents/CompetitivePros";
import CareersCarousel from "@/components/CareersComponents/CareersCarousel";
import OpenPositions from "@/components/CareersComponents/OpenPositions";
import GloballyConnected from "@/components/AboutComponents/GloballyConnected";
import MultiImagesCTA from "@/components/MultiImagesCTA";

export default function CareersPage() {
    return (
        <>
            <CareersBanner />
            <CompetitivePros />
            <OpenPositions />
            <CareersCarousel />
            <MultiImagesCTA />
        </>
    );
}

