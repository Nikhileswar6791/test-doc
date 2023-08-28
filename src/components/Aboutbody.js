import React from "react";
import "./Aboutbody.css";
import about_1 from "../images/useful_images_svg/about_1.png";
import about_2 from "../images/useful_images_svg/about_2.png";
import about_3 from "../images/useful_images_svg/about_3.png";
import about_4 from "../images/useful_images_svg/about_4.png";
import about_5 from "../images/useful_images_svg/about_5.png";
import about_6 from "../images/useful_images_svg/about_6.png";
import about_7 from "../images/useful_images_svg/about_7.png";
const Aboutbody = () => {
  return (
    <div className="about">
      <p>
        DoctorSpectra is an early stage startup team of 7 highly-skilled
        professionals coming from a wide background of expertise in India, and
        united by their passion for technology & science and with an aim of
        reducing food wastage and optimizing the food supply chain in India. In
        addition to its in-house team, DoctorSpectra has built a network of
        external scientists, engineers and spectral imaging professionals around
        the world to expand its technical and commercial capabilities and to
        ensure we are in touch with the latest developments in this field. At
        DoctorSpectra, we are committed to driving innovations for scalable,
        fast and non destructive ways of doing food quality assessment.
      </p>
      <p style={{ color: "#fca253", textAlign: "center" }}>
        A team united by the passion for the unseen!!
      </p>
      <hr className="hr"></hr>
      <div className="team">
        <div className="row">
          <div className="col-md-3">
            <img src={about_1} alt="rati"></img>
            <p className="about-name">Rati Gugnani</p>
            <p> CEO and founder</p>
          </div>
          <div className="col-md-3">
            <img src={about_2} alt="rati"></img>
            <p className="about-name">Rakesh TP</p>
            <p>Angel Investor and Chief advisor – Data Science</p>
          </div>
          <div className="col-md-3">
            <img src={about_3} alt="rati"></img>
            <p className="about-name">Ankit Saxena</p>
            <p>Angel Investor and Chief advisor – Technology</p>
          </div>
          <div className="col-md-3">
            <img src={about_4} alt="rati"></img>
            <p className="about-name">Gayatri Mishra</p>
            <p>Technical Advisor - Spectral Imaging</p>
          </div>
          <div className="col-md-4 intern">
            <img src={about_5} alt="rati"></img>
            <p className="about-name">Vaibhav Bisht</p>
            <p>ML Intern</p>
          </div>
          <div className="col-md-4 intern">
            <img src={about_6} alt="rati"></img>
            <p className="about-name">Nikhileswar Reddy P</p>
            <p>Web Development Intern</p>
          </div>
          <div className="col-md-4 intern">
            <img src={about_7} alt="rati"></img>
            <p className="about-name">Dharani Samsritha</p>
            <p>App Development Intern</p>
          </div>
        </div>
      </div>
      <hr className="hr"></hr>
      <div className="about-contact row">
        <div className="col-md-6">
          <h4 className="stHead">
            Would like to know more about us? Contact us!
          </h4>
          <h4 className="ndHead">
            We would love to have a chat with you. Wait no more, contact us
            today!
          </h4>
        </div>
        <div className="col-md-6">
          <div className="button-div">
            <a href="/contact" className="button">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutbody;
