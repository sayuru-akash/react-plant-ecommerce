import React from 'react';
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className='row ml-sm-0 ml-lg-3 mr-sm-0 mr-lg-3 mt-3 mb-3'>
        <div className="col-lg-4 col-sm-12">
            <div className='p-5'>
                <h2>MY ACCOUNT</h2>
                <hr/>
                <ul className="nav flex-column text-start">
                    <li className="nav-item">
                        <a className="nav-link active text-dark" aria-current="page" href="/admin">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/admin/products">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/admin/blogs">Blog Posts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/admin/admin-orders">Orders</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/admin/users">Users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/admin/reports">Reports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/admin/categories">Categories</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/admin/feedbacks">Feedbacks</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-lg-8 col-sm-12 text-start">
            <div className='m-3'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard