import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./Slidercss.css";
const Slider = () => {
  return (
    <div className="slider" style={{ display: "block", width: "100%" }}>
      <h4>What do we Offer</h4>
      <Carousel variant="dark">
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={require("../images/images/image1.jpg")}
            alt="One"
          />
          <Carousel.Caption className="text-img">
            <h3>
              Non destructive way to check health of your fresh produce from the
              inside
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={require("../images/images/image3.jpg")}
            alt="Two"
          />
          <Carousel.Caption className="text-img">
            <h3>Scalable way of digitizing food quality</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={require("../images/images/image2.jpg")}
            alt="Three"
          />
          <Carousel.Caption className="text-img">
            <h3>Reduce Food Wastage</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={require("../images/images/image19.jpg")}
            alt="Four"
          />
          <Carousel.Caption className="text-img">
            <h3>Achieve fair pricing</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={require("../images/images/image4.jpg")}
            alt="Five"
          />
          <Carousel.Caption className="text-img">
            <h3>Assess your entire produce in batches</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={require("../images/images/image6.jpg")}
            alt="Six"
          />
          <Carousel.Caption className="text-img">
            <h3>
              Accurate, quantified and consistent way of assessing quality
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={require("../images/images/image5.jpg")}
            alt="Seven"
          />
          <Carousel.Caption className="text-img">
            <h3>Analyze quality of multiple commodities with one app</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr class="hr"></hr>
    </div>
  );
};

export default Slider;
