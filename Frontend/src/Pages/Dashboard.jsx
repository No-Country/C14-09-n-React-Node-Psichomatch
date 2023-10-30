import React, { useState, useEffect } from "react";
import { useFetcher, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  getPatientReservation,
  deleteReservation,
} from "../api/reservation_api";
import TherapistPerfil from "../Components/Therapist/TherapistPerfil";
import TherapistAgenda from "../Components/Therapist/TherapistAgenda";
import TherapistPrecios from "../Components/Therapist/TherapistPrecios";

const Dashboard = function () {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState(null);

  const loadPatientReservation = async (id) => {
    const response = await getPatientReservation(params.id);
    const patientReservation = response.data;
    setData(patientReservation);
  };

  const deletePatientReservation = async (id) => {
    const response = await deleteReservation(id);
    const deletereservation = response.data;
    setData(data.filter((data) => data.id !== id));
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: <p>Cita Cancelada Exitosamente</p>,
      icon: "success",
    });
  };

  useEffect(() => {
    if (params.id) {
      loadPatientReservation(params.id);
    }
  }, [params.id]);

  // Navegación del therapist
  const [opcion, setOpcion] = useState('Perfil');

  const handleOpcion = (opc) => {
    setOpcion(opc);
  }

  // Esto es para la visibilidad pero no lo pude hacer.
  // const [visibility, setVisibility] = useState(true)

  // const switchVisibility = () => {
  //   setVisibility(!visibility)
  // }

  const [therapist, setTherapist] = useState({});

  const getTherapistDates = async (data) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    try {
      const response = await fetch("http://localhost:3001/therapist/getTherapistByID/21", requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.text();
      setTherapist(JSON.parse(result));
    } catch (error) {
      console.error('Error:', error);
    }

  }

  useEffect(() => {
    getTherapistDates(data);
  }, []);

  return (
    <>
      <div className="grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
        <aside className="hidden border-r lg:block switchVisibility">
          <div className="flex h-full max-h-screen flex-col gap-2 py-4 px-6">
            <div className="text-xl font-semibold">{therapist.name}</div>
            <div className="text-xl font-semibold">{therapist.lastName}</div>
            <div className="text-xl font-semibold">{therapist.email}</div>
            <div className="text-xl font-semibold">{therapist.adress}</div>
            <hr className="my-4 border-zinc-200 dark:border-zinc-600" />
            <nav className="flex flex-col gap-4 text-md font-medium">
              <button
                className="text-start text-zinc-500 dark:text-zinc-800"
                name="Perfil"
                onClick={(e) => {
                  handleOpcion(e.target.name);
                }}
              >
                Perfil
              </button>
              <button
                className="text-start text-zinc-500 dark:text-zinc-800"
                name="Agenda"
                onClick={(e) => {
                  handleOpcion(e.target.name);
                }}
              >
                Agenda
              </button>
              <button
                className="text-start text-zinc-500 dark:text-zinc-800"
                name="Precios"
                onClick={(e) => {
                  handleOpcion(e.target.name);
                }}
              >
                Precios
              </button>
            </nav>
          </div>
        </aside>

        <main className="flex flex-col overflow-auto">
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 py-4 px-6">
            <div className="text-xl font-semibold">Terapeuta / {opcion} </div>
            <svg
              className=" text-gray-500 dark:text-gray-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
          <div className="flex-1 flex justify-center rounded-lg border p-4 md:p-6">
            {/* <button
              className="text-start text-zinc-500 dark:text-zinc-800 visibility-button"
              name="Precios"
              onClick={switchVisibility}
            >
              <img
                className="visibility-icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEY0lEQVR4nO1a348URRBu4w8wGPX4ocYnfTQa9a8QiCLqG6hvGHwBL+gr4DP6ZELi3+Cj5mLQACFRwsm6t1s9snt7XHar9u6IRn3zhKD5TM1W343erns32zs7EL5kktntnp7urqquqq/GuXu4SyEJdgrhDSZ8wh4z7NEUj9+FcCu99N6jkbZpnzoOMmHKlQHtNrZ3PN4Vj2+Y8Ld4YCsXe/wlhHNdwjutFrYVvgC5jIeF8KEQVtYmRrjJhAtCOKmSaXs8pzteqeBBvfRe/9M2IZxiwkV9JvP8MhNO6OYUsogO4VXxWMzs7FXxOLJYwWNbHas9h8e7Cd4Tj0pmQde7dewfqxqJx+eZBfzIHq/EGl8S7GPC3JraEc5Gl047wVM6cdPrP4RwDF/g/qgvcc7pmOzxAXusBmkvEp6MMninhmdV3DZwQ2p4wY0ZXcKL7DFvklnQOYw04EoVezID/rDcxG5XEJgwJYTvbAMXVStGsYmgTpdv1LDDFYwbNexgwpWgZrlsJmPYDXV2bkJYuoZdGa04m+eI7Rl2ATaxSZtZTTc2wb7NO7vgJwjHXEnAHtPB+DelYuLxUfATeY9YIVTZg3IbaB/gIh5gQs00ZdoNNXALO0ZxduxRD/YVczHdOvbb3Jb+NzbT4C2cEBEcaCP2YgDcF05SqePwwI7i8a29/MioL71ewxNCSGwH57mBp10EMOGo2crXfTvoEWth9c08AWBRkuGeo7zFHrf7zlMIb9pJdd5FxDgkwx6XbLwD/Ro/tYWcdJERWzLs8bGp15l+jTNpY4LX3RgQUzKyrj1fbmhkQksbNYtzY0IsyfBPeN42pLmxkfCbhQBjjatiSGa5id32/C8bGo3pQJLgITdmZCWjznOrz7da2BZ4gvIshFCLuhAuSLU0dc2oVjOPaq1UsWegat09xu7t+K3joCupJAK6Hm8NPn7XHeIpdyc7RFEGsNd4wZVUEv8NUToer21sJEyFoFEZQFfSoFF6ZHkaNLZaeLR/J8I5fanSmGWUhIIJ79uYM24QhPC27V7FlTWxIlTNTRwaluou2wT2li3V7ayzO92hZQil9u30quYlH5gwq4R0dPLB9zaoQzg+9AGTSsr1KqHsSgK2DdZAc9NFoQxbsarkmJswlhK8LIQ/c7E7Sk+GHVDa0k0IK0qkExZsLp/lJbGvmpO8MgkS++cEj6i92Rxmc9cZrazQDGUF/e0KgvQc3/ehHDdywUeLLBnRznc9XnIF2ASHdxJa7Tk8E2Xg1EsHNfNYVe5Vj0MXGejxuyfWDJswq6lx1JeozYQDIGR2saqv6rHV2fG6I00Ne6y1d6u+Lvyruks4mucrhpTd1NgphB2+p0oxq8XDpeMxrax4pj6uEeklIZxW3kmzOD22lQPQS++1aJQmRYTT1jflCULY0SEcn8gXECkJUMdhJZTTFGDrn3DcTjPTBIcmsoB+UEJZuVjN2oTwVfoBDeHX8FGN3V/T9FT7aN+B+cQ9uDsf/wBUdRmdn9qKngAAAABJRU5ErkJggg=="
              />
            </button> */}
            {opcion === "Perfil" ? (
              <div className="flex flex-col gap-4">
                <TherapistPerfil therapist={therapist} />
              </div>
            ) : opcion === "Agenda" ? (
              <div className="flex items-start justify-center">
                <TherapistAgenda therapist={therapist} data={data} 
                deletePatientReservation={deletePatientReservation} 
                loadPatientReservation={loadPatientReservation}/>
              </div>
            ) : opcion === "Precios" ? (
              <div className="flex items-start justify-center">
                <TherapistPrecios therapist={therapist}/>
              </div>
            ) : null}
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
