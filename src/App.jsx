import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import wallpaper from "../src/images/wallpaper.jpg"




function App() {


  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  //eliminar pacientes
    const eliminarPaciente = (id) => { 
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);

    setPacientes(pacientesActualizados);

  }

return (


  <div className="container mx-auto mt-20">
    <img src="{wallpaper}" alt=""/>
    <Header />


    <div className="mt-12 md:flex">
      <Formulario 
      pacientes={pacientes}
      setPacientes={setPacientes}
      paciente={paciente}
      setPaciente={setPaciente}
      />
      <ListadoPacientes 
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminarPaciente={eliminarPaciente}
      />
    </div>
  </div>
  
    )
}

export default App
