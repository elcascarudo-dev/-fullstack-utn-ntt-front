import { Routes, Route, Link } from 'react-router-dom'

import { NavBar}    from './components/shared/NavBar'
import { Footer }   from './components/shared/Footer'

import { Lista }    from './components/ViewLists'
import { NewList }  from './components/NewList'
import { DetailLists } from './components/DetailLists'


export const Acceso = () => {
  return (
    <>
      <NavBar />

      <div className='container mt-4'>

        <Routes>
          <Route path='/' element={ <Lista /> } />
          <Route path='new-list' element={ <NewList /> } />
          <Route path='/list/:id' element={ <DetailLists /> } />
        </Routes>       
      
        <Footer />
      </div>

    </>
  );
}
