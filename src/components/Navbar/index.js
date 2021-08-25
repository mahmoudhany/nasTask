import React from 'react'
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import styles from './navbar.module.scss'

function Navbar({ qty, openCart }) {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarContainer}>
          <form className={styles.searchInputContainer}>
            <Icon
              src="/images/searchIcon.svg"
              alt="phoneIcon"
              className={styles.searchIcon}
            />
            <input type="search" name="" id="" placeholder='Search' />
          </form>
          <div className={styles.navbarLogo}>
            <img src="/images/addidasLogo.svg" alt="" />
          </div>
          <ul className={styles.navbarItems}>
            <li>
              <button onClick={openCart}>
                <Icon
                  src="/images/cartIcon.svg"
                  alt="phoneIcon"
                />
                <div className={styles.cartCount}>{qty}</div>
                <span>Cart</span>
              </button>
            </li>
            <li>
              <Link to="/">
                <Icon
                  src="/images/favoriteIcon.svg"
                  alt="basketIcon"
                /> <span>Wishlist</span>
              </Link>
            </li>
            <li>

              <Link to="/">
                <Icon
                  src="/images/loginIcon.svg"
                  alt="locationIcon"
                />
                <span>Login</span>
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Navbar
