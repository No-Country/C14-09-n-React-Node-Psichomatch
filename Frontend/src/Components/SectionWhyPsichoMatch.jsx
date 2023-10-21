import React from "react";
import WomenImg from "../assets/Images/women.png";
import iconOne from "../assets/Icons/iconWhyPM-One.svg";
import iconTwo from "../assets/Icons/iconWhyPM-Two.svg";
import iconThree from "../assets/Icons/iconWhyPM-Three.svg";

const lists = [
  {
    title: "Privacidad y Confidencialidad:",
    imageUrl: iconOne,
    description:
      "Estrictos protocolos de confidencialidad y seguridad de datos para proteger tu privacidad.",
  },
  {
    title: "Evaluación Profesional:",
    imageUrl: iconTwo,
    description:
      "Selección rigurosa de psicólogos para asegurar terapeutas altamente calificados y atención de alta calidad.",
  },
  {
    title: "Atención y soporte:",
    imageUrl: iconThree,
    description:
      "Tenemos un centro de atención para apoyarte. ¡Nos encantará ayudarte!",
  },
];

export const SectionWhyPsichoMatch = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

          <div>
            <h3 className="text-2xl font-bold text-black ml-[90px] mb-12">
              Por qué elegir Psycomatch
            </h3>
            <div className="grid gap-6 sm:grid-cols-1 xl:col-span-2">
              {lists.map((list) => (
                <div key={list.title} className="flex items-start">
                  <img src={list.imageUrl} alt="" />
                  <div>
                    <p className="text-2xl font-medium text-black ml-6">
                      {list.title}
                    </p>
                    <p className="text-xl font-medium text-black ml-6">
                      {list.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center mt-12">
              <button className="text-white bg-Gray-dark text-2xl font-medium py-4 px-6 rounded-[32px] w-[279px] hover:bg-[#4f4f4f]">
                Agendar ahora
              </button>
            </div>
          </div>
          <div className="h-[402px] w-[577px] ">
            <img src={WomenImg} className=" h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
