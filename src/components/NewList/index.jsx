import { useState } from "react"
import { Link } from "react-router-dom"

import { NewItem } from "./NewItem"
import { NewTitle } from "./NewTitle"

export const NewList = () => {

  const [title, setTitle] = useState('')
  const [items, setItems] = useState([])

  return (
    <>
      <h2 className="my-4"> Nueva Lista de pendientes </h2>

      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-7">
          <div className="card shadow">
            <div className="card-body">
              
              <NewTitle title={ title } setTitle={ setTitle } />

              { title && <NewItem title={ title } items={ items } setItems={ setItems } /> }
              
              <div class="d-grid gap-2">
                {
                  !title
                    ? <Link  to="/" className="btn btn-danger">Cancelar</Link>
                    : <Link  to="/" className="btn btn-primary">Finalizar lista</Link>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
