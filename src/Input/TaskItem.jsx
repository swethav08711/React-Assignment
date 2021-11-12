import React from "react"
import style from "./Toggle.module.css"
function TaskItem({ title, status, id, handleDelete, handleToggle }) {
  return (
    <div className={style.main_files}>
      <h3 className={style.h3first}>{title}</h3>
      <h3 className={style.h3sec}> {`${status}`}</h3>
      <button
        className={style.button_onclick1}
        onClick={() => handleDelete(id)}
      >
        X
      </button>
      <button
        className={style.button_onclick2}
        onClick={() => handleToggle(id)}
      >
        Toggle
      </button>
    </div>
  )
}
export { TaskItem }
