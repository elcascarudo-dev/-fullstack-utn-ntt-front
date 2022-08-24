import { useFetch } from "./useFetch"



export const useTitle = () => {

  const { URL_BASE } = useFetch()
  
  const newTitle = async ( inputValue ) => {

    //--------------------------------------------
    // Mando al Back-end el titulo para que se guarde
    // localhost:3001/listas
    // {"title": "Una lista nueva2"}
  
    try {
      const url = `${ URL_BASE }/listas`
    
      const data = await fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify( { "title": inputValue } ), // data can be `string` or {object}!
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


  const deleteTitle = async ( id ) => {


    try {
      const url = `${ URL_BASE }/listas`
    
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
  
  
  return { newTitle, deleteTitle }

}
