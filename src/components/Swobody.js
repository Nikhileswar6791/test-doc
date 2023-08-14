import React from "react";
import "./Swobody.css";
import "bootstrap/dist/css/bootstrap.css";
import "./Bodycss.css";
import Foodchain from "./Foodchain";
const Swo_body = () => {
  return (
    <div>
      <div className="swo">
        <p>
          We provide solutions to check the health of your produce from the
          inside as well as outside via a non destructive and quick method
          leveraging the technology of Hyperspectral imaging and sharpness of AI
          and computer vision. This will help you make the quality of your
          produce (imported/ exported/ harvested) better and the quality check
          process organized, data based and faster. So, you can focus on
          giving/getting the best inputs and maximizing your profit and yield
          and minimizing wastage.
        </p>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <span className="top">
              <h4>
                <span className="or"> Measure</span> the quality of your produce
              </h4>
            </span>
            <img
              src={require("../images/images/swo-1.png")}
              alt="measure"
            ></img>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4>
              <span className="or">Identify</span> the quality issues
            </h4>
            <img
              className="down"
              src={require("../images/images/swo-2.png")}
              alt="ckeck"
            ></img>
          </div>
          <div className="col-lg-4 col-md-12">
            <h4>
              Take <span className="or">Action</span>
            </h4>
            <img
              className="down"
              src={require("../images/images/swo-3.png")}
              alt="action"
            ></img>
          </div>
        </div>
        <hr className="hr"></hr>
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
            <img
              src={require("../images/images/swo-4-1.jpg")}
              width={"300px"}
              height={"400px"}
              alt="bulk"
            ></img>
          </div>
          <div className="col-md-6">
            <h4>Unit level analysis</h4>
            <p>
              Unit level analysis can be run for sample sets for an in-depth
              analysis containing 10+ data metrics
            </p>
            <img
              src={require("../images/images/swo-5.jpg")}
              width={"220px"}
              height={"450px"}
              alt="unit"
            ></img>
          </div>
        </div>
        <hr className="hr"></hr>
        <h4 className="head" style={{ color: "#05386b", textAlign: "center" }}>
          We cater to the entire food supply chain
        </h4>
      </div>
      <div className="Body">
        {" "}
        <Foodchain />
      </div>
      <hr className="hr"></hr>
    </div>
  );
};

export default Swo_body;
