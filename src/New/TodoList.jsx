import React from "react"

function TodoList({ data }) {
  return (
    <ul>
      {data.map(items => (
        <li key={items.id}>
          {items.title} -{items.description}-{items.status ? "Done" : "Pending"}
        </li>
      ))}
    </ul>
  )
}
export { TodoList }
