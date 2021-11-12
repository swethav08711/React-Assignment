import React from "react"

const getStyleForType = type => {
  switch (type) {
    case "1":
      return {
        background: "grey",
      }
    case "2":
      return {
        background: "red",
      }
    case "3":
      return {
        background: "yellow",
      }
    case "4":
      return {
        background: "pink",
      }
    case "5":
      return {
        background: "purple",
      }
    case "6":
      return {
        background: "silver",
      }
    case "7":
      return {
        background: "gold",
      }
    case "8":
      return {
        background: "wheat",
      }
    default:
      return {}
  }
}
function MenuCard(props) {
  const { title, type } = props
  const style1 = {
    borderRadius: "50px",
    fontSize: "20px",
    color: "white",
    width: "150px",
    padding: "9px 0px",
    border: "none",
    display: "flex",
    marginTop: "20px",
    justifyContent: "center",
  }
  const style2 = getStyleForType(type)
  return (
    <>
      <button style={{ ...style1, ...style2 }}>{title}</button>
    </>
  )
}
export { MenuCard }
