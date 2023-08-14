import React, { useState } from "react";
import "./Navbarcss.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [onclick, setclick] = useState(false);
  const handleclick = () => setclick(!onclick);
  return (
    <div className="header">
      <NavLink href="/">
        {" "}
        <img
          src={require("../images/DOCTORSPECTRA-1.jpeg")}
          width="150px"
          height="60px"
          alt="logo"
        />
      </NavLink>
      <ul className={onclick ? "nav-menu active" : "nav-menu"}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "acctive" : "")}
          >
            <span>Home</span>
            <div></div>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "acctive" : "")}
            to="/Solutions we offer"
          >
            <span>Solutions we offer</span>
            <div></div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/how technology works">
            <span>How the technology works</span>
            <div></div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <span>About</span>
            <div></div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <span>Contact Us</span>
            <div></div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs">
            <span>Blogs</span>
            <div></div>
          </NavLink>
        </li>
      </ul>
      <div className="icon" onClick={handleclick}>
        {onclick ? (
          <FaTimes size={30} style={{ color: "white" }} />
        ) : (
          <FaBars size={30} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
