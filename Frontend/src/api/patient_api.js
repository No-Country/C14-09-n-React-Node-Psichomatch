import axios from 'axios';


export const registerPatient = async (patient) => {
	return await axios.post('http://localhost:3001/patient', patient)
}


export const recoverPass = async () => {
	return await axios.get('http://localhost:3001/recoverPass')
}