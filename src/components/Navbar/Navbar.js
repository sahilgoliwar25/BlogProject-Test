import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [data, setData] = useState(false);
  // console.log(data);
  const handleNavClick = () => {
    setData(false);
  };
  return (
    <div className="nav-Container">
      <div className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <span className="logo-rot">The</span>
            <span className="logo2"> Siren</span>
          </Link>
          <div className="nav-dropdown">
            <button className="dropdown-btn" onClick={() => setData(!data)}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
      <div className="navi nav-main">
        <NavLink to="/" activeclassname="active" className="links">
          Home
        </NavLink>
        <NavLink to="/bollywood" activeclassname="active" className="links">
          Bollywood
        </NavLink>
        <NavLink to="/technology" activeclassname="active" className="links">
          Technology
        </NavLink>
        <NavLink to="/hollywood" activeclassname="active" className="links">
          Hollywood
        </NavLink>
        <NavLink to="/fitness" activeclassname="active" className="links">
          Fitness
        </NavLink>
        <NavLink to="/food" activeclassname="active" className="links">
          Food
        </NavLink>
      </div>
      <div
        className="navi nav-mobile"
        style={{ display: data ? "flex" : "none" }}
      >
        <NavLink
          to="/"
          activeclassname="active"
          className="links"
          onClick={() => handleNavClick()}
        >
          Home
        </NavLink>
        <NavLink
          to="/bollywood"
          activeclassname="active"
          className="links"
          onClick={() => handleNavClick()}
        >
          Bollywood
        </NavLink>
        <NavLink
          to="/technology"
          activeclassname="active"
          className="links"
          onClick={() => handleNavClick()}
        >
          Technology
        </NavLink>
        <NavLink
          to="/hollywood"
          activeclassname="active"
          className="links"
          onClick={() => handleNavClick()}
        >
          Hollywood
        </NavLink>
        <NavLink
          to="/fitness"
          activeclassname="active"
          className="links"
          onClick={() => handleNavClick()}
        >
          Fitness
        </NavLink>
        <NavLink
          to="/food"
          activeclassname="active"
          className="links"
          onClick={() => handleNavClick()}
        >
          Food
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
