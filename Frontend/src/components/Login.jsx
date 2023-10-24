import React from "react";
import { useForm } from "react-hook-form";
import { loginPatient } from "../api/patient_api";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../assets/Icons/google.svg";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // Use useNavigate here


  const onSubmit = async (data) => {
    const response = await loginPatient(data);
    if(response.data.tokenSession) {
      const token = response.data.tokenSession;
      localStorage.setItem("token", token)
      navigate('/dashboard')
    }
  };

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="md:mx-6 md:p-12">
          <div className="text-center">
            <h1 className="mb-12 mt-1 pb-1 text-xl font-semibold">
              Inicio de Sesión
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="text-lg font-medium">Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                type="email"
                {...register("patientEmail", {
                  required: {
                    value: true,
                    message: "El email es requerido",
                  },

                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Email no válido",
                  },
                })}
              />
              {errors.patientEmail && (
                <span className="text-rose-600 text-sm">
                  {errors.patientEmail.message}
                </span>
              )}
            </div>
            <div>
              <label className="text-lg font-medium">Contraseña</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "La contraseña es requerida",
                  },

                  minLength: {
                    value: 6,
                    message: "La contraseña debe ser mayor a 4 caracteres",
                  },
                })}
              />
              {errors.password && (
                <span className="text-rose-600 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="mt-4">
              <input type="checkbox" />
              <label className="ml-3">Recordar contraseña</label>
            </div>
            <div className="mt-8 flex flex-col gap-y-4 text-center">
              <button
                type="submit"
                className="py-4 rounded-xl bg-violet-500 text-white text-lg font-bold"
              >
                Iniciar Sesion
              </button>
              <a
                className="flex items-center justify-center shadow appearance-none gap-2 border-4 border-gray-100"
                href="http://localhost:3001/auth/google"
              >
                
                <img src={googleIcon} alt="" />
                Iniciar Sesión con Google
              </a>
              <Link to="/recuperarclave">¿Olvidaste tu contraseña?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;