import React from "react";

export const SectionFAQ = () => {
  return (
    <div className="mx-28 my-12">
      <h3 className="text-2xl text-center font-bold text-black my-8">Preguntas frecuentes</h3>
      <div className="border-2 border-Gray-dark rounded-2xl p-8">
        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between text-gray-900">
            <h3 className="text-lg font-semibold text-black">
              ¿Cómo puedo agendar una cita médica en línea?
            </h3>

            <span className="relative h-6 w-6 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="text-black font-base font-medium">
            Puede agendar una cita médica en línea visitando nuestro sitio web y
            siguiendo los pasos indicados en la sección de "Citas" o "Agendar
            Cita". Allí encontrará un formulario que debe completar con la
            información requerida.
          </p>
        </details>
      </div>
    </div>
  );
};
