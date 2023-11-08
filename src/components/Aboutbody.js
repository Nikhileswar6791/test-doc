import React from "react";
import "./Aboutbody.css";
import about_1 from "../images/useful_images_svg/about-1.webp";
import about_2 from "../images/useful_images_svg/about-2.webp";
import about_3 from "../images/useful_images_svg/about-3.webp";
import about_4 from "../images/useful_images_svg/about-4.webp";
import about_5 from "../images/useful_images_svg/about-5.webp";
import about_6 from "../images/useful_images_svg/about-6.webp";
import about_7 from "../images/useful_images_svg/about-7.webp";
import top from "../images/useful_images_svg/_e2f2bf6f-d065-44ef-9453-c198cc2852e8.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SocialIcon } from "react-social-icons";
const Aboutbody = () => {
  return (
    <div className="about">
      {/* <img src={top} width={"100%"} height={"400vh"} /> */}
      <p>
        DoctorSpectra is a startup team of 7 highly-skilled professionals coming
        from a wide background of expertise in India, and united by their
        passion for technology & science and with an aim of reducing food
        wastage and optimizing the food supply chain in India. In addition to
        its in-house team, DoctorSpectra has built a network of external
        scientists, engineers and spectral imaging professionals around the
        world to expand its technical and commercial capabilities and to ensure
        we are in touch with the latest developments in this field. At
        DoctorSpectra, we are committed to driving innovations for scalable,
        fast and non destructive ways of doing food quality assessment.
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
              <p className="about-name">Rati Gugnani</p>
              <p> CEO and founder</p>
              <div className="linkedin">
                <SocialIcon
                  url="https://www.linkedin.com/in/rati-gugnani-18a42612/"
                  bgColor="white"
                  fgColor="#fca253"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-3 core">
            <div className="core-in">
              <LazyLoadImage
                src={about_2}
                alt="rati"
                loading="lazy"
              ></LazyLoadImage>
              <p className="about-name">Rakesh TP</p>
              <p>Angel Investor and Chief advisor – Data Science</p>
              <div className="linkedin">
                <SocialIcon
                  url="https://www.linkedin.com/in/rakesh-tp-ba981515/"
                  bgColor="white"
                  fgColor="#fca253"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-3 core">
            <div className="core-in">
              <LazyLoadImage
                src={about_3}
                alt="rati"
                loading="lazy"
              ></LazyLoadImage>
              <p className="about-name">Ankit Saxena</p>
              <p>Angel Investor and Chief advisor – Technology</p>
              <div className="linkedin">
                <SocialIcon
                  url="https://www.linkedin.com/in/ankitsaxena2/"
                  bgColor="white"
                  fgColor="#fca253"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-3 core">
            <div className="core-in">
              <LazyLoadImage
                src={about_4}
                alt="rati"
                loading="lazy"
              ></LazyLoadImage>
              <p className="about-name">Gayatri Mishra</p>
              <p>Technical Advisor - Spectral Imaging</p>
              <div className="linkedin">
                <SocialIcon
                  url="https://www.linkedin.com/in/dr-gayatri-mishra-7a409379/"
                  bgColor="white"
                  fgColor="#fca253"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4 intern">
            <div className="core-in">
              <LazyLoadImage
                src={about_5}
                alt="rati"
                loading="lazy"
              ></LazyLoadImage>
              <p className="about-name">Vaibhav Bisht</p>
              <p>ML Intern</p>
              <div className="linkedin">
                <SocialIcon
                  url="https://www.linkedin.com/in/vaibhav-bisht-865876148/"
                  bgColor="white"
                  fgColor="#fca253"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4 intern">
            <div className="core-in">
              <LazyLoadImage
                src={about_6}
                alt="rati"
                loading="lazy"
              ></LazyLoadImage>
              <p className="about-name">Nikhileswar Reddy P</p>
              <p>Web Development Intern</p>
              <div className="linkedin">
                <SocialIcon
                  url="https://www.linkedin.com/in/nikhileswar-reddy-pochimireddy-46682720b/"
                  bgColor="white"
                  fgColor="#fca253"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4 intern">
            <div className="core-in">
              <LazyLoadImage
                src={about_7}
                alt="rati"
                loading="lazy"
              ></LazyLoadImage>
              <p className="about-name">Dharani Samsritha</p>
              <p>App Development Intern</p>
              <div className="linkedin">
                <SocialIcon
                  url="https://www.linkedin.com/in/dharani-samsritha/"
                  bgColor="white"
                  fgColor="#fca253"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr"></hr>
      <div className="about-contact row">
        {/* <div className="col-md-6"> */}
        <h4 className="stHead">
          Would like to know more about us? Contact us!
        </h4>
        <h4 className="ndHead">
          We would love to have a chat with you. Wait no more, contact us today!
        </h4>
        {/* </div> */}
        {/* <div className="col-md-6"> */}
        <div className="button-div">
          <a href="/contact" className="button">
            Get in Touch
          </a>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Aboutbody;
