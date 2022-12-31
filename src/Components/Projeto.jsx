import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Weblink } from "../assets/weblink.svg";
const Projeto = ({ id, titulo, screenshot, descricao, tecnologias, links }) => {
  return (
    <li className="projeto" key={id}>
      {screenshot && (
        <img className="projeto__screenshot" src={screenshot} alt={descricao} />
      )}
      <div className="projeto__dados">
        <h2>{titulo}</h2>
        <div className="projeto__descricao">
          <p>{descricao}</p>
        </div>
        {tecnologias && (
          <ul className="tags">
            {tecnologias.map((tech) => (
              <li className="tags__item">{tech}</li>
            ))}
          </ul>
        )}
        <div className="projeto__links">
          <a
            className="projeto__links--logo"
            href={links.github}
            target={"_blank"}
          >
            <Github />
            <code>Github</code>
          </a>
          <a
            className="projeto__links--logo"
            href={links.app}
            target={"_blank"}
          >
            <Weblink />
            <code>Demo</code>
          </a>
        </div>
      </div>
    </li>
  );
};

export default Projeto;
