import { useEffect, useState } from "react";
import { findDOMNode } from "react-dom";
import Job from "./Job";

const ExpProfissional = () => {
  const [Jobs, setJobs] = useState([]);
  const [JobDesc, setJobDesc] = useState();

  const openJob = (id) => {
    for (const key in Jobs) {
      if (Jobs[key].id == id) setJobDesc(Jobs[key]);
    }
  };
  let compClass = "companies__button";

  const fetchData = async () => {
    const getData = await fetch(`${process.env.PUBLIC_URL}/jobs.json`);
    const response = await getData.json();
    setJobs(response.experiencias);
    setJobDesc(response.experiencias[0]);
  };

  const handleClick = (e) => {
    openJob(e.target.value);
    // definir alvo como ativo e desativar os outros elementos
    // console.log(findDOMNode(".companies").getElementsByClassName(compClass));
    e.target.className = `${compClass} active`;
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section id="experiencia">
      <h2 className={"title"}>
        <code>02.</code> Experiência Profissional
      </h2>
      <menu className="companies">
        {Object.keys(Jobs).map((key) => (
          <li>
            <button
              className={compClass}
              onClick={handleClick}
              value={Jobs[key].id}
              key={Jobs[key].id}
            >
              {Jobs[key].empresa}
            </button>
          </li>
        ))}
      </menu>
      {JobDesc && <Job key={JobDesc.id} {...JobDesc} />}
    </section>
  );
};

export default ExpProfissional;
