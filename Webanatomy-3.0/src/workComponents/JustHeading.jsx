import "../workCss/JustHeading.css";

export default function JustHeading({ tittle, subtitle, paddingTop }) {
  return (
    <>
      <section className="JustHeading-section" style={{ paddingTop }}>
        <h1 className="head-text">{tittle}</h1>
        {subtitle && (
          <p className="sub-para-text" style={{ marginTop: "24px", fontSize: "18px", color: "#666", textAlign: "center", fontStyle: "normal" }}>
            {subtitle}
          </p>
        )}
      </section>
    </>
  );
}
