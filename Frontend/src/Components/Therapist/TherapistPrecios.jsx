import React, { useState } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

function TherapistPrecios({ therapist }) {

  const [porcentaje, setPorcentaje] = useState(0.0)
  const [precio, setPrecio] = useState(0.0)

  const handlePorcentajeChange = (e) => {
    setPorcentaje(e.target.value);
  }

  const handlePrecioChange = (e) => {
    setPrecio(e.target.value);
  }

  const changePrice = async (e) => {
    e.preventDefault()
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
    
      const raw = JSON.stringify({
        "price": precio
      });
    
      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      alert(therapist.id)
      const response = await fetch(`http://localhost:3001/therapist/updatePrice/${therapist.id}`, requestOptions);
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: 'Se actualizó el precio correctamente.',
        icon: "success",
      });
    } catch (error) {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: 'Hubo un error al actualizar el precio',
        icon: "error",
      });
    } 
  }

  const changePricePercent = async (e) => {
    e.preventDefault()

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({
      "porcent": porcentaje
    });
  
    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    try {
      const response = await fetch(`http://localhost:3001/therapist/updatePricePercent/${therapist.id}`, requestOptions);
      const MySwal = withReactContent(Swal);

      const result = await response.text();

      MySwal.fire({
        title: 'Se actualizó el precio correctamente.',
        icon: "success",
      });
    } catch (error) {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: 'Hubo un error al actualizar el precio',
        icon: "error",
      });
    }
  }

  return (
    <section className="flex justify-center items-center flex-col">

      <article className="my-3">
        <h2 className="text-2xl font-bold text-start">Precios</h2>
        <p>Da un precio adecuado a tu servicio.</p>
        <hr className="my-3 border-zinc-800 dark:border-zinc-600" />
      </article>


      <form className="flex my-2" onSubmit={(e) => changePrice(e)}>
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

      <form className="flex my-2" onSubmit={(e) => { changePricePercent(e) }}>
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
