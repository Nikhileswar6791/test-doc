import React from "react";
import "./Bodycss.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Foodchain from "./Foodchain";
import im_8 from "../images/useful_images_svg/_b5d4665c-445e-4ef2-9e0d-3749d0b307e7.webp";
import im_7 from "../images/useful_images_svg/ai.webp";
import abif from "../images/useful_images_svg/abif.webp";
import nsrcel from "../images/useful_images_svg/NSRCEL.webp";
import ficci from "../images/useful_images_svg/FICCI.webp";
import thub from "../images/useful_images_svg/Thub.webp";
import ikp from "../images/useful_images_svg/IKP.webp";
import dpiit from "../images/useful_images_svg/dpiit.webp";
import start_up from "../images/useful_images_svg/start_up.png";
import kharag from "../images/useful_images_svg/IIT_Kharagpur.svg";
import banglore from "../images/useful_images_svg/IIM_Bangalore_Logo.svg.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Body = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
      <h4 className="text">How the technology works</h4>
      <div className="row Main">
        <div className="col-md-5 Col-1">
          <LazyLoadImage
            src={im_8}
            width={"60%"}
            height={"60%"}
            alt="Spectral Imaging"
            loading="lazy"
          ></LazyLoadImage>
          {/* <div className="LazyLoadImage-wrapper"></div> */}
          <p>
            We use the novel technology of Hyperspectral imaging to check the
            freshness of your produce from the inside coupled with image
            processing which checks the exterior as well.
          </p>
        </div>
        <div className="col-md-5 Col-2">
          <LazyLoadImage
            src={im_7}
            width={"60%"}
            height={"60%"}
            alt="Spectral Imaging"
            loading="lazy"
          ></LazyLoadImage>
          {/* <div className="LazyLoadImage-wrapper"></div> */}
          <p>
            This is layered further with artificial intelligence which processes
            the data and gives accurate results on specific contents of the
            fresh produce which further determines its freshness, days to get
            fully ripe and identify and alert for any unwanted contamination (if
            any).
          </p>
        </div>
      </div>
      {/* <div className='row row-body'>
          <div className='col-md-6 '>
          <LazyLoadImage src = {require("../images/images/image8.jpg")} width={"100%"} alt = "Spectral Imaging"></LazyLoadImage>
          </div>
          <div className='col-md-6 para'>
          <p>We use the novel technology of Hyperspectral imaging to check the freshness of your produce from the inside coupled with image processing which checks the exterior as well.</p>
          </div>
    </div>
    <div className='row row-body'>
    <div className='col-md-6'>
    <LazyLoadImage src = {require("../images/images/image7.jpg")} width={"100%"} alt = "Spectral Imaging"></LazyLoadImage>
    
    </div>
    <div className='col-md-6 para'>
    <p>This is layered further with artificial intelligence which processes the data and gives accurate results on specific contents of the fresh produce which further determines its freshness, days to get fully ripe and identify and alert for any unwanted contamination (if any).</p>
    </div>
</div> */}
      <hr className="hr"></hr>
      <h4 className="text">Solutions for entire food supply chain</h4>
      <Foodchain />
      {/* <div className="container-1 ">
      <div className="ret">
        <LazyLoadImage src={require('../images/images/retailers.jpg')} alt = "retailers"/>
      </div>
      <div className="text-1">
        <h4>This is a beautiful garden.</h4>
      </div>
    </div>
    <div className="container-1">
      <div className="ret">
        <LazyLoadImage src={require('../images/images/exporters.jpg')} alt = "retailers"/>
      </div>
      <div className="text-1">
        <h4>This is a beautiful garden.</h4>
      </div>
    </div>
    <div className="container-1">
      <div className="ret">
        <LazyLoadImage src={require('../images/images/growers.jpg')} alt = "retailers"/>
      </div>
      <div className="text-1">
        <h4>This is a beautiful garden.</h4>
      </div>
    </div>
    <div className="container-1">
      <div className="ret">
        <LazyLoadImage src={require('../images/images/traders.jpg')} alt = "retailers"/>
      </div>
      <div className="text-1">
        <h4>This is a beautiful garden.</h4>
      </div>
    </div> */}
      <hr className="hr"></hr>
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
          // transitionDuration={1050}
          // customTransition="transform 1050ms ease-in-out"
          slidesToSlide={1}
        >
          <div className="cour_item">
            <div className="row">
              <div className="col">
                <LazyLoadImage
                  src={abif}
                  width={"170px"}
                  height={"170px"}
                  alt="abif"
                  id="right"
                ></LazyLoadImage>
              </div>
              <div className="col left center_LazyLoadImage">
                <LazyLoadImage
                  src={kharag}
                  width={"130px"}
                  height={"130px"}
                  alt="abif"
                  id="left"
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
                  width={"170px"}
                  height={"170px"}
                  alt="abif"
                  id="right"
                ></LazyLoadImage>
              </div>
              <div className="col left">
                <LazyLoadImage
                  src={banglore}
                  width={"170px"}
                  height={"170px"}
                  alt="abif"
                  id="left"
                ></LazyLoadImage>
              </div>
            </div>
            <p>Incubated with NSRCEL IIM Bangalore</p>
          </div>
          <div className="cour_item">
            {" "}
            <LazyLoadImage
              src={ficci}
              width={"170px"}
              height={"170px"}
              alt="abif"
            ></LazyLoadImage>
            <p>FICCI IndusInd event Startup Hub</p>
          </div>
          <div className="cour_item">
            <LazyLoadImage
              src={thub}
              width={"170px"}
              height={"170px"}
              alt="abif"
            ></LazyLoadImage>
            <p>Incubated with T hub</p>
          </div>
          <div className="cour_item">
            <LazyLoadImage
              src={ikp}
              width={"170px"}
              height={"170px"}
              alt="abif"
            ></LazyLoadImage>
            <p>Incubated with IKP Genome Valley, Hyderabad</p>
          </div>
          <div className="cour_item">
            <LazyLoadImage
              src={start_up}
              width={"200px"}
              height={"160px"}
              alt="abif"
            ></LazyLoadImage>
            <p>Incubated with startupindia</p>
          </div>
          <div className="cour_item">
            <LazyLoadImage
              src={dpiit}
              width={"170px"}
              height={"170px"}
              alt="abif"
            ></LazyLoadImage>
            <p>Incubated with DPIIT</p>
          </div>
        </Carousel>
      </div>
      {/* <div className="awards">
        <h4 className="text">Awards and Recognitions</h4>
        <div className="row">
          <div className="a-1 col-md-4">
            <LazyLoadImage src={abif} width={"180px"} height={"180px"} alt="abif"></LazyLoadImage>
            <p> Incubated with ABIF IIT Kharagpur</p>
          </div>
          <div className="a-1 col-md-4">
            <LazyLoadImage src={nsrcel} width={"180px"} height={"180px"} alt="abif"></LazyLoadImage>
            <p>Incubated with NSRCEL IIM Bangalore</p>
          </div>
          <div className="a-1 col-md-4">
            <LazyLoadImage src={ficci} width={"180px"} height={"180px"} alt="abif"></LazyLoadImage>
            <p>FICCI IndusInd event Startup Hub</p>
          </div>
        </div>
      </div> */}
      <hr className="hr"></hr>
    </div>
  );
};

export default Body;
