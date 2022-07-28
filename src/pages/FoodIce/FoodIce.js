import React from "react";
import styles from "./FoodIce.module.css"
import foodLogo from "../../Icons/strelka.svg"
import foodImg from "../../Img/burger.png"
import foodImg2 from "../../Img/lce.png"
import foodPrice from "../../Icons/price.svg"

const FoodIce = () => {
    return (
        <div className={styles.foodContent}>
            <div>
                <div className={styles.foodText}>
                    <h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
                </div>
                <div className={styles.foodP}>
                    <p>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен всегда горячим и ароматным.</p>
                </div>
                <button className={styles.foodButton}>ПЕРЕЙТИ В МЕНЮ
                    <img src={foodLogo} alt=""/></button>
            </div>
            <div className={styles.foodImages}>
                <img className={styles.foodImg} src={foodImg} alt=""/>
                <div className={styles.foodPrice}>
                    <img src={foodPrice} alt=""/>
                </div>
                <img className={styles.foodImg2} src={foodImg2} alt=""/>
            </div>
        </div>



    )
}

export default FoodIce;