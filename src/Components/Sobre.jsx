import SectionTitle from "./SectionTitle";
import "../Styling/Sobre.scss";

const Sobre = () => {
  const props = { itemNr: "01", title: "Sobre" };

  return (
    <section id="sobre" className="sobre">
      <SectionTitle {...props} />
      <article className="sobre__article">
        <div className="sobre__article--text">
          <p>
            Diga aí! Me chamo Daniel e eu crio coisas em JS como um dos meus
            passatempos.
          </p>
          <p>
            Meu interesse em JavaScript veio quando eu trabalhava criando
            templates em Joomla na Embasa e percebendo que migrar do PHP para o
            JavaScript seria benéfico para meu fluxo de trabalho.
          </p>
          <p>
            Desde 2021 eu saí de lá e decidi focar meu tempo em me aprimorar
            como um dev front-end e adentrar esse mercado.
          </p>
        </div>
        <img
          className="sobre__profile"
          src={process.env.PUBLIC_URL + "/profile-pic.webp"}
          alt="minha foto de perfil"
        ></img>
      </article>
    </section>
  );
};

export default Sobre;
