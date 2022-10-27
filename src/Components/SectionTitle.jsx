import { useEffect, useRef, useState } from "react";
import { findDOMNode } from "react-dom";

const SectionTitle = ({ itemNr, title }) => {
  const titleRef = useRef(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const titleWidth = findDOMNode(titleRef.current).getElementsByClassName(
      "title__text"
    )[0].offsetWidth;
    const divWidth = findDOMNode(titleRef.current).offsetWidth;
    setWidth(divWidth - (titleWidth + 52));
  }, [titleRef]);
  return (
    <div className="title" ref={titleRef}>
      <h2 className={"title__text"}>
        <code>{itemNr}.</code> {title}
      </h2>
      <i className="title__line"></i>
    </div>
  );
};

export default SectionTitle;
