import { React, useState } from "react";

import {
  createUserFromEmailAndPassword,
  createUserFromAuth,
} from "../../utils/firebase/firebaseauth.utils";

const defaultFormState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegistrationForm = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const { displayName, email, password, confirmPassword } = formState;

  const resetForm = () => {
    setFormState(defaultFormState);
  };

  const handleSubmit = (event) => {
    const handler = async () => {
      event.preventDefault();
      if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
      }
      try {
        const response = await createUserFromEmailAndPassword(email, password);
        await createUserFromAuth(response.user, { displayName });
        // setCurrentUser(response.user);
        resetForm();
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
      <div class="mb-3">
        <label for="displayName" class="form-label">
          Display Name
        </label>
        <input
          type="text"
          class="form-control"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          onChange={handleChange}
          name="email"
          value={email}
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          onChange={handleChange}
          name="password"
          value={password}
        />
      </div>
      <div class="mb-3">
        <label for="repassword" class="form-label">
          Re-type Password
        </label>
        <input
          type="password"
          class="form-control"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
      </div>
      <button type="submit" class="btn btn-success mt-4 w-100">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
