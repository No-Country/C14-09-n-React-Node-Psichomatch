import axios from 'axios';

export const getHour = async () => {
 return await axios.get(`http://localhost:3001/hour`);
}

export const getAvailabilityByTherapistId = async (id, date) => {
return await axios.post(`http://localhost:3001/availability/${id}`, date)
}

export const createReservation = async (AvailabilityId, PatientId, TherapistId) => {
return await axios.post(`http://localhost:3001/reservation/`, AvailabilityId, PatientId, TherapistId)
}