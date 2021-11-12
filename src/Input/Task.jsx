import React from "react"
import { TaskItem } from "./TaskItem"

function Task() {
  const [query, setQuery] = React.useState("")
  const [tasks, setTasks] = React.useState([])
  //state,setstate
  const handleChange = e => {
    const { value } = e.target
    setQuery(value)
    //setQuery(e.target.value)
  }
  const handleAdd = () => {
    const payload = {
      title: query,
      status: false,
      id: tasks.length + 1,
    }
    let newTasks = [...tasks, payload]

    setTasks(newTasks)
  }
  console.log(tasks.length)
  const handleDelete = id => {
    setTasks(tasks.filter(item => item.id !== id))
  }
  const handleToggle = id => {
    const updateToggle = tasks.map(item =>
      item.id === id ? { ...item, status: !item.status } : item
    )
    setTasks(updateToggle)
  }
  console.log(tasks)
  return (
    <div>
      <h1>Tasks</h1>

      <div>
        <input
          value={query}
          onChange={handleChange}
          placeholder="Add something"
        />
      </div>
      <button onClick={handleAdd}>Add</button>
      <div>
        {tasks.map((item, index) => {
          return (
            //PROPS
            <>
              <TaskItem
                color={index % 2 === 0 ? "blue" : "green"}
                {...item}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
              />
            </>
          )
        })}
      </div>
    </div>
  )
}

export { Task }
