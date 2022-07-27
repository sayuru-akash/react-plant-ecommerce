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
            <div className="row mt-4">
                <a  className="btn btn-success" href='/dashboard/address-modify'>Add Address</a>
            </div>
        </div>
    </>
  )
}

export default AddressesView