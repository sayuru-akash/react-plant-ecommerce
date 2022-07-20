import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import ContactForm from "../../components/contact-form/ContactForm.component";
import ContactSection from "../../components/contact-section/ContactSection.component";

const Contact = () => {
  return (
    <Fragment>
      <Outlet />
      <div className="row text-start pl-5 pr-5 pb-5">
        <div className="col-lg-6 col-sm-12">
          <ContactSection />
        </div>
        <div className="col-lg-6 col-sm-12">
          <ContactForm />
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
