import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useWorkPopup } from "../context/WorkPopupContext";
import { BsArrowRight } from "react-icons/bs";
import "../workCss/WorkPopup.css";

// Automatically import all popup content components
// They should be named exactly like the project slug (e.g., health-connect.jsx)
const contentModules = import.meta.glob("../works/workPopupContent/*.jsx", {
  eager: true,
  import: "default",
});

const CONTENT_MAP = {};
Object.entries(contentModules).forEach(([path, module]) => {
  const name = path.split("/").pop().replace(".jsx", "");
  CONTENT_MAP[name] = module;
});

const WorkPopup = () => {
  const { isWorkPopupOpen, activeWork, closeWorkPopup } = useWorkPopup();
  const [renderWork, setRenderWork] = useState(null);

  // Sync renderWork with activeWork but with a delay on close to allow animation
  useEffect(() => {
    if (activeWork) {
      setRenderWork(activeWork);
      // Stop Lenis scroll on main page
      if (window.lenis) window.lenis.stop();
    } else {
      // Start Lenis after slide-out animation completes
      const timer = setTimeout(() => {
        setRenderWork(null);
        if (window.lenis) window.lenis.start();
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [activeWork]);

  const CurrentContent = renderWork ? CONTENT_MAP[renderWork.slug] : null;

  return (
    <div
      className={`work-popup-overlay ${isWorkPopupOpen ? "open" : ""}`}
      onClick={closeWorkPopup}
    >
      <div
        className={`work-popup-content ${isWorkPopupOpen ? "slide-in" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="work-popup-close" onClick={closeWorkPopup}>
          <IoCloseOutline />
        </button>

        <div className="work-popup-scroll-container" data-lenis-prevent="true">
          {renderWork && (
            <>
              <div className="work-popup-hero">
                <img
                  src={renderWork.image}
                  alt={renderWork.title}
                  className="work-popup-main-img"
                />
              </div>

              <div className="work-popup-info">
                <div className="work-popup-meta">
                  <span className="work-popup-category sub-para-text-white">
                    {renderWork.category}
                  </span>
                  <button className="work-popup-bookmark">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                  </button>
                </div>

                <h2 className="head-text-white">{renderWork.title}</h2>

                <p className="para-text-white">{renderWork.description}</p>

                {/* Injected Component from workPopupContent */}
                {CurrentContent && <CurrentContent />}

                <div className="work-popup-footer">
                  <div className="work-popup-cta">
                    <h3 className="sub-head-text-white">
                      Would you like to know more about the project?
                    </h3>
                    <p className="sub-para-text-white">
                      To find out more about our work or any of our other
                      brands, get in touch. Mail us on{" "}
                      <a href="mailto:info@webandcrafts.com">
                        info@webanatomy.com
                      </a>{" "}
                      or call <a href="tel:+914802733522">+91 480 2733 522</a>
                    </p>
                    <div className="work-popup-actions">
                      <button className="white-bg-btn">
                        Let's talk <BsArrowRight />
                      </button>
                      <div className="popup-nav-btns">
                        <button className="nav-btn prev">{"<"}</button>
                        <button className="nav-btn next">{">"}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkPopup;
