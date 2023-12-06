import React from "react";
import "../Body/Bodycss.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Foodchain from "../Foodchain.js";
import abif from "../../images/useful_images_svg/abif.webp";
import nsrcel from "../../images/useful_images_svg/NSRCEL.webp";
import ficci from "../../images/useful_images_svg/FICCI.webp";
import thub from "../../images/useful_images_svg/Thub.webp";
import ikp from "../../images/useful_images_svg/IKP.webp";
import dpiit from "../../images/useful_images_svg/dpiit.webp";
import start_up from "../../images/useful_images_svg/start_up.svg";
import kharag from "../../images/useful_images_svg/IIT_Kharagpur.svg";
import banglore from "../../images/useful_images_svg/IIM_Bangalore_Logo.svg.svg";
import kar from "../../images/useful_images_svg/karnataka_logo.png";
import dst from "../../images/useful_images_svg/DST.png";
import elevate from "../../images/useful_images_svg/elevate_2023.svg";
import indigram from "../../images/useful_images_svg/Indigram.png";
import atman from "../../images/useful_images_svg/atman.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Htwmain from "../Htwmain.js";
import "../HtwBody/Htwbody.css";
import RunningPercentageCount from "../Count/count.js";
const Body = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="Body">
      <h4 className="text-top">How the technology works</h4>
      <div className="htw_home">
        <Htwmain />
      </div>

      <hr className="hr"></hr>
      <h4 className="text">Solutions for entire food supply chain</h4>
      <Foodchain />
      <hr className="hr"></hr>
      <RunningPercentageCount />

      <div className="awards">
        <h4 className="text">Awards and Recognitions</h4>
        <Carousel
          responsive={responsive}
          rewind={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          swipeable={true}
          draggable={true}
          arrows={true}
          slidesToSlide={1}
        >
          <div className="cour_item">
            <div className="row">
              <div className="col">
                <LazyLoadImage
                  src={abif}
                  width={"100px"}
                  height={"120px"}
                  alt="abif"
                  id="right"
                  loading="lazy"
                ></LazyLoadImage>
              </div>
              <div className="col left center_LazyLoadImage">
                <LazyLoadImage
                  src={kharag}
                  width={"100px"}
                  height={"120px"}
                  alt="abif"
                  id="left"
                  loading="lazy"
                ></LazyLoadImage>
              </div>
            </div>
            <p> Incubated with ABIF IIT Kharagpur</p>
          </div>
          <div className="cour_item">
            <div className="row">
              <div className="col">
                <LazyLoadImage
                  src={nsrcel}
                  width={"100px"}
                  height={"120px"}
                  alt="abif"
                  id="right"
                  loading="lazy"
                ></LazyLoadImage>
              </div>
              <div className="col left">
                <LazyLoadImage
                  src={banglore}
                  width={"100px"}
                  height={"120px"}
                  alt="abif"
                  id="left"
                  loading="lazy"
                ></LazyLoadImage>
              </div>
            </div>
            <p>Incubated with NSRCEL IIM Bangalore</p>
          </div>
          <div className="cour_item">
            {" "}
            <LazyLoadImage
              src={ficci}
              width={"120px"}
              height={"120px"}
              alt="abif"
              loading="lazy"
            ></LazyLoadImage>
            <p>FICCI IndusInd event Startup Hub</p>
          </div>
          <div className="cour_item">
            <LazyLoadImage
              src={thub}
              width={"120px"}
              height={"120px"}
              alt="abif"
              loading="lazy"
            ></LazyLoadImage>
            <p>Associated with T Hub</p>
          </div>
          <div className="cour_item">
            <LazyLoadImage
              src={ikp}
              width={"120px"}
              height={"120px"}
              alt="abif"
              loading="lazy"
            ></LazyLoadImage>
            <p>Incubated with IKP</p>
          </div>
          <div className="cour_item">
            <LazyLoadImage
              src={start_up}
              width={"150px"}
              height={"120px"}
              alt="abif"
              loading="lazy"
            ></LazyLoadImage>
            <p>Registered with Startup India</p>
          </div>
          <div className="cour_item">
            <LazyLoadImage
              src={dpiit}
              width={"120px"}
              height={"120px"}
              alt="abif"
              loading="lazy"
            ></LazyLoadImage>
            <p>Registered with DPIIT</p>
          </div>
          <div className="cour_item">
            <LazyLoadImage
              src={kar}
              width={"120px"}
              height={"120px"}
              alt="startup karnataka"
              loading="lazy"
            ></LazyLoadImage>
            <p>Registered with startup karnataka</p>
          </div>
          <div className="cour_item">
            <LazyLoadImage
              src={dst}
              width={"120px"}
              height={"120px"}
              alt="DST"
              loading="lazy"
            ></LazyLoadImage>
            <p>Grant winner from DST (Department of Science & Technology)</p>
          </div>
          <div className="cour_item">
            <LazyLoadImage
              src={indigram}
              width={"120px"}
              height={"120px"}
              alt="Indigram Labs"
              loading="lazy"
            ></LazyLoadImage>
            <p>Incubated with Indigram Labs</p>
          </div>
          <div className="cour_item">
            <LazyLoadImage
              src={elevate}
              width={"120px"}
              height={"120px"}
              alt="Indigram Labs"
              loading="lazy"
            ></LazyLoadImage>
            <p>Finalists in Elevate Karnataka</p>
          </div>
          <div className="cour_item">
            <LazyLoadImage
              src={atman}
              width={"120px"}
              height={"120px"}
              alt="Indigram Labs"
              loading="lazy"
            ></LazyLoadImage>
            <p>Winner of ATMAN 2023 Challenge</p>
          </div>
        </Carousel>
      </div>

      <hr className="hr"></hr>
    </div>
  );
};

export default Body;
