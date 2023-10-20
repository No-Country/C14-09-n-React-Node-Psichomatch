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
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              src={WomenImg}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black">
              Por qué elegir Psycomatch
            </h3>
            <div className="grid sm:grid-cols-1 xl:col-span-2">
              {lists.map((list) => (
                <div key={list.title}  className="flex gap-6 items-start">
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
          </div>
        </div>
      </div>
    </section>
  );
};
