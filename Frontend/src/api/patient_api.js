import axios from 'axios';


export const registerPatient = async (patient) => {
	return await axios.post('http://localhost:3001/patient', patient)
}


export const AuthGoogle = async (response) => {

return await axios.post('http://localhost:3001/auth/google', 
{ token: response.tokenId }

);

}