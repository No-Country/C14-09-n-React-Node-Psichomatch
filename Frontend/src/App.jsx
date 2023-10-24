import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Layouts/Footer";
import { AppRouter } from "./Routes/AppRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
