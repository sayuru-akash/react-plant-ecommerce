import { React, useState } from "react";
import { Outlet } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const defaultFormState = {
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

const AccountSettings = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const { firstName, lastName, displayName,  email, oldPassword, newPassword,confirmNewPassword } = formState;

  const navigate = useNavigate();

  const resetForm = () => {
    setFormState(defaultFormState);
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function isValidatePassword(password)
  {
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)
  }

  const handleSubmit = (event) => {
    const handler = async () => {
      event.preventDefault();
      if (firstName == "" || lastName == "" || displayName == "" || email == "" || oldPassword == "" || newPassword == "" || confirmNewPassword == "") {
        alert("no empty values allowed");
        return;
      }
      if (!isValidEmail(email)) {
        alert('Email is invalid');
        return;
      }
      if (!isValidatePassword(oldPassword)) {
        alert('invalid password  is format');
      }
      if (!isValidatePassword(newPassword)) {
        alert('invalid password  is format');
      }
      if (newPassword !== confirmNewPassword) {
        alert("Passwords don't match");
        return;
      }
      try {
        // const response = await createUserFromEmailAndPassword(email, password);
        // await createUserFromAuth(response.user, { displayName });
        // setCurrentUser(response.user);
        resetForm();
        navigate("/dashboard");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("Email already in use");
        }
        console.error("error during user creation", error);
      }
    };

    handler().catch((error) => {
      console.error(error);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
    <Outlet/>
    <form className='mb-5 p-5' onSubmit={handleSubmit}>
        <div className='mb-5'>
            <h3>Account Settings</h3>
        </div>
        <div className="mb-3">
            <label htmlFor="first_name" className="form-label">First Name</label>
            <input 
            type="text" 
            className="form-control"
            onChange={handleChange}
            name="firstName"
            value={firstName}/>
        </div>
        <div className="mb-3">
            <label htmlFor="last_name" className="form-label">Last Name</label>
            <input type="text"
            className="form-control"
            onChange={handleChange}
            name="lastName"
            value={lastName}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="city" className="form-label">Display Name</label>
            <input type="text" 
            className="form-control"
            onChange={handleChange}
            name="displayName"
            value={displayName}
            />
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
                <input type="text" className="form-control"
                onChange={handleChange}
                name="oldPassword"
                value={oldPassword}/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">New password (leave blank to leave unchanged)</label>
                <input type="email" className="form-control"
                onChange={handleChange}
                name="newPassword"
                value={newPassword}/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Confirm new password</label>
                <input type="email" className="form-control"
                onChange={handleChange}
                name="confirmNewPassword"
                value={confirmNewPassword}/>
            </div>
        </div>
        <button type="submit" className="btn btn-success mt-4 w-100">Save Changes</button>
    </form>
    </>
  )
}

export default AccountSettings