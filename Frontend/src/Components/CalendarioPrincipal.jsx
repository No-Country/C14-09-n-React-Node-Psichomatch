import React from "react";
import iconCalendar from "../assets/Icons/iconCalendar.svg";

function CalendarioPrincipal() {
  return (
    <section className="flex w-full h-screen items-center justify-center">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="md:mx-6 md:p-12">
          <div className="flex items-center m-20">
            <div>
              <h1 className="mb-12 mt-1 mb-2 text-xl font-bold">
                Mi Calendario
              </h1>
              <p className="text-black text-lg font-medium leading-10">
                En este espacio encontrarás tu historial de citas.
              </p>
            </div>
            <div className="bg-violet-50 rounded-full p-12">
              <img src={iconCalendar} alt="Calendario" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalendarioPrincipal;
