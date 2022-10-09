import Intro from "./Components/Intro";
import Sobre from "./Components/Sobre";
import ExpProfissional from "./Components/ExpProfissional";
import Trabalhos from "./Components/Trabalhos";
import MeiosContato from "./Components/MeiosContato";
import Menu from "./Components/Menu";

function App() {
  return (
    <main className="App">
      <Menu />
      <Intro />
      <Sobre />
      <ExpProfissional />
      <Trabalhos />
      <MeiosContato />
    </main>
  );
}

export default App;
