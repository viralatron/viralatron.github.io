import { useEffect, useState } from "react";
import Projeto from "./Projeto";
import SectionTitle from "./SectionTitle";

const Projetos = () => {
  const props = { itemNr: "03", title: "Projetos" };
  const [projList, setProjetos] = useState([]);

  const fetchData = async () => {
    const getData = await fetch(
      `https://gist.githubusercontent.com/viralatron/c638b4f83ee0669c0310fe8a32f960d5/raw/fe6157f1b23d5a1690505f7063b16c7bb42eb98a/projects.json`
    );
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
