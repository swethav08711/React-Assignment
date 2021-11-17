import React from "react"
import { v4 as uuid } from "uuid"
import addList from "./addList"
function List1() {
  const [query, setQuery] = React.useState("")
  const [List, setList] = React.useState([])

  const handleadd = () => {
    const payload = {
      title: query,
      status: false,
      id: uuid(),
    }
    setList([...List, payload])
  }
  return (
    <div>
      <h1>List and keys</h1>
      <div>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          type="text"
          placeholder="Add something"
        />
        <button onClick={handleadd}>Add</button>
      </div>
      {List.map(items => {
        return <addList key={items.id} {...items} />
      })}
    </div>
  )
}

export default List1
