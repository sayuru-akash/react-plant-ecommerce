import { React, useState } from "react";

import {
  createUserFromEmailAndPassword,
  createUserFromAuth,
} from "../../utils/firebase/firebaseauth.utils";

import { useNavigate } from "react-router-dom";

const defaultFormState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegistrationForm = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const { displayName, email, password, confirmPassword } = formState;

  const navigate = useNavigate();

  const resetForm = () => {
    setFormState(defaultFormState);
  };

  const handleSubmit = (event) => {
    const handler = async () => {
      event.preventDefault();
      if (
        displayName === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
      ) {
        alert("no empty values allowed");
        return;
      }
      const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(!email || regex.test(email) === false){
          alert("email is not valid");
          return;
      }
      if(password.length<=7){
          alert("password should have more than 7 characters");
          return;
      }
      if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
      }
      try {
        const response = await createUserFromEmailAndPassword(email, password);
        await createUserFromAuth(response.user, { displayName });
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
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <h3>REGISTER</h3>
      </div>
      <div className="mb-3">
        <label for="displayName" className="form-label">
          Display Name
        </label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">
          Email address
        </label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          name="email"
          value={email}
        />
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          onChange={handleChange}
          name="password"
          value={password}
        />
      </div>
      <div className="mb-3">
        <label for="repassword" className="form-label">
          Re-type Password
        </label>
        <input
          type="password"
          className="form-control"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
      </div>
      <button type="submit" className="btn btn-success mt-4 w-100">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
