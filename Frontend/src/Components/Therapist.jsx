import React, { useEffect, useState }  from 'react';
import { GetTherapist } from "../api/therapist_api";

const Therapist = () => {

const [therapists, setTherapist] = useState([])

useEffect(() => {
 loadTherapist()
}, [])


const loadTherapist = async () => {
   const response = await GetTherapist()
   setTherapist(response)
   console.log(response.data.therapists)
}

return(
<div className="flex w-full h-screen items-center justify-center">
<div className="w-full flex items-center justify-center lg:w-1/2">
<div className="md:mx-6 md:p-12">
<h1 className="mb-12 mt-1 pb-1 text-xl font-semibold">Terapueta Disponible</h1>
<div className="text-center">
  </div>
</div>
</div>
</div>
)

}

export default Therapist;