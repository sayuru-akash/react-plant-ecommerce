import React from 'react';
import { Outlet } from "react-router-dom";

function UserDashboard() {
  return (
    <div className='row ml-sm-0 ml-lg-3 mr-sm-0 mr-lg-3 mt-3 mb-3'>
        <div className="col-lg-4 col-sm-12">
            <div className='p-5'>
                <h2>MY ACCOUNT</h2>
                <hr/>
                <ul className="nav flex-column text-start">
                    <li className="nav-item">
                        <a className="nav-link active text-dark" aria-current="page" href="/dashboard">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/dashboard/orders">Orders</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/dashboard/addresses">Addresses</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/dashboard/account-settings">Account Settings</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-lg-8 col-sm-12 text-start">
            <Outlet />
        </div>
    </div>
  )
}

export default UserDashboard