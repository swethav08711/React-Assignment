import React from "react"
import { TaskItem } from "./TaskItem"
import style from "./Toggle.module.css"
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

      <div className={style.main_container}>
        <input
          className={style.input_files}
          value={query}
          onChange={handleChange}
          placeholder="Add something"
        />
        <button className={style.button_onclick} onClick={handleAdd}>
          +
        </button>
      </div>
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
