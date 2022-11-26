export async function obtenerClientes() {
    // CONSUMO DE INFORMACION QUE HAY EN API_URL
    const respuesta = await fetch(import.meta.env.VITE_API_URL) 
    const resultado = await respuesta.json()
    return resultado;
}
export async function obtenerCliente(id) {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`) 
    const resultado = await respuesta.json()
    return resultado;
}
export async function agregarCliente(datos) {
    try {
        const response = await fetch(import.meta.env.VITE_API_URL, {
          method: 'POST',
          //con el body y stringify convierto lo que viene en objeto a json
          body: JSON.stringify(datos),
          // con headers content-type definimos la peticion en modo json
          headers: {
            'Content-Type': 'application/json'
          }
        })
        await response.json()
      } catch (err) {
        console.log(err)
      }
}

export async function actualizarCliente(id, datos) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    await response.json()
  } catch (err) {
    console.log(err)
  }

}

export async function eliminarCliente (id){
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'DELETE',
      
    })
    await response.json()
  } catch (err) {
    console.log(err)
  }
}