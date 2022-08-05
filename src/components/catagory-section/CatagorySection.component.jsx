import React from 'react'
import CatagoryLoop from '../catagory-loop/CatagoryLoop.component'

const CatagorySection = () => {
  return (
    <div className='m-5'>
      <h3>Categories</h3>
      <hr/>
      <div className='row'>
        <CatagoryLoop/>
      </div>
    </div>
  )
}

export default CatagorySection