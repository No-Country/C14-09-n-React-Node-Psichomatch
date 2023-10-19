import axios from "axios";

export const registerPatient = async (patient) => {
  return await axios.post("http://localhost:3001/patient", patient);
};


export const loginPatient = async (patient) => {
  return await axios.post("http://localhost:3001/patient/login", patient);
};


export const recoverPassword = async (patient) => {
	return await axios.post('http://localhost:3001/recoverPass', patient);
}