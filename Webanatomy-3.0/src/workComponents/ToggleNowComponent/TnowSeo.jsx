import React from "react";
import "../../workCss/ToggleNowCss/TnowSeo.css";

const TnowSeo = ({ tittle, para, src }) => {
  return (
    <section className="tnow-seo-section">
      <div className="tnow-seo-content">
        <h1 className="big-head-text">{tittle}</h1>
        <p className="para-text">{para}</p>
      </div>
      <div className="tnow-seo-image-container">
        <img src={src} alt={tittle} className="tnow-seo-image" />
      </div>
    </section>
  );
};

export default TnowSeo;
