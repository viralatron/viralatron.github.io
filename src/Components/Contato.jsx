import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import SectionTitle from "./SectionTitle";
const Contato = () => {
  const props = { itemNr: "04", title: "Contato" };
  return (
    <section id="contato" className="contato">
      <SectionTitle {...props} />
      <p className="contato__text">
        Atualmente estou disponível para oportunidades de trabalho. Na verdade,
        mesmo se não for uma oportunidade de trabalho, mas um papo descontraído
        à cerca de front end, pode me chamar.
      </p>
      <a className="contato__email" href="mailto:dan.amaralsilva@gmail.com">
        <code>Email</code>
      </a>
      <div className="contato__externals">
        <a
          href="https://github.com/viralatron"
          target={"_blank"}
          rel="noreferrer"
        >
          <Github />
          <code>Github</code>
        </a>
        <a
          href="https://www.linkedin.com/in/dan-amarals/"
          target={"_blank"}
          rel="noreferrer"
        >
          <Linkedin />
          <code>LinkedIn</code>
        </a>
      </div>
    </section>
  );
};

export default Contato;
