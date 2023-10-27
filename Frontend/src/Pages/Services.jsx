import React from "react";
import { ButtonLilacSlim } from "../Components/Buttons";
import iconCognitiveBehavioral from "../assets/Icons/iconCognitiveBehavioral.svg";
import iconInteractive from "../assets/Icons/iconInteractive.svg";
import iconPsychoanalysis from "../assets/Icons/iconPsychoanalysis.svg";
import iconHumanist from "../assets/Icons/iconHumanist.svg";
import iconSystemic from "../assets/Icons/iconSystemic.svg";
import iconGestalt from "../assets/Icons/iconGestalt.svg";

const services = [
  {
    name: "Cognitivo conductual",
    imageSrc: iconCognitiveBehavioral,
  },
  {
    name: "Interactiva",
    imageSrc: iconInteractive,
  },
  {
    name: "Psicoanálisis",
    imageSrc: iconPsychoanalysis,
  },
  {
    name: "Humanista",
    imageSrc: iconHumanist,
  },
  {
    name: "Sistémica",
    imageSrc: iconSystemic,
  },
  {
    name: "Gestalt",
    imageSrc: iconGestalt,
  },
];

export const Services = () => {
  return (
    <div className="mx-auto px-2 sm:px-6 pt-16 lg:pt-24 xl:pt-[136px]">
      <div className="flex justify-center flex-wrap gap-x-20 gap-y-12">
        {services.map((service) => (
          <div key={service.name} className="flex justify-start flex-col">
            <div className="flex items-center justify-center w-[266px] h-[328px] overflow-hidden rounded-2xl bg-[#F9F6FF]">
              <img src={service.imageSrc} alt={service.name} className="" />
            </div>
            <h3 className="text-2xl text-black font-semibold w-[160px] px-[66px] mt-5">
              {service.name}
            </h3>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center my-20 lg:my-24">
        <ButtonLilacSlim
          text="Encontrar un psicólogo"
          additionalClasses="w-[384px]"
        />
      </div>
    </div>
  );
};
