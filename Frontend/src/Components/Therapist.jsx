import React, { useEffect, useState }  from 'react';
import { GetTherapist } from "../api/therapist_api";
import { Link } from 'react-router-dom';

const Therapist = () => {

const [therapists, setTherapist] = useState([])

useEffect(() => {
 loadTherapist()
}, [])


const loadTherapist = async () => {
   const response = await GetTherapist()
   const data = response.data.therapists
   setTherapist(data)
   
}

return(
<div className="flex w-full h-screen items-center justify-center">
  <div className="w-full flex items-center justify-center lg:w-1/2">
    <div className="md:mx-6 md:p-12">
      <h1 className="mb-12 mt-1 pb-1 text-xl font-semibold text-center">Terapeuta Disponible</h1>
      <div className="text-center">
        <div className="flex flex-wrap">
          {therapists.map(therapist => (
            <div className="max-w-sm rounded-lg overflow-hidden shadow-xl m-2" key={therapist.id}>
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img className="w-40 h-42 rounded-t-lg" src={therapist.image} alt="Sunset in the mountains" />
              </div>
              <div className="px-6 py-4">
                <div className="flex flex-wrap justify-center mb-4">
                  <h1>{therapist.name}</h1>
                  <h1>{therapist.lastName}</h1>
                </div>
                <h1><span className="font-semibold">Precio:</span> ${therapist.price}</h1>
                <Link to="/agendarcita"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4">
                  Agendar Cita
                </button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

)

}

export default Therapist;