import React from "react";
import "./Aboutbody.css";
import about_1 from "../../images/useful_images_svg/about-1.webp";
import about_2 from "../../images/useful_images_svg/anurag.jpg";
import about_3 from "../../images/useful_images_svg/about-3.webp";
import about_4 from "../../images/useful_images_svg/about-4.webp";
import about_5 from "../../images/useful_images_svg/about-5.webp";
import about_6 from "../../images/useful_images_svg/about-6.webp";
import about_7 from "../../images/useful_images_svg/about-7.webp";
import about_8 from "../../images/useful_images_svg/saikiran.jpg";
import about_9 from "../../images/useful_images_svg/sriram.jpg";
import about_10 from "../../images/useful_images_svg/shivam.jpg";
import about_11 from "../../images/useful_images_svg/rashmi.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Aboutbody = () => {
  return (
    <div className="about">
      <div className="about-header">
        {" "}
        <div className="overlay"></div>
        <div className="content">
          <h4>About Us</h4>
        </div>
      </div>

      <p>
        At Doctorspectra, our mission is clear, to be the catalyst for change in
        the fight against food loss, championing solutions that resonate from
        the fields of growers to the shelves of retailers. Together, we're
        building a future where the journey from farm to fork is marked by
        efficiency, sustainability, and a significant reduction in food loss.
      </p>
      <p>
        Ever pondered a world where assessing produce health is not only quick
        but also gentle? That's the future we're shaping at Doctorspectra. Are
        you ready to elevate your quality checks into a strategic advantage with
        our scalable, fast, and precise methods? Step into a future where
        efficiency aligns seamlessly with excellence in food quality assessment!
      </p>
      <p>
        DoctorSpectra is a startup team of highly-skilled professionals coming
        from a wide background of expertise and depth of experience in food &
        grocery sector across markets like India, Australia, United States, and
        Canada and united by their passion for technology & science and with an
        aim of reducing food wastage and optimizing the food supply chain in
        India. In addition to its in-house team, DoctorSpectra has built a
        network of external scientists, engineers and spectral imaging
        professionals around the world to expand its technical and commercial
        capabilities and to ensure we are in touch with the latest developments
        in this field. At DoctorSpectra, we are committed to driving innovations
        for scalable (enabling batch processing), time efficient, non
        destructive and no residue ways of doing food quality assessment
      </p>
      <p style={{ color: "#fca253", textAlign: "center", fontSize: "1.5rem" }}>
        A team united by the passion for the unseen!!
      </p>
      <hr className="hr"></hr>
      <div className="team">
        <div className="row">
          <div className="col-lg-3 core">
            <div className="core-in">
              <LazyLoadImage
                src={about_1}
                alt="rati"
                loading="lazy"
              ></LazyLoadImage>
              <p className="about-name"> Rati Gugnani</p>
              <p className="about-prof"> CEO and founder</p>
            </div>
          </div>
          <div className="col-lg-3 core">
            <div className="core-in">
              <LazyLoadImage
                src={about_2}
                alt="anurag"
                loading="lazy"
              ></LazyLoadImage>
              <p className="about-name"> Anurag Yadav</p>
              <p className="about-prof"> CTO and Co founder</p>
            </div>
          </div>

          <div className="col-lg-3 core">
            <div className="core-in">
              <LazyLoadImage
                src={about_3}
                alt="rati"
                loading="lazy"
              ></LazyLoadImage>
              <p className="about-name"> Ankit Saxena</p>
              <p className="about-prof">Angel Investor and Tech Advisor</p>
            </div>
          </div>

          <div className="col-lg-3 core">
            <div className="core-in">
              <LazyLoadImage
                src={about_4}
                alt="rati"
                loading="lazy"
              ></LazyLoadImage>
              <p className="about-name"> Gayatri Mishra</p>
              <p className="about-prof">Technical Advisor - Spectral Imaging</p>
            </div>
          </div>

          <div className="col-lg-3 intern">
            <div className="core-in">
              <LazyLoadImage
                src={about_5}
                alt="rati"
                loading="lazy"
              ></LazyLoadImage>
              <p className="about-name"> Vaibhav</p>
              <p className="about-prof">ML Intern</p>
            </div>
          </div>

          <div className="col-lg-3 intern">
            <div className="core-in">
              <LazyLoadImage
                src={about_6}
                alt="rati"
                loading="lazy"
              ></LazyLoadImage>
              <p className="about-name"> Nikhileswar Reddy</p>
              <p className="about-prof">Web Development Intern</p>
            </div>
          </div>

          <div className="col-lg-3 intern">
            <div className="core-in">
              <LazyLoadImage
                src={about_7}
                alt="rati"
                loading="lazy"
              ></LazyLoadImage>
              <p className="about-name"> Dharani Samsritha</p>
              <p className="about-prof">App Development Intern</p>
            </div>
          </div>
          <div className="col-lg-3 intern">
            <div className="core-in">
              <LazyLoadImage
                src={about_8}
                alt="saikiran"
                loading="lazy"
              ></LazyLoadImage>
              <p className="about-name"> Myla Venkata Sai Kiran</p>
              <p className="about-prof">App Development Intern</p>
            </div>
          </div>
          <div className="col-lg-4 intern">
            <div className="core-in">
              <LazyLoadImage
                src={about_9}
                alt="saikiran"
                loading="lazy"
              ></LazyLoadImage>
              <p className="about-name"> Sriram Mudragada</p>
              <p className="about-prof">App Development Intern</p>
            </div>
          </div>
          <div className="col-lg-4 intern">
            <div className="core-in">
              <LazyLoadImage
                src={about_10}
                alt="saikiran"
                loading="lazy"
              ></LazyLoadImage>
              <p className="about-name"> Shivam Kumar</p>
              <p className="about-prof">ML Intern</p>
            </div>
          </div>
          <div className="col-lg-4 intern">
            <div className="core-in">
              <LazyLoadImage
                src={about_11}
                alt="saikiran"
                loading="lazy"
              ></LazyLoadImage>
              <p className="about-name"> Rashmi Singh</p>
              <p className="about-prof">ML Intern</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr"></hr>
      <div className="about-contact row">
        <h4 className="stHead">
          Would like to know more about us? Contact us!
        </h4>
        <h4 className="ndHead">
          We would love to have a chat with you. Wait no more, contact us today!
        </h4>

        <div className="button-div">
          <a href="/contact" className="button">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutbody;
