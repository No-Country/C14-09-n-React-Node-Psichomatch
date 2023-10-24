import React from "react";
import IconOne from "../assets/Icons/featureSectionOne.svg";
import IconTwo from "../assets/Icons/featureSectionTwo.svg";
import IconThree from "../assets/Icons/featureSectionThree.svg";

const features = [
  {
    name: "Encuentra tu especialista",
    description:
      "Explora nuestra lista de especialistas y elige el más adecuado.",
    imgHref: IconOne,
  },
  {
    name: "Elige la fecha",
    description:
      "Selecciona una fecha y hora conveniente en nuestra plataforma en línea.",
    imgHref: IconTwo,
  },
  {
    name: "Acude a tu cita ",
    description: "En persona o virtual según la fecha y hora acordadas.",
    imgHref: IconThree,
  },
];

export const FeaturesCard = () => {
  return (
    <div className="mx-auto my-24 max-w-2xl lg:max-w-none">
      <h2 className="text-black font-semibold leading-8 text-2xl text-center">Simples pasos para obtener apoyo:  </h2>
      <div className="mt-16 ml-[129px] grid grid-cols-1 gap-[25px] sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="flex flex-col gap-6 w-64">
            <div className="ml-10">
              <img
                src={feature.imgHref}
                className="rounded-full bg-cover h-24 w-24"
              />
            </div>
            <p className="text-lg text-black font-semibold mt-1">{feature.name}</p>
            <p className="text-lg font-medium leading-6 text-black">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
