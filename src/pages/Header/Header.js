import React from "react";
import styles from "./Header.module.css"
import headerLogo from "../../Img/logo.svg"
import headerItemPhone from "../../Icons/phone.svg"
import headerBask from "../../Icons/bask.svg"

const Header = () => {
    return (
        <div className={styles.headerContent}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerLogo}>
                    <img src={headerLogo} alt=""/>
                </div>
                <ul className={styles.headerMenu}>
                    <li><a href="#" className={styles.headerItem}><span>Главная</span></a></li>
                    <li><a href="#" className={styles.headerItem}>Меню</a></li>
                    <li><a href="#" className={styles.headerItem}>Доставка</a></li>
                    <li><a href="#" className={styles.headerItem}>Контакты</a></li>
                    <li><img src={headerItemPhone} alt=""/>+996500405988</li>
                    <li><img className={styles.headerBasket} src={headerBask} alt=""/><span>1</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;