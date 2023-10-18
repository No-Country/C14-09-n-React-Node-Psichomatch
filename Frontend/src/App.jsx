import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Layouts/Footer";
import { RegisterPage } from "./Routes/RegisterPage";
import { HomePage } from "./Routes/HomePage";
import Login from "./Components/Login";
<<<<<<< HEAD
import { FindPsychologists } from "./Routes/FindPsychologists";
import { Services } from "./Routes/Services";
=======
import RecoverPassword from "./Components/RecoverPassword";
>>>>>>> ba5e8e829efb6b167ee2c795401ef44701135bfd

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/psicologos" element={<FindPsychologists />}></Route>
        <Route path="/servicios" element={<Services />}></Route>
        <Route path="/registro" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/recuperarclave" element={<RecoverPassword />}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
