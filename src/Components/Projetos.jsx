import { useEffect, useState } from "react";
import Projeto from "./Projeto";
import SectionTitle from "./SectionTitle";

const Projetos = () => {
  const props = { itemNr: "03", title: "Projetos" };
  const [projList, setProjetos] = useState([]);

  const fetchData = async () => {
    const getData = await fetch(`${process.env.PUBLIC_URL}/projects.json`);
    const response = await getData.json();
    setProjetos(response.projetos);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(projList);
  return (
    <section id="projetos">
      <SectionTitle {...props} />

      {projList && (
        <ul className="projetos__list">
          {Object.keys(projList).map((key) => (
            <Projeto {...projList[key]} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Projetos;
