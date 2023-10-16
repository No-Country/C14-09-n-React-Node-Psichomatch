import axios from "axios";

const DashboardSearchTherapist = function () {
  async function getTherapist (page) {
    try {
      const {data} = await axios.get(`https://localhost:3001/therapist?page=${page}`);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
  
  getTherapist(1);
  return (
    <>

    </>
  )
}

export default DashboardSearchTherapist;