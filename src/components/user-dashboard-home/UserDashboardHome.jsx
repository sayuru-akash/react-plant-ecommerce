import React from 'react';
import { Outlet } from 'react-router-dom';
import './UserDashboardHome.styles.css'

const UserDashboardHome = () => {
  return (
    <>
    <Outlet/>
        <div className="row m-4">
            <p >Hello Isuru</p>
            <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, 
                and edit your password and account details.</p>
        </div>
        <div className='row text-center'>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a href='/dashboard/addresses' className="w-100 h-100 text-dark text-decoration-none fw-bold">
                            <div className="row mb-3">
                                <i className="fa-solid fa-location-pin dashboard-icon"></i>
                            </div>
                            <span>Addresses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a href='/dashboard/orders' className="w-100 h-100 text-dark text-decoration-none fw-bold">
                            <div className="row mb-3">
                                <i className="fa-solid fa-clipboard dashboard-icon"></i>   
                            </div>
                            <span>Orders</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a href='/dashboard/account-settings' className="w-100 h-100 text-dark text-decoration-none fw-bold">
                            <div className="row mb-3">
                            <i className="fa-solid fa-gear dashboard-icon"></i>  
                            </div>
                            <span>Account Settings</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a href='' className="w-100 h-100 text-dark text-decoration-none fw-bold">
                            <div className="row mb-3">
                            <i className="fa-solid fa-right-from-bracket dashboard-icon"></i>
                            </div>
                            <span>Log Out</span>
                        </a>
                    </div>
                </div>
        </div>
    </>
  )
}

export default UserDashboardHome
