import WorkBanner from "../workComponents/WorkBanner";
import ServicesSecondSec from "../workComponents/ServicesSecondSec";
import ImageExpand from "../workComponents/imageExpand";
import Context from "../workComponents/Context";
import FullWidthImage from "../workComponents/FullWidthImage";
import JustHeading from "../workComponents/JustHeading";
import UpImageAnimation from "../workComponents/theSaseComponent/UpImageAnimation";
import IconScrollAnimation from "../workComponents/theSaseComponent/IconScrollAnimation";
import FourPhonesAnimation from "../workComponents/theSaseComponent/FourPhonesAnimation";
import WorkCta from "../workComponents/WorkCta";
import LockerHome from "../workComponents/theSaseComponent/LockerHome";
import AboutSection from "../workComponents/theSaseComponent/About-section";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
// banner images
import bannerimage from "../WorkImages/Thesase/banner.jpeg";

export default function TheSase() {
  const lenisRef = useRef(null);
  const leftRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenisRef.current.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenisRef.current.scrollTo(value, { immediate: true });
        }
        return lenisRef.current.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.refresh();

    const leftContainer = leftRef.current;
    const targetSlot = targetRef.current;

    if (leftContainer && targetSlot) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-us-section",
          start: "bottom 30%",
          end: "top 20%",
          scrub: 1,
          markers: true, // Remove later!
        },
      });

      const clone = leftContainer.cloneNode(true);
      clone.style.position = "absolute";
      clone.style.zIndex = "1000";
      document.body.appendChild(clone);

      tl.to(clone, {
        x: () => window.innerWidth * 0.6,
        y: 200,
        scale: 1.1,
        duration: 2,
        ease: "power2.inOut",
      })
        .to(clone, { opacity: 0, duration: 0.5 }, "-=0.5")
        .call(() => {
          leftContainer.style.opacity = "0";
          leftContainer.style.display = "none";
          targetSlot.appendChild(clone);
          clone.style.position = "relative";
          clone.style.zIndex = "1";
          clone.style.opacity = "1";
          clone.classList.add("arrived-container");
          gsap.fromTo(
            clone,
            { scale: 0.8 },
            { scale: 1, duration: 0.5, ease: "back.out(1.7)" },
          );
        });
    }

    return () => {
      lenisRef.current.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
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
      <LockerHome />
      <AboutSection />
      {/* <ImageExpand src={bannerimage} alt="Expandable Image" /> */}
      <Context
        subheading="Context"
        tittle="ToggleNow"
        description="ToggleNow reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        description2="ToggleNow reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
      />
      <FullWidthImage src={bannerimage} alt="Expandable Image" />
      <JustHeading
        tittle={
          ' "The probability that a student will join a university after browsing the college website is high" '
        }
      />
      <UpImageAnimation />
      <Context
        subheading="Context"
        tittle="ToggleNow"
        description="ToggleNow reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        description2="ToggleNow reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
      />
      <IconScrollAnimation />
      <Context
        subheading="Context"
        tittle="ToggleNow"
        description="ToggleNow reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
        description2="ToggleNow reached out to build an all-in-one automation tool for growing teams. We delivered a robust, scalable platform focused on efficiency and ease of use."
      />
      {/* <FourPhonesAnimation /> */}
      <WorkCta />
    </>
  );
}
