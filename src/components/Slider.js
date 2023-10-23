import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./Slidercss.css";
import im_1 from "../images/useful_images_svg/image1.webp";
import im_2 from "../images/useful_images_svg/image2.webp";
import im_3 from "../images/useful_images_svg/image3.png";
import im_19 from "../images/useful_images_svg/_52a1b0db-7105-4200-95ee-4266911ed00c.jpeg";
import im_4 from "../images/useful_images_svg/_c9157b12-0007-419c-8c2f-69a29d72cb07.jpeg";
import im_6 from "../images/useful_images_svg/image6.webp";
import im_5 from "../images/useful_images_svg/image5-bndOsaotH6-transformed.webp";
const Slider = () => {
  return (
    <div className="slider" style={{ display: "block", width: "100%" }}>
      <h4>What do we Offer</h4>
      <Carousel variant="dark">
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={im_1} alt="One" />
          <Carousel.Caption className="text-img">
            <h3>
              Non destructive way to check health of your fresh produce from the
              inside
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={im_3} alt="Two" />
          <Carousel.Caption className="text-img">
            <h3>Scalable way of digitizing food quality</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={im_2} alt="Three" />
          <Carousel.Caption className="text-img">
            <h3>Reduce Food Wastage</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={im_19} alt="Four" />
          <Carousel.Caption className="text-img">
            <h3>Achieve fair pricing</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={im_4} alt="Five" />
          <Carousel.Caption className="text-img">
            <h3>Assess your entire produce in batches</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={im_6} alt="Six" />
          <Carousel.Caption className="text-img">
            <h3>
              Accurate, quantified and consistent way of assessing quality
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={im_5} alt="Seven" />
          <Carousel.Caption className="text-img">
            <h3>Analyze quality of multiple commodities with one app</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr className="hr"></hr>
    </div>
  );
};

export default Slider;
