import React from 'react'
import ProductLocation from '../ProductLocation'
import CategoryTitle from '../CategoryTitle'
import Rating from '../Rating'
import Icon from '../Icon'

import singleProduct from '../../services/singleProduct'
import styles from './fullProduct.module.scss'

function FullProduct({ addToCart }) {
  const { title, logo, category, rate, rateCount, price, discount, sizes, colors, shirts, mainImage } = singleProduct
  return (
    <div className={styles.product}>
      <ProductLocation />
      <div className="container">
        <div className={styles.productContainer}>
          <div className={styles.preview}>
            <div className={styles.circle}>
              <img src="/images/circle.svg" alt="" />
            </div>
            <div className={styles.mainPreview}>
              <img
                src={mainImage}
                alt="Main"
              />
            </div>
            <div className={styles.miniPreviews}>
              <Icon src="/images/arrowLeft.svg" alt="arrow_icon" />
              {shirts.map((shirt, i) => (
                <div
                  className={styles.miniImage}
                  key={i}
                >
                  <img
                    src={shirt}
                    alt={shirt}
                  />
                </div>
              ))}
              <Icon src="/images/arrowRight.svg" alt="arrow_icon" />
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.info}>
              <div className={styles.logo}>
                <img src={logo} alt="logo" />
              </div>
              <h3 className={styles.title}>
                {title}
              </h3>
              <div className={styles.category}>
                {category}
              </div>
              <Rating rate={rate} count={rateCount} />
              <div className={styles.price}>
                <span className={styles.newPrice}>{price} LE</span>
                <span className={styles.oldPrice}>{price} LE</span>
                {
                  discount &&
                  <span className={styles.sale}>{discount}</span>
                }
              </div>
            </div>
            <div className={styles.size}>
              <CategoryTitle title='Size' />
              <div className={styles.sizes}>
                {
                  sizes.map((size, i) => (
                    <button key={i}>
                      <span>{size}</span>
                    </button>
                  ))
                }
              </div>
            </div>
            <div className={styles.color}>
              <CategoryTitle title='Color' />
              <div className={styles.colors}>
                {colors.map((color, i) => (
                  <button key={i}>
                    <img src={color} alt="" />
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.quantity}>
              <CategoryTitle title='Quantity' />
              <div className={styles.iterator}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div className={styles.cartBtns}>
                <button className={styles.addToCart} onClick={() => addToCart(singleProduct)}>Add To Cart</button>
                <button className={styles.pickUp}>Pickup From Store</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullProduct
