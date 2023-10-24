import { Routes, Route, Navigate } from "react-router-dom";
import { RegisterPage } from "./Routes/RegisterPage";
import HomePage from "./Routes/HomePage"
import Login from "./components/Login";
import { FindPsychologists } from "./Routes/FindPsychologists";
import { Services } from "./Routes/Services";
import RecoverPassword from "./components/RecoverPassword";
import SheduleAppointment from "./Components/AppointmentPatient";
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;