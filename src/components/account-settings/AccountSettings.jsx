import React from 'react'
import { Outlet } from 'react-router-dom'

const AccountSettings = () => {
  return (
    <>
    <Outlet/>
    <form className='mb-5 p-5'>
        <div className='mb-5'>
            <h3>Account Settings</h3>
        </div>
        <div className="mb-3">
            <label htmlFor="first_name" className="form-label">First Name</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label htmlFor="last_name" className="form-label">Last Name</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label htmlFor="city" className="form-label">Display Name</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control"/>
        </div>
        <div className='mb-5 mt-5'>
            <h3>Change Password</h3>
        </div>
        <div className="row g-3">
            <div className="mb-3">
                <label htmlFor="city" className="form-label">Current password (leave blank to leave unchanged)</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">New password (leave blank to leave unchanged)</label>
                <input type="email" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Confirm new password</label>
                <input type="email" className="form-control"/>
            </div>
        </div>
        <button type="submit" className="btn btn-success mt-4 w-100">Save Changes</button>
    </form>
    </>
  )
}

export default AccountSettings