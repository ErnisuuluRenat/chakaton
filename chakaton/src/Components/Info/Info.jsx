import React from 'react'
import styles from "./Info.module.css"

const Info = () => {
  return (
    <div className={styles["info"]}>
        <div className="container">
            <div className={styles["info__content"]}>
                <div className={styles["images"]}>
                    <div className={styles["images__item-1"]}><img src="../../../public/images/figure(1).png" alt="" /></div>
                    <div className={styles["images__item-2"]}><img src="../../../public/images/figure(3).png" alt="" /></div>
                    <div className={styles["images__item-3"]}><img src="../../../public/images/figure(2).png" alt="" /></div>
                </div>
            <div className={styles["info__text"]}>
                <p className={styles["info__text-title"]}>Полностью интегрированный набор платежных продуктов</p>
                <p className={styles["info__text-p"]}>Мы объединяем все, что требуется для создания веб-сайтов и приложений, которые принимают платежи и отправляют выплаты по всему миру. Продукты Stripe позволяют осуществлять платежи онлайн и лично розничным продавцам, компаниям, занимающимся подпиской, программным платформам и маркетплейсам, а также всему, что находится между ними.</p>
            </div>
            </div>
            <div className={styles["super__info"]}>
                <div className={styles["super__info-hero"]}>
                    <p className={styles["super__info-title"]}>Самые мощные и простые в использовании API в мире</p>
                    <p className={styles["super__info-sTitle"]}>Инструменты для каждого стека</p>
                    <p className={styles["super__info-text"]}>Мы предлагаем клиентские и серверные библиотеки на всех языках - от React и PHP до .NET и iOS.</p>
                    <p className={styles["super__info-sTitle"]}>Готовые интеграции</p>
                    <p className={styles["super__info-text"]}>Используйте интеграцию с такими системами, как Shopify, WooCommerce, NetSuite и другими.</p>
                </div>
                <div className="super__info-code">

                </div>
            </div>
        </div>
    </div>
  )
}

export default Info