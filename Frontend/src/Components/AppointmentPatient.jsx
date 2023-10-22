import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ScheduleAppointment = () => {
  const params = useParams();
  const [data, setData] = useState(null); 

  const loadTherapists = async (id) => {
      const response = await axios.get(`http://localhost:3001/therapist/getTherapistByID/${id}`);
      const therapistData = response.data;
      setData(therapistData); 
  }

  useEffect(() => {
    if (params.id) {
      loadTherapists(params.id);
    }
  }, [params.id]);

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="md:mx-6 md:p-12">
          <h1 className="mb-12 mt-1 pb-1 text-xl font-semibold text-center">Agenda Cita</h1>
          {data && (
            <div>
            <img className="w-40 h-42 rounded-t-lg" src={data.image} alt="Sunset in the mountains" />
              <h1>{data.name}</h1>
              <h1>{data.lastName}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
