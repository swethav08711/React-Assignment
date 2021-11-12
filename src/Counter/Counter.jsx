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

// export default function Counter() {
//   const [counter, setCounter] = React.useState(0)
//   const handleIncrement = () => {
//     setCounter(counter + 1)
//     console.log(counter)
//   }
//   const handleDecrement = () => {
//     setCounter(counter - 1)
//     console.log(counter)
//   }
//   return (
//     <>
//       <h1>Counter</h1>
//       <h2>{counter}</h2>

//       <button onClick={handleIncrement}>ADD</button>
//       <button onClick={handleDecrement}>Reduce</button>
//     </>
//   )
// }
