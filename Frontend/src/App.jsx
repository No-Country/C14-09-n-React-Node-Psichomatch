import { CardRanking } from "./components/CardRanking";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <div className="xl:ml-32 xl:mr-24">
        <Hero />
        <CardRanking />
      </div>
    </>
  );
}

export default App;
