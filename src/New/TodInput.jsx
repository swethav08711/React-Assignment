import React from "react"

function TodoInput({ onSubmit }) {
  const [state, setstate] = React.useState({
    title: "",
    description: "",
  })
  const handleInputChange = e => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
  const onFormSubmit = e => {
    e.preventDefault()
    // i missed here S i wrote onsubmit
    onSubmit(state)
  }
  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <input
          name="title"
          value={state.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
      </div>
      <div>
        <input
          name="description"
          value={state.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
      </div>
      <input type="submit" value="ADD" />
    </form>
  )
}
export { TodoInput }
