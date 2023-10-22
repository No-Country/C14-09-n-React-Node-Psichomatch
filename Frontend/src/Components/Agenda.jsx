import React, { useState, useEffect } from 'react'
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
const Agenda = () => {
   
  const [hour,setHour] = useState([])

    const getHours = async () =>{
      try {
        const {data} = await axios.get(`http://localhost:3001/hour`);
        setHour(data)
      } catch (error) {
        console.error(error.message);
      }

    }
    const WeekDays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    
    const months = [
      "Ene", "Feb", "Mar", "Abr", "May", "Jun",
      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
  ];

      const getDateAndMonth = (fecha)=>{
        const mesEnLetras = months[fecha.getMonth()];
        const diaDelMes = fecha.getDate();
        return diaDelMes+" "+mesEnLetras

      }

      


      useEffect(() => {
   
        getHours();
        console.log(hour)
        },[]);

        


      const getWeekDay = (fecha) =>{
        const numeroDiaSemana = fecha.getDay();
        const nombreDiaSemana = WeekDays[numeroDiaSemana];
        return nombreDiaSemana;
      }


      const nextHandler = (fecha)=>{
        const fechaSiguiente = new Date(fecha);
        fechaSiguiente.setDate(fechaSiguiente.getDate() + 4);
        console.log(fechaSiguiente)
        setDate(new Date(fechaSiguiente))
        return fechaSiguiente;

      }

      const prevHandler = (fecha)=>{
        const prevDate = new Date(fecha);
        prevDate.setHours(0, 0, 0, 0); 
      
        const actualDate = new Date(); 
        actualDate.setHours(0, 0, 0, 0);
      
        prevDate.setDate(prevDate.getDate() - 4);
        console.log(prevDate);
      
        if (prevDate >= actualDate) {
          setDate(new Date(prevDate));
        }
      
        return prevDate;

      }

      const nextDate = (num) => {
        const fechaSiguiente = new Date(date);
        fechaSiguiente.setDate(fechaSiguiente.getDate() + num);
        return fechaSiguiente;
      }

     const [date, setDate] = useState(new Date);
     

    return (
    <div className='w-96 h-96 border-2 border-black px-2 overflow-auto'>
        <div className='flex justify-between'>
            <button onClick={()=> prevHandler(date)} className='bg-indigo-100 w-10 h-10 rounded-full'> {"<"}</button>
            <button onClick={()=>nextHandler(date)} className='bg-indigo-100 w-10 h-10 rounded-full'>{">"}</button>
        </div>

        <div className='flex justify-between w-full h-full'>
            {[0,1,2,3].map(x=>{
                return(
                <div key={uuidv4()} className='flex-col justify-center space-between text-center w-full'>
                    <p className='text-black'>{getWeekDay(nextDate(x))}</p>
                    <p className='text-gray-400'>{getDateAndMonth(nextDate(x))}</p>
                    {hour?.map((y)=>{
                      return(
                        <p key={uuidv4()} value={y.id} className='bg-indigo-100 border-2  rounded-lg my-1 mx-1 p-2'>
                          {y.hour}
                        </p>
                      )
                    })}
                </div>
                
                )
            })}

        </div>






    </div>

  )
}

export default Agenda