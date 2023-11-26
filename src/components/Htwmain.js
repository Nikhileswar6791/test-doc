import React from "react";
import "./HtwBody/Htwbody.css";
import swo_5 from "../images/useful_images_svg/swo-5.webp";
import htw_1 from "../images/useful_images_svg/htw-2.webp";
import htw_2 from "../images/useful_images_svg/htw-3.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Htw_main = () => {
  return (
    <div className="htw_main">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <span className="top">
            <h4>
              <span className="or">Capture </span> spectral as well as spatial
              scan of intended object
            </h4>
          </span>
          <LazyLoadImage src={swo_5} alt="measure"></LazyLoadImage>
        </div>
        <div className="col-lg-4 col-md-6">
          <h4>
            Layer the data with{" "}
            <span className="or">AI and computer vision</span>
          </h4>
          <LazyLoadImage
            className="mid-htw"
            src={htw_1}
            alt="ckeck"
          ></LazyLoadImage>
        </div>
        <div className="col-lg-4 col-md-12">
          <h4>
            <span className="or">Analyse data</span> to identify key metrics
            like freshness, moisture, fructose, contaminants etc
          </h4>
          <LazyLoadImage
            className="down-htw"
            src={htw_2}
            alt="action"
          ></LazyLoadImage>
        </div>
      </div>
    </div>
  );
};

export default Htw_main;
