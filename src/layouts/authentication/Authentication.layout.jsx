import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import LoginForm from "../../components/login-form/LoginForm.component";
import RegistrationForm from "../../components/registration-form/RegistrationForm.component";

const Authentication = () => {
  return (
    <Fragment>
        <Outlet/>
      <div className="row text-start p-5">
        <div className="col-lg-6 col-sm-12 p-lg-5 p-sm-0">
          <LoginForm />
        </div>
        <div className="col-lg-6 col-sm-12 p-lg-5 p-sm-0">
          <RegistrationForm />
        </div>
      </div>
    </Fragment>
  );
};

export default Authentication;
