import { useEffect, useRef, useState } from "react";
import { findDOMNode } from "react-dom";
import TopicLine from "../assets/TopicLine";

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
      <TopicLine width={width} />
    </div>
  );
};

export default SectionTitle;
