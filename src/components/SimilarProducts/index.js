import React from 'react'
import Product from '../Product'
import { products } from '../../services/products';
import styles from './similarProducts.module.scss'

function SimilarProducts() {
  return (
    <div className={styles.similarProducts}>
      <div className="container">
        <div className={styles.similarProductsContainer}>
          <h3>Similar Products</h3>
          <h4>You may like these products also</h4>
          <div className={styles.products}>
            {products.map(product => (
              <Product
                product={product}
                key={product.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimilarProducts
