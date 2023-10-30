import { GET_THERAPIST_PER_PAGE, GET_THERAPIST_BY_ID, FILTER_THERAPIST, FILTER_STATUS, SEARCH_STATUS, SEARCH_THERAPIST, SEARCH_VALUE, INSERT_THERAPIST } from "./action-type";
import axios from "../../axios";

export const getTherapistPerPage = (page) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `/therapist?page=${page}`
      );
      return dispatch({
        type: GET_THERAPIST_PER_PAGE,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getTherapistById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `/therapist/getTherapistByID/${id}`
      );
      return dispatch({
        type: GET_THERAPIST_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};


export const insertTherapist = (therapist) => {
  return async (dispatch) => {
    try {

      const { data } = await axios.post(
        `/therapist/create`, therapist
      );
      return dispatch({
        type: INSERT_THERAPIST,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};



export const filterTherapist = (CategoryId, CountryId, page=1) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(
          `/therapist/filter/category/country?CategoryId=${CategoryId}&CountryId=${CountryId}&page=${page}`
        );

        console.log(data)
        return dispatch({
          type: FILTER_THERAPIST,
          payload: data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };


  export const searchTherapist = (search, page=1) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(
          `/therapist/search?search=${search}&page=${page}`
        );

        return dispatch({
          type: SEARCH_THERAPIST,
          payload: data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };

  export function filterStatus(status) {
    return {
      type: FILTER_STATUS,
      payload: status,
    };
  }


  export function setSearch(value) {
    return {
      type: SEARCH_VALUE,
      payload: value,
    };
  }

  export function searchStatus(status) {
    return {
      type: SEARCH_STATUS,
      payload: status,
    };
  }