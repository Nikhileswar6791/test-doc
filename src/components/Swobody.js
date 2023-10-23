import React from "react";
import "./Swobody.css";
import "bootstrap/dist/css/bootstrap.css";
import "./Bodycss.css";
import Foodchain from "./Foodchain";
import "../styles.css";
import swo_1 from "../images/useful_images_svg/swo-1.webp";
import swo_2 from "../images/useful_images_svg/swo-2.webp";
import swo_3 from "../images/useful_images_svg/swo-3.webp";
import swo_4 from "../images/useful_images_svg/swo-4.svg";
import swo_5 from "../images/useful_images_svg/swo-5.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Swo_body = () => {
  return (
    <div>
      <div className="swo">
        <p>
          We provide solutions to check the health of your produce from the
          inside as well as outside via a non destructive and quick method. This
          will help you make the quality of your produce (imported/ exported/
          harvested) better and the quality check process organized, data based
          and faster. So, you can focus on giving/getting the best inputs and
          maximizing your profit and yield and minimizing wastage.
        </p>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <span className="top">
              <h4>
                <span className="or"> Measure</span> the quality of your produce
              </h4>
            </span>
            <LazyLoadImage src={swo_1} alt="measure"></LazyLoadImage>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4>
              <span className="or">Identify</span> the quality issues
            </h4>
            <LazyLoadImage
              className="mid"
              src={swo_2}
              alt="ckeck"
            ></LazyLoadImage>
          </div>
          <div className="col-lg-4 col-md-12">
            <h4>
              Take <span className="or">Action</span>
            </h4>
            <LazyLoadImage
              className="down"
              src={swo_3}
              alt="action"
            ></LazyLoadImage>
          </div>
        </div>
        <hr className="hr"></hr>
        <div className="space-60"></div>
        <h4 className="head" style={{ color: "#05386b", textAlign: "center" }}>
          We can help you assess your produce at a batch level as well as at a
          unit level
        </h4>

        <div className="row types">
          <div className="col-md-6">
            <h4>Batch level analysis with a conveyor belt mechanism</h4>
            <p>
              Depending on amount of data to be captured, you can analyse
              produce at different speeds. Example – If you require 2 key
              metrics to be analyse, you can scan 20 units per second.
            </p>
            <LazyLoadImage
              src={swo_4}
              width={"300px"}
              height={"400px"}
              alt="bulk"
            ></LazyLoadImage>
          </div>
          <div className="col-md-6">
            <h4>Unit level analysis</h4>
            <p>
              Unit level analysis can be run for sample sets for an in-depth
              analysis containing 10+ data metrics
            </p>
            <LazyLoadImage
              src={swo_5}
              width={"220px"}
              height={"450px"}
              alt="unit"
            ></LazyLoadImage>
          </div>
        </div>
        <hr className="hr"></hr>
        <div className="space-60"></div>
        <h4 className="head" style={{ color: "#05386b", textAlign: "center" }}>
          We cater to the entire food supply chain
        </h4>
      </div>
      <div className="Body">
        {" "}
        <Foodchain />
      </div>
      <hr className="hr"></hr>
      <div className="space-60"></div>
    </div>
  );
};

export default Swo_body;
