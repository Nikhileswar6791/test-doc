import React from "react";
import "./Bodycss.css";
import "bootstrap/dist/css/bootstrap.css";
const Body = () => {
  return (
    <div className="Body">
      <h4 className="text">How the technology works</h4>
      <div className="row Main">
        <div className="col-md-5 Col-1">
          <img
            src={require("../images/images/image8.png")}
            width={"100%"}
            height={"300px"}
            alt="Spectral Imaging"
          ></img>
          <p>
            We use the novel technology of Hyperspectral imaging to check the
            freshness of your produce from the inside coupled with image
            processing which checks the exterior as well.
          </p>
        </div>
        <div className="col-md-5 Col-2">
          <img
            src={require("../images/images/image7.png")}
            width={"100%"}
            height={"300px"}
            alt="Spectral Imaging"
          ></img>
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
          <img src = {require("../images/images/image8.png")} width={"100%"} alt = "Spectral Imaging"></img>
          </div>
          <div className='col-md-6 para'>
          <p>We use the novel technology of Hyperspectral imaging to check the freshness of your produce from the inside coupled with image processing which checks the exterior as well.</p>
          </div>
    </div>
    <div className='row row-body'>
    <div className='col-md-6'>
    <img src = {require("../images/images/image7.png")} width={"100%"} alt = "Spectral Imaging"></img>
    
    </div>
    <div className='col-md-6 para'>
    <p>This is layered further with artificial intelligence which processes the data and gives accurate results on specific contents of the fresh produce which further determines its freshness, days to get fully ripe and identify and alert for any unwanted contamination (if any).</p>
    </div>
</div> */}
      <hr className="hr"></hr>

      <h4 className="text">Solutions for entire food supply chain</h4>
      <div className="row ">
        <div className="col container-1">
          <div className="ret">
            <img
              src={require("../images/images/retailers.png")}
              alt="retailers"
            />
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
            <img
              src={require("../images/images/exporters.png")}
              alt="importers"
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
            <img src={require("../images/images/growers.png")} alt="growers" />
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
            <img src={require("../images/images/traders.png")} alt="traders" />
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
            <img src={require("../images/images/food.png")} alt="traders" />
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
            <img src={require("../images/images/owner.png")} alt="traders" />
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
      {/* <div className="container-1 ">
      <div className="ret">
        <img src={require('../images/images/retailers.png')} alt = "retailers"/>
      </div>
      <div className="text-1">
        <h4>This is a beautiful garden.</h4>
      </div>
    </div>
    <div className="container-1">
      <div className="ret">
        <img src={require('../images/images/exporters.png')} alt = "retailers"/>
      </div>
      <div className="text-1">
        <h4>This is a beautiful garden.</h4>
      </div>
    </div>
    <div className="container-1">
      <div className="ret">
        <img src={require('../images/images/growers.png')} alt = "retailers"/>
      </div>
      <div className="text-1">
        <h4>This is a beautiful garden.</h4>
      </div>
    </div>
    <div className="container-1">
      <div className="ret">
        <img src={require('../images/images/traders.png')} alt = "retailers"/>
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
            <img
              src={require("../images/images/abif.png")}
              width={"180px"}
              height={"180px"}
              alt="abif"
            ></img>
            <p> Incubated with ABIF IIT Kharagpur</p>
          </div>
          <div className="a-1 col-md-4">
            <img
              src={require("../images/images/NSRCEL.jpg")}
              width={"180px"}
              height={"180px"}
              alt="abif"
            ></img>
            <p>Incubated with NSRCEL IIM Bangalore</p>
          </div>
          <div className="a-1 col-md-4">
            <img
              src={require("../images/images/FICCI.jpg")}
              width={"180px"}
              height={"180px"}
              alt="abif"
            ></img>
            <p>FICCI IndusInd event Startup Hub</p>
          </div>
        </div>
      </div>
      <hr className="hr"></hr>
    </div>
  );
};

export default Body;
