import React from "react";
import "./Bodycss.css";
import "bootstrap/dist/css/bootstrap.css";
import retailers from "../images/useful_images_svg/retailers.svg";
import growers from "../images/useful_images_svg/growers.svg";
import traders from "../images/useful_images_svg/traders.svg";
import food from "../images/useful_images_svg/food.svg";
import owner from "../images/useful_images_svg/owner.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Food_chain = () => {
  return (
    <div>
      <div className="row ">
        <div className="col container-1">
          <div className="ret">
            <LazyLoadImage src={retailers} alt="retailers" loading="lazy" />
          </div>
          <div className="text-1">
            <div className="inner">
              <h4>Retailers</h4>
            </div>
            <div className="inner inner-p">
              <p>
                Solutions for entire food supply chain Solutions for entire food
                supply chain Solutions for entire food supply chain
              </p>
            </div>
          </div>
        </div>
        <div className="l-250">
          <p>
            Solutions for entire food supply chain Solutions for entire food
            supply chain Solutions for entire food supply chain
          </p>
        </div>
        <div className="col container-1">
          <div className="ret">
            <LazyLoadImage
              src={require("../images/useful_images_svg/exporters.jpg")}
              alt="importers"
              loading="lazy"
            />
          </div>
          <div className="text-1">
            <div className="inner">
              <h4>Importers/Exporters</h4>
            </div>
            <div className="inner inner-p">
              <p>
                Solutions for entire food supply chain Solutions for entire food
                supply chain Solutions for entire food supply chain
              </p>
            </div>
          </div>
        </div>
        <div className="l-250">
          <p>
            Solutions for entire food supply chain Solutions for entire food
            supply chain Solutions for entire food supply chain
          </p>
        </div>
      </div>
      <div className="row ">
        <div className="col container-1">
          <div className="ret">
            <LazyLoadImage src={growers} alt="growers" loading="lazy" />
          </div>
          <div className="text-1">
            <div className="inner">
              <h4>Growers</h4>
            </div>
            <div className="inner inner-p">
              <p>
                Solutions for entire food supply chain Solutions for entire food
                supply chain Solutions for entire food supply chain
              </p>
            </div>
          </div>
        </div>
        <div className="l-250">
          <p>
            Solutions for entire food supply chain Solutions for entire food
            supply chain Solutions for entire food supply chain
          </p>
        </div>
        <div className="col container-1">
          <div className="ret">
            <LazyLoadImage src={traders} alt="traders" loading="lazy" />
          </div>
          <div className="text-1">
            <div className="inner">
              <h4>Wholesalers/Traders</h4>
            </div>
            <div className="inner inner-p">
              <p>
                Solutions for entire food supply chain Solutions for entire food
                supply chain Solutions for entire food supply chain
              </p>
            </div>
          </div>
        </div>
        <div className="l-250">
          <p>
            Solutions for entire food supply chain Solutions for entire food
            supply chain Solutions for entire food supply chain
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col container-1">
          <div className="ret">
            <LazyLoadImage src={food} alt="traders" loading="lazy" />
          </div>
          <div className="text-1">
            <div className="inner">
              <h4>Food chains/processors</h4>
            </div>
            <div className="inner inner-p">
              <p>
                Solutions for entire food supply chain Solutions for entire food
                supply chain Solutions for entire food supply chain
              </p>
            </div>
          </div>
        </div>
        <div className="l-250">
          <p>
            Solutions for entire food supply chain Solutions for entire food
            supply chain Solutions for entire food supply chain
          </p>
        </div>
        <div className="col container-1">
          <div className="ret">
            <LazyLoadImage src={owner} alt="traders" loading="lazy" />
          </div>
          <div className="text-1">
            <div className="inner">
              <h4>Manufacturers/Brand owners</h4>
            </div>
            <div className="inner inner-p">
              <p>
                Solutions for entire food supply chain Solutions for entire food
                supply chain Solutions for entire food supply chain
              </p>
            </div>
          </div>
        </div>
        <div className="l-250">
          <p>
            Solutions for entire food supply chain Solutions for entire food
            supply chain Solutions for entire food supply chain
          </p>
        </div>
      </div>
    </div>
  );
};

export default Food_chain;
