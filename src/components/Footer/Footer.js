import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Footercss.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { SocialIcon } from "react-social-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row row-f main_row">
        <div className="col-md-4 col-sm-4">
          <div className="row row-f logo">
            <Link to="/">
              <LazyLoadImage
                src={logo}
                width="150px"
                height="80px"
                alt="logo"
              />
            </Link>
          </div>
          <div className="row row-f">
            <p>contactus@doctorspectra.com</p>
          </div>
          <div className="row row-f">
            <p>India</p>
          </div>
          <div className="row row-f">
            {" "}
            <Link to="/contact">
              <p>Contact us</p>
            </Link>
          </div>
          <div className="row row-f">
            {" "}
            <Link to="/">
              <p>Careers</p>
            </Link>
          </div>
          {/* <div className="row row-f">
            <Link to="/contact">
              <p>Contact us</p>
            </Link>
          </div> */}
        </div>
        {/* <div className="col-md-3 col-sm-6">
          <div className="row row-f row-head">
            <p>Company</p>
          </div>
          <div className="row row-f">
            <p>House 10</p>
            <p>Prestige Oasis, Rajanukunte</p>
            <p>Dodaballapur road, Banglore</p>
            <p>Karnataka, 560064, India</p>
          </div>
        </div> */}
        <div className="col-md-4">
          <div className="row row-f row-head">
            <p>Links</p>
          </div>
          <div className="row row-f">
            <Link to="/blogs">
              <p>Blogs</p>
            </Link>
          </div>
          <div className="row row-f">
            {" "}
            <Link to="/contact">
              <p>Contact us</p>
            </Link>
          </div>
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
        <div className="col-sm-4 col-md-4">
          <div className="row row-f row-head">
            <p>Follow Us</p>
          </div>
          <div className="row">
            <div className="icons">
              <SocialIcon
                url="https://www.linkedin.com/company/doctorspectra/"
                bgColor="white"
                fgColor="#fca253"
                className="make-left"
              />
              <SocialIcon
                url="https://www.instagram.com/doctorspectra/"
                bgColor="white"
                fgColor="#fca253"
              />
            </div>
          </div>
          <div className="row row-f"></div>
          <div className="row row-f"></div>
        </div>
      </div>
      <div className="row row-c copy">
        <p>Copyright {String.fromCodePoint(0x00a9)} 2022 Doctorspectra</p>
      </div>
      <div className="row row-c illu">
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
