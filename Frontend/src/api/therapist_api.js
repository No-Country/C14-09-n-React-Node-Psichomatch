import axios from 'axios';

export const GetTherapist = async () => {
 return await axios.get('http://localhost:3001/therapist/');
}

export const GetTherapistId = async (id) => {
return await axios.get(`http://localhost:3001/therapist/getTherapistByID/${id}`);
}