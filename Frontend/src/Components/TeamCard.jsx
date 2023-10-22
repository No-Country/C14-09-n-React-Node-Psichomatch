import React from "react";
import TeamImg from "../assets/Images/team.png";
import IconTeamOne from "../assets/Icons/iconTeamOne.svg";
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

export const TeamCard = () => {
  return (
    <div className="bg-[#f9f6ff] py-12">
      <h2 className="text-2xl text-center font-bold text-black leading-8 sm:text-4xl">
        Meet our leadership
      </h2>
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <img src={TeamImg} alt="" />
        </div>
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-16 xl:col-span-2">
          {team.map((teamItem) => (
            <div key={teamItem.name}>
              <div className="flex items-center gap-y-6">
                <img src={teamItem.imageUrl} alt="" />
                <div>
                  <p className="text-2xl font-medium leading-8 tracking-tight text-gray-900">
                    {teamItem.name}
                  </p>
                  <ul>
                    {teamItem.features.map((feature, index) => (
                      <li key={index} className="list-disc">
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
  );
};
