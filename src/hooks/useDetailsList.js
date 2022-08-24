import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


import { useItem } from './useItems'
import { useTitle } from './useTitle'

import { Toast } from '../helpers/Swal'
import { useFetch } from './useFetch'

export const useDetailsList = () => {

  const { completedItem } = useItem()
  const { deleteTitle } = useTitle()

  const { URL_BASE } = useFetch()
  
  const navigate = useNavigate()
  const { id } = useParams()
  
  const [ titulo, setTitulo ] = useState({})
  const [ elementos, setElementos ] = useState([])

  useEffect(() => {
    detalleLista()
  }, [] )
  
  const detalleLista = () => {
    fetch( `${ URL_BASE }/listas/${ id }` )
    .then( data => data.json() )
    .then( data => {
      const { data: { title, elements } } = data
      setTitulo( title[0] )
      setElementos( elements )
    })
  }

  const actualizarElemento = async ( elemento ) => {

    
    try {
      elemento.finished = !elemento.finished

      const { ok } = await completedItem( elemento.id, elemento.finished )

      if ( ok ) {
        const idx = elementos.indexOf( elemento )
        elementos.splice( idx, 1, elemento )
        setElementos( [...elementos] )
      }

      

    } catch (error) { console.log( error ) }
    

  }



  const borrarLista = async ( id ) => {
    const { ok } = await deleteTitle( id )
    
    if( ok ){
      Toast.fire({
        icon: 'success',
        title: 'Se elimino lista de pendientes'
      })

      navigate('/')
    }
  }

  return {
    borrarLista,
    actualizarElemento,
    elementos,
    titulo
  }
}
