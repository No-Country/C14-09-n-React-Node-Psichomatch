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
import TherapistAgenda from "../Components/Therapist/TherapistAgenda";
import TherapistPerfil from "../Components/Therapist/TherapistPerfil";
import TherapistPrecios from "../Components/Therapist/TherapistPrecios";
import iconHome from "../assets/Icons/iconHome.svg";
import Aside from "../Components/Aside";
import TherapistPatientCita from "../Components/HomePage/TherapistPatientCita";

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
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `http://localhost:3001/therapist/getTherapistByID/${id}`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.text();
      setTherapist(JSON.parse(result));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getTherapistDates(data);
  }, []);

  return (
    <>
      <div className="flex h-screen flex-row justify-start">
        <Aside handleOpcion={handleOpcion} therapist={therapist} />
        <main className="flex flex-col overflow-auto flex-1 ">
          <div className="flex justify-start gap-4 items-start py-6 px-6">
            <img src={iconHome} alt="Home Psicologos" />
            <div className="text-lg text-black font-medium">
              Terapeuta / {opcion}
            </div>
          </div>
          <div className="flex-1 flex justify-center p-4 md:p-6">
            {opcion === "Perfil" ? (
              <div className="flex flex-col gap-4">
                <TherapistPerfil therapist={therapist} />
              </div>
            ) : opcion === "Mi Agenda" ? (
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
            ) : opcion === "Citas Pendientes" ? (
              <div className="flex items-start justify-center">
                <TherapistPatientCita />
              </div>
            ) : null}
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardTherapist;
