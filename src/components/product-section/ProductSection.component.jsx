import React from 'react'
import ProductLoop from '../product-loop/ProductLoop.component'

const ProductSection = () => {
  return (
    <div className='m-5'>
      <h3>PRODUCTS</h3>
      <hr/>
      <div className='row'>
      <ProductLoop/>
      <ProductLoop/>
      <ProductLoop/>
      <ProductLoop/>
      </div>
    </div>
  )
}

export default ProductSection
