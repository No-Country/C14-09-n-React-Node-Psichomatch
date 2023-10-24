import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import RecoverPassword from "../Components/RecoverPassword";
import SheduleAppointment from "../Components/AppointmentPatient";
import Dashboard from "../Pages/Dashboard";
import { NotFoundScreen } from "../Pages/NotFoundScreen";
import { HomePage } from "./HomePage";
import { FindPsychologists } from "./FindPsychologists";
import { Services } from "./Services";
import { RegisterPage } from "./RegisterPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/psicologos" element={<FindPsychologists />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/recuperarclave" element={<RecoverPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agendarcita/:id" element={<SheduleAppointment />} />
        <Route path="/*" element={<NotFoundScreen />} />
      </Routes>
    </>
  );
};
