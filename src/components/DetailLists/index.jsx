import { Link } from 'react-router-dom'

import { useDetailsList } from '../../hooks/useDetailsList'


export const DetailLists = () => {

  const { borrarLista, actualizarElemento, elementos, titulo } = useDetailsList()

  return (
    <div className="d-flex justify-content-center">
      <div className="card col-12 col-md-6">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">{ titulo.title }</h5>
            <div onClick={ e => borrarLista( titulo.id ) }>
              <i className="fa-solid fa-trash-can puntero"></i>
            </div> 
          </div>
          
          
          <ul className="list-group list-group-flush">
            {
              
              elementos.map( element => {                
                return (
                  <li 
                    onClick={ e => actualizarElemento( element ) }
                    key={ element.id } 
                    className={ element.finished ? "list-group-item puntero text-decoration-line-through" : "list-group-item puntero" }
                  >
                    { element.item }
                  </li>
                )
              })
            }
          </ul>

          <Link to={"/"} className="btn btn-primary mt-3">Volver</Link>
        </div>
      </div>
    </div>
  )
}
