import React from "react";
import RocketLauncher from "./RocketLauncher";
import "./HomePage.css";
import { Button } from "react-bootstrap";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { GiHand } from "react-icons/gi";

export const HomePage = () => {
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_box">
          <div className="home_icons">
            <a href="https://www.instagram.com/surath.jhakal/">
              <BsInstagram className="home_insta_icon" />
            </a>
            <a href="https://github.com/surathjhakal">
              <BsGithub className="home_github_icon" />
            </a>
            <a href="https://www.linkedin.com/in/surath-kumar-jhakal-6b200917b/">
              <BsLinkedin className="home_linkedin_icon" />
            </a>
          </div>
          <div className="home_details">
            <div className="home_title">
              Surath Jhakal
              <GiHand className="home__hand" />
            </div>
            <div className="home_subtitle">Full Stack Developer</div>
            <div className="home_info">
              I'm a full stack developer with a passion for creating beautiful
              and functional websites and applications
            </div>

            <Button className="home_contact_button">
              Contact Me <FiSend className="home_send" />
            </Button>
          </div>
          <div className="home_image"></div>
        </div>
      </div>
      <RocketLauncher />
    </div>
  );
};
