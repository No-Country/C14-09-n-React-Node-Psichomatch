import React from 'react'
import Login from './components/Login'
import Registro from './components/Registro'
import HomePatient from "./Layouts/Dashboard-Search"
import Agenda from "./Components/Agenda"
import Agenda2 from "./Components/AgendaCita"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     
     <Routes>
        <Route exact path="/" element={<Registro />} />
        <Route exact path="/home" element={<HomePatient/>} />
        <Route exact path="/agenda" element={<Agenda/>} />
        <Route exact path="/agenda2" element={<Agenda2/>} />
      </Routes>
    </>
  )
}

export default App
