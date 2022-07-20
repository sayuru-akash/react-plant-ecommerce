import { React, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer.component";
import Header from "../components/header/Header.component";
import About from "./about/About.layout";
import Authentication from "./authentication/Authentication.layout";
import Contact from "./contact/Contact.layout";
import Home from "./home/Home.layout";

function Layout() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default Layout;
