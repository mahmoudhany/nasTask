import React from 'react'
import { Link } from 'react-router-dom'
import styles from './categories.module.scss'

function Categories() {
  return (
    <div className={styles.categories}>
      <div className="container">
        <ul className={styles.categoriesContainer}>
          <li>
            <Link to="/">
              Men
            </Link>
          </li>
          <li>
            <Link to="/">
              Women
            </Link>
          </li>
          <li>
            <Link to="/">
              Unisex
            </Link>
          </li>
          <li>
            <Link to="/">
              Kids
            </Link>
          </li>
          <li>
            <Link to="/">
              Best Sellers
            </Link>
          </li>
          <li>
            <Link to="/">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link to="/">
              Offers
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Categories
