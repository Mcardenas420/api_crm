import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Formulario from '../components/Formulario'
const EditarCliente = () => {

  const [cliente, setCliente] = useState({})

  const [cargando, setCargando] = useState(true)

  const {id} = useParams()

  

  useEffect(() => {
      const obtenerClienteAPI = async () => {
          try {
              const url = `${import.meta.env.VITE_API_URL}/${id}`
              const respuesta = await fetch(url)
              const resultado = await respuesta.json()
              setCliente(resultado)
          } catch (error) {
              console.log(error)
          }
          setCargando(false)
      }
      obtenerClienteAPI()
  }, [])

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      
    {cliente?.nombre ? (
      <>
        <p className="mt-3">Utiliza este Formulario para editar los datos de un cliente</p>
          <Formulario
            cliente={cliente}
            cargando={cargando}

          />
      </>
    ): cargando ?? <p className='w-full block bg-red-700 text-lg uppercase text-center text-white font-black mt-3'>Cliente ID No Valido</p>}
      
  </>
  )
}

export default EditarCliente