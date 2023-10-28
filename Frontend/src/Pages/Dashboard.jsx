import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  getPatientReservation,
  deleteReservation,
} from "../api/reservation_api";

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



  
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="md:mx-6 md:p-12">
          <div className="text-center">
            <h1 className="mb-12 mt-1 pb-1 text-xl font-semibold">
              Panel Principal
            </h1>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              onClick={() => navigate(`/psicologos/${params.id}`)}
            >
              Elegir a mi terapueta
            </button>
          </div>
          <div className="p-12">
            <h1 className="mb-12 mt-1 pb-1 text-xl font-semibold text-center">
              Historial de Citas
            </h1>
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Fecha de la cita</th>
                  <th>Hora de asistencia</th>
                  <th>Estatus</th>
                  <th>Terapueta agendado</th>
                  <th>Acción</th>
                </tr>
              </thead>
              {data &&
                data.map((reservation, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>
                        {new Date(
                          reservation.Availability.date
                        ).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        {reservation.Availability.Hour.hour}
                      </td>
                      <td className="px-6 py-4">
                        {reservation.Availability.status == true
                          ? "Orden Agendada"
                          : "No hay orden agendada"}
                      </td>
                      <td className="px-6 py-4">
                        {reservation.Therapist.name}{" "}
                        {reservation.Therapist.lastName}
                      </td>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
                        onClick={() => deletePatientReservation(reservation.id)}
                      >
                        Cancelar Cita
                      </button>
                    </tr>
                  </tbody>
                ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
