import React, { useState } from "react";

function TherapistPrecios() {

  const [porcentaje, setPorcentaje] = useState(0.0)
  const [precio, setPrecio] = useState(0.0)

  const handlePorcentajeChange = (e) => {
    setPorcentaje(e.target.value);
  }

  const handlePrecioChange = (e) => {
    setPrecio(e.target.value);
  }

  return (
    <section className="flex justify-center items-center flex-col">

      <article className="my-3">
        <h2 className="text-2xl font-bold text-start">Precios</h2>
        <p>Da un precio adecuado a tu servicio.</p>
        <hr className="my-3 border-zinc-800 dark:border-zinc-600" />
      </article>


      <form className="flex my-2">
        <input
          className="rounded mx-2 border border-gray-700 p-2 w-30"
          type="number"
          id="price"
          name="price"
          value={precio}
          onChange={handlePrecioChange}
          placeholder="Ingrese un precio"
        />
        <button
          className={`w-[400px] text-Gray-dark text-xl font-semibold bg-[#CFBFFF] py-1 px-6 rounded-[48px] hover:bg-Purple`}
        >
          Actualizar Precio
        </button>
      </form>

      <form className="flex my-2">
        <input
          className="rounded mx-2 border border-gray-700 p-2 w-30"
          type="number"
          id="price"
          name="price"
          value={porcentaje}
          onChange={handlePorcentajeChange}
          placeholder="Ingrese un porcentaje"
        />
        <button
          className={`w-[400px] text-Gray-dark text-xl font-semibold bg-[#CFBFFF] py-1 px-6 rounded-[48px] hover:bg-Purple`}
        >
          Actualizar Precio en {porcentaje}%
        </button>
      </form>
      <label>Debe ser un porcentaje entre 0 y 100%</label>
    </section>
  );
}

export default TherapistPrecios;
