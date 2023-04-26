import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineAppstore, AiOutlineHome } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { IoMdPerson } from "react-icons/io";
import { CgFileDocument } from "react-icons/cg";
import { BiSend } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import "./Header.css";

export const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinksBanner = () => {
    setShowLinks(true);
  };

  const handleHideLinksBanner = () => {
    setShowLinks(false);
  };

  return (
    <div className="Header_box">
      <h1 className="Header_title">Surath Jhakal</h1>
      <div className="Header_website_links">
        <Link to="/">
          <Button className="Header_navigation_button" variant="Default">
            Home
          </Button>
        </Link>
        <Link to="/about">
          <Button className="Header_navigation_button" variant="Default">
            About
          </Button>
        </Link>
        <Link to="/skills">
          <Button className="Header_navigation_button" variant="Default">
            Skills
          </Button>
        </Link>
        <Link to="/projects">
          <Button className="Header_navigation_button" variant="Default">
            Projects
          </Button>
        </Link>
      </div>
      <div className="Header_mobile_links">
        <AiOutlineAppstore size={25} onClick={handleShowLinksBanner} />
        {showLinks && (
          <div className="Header_links_banner">
            <div className="Header_cancel_banner">
              <RxCross1 onClick={handleHideLinksBanner} />
            </div>
            <div className="Header_links_banner_box">
              <Link to="/" className="Header_links_a_tag">
                <Button className="Header_navigation_button" variant="Default">
                  <AiOutlineHome size={18} />
                  Home
                </Button>
              </Link>
              <Link to="/about" className="Header_links_a_tag">
                <Button className="Header_navigation_button" variant="Default">
                  <IoMdPerson size={18} />
                  About
                </Button>
              </Link>
              <Link to="/skills" className="Header_links_a_tag">
                <Button className="Header_navigation_button" variant="Default">
                  <CgFileDocument size={18} />
                  Skills
                </Button>
              </Link>
              <Link to="/projects" className="Header_links_a_tag">
                <Button className="Header_navigation_button" variant="Default">
                  <BsImage size={18} />
                  Projects
                </Button>
              </Link>
              <Link to="/contact" className="Header_links_a_tag">
                <Button className="Header_navigation_button" variant="Default">
                  <BiSend size={18} />
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
