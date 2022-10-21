import { useEffect, useRef, useState } from "react";
import { findDOMNode } from "react-dom";
import Job from "./Job";

const ExpProfissional = () => {
  const [Jobs, setJobs] = useState([]);
  const [JobDesc, setJobDesc] = useState();

  const openJob = (id) => {
    for (const key in Jobs) {
      if (Number(Jobs[key].id) == Number(id)) setJobDesc(Jobs[key]);
    }
  };
  let compClass = "companies__button";
  const menuRef = useRef(null);

  const setJobButton = (id) => {
    const els = findDOMNode(menuRef.current).getElementsByClassName(compClass);
    Object.keys(els).map((key) => {
      if (Number(els[key].value) === Number(id)) {
        els[key].className = `${compClass} active`;
      } else {
        els[key].className = compClass;
      }
    });
  };
  const fetchData = async () => {
    const getData = await fetch(`${process.env.PUBLIC_URL}/jobs.json`);
    const response = await getData.json();
    setJobs(response.experiencias);
    setJobDesc(response.experiencias[0]);
  };
  const handleClick = (e) => {
    openJob(e.target.value);
    setJobButton(e.target.value);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(Jobs);
    if (Jobs.length > 0) setJobButton(Jobs[0].id);
  }, [Jobs]);
  return (
    <section id="experiencia">
      <h2 className={"title"}>
        <code>02.</code> Experiência Profissional
      </h2>
      <menu className="companies" ref={menuRef}>
        {Object.keys(Jobs).map((key) => (
          <li key={Jobs[key].id}>
            <button
              type="button"
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
