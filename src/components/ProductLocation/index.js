import React from 'react'
import { Link } from 'react-router-dom'
import styles from './productLocation.module.scss'

function ProductLocation() {
  return (
    <div className={styles.productLocation}>
      <div className="container">
        <div className={styles.productLocationContainer}>
          <Link to=''>Men</Link> /
          <Link to=''>Clothing</Link> /
          <Link to=''>Tops</Link> /
          <Link to=''>Adidas</Link> /
          <Link to=''>Black T-Shirt</Link>
        </div>
      </div>
    </div >
  )
}

export default ProductLocation
