import { CardRanking } from "./components/CardRanking";
import { Hero } from "./components/Hero";
import Registro from "./Components/Registro";

function App() {
  return (
    <>
      <div className="xl:ml-32 xl:mr-24">
        <Hero />
        <CardRanking />
        <Registro />
      </div>
    </>
  );
}

export default App;
