import React from "react"

function TaskItem({ title, status, color, id, handleDelete, handleToggle }) {
  return (
    <div>
      <h3 style={{ color }}>{`${title} - ${status}- ${id}`}</h3>
      <button onClick={() => handleDelete(id)}>X</button>
      <button onClick={() => handleToggle(id)}>Toggle</button>
    </div>
  )
}
export { TaskItem }
