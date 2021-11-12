import React from "react"
import styles from "./Menu.module.css"

function Home() {
  return (
    <>
      <button className={styles.button} style={{ backgroundColor: "Purple" }}>
        Home
      </button>
    </>
  )
}
export { Home }
