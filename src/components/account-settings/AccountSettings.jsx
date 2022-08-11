import { React, useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import {
  getUser,
  updateUser,
} from "../../utils/firebase/firebasefirestore.utils";

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
  const { currentUser } = useContext(UserContext);
  const currentUserID = currentUser.uid;

  const [userData, setUserData] = useState([]);
  const [formState, setFormState] = useState(defaultFormState);

  const {
    firstName,
    lastName,
    displayName,
    email,
    oldPassword,
    newPassword,
    confirmNewPassword,
  } = formState;

  const getUserData = async () => {
    const userData = await getUser(currentUserID);
    await setUserData(userData);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
    setFormState({
      ...formState,
      firstName: userData.firstName,
      lastName: userData.lastName,
      displayName: currentUser.displayName,
      email: currentUser.email,
    });
  }, [currentUser, userData.firstName, userData.lastName]);

  const resetForm = () => {
    setFormState(defaultFormState);
  };

  const handleSubmit = (event) => {
    const handler = async () => {
      event.preventDefault();
      if (
        firstName == "" ||
        lastName == "" ||
        displayName == "" ||
        email == ""
      ) {
        alert("no empty values allowed");
        return;
      }
      const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!email || regex.test(email) === false) {
        alert("email is not valid");
        return;
      }
      try {
        await updateUser(currentUserID, firstName, lastName);
        resetForm();
        getUserData();
        navigate("/dashboard/account-settings");
      } catch (error) {
        console.error("error occurred", error);
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
      <Outlet />
      <form className="mb-5 p-5" onSubmit={handleSubmit}>
        <div className="mb-5">
          <h3>Account Settings</h3>
        </div>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="firstName"
            value={firstName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="lastName"
            value={lastName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            Display Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="displayName"
            value={displayName}
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            onChange={handleChange}
            name="email"
            value={email}
            disabled
          />
        </div>
        <div className="mb-5 mt-5">
          <h3>Change Password</h3>
        </div>
        <div className="row g-3">
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              Current password (leave blank to leave unchanged)
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              name="oldPassword"
              value={oldPassword}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              New password (leave blank to leave unchanged)
            </label>
            <input
              type="email"
              className="form-control"
              onChange={handleChange}
              name="newPassword"
              value={newPassword}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Confirm new password (leave blank to leave unchanged)
            </label>
            <input
              type="email"
              className="form-control"
              onChange={handleChange}
              name="confirmNewPassword"
              value={confirmNewPassword}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success mt-4 w-100">
          Save Changes
        </button>
      </form>
    </>
  );
};

export default AccountSettings;
