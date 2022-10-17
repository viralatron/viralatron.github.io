const Job = ({ cargo, periodo, attribs }) => {
  return (
    <div className="job">
      <h3 className="job__cargo">{cargo}</h3>
      <code className="job__periodo">
        {periodo.de} - {periodo.ate}
      </code>
      <ul className="job__attribs">
        {attribs.map((attrib) => (
          <li className="job__attrib">{attrib}</li>
        ))}
      </ul>
    </div>
  );
};

export default Job;
