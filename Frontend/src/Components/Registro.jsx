import React from 'react';
import { useForm } from 'react-hook-form';
import {registerPatient} from '../api/patient_api'

const Registro = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const response = await registerPatient(data);
  }

  return(
      <div className="flex w-full h-screen items-center justify-center">
       <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="md:mx-6 md:p-12">
         	<div className="text-center">         
                     <h1 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Registro de nuevo Paciente
                      </h1>
                    </div>
         <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
         <div className="mb-4">
          <label className="text-lg font-medium">Nombre</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            type="text"
            {...register("name", {required: true })}
            
          />
         </div>
          <div className="mb-4">
          <label className="text-lg font-medium">Apellido</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            type="text"
            {...register("lastName", {required: true })}
            
          />
         </div>
          <div className="mb-4">
          <label className="text-lg font-medium">Teléfono</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            type="text"
            {...register("phone", {required: true })}
            
          />
         </div>
         <div className="mb-4">
         	<label className="text-lg font-medium">Email</label>
         	<input 
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
               type="email"
              {...register("email", {required: true })}

         	/>
         </div>
            <div>
         	<label className="text-lg font-medium">Contraseña</label>
         	<input 
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
               type="password"
               {...register("password", {required: true })}
         	/>
         </div>
         <div className="mt-4">
          <input 

          type="checkbox" 

          />
          <label className="ml-3">Recordar contraseña</label>
         </div>
         <div className="mt-8 flex flex-col gap-y-4 text-center">
         <button className="py-4 rounded-xl bg-violet-500 text-white text-lg font-bold">Crear Cuenta</button>
         <a href="">¿Ya tienes cuenta?</a>
         </div>
     </form>
 </div>
     </div>
      </div>
  	)
}

export default Registro;

