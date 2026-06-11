import img1 from "../../WorkImages/threatsenseai/threatsenseai-dupimg.webp";
import img2 from "../../WorkImages/threatsenseai/threatsenseai-dupimg.webp";

import "../../workCss/threatsenseaicss/BothImages.css";

export default function BothImages({ src1, src2 }) {
  const imageSrc1 = src1 && typeof src1 === "object" ? src1.src : src1;
  const imageSrc2 = src2 && typeof src2 === "object" ? src2.src : src2;
  const fallbackSrc1 = img1 && typeof img1 === "object" ? img1.src : img1;
  const fallbackSrc2 = img2 && typeof img2 === "object" ? img2.src : img2;

  return (
    <>
      <section className="both-images-section">
        <img src={imageSrc1 || fallbackSrc1} alt="" />
        <img src={imageSrc2 || fallbackSrc2} alt="" />
      </section>
    </>
  );
}
