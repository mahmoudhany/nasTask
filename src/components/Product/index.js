import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../Rating'
import styles from './product.module.scss'

function Product(props) {
  const { image, title, price, discount, from, to, eta, rate } = props.product
  return (
    <Link to='/' className={styles.product}>
      <div className={styles.productContainer}>
        <div className={styles.circle}>
          <img src="/images/circle.svg" alt="" />
        </div>
        <div className={styles.productImg}>
          <img className={styles.cover} src={image} alt="" />
        </div>
        <div className={styles.details}>
          <h5 className={styles.title}>
            {title}
          </h5>
          <div className={styles.priceAndLogo}>
            <div className={styles.price}>
              <span className={styles.newPrice}>{price} LE</span>
              {discount &&
                <div className={styles.saleContainer}>
                  <span className={styles.oldPrice}>{price} LE</span>
                  <span className={styles.sale}>{discount}</span>
                </div>
              }
            </div>
            <div className={styles.logo}>
              <img src="/images/addidasLogo.svg" alt="logo" />
            </div>
          </div>
          <Rating rate={rate} />
          <div className={styles.location}>
            <p>From: <span>{from}</span></p>
            <p>To: <span>{to}</span></p>
            <p>In: <span>{eta}</span></p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product
