import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  getPatientReservation,
  deleteReservation,
} from "../api/reservation_api";
import CalendarioPrincipal from "../Components/CalendarioPrincipal";
import DashboardTherapist from "./DashboardTherapist";
import TherapistAgenda from "../Components/Therapist/TherapistAgenda";
import TherapistPerfil from "../Components/Therapist/TherapistPerfil";
import TherapistPrecios from "../Components/Therapist/TherapistPrecios";

const Dashboard = function ({ jwt }) {
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
    <>
      <CalendarioPrincipal />

      {jwt.role === "patient" ? (
        <main>
          <section className="my-5">
            <h2 className="mb-12 mt-1 pb-1 text-xl font-semibold text-center">
              Historial de Citas
            </h2>
            {console.log(data)}
            {data &&
              data.map((reservation, index) => (
                <div className="bg-violet-50 p-10">
                  <h2>
                    <span className="font-bold">Fecha: </span>
                    {new Date(
                      reservation.Availability.date
                    ).toLocaleDateString()}
                  </h2>
                  <h2>
                    <span className="font-bold">Psicólogo: </span>
                    {reservation.Therapist.name}{" "}
                    {reservation.Therapist.lastName}
                  </h2>
                  <h2>
                    <span className="font-bold">Estatus: </span>
                    {reservation.Availability.status == true
                      ? "Orden Agendada"
                      : "No hay orden agendada"}
                  </h2>
                  <h2>
                    <span className="font-bold">Hora: </span>{" "}
                    {reservation.Availability.Hour.hour}
                  </h2>
                  <h2>
                    <span className="font-bold">Télefono: </span>{" "}
                    {reservation.Therapist.phone}
                  </h2>
                  <h2>
                    <span className="font-bold">Mail: </span>{" "}
                    {reservation.Therapist.email}
                  </h2>
                  <div className="grid justify-items-end">
                    <button
                      className="bg-violet-50 hover:bg-violet-50 text-black font-semibold py-2 px-4 rounded"
                      onClick={() => deletePatientReservation(reservation.id)}
                    >
                      Cancelar
                    </button>
                  </div>
                  <hr className="border-solid border-2 border-violet-300 " />
                </div>
              ))}
          </section>
        </main>
      ) : (
        <>
        <p>holasdsd</p>
          <main className="flex flex-col overflow-auto">
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 py-4 px-6">
              <div className="text-xl font-semibold">Terapeuta / {opcion} </div>
              <svg
                className=" text-gray-500 dark:text-gray-400"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
            <div className="flex-1 flex justify-center rounded-lg border p-4 md:p-6">
              {opcion === "Perfil" ? (
                <div className="flex flex-col gap-4">
                  <TherapistPerfil therapist={therapist} />
                </div>
              ) : opcion === "Agenda" ? (
                <div className="flex items-start justify-center">
                  <TherapistAgenda
                    therapist={therapist}
                    data={data}
                    deletePatientReservation={deletePatientReservation}
                    loadPatientReservation={loadPatientReservation}
                  />
                </div>
              ) : opcion === "Precios" ? (
                <div className="flex items-start justify-center">
                  <TherapistPrecios therapist={therapist} />
                </div>
              ) : null}
            </div>
          </main>
          {/* <DashboardTherapist /> */}
        </>
      )}
    </>
  );
};

export default Dashboard;
