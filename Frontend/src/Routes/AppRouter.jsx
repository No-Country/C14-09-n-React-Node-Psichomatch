import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { JwtContext } from "../Context/JwtContext";
import ScheduleAppointment from "../Components/AppointmentPatient";
import Login from "../Components/Login";
import RecoverPassword from "../Components/RecoverPassword";
import { NotFoundScreen } from "../Pages/NotFoundScreen";
import Dashboard from "../Pages/Dashboard";
import { HomePage } from "./HomePage";
import { Services } from "./Services";
import { RegisterPage } from "./RegisterPage";
import { FindPsychologists } from "./FindPsychologists";

function AppRouter() {
  const { jwt } = useContext(JwtContext);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recuperarclave" element={<RecoverPassword />} />
      <Route path="/registro" element={<RegisterPage />} />
      <Route path="/servicios" element={<Services />} />
      {jwt.token !== undefined ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/psicologos" element={<FindPsychologists />} />
          <Route path="/agendarcita/:id" element={<ScheduleAppointment />} />
        </>
      ) : (
        <Route path="/*" element={<NotFoundScreen />} />
      )}
      <Route path="/*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export default AppRouter;
