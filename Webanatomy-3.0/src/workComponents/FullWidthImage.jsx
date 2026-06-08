import "../workCss/FullWidthImage.css";

export default function FullWidthImage({ src, alt }) {
  return (
    <div className="FullWidthImage-work-section">
      <img src={src} alt={alt} />
    </div>
  );
}
