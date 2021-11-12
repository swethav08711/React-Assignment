import React from "react"
import styles from "./Menu.module.css"

function Download() {
  return (
    <>
      <button className={styles.button} style={{ backgroundColor: "gold" }}>
        Download
      </button>
    </>
  )
}
export { Download }
