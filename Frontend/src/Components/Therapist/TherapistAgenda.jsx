import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Agenda from "../Agenda";
import iconCalendar from "../../assets/Icons/iconCalendar.svg";

function TherapistAgenda() {
  const [data, setData] = useState(null);
  const params = useParams();

  const loadPatientReservation = async (id) => {
    const response = await axios.get(
      `http://localhost:3001/reservation/therapist/${params.id}`
    );
    const patientReservation = response.data;
    console.log(patientReservation);
    setData(patientReservation);
  };

  const deletePatientReservation = async (id) => {
    const response = await axios.delete(
      `http://localhost:3001/reservation/${id}`
    );
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
      <main>
        <div className="flex w-full h-screen items-center justify-center">
          <div className="w-full flex items-center justify-center lg:w-1/2">
            <div className="md:mx-6 md:p-12">
              <div className="flex items-center m-20">
                <div>
                  <h1 className="mb-12 mt-1 mb-2 text-xl font-bold">
                    Mi Calendario
                  </h1>
                  <p className="">
                    En este espacio encontrarás tú historial de citas con los
                    pacientes que han agendado contigo.
                  </p>
                </div>
                <div className="bg-violet-50 rounded-full p-8">
                  <img src={iconCalendar} alt="" />
                </div>
              </div>
              <div className="flex flex-col mb-10">
                <div className="flex flex-col justify-cwenter mx-auto mt-10">
                  <p className="font-bold mb-5">
                    Elige el horario en el que deseas atender pacientes
                  </p>
      
                  <div className="flex justify-center">
                    <Agenda therapistId={params.id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default TherapistAgenda;
