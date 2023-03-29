import Intro from "./Components/Intro";
import Sobre from "./Components/Sobre";
import ExpProfissional from "./Components/ExpProfissional";
import Projetos from "./Components/Projetos";
import Contato from "./Components/Contato";
import Menu from "./Components/Menu";
import "./Styling/App.scss";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const container = document.querySelector(".container");
      container.style.transform = `
                translate(${-Math.floor(window.scrollY) * 0.555 + 80}px,
                ${-Math.floor(window.scrollY)}px)
                rotateX(50deg)
                rotateZ(-20deg)
            `;
    });

    return () => {
      window.removeEventListener("scroll", () => {
        const container = document.querySelector(".container");
        container.style.transform = `
                    translate(${-Math.floor(window.scrollY) * 0.555 + 80}px,
                    ${-Math.floor(window.scrollY)}px)
                    rotateX(50deg)
                rotateZ(-20deg)
                `;
      });
    };
  }, []);
  return (
    <main className="App">
      <Menu />
      <div className="container">
        <div className="sections">
          <Intro />
          <Sobre />
          <ExpProfissional />
          <Projetos />
          <Contato />
        </div>
      </div>
      <div className="space"></div>
    </main>
  );
}

export default App;
