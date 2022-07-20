import React from 'react'
import { Outlet } from 'react-router-dom'

const Orders = () => {
  return (
    <>
        <Outlet/>
        <div className="m-4">
            <div className="alert alert-warning" role="alert">
            <i className="fa-solid fa-circle-exclamation me-3 ml-5"></i> BROWSE PRODUCTS No order has been made yet.
            </div>
        </div>
    </>
  )
}

export default Orders