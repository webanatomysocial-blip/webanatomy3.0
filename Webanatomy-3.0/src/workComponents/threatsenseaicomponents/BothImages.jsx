import img1 from "../../WorkImages/threatsenseai/threatsenseai-dupimg.webp";
import img2 from "../../WorkImages/threatsenseai/threatsenseai-dupimg.webp";

import "../../workCss/threatsenseaicss/BothImages.css";

export default function BothImages({ src1, src2 }) {
  return (
    <>
      <section className="both-images-section">
        <img src={src1 || img1} alt="" />
        <img src={src2 || img2} alt="" />
      </section>
    </>
  );
}
