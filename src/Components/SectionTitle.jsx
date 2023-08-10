import "../Styling/Section.scss";

const SectionTitle = ({ itemNr, title }) => {
  return (
    <div className="title">
      <h2 className={"title__text"}>
        <code>{itemNr}.</code> {title}
      </h2>
      <i className="title__line"></i>
    </div>
  );
};

export default SectionTitle;
