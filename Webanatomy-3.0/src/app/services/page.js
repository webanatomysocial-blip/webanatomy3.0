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
            <ClientsRecognition scrollOverlayColor="#f5f5f3" />
           <GloballyConnected />
            <MultiImagesCTA />
        </>
    );
}

