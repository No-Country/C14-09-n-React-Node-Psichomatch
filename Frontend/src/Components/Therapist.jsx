import React, { useEffect, useState }  from 'react';


const Therapist = () => {

return(
<div className="flex w-full h-screen items-center justify-center">
<div className="w-full flex items-center justify-center lg:w-1/2">
<div className="md:mx-6 md:p-12">
<h1 className="mb-12 mt-1 pb-1 text-xl font-semibold">Psicólogo Disponible</h1>
<div className="text-center">
 <h3 className="mb-12 mt-1 pb-1 text-xl font-semibold">
       Irina Reyes Gonzalez
  </h3>
   <h3 className="mb-12 mt-1 pb-1 text-xl">
       Cedula: <span className="font-semibold">12188270</span>
  </h3>
  <h3 className="mb-12 mt-1 pb-1 text-xl">
       Pais: <span className="font-semibold">México</span>
  </h3>
  <h3 className="mb-12 mt-1 pb-1 text-xl font-semibold">
      Angelica Belén
  </h3>
   <h3 className="mb-12 mt-1 pb-1 text-xl">
       Cedula: <span className="font-semibold">713213</span>
  </h3>
  <h3 className="mb-12 mt-1 pb-1 text-xl">
       Pais: <span className="font-semibold">Venezuela</span>
  </h3>
  </div>
</div>
</div>
</div>
)

}

export default Therapist;