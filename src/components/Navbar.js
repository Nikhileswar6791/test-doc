import React, { useState } from "react";
import "./Navbarcss.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
const Navbar = () => {
  const [onclick, setclick] = useState(false);
  const handleclick = () => setclick(!onclick);
  return (
    <div className="header">
      <Link href="/">
        {" "}
        <img
          src={require("../images/DOCTORSPECTRA-1.jpeg")}
          width="150px"
          height="60px"
          alt="logo"
        />
      </Link>
      <ul className={onclick ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Solutions we offer">Solutions we offer</Link>
        </li>
        <li>
          <Link to="/how technology works">How the technology works</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
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
