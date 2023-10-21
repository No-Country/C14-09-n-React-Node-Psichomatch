import React from "react";
import imgHero from "../assets/Images/img-hero.png";
import { ButtonLilacSlim } from "./Buttons";

const Hero = () => {
  return (
    <div className="flex flex-col my-6 lg:flex-row mx-8 sm:mx-12 md:mx-16 lg:mx-24 xl:mx-32 gap-12 md:gap-4">
      <div className="flex justify-between flex-col gap-6">
        <h1 className="text-Gray-dark max-w-xl text-4xl lg:text-5xl leading-[3rem] lg:leading-[4rem] font-semibold">
          Encuentra apoyo psicológico con facilidad, en cualquier momento y
          lugar.
        </h1>
        <p className="text-black text-xl md:text-2xl mb-5">
          Cultiva tu bienestar emocional
        </p>
        <div className="flex justify-center md:justify-start">
          <ButtonLilacSlim additionalClasses="w-[384px]" text={"Encontrar un psicólogo"} />
        </div>
      </div>
      <div className="flex justify-center items-center lg:flex-1">
        <img
          src={imgHero}
          alt="Relaxed Woman"
          className="max-w-full h-auto bg-contain bg-no-repeat lg:h-[377px] lg:w-[565px]"
        />
      </div>
    </div>
  );
};

export default Hero;
