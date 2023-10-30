import React, { useState } from "react";
import { ButtonLilacSlim } from "../Buttons";

function TherapistPerfil({ therapist }) {

    const [image, setImage] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setImage(e.target.result);
          };
          reader.readAsDataURL(file);
        } else {
          setImage(null);
        }
      };

  return (
    <section className="my-2">
      <article className="my-5">
        <h2 className="text-2xl font-bold text-start">Tu Perfil</h2>
        <p className="my-3">
          Aquí podrás editar todo lo relacionado con tu perfil para que pueda
          ser más completo, y llegar a más personas.
        </p>
      </article>

      <section className="my-5 py-5">
        <h3 className="text-2xl font-bold text-start">Imagen de Perfil</h3>
        <hr className="my-4 border-zinc-200 dark:border-zinc-600" />
      </section>

      <label htmlFor="image" className="cursor-pointer">
        <div className="w-40 h-40 mx-auto bg-violet-100 rounded-full flex items-center justify-center">
          {therapist.image ? (
            <img
              src={therapist.image}
              alt="Tu Foto"
              className="w-full h-full rounded-full"
            />
          ) : (
            <span className="text-lg font-bold">Tu Foto</span>
          )}
        </div>
        <div className="overlay">+</div>
      </label>
      <input
        type="file"
        id="image"
        name="image"
        className="hidden"
        onChange={handleImageChange}
      />

      <section className="my-5 py-5">
        <h3 className="text-2xl font-bold text-start">Información personal:</h3>
        <hr className="my-3 border-zinc-200 dark:border-zinc-600" />
      </section>

      <section className="text-start">
        <p> Agrega una descripción adecuada a tu trabajo, mientras más específica sea; más clientes podrás conseguir.</p>
        
        <article className="my-3">
        <label className="mt-10" htmlFor="description">
            Descripción:
            </label>
            <br></br>
            <textarea 
              className="rounded border border-gray-700 p-2 w-96"
              id="description"
              name="description"
              placeholder="Ingrese su descripcion"
            />
            <br/>
            <label className="mt-10" htmlFor="price">
              Número
            </label>
            <br/>
            <input
              className="rounded border border-gray-700 p-2 w-96"
              type="number"
              id="price"
              name="price"
              placeholder="Ingrese su precio"
            />
        </article>
      </section>

      <section className="my-5 py-5">
        <h3 className="text-2xl font-bold text-start">Sección Crítica:</h3>
        <hr className="my-4 border-zinc-200 dark:border-zinc-600" />
      </section>


      <section className="text-center">
        <p className="my-3">
          Aquí, si es que deseas puedes eliminar tu cuenta de PsicoMatch, <br />
          ten en cuenta que tu cuenta desaparecerá automáticamente de la
          aplicación.
        </p>

        <button
          className={`w-[400px] text-Gray-dark text-xl font-semibold bg-[#FF0000] py-2 px-3 rounded-[48px] hover:bg-Purple`}
        >
          Eliminar mi cuenta
        </button>
      </section>
    </section>
  );
}

export default TherapistPerfil;
