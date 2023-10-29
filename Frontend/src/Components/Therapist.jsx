import React, { useEffect, useState } from "react";
import { GetTherapist } from "../api/therapist_api";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AgendaCita from "./AgendaCita";
import {
  filterTherapist,
  getTherapistPerPage,
  searchTherapist,
} from "../redux/actions/therapist";
import FilterTherapist from "./FilterTherapist";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
const Therapist = () => {
  const dispath = useDispatch();

  const therapists = useSelector((state) => state.therapist.therapists);
  const filterStatus = useSelector((state) => state.therapist.filterStatus);
  const searchStatus = useSelector((state) => state.therapist.searchStatus);
  const searchValue = useSelector((state) => state.therapist.search);
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );
  const selectedCountry = useSelector((state) => state.country.selectedCountry);
  const params = useParams();

  useEffect(() => {
    dispath(getTherapistPerPage(""));
  }, []);

  const patientId = params.id;

  const prevButtonHandler = async (e) => {
    e.preventDefault();

    if (therapists.actualPage !== 1) {
      if (!filterStatus && !searchStatus)
        dispath(getTherapistPerPage(therapists.actualPage - 1));
      if(filterStatus && !searchStatus) {
        dispath(
          filterTherapist(
            selectedCategory,
            selectedCountry,
            therapists.actualPage - 1
          )
        );
      }

      if(searchStatus) dispath(searchTherapist(searchValue, therapists.actualPage - 1))
    }
  };

  const nextButtonHandler = async (e) => {
    e.preventDefault();

    if (therapists.actualPage < therapists.totalPages) {
      if (!filterStatus && !searchStatus)
        dispath(getTherapistPerPage(therapists.actualPage + 1));
      
        if(filterStatus && !searchStatus)
        dispath(
          filterTherapist(
            selectedCategory,
            selectedCountry,
            therapists.actualPage + 1
          )
        );


    if(searchStatus){
      dispath(searchTherapist(searchValue, therapists.actualPage + 1))
    }
    }
  };

  return (
    <div className="flex w-full justify-center">
      <FilterTherapist />
      <div className="mx-10">
        {therapists.therapists?.map((therapist) => (
          <div className="flex mt-5" key={therapist.id}>
            <div className="grid grid-cols-2 w-96 mr-5">
              <img
                className="w-40 h-40 rounded-full gap-1"
                src={therapist.image}
                alt="Sunset in the mountains"
              />
              <div className="h-40 flex flex-col items-start justify-center">
                <h1 className="font-bold">
                  {therapist.name} {therapist.lastName}
                </h1>
                <h3 className="my-2"> {therapist.Category.name}</h3>
                <h3>
                  <span className="font-semibold">Precio:</span> $
                  {therapist.price}
                </h3>
              </div>
              <div className="font-bold flex items-center justify-center mt-5 ">
              <FontAwesomeIcon icon={faGlobe} size="lg" className="mr-2"/>
              
                <p >
                  {therapist.Country.name}
                </p>
              </div>
            <div className="font-bold flex items-center mt-5">

            <FontAwesomeIcon icon={faLinkedin} size="lg" className="mr-2"/>
              <a
                
                href={`${therapist.linkedIn}`}
              >
                Linkedin
              </a>
</div>
              <p className="col-span-2 mt-5 text-justify">
                {therapist.description}
              </p>
            </div>

            <AgendaCita
              patientId={Number(patientId)}
              therapistId={Number(therapist.id)}
            />
          </div>
        ))}

        <div className="flex justify-between w-56 justify-center  mx-auto my-7">
          <button
            onClick={prevButtonHandler}
            className="bg-indigo-100 w-10 h-10 rounded-full"
          >
            {" "}
            {"<"}
          </button>
          <p>{therapists.actualPage + " / " + therapists.totalPages}</p>

          <button
            onClick={nextButtonHandler}
            className="bg-indigo-100 w-10 h-10 rounded-full"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Therapist;
