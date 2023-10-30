import React, { useState, useEffect } from "react";
import { useFetcher, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  getPatientReservation,
  deleteReservation,
} from "../api/reservation_api";
import TherapistPerfil from "../Components/Therapist/TherapistPerfil";
import TherapistAgenda from "../Components/Therapist/TherapistAgenda";
import TherapistPrecios from "../Components/Therapist/TherapistPrecios";

const Dashboard = function () {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState(null);

  const loadPatientReservation = async (id) => {
    const response = await getPatientReservation(params.id);
    const patientReservation = response.data;
    setData(patientReservation);
  };

  const deletePatientReservation = async (id) => {
    const response = await deleteReservation(id);
    const deletereservation = response.data;
    setData(data.filter((data) => data.id !== id));
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: <p>Cita Cancelada Exitosamente</p>,
      icon: "success",
    });
  };

  useEffect(() => {
    if (params.id) {
      loadPatientReservation(params.id);
    }
  }, [params.id]);

  // Navegación del therapist
  const [opcion, setOpcion] = useState('Perfil');

  const handleOpcion = (opc) => {
    setOpcion(opc);
  }

  // Esto es para la visibilidad pero no lo pude hacer.
  // const [visibility, setVisibility] = useState(true)

  // const switchVisibility = () => {
  //   setVisibility(!visibility)
  // }

  const [therapist, setTherapist] = useState({});

  const getTherapistDates = async (data) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    try {
      const response = await fetch("http://localhost:3001/therapist/getTherapistByID/21", requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.text();
      setTherapist(JSON.parse(result));
    } catch (error) {
      console.error('Error:', error);
    }

  }

  useEffect(() => {
    getTherapistDates(data);
  }, []);

  return (
    <>
     <div className="flex w-full h-screen items-center justify-center">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="md:mx-6 md:p-12">
          <div className="flex items-center m-20">
          <div>
            <h1 className="mb-12 mt-1 mb-2 text-xl font-bold">
              Mi Calendario
            </h1>
            <p className="">En este espacio encontrarás tu historial de citas.</p>
            </div>
            <div className="bg-violet-50 rounded-full p-8">
            <svg width="134" height="134" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.9726 48.1613C47.931 48.1613 50.3319 45.7603 50.3319 42.802V25.4527C50.3319 22.4943 47.9309 20.0933 44.9726 20.0933C42.0143 20.0933 39.6133 22.4944 39.6133 25.4527V42.8073C39.6185 45.7604 42.0143 48.1613 44.9726 48.1613Z" fill="#B0A0DF"/>
<path d="M110.052 28.7707H97.036V39.4843H104.692V59.1403H28.6402V39.4843H36.3017V28.7707H23.2861C20.3277 28.7707 17.9268 31.1717 17.9268 34.13V107.885C17.9268 110.843 20.3278 113.244 23.2861 113.244H110.057C113.015 113.244 115.416 110.843 115.416 107.885L115.411 34.13C115.411 31.1716 113.01 28.7707 110.052 28.7707ZM104.692 80.8333H93.713V69.8541H104.692V80.8333ZM61.5042 91.5469V102.401C61.5042 102.443 61.5146 102.484 61.5199 102.526H50.3324L50.3272 91.5469L61.5042 91.5469ZM50.3324 80.8333V69.8541H61.5094V80.8333H50.3324ZM72.2177 102.401V91.5472H82.9989V102.526H72.202C72.2072 102.48 72.2177 102.443 72.2177 102.401ZM72.2177 80.8333V69.8541H82.9989V80.8333H72.2177ZM39.619 69.8541V80.8333H28.6398V69.8541H39.619ZM28.6398 91.5475H39.619V102.527H28.6398V91.5475ZM93.7132 102.527V91.5475H104.692V102.527H93.7132Z" fill="#B0A0DF"/>
<path d="M53.6504 28.7707H79.6811V39.4843H53.6504V28.7707Z" fill="#B0A0DF"/>
<path d="M88.3593 48.1613C91.3177 48.1613 93.7187 45.7603 93.7187 42.802V25.4527C93.7187 22.4943 91.3176 20.0933 88.3593 20.0933C85.4011 20.0933 83 22.4944 83 25.4527V42.8073C83.0052 45.7604 85.4011 48.1613 88.3593 48.1613Z" fill="#B0A0DF"/>
</svg>
</div>
</div>
          <div className="p-12">
            <h1 className="mb-12 mt-1 pb-1 text-xl font-semibold text-center">
              Historial de Citas
            </h1>
              {data &&
                data.map((reservation, index) => (
                  <div className="bg-violet-50 p-10">
                      <h1><span className="font-bold">Fecha: </span>{new Date(
                          reservation.Availability.date
                        ).toLocaleDateString()}</h1> 
                        <h1><span className="font-bold">Psicólogo: </span>{reservation.Therapist.name} {reservation.Therapist.lastName}</h1>   
                         <h1><span className="font-bold">Estatus: </span>{reservation.Availability.status == true
                          ? "Orden Agendada"
                          : "No hay orden agendada"}</h1>                          
                        <h1><span className="font-bold">Hora: </span> {reservation.Availability.Hour.hour}</h1>
                      <div className="grid justify-items-end">                                               
                      <button
                        className="bg-violet-50 hover:bg-violet-50 text-black font-semibold py-2 px-4 rounded"
                        onClick={() => deletePatientReservation(reservation.id)}
                      >
                        Cancelar 
                      </button>
                      </div>
                    <hr className="border-solid border-2 border-violet-300 "/>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
    </>
  );
};

export default Dashboard;
