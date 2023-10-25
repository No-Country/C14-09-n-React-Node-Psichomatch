import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Layouts/Footer";
import { JwtProvider } from "./Context/JwtContext";
import AppRouter from "./Routes/AppRouter";

function App() {
  return (
    <>
      <JwtProvider>
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </JwtProvider>
    </>
  );
}

export default App;
