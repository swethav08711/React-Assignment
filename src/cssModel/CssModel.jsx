import React from "react"
import styles from "./CssStyle.module.css"
var style1 = {
  fontSize: "30px",
  background: "grey",
}
var style2 = {
  borderRadius: 30,
}
function CssModel() {
  return (
    <>
      <div>
        <button className={`${styles.one} ${styles.four}`}>One</button>
      </div>
      <div>
        <button style={{ fontSize: 100, backgroundColor: "cyan" }}>two</button>
      </div>
      <div>
        <button style={style1}>three</button>
      </div>
      <div>
        <button style={{ ...style1, ...style2 }}>four</button>
      </div>
    </>
  )
}
export { CssModel }
