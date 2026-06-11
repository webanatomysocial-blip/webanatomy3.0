import "../workCss/FullWidthImage.css";

export default function FullWidthImage({ src, alt }) {
  const imageSrc = src && typeof src === "object" ? src.src : src;
  return (
    <div className="FullWidthImage-work-section">
      <img src={imageSrc} alt={alt} />
    </div>
  );
}
