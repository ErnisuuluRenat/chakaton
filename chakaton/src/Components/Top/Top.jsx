import React from 'react'
import styles from "./Top.module.css"

function Top() {
  return (
    <div className={styles.top}>
      <div className="container">
        <div className={styles.top__content}>
          <h1 className={styles['top__content-title']}>
            <div className={styles["top__content-title-highlite"]}>Легкие</div>
            <div className={styles["top__content-title-highlite"]}>и безопасные</div>
            <div className={styles["top__content-title-pink"]}>онлайн-платежи</div>
          </h1>
          <p className={styles['top__content-text']}>Миллионы компаний всех размеров используют. Наш сервис онлайн и лично для приема платежей, отправки выплат, автоматизации финансовых процессов и увеличения доходов.</p>
          <a href="#" className={styles['top__content-link']}>Начать сейчас</a>
        </div>
      </div>
    </div>
  )
}

export default Top