import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { JwtContext } from "../Context/JwtContext";
import Login from "../Components/Login";
import RecoverPassword from "../Components/RecoverPassword";
import { NotFoundScreen } from "../Pages/NotFoundScreen";
import Dashboard from "../Pages/Dashboard";
import { HomePage } from "./HomePage";
import { Services } from "./Services";
import { RegisterPage } from "./RegisterPage";
import { FindPsychologists } from "./FindPsychologists";
import AppointmentPatient from "../Components/AppointmentPatient";

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
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/psicologos/id" element={<FindPsychologists />} />
          <Route
            path="/agendarcita/:id/:idpatient"
            element={<AppointmentPatient />}
          ></Route>
        </>
      ) : (
        <Route path="/*" element={<NotFoundScreen />} />
      )}
      <Route path="/*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export default AppRouter;
