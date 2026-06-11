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
import Lenis from "lenis";
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
    "UI/UX Design",
    "Web Development",
    "Motion & Animation",
    "3d Renders",
  ];
  const stats = [
    { label: "Technology", value: "React.js" },
    { label: "Timeline", value: "5 Weeks" },
    { label: "Focus", value: "Product Storytelling · Motion" },
  ];
  return (
    <>
      <WorkBanner
        title="SASE - Turning Product Complexity Into an Experience Worth Exploring"
        src={bannerimage}
        title2="SASE"
        category2="UI/UX Design | Web Development | Motion & Animation | 3d Renders"
      />
      <ServicesSecondSec
        services={services}
        title="Transforming a Smart Locker System Into a World-Class Digital Product Experience"
        description="SASE is a sophisticated smart locker solution built for modern properties and enterprises. With a product this technically nuanced, the digital experience had to do more than inform, it had to demonstrate. WebAnatomy designed and engineered a scroll-driven, animation-rich website in React that unfolds the product story with the precision and elegance the brand deserves."
        stats={stats}
        liveLink="#"
      />
      <LockerHome />
      <AboutSection />
      
      <Context
        subheading="Context"
        tittle="SASE"
        description="SASE redefines how modern properties and enterprises manage deliveries, control access, and secure their logistics infrastructure through intelligent smart locker systems. It is a product built at the intersection of hardware precision and software intelligence, and it demanded a digital presence that could communicate that depth with equal sophistication."
        description2="The brief was clear and ambitious. Build a website that does not just describe the product but demonstrates it. A website where every scroll reveals a new dimension of the product, where motion and interaction replace paragraphs of explanation, and where the visitor arrives at the end of the page with complete clarity and confidence. WebAnatomy took that brief and built an experience that sets a new benchmark for how hardware-software products present themselves online."
      />
      <FullWidthImage src={bannerimage} alt="Expandable Image" />
      <JustHeading
        tittle={
          ' "The most powerful product experiences don\'t ask visitors to imagine the product — they put it right in front of them. That was the standard we held ourselves to on every decision in this project." '
        }
      />
      <UpImageAnimation />
      <Context
        subheading="Design"
        tittle="Designing for Clarity at Every Scroll"
        description="A product of SASE's complexity demands a design language that commands trust from the first frame. Our design team built a visual system that is architectural in its precision, clean lines, considered typography, and a spatial hierarchy that guides the eye without effort."
        description2="Drawing from the best examples of product storytelling in the world, we structured the page as a journey. Each section was designed to answer the visitor's next question before they consciously form it. The result is an experience that feels effortless, and effortless experiences are the hardest ones to build."
      />
      <IconScrollAnimation />
      <Context
        subheading="Development"
        tittle="Engineering a Performance-First Scroll Experience"
        description="Delivering a rich, scroll-driven animation experience in React without compromising performance is a precise engineering challenge. Every animation was tied to scroll position with meticulous attention to timing, transitions and device responsiveness."
        description2="The component architecture was built for scale, enabling the SASE team to extend the platform as their product line evolves without revisiting the engineering foundation. The result is a website that is as technically sound as the product it represents."
      />
      
      <JustHeading
        paddingTop={100}
        tittle={
          ' "WebAnatomy brought strategic thinking to the table from day one. They built our most powerful sales asset." '
        }
        subtitle="— Keerthana, Founder, SASE"
      />

      <Context
        subheading="The Result"
        tittle="The Result"
        description="SASE launched with a digital experience that positions them as a premium, enterprise-ready product in the smart logistics space."
        description2="The scroll-driven website consistently drives significantly stronger engagement metrics, reduces the sales education cycle, and converts informed visitors into meaningful business conversations."
        paddingBottom="0px"
      />

      <WorkCta
        heading="Let's Build Something Remarkable"
        sub="Share your vision with us. We will show you how to bring it to life."
        ctaText="Start a Project →"
      />
    </>
  );
}
