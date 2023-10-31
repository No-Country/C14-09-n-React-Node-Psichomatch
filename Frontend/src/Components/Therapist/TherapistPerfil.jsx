import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getCategories } from "../../redux/actions/category";
import { getCountries } from "../../redux/actions/country";
import axios from "axios";
import { getTherapistById, updateTherapist } from "../../redux/actions/therapist";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Agenda from "../Agenda";

function TherapistPerfil() {

  const { id } = useParams();
  const therapist = useSelector((state) => state.therapist.therapist);
  const updated = useSelector((state) => state.therapist.updated);
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.countries);
  const categories = useSelector((state) => state.category.categories);
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [CategoryId, setCategoryId] = useState("");
  const [CountryId, setCountryId] = useState("");
  const [image, setImage] = useState("");
  const [PlanId, setPlanId] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [description, setDescription] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  const handleCountryChange = (country) => {
    setCountryId(country);
  };

  const handleCategoryChange = (category) => {
    setCategoryId(category);
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getCountries());
    dispatch(getTherapistById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (therapist) {
      const {
        name,
        lastName,
        image,
        price,
        description,
        adress,
        CategoryId,
        CountryId,
        phone,
        linkedIn,
        email,
        PlanId,
      } = therapist;
      setName(name);
      setLastname(lastName);
      setAdress(adress);
      setPhone(phone);
      setCategoryId(CategoryId);
      setCountryId(CountryId);
      setDescription(description);
      setImage(image);
      setPrice(price);
      setPlanId(PlanId);
      setLinkedIn(linkedIn);
      setEmail(email);
    }
  }, [therapist]);

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

  const uploadImage = async (image) => {
    const preset_key = "compumundo";
    const cloud_name = "dpqjfpdt0";
    const file = image;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    await axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => setImage(res.data.secure_url))
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      image &&
      description &&
      adress &&
      CategoryId &&
      CountryId &&
      phone &&
      linkedIn &&
      email &&
      PlanId
    ) {
      try {
        if (image !== therapist.image) {
          await uploadImage(image);
        }

        // Capturamos el resultado del dispatch en una variable
        const updatedResult = await dispatch(
          updateTherapist({
            id,
            name: name,
            lastName: lastName,
            image,
            price: Number(price),
            description,
            adress,
            CategoryId,
            CountryId,
            phone,
            linkedIn,
            email,
            PlanId,
          })
        );

        if (updatedResult) {
          // Puedes usar updatedResult en este punto
          console.log(updatedResult);

          const MySwal = withReactContent(Swal);
          MySwal.fire({
            title: <p>Psicólogo actualizado Exitosamente</p>,
            icon: "success",
          });
        } else {
          const MySwal = withReactContent(Swal);
          MySwal.fire({
            title: <p>Llena todos los campos</p>,
            icon: "error",
          });
        }
      } catch (error) {
        console.error(error.message);
      }
    } else {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: <p>Llena todos los campos</p>,
        icon: "error",
      });
    }
  };

  return (
<div className="w-full p-12">
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <h1 className="text-center font-bold text-3xl">Perfil Psicólogo</h1>
        <div className="flex items-center ml-56">
          <p className="bg-violet-100 rounded-full w-20 h-20 flex items-center justify-center">
            1
          </p>
          <p className="ml-2 font-bold">Paso 1 - Elige un plan</p>
        </div>
        <div className="flex justify-center items-center ">
          <div className=" bg-violet-100 rounded mr-5 w-80 p-10">
            <div className="grid justify-items-center">
              <svg
                width="116"
                height="115"
                viewBox="0 0 116 115"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_401_881)">
                  <path
                    d="M77.0674 10.7812L58.9424 0.449189C57.8549 -0.179723 56.4955 -0.179723 55.3174 0.449189L37.1924 10.7812C36.1049 11.4102 35.3799 12.5781 35.3799 13.9258V34.5902C35.3799 35.848 36.1049 37.1058 37.1924 37.7347L55.3174 48.0668C56.4049 48.6957 57.7643 48.6957 58.9424 48.0668L77.0674 37.7347C78.1549 37.1058 78.8799 35.9378 78.8799 34.5902V13.9258C78.8799 12.6679 78.1549 11.4102 77.0674 10.7812Z"
                    fill="#B0A0DF"
                  />
                  <path
                    d="M77.0674 77.2662L58.9424 66.9342C57.8549 66.3052 56.4955 66.3052 55.3174 66.9342L37.1924 77.2662C36.1049 77.8951 35.3799 79.0631 35.3799 80.4108V101.075C35.3799 102.333 36.1049 103.591 37.1924 104.22L55.3174 114.552C56.4049 115.181 57.7643 115.181 58.9424 114.552L77.0674 104.22C78.1549 103.591 78.8799 102.423 78.8799 101.075V80.4108C78.8799 79.1529 78.1549 77.8951 77.0674 77.2662Z"
                    fill="#B0A0DF"
                  />
                  <path
                    d="M113.317 44.0231L95.1924 33.6911C94.1049 33.0622 92.7455 33.0622 91.5674 33.6911L73.4424 44.0231C72.3549 44.6521 71.6299 45.82 71.6299 47.1677V67.8321C71.6299 69.0899 72.3549 70.3477 73.4424 70.9766L91.5674 81.3087C92.6549 81.9376 94.0143 81.9376 95.1924 81.3087L113.317 70.9766C114.405 70.3477 115.13 69.1797 115.13 67.8321V47.1677C115.13 45.9098 114.405 44.6521 113.317 44.0231Z"
                    fill="#B0A0DF"
                  />
                  <path
                    d="M40.8174 44.0231L22.6924 33.6911C21.6049 33.0622 20.2455 33.0622 19.0674 33.6911L0.942383 44.0231C-0.145117 44.6521 -0.870117 45.82 -0.870117 47.1677V67.8321C-0.870117 69.0899 -0.145117 70.3477 0.942383 70.9766L19.0674 81.3087C20.1549 81.9376 21.5143 81.9376 22.6924 81.3087L40.8174 70.9766C41.9049 70.3477 42.6299 69.1797 42.6299 67.8321V47.1677C42.6299 45.9098 41.9049 44.6521 40.8174 44.0231Z"
                    fill="#B0A0DF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_401_881">
                    <rect width="116" height="115" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="p-6">
                <h1 className="text-xl font-bold">$29.99</h1>
                <span>Dis/mes</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="font-bold">Plan Basico: </h2>
              <ul className="list-disc">
                <li>Perfil en el directorio de psicologos.</li>
                <li>Hasta 10 citas programdas al mes.</li>
                <li>
                  Recordatorios de citas automaticas por correo electronico.
                </li>
                <li>Soporte por correo electronico</li>
              </ul>
            </div>
            <div className="mt-5" key={uuidv4()}>
              <input
                className="mr-2"
                type="radio"
                value={1}
                checked={PlanId === 1}
                onChange={() => setPlanId(1)}
              />
              <label>{"Selecciona este plan"}</label>
            </div>
          </div>

          <div>
            <div className="bg-lime-100 rounded mr-5 w-80 p-10">
              <div className="grid justify-items-center">
                <svg
                  width="116"
                  height="115"
                  viewBox="0 0 116 115"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M57.9502 10.3635C55.3086 10.3814 52.8662 11.7605 51.4887 13.9977L38.0849 35.6453L16.8105 23.691H16.7969C13.8063 22.0334 10.4078 22.6354 8.16939 24.4996C5.93093 26.3639 4.73927 29.5938 5.86748 32.8013V32.8057V32.8192L21.4416 76.3444C22.5246 79.3632 25.4201 81.3936 28.6508 81.3846H87.3399C90.5707 81.3846 93.457 79.3676 94.5355 76.3444L110.11 32.8146L110.114 32.8191C110.119 32.8146 110.123 32.8101 110.128 32.8056C111.265 29.5892 110.064 26.3683 107.821 24.504C105.578 22.6353 102.162 22.0244 99.1667 23.6954L77.8969 35.6497L64.5024 14.0159C63.1158 11.7518 60.6327 10.3637 57.9593 10.3682L57.9638 10.3637L57.9502 10.3635ZM29.0001 86.6499C25.348 86.6499 22.3663 89.6192 22.3663 93.2399V98.0286C22.3663 101.649 25.3479 104.632 29.0001 104.632H86.9816C90.6337 104.632 93.6289 101.649 93.6289 98.0286V93.2399C93.6289 89.6193 90.6338 86.6499 86.9816 86.6499H29.0001Z"
                    fill="#BEDEBA"
                  />
                </svg>
                <div className="p-6">
                  <h1 className="text-xl font-bold">$59.99</h1>
                  <span>Dis/mes</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-bold">Plan Premium: </h2>
                <ul className="list-disc">
                  <li>Perfil destacado en el directorio de psicologos.</li>
                  <li>Hasta 30 citas programadas al mes.</li>
                  <li>
                    Recordatorios de citas automaticas por correo electronico y
                    SMS.
                  </li>
                  <li>
                    Posibilidad de recibir resenas y calificaciones de los
                    pacientes.
                  </li>
                  <li>
                    Soporte prioritario por correo electronico y chat en vivo
                  </li>
                </ul>
              </div>
              <div className="mt-5" key={uuidv4()}>
                <input
                  type="radio"
                  value={2}
                  checked={PlanId === 2}
                  onChange={() => setPlanId(2)}
                />
                <label>{"Selecciona este plan"}</label>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-blue-100 rounded w-80 p-10">
              <div className="grid justify-items-center">
                <svg
                  width="116"
                  height="115"
                  viewBox="0 0 116 115"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_401_876)">
                    <path
                      d="M21.7188 106.743H94.1504V23.3818H78.386V16.0281C78.4041 11.7515 74.9604 8.25217 70.6466 8.15775H45.4931C41.1205 8.21615 37.5771 11.6931 37.4683 16.0281V23.3953H21.7178L21.7188 106.743ZM42.6441 16.0275C42.7256 14.5092 43.9491 13.2963 45.4806 13.2199H70.6468C72.133 13.3098 73.2749 14.5542 73.2251 16.0275V23.3947H42.6441V16.0275Z"
                      fill="#A6B3FF"
                    />
                    <path
                      d="M101.962 23.4221V106.842C109.756 106.703 116 100.4 116 92.6739V37.6763C116 29.9407 109.765 23.6199 101.962 23.4497V23.4221Z"
                      fill="#A6B3FF"
                    />
                    <path
                      d="M13.9065 23.4221C6.10366 23.5703 -0.108603 29.9403 0.00043716 37.6763V92.6739C-0.0630009 100.378 6.14032 106.694 13.9065 106.842V23.4221Z"
                      fill="#A6B3FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_401_876">
                      <rect width="116" height="115" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="p-6">
                  <h1 className="text-xl font-bold">$99.99</h1>
                  <span>Dis/mes</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-bold">Plan Profesional: </h2>
                <ul className="list-disc">
                  <li>Perfil destacado en el directorio de psicologos.</li>
                  <li>Cantidad ilimitada de citas programadas al mes</li>
                  <li>
                    Recordatorios de citas automaticas por correo electronico y
                    SMS.
                  </li>
                  <li>
                    Posibilidad de recibir resenas y calificaciones de los
                    pacientes.
                  </li>
                  <li>
                    Acceso a herramientas de gestion de pacientes y
                    documentacion clinica en linea.
                  </li>
                  <li>
                    Soporte prioritario por correo electronico, chat en vivo y
                    asistencia telefonica
                  </li>
                </ul>
              </div>
              <div key={uuidv4()}>
                <input
                  type="radio"
                  value={3}
                  checked={PlanId === 3}
                  onChange={() => setPlanId(3)}
                />
                <label>{"Selecciona este plan"}</label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center ml-56">
          <p className="bg-violet-100 rounded-full w-20 h-20 flex items-center justify-center">
            2
          </p>
          <p className="ml-2 font-bold">Llena tus datos</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <label htmlFor="image" className="cursor-pointer">
              <div className="w-40 h-40 mx-auto bg-violet-100 rounded-full flex items-center justify-center">
                {image ? (
                  <img
                    src={image}
                    alt="Tu Foto"
                    className="w-full h-full rounded-full"
                  />
                ) : (
                  <span className="text-lg font-bold">Tu Foto</span>
                )}
              </div>
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
          {/* <div className="flex flex-col">
            <label className="mt-10" htmlFor="firstName">
              Nombre
            </label>
            <input
              className="rounded border border-gray-700 p-2 w-96"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="Ingrese su nombre"
            />
          </div> */}
          {/* <div className="flex flex-col">
            <label className="mt-10" htmlFor="lastName">
              Apellido
            </label>
            <input
              className="rounded border border-gray-700 p-2 w-96"
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
              name="lastName"
              placeholder="Ingrese su apellido"
            />
          </div> */}
          <div className="flex flex-col">
            <label className="mt-10" htmlFor="email">
              E-mail
            </label>
            <input
              className="rounded border border-gray-700 p-2 w-96"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Igrese su email"
            />
          </div>

          <div className="flex flex-col">
            <label className="mt-10" htmlFor="phone">
              Phone
            </label>
            <input
              className="rounded border border-gray-700 p-2 w-96"
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ingrese su telefono"
            />
          </div>

          <div className="flex flex-col">
            <label className="mt-10" htmlFor="linkedIn">
              LinkedIn
            </label>
            <input
              className="rounded border border-gray-700 p-2 w-96"
              type="text"
              id="linkedIn"
              name="linkedIn"
              value={linkedIn}
              onChange={(e) => setLinkedIn(e.target.value)}
              placeholder="Ingrese su linkedIn"
            />
          </div>

          {/* <div className="flex flex-col">
            <label className="mt-10" htmlFor="price">
              Precio
            </label>
            <input
              className="rounded border border-gray-700 p-2 w-96"
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Ingrese su precio"
            />
          </div> */}

          <div className="flex flex-col">
            <label className="mt-10" htmlFor="adress">
              Direccion
            </label>
            <textarea
              className="rounded border border-gray-700 p-2 w-96"
              id="adress"
              name="adress"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              placeholder="Ingrese su direccion"
            />
          </div>

          <div className="flex flex-col">
            <label className="mt-10" htmlFor="description">
              Descripción
            </label>
            <textarea
              className="rounded border border-gray-700 p-2 w-96"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ingrese su descripcion"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 mt-10 mx-auto gap-1">
          <p className="col-span-2 mb-5 font-bold">
            Elige la metodologia con la que trabajas
          </p>

          {categories?.map((category) => {
            return (
              <div key={category.id}>
                <input
                  type="radio"
                  value={category.id}
                  checked={CategoryId === category.id}
                  onChange={() => handleCategoryChange(category.id)}
                />
                <label>{category.name}</label>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 mt-10 mx-auto gap-1">
          <p className="col-span-2 mb-5 font-bold">
            Elige tu pais de residencia
          </p>

          {countries?.map((country) => {
            return (
              <div key={country.id}>
                <input
                  type="radio"
                  value={country.id}
                  checked={CountryId === country.id}
                  onChange={() => handleCountryChange(country.id)}
                />
                <label>{country.name}</label>
              </div>
            );
          })}
        </div>

        <button
          className="bg-violet-100 rounded-full w-48 py-2 mx-auto my-10"
          type="submit"
        >
          Actualizar perfil
        </button>
      </form>
      {/* <div className="flex flex-col mb-10">
        <div className="flex items-center ml-56">
          <p className="bg-violet-100 rounded-full w-20 h-20 flex items-center justify-center">
            4
          </p>
          <p className="ml-2 font-bold">Horario</p>
        </div>
        <div className="flex flex-col mx-auto mt-10">
          <p className="font-bold mb-5">
            Elige el horario en el que deseas atender pacientes
          </p>

          <Agenda therapistId={Number(id)} />
        </div>
      </div> */}
    </div>
    // <section className="my-2">
    //   <article className="my-5">
    //     <h2 className="text-2xl font-bold text-start">Tu Perfil</h2>
    //     <p className="my-3">
    //       Aquí podrás editar todo lo relacionado con tu perfil para que pueda
    //       ser más completo, y llegar a más personas.
    //     </p>
    //   </article>

    //   <section className="my-5 py-5">
    //     <h3 className="text-2xl font-bold text-start">Imagen de Perfil</h3>
    //     <hr className="my-4 border-zinc-200 dark:border-zinc-600" />
    //   </section>

    //   <label htmlFor="image" className="cursor-pointer">
    //     <div className="w-40 h-40 mx-auto bg-violet-100 rounded-full flex items-center justify-center">
    //       {therapist.image ? (
    //         <img
    //           src={therapist.image}
    //           alt="Tu Foto"
    //           className="w-full h-full rounded-full"
    //         />
    //       ) : (
    //         <span className="text-lg font-bold">Tu Foto</span>
    //       )}
    //     </div>
    //     <div className="overlay">+</div>
    //   </label>
    //   <input
    //     type="file"
    //     id="image"
    //     name="image"
    //     className="hidden"
    //     onChange={handleImageChange}
    //   />

    //   <section className="my-5 py-5">
    //     <h3 className="text-2xl font-bold text-start">Información personal:</h3>
    //     <hr className="my-3 border-zinc-200 dark:border-zinc-600" />
    //   </section>

    //   <section className="text-start">
    //     <p> Agrega una descripción adecuada a tu trabajo, mientras más específica sea; más clientes podrás conseguir.</p>
        
    //     <article className="my-3">
    //     <label className="mt-10" htmlFor="description">
    //         Descripción:
    //         </label>
    //         <br></br>
    //         <textarea 
    //           className="rounded border border-gray-700 p-2 w-96"
    //           id="description"
    //           name="description"
    //           placeholder="Ingrese su descripcion"
    //         />
    //         <br/>
    //         <label className="mt-10" htmlFor="price">
    //           Número
    //         </label>
    //         <br/>
    //         <input
    //           className="rounded border border-gray-700 p-2 w-96"
    //           type="number"
    //           id="price"
    //           name="price"
    //           placeholder="Ingrese su precio"
    //         />
    //     </article>
    //   </section>

    //   <section className="my-5 py-5">
    //     <h3 className="text-2xl font-bold text-start">Sección Crítica:</h3>
    //     <hr className="my-4 border-zinc-200 dark:border-zinc-600" />
    //   </section>


    //   <section className="text-center">
    //     <p className="my-3">
    //       Aquí, si es que deseas puedes eliminar tu cuenta de PsicoMatch, <br />
    //       ten en cuenta que tu cuenta desaparecerá automáticamente de la
    //       aplicación.
    //     </p>

    //     <button
    //       className={`w-[400px] text-Gray-dark text-xl font-semibold bg-[#FF0000] py-2 px-3 rounded-[48px] hover:bg-Purple`}
    //     >
    //       Eliminar mi cuenta
    //     </button>
    //   </section>
    // </section>
  );
}

export default TherapistPerfil;
