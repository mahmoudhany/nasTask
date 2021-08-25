import React from 'react'
import styles from './rating.module.scss'

function Rating({ rate, count }) {
  return (
    <div className={styles.rate}>
      <div className={styles.stars}>
        <img src="/images/yellowStar.svg" alt="" />
        <img src="/images/yellowStar.svg" alt="" />
        <img src="/images/yellowStar.svg" alt="" />
        <img src="/images/yellowStar.svg" alt="" />
        <img src="/images/star.svg" alt="" />
      </div>
      <span className={styles.ratePercent}>{rate}</span>
      {count && <span className={styles.ratesCount}>{count} Rates</span>}
    </div>
  )
}

export default Rating
