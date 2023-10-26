

import React from 'react'
import Agenda from "./Components/Agenda"
import Agenda2 from "./Components/AgendaCita"

import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Layouts/Footer";
import { RegisterPage } from "./Routes/RegisterPage";
import { HomePage } from "./Routes/HomePage";
import Login from "./Components/Login";
import { FindPsychologists } from "./Routes/FindPsychologists";
import { Services } from "./Routes/Services";
import RecoverPassword from "./Components/RecoverPassword";
import SheduleAppointment from "./Components/AppointmentPatient";
import Dashboard from './Pages/Dashboard';
import Dashboard2 from './Layouts/Dashboard-Search';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/psicologos/:id" element={<FindPsychologists />}></Route>
        <Route path="/servicios" element={<Services />}></Route>
        <Route path="/registro" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/recuperarclave" element={<RecoverPassword />}></Route>
        <Route path="/dashboard/:id" element={<Dashboard/>}></Route>
        <Route path="/agendarcita/:id/:idpatient" element={<SheduleAppointment/>}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
        <Route path="/agenda2" element={<Agenda2/>} />
        <Route path="/agenda" element={<Agenda/>} />
        <Route path="/thera" element={<Dashboard2/>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;