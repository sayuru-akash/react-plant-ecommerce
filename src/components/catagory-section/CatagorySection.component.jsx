import React from 'react'
import CatagoryLoop from '../catagory-loop/CatagoryLoop.component'

const CatagorySection = () => {
  return (
    <div className='m-5'>
      <h3>Catagories</h3>
      <hr/>
      <div className='row'>
        <CatagoryLoop/>
        <CatagoryLoop/>
        <CatagoryLoop/>
        <CatagoryLoop/>
        <CatagoryLoop/>
        <CatagoryLoop/>
      </div>
    </div>
  )
}

export default CatagorySection