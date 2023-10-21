import React from "react";
import Hero from "../Components/Hero";
import { FeaturesCard } from "../Components/FeaturesCard";
import { TeamSection } from "../Components/TeamSection";
import { SectionWhyPsichoMatch } from "../Components/SectionWhyPsichoMatch";
import { SectionFAQs } from "../Components/SectionFAQs";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturesCard />
      <TeamSection />
      <SectionWhyPsichoMatch />
      <SectionFAQs />
    </div>
  );
};
