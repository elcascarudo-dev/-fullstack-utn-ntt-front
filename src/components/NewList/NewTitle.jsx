import { useState } from 'react'

import { NewTitleDisply } from './NewTitleDisply'
import { NewTitleInput } from './NewTitleInput'

export const NewTitle = ({ title, setTitle }) => {

  const [edit, setEdit] = useState( false )

  return (
    edit 
      ? <NewTitleDisply title={ title } setEdit={ setEdit } />
      : <NewTitleInput title={ title } setTitle={ setTitle } setEdit={ setEdit } />
  )
}
