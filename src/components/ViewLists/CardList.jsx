import { useNavigate } from 'react-router-dom'

import { Plock } from 'react-plock'

import { useTitle } from '../../hooks/useTitle'

import { Toast } from '../../helpers/Swal'

export const CardList = ({ lists, setLists }) => {

  const navigate = useNavigate()

  // Hook
  const { deleteTitle } = useTitle()

  // Borro la lista y sus elementos
  const borrarLista = async ( lista ) => {
    
    try {

      await deleteTitle( lista.lista.id )
  
      const idx = lists.indexOf( lista )
      lists.splice( idx, 1 )
      setLists([ ...lists ])
      
      Toast.fire({ icon: 'success', title: 'Se elimino lista de pendientes' })

    } catch (error) {
        Toast.fire({ icon: 'error', title: 'No se pudo eliminar la lista' })
    }
  }

  const detalleLista = ( id ) => {
    navigate(`/list/${ id }`)
  }


  return (
    <>

      { lists.length < 1 && <h3 className='text-center my-5'>Cargando listas...</h3> }

      <Plock>
        {
          lists.map( resp => {

            return (
              <div key={ resp.lista.id }  className="card puntero">
                <div onClick={ e => detalleLista( resp.lista.id ) } className="card-body">
          
                  <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title">{ resp.lista.title }</h5> 
                  </div>
                  
                  <div className="card-text">
                    <ul className="list-group list-group-flush">
                      {
                        resp.elementos.map( elemn => {
                          return ( <li key={ elemn.id } className={ !elemn.finished ? "list-group-item" : "list-group-item text-decoration-line-through" }>{ elemn.item }</li> )
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Plock>
    </>
  )
}
