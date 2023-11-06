import React from "react";
import "./Bodycss.css";
import "bootstrap/dist/css/bootstrap.css";
import retailers from "../images/useful_images_svg/retailers.svg";
import growers from "../images/useful_images_svg/growers.svg";
import traders from "../images/useful_images_svg/traders.svg";
import food from "../images/useful_images_svg/food.svg";
import owner from "../images/useful_images_svg/owner.svg";
const Food_chain = () => {
  return (
    <div>
      <div className="row ">
        <div className="col container-1">
          <div className="ret">
            <img src={retailers} alt="retailers" loading="lazy" />
          </div>
          <div className="text-1">
            <div className="inner">
              <h4>Retailers</h4>
            </div>
            <div className="inner inner-p">
              <p>
                Check the Quality of inbounded produce in real time for entire
                batch, pay as per quality and ship the best to your shoppers.
              </p>
            </div>
          </div>
        </div>
        <div className="l-250">
          <p>
            Check the Quality of inbounded produce in real time for entire
            batch, pay as per quality and ship the best to your shoppers.
          </p>
        </div>
        <div className="col container-1">
          <div className="ret">
            <img
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
                Check/Showcase the quality of your produce being
                imported/exported in real time for entire batch. Pay/Get paid
                basis quality. Showcase your organic produce in real time!
              </p>
            </div>
          </div>
        </div>
        <div className="l-250">
          <p>
            Check/Showcase the quality of your produce being imported/exported
            in real time for entire batch. Pay/Get paid basis quality. Showcase
            your organic produce in real time!
          </p>
        </div>
      </div>
      <div className="row ">
        <div className="col container-1">
          <div className="ret">
            <img src={growers} alt="growers" loading="lazy" />
          </div>
          <div className="text-1">
            <div className="inner">
              <h4>Growers/Breeders/ Farm owners</h4>
            </div>
            <div className="inner inner-p">
              <p>
                Check the quality of your produce post harvest and negotiate the
                price basis quality. Showcase your organic produce in real time!
              </p>
            </div>
          </div>
        </div>
        <div className="l-250">
          <p>
            Check the quality of your produce post harvest and negotiate the
            price basis quality. Showcase your organic produce in real time!
          </p>
        </div>
        <div className="col container-1">
          <div className="ret">
            <img src={traders} alt="traders" loading="lazy" />
          </div>
          <div className="text-1">
            <div className="inner">
              <h4>Wholesalers/Traders</h4>
            </div>
            <div className="inner inner-p">
              <p>
                Check the Quality of inbounded produce in real time for entire
                batch. Negotiate prices basis quality.
              </p>
            </div>
          </div>
        </div>
        <div className="l-250">
          <p>
            Check the Quality of inbounded produce in real time for entire
            batch. Negotiate prices basis quality.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col container-1">
          <div className="ret">
            <img src={food} alt="traders" loading="lazy" />
          </div>
          <div className="text-1">
            <div className="inner">
              <h4>Food chains/processors</h4>
            </div>
            <div className="inner inner-p">
              <p>
                Check the quality of inbounded produce in real time for entire
                batch, pay as per quality. Process, Pack and Sell the best.
              </p>
            </div>
          </div>
        </div>
        <div className="l-250">
          <p>
            Check the quality of inbounded produce in real time for entire
            batch, pay as per quality. Process, Pack and Sell the best.
          </p>
        </div>
        <div className="col container-1">
          <div className="ret">
            <img src={owner} alt="traders" loading="lazy" />
          </div>
          <div className="text-1">
            <div className="inner">
              <h4>Manufacturers/Brand owners</h4>
            </div>
            <div className="inner inner-p">
              <p>
                Check the Quality of inbounded produce in real time for entire
                batch, pay as per quality. Process the best and ship the best to
                your consumers. Showcase your product superiority in real time
                to shoppers as well as retailers.
              </p>
            </div>
          </div>
        </div>
        <div className="l-250">
          <p>
            Check the Quality of inbounded produce in real time for entire
            batch, pay as per quality. Process the best and ship the best to
            your consumers. Showcase your product superiority in real time to
            shoppers as well as retailers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Food_chain;
