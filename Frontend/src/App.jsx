import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Layouts/Footer";
import { RegisterPage } from "./Routes/RegisterPage";
import { LoginPage } from "./Routes/LoginPage";
import { HomePage } from "./Routes/HomePage";
import Login from "./Components/Login";
import RecoverPassword from "./Components/RecoverPassword";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registro" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/recuperarclave" element={<RecoverPassword />}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
