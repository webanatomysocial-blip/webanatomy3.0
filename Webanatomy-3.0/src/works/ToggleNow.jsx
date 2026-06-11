import WorkBanner from "../workComponents/WorkBanner";
import ImageExpand from "../workComponents/imageExpand";
import Context from "../workComponents/Context";
import ServicesSecondSec from "../workComponents/ServicesSecondSec";
import FullWidthImage from "../workComponents/FullWidthImage";
import JustHeading from "../workComponents/JustHeading";
import TwoImagesScroll from "../workComponents/ToggleNowComponent/TwoImagesScroll";
import ImageFadeCome from "../workComponents/ToggleNowComponent/ImageFadeCome";
import ThreeImagesScroll from "../workComponents/ToggleNowComponent/ThreeImagesScroll";
import TnowSeo from "../workComponents/ToggleNowComponent/TnowSeo";
import TnowResults from "../workComponents/TnowResults";
import WorkCta from "../workComponents/WorkCta";
import BothImages from "../workComponents/threatsenseaicomponents/BothImages";

// exxpand image
import expand from "../WorkImages/ToggleNow/expand.jpeg";

// cta image
import ctaimage from "../WorkImages/ToggleNow/cta.jpeg";

// banner image
import bannerimage from "../WorkImages/ToggleNow/banner.png";

//  both images
import Tnow1 from "../WorkImages/ToggleNow/bothimages/Tnow-06.png";
import Tnow2 from "../WorkImages/ToggleNow/bothimages/Tnow-07.png";

// video for results
const video = "/videos/work/togglenow/Tnow-08seo.mp4";

// seo image
import img3 from "../WorkImages/ToggleNow/Tnow-SEO.png";

export default function ToggleNow() {
  const services = [
    "UX Strategy",
    "Web Design",
    "SEO",
  ];
  const stats = [
    { label: "Technology", value: "WordPress / Elementor" },
    { label: "Timeline", value: "3 Weeks" },
    { label: "Focus", value: "Enterprise UX · Organic Growth" },
  ];
  return (
    <>
      <WorkBanner
        title="ToggleNow - Making Enterprise Complexity Feel Simple"
        src={bannerimage}
        title2="ToggleNow"
        category2="UX Strategy | Web Design | SEO"
      />
      <ServicesSecondSec
        services={services}
        title="Redesigning the Digital Presence of an Enterprise SAP Platform"
        description="ToggleNow is one of India's leading SAP Digital Innovation Partners, operating across the US, UK, Singapore and India with a portfolio of 12+ enterprise solutions spanning SAP security, GRC compliance and intelligent automation. WebAnatomy was engaged to restructure their digital presence from the ground up, transforming a fragmented, difficult-to-navigate website into a coherent, conversion-focused platform backed by a targeted SEO strategy that put ToggleNow in front of the right buyers."
        stats={stats}
        liveLink="https://togglenow.com"
      />
      <ImageExpand src={expand} alt="Expandable Image" />
      <Context
        subheading="Context"
        tittle="About Client"
        description="ToggleNow operates at the highest level of enterprise technology, delivering SAP security, GRC compliance, access governance and intelligent automation to some of the world's most complex SAP environments. Their product portfolio is deep, their expertise is genuine, and their client base spans four countries."
        description2="A portfolio of 12+ solutions and services had grown faster than the website could keep pace with. Navigation was fragmented. Solution hierarchies were unclear. Enterprise visitors, CTOs, compliance heads, SAP project managers were landing on the site and leaving without ever understanding what ToggleNow could do for them. The digital presence had become the weakest link in an otherwise strong enterprise proposition."
      />

      <JustHeading
        paddingTop={0}
        tittle={
          ' "The challenge wasn\'t just design, it was making 12 complex enterprise solutions feel intuitive to a CTO landing on the site for the first time." '
        }
      />
      <TwoImagesScroll />
      
      <ThreeImagesScroll />

      <TnowSeo
        tittle="Putting ToggleNow in Front of the Buyers Who Matter Most"
        para="Enterprise SAP buyers do not browse, they search for exactly what they need. SAP GRC services. Access governance solutions. Compliance automation. These are high-intent, low-volume search terms with significant commercial value. WebAnatomy built a targeted SEO strategy around ToggleNow's highest-value service lines — restructuring page content around purchase intent, establishing topical authority across their core solution areas and ensuring that every page the right buyer landed on gave them an immediate reason to stay. The results were unambiguous. ToggleNow now ranks on page one of Google for competitive enterprise search terms including SAP GRC Services — directly in front of the decision-makers who need what they offer."
        src={img3}
      />
      <BothImages src1={Tnow1} src2={Tnow2} />
      
      <JustHeading
        paddingTop={100}
        tittle={
          ' "Our website was complex and visitors couldn\'t find what they needed. WebAnatomy understood the problem and they restructured everything, and within months we were ranking for keywords our enterprise clients actually search for." '
        }
        subtitle="— CEO, ToggleNow"
      />
      <TnowResults
        videoSrc={video}
        title="The Result"
        description="Within months of launch, ToggleNow began ranking on page one of Google for competitive enterprise search terms including 'SAP GRC Services.' Organic traffic grew significantly, bounce rates dropped, and the sales team reported a measurable improvement in the quality of inbound leads, prospects who arrived already understanding what ToggleNow did and why it mattered."
        stats={[
          { value: "3x", label: "Organic Traffic Growth" },
          { value: "12+", label: "Keyword Rankings (Page 1)" },
          { value: "40%", label: "Bounce Rate Reduction" },
          { value: "2x", label: "Qualified Inbound Leads" },
        ]}
      />

      <WorkCta
        src={ctaimage}
        heading="Have a complex product that needs clarity?"
        sub="Let's talk about how we can make it work for your users."
        ctaText="Start a Conversation →"
      />
    </>
  );
}
