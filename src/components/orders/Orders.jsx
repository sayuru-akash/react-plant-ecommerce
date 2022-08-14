import React from 'react'
import { Outlet } from 'react-router-dom'
import OrdersTable from '../orders-table/OrdersTable.component'

const Orders = () => {
  return (
    <>
        <Outlet/>
        <OrdersTable/>
    </>
  )
}

export default Orders