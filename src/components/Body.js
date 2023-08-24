import React from "react";
import "./Bodycss.css";
import "bootstrap/dist/css/bootstrap.css";
import Foodchain from "./Foodchain";
import im_8 from "../images/useful_images_svg/image8.svg";
import im_7 from "../images/useful_images_svg/image7.svg";
import abif from "../images/useful_images_svg/abif.svg";
import nsrcel from "../images/useful_images_svg/NSRCEL.svg";
import ficci from "../images/useful_images_svg/FICCI.svg";
const Body = () => {
  return (
    <div className="Body">
      <h4 className="text">How the technology works</h4>
      <div className="row Main">
        <div className="col-md-5 Col-1">
          <img
            src={im_8}
            width={"100%"}
            height={"50%"}
            alt="Spectral Imaging"
          ></img>
          {/* <div className="img-wrapper"></div> */}
          <p>
            We use the novel technology of Hyperspectral imaging to check the
            freshness of your produce from the inside coupled with image
            processing which checks the exterior as well.
          </p>
        </div>
        <div className="col-md-5 Col-2">
          <img
            src={im_7}
            width={"100%"}
            height={"50%"}
            alt="Spectral Imaging"
          ></img>
          {/* <div className="img-wrapper"></div> */}
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
          <img src = {require("../images/images/image8.jpg")} width={"100%"} alt = "Spectral Imaging"></img>
          </div>
          <div className='col-md-6 para'>
          <p>We use the novel technology of Hyperspectral imaging to check the freshness of your produce from the inside coupled with image processing which checks the exterior as well.</p>
          </div>
    </div>
    <div className='row row-body'>
    <div className='col-md-6'>
    <img src = {require("../images/images/image7.jpg")} width={"100%"} alt = "Spectral Imaging"></img>
    
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
        <img src={require('../images/images/retailers.jpg')} alt = "retailers"/>
      </div>
      <div className="text-1">
        <h4>This is a beautiful garden.</h4>
      </div>
    </div>
    <div className="container-1">
      <div className="ret">
        <img src={require('../images/images/exporters.jpg')} alt = "retailers"/>
      </div>
      <div className="text-1">
        <h4>This is a beautiful garden.</h4>
      </div>
    </div>
    <div className="container-1">
      <div className="ret">
        <img src={require('../images/images/growers.jpg')} alt = "retailers"/>
      </div>
      <div className="text-1">
        <h4>This is a beautiful garden.</h4>
      </div>
    </div>
    <div className="container-1">
      <div className="ret">
        <img src={require('../images/images/traders.jpg')} alt = "retailers"/>
      </div>
      <div className="text-1">
        <h4>This is a beautiful garden.</h4>
      </div>
    </div> */}

      <hr className="hr"></hr>
      <div className="awards">
        <h4 className="text">Awards and Recognitions</h4>
        <div className="row">
          <div className="a-1 col-md-4">
            <img src={abif} width={"180px"} height={"180px"} alt="abif"></img>
            <p> Incubated with ABIF IIT Kharagpur</p>
          </div>
          <div className="a-1 col-md-4">
            <img src={nsrcel} width={"180px"} height={"180px"} alt="abif"></img>
            <p>Incubated with NSRCEL IIM Bangalore</p>
          </div>
          <div className="a-1 col-md-4">
            <img src={ficci} width={"180px"} height={"180px"} alt="abif"></img>
            <p>FICCI IndusInd event Startup Hub</p>
          </div>
        </div>
      </div>
      <hr className="hr"></hr>
    </div>
  );
};

export default Body;
