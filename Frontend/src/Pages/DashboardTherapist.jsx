import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getCategories } from "../redux/actions/category";
import { getCountries } from "../redux/actions/country";
import axios from "axios";
import {
  getTherapistById,
  insertTherapist,
  updateTherapist,
} from "../redux/actions/therapist";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useParams } from "react-router-dom";
import Agenda from "../Components/Agenda";
import TherapistAgenda from "../Components/Therapist/TherapistAgenda";
import TherapistPerfil from "../Components/Therapist/TherapistPerfil";
import TherapistPrecios from "../Components/Therapist/TherapistPrecios";

const DashboardTherapist = () => {
  const { id } = useParams();


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
  const [opcion, setOpcion] = useState("Agenda");

  const handleOpcion = (opc) => {
    setOpcion(opc);
  };


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
      <div className="grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
        <aside className="hidden border-r lg:block switchVisibility">
          <div className="flex h-full max-h-screen flex-col gap-2 py-4 px-6">
            <div className="text-xl font-semibold">{therapist.name}</div>
            <div className="text-xl font-semibold">{therapist.lastName}</div>
            <div className="text-xl font-semibold">{therapist.email}</div>
            <div className="text-xl font-semibold">{therapist.adress}</div>
            <hr className="my-4 border-zinc-200 dark:border-zinc-600" />
            <nav className="flex flex-col gap-4 text-md font-medium">
              <button
                className="text-start text-zinc-500 dark:text-zinc-800"
                name="Perfil"
                onClick={(e) => {
                  handleOpcion(e.target.name);
                }}
              >
                Perfil
              </button>
              <button
                className="text-start text-zinc-500 dark:text-zinc-800"
                name="Agenda"
                onClick={(e) => {
                  handleOpcion(e.target.name);
                }}
              >
                Agenda
              </button>
              <button
                className="text-start text-zinc-500 dark:text-zinc-800"
                name="Precios"
                onClick={(e) => {
                  handleOpcion(e.target.name);
                }}
              >
                Precios
              </button>
            </nav>
          </div>
        </aside>
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
      </div>

    </>
  );
};

export default DashboardTherapist;
