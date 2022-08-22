import { useState, React } from "react";
import {
  signInWithGooglePopup,
  signInUserFromEmailAndPassword,
  createUserFromAuth,
  auth,
} from "../../utils/firebase/firebaseauth.utils";

import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { useEffect } from "react";

const defaultFormState = {
  email: "",
  password: "",
};

const defResetState = {
  resetMail: "",
};

const LoginForm = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const { email, password } = formState;
  const [resetMail, setEmail] = useState(defResetState);

  const resetForm = () => {
    setFormState(defaultFormState);
  };

  const navigate = useNavigate();

  const signInWithGooglePU = async () => {
    const response = await signInWithGooglePopup();
    if (response) {
      await createUserFromAuth(response.user);
      if (response.user.email === "admin@fancyhut.com") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    }
  };

  const triggerResetEmail = async () => {
    const pr = await sendPasswordResetEmail(auth, resetMail);
    if (pr) {
      alert("PASSWORD RESET mail sent");
    } else {
      alert("PASSWORD RESET mail not sent");
    }
  };

  const handleSubmit = (event) => {
    const handler = async () => {
      event.preventDefault();
      if (email === "" || password === "") {
        alert("no empty values allowed");
        return;
      }
      const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!email || regex.test(email) === false) {
        alert("email is not valid");
        return;
      }
      if (password.length <= 7) {
        alert("password should have more than 7 characters");
        return;
      }
      try {
        const { user } = await signInUserFromEmailAndPassword(email, password);
        // setCurrentUser(user);
        resetForm();
        if (user.email === "admin@fancyhut.com") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("User not found");
            break;
          case "auth/wrong-password":
            alert("Wrong password");
            break;
        }
        console.error("error during user login", error);
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
      <form className="mb-5" onSubmit={handleSubmit}>
        <div className="mb-5">
          <h3>LOG IN</h3>
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Username or email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
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
            id="password"
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-success mt-4 w-100">
          Sign In
        </button>
        <button
          type="button"
          className="btn btn-primary mt-4 w-100"
          onClick={signInWithGooglePU}
        >
          Sign In With Google
        </button>
        <div className="row justify-content-center">
          <a
            className="link-dark mt-4 text-center"
            data-bs-toggle="modal"
            data-bs-target="#forgetPasswordModal"
          >
            Forgot Password?
          </a>
        </div>
      </form>

      <div
        className="modal fade"
        id="forgetPasswordModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title" id="exampleModalLabel">
                Forgot Password?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row justify-content-center container">
                <div className="mb-3 col-lg-12 col-md-12 col-sm-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="resetMail"
                    onChange={(e) => setEmail(e.target.value)}
                    name="resetMail"
                  />
                </div>
                <div className="row justify-content-center">
                  <button
                    type="button"
                    className="btn btn-warning mt-4 mb-4 w-75"
                    onClick={triggerResetEmail}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
