import css from "./HeaderParagraph.module.css";

export default function HeaderParagraph({ text }) {
  return (
    <>
      <p className={css.headerParagraph}>{text}</p>
    </>
  );
}
