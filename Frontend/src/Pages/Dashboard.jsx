import { useNavigate, useParams } from 'react-router-dom';

const Dashboard = function () {

const navigate = useNavigate();
const params = useParams();

  return (
     <div className="flex w-full h-screen items-center justify-center">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="md:mx-6 md:p-12">
        <div className="text-center">
            <h1 className="mb-12 mt-1 pb-1 text-xl font-semibold">
              Agenda tu cita
            </h1>
          </div>
     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      onClick={() => navigate(`/psicologos/${params.id}`)}

     >Elegir a mi terapueta</button>
     </div>
     </div>
     </div>
  );
}

export default Dashboard;