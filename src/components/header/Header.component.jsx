import { Fragment, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import "./Header.styles.css";

import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebaseauth.utils";

const defaultFormState = {
  sKey: "",
};

const Header = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const { sKey } = formState;
  const { currentUser } = useContext(UserContext);
  //console.log(currentUser);

  const navigate = useNavigate();

  const signOutHandler = () => {
    const signOutFunction = async () => {
      await signOutUser();
      navigate("/auth");
    };
    signOutFunction();
  };

  const searchHandler = (e) => {
    e.preventDefault();
    navigate(`/shop?search=${sKey}`);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://i.ibb.co/Vgx9sq8/fancy-hut-logo.png"
              alt="logo"
              className="nav-logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-lg-2 me-sm-0">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item me-lg-2 me-sm-0">
                <a className="nav-link active" href="/shop">
                  Shop
                </a>
              </li>
              <li className="nav-item me-lg-2 me-sm-0">
                <a className="nav-link active" href="/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item me-lg-2 me-sm-0">
                <a className="nav-link active" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item me-lg-5 me-sm-0">
                <a className="nav-link active" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="me-lg-4 me-sm-0 ">
              <form className="d-flex" onSubmit={searchHandler}>
                <input
                  className="form-control me-2 search-item"
                  placeholder="Search Products"
                  aria-label="Search Products"
                  id="sKey"
                  name="sKey"
                  value={sKey}
                  onChange={handleChange}
                ></input>
                <button className="btn btn-light" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div className="me-lg-4 me-sm-0">
              <a className="text-light" href="/cart">
                <i className="fa-solid fa-bag-shopping fs-3"></i>
              </a>
            </div>
            <div>
              {currentUser ? (
                <a className="btn btn-outline-light" onClick={signOutHandler}>
                  Sign Out
                </a>
              ) : (
                <a className="btn btn-outline-light" href="/auth">
                  Sign In
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Header;
