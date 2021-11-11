import React from "react"
import { TaskItem } from "./TaskItem"

function Task() {
  const [query, setQuery] = React.useState("")
  const [tasks, setTasks] = React.useState([])
  //state,setstate
  const handleChange = e => {
    const { value } = e.target
    setQuery(value)
  }
  const handleAdd = () => {
    const payload = {
      title: query,
      status: false,
    }
    let newTasks = [...tasks, payload]
    setTasks(newTasks)
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
            <TaskItem color={index % 2 === 0 ? "blue" : "green"} {...item} />
          )
        })}
      </div>
    </div>
  )
}

export { Task }
