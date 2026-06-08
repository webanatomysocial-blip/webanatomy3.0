import img1 from "../../WorkImages/Thesase/frame.webp";
import img2 from "../../WorkImages/Thesase/card1.webp";
import "../../workCss/theSaseCss/FourPhonesAnimation.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useLayoutEffect } from "react";
export default function FourPhonesAnimation() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".four-phones-animation-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          // markers: true,
        },
      });
      tl.to(".phone-1", {
        left: "10%",
      })
        .to(
          ".phone-2",
          {
            left: "30%",
          },
          "<",
        )
        .to(
          ".phone-3",
          {
            left: "50%",
          },
          "<",
        )
        .to(
          ".phone-4",
          {
            left: "70%",
          },
          "<",
        )
        .to(
          ".phone-1",
          {
            opacity: 0,
            scale: 0.8,
          },
          ">",
        )
        .to(
          ".phone-2",
          {
            opacity: 0,
            scale: 0.8,
          },
          "<",
        )
        .to(
          ".phone-3",
          {
            left: "45%",
          },
          "<",
        )
        .to(
          ".phone-4",
          {
            opacity: 0,
            scale: 0.8,
          },
          "<",
        )
        .fromTo(
          ".phone-overlay",
          {
            y: 50,
            opacity: 0,
            stagger: 0.2,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
          },
        );
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className="four-phones-animation-wrapper">
      <div className="four-phones-animation-container">
        <div className="FourPhonesAnimation-phone-img-container phone-1">
          <img src={img1} alt="" className="FourPhonesAnimation-phone-img" />
        </div>
        <div className="FourPhonesAnimation-phone-img-container phone-2">
          <img src={img1} alt="" className="FourPhonesAnimation-phone-img" />
        </div>
        <div className="FourPhonesAnimation-phone-img-container phone-3">
          <img src={img1} alt="" className="FourPhonesAnimation-phone-img" />
        </div>
        <div className="FourPhonesAnimation-phone-img-container phone-4">
          <img src={img1} alt="" className="FourPhonesAnimation-phone-img" />
        </div>
        <img
          src={img2}
          alt=""
          className="FourPhonesAnimation-phone-img-overlay1 phone-overlay"
        />
        <img
          src={img2}
          alt=""
          className="FourPhonesAnimation-phone-img-overlay2 phone-overlay"
        />
        <img
          src={img2}
          alt=""
          className="FourPhonesAnimation-phone-img-overlay3 phone-overlay"
        />
        <img
          src={img2}
          alt=""
          className="FourPhonesAnimation-phone-img-overlay4 phone-overlay"
        />
      </div>
    </section>
  );
}
