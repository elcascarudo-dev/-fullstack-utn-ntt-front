import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">Lista de pendientes</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNavAltMarkup">
            <div className="navbar-nav mt-4">
              <Link className="mx-lg-3 btn btn-success" to="/new-list">Nueva Lista</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
