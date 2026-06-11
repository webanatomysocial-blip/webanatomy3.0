import React from "react";
import "../workCss/WorkBanner.css";
export default function WorkBanner({
  src,
  title,
  category,
  title2,
  category2,
}) {
  const imageSrc = src && typeof src === "object" ? src.src : src;
  return (
    <>
      <div
        className="work-banner"
        style={{
          backgroundImage: `url(${imageSrc || ""})`,
        }}
      >
        <div className="work-contents">
          <div className="work-contents-bottom">
            <h1 className="head-text-white">{title || ""}</h1>
            {/* <p className="head-text-white">{category || ""}</p> */}
          </div>

          <div className="work-banner-bottom">
            <p className="sub-head-text-white">{title2 || ""}</p>
            <p className="sub-para-text-white">{category2 || ""}</p>
          </div>
        </div>
      </div>
    </>
  );
}
