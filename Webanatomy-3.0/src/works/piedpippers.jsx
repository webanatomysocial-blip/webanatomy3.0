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
const video = "/videos/work/piedpipper/enlarg.mp4";
import WorkCta from "../workComponents/WorkCta";

export default function PiedPippers() {
  const services = [
    "UI/UX Design",
    "Web Development",
    "Application Development",
    "Cloud Services",
  ];
  const stats = [
    {
      label: "Technology",
      value: "PHP | React | Android | iOS | MySQL",
    },
    { label: "Timeline", value: "12 Weeks" },
    { label: "Focus", value: "Multi-Role Web Application | Biometric Integration | E-commerce" },
  ];

  return (
    <div>
      <WorkBanner
        title="The Pied Piper"
        src={bannerimage}
        title2="The Pied Piper"
        category2="Building a Complete Digital Ecosystem for Hyderabad's Most Ambitious Kids Activity Club"
      />
      <ServicesSecondSec
        services={services}
        title="One Platform, Three User Roles and a Biometric Payment System"
        description="The Pied Piper is a premium kids activity club in Hyderabad where children develop real skills in music, dance, art, baking and public speaking. Running an operation of this ambition requires more than a well-designed website; it requires a complete digital infrastructure. WebAnatomy designed and built both the public-facing marketing website and a full web application powering every function of the business, from parent enrolment to teacher management to a UV eye scan cafeteria payment system, and delivered the entire platform in twelve weeks."
        stats={stats}
        liveLink="#"
      />
      <VideoExpand src={video} alt="Expandable Image" />
      <Context
        subheading="Context"
        tittle="Pied Piper"
        description="The Pied Piper is not a typical after-school club. It is a structured, premium activity centre where children explore and develop real skills and where parents expect the same level of polish in the experience as they see in the programming itself. Managing enrolments, sessions, attendance, payments and cafeteria operations manually was no longer viable at the scale they were growing."
        description2="The brief that came to WebAnatomy was one of the most technically layered we have worked on. Build a marketing website that reflects the brand's warmth and premium positioning. Then build an entire operational platform underneath it one that serves three completely different types of users, integrates with biometric hardware, handles real-time data across every function, and does all of it within a single cohesive product."
      />
      <UpDownImages />
      <Context
        subheading="The Application"
        tittle="One Platform Built for Three Completely Different Users"
        description="The web application was architected around three distinct user journeys, each purpose-built for the person using it. Parents receive a seamless digital experience from discovery through to enrolment browsing activities, booking sessions, tracking their child's attendance and managing their wallet entirely online, without calls or paperwork of any kind."
        description2="Teachers are served through a dedicated portal designed around how they actually work, giving them full control over class management, session scheduling and student progress tracking in a single place. Administrators, meanwhile, have complete operational oversight of both the activity centre and cafeteria through a unified dashboard that brings every function of the business into one coherent view. Three portals, three distinct experiences, one unified system, built so that each user only ever encounters exactly what they need."
      />

      <PhoneScreens />
      <Context
        subheading="The Biometric Payment System"
        tittle="Replacing Cash With a UV Eye Scan Wallet System"
        description="The cafeteria payment system was among the most technically distinctive elements of the entire build, and one of the most considered in terms of user experience. Rather than children handling cash at the point of purchase, each student is identified through a UV eye scan, and the payment is deducted automatically from a pre-loaded parent wallet, with the transaction logged and visible to parents in real time."
        description2="Integrating biometric hardware into a live web application required precise coordination across identity verification, wallet management, real-time synchronisation and parent notifications, all within a single seamless interaction. The result eliminated cash handling from the centre entirely, gave parents complete visibility and control over their child's spending, and made every cafeteria transaction faster and more reliable than anything a cash-based system could offer."
      />
      <UpDownSticky />

      <JustHeading
        paddingTop={100}
        tittle={
          ' "WebAnatomy took one of the most complex briefs we could have presented and delivered a platform that our parents, teachers and operations team rely on every single day. The biometric payment system alone transformed how we run the centre." '
        }
        subtitle="— Founder, The Pied Piper"
      />

      <Context
        subheading="The Result"
        tittle="A Digital Platform That Elevated Every Part of the Business"
        description="The Pied Piper launched with a digital ecosystem that replaced manual operations entirely and set a new standard for how a premium activity centre presents and manages itself online."
        description2="Parents enrol and manage everything through a single platform, teachers run their classes with complete visibility over their students, administrators oversee the full operation through one dashboard, and every cafeteria transaction is processed biometrically accurately, instantly and without cash. The platform did not simply digitise an existing operation. It gave The Pied Piper the infrastructure to grow with confidence."
        paddingBottom="0px"
      />

      <WorkCta
        heading="Ready to Build Something That Sets the Standard?"
        sub="Share your brief with us. Our team will come back with a perspective worth hearing."
        ctaText="Share Your Brief →"
      />
    </div>
  );
}
