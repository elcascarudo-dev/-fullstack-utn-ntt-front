import { useItem } from "../../hooks/useItems"


export const NewItemDisplay = ({ items, setItems }) => {
  const { deleteItem } = useItem()

  const borrarElemento = async ( item ) => {

    await deleteItem( item.id )

    const idx = items.indexOf( item )
    items.splice( idx, 1 )
    setItems( [...items] )
  }

  return (
    <>
      {
        items.length < 1 
          ? <p className="p-3"> Ingresa un nuevo item </p>
          : (
              <ul className="list-group my-3">
                { 
                  items.map( (item ) => (
                    <li key={ item.id } className="list-group-item d-flex justify-content-between align-items-center py-3">
                      { item.item }
                      <span className="badge bg-danger rounded p-2" onClick={ e => borrarElemento( item ) } ><i className="fa-solid fa-trash-can"></i></span>
                    </li>
                  )) 
                }
              </ul>
            )
      }
    </>
  )
}
