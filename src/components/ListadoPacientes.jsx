
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente , eliminarPaciente}) => {

  



  return (
    <div className="w-1/2 lg:w-3/5 h-screen overflow-y-scroll ">

      {pacientes && pacientes.length ? (
        <>
         <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
         <p className="text-xl mt-5 mb-10 text-center">Administra tus {''}
           <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
         </p>
   
   
         { pacientes.map( paciente => (
   
               <Paciente 
                 key={paciente.id}
                 paciente={paciente}
                 setPaciente={setPaciente} 
                 eliminarPaciente={eliminarPaciente}
               />
         ))}

      </>
   
      ): (
        <>
          <h2 className="font-black text-center text-3xl">No hay Pacientes</h2>
         <p className="text-xl mt-5 mb-10 text-center">Agrega tus Pacientes {''}
           <span className="text-indigo-600 font-bold"> se mostraran en este lugar </span>
         </p>

        </>



      )
      } 

     

      
      
      
    </div>
    
  )
}

export default ListadoPacientes