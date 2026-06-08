import "../workCss/JustHeading.css";

export default function JustHeading({ tittle, paddingTop }) {
  return (
    <>
      <section className="JustHeading-section" style={{ paddingTop }}>
        <h1 className="head-text">{tittle}</h1>
      </section>
    </>
  );
}
