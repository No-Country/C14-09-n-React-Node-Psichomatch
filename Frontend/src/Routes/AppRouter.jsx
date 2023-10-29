import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { JwtContext } from "../Context/JwtContext";
import Login from "../Components/Login";
import RecoverPassword from "../Components/RecoverPassword";
import { NotFoundScreen } from "../Pages/NotFoundScreen";
import Dashboard from "../Pages/Dashboard";
import { HomePage } from "../Pages/HomePage";
import { Services } from "../Pages/Services";
import { RegisterPage } from "../Pages/RegisterPage";
import { FindPsychologists } from "../Pages/FindPsychologists";
import AppointmentPatient from "../Components/AppointmentPatient";
import RegisterTherapist from "../Components/RegisterTherapist";
import Plans from "../Pages/Plans";
import Agenda from "../Components/Agenda"
function AppRouter() {
  const { jwt } = useContext(JwtContext);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recuperarclave" element={<RecoverPassword />} />
      <Route path="/registro" element={<RegisterPage />} />
      <Route path="/registerTherapist" element={<RegisterTherapist/>}/>
      <Route path="/servicios" element={<Services />} />
      <Route path="/plans" element={<Plans />}/>
      <Route path="/agenda" element={<Agenda/>} />
      {jwt.token !== undefined ? (
        <>
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/psicologos/:id" element={<FindPsychologists />} />
          <Route
            path="/agendarcita/:id/:idpatient"
            element={<AppointmentPatient />}
          ></Route>
        </>
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="/*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export default AppRouter;
