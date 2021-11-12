import React from "react"
import { MenuCard } from "./MenueCard"
function Button() {
  return (
    <>
      <MenuCard type="1" title="Join Us" />
      <MenuCard type="2" title="Settings" />
      <MenuCard type="3" title="Login" />
      <MenuCard type="4" title="Contact Us" />
      <MenuCard type="5" title="Search" />
      <MenuCard type="6" title="Help" />
      <MenuCard type="7" title="Home" />
      <MenuCard type="8" title="Download" />
    </>
  )
}
export { Button }
