
import { NewItemDisplay } from "./NewItemDisplay"
import { NewItemInput } from "./NewItemInput"

export const NewItem = ({ title, items, setItems }) => {

  return (
    <>
      <NewItemDisplay items={ items }  setItems={ setItems } />

      <NewItemInput title={ title }  items={ items } setItems={ setItems } />
    </>
  )
}
