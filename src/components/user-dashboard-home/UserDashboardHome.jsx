import { React, useContext } from "react";
import { Outlet } from "react-router-dom";
import "./UserDashboardHome.styles.css";

import { UserContext } from "../../context/user.context";

import { useNavigate } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebaseauth.utils";

const UserDashboardHome = () => {
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
      <Outlet />
      <div className="row m-4">
        {currentUser ? (
          <p>Hello {currentUser.displayName}</p>
        ) : (
          <p>Hello Guest</p>
        )}
        <p>
          From your account dashboard you can view your recent orders, manage
          your shipping and billing addresses, and edit your password and
          account details.
        </p>
      </div>
      <div className="row text-center">
        <div className="col-lg-6 col-sm-12">
          <div className="p-4 border m-3">
            <a
              href="/dashboard/addresses"
              className="w-100 h-100 text-dark text-decoration-none fw-bold"
            >
              <div className="row mb-3">
                <i className="fa-solid fa-location-pin dashboard-icon"></i>
              </div>
              <span>Addresses</span>
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="p-4 border m-3">
            <a
              href="/dashboard/orders"
              className="w-100 h-100 text-dark text-decoration-none fw-bold"
            >
              <div className="row mb-3">
                <i className="fa-solid fa-clipboard dashboard-icon"></i>
              </div>
              <span>Orders</span>
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="p-4 border m-3">
            <a
              href="/dashboard/account-settings"
              className="w-100 h-100 text-dark text-decoration-none fw-bold"
            >
              <div className="row mb-3">
                <i className="fa-solid fa-gear dashboard-icon"></i>
              </div>
              <span>Account Settings</span>
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="p-4 border m-3">
            <a
              type="button"
              className="w-100 h-100 text-dark text-decoration-none fw-bold"
              onClick={signOutHandler}
            >
              <div className="row mb-3">
                <i className="fa-solid fa-right-from-bracket dashboard-icon"></i>
              </div>
              <span>Log Out</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboardHome;
