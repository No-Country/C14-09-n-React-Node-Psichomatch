import axios from 'axios';


export const registerPatient = async (patient) => {
	return await axios.post('http://localhost:3001/patient', patient)
}