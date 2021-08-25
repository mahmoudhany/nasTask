import React from 'react'
import styles from './sideCart.module.scss'

function SideCart({ isOpen, cart, closeCart, qty }) {
  return (
    <div className={`${styles.sideCartWrapper} ${isOpen && styles.openCartWrapper}`}>
      <div className={`${styles.sideCart} ${isOpen && styles.openCart}`}>
        <div className={styles.closeBtn}>
          <button onClick={closeCart}>X</button>
        </div>
        <h2>My Cart</h2>
        {
          cart.length > 0 ?
            (<>
              <h3>Cart Summary</h3>
              {
                cart.map((item) => (
                  <div className={styles.cartItem} key={item.id}>
                    <div className={styles.productImage}>
                      <img src={item.mainImage} alt="product" />
                    </div>
                    <div className={styles.info}>
                      <h6>{item.title}</h6>
                      <span className={styles.quantity}>Quantity: {qty}</span>
                      <div className={styles.priceAndRemove}>
                        <span className={styles.price}>{item.price} <span>LE</span></span>
                        <button className={styles.removeItem}>Remove</button>
                      </div>
                    </div>
                  </div>
                ))
              }
              <div className={styles.total}>Total: 19.999 LE</div>
              <div className={styles.cta}>
                <button className={styles.reviewCart}>Review Cart</button>
                <button className={styles.checkout}>Complete Checkout</button>
              </div>
            </>)
            :
            <div className={styles.emptyCart}>
              <img src="/images/emptycart.png" alt="" />
            </div>
        }
      </div>
    </div>
  )
}

export default SideCart
