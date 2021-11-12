import React from "react"
import { ListHeader } from "./ListHeader"
import { ListItems } from "./ListItems"
function List() {
  return (
    <>
      <ListHeader title="Shop by category" />
      <ListItems />
    </>
  )
}
export { List }
