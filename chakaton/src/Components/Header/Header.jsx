import React from 'react'
import styles from "./Header.module.css"
import Navigation from '../Navigation/Navigation'

function Header() {
  return (
    <div className={styles.header}>
        <div className="container">
            <div className={styles.header__main}>
                <a href="/" className={styles.logo}>Logo</a>
                <Navigation />
            </div>
        </div>
    </div>
  )
}

export default Header