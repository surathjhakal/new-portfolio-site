import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contactUs">
      <div className="leftSide">
        <h1 className="contactUs_title">Get in Touch</h1>
        <p style={{ paddingBottom: "0.4rem" }}>
          Please fill out the form and we will be in touch with lightening
          speed.
        </p>
        <div className="contactUs_form">
          <input
            className="contactUs_inputs"
            name="contactUs_name"
            type="text"
            placeholder="Name"
          />
          <input
            className="contactUs_inputs"
            name="contactUs_email"
            type="email"
            placeholder="Your email address"
          />
          <textarea
            className="contactUs_inputs"
            name="contactUs_message"
            cols="30"
            rows="4"
            placeholder="Message"
          ></textarea>
          <button className="contactUs_submit" name="submit" type="submit">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
