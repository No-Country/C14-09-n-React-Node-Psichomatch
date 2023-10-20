
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Layouts/Footer";
import { RegisterPage } from "./Routes/RegisterPage";
import { HomePage } from "./Routes/HomePage";
import Login from "./Components/Login";
import { FindPsychologists } from "./Routes/FindPsychologists";
import { Services } from "./Routes/Services";
import RecoverPassword from "./Components/RecoverPassword";
import Dashboard from './Pages/Dashboard';
import Therapist from './Components/Therapist';

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<FindPsychologists />}></Route>
        <Route path="/servicios" element={<Services />}></Route>
        <Route path="/registro" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/recuperarclave" element={<RecoverPassword />}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/psicologos" element={<Therapist/>}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
