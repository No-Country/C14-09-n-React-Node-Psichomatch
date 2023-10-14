import React from 'react';
import { useForm } from 'react-hook-form';
import {recoverPass} from '../api/patient_api';

const recoverPassword = () => {
  	return(
      <div className="flex w-full h-screen items-center justify-center">
       <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="md:mx-6 md:p-12">
         	<div className="text-center">         
                     <h1 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Recuperar Contraseña
                      </h1>
                    </div>
                    <form onSubmit>
                       <label className="text-lg font-medium">Email</label>
                       <input
                         type="email"
                         name="email"

                       />
                      <button>Recuperar Contraseña</button>
                    </form>
             </div>
             </div>
             </div>
    )
}

export default recoverPassword;
