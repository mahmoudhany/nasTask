import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import styles from './header.module.scss'

class Header extends Component {
  state = {
    toggleHeader: false
  }

  handleToggle = () => {
    this.setState(prev => ({ toggleHeader: !prev.toggleHeader }))
    console.log(this.state.toggleHeader);
  }
  render() {
    return (
      <header className={styles.header} >
        <div className="container">
          <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
              <button
                className={styles.menuBtn}
                onClick={this.handleToggle}
              >
                <Icon
                  src="/images/toggleIcon.svg"
                  alt="toggleIcon"
                />
              </button>

              <button
                className={styles.menuBtnLg}
              >
                <Icon
                  src="/images/toggleIcon.svg"
                  alt="toggleIcon"
                />
              </button>

              <img
                className={styles.blackLogo}
                src="/images/blackLogo.svg"
                alt=""
              />
            </div>
            <div className={styles.offers}>
              <Icon
                className={styles.arrow}
                src="/images/arrowLeft.svg"
                alt="arrow_icon"
              />
              <p className={styles.offersContent}>
                Valentine’s Day Offers! Buy Two Get One Free Shop Now
                <Link to="/">Show now</Link>
              </p>
              <Icon
                className={styles.arrow}
                src="/images/arrowRight.svg"
                alt="arrow_icon"
              />
            </div>
            <ul className={this.state.toggleHeader ? styles.mobileOpertation : styles.operations}>
              <li>
                <Link to="/">
                  <Icon
                    src="/images/phoneIcon.svg"
                    alt="phoneIcon"
                  />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>

                <Link to="/">
                  <Icon
                    src="/images/basketIcon.svg"
                    alt="basketIcon"
                  /> <span>Track Order</span>
                </Link>
              </li>
              <li>

                <Link to="/">
                  <Icon
                    src="/images/locationIcon.svg"
                    alt="locationIcon"
                  />
                  <span>Find A Store</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
