import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import AboutSection from "../../components/about-section/AboutSection.component";

const About = () => {
  return (
    <Fragment>
      <Outlet />
      <div className="mr-2 ml-2 mt-5 mb-5">
        <AboutSection />
      </div>
    </Fragment>
  );
};

export default About;
