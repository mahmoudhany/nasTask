import React from 'react'
import FullProduct from '../components/FullProduct'
import SimilarProducts from '../components/SimilarProducts'

function Home({ addToCart }) {
  return (
    <>
      <FullProduct addToCart={addToCart} />
      <SimilarProducts />
    </>
  )
}

export default Home
