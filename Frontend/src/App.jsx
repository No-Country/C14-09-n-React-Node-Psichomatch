import React from 'react'
import Login from './components/Login'
import Registro from './components/Registro'
import HomePatient from "./Layouts/Dashboard-Search"
import Footer from "./Layouts/Footer"
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard"

function App() {
  return (
    <>
     <Routes>
        <Route exact path="/" element={<Registro />} />
        <Route exact path="/home" element={<HomePatient/>} />
      </Routes>
      <Footer/>
      <Dashboard/>
    </>
  )
}

export default App
