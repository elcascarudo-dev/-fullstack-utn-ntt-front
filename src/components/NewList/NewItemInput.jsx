import { useState } from "react"

import { useItem } from '../../hooks/useItems'

export const NewItemInput = ({ title, items, setItems }) => {

  const [inputValue, setInputValue] = useState('')
  const { newItem } = useItem()

  const onSubmit = async ( e ) => {
    e.preventDefault()


    const nuevoElemento = {
      "id_list": title.id,
      "item": inputValue
    }
    const resp = await newItem( nuevoElemento )

    setItems([ ...items, resp.data ])
    setInputValue('')
  }

  const onInputChange = ( e ) => setInputValue(e.target.value)

  return (
    <form onSubmit={ onSubmit } className="my-2">
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="Titulo" 
                value={ inputValue }
                onChange={ onInputChange }
        />
        <label htmlFor="floatingInput">nuevo item</label>
      </div>
    </form>
  )

}
