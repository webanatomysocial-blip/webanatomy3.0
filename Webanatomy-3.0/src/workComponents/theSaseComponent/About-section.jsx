import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../workCss/theSaseCss/About-us-section.css";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useEffect(() => {
    /* ---------- PRE-LOAD + CANVAS ---------- */
    let isMounted = true;
    let canvas = null;
    let ctx = null;
    const frames = [];

    const START_FRAME = 350;
    const END_FRAME = 210;
    const TOTAL_FRAMES = START_FRAME - END_FRAME + 1;

    const FRAME_FORMAT = (i) =>
      new URL(
        `../../WorkImages/Thesase/reverse-nobackground-locker/locker_01_trans_${String(i).padStart(4, "0")}.webp`,
        import.meta.url,
      ).href;

    // THIS IS THE KEY: Force canvas to be FULL VIEWPORT HEIGHT & WIDTH
    const updateCanvasSize = () => {
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      // Make canvas fill its container completely
      canvas.style.width = "100%";
      canvas.style.height = "100%";
    };

    const drawFrame = (index) => {
      if (!ctx || !canvas || !frames[index]?.complete) return;

      const img = frames[index];

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // CONTAIN + CENTER (perfect for transparent PNGs)
      const scale = Math.min(
        canvas.width / img.naturalWidth,
        canvas.height / img.naturalHeight,
      );

      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      const x = (canvas.width - w) / 2;
      const y = (canvas.height - h) / 2;

      ctx.drawImage(img, x, y, w, h);
    };

    // PRELOAD
    for (let i = START_FRAME; i >= END_FRAME; i--) {
      const img = new Image();
      img.src = FRAME_FORMAT(i);
      const frameIndex = START_FRAME - i;
      frames[frameIndex] = img;

      img.onload = () => {
        if (isMounted && frameIndex === 0) {
          updateCanvasSize();
          drawFrame(0);
        }
      };
    }

    // SETUP CANVAS
    canvas = document.querySelector(".middle-about-canvas");
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    updateCanvasSize();

    // RESIZE HANDLER
    const handleResize = () => {
      updateCanvasSize();
      drawFrame(
        Math.floor(
          ScrollTrigger.getById("middle-container")?.progress *
            (TOTAL_FRAMES - 1) || 0,
        ),
      );
    };
    window.addEventListener("resize", handleResize);

    /* ---------- MIDDLE CONTAINER (canvas) ---------- */
    const middleTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-us-section",
        start: "top bottom",
        end: "+=1500",
        scrub: 1,
        id: "middle-container",
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.floor(progress * (TOTAL_FRAMES - 1));
          drawFrame(index);
        },
      },
    });

    // Your “simpler” animation
    /* 0 → 1 : fade-in */
    middleTL.to(".middle-about-container", {
      opacity: 1,
      zIndex: 1000,
      ease: "none",
      duration: 0.15,
      scale: 1,
    });

    /* 1 → 2 : grow + move + scale */
    middleTL.to(
      ".middle-about-container",
      {
        // width: "100%",
        left: "25%",
        top: "14%",
        scale: 0.65,
        ease: "none",
        duration: 0.45,
        zIndex: 100000,
      },
      "+=0",
    );

    /* 2 → 3 : slide a little higher */
    middleTL.to(
      ".middle-about-container",
      {
        top: "16%",
        ease: "none",
        duration: 0.15,
        zIndex: 100000,
      },
      ">",
    );

    /* 3 → 4 : keep it fully visible for a moment */
    middleTL.to(
      ".middle-about-container",
      {
        opacity: 1,
        ease: "none",
        duration: 0.15,
      },
      "+=0.1",
    );

    /* 4 → 5 : fade-out when .animation-section-2 enters */
    middleTL
      .to(
        ".middle-about-container",
        {
          opacity: 0,
          ease: "none",
          duration: 0.05,
          zIndex: 10,
        },
        "+=0.2",
      )
      .to(
        ".left-about-container",
        {
          left: "65%",
          opacity: 0,
          display: "none",
        },
        "<",
      );

    // Animation for .outer-lock
    gsap.to(".outer-lock", {
      rotate: "180deg",
      ease: "none",
      scrollTrigger: {
        trigger: ".about-us-section",
        start: "top bottom",
        end: "top 20%",
        scrub: 1,
      },
    });

    // Animation for .left-about-container-outer
    gsap.to(".about-us-section", {
      background: "#FFF5EA",
      duration: 0.1,
      scrollTrigger: {
        trigger: ".about-us-section",
        start: "top 60%",
        end: "top top",
        // scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    // Animation for .left-about-container
    gsap.to(".left-about-container", {
      top: "20%",
      scrollTrigger: {
        trigger: ".about-us-section",
        start: "top 50%",
        end: "top top",
        scrub: 1,
      },
    });

    // Exit animation for .left-about-container (move right and fade out)
    // gsap.to(".left-about-container", {
    //   left: "65%",
    //   opacity: 0,
    //   display: "none",
    //   scrollTrigger: {
    //     trigger: ".about-us-section",
    //     start: "top -30%",
    //     end: "top -60%",
    //     scrub: 1,
    //   },
    // });

    /* ---------- CLEANUP ---------- */
    return () => {
      isMounted = false;
      window.removeEventListener("resize", updateCanvasSize);
      middleTL.kill();
    };
  }, []);

  return (
    <div className="only-windows">
      {/* ---------- MIDDLE CONTAINER (canvas) ---------- */}
      <div className="middle-about-container">
        <canvas className="middle-about-canvas"></canvas>
      </div>

      {/* LEFT PANELS */}
      <div className="left-about-container">
        <p className="para-text-white">
          SASE’s privacy lock secures every transaction with advanced encryption
          and authentication.
        </p>
        <div className="left-about-svg-container">
          <svg
            className="outer-lock"
            width="60"
            height="60"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.6211 25.1208C44.8997 24.8422 45.1207 24.5116 45.2715 24.1476C45.4223 23.7836 45.4999 23.3936 45.4999 22.9996C45.4999 22.6056 45.4223 22.2156 45.2715 21.8516C45.1207 21.4877 44.8997 21.157 44.6211 20.8785L35.9408 12.1986L40.2917 7.90435C40.9333 8.06336 41.6096 8.00616 42.2154 7.74163C42.8213 7.4771 43.3229 7.02003 43.6424 6.44132C43.962 5.86261 44.0817 5.19461 43.9829 4.54096C43.884 3.8873 43.5723 3.28453 43.0959 2.82614C42.6195 2.36776 42.0052 2.07939 41.3483 2.00578C40.6913 1.93216 40.0284 2.07741 39.4624 2.419C38.8964 2.76058 38.4589 3.2794 38.2179 3.89498C37.9769 4.51055 37.9457 5.18847 38.1293 5.82355L33.8193 10.0768L25.1211 1.37845C24.8426 1.09984 24.5119 0.878826 24.148 0.728035C23.784 0.577245 23.3939 0.499634 23 0.499634C22.606 0.499634 22.2159 0.577245 21.852 0.728035C21.488 0.878826 21.1573 1.09984 20.8788 1.37845L12.1989 10.0585L7.90517 5.70715C8.06409 5.06537 8.00676 4.38907 7.74208 3.7832C7.4774 3.17732 7.02016 2.67572 6.44131 2.35623C5.86246 2.03674 5.19435 1.91722 4.54063 2.0162C3.88691 2.11518 3.28413 2.42714 2.82581 2.90367C2.36749 3.38021 2.07924 3.99468 2.00579 4.65175C1.93234 5.30883 2.0778 5.97178 2.41959 6.53775C2.76137 7.10372 3.28039 7.54108 3.89612 7.78196C4.51185 8.02284 5.18986 8.05379 5.82497 7.87L10.0775 12.1803L1.37882 20.8785C1.10021 21.157 0.879192 21.4877 0.728402 21.8516C0.577612 22.2156 0.5 22.6056 0.5 22.9996C0.5 23.3936 0.577612 23.7836 0.728402 24.1476C0.879192 24.5116 1.10021 24.8422 1.37882 25.1208L10.0772 33.819L5.82497 38.1292C5.19129 37.9468 4.51513 37.9784 3.90128 38.2193C3.28743 38.4602 2.77018 38.8968 2.42969 39.4615C2.08921 40.0263 1.94451 40.6875 2.01803 41.3428C2.09154 41.9981 2.37916 42.6109 2.8363 43.0861C3.29345 43.5614 3.89459 43.8726 4.54655 43.9714C5.19852 44.0703 5.86489 43.9514 6.44239 43.6331C7.0199 43.3148 7.47627 42.8148 7.74079 42.2108C8.00531 41.6068 8.06319 40.9323 7.90547 40.292L12.1992 35.9407L20.8791 44.6208C21.1576 44.8994 21.4883 45.1204 21.8523 45.2712C22.2162 45.422 22.6063 45.4996 23.0003 45.4996C23.3942 45.4996 23.7843 45.422 24.1483 45.2712C24.5122 45.1204 24.8429 44.8994 25.1214 44.6208L33.8196 35.9224L38.1296 40.1757C37.9471 40.8095 37.9789 41.4858 38.2198 42.0997C38.4608 42.7136 38.8976 43.231 39.4625 43.5714C40.0273 43.9119 40.6888 44.0566 41.3442 43.9829C41.9996 43.9093 42.6124 43.6215 43.0877 43.1642C43.5629 42.7069 43.8741 42.1056 43.9728 41.4535C44.0716 40.8014 43.9525 40.1349 43.634 39.5573C43.3155 38.9798 42.8153 38.5235 42.2111 38.259C41.6069 37.9946 40.9323 37.9369 40.292 38.0949L35.9411 33.8007L44.6211 25.1208ZM23 42.4996L3.49997 22.9996L23 3.4996L42.5 22.9996L23 42.4996Z"
              fill="#F9DF37"
            />
          </svg>
          <svg
            className="inner-lock"
            width="16"
            height="23"
            viewBox="0 0 16 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 8.99963H5V5.99963C5 5.20398 5.31607 4.44092 5.87868 3.87831C6.44129 3.3157 7.20435 2.99963 8 2.99963C8.79565 2.99963 9.55871 3.3157 10.1213 3.87831C10.6839 4.44092 11 5.20398 11 5.99963H14C14 4.40833 13.3679 2.88221 12.2426 1.75699C11.1174 0.631775 9.5913 -0.000366211 8 -0.000366211C6.4087 -0.000366211 4.88258 0.631775 3.75736 1.75699C2.63214 2.88221 2 4.40833 2 5.99963V9.41708C1.54549 9.67825 1.16765 10.0543 0.904376 10.5076C0.641099 10.9609 0.501645 11.4754 0.5 11.9996V19.4996C0.500913 20.295 0.817277 21.0575 1.37969 21.6199C1.9421 22.1824 2.70463 22.4987 3.5 22.4996H12.5C13.2954 22.4987 14.0579 22.1824 14.6203 21.6199C15.1827 21.0575 15.4991 20.295 15.5 19.4996V11.9996C15.4991 11.2043 15.1827 10.4417 14.6203 9.87932C14.0579 9.31691 13.2954 9.00055 12.5 8.99963ZM12.5 19.4996H3.5V11.9996H12.5V19.4996Z"
              fill="#F9DF37"
            />
          </svg>
        </div>
        <div className="left-about-line-container"></div>

        <div className="left-about-line-container-duplicate-down-icon-container">
          {/* <img src={logo} alt="" srcset="" /> */}

          <p className="para-text-white">AI Automation</p>
        </div>
      </div>

      {/* ---------- MAIN SECTION ---------- */}
      <section className="about-us-section">
        <div className="about-us-inner-container">
          <div className="left-about-container-outer">
            <div className="left-about-container-inner-one"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
