import React from "react";
import "./Htwbody.css";
import swo_5 from "../images/useful_images_svg/swo-5.webp";
import htw_1 from "../images/useful_images_svg/htw-2.webp";
import htw_2 from "../images/useful_images_svg/htw-3.png";
const Htwbody = () => {
  return (
    <div className="htw">
      <p>
        We use the novel technology of Hyperspectral imaging to check the
        freshness of your produce from the inside coupled with image processing
        which checks the exterior as well. This is layered further with
        artificial intelligence which processes the data and gives accurate
        results on specific contents of the fresh produce which further
        determines its freshness, days to get fully ripe and identify and alert
        for any unwanted contamination (if any).
      </p>

      <div className="row">
        <div className="col-lg-4 col-md-6">
          <span className="top">
            <h4>
              <span className="or">Capture </span> spectral as well as spatial
              scan of intended object
            </h4>
          </span>
          <img src={swo_5} alt="measure"></img>
        </div>
        <div className="col-lg-4 col-md-6">
          <h4>
            Layer the data with{" "}
            <span className="or">AI and computer vision</span>
          </h4>
          <img className="mid-htw" src={htw_1} alt="ckeck"></img>
        </div>
        <div className="col-lg-4 col-md-12">
          <h4>
            <span className="or">Analyse data</span> to identify key metrics
            like moisture, fructose, contaminants etc
          </h4>
          <img className="down-htw" src={htw_2} alt="action"></img>
        </div>
      </div>
      <hr className="hr"></hr>
    </div>
  );
};

export default Htwbody;
