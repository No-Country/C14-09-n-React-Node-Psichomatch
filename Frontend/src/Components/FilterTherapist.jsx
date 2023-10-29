import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../redux/actions/category';
import { getCountries } from '../redux/actions/country';
import { filterStatus, filterTherapist, getTherapistPerPage } from '../redux/actions/therapist';
import { selectedCategory} from '../redux/actions/category';
import { selectedCountry} from '../redux/actions/country';
import { v4 as uuidv4 } from "uuid";
 const FilterTherapist = () => {
  const dispatch = useDispatch();

  const countries = useSelector(state => state.country.countries);
  const categories = useSelector(state => state.category.categories);
  const SelectedCategory = useSelector(state=> state.category.selectedCategory)
  const SelectedCountry = useSelector(state=> state.country.selectedCountry)
 

  const handleCountryChange = (country) => {

    dispatch(selectedCountry(country))
  };

  const handleCategoryChange = (category) => {
    
    dispatch(selectedCategory(category))
  };

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    if(!SelectedCategory && !SelectedCategory) {

      dispatch(filterStatus(false))
        
      dispatch(getTherapistPerPage(1))
    }
    
  }, [SelectedCategory, SelectedCountry, dispatch]);


  useEffect(() => {
    if(SelectedCategory || SelectedCountry ){
        dispatch(filterTherapist( SelectedCategory ,SelectedCountry))
        dispatch(filterStatus(true))
    }

   
  }, [dispatch,SelectedCountry, SelectedCategory]);


  return (
    <div className='bg-gray-300 rounded px-5 h-full py-5 mr-5'>
      <h3 className='font-bold'>Pais</h3>
      <div key={uuidv4()}>
            <input
              type="radio"
              value={0}
              checked={SelectedCountry === ""}
              onChange={() => handleCountryChange("")}
            />
            <label>{"All"}</label>
          </div>
      {countries?.map((country) => {
        return (
          <div key={country.id}>
            <input
              type="radio"
              value={country.id}
              checked={SelectedCountry === country.id}
              onChange={() => handleCountryChange(country.id)}
            />
            <label>{country.name}</label>
          </div>
        );
      })}
      <h3 className='font-bold mt-5'>Enfoque</h3>
      <div key={uuidv4}>
            <input
              type="radio"
              value={0}
              checked={SelectedCategory=== ""}
              onChange={() => handleCategoryChange("")}
            />
            <label>{"All"}</label>
          </div>
      {categories?.map((category) => {
        return (
          <div key={category.id}>
            <input
              type="radio"
              value={category.id}
              checked={SelectedCategory === category.id}
              onChange={() => handleCategoryChange(category.id)}
            />
            <label>{category.name}</label>
          </div>
        );
      })}
    </div>
  );
};

export default FilterTherapist