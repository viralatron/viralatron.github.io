import { useEffect, useRef, useState } from "react";
import { findDOMNode } from "react-dom";
import Job from "./Job";
import SectionTitle from "./SectionTitle";

const ExpProfissional = () => {
  const props = { itemNr: "02", title: "Experiência" };
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
    const getData = await fetch(
      `https://gist.githubusercontent.com/viralatron/d82c8246ef8615fb74d47cc8a9ba4c33/raw/5afa18b470b97cf518d4857e9f83520885a59a4e/jobs.json`
    );
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
    if (Jobs.length > 0) setJobButton(Jobs[0].id);
  }, [Jobs]);
  return (
    <section id="experiencia">
      <SectionTitle {...props} />
      <div className="experiencia__content">
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
      </div>
    </section>
  );
};

export default ExpProfissional;
