import React from "react";
import Hero from "../Components/Hero"
import { FeaturesCard } from "../Components/FeaturesCard";
import { TeamCard } from "../Components/TeamCard";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturesCard />
      <TeamCard />
    </div>
  );
};
