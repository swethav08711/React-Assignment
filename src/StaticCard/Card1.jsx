import React from "react"
import style from "./Card.module.css"
function Card1() {
  return (
    <>
      <div className={style.main_body}>
        <img
          className={style.card_img}
          src="https://sleekgist.com/wp-content/uploads/2021/07/pizza.jpg"
          alt=""
        />
        <div className={style.card_body}>
          <h1 className={style.card_h1}>Pepperoni Pizza</h1>
          <p className={style.card_p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ad
            aut excepturi nisi eos facere aliquid numquam libero, ab nemo accus
          </p>
          <div className={style.card_par1}>
            <p>265 Cal</p>
            <p>P/F/C:12/10/31</p>
            <p>53.8 C</p>
          </div>
          <div className={style.card_par2}>
            <h1 className={style.card_h1}>$23.90</h1>
            <h2 className={style.card_h2}>$29.90</h2>
            <button className={style.card_button}>ORDER</button>
          </div>
        </div>
      </div>
    </>
  )
}
export { Card1 }
