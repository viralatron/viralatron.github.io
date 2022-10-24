const TopicLine = ({ width }) => {
  return (
    <svg
      width={width}
      height="10"
      viewBox={`0 0 ${width} 10`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="title__line"
    >
      <line
        x1="3"
        y1="5"
        y2="5"
        stroke="#D3D5D7"
        stroke-width="5"
        stroke-linecap="round"
        x2={width - 3}
      ></line>
    </svg>
  );
};

export default TopicLine;
