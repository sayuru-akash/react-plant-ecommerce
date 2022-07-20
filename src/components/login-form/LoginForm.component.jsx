import { useState, React } from "react";
import {
  signInWithGooglePopup,
  signInUserFromEmailAndPassword,
  createUserFromAuth,
} from "../../utils/firebase/firebaseauth.utils";

const defaultFormState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const { email, password } = formState;

  const resetForm = () => {
    setFormState(defaultFormState);
  };

  const signInWithGooglePU = async () => {
    const response = await signInWithGooglePopup();
    if (response) {
      await createUserFromAuth(response.user);
    }
  };

  const handleSubmit = (event) => {
    const handler = async () => {
      event.preventDefault();
      try {
        const { user } = await signInUserFromEmailAndPassword(email, password);
        // setCurrentUser(user);
        resetForm();
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
    <form className="mb-5" onSubmit={handleSubmit}>
      <div className="mb-5">
        <h3>LOG IN</h3>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">
          Username or email address
        </label>
        <input
          type="email"
          class="form-control"
          id="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
      </div>
      <button type="submit" class="btn btn-success mt-4 w-100">
        Sign In
      </button>
      <button
        type="button"
        class="btn btn-primary mt-4 w-100"
        onClick={signInWithGooglePU}
      >
        Sign In With Google
      </button>
    </form>
  );
};

export default LoginForm;
