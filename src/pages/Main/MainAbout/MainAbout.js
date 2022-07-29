import React from 'react';
import styles from "./MainAbout.module.css";
import gruz from "../../../Icons/Gruz.svg";
import vega from "../../../Icons/Vegetable.svg";
import ringtone from "../../../Icons/Ringtone.svg";
import location from "../../../Icons/Location.svg";

const MainAbout = () => {
    return (
        <div>
            <section className={styles.thirdPage}>
                <div className={styles.thirdContent}>
                    <div className={styles.thirdTitle}>
                        Почему выбирают нас:
                    </div>
                    <div className={styles.thirdPageProducts}>
                        <div className={styles.thirdPageProduct}>
                            <div className={styles.thirdPageImg}>
                                <img src={gruz} alt="car"/>
                            </div>
                            <div className={styles.thirdPageName}>
                                Мгновенная доставка
                            </div>
                            <div className={styles.thirdPageDescription}>
                                Доставим заказанную вами
                                еду за 30 минут + напиток в подарок
                            </div>
                        </div>
                        <div className={styles.thirdPageProduct}>
                            <div className={styles.thirdPageImg}>
                                <img src={vega} alt="plant"/>
                            </div>
                            <div className={styles.thirdPageName}>
                                Свежие продукты
                            </div>
                            <div className={styles.thirdPageDescription}>
                                Вся продукция хранится в хороших условиях тем самым продливая срок хранения
                            </div>
                        </div>
                        <div className={styles.thirdPageProduct}>
                            <div className={styles.thirdPageImg}>
                                <img src={ringtone} alt="ring"/>
                            </div>
                            <div className={styles.thirdPageName}>
                                Уникальное меню
                            </div>
                            <div className={styles.thirdPageDescription}>
                                Ежедневно мы обновляем наше
                                меню и том числе коктейльное
                            </div>
                        </div>
                        <div className={styles.thirdPageProduct}>
                            <div className={styles.thirdPageImg}>
                                <img src={location} alt="location"/>
                            </div>
                            <div className={styles.thirdPageName}>
                                Доставка
                            </div>
                            <div className={styles.thirdPageDescription}>
                                Мы быстро доставляем вашу еду по указанному адресу
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainAbout;