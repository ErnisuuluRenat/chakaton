import React from 'react'
import styles from "./Navigation.module.css"

function Navigation() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__list}>
            <li className={styles['menu__list-item']}><a className={styles['menu__list-link']}>Главная</a></li>
            <li className={styles['menu__list-item']}><a className={styles['menu__list-link']}>О нас</a></li>
            <li className={styles['menu__list-item']}><a className={styles['menu__list-link']}>Контакты</a></li>
            <li className={styles['menu__list-item']}><a className={styles['menu__list-link--button']}>Войти</a></li>
        </ul>
    </nav>
  )
}

export default Navigation