import React from "react";

const DoubleCounter = () => {
  const [task, setTask] = React.useState(0)

  const handleIncrement = value => {
    setTask(task + value)
  }
  return (
    <>
      <h1>Double the Counter</h1>
      <h2>{task}</h2>
      <button onClick={() => handleIncrement(2)}>Add</button>
      <button onClick={() => handleIncrement(-2)}>Reduce</button>
    </>
  )
}

export default DoubleCounter
