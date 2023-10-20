import React from "react";
import WomenImg from "../assets/Images/women.png";
import iconOne from "../assets/Icons/iconWhyPM-One.svg";
import iconTwo from "../assets/Icons/iconWhyPM-Two.svg";
import iconThree from "../assets/Icons/iconWhyPM-Three.svg";


const list = [
  {
    name: "Educación formal",
    imageUrl: iconOne,
    description: ""
  },
  {
    name: "Experiencia",
    imageUrl: iconTwo,
    
  },
  {
    name: "Especialización",
    imageUrl: iconThree,
    descripcion: ""
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

          <div className="lg:py-24">
            <h3 className="text-2xl font-bold text-black">
              Por qué elegir Psycomatch
            </h3>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>
            <img
              src={IconOne}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
