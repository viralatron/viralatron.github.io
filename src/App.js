import Intro from "./Components/Intro";
import Sobre from "./Components/Sobre";
import ExpProfissional from "./Components/ExpProfissional";
import Projetos from "./Components/Projetos";
import Contato from "./Components/Contato";
import Menu from "./Components/Menu";
import "./styling/App.scss";
function App() {
  return (
    <main className="App">
      <Menu />
      <Intro />
      <Sobre />
      <ExpProfissional />
      <Projetos />
      <Contato />
    </main>
  );
}

export default App;
