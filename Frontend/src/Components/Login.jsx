import React from 'react';

const Login = () => {
  return(
      <div className="flex w-full h-screen items-center justify-center">
       <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="md:mx-6 md:p-12">
         	<div className="text-center">         
                     <h1 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Inicio de Sesión
                      </h1>
                    </div>
         <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
         <div className="mb-4">
         	<label className="text-lg font-medium">Email</label>
         	<input 
               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
               type="email"

         	/>
         </div>
            <div>
         	<label className="text-lg font-medium">Contraseña</label>
         	<input 
               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
               type="password"
         	/>
         </div>
         <div class="mt-4">
          <input 

          type="checkbox" 

          />
          <label class="ml-3">Recordar contraseña</label>
         </div>
         <div className="mt-8 flex flex-col gap-y-4 text-center">
         <button className="py-4 rounded-xl bg-violet-500 text-white text-lg font-bold">Iniciar Sesion</button>
         <button className="flex items-center justify-center gap-2 border-2 border-gray-100">
         	<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>
         Iniciar Sesión con Google
        </button>
        <button className="flex items-center justify-center gap-2 border-2 border-gray-100">
       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 29 29"><path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z"/></svg>
         Iniciar Sesión con Teléfono
        </button>
        <a href="" className="">¿Olvidaste tu contraseña?</a>
         </div>
     </form>
 </div>
     </div>
      </div>
  	)
}

export default Login;