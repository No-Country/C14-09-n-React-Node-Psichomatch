import React from 'react'
import Login from './components/Login'
import Registro from './components/Registro'
import HomePatient from "./Layouts/Dashboard-Search"
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
     
     <Routes>
        <Route exact path="/" element={<Registro />} />
        <Route exact path="/home" element={<HomePatient/>} />
      </Routes>
    </>
  )
}

export default App
