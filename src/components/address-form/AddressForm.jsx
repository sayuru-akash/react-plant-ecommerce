import React from 'react'
import { Outlet } from 'react-router-dom'

const AddressForm = () => {
  return (
    <>
    <Outlet/>
    <form className='mb-5 p-5'>
        <div className='mb-5'>
            <h3>ADD ADDRESS</h3>
        </div>
        <div className="mb-3">
            <label for="first_name" className="form-label">First Name</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label for="last_name" className="form-label">Last Name</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label for="select_country" className="form-label">Select Country</label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Select Country</option>
                <option value="1">Sri Lanka</option>
                <option value="2">UK</option>
                <option value="3">USA</option>
            </select>
        </div>
        <div className="mb-3">
            <label for="address" className="form-label">Address</label>
            <textarea rows="3"className="form-control">
            </textarea>
        </div>
        <div className="mb-3">
            <label for="city" className="form-label">Town / City</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label for="postal_code" className="form-label">Postcode / ZIP</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label for="phone" className="form-label">Phone</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label for="email" className="form-label">Email Address</label>
            <input type="text" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-success mt-4 w-100">Save Address</button>
    </form>
    </>
  )
}

export default AddressForm