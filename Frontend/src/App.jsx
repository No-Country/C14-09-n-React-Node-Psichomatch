import React from "react";
import Header from "./Layouts/Header";
import Hero from "./components/Hero";
import CardRanking from "./components/CardRanking";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="xl:ml-32 xl:mr-24">
        <Hero />
        <CardRanking />
      </div>

      <Footer />
    </>
  );
}

export default App;
