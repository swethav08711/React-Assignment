import React from "react"
//hooks
export default function Counter() {
  const [counter, setCounter] = React.useState(5)
  const handleIncrement = value => {
    setCounter(counter + value)
    console.log(counter)
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>

      <button onClick={() => handleIncrement(1)}>ADD</button>
      <button onClick={() => handleIncrement(-1)}>Reduce</button>
    </>
  )
}
//state is something that coimponent remembers
