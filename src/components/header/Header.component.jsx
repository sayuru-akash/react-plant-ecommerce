import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./Header.styles.css";

const Header = () => {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="./">
            <img
              src="https://i.ibb.co/qjbWXdK/fancy-hut-logo.png"
              alt="logo"
              class="nav-logo"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item me-lg-2 me-sm-0">
                <a class="nav-link active" aria-current="page" href="./">
                  Home
                </a>
              </li>
              <li class="nav-item me-lg-2 me-sm-0">
                <a class="nav-link" href="/shop">
                  Shop
                </a>
              </li>
              <li class="nav-item me-lg-2 me-sm-0">
                <a class="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li class="nav-item me-lg-2 me-sm-0">
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item me-lg-5 me-sm-0">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <div class="me-lg-4 me-sm-0 ">
              <form class="d-flex ">
                <input
                  class="form-control me-2 search-item"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div class="me-lg-4 me-sm-0 ">
              <i class="fa-solid fa-bag-shopping fs-3"></i>
            </div>
            <div>
              <a class="btn btn-outline-success" href="/auth">
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
