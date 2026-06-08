import React from "react";
import ServicesSecondSec from "../workComponents/ServicesSecondSec";
import WorkBanner from "../workComponents/WorkBanner";
import bannerimage from "../WorkImages/piedpipper/banner-image.jpeg";
import VideoExpand from "../workComponents/VideoExpand";
import Context from "../workComponents/Context";
import PhoneScreens from "../workComponents/pipeComponents/PhoneScreens";
import UpDownImages from "../workComponents/pipeComponents/UpDownImages";
import UpDownSticky from "../workComponents/pipeComponents/UpDownSticky";
import "../workCss/pipeCss/UpDownImages.css";
import video from "../WorkImages/piedpipper/enlarg.mp4";
import WorkCta from "../workComponents/WorkCta";

export default function PiedPippers() {
  const services = [
    "UI/UX Design",
    "E-commerce",
    "Mobile App Development",
    "Cloud Services",
  ];
  const stats = [
    {
      label: "Language",
      value: "Magento PWA Studio / React / Android / iOS / Laravel / MySQL",
    },
    { label: "Timescale", value: "12 Weeks" },
    { label: "System", value: "Magento" },
  ];

  return (
    <div>
      <WorkBanner
        title="Transforming IKEA’s Food E-commerce Experience"
        src={bannerimage}
        title2="Pied Pippers"
        category2="Food / Retail"
      />
      <ServicesSecondSec
        services={services}
        title="Introducing a Delightfully Crafted Branded E-commerce Store for a Fresh Sales Channel Launch"
        description="Pied Pippers collaborated with our team to develop a high-end webpage for children's essentials. We crafted an exquisite experience that meets global standards."
        stats={stats}
        liveLink="https://example.com"
      />
      <VideoExpand src={video} alt="Expandable Image" />
      <Context
        subheading="Context"
        tittle="Pied Pippers"
        description="Pied Pippers collaborated with our team to develop a high-end webpage for children's essentials. We crafted an exquisite experience that meets global standards."
        description2="Pied Pippers collaborated with our team to develop a high-end webpage for children's essentials. We crafted an exquisite experience that meets global standards."
      />
      <UpDownImages />
      <Context
        subheading="Context"
        tittle="Pied Pippers"
        description="Pied Pippers collaborated with our team to develop a high-end webpage for children's essentials. We crafted an exquisite experience that meets global standards."
        description2="Pied Pippers collaborated with our team to develop a high-end webpage for children's essentials. We crafted an exquisite experience that meets global standards."
      />

      <PhoneScreens />
      <Context
        subheading="Context"
        tittle="Pied Pippers"
        description="Pied Pippers collaborated with our team to develop a high-end webpage for children's essentials. We crafted an exquisite experience that meets global standards."
        description2="Pied Pippers collaborated with our team to develop a high-end webpage for children's essentials. We crafted an exquisite experience that meets global standards."
      />
      <UpDownSticky />
      <WorkCta />
    </div>
  );
}
