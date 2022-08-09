import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../context/user.context';

const AddressesView = () => {
    const { currentUser } = useContext(UserContext);
  return (
    <>
    <Outlet/>
        <div className="row m-4">
        {currentUser ? (
               <p >Hello {currentUser.displayName}</p>
              ) : (
                <p>Hello Guest</p>
              )}
            <p className='mt-2'>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, 
                and edit your password and account details.</p>
            <p className='mt-2'>
                You have not set up this type of address yet.
            </p>
            <div className="mb-5 mt-3 row">
          <h3>All Users</h3>
      </div>
      <div className="table-responsive">
        <table className="table bordered striped">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Country</th>
              <th>Town / City</th>
              <th>PostCode / ZIP</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
              <tr >
                <th scope="row">1</th>
                <td>mmm</td>
                <td>mmm</td>
                <td>mmm</td>
                <td>mmm</td>
                <td>mmm</td>
                <td>mmm</td>
                <td>mmm</td>
                <td>
                  <button  className="btn btn-danger">
                    <i className="fa-solid fa-trash-can me-2"></i>Delete
                  </button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
            <div className="row mt-4">
                <a  className="btn btn-success" href='/dashboard/address-modify'>Add Address</a>
            </div>
        </div>
    </>
  )
}

export default AddressesView