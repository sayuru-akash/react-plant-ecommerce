import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./Header.styles.css";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="./">
            <img
              src="https://i.ibb.co/qjbWXdK/fancy-hut-logo.png"
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
                <a className="nav-link active" aria-current="page" href="./">
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
              <form className="d-flex ">
                <input
                  className="form-control me-2 search-item"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn btn-light" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div className="me-lg-4 me-sm-0">
              <a className="text-light" href="/cart" >
              <i className="fa-solid fa-bag-shopping fs-3"></i>
              </a>
            </div>
            <div>
              <a className="btn btn-outline-light" href="/auth">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Header;
