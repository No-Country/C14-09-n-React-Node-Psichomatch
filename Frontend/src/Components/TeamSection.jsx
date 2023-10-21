import React from "react";
import TeamImg from "../assets/Images/team.png";
import IconTeamOne from "../HomePage/./";
import IconTeamTwo from "../assets/Icons/iconTeamTwo.svg";
import IconTeamThree from "../assets/Icons/iconTeamThree.svg";

const team = [
  {
    name: "Educación formal",
    imageUrl: IconTeamOne,
    features: [
      "Grado en psicología.",
      "Posgrado en el ámbito de la psicoterapia.",
      "Cumplimiento de los requisitos para la práctica profesional.",
    ],
  },
  {
    name: "Experiencia",
    imageUrl: IconTeamTwo,
    features: [
      "Mínimo 5 años como psicoterapeuta.",
      "Uso de diversas metodologías y enfoques terapéuticos.",
    ],
  },
  {
    name: "Especialización",
    imageUrl: IconTeamThree,
    features: ["Diferentes áreas de especialidad de tu interés."],
  },
];

export const TeamSection = () => {
  return (
    <div className="bg-[#F9F6FF]">
      <div className="lg:ml-32 lg:pt-12 lg:pb-16">
        <h3 className="text-2xl text-center font-bold text-black mb-10 mt-10">
          Nuestro equipo de psicólogos
        </h3>
        <div className="mx-auto grid gap-x-20 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <img src={TeamImg} alt="" />
          </div>
          <div className="grid sm:grid-cols-1 xl:col-span-2">
            {team.map((teamItem) => (
              <div key={teamItem.name}>
                <div className="flex gap-6 items-start">
                  <img src={teamItem.imageUrl} alt="" />
                  <div>
                    <p className="text-2xl font-medium text-black">
                      {teamItem.name}
                    </p>
                    <ul>
                      {teamItem.features.map((feature, index) => (
                        <li
                          key={index}
                          className="list-disc text-xl font-medium text-black ml-6"
                        >
                          {feature}
                        </li>
                      ))}
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
