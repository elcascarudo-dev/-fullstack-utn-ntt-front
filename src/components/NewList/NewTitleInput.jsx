import { useState } from 'react'
import { useTitle } from '../../hooks/useTitle'

import { Toast } from '../../helpers/Swal'

export const NewTitleInput = ({ title, setTitle, setEdit }) => {

  const [inputValue, setInputValue] = useState( title )
  const { newTitle } = useTitle() 

  const onSubmit = async ( e ) => {
    e.preventDefault()

    const { ok, data } = await newTitle( inputValue )

    if (ok) {
      setTitle( data )
      setEdit( true )

      Toast.fire({
        icon: 'success',
        title: 'Se creo nueva lista de pendientes'
      })
    } else {
      Swal.fire('', message, 'error' )
    }
  }

  const onInputChange = ( e ) => setInputValue( e.target.value )

  return (
    <form onSubmit={ onSubmit }>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="Titulo" 
                value={ inputValue }
                onChange={ onInputChange }
        />
        <label htmlFor="floatingInput">Titulo de la lista</label>
      </div>
    </form>
  )
}
