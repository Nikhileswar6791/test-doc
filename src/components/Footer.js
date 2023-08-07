import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Footercss.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row row-f">
        <div className="col-md-4 col-sm-4">
          <div className="row row-f logo">
            <Link to="/">
              <img
                src={require("../images/DOCTORSPECTRA-1.jpeg")}
                width="100px"
                height="30px"
                alt="logo"
              />
            </Link>
          </div>
          <div className="row row-f">
            <p>India</p>
          </div>
          <div className="row row-f">
            <Link to="/contact">
              <p>Contact us</p>
            </Link>
          </div>
        </div>
        <div className="empty col-md-4">
          <div className="row row-f"></div>
          <div className="row row-f"></div>
          <div className="row row-f"></div>
        </div>
        <div className="col-sm-4 col-md-2">
          <div className="row row-f ">
            <Link to="/blogs">
              <p>Blogs</p>
            </Link>
          </div>
          <div className="row row-f"></div>
          <div className="row row-f"></div>
        </div>
        <div className="col-md-2 col-sm-4">
          <div className="row row-f">
            <Link to="/about">
              <p>About Us</p>
            </Link>
          </div>
          <div className="row row-f">
            <Link to="/">
              <p>Our Story</p>
            </Link>
          </div>
          <div className="row row-f">
            <Link to="/">
              <p>Our Partners</p>
            </Link>
          </div>
        </div>
        <div className="row row-f copy">
          <p>Copyright {String.fromCodePoint(0x00a9)} 2022 Doctorspectra</p>
        </div>
      </div>
      <div className="row row-f illu">
        <div className="col-md-8"></div>
        <div className="col-md-4">
          <p>
            Illustrations by <a href="https://icons8.com/">Icons8</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
