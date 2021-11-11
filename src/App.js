import React from "react"
import Counter from "./Counter/Counter"
import { Task } from "./Input/Task"
import { CssModel } from "./cssModel/CssModel"

export default function App() {
  return (
    <div>
      <Counter />
      <Task />
      <CssModel />
    </div>
  )
}
//state is something that coimponent remembers
