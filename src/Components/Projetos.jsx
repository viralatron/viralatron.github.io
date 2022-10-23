import { useEffect, useState } from "react";
import Projeto from "./Projeto";

const Projetos = () => {
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
      <h2 className={"title decor"}>
        <code>03.</code> Projetos
      </h2>
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
