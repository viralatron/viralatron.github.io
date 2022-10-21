const Projeto = ({ id, titulo, screenshot, descricao, tecnologias, links }) => {
  return (
    <li className="projeto" key={id}>
      {screenshot && <img src={screenshot} />}
      <div className="projeto__descricao">
        <h2>{titulo}</h2>
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
        <a className="projeto__links--github" href={links.github}>
          <img src={`${process.env.PUBLIC_URL}/github.svg`} alt="github" />
        </a>
        <a className="projeto__links--app" href={links.app}>
          <img
            src={`${process.env.PUBLIC_URL}/weblink.svg`}
            alt="app website"
          />
        </a>
      </div>
    </li>
  );
};

export default Projeto;
