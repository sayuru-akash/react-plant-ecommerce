import React from "react";
import { Outlet } from "react-router-dom";
import AboutSection from "../../components/about-section/AboutSection.component";
import YoutubeSection from "../../components/youtube-section/YoutubeSection.component";

const About = () => {
  return (
    <>
      <Outlet />
      <div className="mr-2 ml-2 mt-5 mb-5">
        <AboutSection />
        <YoutubeSection/>
      </div>
    </>
  );
};

export default About;
