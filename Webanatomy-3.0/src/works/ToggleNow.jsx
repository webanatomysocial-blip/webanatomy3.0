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
import video from "../workVideos/togglenow/Tnow-08seo.mp4";

// seo image
import img3 from "../WorkImages/ToggleNow/Tnow-SEO.png";

export default function ToggleNow() {
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
  return (
    <>
      <WorkBanner
        title="ToggleNow - Transforming Project Management"
        src={bannerimage}
        title2="ToggleNow"
        category2="SaaS / Automation"
      />
      <ServicesSecondSec
        services={services}
        title="Streamlining Project Management with a Custom Enterprise SaaS Solution"
        description="ToggleNow reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        stats={stats}
        liveLink="https://togglenow.com"
      />
      <ImageExpand src={expand} alt="Expandable Image" />
      <Context
        subheading="Context"
        tittle="ToggleNow"
        description="ToggleNow reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        description2="ToggleNow reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
      />

      <JustHeading
        paddingTop={0}
        tittle={
          ' "The probability that a student will join a university after browsing the college website is high" '
        }
      />
      <TwoImagesScroll />
      <Context
        subheading="Context"
        tittle="ToggleNow"
        description="ToggleNow reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        description2="ToggleNow reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
      />
      {/* <ImageFadeCome /> */}
      <ThreeImagesScroll />

      <TnowSeo
        tittle="SEO"
        para="The objective of Search Engine Optimisation was to target relevant keywords and bring in traffic which has the potential to be converted into sales. We targeted keywords with purchase intent, to make sure the traffic coming is relevant and contributes to the organic sales."
        src={img3}
      />
      <BothImages src1={Tnow1} src2={Tnow2} />
      <JustHeading
        paddingTop={100}
        tittle={
          ' "The probability that a student will join a university after browsing the college website is high" '
        }
      />
      <TnowResults
        videoSrc={video}
        title="The Result"
        description="Within a span of 12 months, we were able to achieve 33X ROAS through various digital campaigns that helped trigger brand outreach. Nevertheless, the brand also saw a 10x increase in organic traffic, which witnessed a surge in user engagement and business credibility. With a conversion-focused approach, we helped Dtale refine targeting for more qualified leads."
        stats={[
          { value: "10x", label: "Increase in Organic Traffic" },
          { value: "33x", label: "ROAS" },
          { value: "3%", label: "Ad Spend" },
          { value: "3x", label: "Sales Achieved" },
        ]}
      />

      <WorkCta src={ctaimage} text={"toggle now"} />
    </>
  );
}
