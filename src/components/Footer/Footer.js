import React from "react";
import "./Footer.css";
import logo from "../THE.png";
import { Link } from "react-router-dom";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaMobile,
} from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
  return (
    <div className="footer-comp">
      <div className="company-info-comp">
        <div className="company-logo-comp">
          <Link to="/">
            <img src={logo} alt="Not Found ;(" />
          </Link>
          <div className="footer-nav-logo">
            <Link to="/">
              <span className="footer-logo-rot">The</span>
              <span className="footer-logo2"> Siren</span>
            </Link>
          </div>
        </div>
        <div className="company-desc">
          The Siren is India's leading blog Webapp providing latest and hot news
          straight to your devices.
        </div>
        <div className="company-social">
          <FaLinkedin />
          <FaTwitterSquare />
          <FaFacebookSquare />
          <PiInstagramLogoFill />
        </div>
      </div>
      <div className="footer-actions-container">
        <div>
          <h2>Services</h2>
          <div className="footer-service-nav">
            <Link to="/">Home</Link>
            <Link to="/bollywood">Bollywood</Link>
            <Link to="/technology">Technology</Link>
            <Link to="/hollywood">Hollywood</Link>
            <Link to="/fitness">Fitness</Link>
            <Link to="/food">Food</Link>
          </div>
        </div>
        <div>
          <h2>Resources</h2>
          <div className="footer-service-nav">
            <Link to="/help">Help Centre</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
        <div className="footer-company-info">
          <h1>Ready to get started?</h1>
          <button className="css-button-arrow--black">Book a demo</button>
          <div className="footer-company-align">
            <FaMobile /> +91-9111001089
          </div>
          <div className="footer-company-align">
            <BiLogoGmail /> support@thesiren.in
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
