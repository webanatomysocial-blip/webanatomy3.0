import React from "react";

// Reusing existing case study images for the gallery
import case2 from "../../assets/images/Case-Studies-images/case-1.webp"; // Using as fallback/placeholder
import case3 from "../../works/Work-images/Theat.png";
import case4 from "../../works/Work-images/togglenow.png";
import case5 from "../../works/Work-images/Pied.png";

const HealthConnectContent = () => {
  return (
    <>
      <div className="work-popup-services">
        <h4 className="sub-small-head-white">Services Provided</h4>
        <div className="services-chips">
          <span className="service-chip sub-para-text-white">UI/UX Design</span>
          <span className="service-chip sub-para-text-white">
            Web Development
          </span>
          <span className="service-chip sub-para-text-white">
            Mobile App Development
          </span>
          <span className="service-chip sub-para-text-white">UI/UX Design</span>
        </div>
      </div>

      <div className="work-popup-gallery">
        <img src={case3} alt="Gallery 1" className="gallery-img" />
        <img src={case4} alt="Gallery 2" className="gallery-img" />
        <img src={case5} alt="Gallery 3" className="gallery-img" />
      </div>
    </>
  );
};

export default HealthConnectContent;
