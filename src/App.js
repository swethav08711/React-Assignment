import React from "react"
import Counter from "./Counter/Counter"
import { Task } from "./Input/Task"
import { CssModel } from "./cssModel/CssModel"
import { Cards } from "./ReactMobileOS/Cards"
export default function App() {
  return (
    <div>
      <Counter />
      <Task />
      <CssModel />
      <Cards />
    </div>
  )
}

//state is something that coimponent remembers
