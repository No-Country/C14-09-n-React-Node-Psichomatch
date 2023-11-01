import axios from "axios";

export const getPatientReservation = async (id) => {
 return await axios.get(`http://localhost:3001/reservation/patient/${id}`);	
}

export const deleteReservation = async (id) => { 
return await axios.delete(`http://localhost:3001/reservation/${id}`)
}