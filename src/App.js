import React from "react"
import Counter from "./Counter/Counter"
import { Task } from "./Input/Task"
import { CssModel } from "./cssModel/CssModel"
import { Cards } from "./ReactMobileOS/Cards"
import { ContactUs } from "./Menu/ContactUs"
import { JoinUs } from "./Menu/JoinUs"
import { Settings } from "./Menu/Settings"
import { Search } from "./Menu/Search"
import { Help } from "./Menu/Help"
import { Home } from "./Menu/Home"
import { Download } from "./Menu/Download"
import { Login } from "./Menu/Login"
import { Button } from "./Menu2/Button"
import { Card1 } from "./StaticCard/Card1"
const style1 = {
  display: "flex",
  margin: "20px",
}
export default function App() {
  return (
    <div>
      <Counter />
      <Task />
      <CssModel />
      <Cards />
      <div style={style1}>
        <div>
          <ContactUs />
          <JoinUs />
          <Settings />
          <Search />
          <Help />
          <Home />
          <Download />
          <Login />
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div style={style1}>
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </div>
  )
}

//state is something that coimponent remembers
