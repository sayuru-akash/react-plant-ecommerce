import {React, useContext} from 'react';
import { Outlet } from "react-router-dom";
import { UserContext } from '../../context/user.context';

import {useNavigate} from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebaseauth.utils';

const AdminDashboardHome = () => {
    const { currentUser } = useContext(UserContext);

    const navigate = useNavigate();

    const signOutHandler = () => {
        const signOutFunction = async () => {
          await signOutUser();
          navigate("/auth");
        };
        signOutFunction();
      };

  return (
    <>
    <Outlet/>
        <div className="row m-4">
        {currentUser ? (
               <p >Hello Admin!</p>
              ) : (
                <p>Hello Guest</p>
              )}
            <p>From your account dashboard you can view your recent orders, manage your admin data, 
                and edit your password and account details.</p>
        </div>
        <div className='row text-center'>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a href='/admin/products' className="w-100 h-100 text-dark text-decoration-none fw-bold">
                            <div className="row mb-3">
                                <i className="fa-solid fa-location-pin dashboard-icon"></i>
                            </div>
                            <span>Products</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a href='/admin/blogs' className="w-100 h-100 text-dark text-decoration-none fw-bold">
                            <div className="row mb-3">
                            <i className="fa-brands fa-blogger-b dashboard-icon"></i>
                            </div>
                            <span>Blogs</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a href='/admin/orders' className="w-100 h-100 text-dark text-decoration-none fw-bold">
                            <div className="row mb-3">
                                <i className="fa-solid fa-clipboard dashboard-icon"></i>   
                            </div>
                            <span>Orders</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a href='/admin/users' className="w-100 h-100 text-dark text-decoration-none fw-bold">
                            <div className="row mb-3">
                            <i className="fa-solid fa-users dashboard-icon"></i>   
                            </div>
                            <span>Users</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a href='/admin/reports' className="w-100 h-100 text-dark text-decoration-none fw-bold">
                            <div className="row mb-3">
                            <i className="fa-solid fa-chart-pie dashboard-icon"></i>   
                            </div>
                            <span>Reports</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a href='/admin/categories' className="w-100 h-100 text-dark text-decoration-none fw-bold">
                            <div className="row mb-3">
                            <i className="fa-solid fa-rectangle-list dashboard-icon"></i>
                            </div>
                            <span>Categories</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a href='/admin/feedbacks' className="w-100 h-100 text-dark text-decoration-none fw-bold">
                            <div className="row mb-3">
                            <i className="fa-solid fa-comment dashboard-icon"></i>  
                            </div>
                            <span>Feedbacks</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="p-4 border m-3">
                        <a className="w-100 h-100 text-dark text-decoration-none fw-bold" type='button' onClick={signOutHandler}>
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

export default AdminDashboardHome