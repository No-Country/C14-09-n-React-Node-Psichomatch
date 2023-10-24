import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Dashboard = function () {

const navigate = useNavigate();
const params = useParams();
const [data, setData] = useState(null);

const loadPatientReservation = async (id) => {

const response = await axios.get(`http://localhost:3001/reservation/patient/${params.id}`);
const patientReservation = response.data;
setData(patientReservation);

}
//arreglo[0]

useEffect(() => {
    if (params.id) {
      loadPatientReservation(params.id);
    }
  }, [params.id]);


const formateadate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', options);
}

  return (
     <div className="flex w-full h-screen items-center justify-center">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="md:mx-6 md:p-12">
        <div className="text-center">
            <h1 className="mb-12 mt-1 pb-1 text-xl font-semibold">
              Agenda tu cita
            </h1>
          </div>
     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      onClick={() => navigate(`/psicologos/${params.id}`)}

     >Elegir a mi terapueta</button>
     <div className="p-12">
     <h1 className="mb-12 mt-1 pb-1 text-xl font-semibold text-center">Historial de Citas</h1>
     {data && data.map((item, index) => (
        <div key={index}>
          <h1 className="mb-12 mt-1 pb-1 text-xl font-semibold text-center">
            Fecha de la cita: {formateadate(item.Availability.date)}
          </h1>
          <h1 className="mb-12 mt-1 pb-1 text-xl font-semibold text-center">
            Hora de asistencia: {item.Availability.Hour.hour}
          </h1>
          <h1 className="mb-12 mt-1 pb-1 text-xl font-semibold text-center">
            Estatus: {item.Availability.status == true ? "Orden Agendada" : "No hay orden agendada"}
          </h1>
          <h1 className="mb-12 mt-1 pb-1 text-xl font-semibold text-center">
            Terapueta: {item.Therapist.name} {item.Therapist.lastName}
          </h1>
        </div>
      ))}
     </div>
     </div>
     </div>
     </div>
  );
}

export default Dashboard;