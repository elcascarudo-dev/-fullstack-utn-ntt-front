

export const Footer = () => {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start align-items-center">
          <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Formación NTT + UTN</span>
        </div>

        <div className="nav col-12 col-md-4 justify-content-center justify-content-md-end list-unstyled d-flex">
          <a href="https://github.com/elcascarudo-dev/-fullstack-utn-ntt-front" target="_blank" className="card p-3 mx-2 text-center"> 
            <i className="my-3 fa-brands fa-github-alt fa-2xl"></i> 
            <span> Front-End </span>
          </a>
          <a href="https://github.com/elcascarudo-dev/fullstack-utn-ntt-back" target="_blank" className="card p-3 mx-2 text-center"> 
            <i className="my-3 fa-brands fa-github-alt fa-2xl"></i> 
            <span> Back-End </span>
          </a>
        </div>
      </footer>
    </>
  )
}
