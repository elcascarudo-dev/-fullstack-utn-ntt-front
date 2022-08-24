import { useFetch } from "./useFetch"



export const useItem = () => {

  const { URL_BASE } = useFetch()
  
  const newItem = async ( nuevoElemento ) => {

    //--------------------------------------------
    // Mando al Back-end el titulo para que se guarde
    // localhost:3001/elementos
    // nuevoElemento = { "id_list": "3", "item": "Nuevo elemento" }
  
    try {
      const url = `${ URL_BASE }/elementos`
    
      const data = await fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(  nuevoElemento  ), // data can be `string` or {object}!
        mode: 'cors',
        headers:{
          "Content-type": "application/json; charset=UTF-8"
        }
      })
  
      const resp = await data.json()

      return resp
    
    } catch (error) {
      Swal.fire('', error, 'error');
    }
  }


  const deleteItem = async ( id ) => {


    try {
      const url = `${ URL_BASE }/elementos`
    
      const data = await fetch(url, {
        method: 'DELETE', // or 'PUT'
        body: JSON.stringify( { id } ), // data can be `string` or {object}!
        mode: 'cors',
        headers:{
          "Content-type": "application/json; charset=UTF-8"
        }
      })
  
      const resp = await data.json()

      return resp
    
    } catch (error) {
      Swal.fire('', error, 'error');
    }


  }

  const completedItem = async ( id, estado ) => {

    const url = `${ URL_BASE }/elementos/cambio`
    
      const data = await fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify( { id, estado } ), // data can be `string` or {object}!
        mode: 'cors',
        headers:{
          "Content-type": "application/json; charset=UTF-8"
        }
      })
  
      await data.json()

      return { ok: true }
  }
  
  
  return { newItem, deleteItem, completedItem }

}
