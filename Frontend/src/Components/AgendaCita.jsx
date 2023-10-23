import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useParams } from 'react-router-dom';


const AgendaCita =  () => {

  const params = useParams()
  const therapistId = params.id;
  const patientId = params.idpatient;
  const [hour, setHour] = useState([]);
  const [availability, setAvailability] = useState(new Array(4).fill([]));
  const [date, setDate] = useState(new Date());

  const getHours = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3001/hour`);
      setHour(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getAvailabilityByTherapistIdAndDate = async (id, date, index) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3001/availability/${id}`,
        { date }
      );

      if (data) {
        setAvailability((prev) => {
          const updatedAvailability = [...prev];
          updatedAvailability[index] = data;
          return updatedAvailability;
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const addReservation = async (AvailabilityId, PatientId, TherapistId) => {
    try {
      const { data } = await axios.post(`http://localhost:3001/reservation`, {
        AvailabilityId,
        PatientId,
        TherapistId,
      });
  
      if (data) {
        // Actualiza los datos de availability si data es verdadero
        setAvailability((prev) => {
          const updatedAvailability = [...prev];
          updatedAvailability.forEach((dayAvailability) => {
            dayAvailability.forEach((availabilityItem) => {
              if (availabilityItem.id === AvailabilityId) {
                availabilityItem.status = true;
              }
            });
          });
          return updatedAvailability;
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  const WeekDays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const getDateAndMonth = (fecha) => {
    const mesEnLetras = months[fecha.getMonth()];
    const diaDelMes = fecha.getDate();
    return diaDelMes + " " + mesEnLetras;
  };

  useEffect(() => {
    getHours();
    [0, 1, 2, 3].forEach((x) => {
      getAvailabilityByTherapistIdAndDate(therapistId, nextDate(x), x);
    });
  }, [date]);

  const getWeekDay = (fecha) => {
    const numeroDiaSemana = fecha.getDay();
    const nombreDiaSemana = WeekDays[numeroDiaSemana];
    return nombreDiaSemana;
  };

  const nextHandler = (fecha) => {
    const fechaSiguiente = new Date(fecha);
    fechaSiguiente.setDate(fechaSiguiente.getDate() + 4);
    setDate(new Date(fechaSiguiente));
  };

  const prevHandler = (fecha) => {
    const prevDate = new Date(fecha);
    prevDate.setHours(0, 0, 0, 0);

    const actualDate = new Date();
    actualDate.setHours(0, 0, 0, 0);

    prevDate.setDate(prevDate.getDate() - 4);
    console.log(prevDate);

    if (prevDate >= actualDate) {
      setDate(new Date(prevDate));
    }
  };

  const nextDate = (num) => {
    const fechaSiguiente = new Date(date);
    fechaSiguiente.setDate(fechaSiguiente.getDate() + num);
    const fechaSolo = new Date(
      fechaSiguiente.getFullYear(),
      fechaSiguiente.getMonth(),
      fechaSiguiente.getDate()
    );

    return fechaSolo;
  };

  return (
    <div className="w-96 h-96 border-2 border-black px-2 overflow-auto">
      <div className="flex justify-between">
        <button
          onClick={() => prevHandler(date)}
          className="bg-indigo-100 w-10 h-10 rounded-full"
        >
          {" "}
          {"<"}
        </button>
        <button
          onClick={() => nextHandler(date)}
          className="bg-indigo-100 w-10 h-10 rounded-full"
        >
          {">"}
        </button>
      </div>

      <div className="flex justify-between w-full h-full">
        {[0, 1, 2, 3].map((x) => {
          return (
            <div
              key={uuidv4()}
              className="flex-col justify-center space-between text-center w-full"
            >
              <p className="text-black">{getWeekDay(nextDate(x))}</p>
              <p className="text-gray-400">{getDateAndMonth(nextDate(x))}</p>
              {availability[x]?.map((y) => {
                if(!y.status){ return(
                  <p
                    onClick={() => {addReservation(y.id, patientId, y.TherapistId)}}
                    key={uuidv4()}
                    value={y.HourId}
                    className="bg-indigo-100 border-2  rounded-lg my-1 mx-1 p-2 cursor-pointer"
                  >
                    {y.Hour.hour}
                  </p>
                )} else { return(
                  <p
                    key={uuidv4()}
                    value={y.HourId}
                    className="rounded-lg my-1 mx-1 p-2 line-through"
                  >
                    {y.Hour.hour}
                  </p>
                )}
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgendaCita;
