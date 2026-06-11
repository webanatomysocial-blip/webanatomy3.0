import ServiceBanner from "@/components/ServiceComponents/ServiceBanner";
import ServiceAccordionList from "@/components/ServiceComponents/ServiceAccordionList";
import ClientsRecognition from "@/components/AboutComponents/ClientsRecognition";
import GloballyConnected from "@/components/AboutComponents/GloballyConnected";
import MultiImagesCTA from "@/components/MultiImagesCTA";

export default function AboutPage() {
    return (
        <>
           <ServiceBanner/>
           <ServiceAccordionList/>
            <ClientsRecognition scrollOverlayColor="#f5f5f3" tag="✦ Clients" title="Businesses That Trust WebAnatomy to Get It Right." />
           <GloballyConnected />
            <MultiImagesCTA />
        </>
    );
}

