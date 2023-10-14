import imgHero from "../assets/img-hero.png";

export const Hero = () => {
  return (
    <div className="hero flex gap-4 flex-col my-6 mx-4 lg:flex-row lg:justify-between lg:my-12 lg:mx-20">
      <div className="content max-w-lg flex justify-between flex-col gap-6 lg:flex-1">
        <h1 className="text-Gray-dark text-5xl font-semibold">
          Encuentra apoyo psicológico con facilidad, en cualquier momento y
          lugar.
        </h1>
        <p className="text-black text-2xl mb-5">Cultiva tu bienestar emocional</p>
        <button className="text-Gray-dark text-2xl font-semibold bg-Purple py-4 px-6 rounded-[32px] w-[384px] hover:bg-Purple-ligth">
          Agenda una cita
        </button>
      </div>
      <div className="img max-w-xl flex justify-center items-center lg:flex-1">
        <img
          src={imgHero}
          alt="Relaxed Woman"
          className="bg-contain bg-no-repeat"
        />
      </div>
    </div>
  );
};

