import React, { useState } from "react"
import { TodoInput } from "./TodInput"
import { TodoList } from "./TodoList"
import { v4 as uuid } from "uuid"
import Pagination from "./pagination"
function Todo() {
  const [list, setlist] = React.useState([])
  const [showComplete, setShowCompleted] = useState(false)
  const [page, setpage] = React.useState(1)
  const handleSubmit = ({ title, description }) => {
    const payload = {
      id: uuid(),
      title,
      description,
      status: list.length % 2 === 0 ? true : false,
    }
    setlist([...list, payload])
  }
  const changePageTo = num => {
    if (num <= 1) {
      setpage(1)
      return
    }
    setpage(num)
  }
  const perpage = 2
  const filterResult = list.filter(
    (_, i) => i >= (page - 1) * perpage && i < page * perpage
  )
  return (
    <div>
      <TodoInput onSubmit={handleSubmit} />
      <TodoList data={filterResult} />
      {/* <TodoList data={list.filter(item => !item.status)} /> */}

      {/* <div>
        <button onClick={() => setShowCompleted(!showComplete)}>
          Toggle Show Completed
        </button>
      </div>
      {showComplete && <TodoList data={list.filter(item => item.status)} />} */}
      <div>
        <Pagination
          total={5}
          currpage={page}
          onclickcallback={page => setpage(page)}
        />
      </div>
    </div>
  )
}
export default Todo
