import { useState, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { CardList } from './CardList'

export const Lista = () => {

  const { URL_BASE } = useFetch()

  const [lists, setLists] = useState([]);

  useEffect(() => {
    getListas();
  }, []);
  


  const getListas = async () => {

    const result = await fetch( `${ URL_BASE }/listas` );
    const { data } = await result.json();

    setLists( data );
  }



  return (
    <>
      <h2 className="my-4"> Lista de pendientes </h2>
      
      <CardList lists={ lists } setLists={ setLists } />
    </>
  )
}
